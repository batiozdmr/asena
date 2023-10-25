/*!
  * Bootstrap v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function () {
    "use strict";
    const t = new Map, e = {
            set(e, i, n) {
                t.has(e) || t.set(e, new Map);
                const s = t.get(e);
                s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
            }, get: (e, i) => t.has(e) && t.get(e).get(i) || null, remove(e, i) {
                if (!t.has(e)) return;
                const n = t.get(e);
                n.delete(i), 0 === n.size && t.delete(e)
            }
        }, i = "transitionend",
        n = t => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, ((t, e) => `#${CSS.escape(e)}`))), t),
        s = t => {
            t.dispatchEvent(new Event(i))
        }, o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null,
        a = t => {
            if (!o(t) || 0 === t.getClientRects().length) return !1;
            const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i) return !1;
                if (null === e) return !1
            }
            return e
        },
        l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        c = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
        }, h = () => {
        }, d = t => {
            t.offsetHeight
        }, u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f = [],
        p = () => "rtl" === document.documentElement.dir, m = t => {
            var e;
            e = () => {
                const e = u();
                if (e) {
                    const i = t.NAME, n = e.fn[i];
                    e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
                }
            }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", (() => {
                for (const t of f) t()
            })), f.push(e)) : e()
        }, g = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i, _ = (t, e, n = !0) => {
            if (!n) return void g(t);
            const o = (t => {
                if (!t) return 0;
                let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
                const n = Number.parseFloat(e), s = Number.parseFloat(i);
                return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
            })(e) + 5;
            let r = !1;
            const a = ({target: n}) => {
                n === e && (r = !0, e.removeEventListener(i, a), g(t))
            };
            e.addEventListener(i, a), setTimeout((() => {
                r || s(e)
            }), o)
        }, b = (t, e, i, n) => {
            const s = t.length;
            let o = t.indexOf(e);
            return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))])
        }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {};
    let E = 1;
    const T = {mouseenter: "mouseover", mouseleave: "mouseout"},
        C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function O(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++
    }

    function x(t) {
        const e = O(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e]
    }

    function k(t, e, i = null) {
        return Object.values(t).find((t => t.callable === e && t.delegationSelector === i))
    }

    function L(t, e, i) {
        const n = "string" == typeof e, s = n ? i : e || i;
        let o = I(t);
        return C.has(o) || (o = t), [n, s, o]
    }

    function S(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = L(e, i, n);
        if (e in T) {
            const t = t => function (e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            r = t(r)
        }
        const l = x(t), c = l[a] || (l[a] = {}), h = k(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, "")), u = o ? function (t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for (let {target: r} = s; r && r !== this; r = r.parentNode) for (const a of o) if (a === r) return P(s, {delegateTarget: r}), n.oneOff && N.off(t, s.type, e, i), i.apply(r, [s])
            }
        }(t, i, r) : function (t, e) {
            return function i(n) {
                return P(n, {delegateTarget: t}), i.oneOff && N.off(t, n.type, e), e.apply(t, [n])
            }
        }(t, r);
        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
    }

    function D(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
    }

    function $(t, e, i, n) {
        const s = e[i] || {};
        for (const [o, r] of Object.entries(s)) o.includes(n) && D(t, e, i, r.callable, r.delegationSelector)
    }

    function I(t) {
        return t = t.replace(y, ""), T[t] || t
    }

    const N = {
        on(t, e, i, n) {
            S(t, e, i, n, !1)
        }, one(t, e, i, n) {
            S(t, e, i, n, !0)
        }, off(t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const i of Object.keys(l)) $(t, l, i, e.slice(1));
                for (const [i, n] of Object.entries(c)) {
                    const s = i.replace(w, "");
                    a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector)
                }
            } else {
                if (!Object.keys(c).length) return;
                D(t, l, r, o, s ? i : null)
            }
        }, trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = u();
            let s = null, o = !0, r = !0, a = !1;
            e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            const l = P(new Event(e, {bubbles: o, cancelable: !0}), i);
            return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
        }
    };

    function P(t, e = {}) {
        for (const [i, n] of Object.entries(e)) try {
            t[i] = n
        } catch (e) {
            Object.defineProperty(t, i, {configurable: !0, get: () => n})
        }
        return t
    }

    function M(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }

    function j(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }

    const F = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${j(e)}`, i)
        }, removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${j(e)}`)
        }, getDataAttributes(t) {
            if (!t) return {};
            const e = {}, i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const n of i) {
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = M(t.dataset[n])
            }
            return e
        }, getDataAttribute: (t, e) => M(t.getAttribute(`data-bs-${j(e)}`))
    };

    class H {
        static get Default() {
            return {}
        }

        static get DefaultType() {
            return {}
        }

        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }

        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        _configAfterMerge(t) {
            return t
        }

        _mergeConfigObj(t, e) {
            const i = o(e) ? F.getDataAttribute(e, "config") : {};
            return {...this.constructor.Default, ..."object" == typeof i ? i : {}, ...o(e) ? F.getDataAttributes(e) : {}, ..."object" == typeof t ? t : {}}
        }

        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [n, s] of Object.entries(e)) {
                const e = t[n],
                    r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
            }
            var i
        }
    }

    class W extends H {
        constructor(t, i) {
            super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this))
        }

        dispose() {
            e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null
        }

        _queueCallback(t, e, i = !0) {
            _(t, e, i)
        }

        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        static getInstance(t) {
            return e.get(r(t), this.DATA_KEY)
        }

        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }

        static get VERSION() {
            return "5.3.1"
        }

        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }

        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }

        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }

    const B = t => {
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
        }
        return n(e)
    }, z = {
        find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
        children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
        parents(t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for (; n;) i.push(n), n = n.parentNode.closest(e);
            return i
        },
        prev(t, e) {
            let i = t.previousElementSibling;
            for (; i;) {
                if (i.matches(e)) return [i];
                i = i.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let i = t.nextElementSibling;
            for (; i;) {
                if (i.matches(e)) return [i];
                i = i.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
            return this.find(e, t).filter((t => !l(t) && a(t)))
        },
        getSelectorFromElement(t) {
            const e = B(t);
            return e && z.findOne(e) ? e : null
        },
        getElementFromSelector(t) {
            const e = B(t);
            return e ? z.findOne(e) : null
        },
        getMultipleElementsFromSelector(t) {
            const e = B(t);
            return e ? z.find(e) : []
        }
    }, R = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
        N.on(document, i, `[data-bs-dismiss="${n}"]`, (function (i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
            const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
            t.getOrCreateInstance(s)[e]()
        }))
    }, q = ".bs.alert", V = `close${q}`, K = `closed${q}`;

    class Q extends W {
        static get NAME() {
            return "alert"
        }

        close() {
            if (N.trigger(this._element, V).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, t)
        }

        _destroyElement() {
            this._element.remove(), N.trigger(this._element, K), this.dispose()
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    R(Q, "close"), m(Q);
    const X = '[data-bs-toggle="button"]';

    class Y extends W {
        static get NAME() {
            return "button"
        }

        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Y.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }))
        }
    }

    N.on(document, "click.bs.button.data-api", X, (t => {
        t.preventDefault();
        const e = t.target.closest(X);
        Y.getOrCreateInstance(e).toggle()
    })), m(Y);
    const U = ".bs.swipe", G = `touchstart${U}`, J = `touchmove${U}`, Z = `touchend${U}`, tt = `pointerdown${U}`,
        et = `pointerup${U}`, it = {endCallback: null, leftCallback: null, rightCallback: null},
        nt = {endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)"};

    class st extends H {
        constructor(t, e) {
            super(), this._element = t, t && st.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
        }

        static get Default() {
            return it
        }

        static get DefaultType() {
            return nt
        }

        static get NAME() {
            return "swipe"
        }

        dispose() {
            N.off(this._element, U)
        }

        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }

        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
        }

        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }

        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }

        _initEvents() {
            this._supportPointerEvents ? (N.on(this._element, tt, (t => this._start(t))), N.on(this._element, et, (t => this._end(t))), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t => this._start(t))), N.on(this._element, J, (t => this._move(t))), N.on(this._element, Z, (t => this._end(t))))
        }

        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }

        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }

    const ot = ".bs.carousel", rt = ".data-api", at = "next", lt = "prev", ct = "left", ht = "right", dt = `slide${ot}`,
        ut = `slid${ot}`, ft = `keydown${ot}`, pt = `mouseenter${ot}`, mt = `mouseleave${ot}`, gt = `dragstart${ot}`,
        _t = `load${ot}${rt}`, bt = `click${ot}${rt}`, vt = "carousel", yt = "active", wt = ".active",
        At = ".carousel-item", Et = wt + At, Tt = {ArrowLeft: ht, ArrowRight: ct},
        Ct = {interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0}, Ot = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };

    class xt extends W {
        constructor(t, e) {
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle()
        }

        static get Default() {
            return Ct
        }

        static get DefaultType() {
            return Ot
        }

        static get NAME() {
            return "carousel"
        }

        next() {
            this._slide(at)
        }

        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next()
        }

        prev() {
            this._slide(lt)
        }

        pause() {
            this._isSliding && s(this._element), this._clearInterval()
        }

        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
        }

        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? N.one(this._element, ut, (() => this.cycle())) : this.cycle())
        }

        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void N.one(this._element, ut, (() => this.to(t)));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? at : lt;
            this._slide(n, e[t])
        }

        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }

        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t
        }

        _addEventListeners() {
            this._config.keyboard && N.on(this._element, ft, (t => this._keydown(t))), "hover" === this._config.pause && (N.on(this._element, pt, (() => this.pause())), N.on(this._element, mt, (() => this._maybeEnableCycle()))), this._config.touch && st.isSupported() && this._addTouchEventListeners()
        }

        _addTouchEventListeners() {
            for (const t of z.find(".carousel-item img", this._element)) N.on(t, gt, (t => t.preventDefault()));
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(ct)),
                rightCallback: () => this._slide(this._directionToOrder(ht)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
                }
            };
            this._swipeHelper = new st(this._element, t)
        }

        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = Tt[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
        }

        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }

        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = z.findOne(wt, this._indicatorsElement);
            e.classList.remove(yt), e.removeAttribute("aria-current");
            const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(yt), i.setAttribute("aria-current", "true"))
        }

        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }

        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(), n = t === at, s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s), r = e => N.trigger(this._element, e, {
                relatedTarget: s,
                direction: this._orderToDirection(t),
                from: this._getItemIndex(i),
                to: o
            });
            if (r(dt).defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end",
                c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback((() => {
                s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), this._isSliding = !1, r(ut)
            }), i, this._isAnimated()), a && this.cycle()
        }

        _isAnimated() {
            return this._element.classList.contains("slide")
        }

        _getActive() {
            return z.findOne(Et, this._element)
        }

        _getItems() {
            return z.find(At, this._element)
        }

        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
        }

        _directionToOrder(t) {
            return p() ? t === ct ? lt : at : t === ct ? at : lt
        }

        _orderToDirection(t) {
            return p() ? t === lt ? ct : ht : t === lt ? ht : ct
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = xt.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else e.to(t)
            }))
        }
    }

    N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", (function (t) {
        const e = z.getElementFromSelector(this);
        if (!e || !e.classList.contains(vt)) return;
        t.preventDefault();
        const i = xt.getOrCreateInstance(e), n = this.getAttribute("data-bs-slide-to");
        return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
    })), N.on(window, _t, (() => {
        const t = z.find('[data-bs-ride="carousel"]');
        for (const e of t) xt.getOrCreateInstance(e)
    })), m(xt);
    const kt = ".bs.collapse", Lt = `show${kt}`, St = `shown${kt}`, Dt = `hide${kt}`, $t = `hidden${kt}`,
        It = `click${kt}.data-api`, Nt = "show", Pt = "collapse", Mt = "collapsing", jt = `:scope .${Pt} .${Pt}`,
        Ft = '[data-bs-toggle="collapse"]', Ht = {parent: null, toggle: !0},
        Wt = {parent: "(null|element)", toggle: "boolean"};

    class Bt extends W {
        constructor(t, e) {
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const i = z.find(Ft);
            for (const t of i) {
                const e = z.getSelectorFromElement(t), i = z.find(e).filter((t => t === this._element));
                null !== e && i.length && this._triggerArray.push(t)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }

        static get Default() {
            return Ht
        }

        static get DefaultType() {
            return Wt
        }

        static get NAME() {
            return "collapse"
        }

        toggle() {
            this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => Bt.getOrCreateInstance(t, {toggle: !1})))), t.length && t[0]._isTransitioning) return;
            if (N.trigger(this._element, Lt).defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt, Nt), this._element.style[e] = "", N.trigger(this._element, St)
            }), this._element, !0), this._element.style[e] = `${this._element[i]}px`
        }

        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (N.trigger(this._element, Dt).defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);
            for (const t of this._triggerArray) {
                const e = z.getElementFromSelector(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(Mt), this._element.classList.add(Pt), N.trigger(this._element, $t)
            }), this._element, !0)
        }

        _isShown(t = this._element) {
            return t.classList.contains(Nt)
        }

        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t
        }

        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }

        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(Ft);
            for (const e of t) {
                const t = z.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }

        _getFirstLevelChildren(t) {
            const e = z.find(jt, this._config.parent);
            return z.find(t, this._config.parent).filter((t => !e.includes(t)))
        }

        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
        }

        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function () {
                const i = Bt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }))
        }
    }

    N.on(document, It, Ft, (function (t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        for (const t of z.getMultipleElementsFromSelector(this)) Bt.getOrCreateInstance(t, {toggle: !1}).toggle()
    })), m(Bt);
    var zt = "top", Rt = "bottom", qt = "right", Vt = "left", Kt = "auto", Qt = [zt, Rt, qt, Vt], Xt = "start",
        Yt = "end", Ut = "clippingParents", Gt = "viewport", Jt = "popper", Zt = "reference",
        te = Qt.reduce((function (t, e) {
            return t.concat([e + "-" + Xt, e + "-" + Yt])
        }), []), ee = [].concat(Qt, [Kt]).reduce((function (t, e) {
            return t.concat([e, e + "-" + Xt, e + "-" + Yt])
        }), []), ie = "beforeRead", ne = "read", se = "afterRead", oe = "beforeMain", re = "main", ae = "afterMain",
        le = "beforeWrite", ce = "write", he = "afterWrite", de = [ie, ne, se, oe, re, ae, le, ce, he];

    function ue(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function fe(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function pe(t) {
        return t instanceof fe(t).Element || t instanceof Element
    }

    function me(t) {
        return t instanceof fe(t).HTMLElement || t instanceof HTMLElement
    }

    function ge(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot)
    }

    const _e = {
        name: "applyStyles", enabled: !0, phase: "write", fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function (t) {
                var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
                me(s) && ue(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function (t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        }, effect: function (t) {
            var e = t.state, i = {
                popper: {position: e.options.strategy, left: "0", top: "0", margin: "0"},
                arrow: {position: "absolute"},
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
                Object.keys(e.elements).forEach((function (t) {
                    var n = e.elements[t], s = e.attributes[t] || {},
                        o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function (t, e) {
                            return t[e] = "", t
                        }), {});
                    me(n) && ue(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function (t) {
                        n.removeAttribute(t)
                    })))
                }))
            }
        }, requires: ["computeStyles"]
    };

    function be(t) {
        return t.split("-")[0]
    }

    var ve = Math.max, ye = Math.min, we = Math.round;

    function Ae() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map((function (t) {
            return t.brand + "/" + t.version
        })).join(" ") : navigator.userAgent
    }

    function Ee() {
        return !/^((?!chrome|android).)*safari/i.test(Ae())
    }

    function Te(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(), s = 1, o = 1;
        e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
        var r = (pe(t) ? fe(t) : window).visualViewport, a = !Ee() && i, l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
            c = (n.top + (a && r ? r.offsetTop : 0)) / o, h = n.width / s, d = n.height / o;
        return {width: h, height: d, top: c, right: l + h, bottom: c + d, left: l, x: l, y: c}
    }

    function Ce(t) {
        var e = Te(t), i = t.offsetWidth, n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        }
    }

    function Oe(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && ge(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function xe(t) {
        return fe(t).getComputedStyle(t)
    }

    function ke(t) {
        return ["table", "td", "th"].indexOf(ue(t)) >= 0
    }

    function Le(t) {
        return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function Se(t) {
        return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t)
    }

    function De(t) {
        return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null
    }

    function $e(t) {
        for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;) i = De(i);
        return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function (t) {
            var e = /firefox/i.test(Ae());
            if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
            var i = Se(t);
            for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0;) {
                var n = xe(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(t) || e
    }

    function Ie(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function Ne(t, e, i) {
        return ve(t, ye(e, i))
    }

    function Pe(t) {
        return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, t)
    }

    function Me(t, e) {
        return e.reduce((function (e, i) {
            return e[i] = t, e
        }), {})
    }

    const je = {
        name: "arrow", enabled: !0, phase: "main", fn: function (t) {
            var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets,
                a = be(i.placement), l = Ie(a), c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function (t, e) {
                        return Pe("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {placement: e.placement})) : t) ? t : Me(t, Qt))
                    }(s.padding, i), d = Ce(o), u = "y" === l ? zt : Vt, f = "y" === l ? Rt : qt,
                    p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
                    m = r[l] - i.rects.reference[l], g = $e(o),
                    _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = p / 2 - m / 2, v = h[u],
                    y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, A = Ne(v, w, y), E = l;
                i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e)
            }
        }, effect: function (t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n)
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
    };

    function Fe(t) {
        return t.split("-")[1]
    }

    var He = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

    function We(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position,
            l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = t.isFixed, u = r.x, f = void 0 === u ? 0 : u,
            p = r.y, m = void 0 === p ? 0 : p, g = "function" == typeof h ? h({x: f, y: m}) : {x: f, y: m};
        f = g.x, m = g.y;
        var _ = r.hasOwnProperty("x"), b = r.hasOwnProperty("y"), v = Vt, y = zt, w = window;
        if (c) {
            var A = $e(i), E = "clientHeight", T = "clientWidth";
            A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1)
        }
        var C, O = Object.assign({position: a}, c && He), x = !0 === h ? function (t, e) {
            var i = t.x, n = t.y, s = e.devicePixelRatio || 1;
            return {x: we(i * s) / s || 0, y: we(n * s) / s || 0}
        }({x: f, y: m}, fe(i)) : {x: f, y: m};
        return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e))
    }

    const Be = {
        name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive,
                r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                    placement: be(e.placement),
                    variation: Fe(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s,
                    isFixed: "fixed" === e.options.strategy
                };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {"data-popper-placement": e.placement})
        }, data: {}
    };
    var ze = {passive: !0};
    const Re = {
        name: "eventListeners", enabled: !0, phase: "write", fn: function () {
        }, effect: function (t) {
            var e = t.state, i = t.instance, n = t.options, s = n.scroll, o = void 0 === s || s, r = n.resize,
                a = void 0 === r || r, l = fe(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function (t) {
                t.addEventListener("scroll", i.update, ze)
            })), a && l.addEventListener("resize", i.update, ze), function () {
                o && c.forEach((function (t) {
                    t.removeEventListener("scroll", i.update, ze)
                })), a && l.removeEventListener("resize", i.update, ze)
            }
        }, data: {}
    };
    var qe = {left: "right", right: "left", bottom: "top", top: "bottom"};

    function Ve(t) {
        return t.replace(/left|right|bottom|top/g, (function (t) {
            return qe[t]
        }))
    }

    var Ke = {start: "end", end: "start"};

    function Qe(t) {
        return t.replace(/start|end/g, (function (t) {
            return Ke[t]
        }))
    }

    function Xe(t) {
        var e = fe(t);
        return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset}
    }

    function Ye(t) {
        return Te(Le(t)).left + Xe(t).scrollLeft
    }

    function Ue(t) {
        var e = xe(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function Ge(t) {
        return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t))
    }

    function Je(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ge(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = fe(n),
            r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n, a = e.concat(r);
        return s ? a : a.concat(Je(Se(r)))
    }

    function Ze(t) {
        return Object.assign({}, t, {left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height})
    }

    function ti(t, e, i) {
        return e === Gt ? Ze(function (t, e) {
            var i = fe(t), n = Le(t), s = i.visualViewport, o = n.clientWidth, r = n.clientHeight, a = 0, l = 0;
            if (s) {
                o = s.width, r = s.height;
                var c = Ee();
                (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop)
            }
            return {width: o, height: r, x: a + Ye(t), y: l}
        }(t, i)) : pe(e) ? function (t, e) {
            var i = Te(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i
        }(e, i) : Ze(function (t) {
            var e, i = Le(t), n = Xe(t), s = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
                r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
                a = -n.scrollLeft + Ye(t), l = -n.scrollTop;
            return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(Le(t)))
    }

    function ei(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? be(s) : null, r = s ? Fe(s) : null,
            a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case zt:
                e = {x: a, y: i.y - n.height};
                break;
            case Rt:
                e = {x: a, y: i.y + i.height};
                break;
            case qt:
                e = {x: i.x + i.width, y: l};
                break;
            case Vt:
                e = {x: i.x - n.width, y: l};
                break;
            default:
                e = {x: i.x, y: i.y}
        }
        var c = o ? Ie(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case Xt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Yt:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2)
            }
        }
        return e
    }

    function ii(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = void 0 === n ? t.placement : n, o = i.strategy,
            r = void 0 === o ? t.strategy : o, a = i.boundary, l = void 0 === a ? Ut : a, c = i.rootBoundary,
            h = void 0 === c ? Gt : c, d = i.elementContext, u = void 0 === d ? Jt : d, f = i.altBoundary,
            p = void 0 !== f && f, m = i.padding, g = void 0 === m ? 0 : m,
            _ = Pe("number" != typeof g ? g : Me(g, Qt)), b = u === Jt ? Zt : Jt, v = t.rects.popper,
            y = t.elements[p ? b : u], w = function (t, e, i, n) {
                var s = "clippingParents" === e ? function (t) {
                    var e = Je(Se(t)), i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
                    return pe(i) ? e.filter((function (t) {
                        return pe(t) && Oe(t, i) && "body" !== ue(t)
                    })) : []
                }(t) : [].concat(e), o = [].concat(s, [i]), r = o[0], a = o.reduce((function (e, i) {
                    var s = ti(t, i, n);
                    return e.top = ve(s.top, e.top), e.right = ye(s.right, e.right), e.bottom = ye(s.bottom, e.bottom), e.left = ve(s.left, e.left), e
                }), ti(t, r, n));
                return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
            }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r), A = Te(t.elements.reference),
            E = ei({reference: A, element: v, strategy: "absolute", placement: s}), T = Ze(Object.assign({}, v, E)),
            C = u === Jt ? T : A, O = {
                top: w.top - C.top + _.top,
                bottom: C.bottom - w.bottom + _.bottom,
                left: w.left - C.left + _.left,
                right: C.right - w.right + _.right
            }, x = t.modifiersData.offset;
        if (u === Jt && x) {
            var k = x[s];
            Object.keys(O).forEach((function (t) {
                var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1, i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e
            }))
        }
        return O
    }

    function ni(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = i.boundary, o = i.rootBoundary, r = i.padding, a = i.flipVariations,
            l = i.allowedAutoPlacements, c = void 0 === l ? ee : l, h = Fe(n),
            d = h ? a ? te : te.filter((function (t) {
                return Fe(t) === h
            })) : Qt, u = d.filter((function (t) {
                return c.indexOf(t) >= 0
            }));
        0 === u.length && (u = d);
        var f = u.reduce((function (e, i) {
            return e[i] = ii(t, {placement: i, boundary: s, rootBoundary: o, padding: r})[be(i)], e
        }), {});
        return Object.keys(f).sort((function (t, e) {
            return f[t] - f[e]
        }))
    }

    const si = {
        name: "flip", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, i = t.options, n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function (t) {
                    if (be(t) === Kt) return [];
                    var e = Ve(t);
                    return [Qe(t), e, Qe(e)]
                }(g) : [Ve(g)]), v = [g].concat(b).reduce((function (t, i) {
                    return t.concat(be(i) === Kt ? ni(e, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: m
                    }) : i)
                }), []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
                    var O = v[C], x = be(O), k = Fe(O) === Xt, L = [zt, Rt].indexOf(x) >= 0, S = L ? "width" : "height",
                        D = ii(e, {placement: O, boundary: h, rootBoundary: d, altBoundary: u, padding: c}),
                        $ = L ? k ? qt : Vt : k ? Rt : zt;
                    y[S] > w[S] && ($ = Ve($));
                    var I = Ve($), N = [];
                    if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every((function (t) {
                        return t
                    }))) {
                        T = O, E = !1;
                        break
                    }
                    A.set(O, N)
                }
                if (E) for (var P = function (t) {
                    var e = v.find((function (e) {
                        var i = A.get(e);
                        if (i) return i.slice(0, t).every((function (t) {
                            return t
                        }))
                    }));
                    if (e) return T = e, "break"
                }, M = p ? 3 : 1; M > 0 && "break" !== P(M); M--) ;
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
            }
        }, requiresIfExists: ["offset"], data: {_skip: !1}
    };

    function oi(t, e, i) {
        return void 0 === i && (i = {x: 0, y: 0}), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function ri(t) {
        return [zt, qt, Rt, Vt].some((function (e) {
            return t[e] >= 0
        }))
    }

    const ai = {
        name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow,
                r = ii(e, {elementContext: "reference"}), a = ii(e, {altBoundary: !0}), l = oi(r, n), c = oi(a, s, o),
                h = ri(l), d = ri(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            })
        }
    }, li = {
        name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) {
            var e = t.state, i = t.options, n = t.name, s = i.offset, o = void 0 === s ? [0, 0] : s,
                r = ee.reduce((function (t, i) {
                    return t[i] = function (t, e, i) {
                        var n = be(t), s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
                            o = "function" == typeof i ? i(Object.assign({}, e, {placement: t})) : i, r = o[0],
                            a = o[1];
                        return r = r || 0, a = (a || 0) * s, [Vt, qt].indexOf(n) >= 0 ? {x: a, y: r} : {x: r, y: a}
                    }(i, e.rects, o), t
                }), {}), a = r[e.placement], l = a.x, c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
        }
    }, ci = {
        name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = ei({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        }, data: {}
    }, hi = {
        name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis,
                a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding,
                u = i.tether, f = void 0 === u || u, p = i.tetherOffset, m = void 0 === p ? 0 : p,
                g = ii(e, {boundary: l, rootBoundary: c, padding: d, altBoundary: h}), _ = be(e.placement),
                b = Fe(e.placement), v = !b, y = Ie(_), w = "x" === y ? "y" : "x", A = e.modifiersData.popperOffsets,
                E = e.rects.reference, T = e.rects.popper,
                C = "function" == typeof m ? m(Object.assign({}, e.rects, {placement: e.placement})) : m,
                O = "number" == typeof C ? {mainAxis: C, altAxis: C} : Object.assign({mainAxis: 0, altAxis: 0}, C),
                x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, k = {x: 0, y: 0};
            if (A) {
                if (o) {
                    var L, S = "y" === y ? zt : Vt, D = "y" === y ? Rt : qt, $ = "y" === y ? "height" : "width",
                        I = A[y], N = I + g[S], P = I - g[D], M = f ? -T[$] / 2 : 0, j = b === Xt ? E[$] : T[$],
                        F = b === Xt ? -T[$] : -E[$], H = e.elements.arrow, W = f && H ? Ce(H) : {width: 0, height: 0},
                        B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }, z = B[S], R = B[D], q = Ne(0, E[$], W[$]),
                        V = v ? E[$] / 2 - M - q - z - O.mainAxis : j - q - z - O.mainAxis,
                        K = v ? -E[$] / 2 + M + q + R + O.mainAxis : F + q + R + O.mainAxis,
                        Q = e.elements.arrow && $e(e.elements.arrow),
                        X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
                        Y = null != (L = null == x ? void 0 : x[y]) ? L : 0, U = I + K - Y,
                        G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
                    A[y] = G, k[y] = G - I
                }
                if (a) {
                    var J, Z = "x" === y ? zt : Vt, tt = "x" === y ? Rt : qt, et = A[w],
                        it = "y" === w ? "height" : "width", nt = et + g[Z], st = et - g[tt],
                        ot = -1 !== [zt, Vt].indexOf(_), rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
                        at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
                        lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st, ct = f && ot ? function (t, e, i) {
                            var n = Ne(t, e, i);
                            return n > i ? i : n
                        }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
                    A[w] = ct, k[w] = ct - et
                }
                e.modifiersData[n] = k
            }
        }, requiresIfExists: ["offset"]
    };

    function di(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = me(e), r = me(e) && function (t) {
            var e = t.getBoundingClientRect(), i = we(e.width) / t.offsetWidth || 1,
                n = we(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n
        }(e), a = Le(e), l = Te(t, r, i), c = {scrollLeft: 0, scrollTop: 0}, h = {x: 0, y: 0};
        return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : Xe(n)), me(e) ? ((h = Te(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ye(a))), {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        }
    }

    function ui(t) {
        var e = new Map, i = new Set, n = [];

        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function (t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n)
                }
            })), n.push(t)
        }

        return t.forEach((function (t) {
            e.set(t.name, t)
        })), t.forEach((function (t) {
            i.has(t.name) || s(t)
        })), n
    }

    var fi = {placement: "bottom", modifiers: [], strategy: "absolute"};

    function pi() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some((function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function mi(t) {
        void 0 === t && (t = {});
        var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, o = void 0 === s ? fi : s;
        return function (t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, fi, o),
                modifiersData: {},
                elements: {reference: t, popper: e},
                attributes: {},
                styles: {}
            }, l = [], c = !1, h = {
                state: a, setOptions: function (i) {
                    var s = "function" == typeof i ? i(a.options) : i;
                    d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                        reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
                        popper: Je(e)
                    };
                    var r, c, u = function (t) {
                        var e = ui(t);
                        return de.reduce((function (t, i) {
                            return t.concat(e.filter((function (t) {
                                return t.phase === i
                            })))
                        }), [])
                    }((r = [].concat(n, a.options.modifiers), c = r.reduce((function (t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e, t
                    }), {}), Object.keys(c).map((function (t) {
                        return c[t]
                    }))));
                    return a.orderedModifiers = u.filter((function (t) {
                        return t.enabled
                    })), a.orderedModifiers.forEach((function (t) {
                        var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({state: a, name: e, instance: h, options: n});
                            l.push(o || function () {
                            })
                        }
                    })), h.update()
                }, forceUpdate: function () {
                    if (!c) {
                        var t = a.elements, e = t.reference, i = t.popper;
                        if (pi(e, i)) {
                            a.rects = {
                                reference: di(e, $e(i), "fixed" === a.options.strategy),
                                popper: Ce(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }));
                            for (var n = 0; n < a.orderedModifiers.length; n++) if (!0 !== a.reset) {
                                var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r,
                                    d = s.name;
                                "function" == typeof o && (a = o({state: a, options: l, name: d, instance: h}) || a)
                            } else a.reset = !1, n = -1
                        }
                    }
                }, update: (s = function () {
                    return new Promise((function (t) {
                        h.forceUpdate(), t(a)
                    }))
                }, function () {
                    return r || (r = new Promise((function (t) {
                        Promise.resolve().then((function () {
                            r = void 0, t(s())
                        }))
                    }))), r
                }), destroy: function () {
                    d(), c = !0
                }
            };
            if (!pi(t, e)) return h;

            function d() {
                l.forEach((function (t) {
                    return t()
                })), l = []
            }

            return h.setOptions(i).then((function (t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t)
            })), h
        }
    }

    var gi = mi(), _i = mi({defaultModifiers: [Re, ci, Be, _e]}),
        bi = mi({defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai]});
    const vi = Object.freeze(Object.defineProperty({
            __proto__: null,
            afterMain: ae,
            afterRead: se,
            afterWrite: he,
            applyStyles: _e,
            arrow: je,
            auto: Kt,
            basePlacements: Qt,
            beforeMain: oe,
            beforeRead: ie,
            beforeWrite: le,
            bottom: Rt,
            clippingParents: Ut,
            computeStyles: Be,
            createPopper: bi,
            createPopperBase: gi,
            createPopperLite: _i,
            detectOverflow: ii,
            end: Yt,
            eventListeners: Re,
            flip: si,
            hide: ai,
            left: Vt,
            main: re,
            modifierPhases: de,
            offset: li,
            placements: ee,
            popper: Jt,
            popperGenerator: mi,
            popperOffsets: ci,
            preventOverflow: hi,
            read: ne,
            reference: Zt,
            right: qt,
            start: Xt,
            top: zt,
            variationPlacements: te,
            viewport: Gt,
            write: ce
        }, Symbol.toStringTag, {value: "Module"})), yi = "dropdown", wi = ".bs.dropdown", Ai = ".data-api", Ei = "ArrowUp",
        Ti = "ArrowDown", Ci = `hide${wi}`, Oi = `hidden${wi}`, xi = `show${wi}`, ki = `shown${wi}`,
        Li = `click${wi}${Ai}`, Si = `keydown${wi}${Ai}`, Di = `keyup${wi}${Ai}`, $i = "show",
        Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Ni = `${Ii}.${$i}`, Pi = ".dropdown-menu",
        Mi = p() ? "top-end" : "top-start", ji = p() ? "top-start" : "top-end",
        Fi = p() ? "bottom-end" : "bottom-start", Hi = p() ? "bottom-start" : "bottom-end",
        Wi = p() ? "left-start" : "right-start", Bi = p() ? "right-start" : "left-start", zi = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        }, Ri = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };

    class qi extends W {
        constructor(t, e) {
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar()
        }

        static get Default() {
            return zi
        }

        static get DefaultType() {
            return Ri
        }

        static get NAME() {
            return yi
        }

        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }

        show() {
            if (l(this._element) || this._isShown()) return;
            const t = {relatedTarget: this._element};
            if (!N.trigger(this._element, xi, t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t)
            }
        }

        hide() {
            if (l(this._element) || !this._isShown()) return;
            const t = {relatedTarget: this._element};
            this._completeHide(t)
        }

        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }

        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }

        _completeHide(t) {
            if (!N.trigger(this._element, Ci, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
                this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t)
            }
        }

        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }

        _createPopper() {
            if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = bi(t, this._menu, e)
        }

        _isShown() {
            return this._menu.classList.contains($i)
        }

        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Wi;
            if (t.classList.contains("dropstart")) return Bi;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ji : Mi : e ? Hi : Fi
        }

        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }

        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }

        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{name: "preventOverflow", options: {boundary: this._config.boundary}}, {
                    name: "offset",
                    options: {offset: this._getOffset()}
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), {...t, ...g(this._config.popperConfig, [t])}
        }

        _selectMenuItem({key: t, target: e}) {
            const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => a(t)));
            i.length && b(i, e, t === Ti, !i.includes(e)).focus()
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = qi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }

        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = z.find(Ni);
            for (const i of e) {
                const e = qi.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(), s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {relatedTarget: e._element};
                "click" === t.type && (o.clickEvent = t), e._completeHide(o)
            }
        }

        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, n = [Ei, Ti].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode),
                o = qi.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
        }
    }

    N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, (function (t) {
        t.preventDefault(), qi.getOrCreateInstance(this).toggle()
    })), m(qi);
    const Vi = "backdrop", Ki = "show", Qi = `mousedown.bs.${Vi}`,
        Xi = {className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body"},
        Yi = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };

    class Ui extends H {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }

        static get Default() {
            return Xi
        }

        static get DefaultType() {
            return Yi
        }

        static get NAME() {
            return Vi
        }

        show(t) {
            if (!this._config.isVisible) return void g(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation((() => {
                g(t)
            }))
        }

        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation((() => {
                this.dispose(), g(t)
            }))) : g(t)
        }

        dispose() {
            this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1)
        }

        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }

        _configAfterMerge(t) {
            return t.rootElement = r(t.rootElement), t
        }

        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), N.on(t, Qi, (() => {
                g(this._config.clickCallback)
            })), this._isAppended = !0
        }

        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated)
        }
    }

    const Gi = ".bs.focustrap", Ji = `focusin${Gi}`, Zi = `keydown.tab${Gi}`, tn = "backward",
        en = {autofocus: !0, trapElement: null}, nn = {autofocus: "boolean", trapElement: "element"};

    class sn extends H {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }

        static get Default() {
            return en
        }

        static get DefaultType() {
            return nn
        }

        static get NAME() {
            return "focustrap"
        }

        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, (t => this._handleFocusin(t))), N.on(document, Zi, (t => this._handleKeydown(t))), this._isActive = !0)
        }

        deactivate() {
            this._isActive && (this._isActive = !1, N.off(document, Gi))
        }

        _handleFocusin(t) {
            const {trapElement: e} = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = z.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus()
        }

        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward")
        }
    }

    const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", rn = ".sticky-top", an = "padding-right",
        ln = "margin-right";

    class cn {
        constructor() {
            this._element = document.body
        }

        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }

        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, an, (e => e + t)), this._setElementAttributes(on, an, (e => e + t)), this._setElementAttributes(rn, ln, (e => e - t))
        }

        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln)
        }

        isOverflowing() {
            return this.getWidth() > 0
        }

        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }

        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
            }))
        }

        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && F.setDataAttribute(t, e, i)
        }

        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = F.getDataAttribute(t, e);
                null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
            }))
        }

        _applyManipulationCallback(t, e) {
            if (o(t)) e(t); else for (const i of z.find(t, this._element)) e(i)
        }
    }

    const hn = ".bs.modal", dn = `hide${hn}`, un = `hidePrevented${hn}`, fn = `hidden${hn}`, pn = `show${hn}`,
        mn = `shown${hn}`, gn = `resize${hn}`, _n = `click.dismiss${hn}`, bn = `mousedown.dismiss${hn}`,
        vn = `keydown.dismiss${hn}`, yn = `click${hn}.data-api`, wn = "modal-open", An = "show", En = "modal-static",
        Tn = {backdrop: !0, focus: !0, keyboard: !0},
        Cn = {backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean"};

    class On extends W {
        constructor(t, e) {
            super(t, e), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new cn, this._addEventListeners()
        }

        static get Default() {
            return Tn
        }

        static get DefaultType() {
            return Cn
        }

        static get NAME() {
            return "modal"
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || this._isTransitioning || N.trigger(this._element, pn, {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show((() => this._showElement(t))))
        }

        hide() {
            this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
        }

        dispose() {
            N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        handleUpdate() {
            this._adjustDialog()
        }

        _initializeBackDrop() {
            return new Ui({isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated()})
        }

        _initializeFocusTrap() {
            return new sn({trapElement: this._element})
        }

        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = z.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, N.trigger(this._element, mn, {relatedTarget: t})
            }), this._dialog, this._isAnimated())
        }

        _addEventListeners() {
            N.on(this._element, vn, (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
            })), N.on(window, gn, (() => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            })), N.on(this._element, bn, (t => {
                N.one(this._element, _n, (e => {
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                }))
            }))
        }

        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn)
            }))
        }

        _isAnimated() {
            return this._element.classList.contains("fade")
        }

        _triggerBackdropTransition() {
            if (N.trigger(this._element, un).defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback((() => {
                this._element.classList.remove(En), this._queueCallback((() => {
                    this._element.style.overflowY = e
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }

        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(), i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }

        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }

        static jQueryInterface(t, e) {
            return this.each((function () {
                const i = On.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }))
        }
    }

    N.on(document, yn, '[data-bs-toggle="modal"]', (function (t) {
        const e = z.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), N.one(e, pn, (t => {
            t.defaultPrevented || N.one(e, fn, (() => {
                a(this) && this.focus()
            }))
        }));
        const i = z.findOne(".modal.show");
        i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this)
    })), R(On), m(On);
    const xn = ".bs.offcanvas", kn = ".data-api", Ln = `load${xn}${kn}`, Sn = "show", Dn = "showing", $n = "hiding",
        In = ".offcanvas.show", Nn = `show${xn}`, Pn = `shown${xn}`, Mn = `hide${xn}`, jn = `hidePrevented${xn}`,
        Fn = `hidden${xn}`, Hn = `resize${xn}`, Wn = `click${xn}${kn}`, Bn = `keydown.dismiss${xn}`,
        zn = {backdrop: !0, keyboard: !0, scroll: !1},
        Rn = {backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean"};

    class qn extends W {
        constructor(t, e) {
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }

        static get Default() {
            return zn
        }

        static get DefaultType() {
            return Rn
        }

        static get NAME() {
            return "offcanvas"
        }

        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }

        show(t) {
            this._isShown || N.trigger(this._element, Nn, {relatedTarget: t}).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new cn).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback((() => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, {relatedTarget: t})
            }), this._element, !0))
        }

        hide() {
            this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback((() => {
                this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new cn).reset(), N.trigger(this._element, Fn)
            }), this._element, !0)))
        }

        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }

        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ui({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? () => {
                    "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, jn)
                } : null
            })
        }

        _initializeFocusTrap() {
            return new sn({trapElement: this._element})
        }

        _addEventListeners() {
            N.on(this._element, Bn, (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, jn))
            }))
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = qn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    N.on(document, Wn, '[data-bs-toggle="offcanvas"]', (function (t) {
        const e = z.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
        N.one(e, Fn, (() => {
            a(this) && this.focus()
        }));
        const i = z.findOne(In);
        i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this)
    })), N.on(window, Ln, (() => {
        for (const t of z.find(In)) qn.getOrCreateInstance(t).show()
    })), N.on(window, Hn, (() => {
        for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && qn.getOrCreateInstance(t).hide()
    })), R(qn), m(qn);
    const Vn = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }, Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Xn = (t, e) => {
            const i = t.nodeName.toLowerCase();
            return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
        }, Yn = {
            allowList: Vn,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
        }, Un = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        }, Gn = {entry: "(string|element|function|null)", selector: "(string|element)"};

    class Jn extends H {
        constructor(t) {
            super(), this._config = this._getConfig(t)
        }

        static get Default() {
            return Yn
        }

        static get DefaultType() {
            return Un
        }

        static get NAME() {
            return "TemplateFactory"
        }

        getContent() {
            return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
        }

        hasContent() {
            return this.getContent().length > 0
        }

        changeContent(t) {
            return this._checkContent(t), this._config.content = {...this._config.content, ...t}, this
        }

        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
            const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e
        }

        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content)
        }

        _checkContent(t) {
            for (const [e, i] of Object.entries(t)) super._typeCheckConfig({selector: e, entry: i}, Gn)
        }

        _setContent(t, e, i) {
            const n = z.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
        }

        _maybeSanitize(t) {
            return this._config.sanitize ? function (t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html"),
                    s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s) {
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue
                    }
                    const n = [].concat(...t.attributes), s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n) Xn(e, s) || t.removeAttribute(e.nodeName)
                }
                return n.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }

        _resolvePossibleFunction(t) {
            return g(t, [this])
        }

        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent
        }
    }

    const Zn = new Set(["sanitize", "allowList", "sanitizeFn"]), ts = "fade", es = "show", is = ".modal",
        ns = "hide.bs.modal", ss = "hover", os = "focus",
        rs = {AUTO: "auto", TOP: "top", RIGHT: p() ? "left" : "right", BOTTOM: "bottom", LEFT: p() ? "right" : "left"},
        as = {
            allowList: Vn,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 6],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
        }, ls = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        };

    class cs extends W {
        constructor(t, e) {
            if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
        }

        static get Default() {
            return as
        }

        static get DefaultType() {
            return ls
        }

        static get NAME() {
            return "tooltip"
        }

        enable() {
            this._isEnabled = !0
        }

        disable() {
            this._isEnabled = !1
        }

        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }

        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
        }

        dispose() {
            clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
        }

        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = N.trigger(this._element, this.constructor.eventName("show")),
                e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const {container: n} = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
            this._queueCallback((() => {
                N.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
            }), this.tip, this._isAnimated())
        }

        hide() {
            if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
                this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback((() => {
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")))
                }), this.tip, this._isAnimated())
            }
        }

        update() {
            this._popper && this._popper.update()
        }

        _isWithContent() {
            return Boolean(this._getTitle())
        }

        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        }

        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(ts, es), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = (t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e
        }

        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
        }

        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
        }

        _getContentForTemplate() {
            return {".tooltip-inner": this._getTitle()}
        }

        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }

        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }

        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(ts)
        }

        _isShown() {
            return this.tip && this.tip.classList.contains(es)
        }

        _createPopper(t) {
            const e = g(this._config.placement, [this, t, this._element]), i = rs[e.toUpperCase()];
            return bi(this._element, t, this._getPopperConfig(i))
        }

        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }

        _resolvePossibleFunction(t) {
            return g(t, [this._element])
        }

        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {fallbackPlacements: this._config.fallbackPlacements}
                }, {name: "offset", options: {offset: this._getOffset()}}, {
                    name: "preventOverflow",
                    options: {boundary: this._config.boundary}
                }, {name: "arrow", options: {element: `.${this.constructor.NAME}-arrow`}}, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return {...e, ...g(this._config.popperConfig, [e])}
        }

        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t) if ("click" === e) N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => {
                this._initializeOnDelegatedTarget(t).toggle()
            })); else if ("manual" !== e) {
                const t = e === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    i = e === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                N.on(this._element, t, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter()
                })), N.on(this._element, i, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave()
                }))
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, N.on(this._element.closest(is), ns, this._hideModalHandler)
        }

        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
        }

        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                this._isHovered && this.show()
            }), this._config.delay.show))
        }

        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                this._isHovered || this.hide()
            }), this._config.delay.hide))
        }

        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
        }

        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }

        _getConfig(t) {
            const e = F.getDataAttributes(this._element);
            for (const t of Object.keys(e)) Zn.has(t) && delete e[t];
            return t = {...e, ..."object" == typeof t && t ? t : {}}, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }

        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
        }

        _getDelegateConfig() {
            const t = {};
            for (const [e, i] of Object.entries(this._config)) this.constructor.Default[e] !== i && (t[e] = i);
            return t.selector = !1, t.trigger = "manual", t
        }

        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = cs.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    m(cs);
    const hs = {
        ...cs.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }, ds = {...cs.DefaultType, content: "(null|string|element|function)"};

    class us extends cs {
        static get Default() {
            return hs
        }

        static get DefaultType() {
            return ds
        }

        static get NAME() {
            return "popover"
        }

        _isWithContent() {
            return this._getTitle() || this._getContent()
        }

        _getContentForTemplate() {
            return {".popover-header": this._getTitle(), ".popover-body": this._getContent()}
        }

        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = us.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    m(us);
    const fs = ".bs.scrollspy", ps = `activate${fs}`, ms = `click${fs}`, gs = `load${fs}.data-api`, _s = "active",
        bs = "[href]", vs = ".nav-link", ys = `${vs}, .nav-item > ${vs}, .list-group-item`,
        ws = {offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [.1, .5, 1]}, As = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
        };

    class Es extends W {
        constructor(t, e) {
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh()
        }

        static get Default() {
            return ws
        }

        static get DefaultType() {
            return As
        }

        static get NAME() {
            return "scrollspy"
        }

        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values()) this._observer.observe(t)
        }

        dispose() {
            this._observer.disconnect(), super.dispose()
        }

        _configAfterMerge(t) {
            return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))), t
        }

        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, (t => {
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window, n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({top: n, behavior: "smooth"});
                    i.scrollTop = n
                }
            })))
        }

        _getNewObserver() {
            const t = {root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin};
            return new IntersectionObserver((t => this._observerCallback(t)), t)
        }

        _observerCallback(t) {
            const e = t => this._targetLinks.get(`#${t.target.id}`), i = t => {
                    this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
                }, n = (this._rootElement || document.documentElement).scrollTop,
                s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t) {
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o), !n) return
                } else s || t || i(o)
            }
        }

        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = z.find(bs, this._config.target);
            for (const e of t) {
                if (!e.hash || l(e)) continue;
                const t = z.findOne(decodeURI(e.hash), this._element);
                a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t))
            }
        }

        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {relatedTarget: t}))
        }

        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s); else for (const e of z.parents(t, ".nav, .list-group")) for (const t of z.prev(e, ys)) t.classList.add(_s)
        }

        _clearActiveClass(t) {
            t.classList.remove(_s);
            const e = z.find(`${bs}.${_s}`, t);
            for (const t of e) t.classList.remove(_s)
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Es.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    N.on(window, gs, (() => {
        for (const t of z.find('[data-bs-spy="scroll"]')) Es.getOrCreateInstance(t)
    })), m(Es);
    const Ts = ".bs.tab", Cs = `hide${Ts}`, Os = `hidden${Ts}`, xs = `show${Ts}`, ks = `shown${Ts}`, Ls = `click${Ts}`,
        Ss = `keydown${Ts}`, Ds = `load${Ts}`, $s = "ArrowLeft", Is = "ArrowRight", Ns = "ArrowUp", Ps = "ArrowDown",
        Ms = "Home", js = "End", Fs = "active", Hs = "fade", Ws = "show", Bs = ":not(.dropdown-toggle)",
        zs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Rs = `.nav-link${Bs}, .list-group-item${Bs}, [role="tab"]${Bs}, ${zs}`,
        qs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;

    class Vs extends W {
        constructor(t) {
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, (t => this._keydown(t))))
        }

        static get NAME() {
            return "tab"
        }

        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(), i = e ? N.trigger(e, Cs, {relatedTarget: t}) : null;
            N.trigger(t, xs, {relatedTarget: e}).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
        }

        _activate(t, e) {
            t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), N.trigger(t, ks, {relatedTarget: e})) : t.classList.add(Ws)
            }), t, t.classList.contains(Hs)))
        }

        _deactivate(t, e) {
            t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback((() => {
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), N.trigger(t, Os, {relatedTarget: e})) : t.classList.remove(Ws)
            }), t, t.classList.contains(Hs)))
        }

        _keydown(t) {
            if (![$s, Is, Ns, Ps, Ms, js].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t => !l(t)));
            let i;
            if ([Ms, js].includes(t.key)) i = e[t.key === Ms ? 0 : e.length - 1]; else {
                const n = [Is, Ps].includes(t.key);
                i = b(e, t.target, n, !0)
            }
            i && (i.focus({preventScroll: !0}), Vs.getOrCreateInstance(i).show())
        }

        _getChildren() {
            return z.find(Rs, this._parent)
        }

        _getActiveElem() {
            return this._getChildren().find((t => this._elemIsActive(t))) || null
        }

        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t)
        }

        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t), i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
        }

        _setInitialAttributesOnTargetPanel(t) {
            const e = z.getElementFromSelector(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
        }

        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n) => {
                const s = z.findOne(t, i);
                s && s.classList.toggle(n, e)
            };
            n(".dropdown-toggle", Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e)
        }

        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }

        _elemIsActive(t) {
            return t.classList.contains(Fs)
        }

        _getInnerElement(t) {
            return t.matches(Rs) ? t : z.findOne(Rs, t)
        }

        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = Vs.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }

    N.on(document, Ls, zs, (function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Vs.getOrCreateInstance(this).show()
    })), N.on(window, Ds, (() => {
        for (const t of z.find(qs)) Vs.getOrCreateInstance(t)
    })), m(Vs);
    const Ks = ".bs.toast", Qs = `mouseover${Ks}`, Xs = `mouseout${Ks}`, Ys = `focusin${Ks}`, Us = `focusout${Ks}`,
        Gs = `hide${Ks}`, Js = `hidden${Ks}`, Zs = `show${Ks}`, to = `shown${Ks}`, eo = "hide", io = "show",
        no = "showing", so = {animation: "boolean", autohide: "boolean", delay: "number"},
        oo = {animation: !0, autohide: !0, delay: 5e3};

    class ro extends W {
        constructor(t, e) {
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }

        static get Default() {
            return oo
        }

        static get DefaultType() {
            return so
        }

        static get NAME() {
            return "toast"
        }

        show() {
            N.trigger(this._element, Zs).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(eo), d(this._element), this._element.classList.add(io, no), this._queueCallback((() => {
                this._element.classList.remove(no), N.trigger(this._element, to), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }

        hide() {
            this.isShown() && (N.trigger(this._element, Gs).defaultPrevented || (this._element.classList.add(no), this._queueCallback((() => {
                this._element.classList.add(eo), this._element.classList.remove(no, io), N.trigger(this._element, Js)
            }), this._element, this._config.animation)))
        }

        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(io), super.dispose()
        }

        isShown() {
            return this._element.classList.contains(io)
        }

        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }

        _onInteraction(t, e) {
            switch (t.type) {
                case"mouseover":
                case"mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case"focusin":
                case"focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }

        _setListeners() {
            N.on(this._element, Qs, (t => this._onInteraction(t, !0))), N.on(this._element, Xs, (t => this._onInteraction(t, !1))), N.on(this._element, Ys, (t => this._onInteraction(t, !0))), N.on(this._element, Us, (t => this._onInteraction(t, !1)))
        }

        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }

        static jQueryInterface(t) {
            return this.each((function () {
                const e = ro.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }

    return R(ro), m(ro), {
        Alert: Q,
        Button: Y,
        Carousel: xt,
        Collapse: Bt,
        Dropdown: qi,
        Modal: On,
        Offcanvas: qn,
        Popover: us,
        ScrollSpy: Es,
        Tab: Vs,
        Toast: ro,
        Tooltip: cs
    }
}));
//# sourceMappingURL=bootstrap.bundle.min.js.map/*! * include simplebar  */
/**
 * SimpleBar.js - v5.3.9
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e()
}(this, (function () {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, e) {
        return t(e = {exports: {}}, e.exports), e.exports
    }

    var r, n, i = function (t) {
            return t && t.Math == Math && t
        },
        o = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof t && t) || function () {
            return this
        }() || Function("return this")(), s = Object.defineProperty, a = function (t, e) {
            try {
                s(o, t, {value: e, configurable: !0, writable: !0})
            } catch (r) {
                o[t] = e
            }
            return e
        }, c = o["__core-js_shared__"] || a("__core-js_shared__", {}), l = e((function (t) {
            (t.exports = function (t, e) {
                return c[t] || (c[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.22.6",
                mode: "global",
                copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.22.6/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        })), u = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }, f = !u((function () {
            var t = function () {
            }.bind();
            return "function" != typeof t || t.hasOwnProperty("prototype")
        })), h = Function.prototype, d = h.bind, p = h.call, v = f && d.bind(p, p), g = f ? function (t) {
            return t && v(t)
        } : function (t) {
            return t && function () {
                return p.apply(t, arguments)
            }
        }, b = o.TypeError, y = function (t) {
            if (null == t) throw b("Can't call method on " + t);
            return t
        }, m = o.Object, x = function (t) {
            return m(y(t))
        }, E = g({}.hasOwnProperty), w = Object.hasOwn || function (t, e) {
            return E(x(t), e)
        }, O = 0, S = Math.random(), A = g(1..toString), k = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + A(++O + S, 36)
        }, T = function (t) {
            return "function" == typeof t
        }, L = function (t) {
            return T(t) ? t : void 0
        }, R = function (t, e) {
            return arguments.length < 2 ? L(o[t]) : o[t] && o[t][e]
        }, _ = R("navigator", "userAgent") || "", j = o.process, z = o.Deno, M = j && j.versions || z && z.version,
        C = M && M.v8;
    C && (n = (r = C.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !n && _ && (!(r = _.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = _.match(/Chrome\/(\d+)/)) && (n = +r[1]);
    var N = n, W = !!Object.getOwnPropertySymbols && !u((function () {
            var t = Symbol();
            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && N && N < 41
        })), I = W && !Symbol.sham && "symbol" == typeof Symbol.iterator, P = l("wks"), B = o.Symbol, D = B && B.for,
        F = I ? B : B && B.withoutSetter || k, V = function (t) {
            if (!w(P, t) || !W && "string" != typeof P[t]) {
                var e = "Symbol." + t;
                W && w(B, t) ? P[t] = B[t] : P[t] = I && D ? D(e) : F(e)
            }
            return P[t]
        }, $ = {};
    $[V("toStringTag")] = "z";
    var X = "[object z]" === String($), H = !u((function () {
        return 7 != Object.defineProperty({}, 1, {
            get: function () {
                return 7
            }
        })[1]
    })), q = function (t) {
        return "object" == typeof t ? null !== t : T(t)
    }, Y = o.document, G = q(Y) && q(Y.createElement), U = function (t) {
        return G ? Y.createElement(t) : {}
    }, K = !H && !u((function () {
        return 7 != Object.defineProperty(U("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })), J = H && u((function () {
        return 42 != Object.defineProperty((function () {
        }), "prototype", {value: 42, writable: !1}).prototype
    })), Q = o.String, Z = o.TypeError, tt = function (t) {
        if (q(t)) return t;
        throw Z(Q(t) + " is not an object")
    }, et = Function.prototype.call, rt = f ? et.bind(et) : function () {
        return et.apply(et, arguments)
    }, nt = g({}.isPrototypeOf), it = o.Object, ot = I ? function (t) {
        return "symbol" == typeof t
    } : function (t) {
        var e = R("Symbol");
        return T(e) && nt(e.prototype, it(t))
    }, st = o.String, at = function (t) {
        try {
            return st(t)
        } catch (t) {
            return "Object"
        }
    }, ct = o.TypeError, lt = function (t) {
        if (T(t)) return t;
        throw ct(at(t) + " is not a function")
    }, ut = function (t, e) {
        var r = t[e];
        return null == r ? void 0 : lt(r)
    }, ft = o.TypeError, ht = o.TypeError, dt = V("toPrimitive"), pt = function (t, e) {
        if (!q(t) || ot(t)) return t;
        var r, n = ut(t, dt);
        if (n) {
            if (void 0 === e && (e = "default"), r = rt(n, t, e), !q(r) || ot(r)) return r;
            throw ht("Can't convert object to primitive value")
        }
        return void 0 === e && (e = "number"), function (t, e) {
            var r, n;
            if ("string" === e && T(r = t.toString) && !q(n = rt(r, t))) return n;
            if (T(r = t.valueOf) && !q(n = rt(r, t))) return n;
            if ("string" !== e && T(r = t.toString) && !q(n = rt(r, t))) return n;
            throw ft("Can't convert object to primitive value")
        }(t, e)
    }, vt = function (t) {
        var e = pt(t, "string");
        return ot(e) ? e : e + ""
    }, gt = o.TypeError, bt = Object.defineProperty, yt = Object.getOwnPropertyDescriptor, mt = {
        f: H ? J ? function (t, e, r) {
            if (tt(t), e = vt(e), tt(r), "function" == typeof t && "prototype" === e && "value" in r && "writable" in r && !r.writable) {
                var n = yt(t, e);
                n && n.writable && (t[e] = r.value, r = {
                    configurable: "configurable" in r ? r.configurable : n.configurable,
                    enumerable: "enumerable" in r ? r.enumerable : n.enumerable,
                    writable: !1
                })
            }
            return bt(t, e, r)
        } : bt : function (t, e, r) {
            if (tt(t), e = vt(e), tt(r), K) try {
                return bt(t, e, r)
            } catch (t) {
            }
            if ("get" in r || "set" in r) throw gt("Accessors not supported");
            return "value" in r && (t[e] = r.value), t
        }
    }, xt = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }, Et = H ? function (t, e, r) {
        return mt.f(t, e, xt(1, r))
    } : function (t, e, r) {
        return t[e] = r, t
    }, wt = Function.prototype, Ot = H && Object.getOwnPropertyDescriptor, St = w(wt, "name"), At = {
        EXISTS: St, PROPER: St && "something" === function () {
        }.name, CONFIGURABLE: St && (!H || H && Ot(wt, "name").configurable)
    }, kt = g(Function.toString);
    T(c.inspectSource) || (c.inspectSource = function (t) {
        return kt(t)
    });
    var Tt, Lt, Rt, _t = c.inspectSource, jt = o.WeakMap, zt = T(jt) && /native code/.test(_t(jt)), Mt = l("keys"),
        Ct = function (t) {
            return Mt[t] || (Mt[t] = k(t))
        }, Nt = {}, Wt = o.TypeError, It = o.WeakMap;
    if (zt || c.state) {
        var Pt = c.state || (c.state = new It), Bt = g(Pt.get), Dt = g(Pt.has), Ft = g(Pt.set);
        Tt = function (t, e) {
            if (Dt(Pt, t)) throw new Wt("Object already initialized");
            return e.facade = t, Ft(Pt, t, e), e
        }, Lt = function (t) {
            return Bt(Pt, t) || {}
        }, Rt = function (t) {
            return Dt(Pt, t)
        }
    } else {
        var Vt = Ct("state");
        Nt[Vt] = !0, Tt = function (t, e) {
            if (w(t, Vt)) throw new Wt("Object already initialized");
            return e.facade = t, Et(t, Vt, e), e
        }, Lt = function (t) {
            return w(t, Vt) ? t[Vt] : {}
        }, Rt = function (t) {
            return w(t, Vt)
        }
    }
    var $t = {
        set: Tt, get: Lt, has: Rt, enforce: function (t) {
            return Rt(t) ? Lt(t) : Tt(t, {})
        }, getterFor: function (t) {
            return function (e) {
                var r;
                if (!q(e) || (r = Lt(e)).type !== t) throw Wt("Incompatible receiver, " + t + " required");
                return r
            }
        }
    }, Xt = e((function (t) {
        var e = At.CONFIGURABLE, r = $t.enforce, n = $t.get, i = Object.defineProperty, o = H && !u((function () {
            return 8 !== i((function () {
            }), "length", {value: 8}).length
        })), s = String(String).split("String"), a = t.exports = function (t, n, a) {
            if ("Symbol(" === String(n).slice(0, 7) && (n = "[" + String(n).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), a && a.getter && (n = "get " + n), a && a.setter && (n = "set " + n), (!w(t, "name") || e && t.name !== n) && i(t, "name", {
                value: n,
                configurable: !0
            }), o && a && w(a, "arity") && t.length !== a.arity && i(t, "length", {value: a.arity}), a && w(a, "constructor") && a.constructor) {
                if (H) try {
                    i(t, "prototype", {writable: !1})
                } catch (t) {
                }
            } else t.prototype = void 0;
            var c = r(t);
            return w(c, "source") || (c.source = s.join("string" == typeof n ? n : "")), t
        };
        Function.prototype.toString = a((function () {
            return T(this) && n(this).source || _t(this)
        }), "toString")
    })), Ht = function (t, e, r, n) {
        n || (n = {});
        var i = n.enumerable, o = void 0 !== n.name ? n.name : e;
        return T(r) && Xt(r, o, n), n.global ? i ? t[e] = r : a(e, r) : (n.unsafe ? t[e] && (i = !0) : delete t[e], i ? t[e] = r : Et(t, e, r)), t
    }, qt = g({}.toString), Yt = g("".slice), Gt = function (t) {
        return Yt(qt(t), 8, -1)
    }, Ut = V("toStringTag"), Kt = o.Object, Jt = "Arguments" == Gt(function () {
        return arguments
    }()), Qt = X ? Gt : function (t) {
        var e, r, n;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        }(e = Kt(t), Ut)) ? r : Jt ? Gt(e) : "Object" == (n = Gt(e)) && T(e.callee) ? "Arguments" : n
    }, Zt = X ? {}.toString : function () {
        return "[object " + Qt(this) + "]"
    };
    X || Ht(Object.prototype, "toString", Zt, {unsafe: !0});
    var te = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }, ee = U("span").classList, re = ee && ee.constructor && ee.constructor.prototype,
        ne = re === Object.prototype ? void 0 : re, ie = g(g.bind), oe = function (t, e) {
            return lt(t), void 0 === e ? t : f ? ie(t, e) : function () {
                return t.apply(e, arguments)
            }
        }, se = o.Object, ae = g("".split), ce = u((function () {
            return !se("z").propertyIsEnumerable(0)
        })) ? function (t) {
            return "String" == Gt(t) ? ae(t, "") : se(t)
        } : se, le = Math.ceil, ue = Math.floor, fe = Math.trunc || function (t) {
            var e = +t;
            return (e > 0 ? ue : le)(e)
        }, he = function (t) {
            var e = +t;
            return e != e || 0 === e ? 0 : fe(e)
        }, de = Math.min, pe = function (t) {
            return t > 0 ? de(he(t), 9007199254740991) : 0
        }, ve = function (t) {
            return pe(t.length)
        }, ge = Array.isArray || function (t) {
            return "Array" == Gt(t)
        }, be = function () {
        }, ye = [], me = R("Reflect", "construct"), xe = /^\s*(?:class|function)\b/, Ee = g(xe.exec), we = !xe.exec(be),
        Oe = function (t) {
            if (!T(t)) return !1;
            try {
                return me(be, ye, t), !0
            } catch (t) {
                return !1
            }
        }, Se = function (t) {
            if (!T(t)) return !1;
            switch (Qt(t)) {
                case"AsyncFunction":
                case"GeneratorFunction":
                case"AsyncGeneratorFunction":
                    return !1
            }
            try {
                return we || !!Ee(xe, _t(t))
            } catch (t) {
                return !0
            }
        };
    Se.sham = !0;
    var Ae = !me || u((function () {
        var t;
        return Oe(Oe.call) || !Oe(Object) || !Oe((function () {
            t = !0
        })) || t
    })) ? Se : Oe, ke = V("species"), Te = o.Array, Le = function (t, e) {
        return new (function (t) {
            var e;
            return ge(t) && (e = t.constructor, (Ae(e) && (e === Te || ge(e.prototype)) || q(e) && null === (e = e[ke])) && (e = void 0)), void 0 === e ? Te : e
        }(t))(0 === e ? 0 : e)
    }, Re = g([].push), _e = function (t) {
        var e = 1 == t, r = 2 == t, n = 3 == t, i = 4 == t, o = 6 == t, s = 7 == t, a = 5 == t || o;
        return function (c, l, u, f) {
            for (var h, d, p = x(c), v = ce(p), g = oe(l, u), b = ve(v), y = 0, m = f || Le, E = e ? m(c, b) : r || s ? m(c, 0) : void 0; b > y; y++) if ((a || y in v) && (d = g(h = v[y], y, p), t)) if (e) E[y] = d; else if (d) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return h;
                case 6:
                    return y;
                case 2:
                    Re(E, h)
            } else switch (t) {
                case 4:
                    return !1;
                case 7:
                    Re(E, h)
            }
            return o ? -1 : n || i ? i : E
        }
    }, je = {
        forEach: _e(0),
        map: _e(1),
        filter: _e(2),
        some: _e(3),
        every: _e(4),
        find: _e(5),
        findIndex: _e(6),
        filterReject: _e(7)
    }, ze = function (t, e) {
        var r = [][t];
        return !!r && u((function () {
            r.call(null, e || function () {
                return 1
            }, 1)
        }))
    }, Me = je.forEach, Ce = ze("forEach") ? [].forEach : function (t) {
        return Me(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }, Ne = function (t) {
        if (t && t.forEach !== Ce) try {
            Et(t, "forEach", Ce)
        } catch (e) {
            t.forEach = Ce
        }
    };
    for (var We in te) te[We] && Ne(o[We] && o[We].prototype);
    Ne(ne);
    var Ie = !("undefined" == typeof window || !window.document || !window.document.createElement),
        Pe = {}.propertyIsEnumerable, Be = Object.getOwnPropertyDescriptor, De = {
            f: Be && !Pe.call({1: 2}, 1) ? function (t) {
                var e = Be(this, t);
                return !!e && e.enumerable
            } : Pe
        }, Fe = function (t) {
            return ce(y(t))
        }, Ve = Object.getOwnPropertyDescriptor, $e = {
            f: H ? Ve : function (t, e) {
                if (t = Fe(t), e = vt(e), K) try {
                    return Ve(t, e)
                } catch (t) {
                }
                if (w(t, e)) return xt(!rt(De.f, t, e), t[e])
            }
        }, Xe = Math.max, He = Math.min, qe = function (t, e) {
            var r = he(t);
            return r < 0 ? Xe(r + e, 0) : He(r, e)
        }, Ye = function (t) {
            return function (e, r, n) {
                var i, o = Fe(e), s = ve(o), a = qe(n, s);
                if (t && r != r) {
                    for (; s > a;) if ((i = o[a++]) != i) return !0
                } else for (; s > a; a++) if ((t || a in o) && o[a] === r) return t || a || 0;
                return !t && -1
            }
        }, Ge = {includes: Ye(!0), indexOf: Ye(!1)}.indexOf, Ue = g([].push), Ke = function (t, e) {
            var r, n = Fe(t), i = 0, o = [];
            for (r in n) !w(Nt, r) && w(n, r) && Ue(o, r);
            for (; e.length > i;) w(n, r = e[i++]) && (~Ge(o, r) || Ue(o, r));
            return o
        },
        Je = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Qe = Je.concat("length", "prototype"), Ze = {
            f: Object.getOwnPropertyNames || function (t) {
                return Ke(t, Qe)
            }
        }, tr = {f: Object.getOwnPropertySymbols}, er = g([].concat), rr = R("Reflect", "ownKeys") || function (t) {
            var e = Ze.f(tt(t)), r = tr.f;
            return r ? er(e, r(t)) : e
        }, nr = function (t, e, r) {
            for (var n = rr(e), i = mt.f, o = $e.f, s = 0; s < n.length; s++) {
                var a = n[s];
                w(t, a) || r && w(r, a) || i(t, a, o(e, a))
            }
        }, ir = /#|\.prototype\./, or = function (t, e) {
            var r = ar[sr(t)];
            return r == lr || r != cr && (T(e) ? u(e) : !!e)
        }, sr = or.normalize = function (t) {
            return String(t).replace(ir, ".").toLowerCase()
        }, ar = or.data = {}, cr = or.NATIVE = "N", lr = or.POLYFILL = "P", ur = or, fr = $e.f, hr = function (t, e) {
            var r, n, i, s, c, l = t.target, u = t.global, f = t.stat;
            if (r = u ? o : f ? o[l] || a(l, {}) : (o[l] || {}).prototype) for (n in e) {
                if (s = e[n], i = t.dontCallGetSet ? (c = fr(r, n)) && c.value : r[n], !ur(u ? n : l + (f ? "." : "#") + n, t.forced) && void 0 !== i) {
                    if (typeof s == typeof i) continue;
                    nr(s, i)
                }
                (t.sham || i && i.sham) && Et(s, "sham", !0), Ht(r, n, s, t)
            }
        }, dr = o.String, pr = function (t) {
            if ("Symbol" === Qt(t)) throw TypeError("Cannot convert a Symbol value to a string");
            return dr(t)
        }, vr = "\t\n\v\f\r                　\u2028\u2029\ufeff", gr = g("".replace), br = "[" + vr + "]",
        yr = RegExp("^" + br + br + "*"), mr = RegExp(br + br + "*$"), xr = function (t) {
            return function (e) {
                var r = pr(y(e));
                return 1 & t && (r = gr(r, yr, "")), 2 & t && (r = gr(r, mr, "")), r
            }
        }, Er = {start: xr(1), end: xr(2), trim: xr(3)}.trim, wr = o.parseInt, Or = o.Symbol, Sr = Or && Or.iterator,
        Ar = /^[+-]?0x/i, kr = g(Ar.exec), Tr = 8 !== wr(vr + "08") || 22 !== wr(vr + "0x16") || Sr && !u((function () {
            wr(Object(Sr))
        })) ? function (t, e) {
            var r = Er(pr(t));
            return wr(r, e >>> 0 || (kr(Ar, r) ? 16 : 10))
        } : wr;
    hr({global: !0, forced: parseInt != Tr}, {parseInt: Tr});
    var Lr = Object.keys || function (t) {
        return Ke(t, Je)
    }, Rr = Object.assign, _r = Object.defineProperty, jr = g([].concat), zr = !Rr || u((function () {
        if (H && 1 !== Rr({b: 1}, Rr(_r({}, "a", {
            enumerable: !0, get: function () {
                _r(this, "b", {value: 3, enumerable: !1})
            }
        }), {b: 2})).b) return !0;
        var t = {}, e = {}, r = Symbol();
        return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) {
            e[t] = t
        })), 7 != Rr({}, t)[r] || "abcdefghijklmnopqrst" != Lr(Rr({}, e)).join("")
    })) ? function (t, e) {
        for (var r = x(t), n = arguments.length, i = 1, o = tr.f, s = De.f; n > i;) for (var a, c = ce(arguments[i++]), l = o ? jr(Lr(c), o(c)) : Lr(c), u = l.length, f = 0; u > f;) a = l[f++], H && !rt(s, c, a) || (r[a] = c[a]);
        return r
    } : Rr;
    hr({target: "Object", stat: !0, arity: 2, forced: Object.assign !== zr}, {assign: zr});
    var Mr, Cr = V("species"), Nr = je.filter, Wr = (Mr = "filter", N >= 51 || !u((function () {
        var t = [];
        return (t.constructor = {})[Cr] = function () {
            return {foo: 1}
        }, 1 !== t[Mr](Boolean).foo
    })));
    hr({target: "Array", proto: !0, forced: !Wr}, {
        filter: function (t) {
            return Nr(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Ir, Pr = {
        f: H && !J ? Object.defineProperties : function (t, e) {
            tt(t);
            for (var r, n = Fe(e), i = Lr(e), o = i.length, s = 0; o > s;) mt.f(t, r = i[s++], n[r]);
            return t
        }
    }, Br = R("document", "documentElement"), Dr = Ct("IE_PROTO"), Fr = function () {
    }, Vr = function (t) {
        return "<script>" + t + "<\/script>"
    }, $r = function (t) {
        t.write(Vr("")), t.close();
        var e = t.parentWindow.Object;
        return t = null, e
    }, Xr = function () {
        try {
            Ir = new ActiveXObject("htmlfile")
        } catch (t) {
        }
        var t, e;
        Xr = "undefined" != typeof document ? document.domain && Ir ? $r(Ir) : ((e = U("iframe")).style.display = "none", Br.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Vr("document.F=Object")), t.close(), t.F) : $r(Ir);
        for (var r = Je.length; r--;) delete Xr.prototype[Je[r]];
        return Xr()
    };
    Nt[Dr] = !0;
    var Hr = Object.create || function (t, e) {
        var r;
        return null !== t ? (Fr.prototype = tt(t), r = new Fr, Fr.prototype = null, r[Dr] = t) : r = Xr(), void 0 === e ? r : Pr.f(r, e)
    }, qr = mt.f, Yr = V("unscopables"), Gr = Array.prototype;
    null == Gr[Yr] && qr(Gr, Yr, {configurable: !0, value: Hr(null)});
    var Ur, Kr, Jr, Qr = function (t) {
        Gr[Yr][t] = !0
    }, Zr = {}, tn = !u((function () {
        function t() {
        }

        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    })), en = Ct("IE_PROTO"), rn = o.Object, nn = rn.prototype, on = tn ? rn.getPrototypeOf : function (t) {
        var e = x(t);
        if (w(e, en)) return e[en];
        var r = e.constructor;
        return T(r) && e instanceof r ? r.prototype : e instanceof rn ? nn : null
    }, sn = V("iterator"), an = !1;
    [].keys && ("next" in (Jr = [].keys()) ? (Kr = on(on(Jr))) !== Object.prototype && (Ur = Kr) : an = !0), (null == Ur || u((function () {
        var t = {};
        return Ur[sn].call(t) !== t
    }))) && (Ur = {}), T(Ur[sn]) || Ht(Ur, sn, (function () {
        return this
    }));
    var cn = {IteratorPrototype: Ur, BUGGY_SAFARI_ITERATORS: an}, ln = mt.f, un = V("toStringTag"),
        fn = function (t, e, r) {
            t && !r && (t = t.prototype), t && !w(t, un) && ln(t, un, {configurable: !0, value: e})
        }, hn = cn.IteratorPrototype, dn = function () {
            return this
        }, pn = o.String, vn = o.TypeError, gn = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, e = !1, r = {};
            try {
                (t = g(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), e = r instanceof Array
            } catch (t) {
            }
            return function (r, n) {
                return tt(r), function (t) {
                    if ("object" == typeof t || T(t)) return t;
                    throw vn("Can't set " + pn(t) + " as a prototype")
                }(n), e ? t(r, n) : r.__proto__ = n, r
            }
        }() : void 0), bn = At.PROPER, yn = At.CONFIGURABLE, mn = cn.IteratorPrototype, xn = cn.BUGGY_SAFARI_ITERATORS,
        En = V("iterator"), wn = function () {
            return this
        }, On = function (t, e, r, n, i, o, s) {
            !function (t, e, r, n) {
                var i = e + " Iterator";
                t.prototype = Hr(hn, {next: xt(+!n, r)}), fn(t, i, !1), Zr[i] = dn
            }(r, e, n);
            var a, c, l, u = function (t) {
                    if (t === i && v) return v;
                    if (!xn && t in d) return d[t];
                    switch (t) {
                        case"keys":
                        case"values":
                        case"entries":
                            return function () {
                                return new r(this, t)
                            }
                    }
                    return function () {
                        return new r(this)
                    }
                }, f = e + " Iterator", h = !1, d = t.prototype, p = d[En] || d["@@iterator"] || i && d[i],
                v = !xn && p || u(i), g = "Array" == e && d.entries || p;
            if (g && (a = on(g.call(new t))) !== Object.prototype && a.next && (on(a) !== mn && (gn ? gn(a, mn) : T(a[En]) || Ht(a, En, wn)), fn(a, f, !0)), bn && "values" == i && p && "values" !== p.name && (yn ? Et(d, "name", "values") : (h = !0, v = function () {
                return rt(p, this)
            })), i) if (c = {
                values: u("values"),
                keys: o ? v : u("keys"),
                entries: u("entries")
            }, s) for (l in c) (xn || h || !(l in d)) && Ht(d, l, c[l]); else hr({
                target: e,
                proto: !0,
                forced: xn || h
            }, c);
            return d[En] !== v && Ht(d, En, v, {name: i}), Zr[e] = v, c
        }, Sn = mt.f, An = $t.set, kn = $t.getterFor("Array Iterator"), Tn = On(Array, "Array", (function (t, e) {
            An(this, {type: "Array Iterator", target: Fe(t), index: 0, kind: e})
        }), (function () {
            var t = kn(this), e = t.target, r = t.kind, n = t.index++;
            return !e || n >= e.length ? (t.target = void 0, {value: void 0, done: !0}) : "keys" == r ? {
                value: n,
                done: !1
            } : "values" == r ? {value: e[n], done: !1} : {value: [n, e[n]], done: !1}
        }), "values"), Ln = Zr.Arguments = Zr.Array;
    if (Qr("keys"), Qr("values"), Qr("entries"), H && "values" !== Ln.name) try {
        Sn(Ln, "name", {value: "values"})
    } catch (t) {
    }
    var Rn = g("".charAt), _n = g("".charCodeAt), jn = g("".slice), zn = function (t) {
        return function (e, r) {
            var n, i, o = pr(y(e)), s = he(r), a = o.length;
            return s < 0 || s >= a ? t ? "" : void 0 : (n = _n(o, s)) < 55296 || n > 56319 || s + 1 === a || (i = _n(o, s + 1)) < 56320 || i > 57343 ? t ? Rn(o, s) : n : t ? jn(o, s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
        }
    }, Mn = {codeAt: zn(!1), charAt: zn(!0)}, Cn = Mn.charAt, Nn = $t.set, Wn = $t.getterFor("String Iterator");
    On(String, "String", (function (t) {
        Nn(this, {type: "String Iterator", string: pr(t), index: 0})
    }), (function () {
        var t, e = Wn(this), r = e.string, n = e.index;
        return n >= r.length ? {value: void 0, done: !0} : (t = Cn(r, n), e.index += t.length, {value: t, done: !1})
    }));
    var In = function (t, e, r) {
            for (var n in e) Ht(t, n, e[n], r);
            return t
        }, Pn = o.Array, Bn = Math.max, Dn = Ze.f,
        Fn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Vn = function (t) {
            try {
                return Dn(t)
            } catch (t) {
                return function (t, e, r) {
                    for (var n, i, o, s, a = ve(t), c = qe(e, a), l = qe(void 0 === r ? a : r, a), u = Pn(Bn(l - c, 0)), f = 0; c < l; c++, f++) n = u, i = f, o = t[c], s = void 0, (s = vt(i)) in n ? mt.f(n, s, xt(0, o)) : n[s] = o;
                    return u.length = f, u
                }(Fn)
            }
        }, $n = {
            f: function (t) {
                return Fn && "Window" == Gt(t) ? Vn(t) : Dn(Fe(t))
            }
        }, Xn = u((function () {
            if ("function" == typeof ArrayBuffer) {
                var t = new ArrayBuffer(8);
                Object.isExtensible(t) && Object.defineProperty(t, "a", {value: 8})
            }
        })), Hn = Object.isExtensible, qn = u((function () {
            Hn(1)
        })) || Xn ? function (t) {
            return !!q(t) && ((!Xn || "ArrayBuffer" != Gt(t)) && (!Hn || Hn(t)))
        } : Hn, Yn = !u((function () {
            return Object.isExtensible(Object.preventExtensions({}))
        })), Gn = e((function (t) {
            var e = mt.f, r = !1, n = k("meta"), i = 0, o = function (t) {
                e(t, n, {value: {objectID: "O" + i++, weakData: {}}})
            }, s = t.exports = {
                enable: function () {
                    s.enable = function () {
                    }, r = !0;
                    var t = Ze.f, e = g([].splice), i = {};
                    i[n] = 1, t(i).length && (Ze.f = function (r) {
                        for (var i = t(r), o = 0, s = i.length; o < s; o++) if (i[o] === n) {
                            e(i, o, 1);
                            break
                        }
                        return i
                    }, hr({target: "Object", stat: !0, forced: !0}, {getOwnPropertyNames: $n.f}))
                }, fastKey: function (t, e) {
                    if (!q(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!w(t, n)) {
                        if (!qn(t)) return "F";
                        if (!e) return "E";
                        o(t)
                    }
                    return t[n].objectID
                }, getWeakData: function (t, e) {
                    if (!w(t, n)) {
                        if (!qn(t)) return !0;
                        if (!e) return !1;
                        o(t)
                    }
                    return t[n].weakData
                }, onFreeze: function (t) {
                    return Yn && r && qn(t) && !w(t, n) && o(t), t
                }
            };
            Nt[n] = !0
        })), Un = (Gn.enable, Gn.fastKey, Gn.getWeakData, Gn.onFreeze, V("iterator")), Kn = Array.prototype,
        Jn = V("iterator"), Qn = function (t) {
            if (null != t) return ut(t, Jn) || ut(t, "@@iterator") || Zr[Qt(t)]
        }, Zn = o.TypeError, ti = function (t, e, r) {
            var n, i;
            tt(t);
            try {
                if (!(n = ut(t, "return"))) {
                    if ("throw" === e) throw r;
                    return r
                }
                n = rt(n, t)
            } catch (t) {
                i = !0, n = t
            }
            if ("throw" === e) throw r;
            if (i) throw n;
            return tt(n), r
        }, ei = o.TypeError, ri = function (t, e) {
            this.stopped = t, this.result = e
        }, ni = ri.prototype, ii = function (t, e, r) {
            var n, i, o, s, a, c, l, u, f = r && r.that, h = !(!r || !r.AS_ENTRIES), d = !(!r || !r.IS_ITERATOR),
                p = !(!r || !r.INTERRUPTED), v = oe(e, f), g = function (t) {
                    return n && ti(n, "normal", t), new ri(!0, t)
                }, b = function (t) {
                    return h ? (tt(t), p ? v(t[0], t[1], g) : v(t[0], t[1])) : p ? v(t, g) : v(t)
                };
            if (d) n = t; else {
                if (!(i = Qn(t))) throw ei(at(t) + " is not iterable");
                if (void 0 !== (u = i) && (Zr.Array === u || Kn[Un] === u)) {
                    for (o = 0, s = ve(t); s > o; o++) if ((a = b(t[o])) && nt(ni, a)) return a;
                    return new ri(!1)
                }
                n = function (t, e) {
                    var r = arguments.length < 2 ? Qn(t) : e;
                    if (lt(r)) return tt(rt(r, t));
                    throw Zn(at(t) + " is not iterable")
                }(t, i)
            }
            for (c = n.next; !(l = rt(c, n)).done;) {
                try {
                    a = b(l.value)
                } catch (t) {
                    ti(n, "throw", t)
                }
                if ("object" == typeof a && a && nt(ni, a)) return a
            }
            return new ri(!1)
        }, oi = o.TypeError, si = function (t, e) {
            if (nt(e, t)) return t;
            throw oi("Incorrect invocation")
        }, ai = V("iterator"), ci = !1;
    try {
        var li = 0, ui = {
            next: function () {
                return {done: !!li++}
            }, return: function () {
                ci = !0
            }
        };
        ui[ai] = function () {
            return this
        }, Array.from(ui, (function () {
            throw 2
        }))
    } catch (t) {
    }
    var fi = Gn.getWeakData, hi = $t.set, di = $t.getterFor, pi = je.find, vi = je.findIndex, gi = g([].splice), bi = 0,
        yi = function (t) {
            return t.frozen || (t.frozen = new mi)
        }, mi = function () {
            this.entries = []
        }, xi = function (t, e) {
            return pi(t.entries, (function (t) {
                return t[0] === e
            }))
        };
    mi.prototype = {
        get: function (t) {
            var e = xi(this, t);
            if (e) return e[1]
        }, has: function (t) {
            return !!xi(this, t)
        }, set: function (t, e) {
            var r = xi(this, t);
            r ? r[1] = e : this.entries.push([t, e])
        }, delete: function (t) {
            var e = vi(this.entries, (function (e) {
                return e[0] === t
            }));
            return ~e && gi(this.entries, e, 1), !!~e
        }
    };
    var Ei, wi = {
        getConstructor: function (t, e, r, n) {
            var i = t((function (t, i) {
                si(t, o), hi(t, {type: e, id: bi++, frozen: void 0}), null != i && ii(i, t[n], {that: t, AS_ENTRIES: r})
            })), o = i.prototype, s = di(e), a = function (t, e, r) {
                var n = s(t), i = fi(tt(e), !0);
                return !0 === i ? yi(n).set(e, r) : i[n.id] = r, t
            };
            return In(o, {
                delete: function (t) {
                    var e = s(this);
                    if (!q(t)) return !1;
                    var r = fi(t);
                    return !0 === r ? yi(e).delete(t) : r && w(r, e.id) && delete r[e.id]
                }, has: function (t) {
                    var e = s(this);
                    if (!q(t)) return !1;
                    var r = fi(t);
                    return !0 === r ? yi(e).has(t) : r && w(r, e.id)
                }
            }), In(o, r ? {
                get: function (t) {
                    var e = s(this);
                    if (q(t)) {
                        var r = fi(t);
                        return !0 === r ? yi(e).get(t) : r ? r[e.id] : void 0
                    }
                }, set: function (t, e) {
                    return a(this, t, e)
                }
            } : {
                add: function (t) {
                    return a(this, t, !0)
                }
            }), i
        }
    }, Oi = $t.enforce, Si = !o.ActiveXObject && "ActiveXObject" in o, Ai = function (t) {
        return function () {
            return t(this, arguments.length ? arguments[0] : void 0)
        }
    }, ki = function (t, e, r) {
        var n = -1 !== t.indexOf("Map"), i = -1 !== t.indexOf("Weak"), s = n ? "set" : "add", a = o[t],
            c = a && a.prototype, l = a, f = {}, h = function (t) {
                var e = g(c[t]);
                Ht(c, t, "add" == t ? function (t) {
                    return e(this, 0 === t ? 0 : t), this
                } : "delete" == t ? function (t) {
                    return !(i && !q(t)) && e(this, 0 === t ? 0 : t)
                } : "get" == t ? function (t) {
                    return i && !q(t) ? void 0 : e(this, 0 === t ? 0 : t)
                } : "has" == t ? function (t) {
                    return !(i && !q(t)) && e(this, 0 === t ? 0 : t)
                } : function (t, r) {
                    return e(this, 0 === t ? 0 : t, r), this
                })
            };
        if (ur(t, !T(a) || !(i || c.forEach && !u((function () {
            (new a).entries().next()
        }))))) l = r.getConstructor(e, t, n, s), Gn.enable(); else if (ur(t, !0)) {
            var d = new l, p = d[s](i ? {} : -0, 1) != d, v = u((function () {
                d.has(1)
            })), b = function (t, e) {
                if (!e && !ci) return !1;
                var r = !1;
                try {
                    var n = {};
                    n[ai] = function () {
                        return {
                            next: function () {
                                return {done: r = !0}
                            }
                        }
                    }, t(n)
                } catch (t) {
                }
                return r
            }((function (t) {
                new a(t)
            })), y = !i && u((function () {
                for (var t = new a, e = 5; e--;) t[s](e, e);
                return !t.has(-0)
            }));
            b || ((l = e((function (t, e) {
                si(t, c);
                var r = function (t, e, r) {
                    var n, i;
                    return gn && T(n = e.constructor) && n !== r && q(i = n.prototype) && i !== r.prototype && gn(t, i), t
                }(new a, t, l);
                return null != e && ii(e, r[s], {that: r, AS_ENTRIES: n}), r
            }))).prototype = c, c.constructor = l), (v || y) && (h("delete"), h("has"), n && h("get")), (y || p) && h(s), i && c.clear && delete c.clear
        }
        return f[t] = l, hr({global: !0, constructor: !0, forced: l != a}, f), fn(l, t), i || r.setStrong(l, t, n), l
    }("WeakMap", Ai, wi);
    if (zt && Si) {
        Ei = wi.getConstructor(Ai, "WeakMap", !0), Gn.enable();
        var Ti = ki.prototype, Li = g(Ti.delete), Ri = g(Ti.has), _i = g(Ti.get), ji = g(Ti.set);
        In(Ti, {
            delete: function (t) {
                if (q(t) && !qn(t)) {
                    var e = Oi(this);
                    return e.frozen || (e.frozen = new Ei), Li(this, t) || e.frozen.delete(t)
                }
                return Li(this, t)
            }, has: function (t) {
                if (q(t) && !qn(t)) {
                    var e = Oi(this);
                    return e.frozen || (e.frozen = new Ei), Ri(this, t) || e.frozen.has(t)
                }
                return Ri(this, t)
            }, get: function (t) {
                if (q(t) && !qn(t)) {
                    var e = Oi(this);
                    return e.frozen || (e.frozen = new Ei), Ri(this, t) ? _i(this, t) : e.frozen.get(t)
                }
                return _i(this, t)
            }, set: function (t, e) {
                if (q(t) && !qn(t)) {
                    var r = Oi(this);
                    r.frozen || (r.frozen = new Ei), Ri(this, t) ? ji(this, t, e) : r.frozen.set(t, e)
                } else ji(this, t, e);
                return this
            }
        })
    }
    var zi = V("iterator"), Mi = V("toStringTag"), Ci = Tn.values, Ni = function (t, e) {
        if (t) {
            if (t[zi] !== Ci) try {
                Et(t, zi, Ci)
            } catch (e) {
                t[zi] = Ci
            }
            if (t[Mi] || Et(t, Mi, e), te[e]) for (var r in Tn) if (t[r] !== Tn[r]) try {
                Et(t, r, Tn[r])
            } catch (e) {
                t[r] = Tn[r]
            }
        }
    };
    for (var Wi in te) Ni(o[Wi] && o[Wi].prototype, Wi);
    Ni(ne, "DOMTokenList");
    var Ii = /^\s+|\s+$/g, Pi = /^[-+]0x[0-9a-f]+$/i, Bi = /^0b[01]+$/i, Di = /^0o[0-7]+$/i, Fi = parseInt,
        Vi = "object" == typeof t && t && t.Object === Object && t,
        $i = "object" == typeof self && self && self.Object === Object && self,
        Xi = Vi || $i || Function("return this")(), Hi = Object.prototype.toString, qi = Math.max, Yi = Math.min,
        Gi = function () {
            return Xi.Date.now()
        };

    function Ui(t, e, r) {
        var n, i, o, s, a, c, l = 0, u = !1, f = !1, h = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function d(e) {
            var r = n, o = i;
            return n = i = void 0, l = e, s = t.apply(o, r)
        }

        function p(t) {
            return l = t, a = setTimeout(g, e), u ? d(t) : s
        }

        function v(t) {
            var r = t - c;
            return void 0 === c || r >= e || r < 0 || f && t - l >= o
        }

        function g() {
            var t = Gi();
            if (v(t)) return b(t);
            a = setTimeout(g, function (t) {
                var r = e - (t - c);
                return f ? Yi(r, o - (t - l)) : r
            }(t))
        }

        function b(t) {
            return a = void 0, h && n ? d(t) : (n = i = void 0, s)
        }

        function y() {
            var t = Gi(), r = v(t);
            if (n = arguments, i = this, c = t, r) {
                if (void 0 === a) return p(c);
                if (f) return a = setTimeout(g, e), d(c)
            }
            return void 0 === a && (a = setTimeout(g, e)), s
        }

        return e = Ji(e) || 0, Ki(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? qi(Ji(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function () {
            void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
        }, y.flush = function () {
            return void 0 === a ? s : b(Gi())
        }, y
    }

    function Ki(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function Ji(t) {
        if ("number" == typeof t) return t;
        if (function (t) {
            return "symbol" == typeof t || function (t) {
                return !!t && "object" == typeof t
            }(t) && "[object Symbol]" == Hi.call(t)
        }(t)) return NaN;
        if (Ki(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Ki(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Ii, "");
        var r = Bi.test(t);
        return r || Di.test(t) ? Fi(t.slice(2), r ? 2 : 8) : Pi.test(t) ? NaN : +t
    }

    var Qi = function (t, e, r) {
            var n = !0, i = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return Ki(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), Ui(t, e, {
                leading: n,
                maxWait: e,
                trailing: i
            })
        }, Zi = /^\s+|\s+$/g, to = /^[-+]0x[0-9a-f]+$/i, eo = /^0b[01]+$/i, ro = /^0o[0-7]+$/i, no = parseInt,
        io = "object" == typeof t && t && t.Object === Object && t,
        oo = "object" == typeof self && self && self.Object === Object && self,
        so = io || oo || Function("return this")(), ao = Object.prototype.toString, co = Math.max, lo = Math.min,
        uo = function () {
            return so.Date.now()
        };

    function fo(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function ho(t) {
        if ("number" == typeof t) return t;
        if (function (t) {
            return "symbol" == typeof t || function (t) {
                return !!t && "object" == typeof t
            }(t) && "[object Symbol]" == ao.call(t)
        }(t)) return NaN;
        if (fo(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = fo(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Zi, "");
        var r = eo.test(t);
        return r || ro.test(t) ? no(t.slice(2), r ? 2 : 8) : to.test(t) ? NaN : +t
    }

    var po = function (t, e, r) {
            var n, i, o, s, a, c, l = 0, u = !1, f = !1, h = !0;
            if ("function" != typeof t) throw new TypeError("Expected a function");

            function d(e) {
                var r = n, o = i;
                return n = i = void 0, l = e, s = t.apply(o, r)
            }

            function p(t) {
                return l = t, a = setTimeout(g, e), u ? d(t) : s
            }

            function v(t) {
                var r = t - c;
                return void 0 === c || r >= e || r < 0 || f && t - l >= o
            }

            function g() {
                var t = uo();
                if (v(t)) return b(t);
                a = setTimeout(g, function (t) {
                    var r = e - (t - c);
                    return f ? lo(r, o - (t - l)) : r
                }(t))
            }

            function b(t) {
                return a = void 0, h && n ? d(t) : (n = i = void 0, s)
            }

            function y() {
                var t = uo(), r = v(t);
                if (n = arguments, i = this, c = t, r) {
                    if (void 0 === a) return p(c);
                    if (f) return a = setTimeout(g, e), d(c)
                }
                return void 0 === a && (a = setTimeout(g, e)), s
            }

            return e = ho(e) || 0, fo(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? co(ho(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function () {
                void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
            }, y.flush = function () {
                return void 0 === a ? s : b(uo())
            }, y
        }, vo = /^\[object .+?Constructor\]$/, go = "object" == typeof t && t && t.Object === Object && t,
        bo = "object" == typeof self && self && self.Object === Object && self,
        yo = go || bo || Function("return this")();
    var mo = Array.prototype, xo = Function.prototype, Eo = Object.prototype, wo = yo["__core-js_shared__"],
        Oo = function () {
            var t = /[^.]+$/.exec(wo && wo.keys && wo.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }(), So = xo.toString, Ao = Eo.hasOwnProperty, ko = Eo.toString,
        To = RegExp("^" + So.call(Ao).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Lo = mo.splice, Ro = Io(yo, "Map"), _o = Io(Object, "create");

    function jo(t) {
        var e = -1, r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function zo(t) {
        var e = -1, r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Mo(t) {
        var e = -1, r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Co(t, e) {
        for (var r, n, i = t.length; i--;) if ((r = t[i][0]) === (n = e) || r != r && n != n) return i;
        return -1
    }

    function No(t) {
        return !(!Bo(t) || (e = t, Oo && Oo in e)) && (function (t) {
            var e = Bo(t) ? ko.call(t) : "";
            return "[object Function]" == e || "[object GeneratorFunction]" == e
        }(t) || function (t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString) try {
                e = !!(t + "")
            } catch (t) {
            }
            return e
        }(t) ? To : vo).test(function (t) {
            if (null != t) {
                try {
                    return So.call(t)
                } catch (t) {
                }
                try {
                    return t + ""
                } catch (t) {
                }
            }
            return ""
        }(t));
        var e
    }

    function Wo(t, e) {
        var r, n, i = t.__data__;
        return ("string" == (n = typeof (r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map
    }

    function Io(t, e) {
        var r = function (t, e) {
            return null == t ? void 0 : t[e]
        }(t, e);
        return No(r) ? r : void 0
    }

    function Po(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError("Expected a function");
        var r = function () {
            var n = arguments, i = e ? e.apply(this, n) : n[0], o = r.cache;
            if (o.has(i)) return o.get(i);
            var s = t.apply(this, n);
            return r.cache = o.set(i, s), s
        };
        return r.cache = new (Po.Cache || Mo), r
    }

    function Bo(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    jo.prototype.clear = function () {
        this.__data__ = _o ? _o(null) : {}
    }, jo.prototype.delete = function (t) {
        return this.has(t) && delete this.__data__[t]
    }, jo.prototype.get = function (t) {
        var e = this.__data__;
        if (_o) {
            var r = e[t];
            return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return Ao.call(e, t) ? e[t] : void 0
    }, jo.prototype.has = function (t) {
        var e = this.__data__;
        return _o ? void 0 !== e[t] : Ao.call(e, t)
    }, jo.prototype.set = function (t, e) {
        return this.__data__[t] = _o && void 0 === e ? "__lodash_hash_undefined__" : e, this
    }, zo.prototype.clear = function () {
        this.__data__ = []
    }, zo.prototype.delete = function (t) {
        var e = this.__data__, r = Co(e, t);
        return !(r < 0) && (r == e.length - 1 ? e.pop() : Lo.call(e, r, 1), !0)
    }, zo.prototype.get = function (t) {
        var e = this.__data__, r = Co(e, t);
        return r < 0 ? void 0 : e[r][1]
    }, zo.prototype.has = function (t) {
        return Co(this.__data__, t) > -1
    }, zo.prototype.set = function (t, e) {
        var r = this.__data__, n = Co(r, t);
        return n < 0 ? r.push([t, e]) : r[n][1] = e, this
    }, Mo.prototype.clear = function () {
        this.__data__ = {hash: new jo, map: new (Ro || zo), string: new jo}
    }, Mo.prototype.delete = function (t) {
        return Wo(this, t).delete(t)
    }, Mo.prototype.get = function (t) {
        return Wo(this, t).get(t)
    }, Mo.prototype.has = function (t) {
        return Wo(this, t).has(t)
    }, Mo.prototype.set = function (t, e) {
        return Wo(this, t).set(t, e), this
    }, Po.Cache = Mo;
    var Do, Fo = Po, Vo = [], $o = "ResizeObserver loop completed with undelivered notifications.";
    !function (t) {
        t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
    }(Do || (Do = {}));
    var Xo, Ho = function (t) {
            return Object.freeze(t)
        }, qo = function (t, e) {
            this.inlineSize = t, this.blockSize = e, Ho(this)
        }, Yo = function () {
            function t(t, e, r, n) {
                return this.x = t, this.y = e, this.width = r, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ho(this)
            }

            return t.prototype.toJSON = function () {
                var t = this;
                return {
                    x: t.x,
                    y: t.y,
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.width,
                    height: t.height
                }
            }, t.fromRect = function (e) {
                return new t(e.x, e.y, e.width, e.height)
            }, t
        }(), Go = function (t) {
            return t instanceof SVGElement && "getBBox" in t
        }, Uo = function (t) {
            if (Go(t)) {
                var e = t.getBBox(), r = e.width, n = e.height;
                return !r && !n
            }
            var i = t, o = i.offsetWidth, s = i.offsetHeight;
            return !(o || s || t.getClientRects().length)
        }, Ko = function (t) {
            var e, r;
            if (t instanceof Element) return !0;
            var n = null === (r = null === (e = t) || void 0 === e ? void 0 : e.ownerDocument) || void 0 === r ? void 0 : r.defaultView;
            return !!(n && t instanceof n.Element)
        }, Jo = "undefined" != typeof window ? window : {}, Qo = new WeakMap, Zo = /auto|scroll/, ts = /^tb|vertical/,
        es = /msie|trident/i.test(Jo.navigator && Jo.navigator.userAgent), rs = function (t) {
            return parseFloat(t || "0")
        }, ns = function (t, e, r) {
            return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = !1), new qo((r ? e : t) || 0, (r ? t : e) || 0)
        }, is = Ho({
            devicePixelContentBoxSize: ns(),
            borderBoxSize: ns(),
            contentBoxSize: ns(),
            contentRect: new Yo(0, 0, 0, 0)
        }), os = function (t, e) {
            if (void 0 === e && (e = !1), Qo.has(t) && !e) return Qo.get(t);
            if (Uo(t)) return Qo.set(t, is), is;
            var r = getComputedStyle(t), n = Go(t) && t.ownerSVGElement && t.getBBox(),
                i = !es && "border-box" === r.boxSizing, o = ts.test(r.writingMode || ""),
                s = !n && Zo.test(r.overflowY || ""), a = !n && Zo.test(r.overflowX || ""), c = n ? 0 : rs(r.paddingTop),
                l = n ? 0 : rs(r.paddingRight), u = n ? 0 : rs(r.paddingBottom), f = n ? 0 : rs(r.paddingLeft),
                h = n ? 0 : rs(r.borderTopWidth), d = n ? 0 : rs(r.borderRightWidth), p = n ? 0 : rs(r.borderBottomWidth),
                v = f + l, g = c + u, b = (n ? 0 : rs(r.borderLeftWidth)) + d, y = h + p,
                m = a ? t.offsetHeight - y - t.clientHeight : 0, x = s ? t.offsetWidth - b - t.clientWidth : 0,
                E = i ? v + b : 0, w = i ? g + y : 0, O = n ? n.width : rs(r.width) - E - x,
                S = n ? n.height : rs(r.height) - w - m, A = O + v + x + b, k = S + g + m + y, T = Ho({
                    devicePixelContentBoxSize: ns(Math.round(O * devicePixelRatio), Math.round(S * devicePixelRatio), o),
                    borderBoxSize: ns(A, k, o),
                    contentBoxSize: ns(O, S, o),
                    contentRect: new Yo(f, c, O, S)
                });
            return Qo.set(t, T), T
        }, ss = function (t, e, r) {
            var n = os(t, r), i = n.borderBoxSize, o = n.contentBoxSize, s = n.devicePixelContentBoxSize;
            switch (e) {
                case Do.DEVICE_PIXEL_CONTENT_BOX:
                    return s;
                case Do.BORDER_BOX:
                    return i;
                default:
                    return o
            }
        }, as = function (t) {
            var e = os(t);
            this.target = t, this.contentRect = e.contentRect, this.borderBoxSize = Ho([e.borderBoxSize]), this.contentBoxSize = Ho([e.contentBoxSize]), this.devicePixelContentBoxSize = Ho([e.devicePixelContentBoxSize])
        }, cs = function (t) {
            if (Uo(t)) return 1 / 0;
            for (var e = 0, r = t.parentNode; r;) e += 1, r = r.parentNode;
            return e
        }, ls = function () {
            var t = 1 / 0, e = [];
            Vo.forEach((function (r) {
                if (0 !== r.activeTargets.length) {
                    var n = [];
                    r.activeTargets.forEach((function (e) {
                        var r = new as(e.target), i = cs(e.target);
                        n.push(r), e.lastReportedSize = ss(e.target, e.observedBox), i < t && (t = i)
                    })), e.push((function () {
                        r.callback.call(r.observer, n, r.observer)
                    })), r.activeTargets.splice(0, r.activeTargets.length)
                }
            }));
            for (var r = 0, n = e; r < n.length; r++) {
                (0, n[r])()
            }
            return t
        }, us = function (t) {
            Vo.forEach((function (e) {
                e.activeTargets.splice(0, e.activeTargets.length), e.skippedTargets.splice(0, e.skippedTargets.length), e.observationTargets.forEach((function (r) {
                    r.isActive() && (cs(r.target) > t ? e.activeTargets.push(r) : e.skippedTargets.push(r))
                }))
            }))
        }, fs = function () {
            var t, e = 0;
            for (us(e); Vo.some((function (t) {
                return t.activeTargets.length > 0
            }));) e = ls(), us(e);
            return Vo.some((function (t) {
                return t.skippedTargets.length > 0
            })) && ("function" == typeof ErrorEvent ? t = new ErrorEvent("error", {message: $o}) : ((t = document.createEvent("Event")).initEvent("error", !1, !1), t.message = $o), window.dispatchEvent(t)), e > 0
        }, hs = [], ds = function (t) {
            if (!Xo) {
                var e = 0, r = document.createTextNode("");
                new MutationObserver((function () {
                    return hs.splice(0).forEach((function (t) {
                        return t()
                    }))
                })).observe(r, {characterData: !0}), Xo = function () {
                    r.textContent = "" + (e ? e-- : e++)
                }
            }
            hs.push(t), Xo()
        }, ps = 0, vs = {attributes: !0, characterData: !0, childList: !0, subtree: !0},
        gs = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
        bs = function (t) {
            return void 0 === t && (t = 0), Date.now() + t
        }, ys = !1, ms = new (function () {
            function t() {
                var t = this;
                this.stopped = !0, this.listener = function () {
                    return t.schedule()
                }
            }

            return t.prototype.run = function (t) {
                var e = this;
                if (void 0 === t && (t = 250), !ys) {
                    ys = !0;
                    var r, n = bs(t);
                    r = function () {
                        var r = !1;
                        try {
                            r = fs()
                        } finally {
                            if (ys = !1, t = n - bs(), !ps) return;
                            r ? e.run(1e3) : t > 0 ? e.run(t) : e.start()
                        }
                    }, ds((function () {
                        requestAnimationFrame(r)
                    }))
                }
            }, t.prototype.schedule = function () {
                this.stop(), this.run()
            }, t.prototype.observe = function () {
                var t = this, e = function () {
                    return t.observer && t.observer.observe(document.body, vs)
                };
                document.body ? e() : Jo.addEventListener("DOMContentLoaded", e)
            }, t.prototype.start = function () {
                var t = this;
                this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), gs.forEach((function (e) {
                    return Jo.addEventListener(e, t.listener, !0)
                })))
            }, t.prototype.stop = function () {
                var t = this;
                this.stopped || (this.observer && this.observer.disconnect(), gs.forEach((function (e) {
                    return Jo.removeEventListener(e, t.listener, !0)
                })), this.stopped = !0)
            }, t
        }()), xs = function (t) {
            !ps && t > 0 && ms.start(), !(ps += t) && ms.stop()
        }, Es = function () {
            function t(t, e) {
                this.target = t, this.observedBox = e || Do.CONTENT_BOX, this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                }
            }

            return t.prototype.isActive = function () {
                var t, e = ss(this.target, this.observedBox, !0);
                return t = this.target, Go(t) || function (t) {
                    switch (t.tagName) {
                        case"INPUT":
                            if ("image" !== t.type) break;
                        case"VIDEO":
                        case"AUDIO":
                        case"EMBED":
                        case"OBJECT":
                        case"CANVAS":
                        case"IFRAME":
                        case"IMG":
                            return !0
                    }
                    return !1
                }(t) || "inline" !== getComputedStyle(t).display || (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize
            }, t
        }(), ws = function (t, e) {
            this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = e
        }, Os = new WeakMap, Ss = function (t, e) {
            for (var r = 0; r < t.length; r += 1) if (t[r].target === e) return r;
            return -1
        }, As = function () {
            function t() {
            }

            return t.connect = function (t, e) {
                var r = new ws(t, e);
                Os.set(t, r)
            }, t.observe = function (t, e, r) {
                var n = Os.get(t), i = 0 === n.observationTargets.length;
                Ss(n.observationTargets, e) < 0 && (i && Vo.push(n), n.observationTargets.push(new Es(e, r && r.box)), xs(1), ms.schedule())
            }, t.unobserve = function (t, e) {
                var r = Os.get(t), n = Ss(r.observationTargets, e), i = 1 === r.observationTargets.length;
                n >= 0 && (i && Vo.splice(Vo.indexOf(r), 1), r.observationTargets.splice(n, 1), xs(-1))
            }, t.disconnect = function (t) {
                var e = this, r = Os.get(t);
                r.observationTargets.slice().forEach((function (r) {
                    return e.unobserve(t, r.target)
                })), r.activeTargets.splice(0, r.activeTargets.length)
            }, t
        }(), ks = function () {
            function t(t) {
                if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                if ("function" != typeof t) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                As.connect(this, t)
            }

            return t.prototype.observe = function (t, e) {
                if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!Ko(t)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                As.observe(this, t, e)
            }, t.prototype.unobserve = function (t) {
                if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                if (!Ko(t)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                As.unobserve(this, t)
            }, t.prototype.disconnect = function () {
                As.disconnect(this)
            }, t.toString = function () {
                return "function ResizeObserver () { [polyfill code] }"
            }, t
        }(), Ts = o.TypeError, Ls = function (t) {
            return function (e, r, n, i) {
                lt(r);
                var o = x(e), s = ce(o), a = ve(o), c = t ? a - 1 : 0, l = t ? -1 : 1;
                if (n < 2) for (; ;) {
                    if (c in s) {
                        i = s[c], c += l;
                        break
                    }
                    if (c += l, t ? c < 0 : a <= c) throw Ts("Reduce of empty array with no initial value")
                }
                for (; t ? c >= 0 : a > c; c += l) c in s && (i = r(i, s[c], c, o));
                return i
            }
        }, Rs = {left: Ls(!1), right: Ls(!0)}, _s = "process" == Gt(o.process), js = Rs.left, zs = ze("reduce");
    hr({target: "Array", proto: !0, forced: !zs || !_s && N > 79 && N < 83}, {
        reduce: function (t) {
            var e = arguments.length;
            return js(this, t, e, e > 1 ? arguments[1] : void 0)
        }
    });
    var Ms, Cs, Ns = function () {
            var t = tt(this), e = "";
            return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }, Ws = o.RegExp, Is = u((function () {
            var t = Ws("a", "y");
            return t.lastIndex = 2, null != t.exec("abcd")
        })), Ps = Is || u((function () {
            return !Ws("a", "y").sticky
        })), Bs = {
            BROKEN_CARET: Is || u((function () {
                var t = Ws("^r", "gy");
                return t.lastIndex = 2, null != t.exec("str")
            })), MISSED_STICKY: Ps, UNSUPPORTED_Y: Is
        }, Ds = o.RegExp, Fs = u((function () {
            var t = Ds(".", "s");
            return !(t.dotAll && t.exec("\n") && "s" === t.flags)
        })), Vs = o.RegExp, $s = u((function () {
            var t = Vs("(?<a>b)", "g");
            return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
        })), Xs = $t.get, Hs = l("native-string-replace", String.prototype.replace), qs = RegExp.prototype.exec, Ys = qs,
        Gs = g("".charAt), Us = g("".indexOf), Ks = g("".replace), Js = g("".slice),
        Qs = (Cs = /b*/g, rt(qs, Ms = /a/, "a"), rt(qs, Cs, "a"), 0 !== Ms.lastIndex || 0 !== Cs.lastIndex),
        Zs = Bs.BROKEN_CARET, ta = void 0 !== /()??/.exec("")[1];
    (Qs || ta || Zs || Fs || $s) && (Ys = function (t) {
        var e, r, n, i, o, s, a, c = this, l = Xs(c), u = pr(t), f = l.raw;
        if (f) return f.lastIndex = c.lastIndex, e = rt(Ys, f, u), c.lastIndex = f.lastIndex, e;
        var h = l.groups, d = Zs && c.sticky, p = rt(Ns, c), v = c.source, g = 0, b = u;
        if (d && (p = Ks(p, "y", ""), -1 === Us(p, "g") && (p += "g"), b = Js(u, c.lastIndex), c.lastIndex > 0 && (!c.multiline || c.multiline && "\n" !== Gs(u, c.lastIndex - 1)) && (v = "(?: " + v + ")", b = " " + b, g++), r = new RegExp("^(?:" + v + ")", p)), ta && (r = new RegExp("^" + v + "$(?!\\s)", p)), Qs && (n = c.lastIndex), i = rt(qs, d ? r : c, b), d ? i ? (i.input = Js(i.input, g), i[0] = Js(i[0], g), i.index = c.lastIndex, c.lastIndex += i[0].length) : c.lastIndex = 0 : Qs && i && (c.lastIndex = c.global ? i.index + i[0].length : n), ta && i && i.length > 1 && rt(Hs, i[0], r, (function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (i[o] = void 0)
        })), i && h) for (i.groups = s = Hr(null), o = 0; o < h.length; o++) s[(a = h[o])[0]] = i[a[1]];
        return i
    });
    var ea = Ys;
    hr({target: "RegExp", proto: !0, forced: /./.exec !== ea}, {exec: ea});
    var ra = V("species"), na = RegExp.prototype, ia = function (t, e, r, n) {
        var i = V(t), o = !u((function () {
            var e = {};
            return e[i] = function () {
                return 7
            }, 7 != ""[t](e)
        })), s = o && !u((function () {
            var e = !1, r = /a/;
            return "split" === t && ((r = {}).constructor = {}, r.constructor[ra] = function () {
                return r
            }, r.flags = "", r[i] = /./[i]), r.exec = function () {
                return e = !0, null
            }, r[i](""), !e
        }));
        if (!o || !s || r) {
            var a = g(/./[i]), c = e(i, ""[t], (function (t, e, r, n, i) {
                var s = g(t), c = e.exec;
                return c === ea || c === na.exec ? o && !i ? {done: !0, value: a(e, r, n)} : {
                    done: !0,
                    value: s(r, e, n)
                } : {done: !1}
            }));
            Ht(String.prototype, t, c[0]), Ht(na, i, c[1])
        }
        n && Et(na[i], "sham", !0)
    }, oa = Mn.charAt, sa = function (t, e, r) {
        return e + (r ? oa(t, e).length : 1)
    }, aa = o.TypeError, ca = function (t, e) {
        var r = t.exec;
        if (T(r)) {
            var n = rt(r, t, e);
            return null !== n && tt(n), n
        }
        if ("RegExp" === Gt(t)) return rt(ea, t, e);
        throw aa("RegExp#exec called on incompatible receiver")
    };
    ia("match", (function (t, e, r) {
        return [function (e) {
            var r = y(this), n = null == e ? void 0 : ut(e, t);
            return n ? rt(n, e, r) : new RegExp(e)[t](pr(r))
        }, function (t) {
            var n = tt(this), i = pr(t), o = r(e, n, i);
            if (o.done) return o.value;
            if (!n.global) return ca(n, i);
            var s = n.unicode;
            n.lastIndex = 0;
            for (var a, c = [], l = 0; null !== (a = ca(n, i));) {
                var u = pr(a[0]);
                c[l] = u, "" === u && (n.lastIndex = sa(i, pe(n.lastIndex), s)), l++
            }
            return 0 === l ? null : c
        }]
    }));
    var la = At.EXISTS, ua = mt.f, fa = Function.prototype, ha = g(fa.toString),
        da = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, pa = g(da.exec);
    H && !la && ua(fa, "name", {
        configurable: !0, get: function () {
            try {
                return pa(da, ha(this))[1]
            } catch (t) {
                return ""
            }
        }
    });
    var va = Function.prototype, ga = va.apply, ba = va.call,
        ya = "object" == typeof Reflect && Reflect.apply || (f ? ba.bind(ga) : function () {
            return ba.apply(ga, arguments)
        }), ma = Math.floor, xa = g("".charAt), Ea = g("".replace), wa = g("".slice),
        Oa = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, Sa = /\$([$&'`]|\d{1,2})/g, Aa = function (t, e, r, n, i, o) {
            var s = r + t.length, a = n.length, c = Sa;
            return void 0 !== i && (i = x(i), c = Oa), Ea(o, c, (function (o, c) {
                var l;
                switch (xa(c, 0)) {
                    case"$":
                        return "$";
                    case"&":
                        return t;
                    case"`":
                        return wa(e, 0, r);
                    case"'":
                        return wa(e, s);
                    case"<":
                        l = i[wa(c, 1, -1)];
                        break;
                    default:
                        var u = +c;
                        if (0 === u) return o;
                        if (u > a) {
                            var f = ma(u / 10);
                            return 0 === f ? o : f <= a ? void 0 === n[f - 1] ? xa(c, 1) : n[f - 1] + xa(c, 1) : o
                        }
                        l = n[u - 1]
                }
                return void 0 === l ? "" : l
            }))
        }, ka = V("replace"), Ta = Math.max, La = Math.min, Ra = g([].concat), _a = g([].push), ja = g("".indexOf),
        za = g("".slice), Ma = "$0" === "a".replace(/./, "$0"), Ca = !!/./[ka] && "" === /./[ka]("a", "$0");
    ia("replace", (function (t, e, r) {
        var n = Ca ? "$" : "$0";
        return [function (t, r) {
            var n = y(this), i = null == t ? void 0 : ut(t, ka);
            return i ? rt(i, t, n, r) : rt(e, pr(n), t, r)
        }, function (t, i) {
            var o = tt(this), s = pr(t);
            if ("string" == typeof i && -1 === ja(i, n) && -1 === ja(i, "$<")) {
                var a = r(e, o, s, i);
                if (a.done) return a.value
            }
            var c = T(i);
            c || (i = pr(i));
            var l = o.global;
            if (l) {
                var u = o.unicode;
                o.lastIndex = 0
            }
            for (var f = []; ;) {
                var h = ca(o, s);
                if (null === h) break;
                if (_a(f, h), !l) break;
                "" === pr(h[0]) && (o.lastIndex = sa(s, pe(o.lastIndex), u))
            }
            for (var d, p = "", v = 0, g = 0; g < f.length; g++) {
                for (var b = pr((h = f[g])[0]), y = Ta(La(he(h.index), s.length), 0), m = [], x = 1; x < h.length; x++) _a(m, void 0 === (d = h[x]) ? d : String(d));
                var E = h.groups;
                if (c) {
                    var w = Ra([b], m, y, s);
                    void 0 !== E && _a(w, E);
                    var O = pr(ya(i, void 0, w))
                } else O = Aa(b, s, y, m, E, i);
                y >= v && (p += za(s, v, y) + O, v = y + b.length)
            }
            return p + za(s, v)
        }]
    }), !!u((function () {
        var t = /./;
        return t.exec = function () {
            var t = [];
            return t.groups = {a: "7"}, t
        }, "7" !== "".replace(t, "$<a>")
    })) || !Ma || Ca);
    var Na = function (t) {
        return Array.prototype.reduce.call(t, (function (t, e) {
            var r = e.name.match(/data-simplebar-(.+)/);
            if (r) {
                var n = r[1].replace(/\W+(.)/g, (function (t, e) {
                    return e.toUpperCase()
                }));
                switch (e.value) {
                    case"true":
                        t[n] = !0;
                        break;
                    case"false":
                        t[n] = !1;
                        break;
                    case void 0:
                        t[n] = !0;
                        break;
                    default:
                        t[n] = e.value
                }
            }
            return t
        }), {})
    };

    function Wa(t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
    }

    function Ia(t) {
        return t && t.ownerDocument ? t.ownerDocument : document
    }

    var Pa = null, Ba = null;

    function Da(t) {
        if (null === Pa) {
            var e = Ia(t);
            if (void 0 === e) return Pa = 0;
            var r = e.body, n = e.createElement("div");
            n.classList.add("simplebar-hide-scrollbar"), r.appendChild(n);
            var i = n.getBoundingClientRect().right;
            r.removeChild(n), Pa = i
        }
        return Pa
    }

    Ie && window.addEventListener("resize", (function () {
        Ba !== window.devicePixelRatio && (Ba = window.devicePixelRatio, Pa = null)
    }));
    var Fa = function () {
        function t(e, r) {
            var n = this;
            this.onScroll = function () {
                var t = Wa(n.el);
                n.scrollXTicking || (t.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (t.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0)
            }, this.scrollX = function () {
                n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), n.scrollXTicking = !1
            }, this.scrollY = function () {
                n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), n.scrollYTicking = !1
            }, this.onMouseEnter = function () {
                n.showScrollbar("x"), n.showScrollbar("y")
            }, this.onMouseMove = function (t) {
                n.mouseX = t.clientX, n.mouseY = t.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y")
            }, this.onMouseLeave = function () {
                n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1
            }, this.onWindowResize = function () {
                n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar()
            }, this.hideScrollbars = function () {
                n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), n.axis.y.isVisible = !1), n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), n.axis.x.isVisible = !1)
            }, this.onPointerEvent = function (t) {
                var e, r;
                n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (e = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (r = n.isWithinBounds(n.axis.y.track.rect)), (e || r) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(t, "x") : n.onTrackClick(t, "x")), r && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(t, "y") : n.onTrackClick(t, "y"))))
            }, this.drag = function (e) {
                var r = n.axis[n.draggedAxis].track, i = r.rect[n.axis[n.draggedAxis].sizeAttr],
                    o = n.axis[n.draggedAxis].scrollbar, s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
                    a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
                e.preventDefault(), e.stopPropagation();
                var c = (("y" === n.draggedAxis ? e.pageY : e.pageX) - r.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / (i - o.size) * (s - a);
                "x" === n.draggedAxis && (c = n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c - (i + o.size) : c, c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c
            }, this.onEndDrag = function (t) {
                var e = Ia(n.el), r = Wa(n.el);
                t.preventDefault(), t.stopPropagation(), n.el.classList.remove(n.classNames.dragging), e.removeEventListener("mousemove", n.drag, !0), e.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = r.setTimeout((function () {
                    e.removeEventListener("click", n.preventClick, !0), e.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null
                }))
            }, this.preventClick = function (t) {
                t.preventDefault(), t.stopPropagation()
            }, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, r), this.classNames = Object.assign({}, t.defaultOptions.classNames, this.options.classNames), this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetSizeAttr: "offsetWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetSizeAttr: "offsetHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            }, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = Qi(this.recalculate.bind(this), 64), this.onMouseMove = Qi(this.onMouseMove.bind(this), 64), this.hideScrollbars = po(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = po(this.onWindowResize.bind(this), 64, {leading: !0}), t.getRtlHelpers = Fo(t.getRtlHelpers), this.init())
        }

        t.getRtlHelpers = function () {
            var e = document.createElement("div");
            e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var r = e.firstElementChild;
            document.body.appendChild(r);
            var n = r.firstElementChild;
            r.scrollLeft = 0;
            var i = t.getOffset(r), o = t.getOffset(n);
            r.scrollLeft = 999;
            var s = t.getOffset(n);
            return {
                isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
                isRtlScrollbarInverted: i.left !== o.left
            }
        }, t.getOffset = function (t) {
            var e = t.getBoundingClientRect(), r = Ia(t), n = Wa(t);
            return {
                top: e.top + (n.pageYOffset || r.documentElement.scrollTop),
                left: e.left + (n.pageXOffset || r.documentElement.scrollLeft)
            }
        };
        var e = t.prototype;
        return e.init = function () {
            t.instances.set(this.el, this), Ie && (this.initDOM(), this.setAccessibilityAttributes(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
        }, e.initDOM = function () {
            var t = this;
            if (Array.prototype.filter.call(this.el.children, (function (e) {
                return e.classList.contains(t.classNames.wrapper)
            })).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical); else {
                for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
                var e = document.createElement("div"), r = document.createElement("div");
                e.classList.add(this.classNames.track), r.classList.add(this.classNames.scrollbar), e.appendChild(r), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
            }
            this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
        }, e.setAccessibilityAttributes = function () {
            var t = this.options.ariaLabel || "scrollable content";
            this.contentWrapperEl.setAttribute("tabindex", "0"), this.contentWrapperEl.setAttribute("role", "region"), this.contentWrapperEl.setAttribute("aria-label", t)
        }, e.initListeners = function () {
            var t = this, e = Wa(this.el);
            this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function (e) {
                t.el.addEventListener(e, t.onPointerEvent, !0)
            })), ["touchstart", "touchend", "touchmove"].forEach((function (e) {
                t.el.addEventListener(e, t.onPointerEvent, {capture: !0, passive: !0})
            })), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onWindowResize);
            var r = !1, n = null, i = e.ResizeObserver || ks;
            this.resizeObserver = new i((function () {
                r && null === n && (n = e.requestAnimationFrame((function () {
                    t.recalculate(), n = null
                })))
            })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e.requestAnimationFrame((function () {
                r = !0
            })), this.mutationObserver = new e.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        }, e.recalculate = function () {
            var t = Wa(this.el);
            this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
            var e = this.heightAutoObserverEl.offsetHeight <= 1, r = this.heightAutoObserverEl.offsetWidth <= 1,
                n = this.contentEl.offsetWidth, i = this.contentWrapperEl.offsetWidth, o = this.elStyles.overflowX,
                s = this.elStyles.overflowY;
            this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
            var a = this.contentEl.scrollHeight, c = this.contentEl.scrollWidth;
            this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = r ? n + "px" : "auto", this.placeholderEl.style.height = a + "px";
            var l = this.contentWrapperEl.offsetHeight;
            this.axis.x.isOverflowing = c > n, this.axis.y.isOverflowing = a > l, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
            var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
        }, e.getScrollbarSize = function (t) {
            if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0;
            var e, r = this.contentEl[this.axis[t].scrollSizeAttr],
                n = this.axis[t].track.el[this.axis[t].offsetSizeAttr], i = n / r;
            return e = Math.max(~~(i * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e
        }, e.positionScrollbar = function (e) {
            if (void 0 === e && (e = "y"), this.axis[e].isOverflowing) {
                var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
                    n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
                    i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10), o = this.axis[e].scrollbar,
                    s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                    a = (s = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -s : s) / (r - i),
                    c = ~~((n - o.size) * a);
                c = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c + (n - o.size) : c, o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)"
            }
        }, e.toggleTrackVisibility = function (t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].track.el, r = this.axis[t].scrollbar.el;
            this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? r.style.display = "block" : r.style.display = "none"
        }, e.hideNativeScrollbar = function () {
            this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
        }, e.onMouseMoveForAxis = function (t) {
            void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
        }, e.onMouseLeaveForAxis = function (t) {
            void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
        }, e.showScrollbar = function (t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].scrollbar.el;
            this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
        }, e.onDragStart = function (t, e) {
            void 0 === e && (e = "y");
            var r = Ia(this.el), n = Wa(this.el), i = this.axis[e].scrollbar, o = "y" === e ? t.pageY : t.pageX;
            this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), r.addEventListener("mousemove", this.drag, !0), r.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (r.addEventListener("click", this.preventClick, !0), r.addEventListener("dblclick", this.preventClick, !0)) : (n.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
        }, e.onTrackClick = function (t, e) {
            var r = this;
            if (void 0 === e && (e = "y"), this.options.clickOnTrack) {
                var n = Wa(this.el);
                this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
                var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
                    o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                    s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                    a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1, c = -1 === a ? s - o : s + o;
                !function t() {
                    var i, o;
                    -1 === a ? s > c && (s -= r.options.clickOnTrackSpeed, r.contentWrapperEl.scrollTo(((i = {})[r.axis[e].offsetAttr] = s, i)), n.requestAnimationFrame(t)) : s < c && (s += r.options.clickOnTrackSpeed, r.contentWrapperEl.scrollTo(((o = {})[r.axis[e].offsetAttr] = s, o)), n.requestAnimationFrame(t))
                }()
            }
        }, e.getContentElement = function () {
            return this.contentEl
        }, e.getScrollElement = function () {
            return this.contentWrapperEl
        }, e.getScrollbarWidth = function () {
            try {
                return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : Da(this.el)
            } catch (t) {
                return Da(this.el)
            }
        }, e.removeListeners = function () {
            var t = this, e = Wa(this.el);
            this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function (e) {
                t.el.removeEventListener(e, t.onPointerEvent, !0)
            })), ["touchstart", "touchend", "touchmove"].forEach((function (e) {
                t.el.removeEventListener(e, t.onPointerEvent, {capture: !0, passive: !0})
            })), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
        }, e.unMount = function () {
            this.removeListeners(), t.instances.delete(this.el)
        }, e.isWithinBounds = function (t) {
            return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
        }, e.findChild = function (t, e) {
            var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
            return Array.prototype.filter.call(t.children, (function (t) {
                return r.call(t, e)
            }))[0]
        }, t
    }();
    return Fa.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        clickOnTrackSpeed: 40,
        classNames: {
            contentEl: "simplebar-content",
            contentWrapper: "simplebar-content-wrapper",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover",
            dragging: "simplebar-dragging"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3
    }, Fa.instances = new WeakMap, Fa.initDOMLoadedElements = function () {
        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function (t) {
            "init" === t.getAttribute("data-simplebar") || Fa.instances.has(t) || new Fa(t, Na(t.attributes))
        }))
    }, Fa.removeObserver = function () {
        this.globalObserver.disconnect()
    }, Fa.initHtmlApi = function () {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Fa.handleMutations), this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0
        })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
    }, Fa.handleMutations = function (t) {
        t.forEach((function (t) {
            Array.prototype.forEach.call(t.addedNodes, (function (t) {
                1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !Fa.instances.has(t) && document.documentElement.contains(t) && new Fa(t, Na(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"), (function (t) {
                    "init" !== t.getAttribute("data-simplebar") && !Fa.instances.has(t) && document.documentElement.contains(t) && new Fa(t, Na(t.attributes))
                })))
            })), Array.prototype.forEach.call(t.removedNodes, (function (t) {
                1 === t.nodeType && ("init" === t.getAttribute("data-simplebar") ? Fa.instances.has(t) && !document.documentElement.contains(t) && Fa.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), (function (t) {
                    Fa.instances.has(t) && !document.documentElement.contains(t) && Fa.instances.get(t).unMount()
                })))
            }))
        }))
    }, Fa.getOptions = Na, Ie && Fa.initHtmlApi(), Fa
}));
/*! * include glightbox ( for popup gallery )  */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t()
}(this, (function () {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function n(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    var s = Date.now();

    function l() {
        var e = {}, t = !0, i = 0, n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);
        for (var s = function (i) {
            for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = l(!0, e[n], i[n]) : e[n] = i[n])
        }; i < n; i++) {
            var o = arguments[i];
            s(o)
        }
        return e
    }

    function o(e, t) {
        if ((k(e) || e === window || e === document) && (e = [e]), A(e) || L(e) || (e = [e]), 0 != P(e)) if (A(e) && !L(e)) for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++) ; else if (L(e)) for (var s in e) if (O(e, s) && !1 === t.call(e[s], e[s], s, e)) break
    }

    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = e[s] = e[s] || [],
            l = {all: n, evt: null, found: null};
        return t && i && P(n) > 0 && o(n, (function (e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return l.found = !0, l.evt = n, !1
        })), l
    }

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = t.onElement,
            n = t.withCallback, s = t.avoidDuplicate, l = void 0 === s || s, a = t.once, h = void 0 !== a && a,
            d = t.useCapture, c = void 0 !== d && d, u = arguments.length > 2 ? arguments[2] : void 0, g = i || [];

        function v(e) {
            T(n) && n.call(u, e, this), h && v.destroy()
        }

        return C(g) && (g = document.querySelectorAll(g)), v.destroy = function () {
            o(g, (function (t) {
                var i = r(t, e, v);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, v, c)
            }))
        }, o(g, (function (t) {
            var i = r(t, e, v);
            (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, c), i.all.push({
                eventName: e,
                fn: v
            }))
        })), v
    }

    function h(e, t) {
        o(t.split(" "), (function (t) {
            return e.classList.add(t)
        }))
    }

    function d(e, t) {
        o(t.split(" "), (function (t) {
            return e.classList.remove(t)
        }))
    }

    function c(e, t) {
        return e.classList.contains(t)
    }

    function u(e, t) {
        for (; e !== document.body;) {
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e
        }
    }

    function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t) return !1;
        if ("none" === t) return T(i) && i(), !1;
        var n = x(), s = t.split(" ");
        o(s, (function (t) {
            h(e, "g" + t)
        })), a(n, {
            onElement: e, avoidDuplicate: !1, once: !0, withCallback: function (e, t) {
                o(s, (function (e) {
                    d(t, "g" + e)
                })), T(i) && i()
            }
        })
    }

    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t
    }

    function f(e) {
        e.style.display = "block"
    }

    function p(e) {
        e.style.display = "none"
    }

    function m(e) {
        var t = document.createDocumentFragment(), i = document.createElement("div");
        for (i.innerHTML = e; i.firstChild;) t.appendChild(i.firstChild);
        return t
    }

    function y() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }

    function x() {
        var e, t = document.createElement("fakeelement"), i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for (e in i) if (void 0 !== t.style[e]) return i[e]
    }

    function b(e, t, i, n) {
        if (e()) t(); else {
            var s;
            i || (i = 100);
            var l = setInterval((function () {
                e() && (clearInterval(l), s && clearTimeout(s), t())
            }), i);
            n && (s = setTimeout((function () {
                clearInterval(l)
            }), n))
        }
    }

    function S(e, t, i) {
        if (I(e)) console.error("Inject assets error"); else if (T(t) && (i = t, t = !1), C(t) && t in window) T(i) && i(); else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (T(i) && i());
                var s = document.getElementsByTagName("head")[0], l = s.querySelectorAll('link[rel="stylesheet"]'),
                    o = document.createElement("link");
                return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void (T(i) && i())
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (T(i)) {
                    if (C(t)) return b((function () {
                        return void 0 !== window[t]
                    }), (function () {
                        i()
                    })), !1;
                    i()
                }
            } else {
                var r = document.createElement("script");
                r.type = "text/javascript", r.src = e, r.onload = function () {
                    if (T(i)) {
                        if (C(t)) return b((function () {
                            return void 0 !== window[t]
                        }), (function () {
                            i()
                        })), !1;
                        i()
                    }
                }, document.body.appendChild(r)
            }
        }
    }

    function w() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
    }

    function T(e) {
        return "function" == typeof e
    }

    function C(e) {
        return "string" == typeof e
    }

    function k(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType)
    }

    function E(e) {
        return Array.isArray(e)
    }

    function A(e) {
        return e && e.length && isFinite(e.length)
    }

    function L(t) {
        return "object" === e(t) && null != t && !T(t) && !E(t)
    }

    function I(e) {
        return null == e
    }

    function O(e, t) {
        return null !== e && hasOwnProperty.call(e, t)
    }

    function P(e) {
        if (L(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for (var i in e) O(e, i) && t++;
            return t
        }
        return e.length
    }

    function M(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }

    function z() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
            t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = [];
        o(t, (function (e) {
            i.push(e.getAttribute("data-taborder"))
        }));
        var n = Math.max.apply(Math, i.map((function (e) {
            return parseInt(e)
        }))), s = e < 0 ? 1 : e + 1;
        s > n && (s = "1");
        var l = i.filter((function (e) {
            return e >= parseInt(s)
        })), r = l.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(r, '"]'))
    }

    function X(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = a("keydown", {
            onElement: window, withCallback: function (t, i) {
                var n = (t = t || window.event).keyCode;
                if (9 == n) {
                    var s = document.querySelector(".gbtn.focused");
                    if (!s) {
                        var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == l || "textarea" == l || "button" == l) return
                    }
                    t.preventDefault();
                    var o = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!o || o.length <= 0) return;
                    if (!s) {
                        var r = z();
                        return void (r && (r.focus(), h(r, "focused")))
                    }
                    var a = z(s.getAttribute("data-taborder"));
                    d(s, "focused"), a && (a.focus(), h(a, "focused"))
                }
                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close()
            }
        })
    }

    function Y(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y)
    }

    function q(e, t) {
        var i = function (e, t) {
            var i = Y(e) * Y(t);
            if (0 === i) return 0;
            var n = function (e, t) {
                return e.x * t.x + e.y * t.y
            }(e, t) / i;
            return n > 1 && (n = 1), Math.acos(n)
        }(e, t);
        return function (e, t) {
            return e.x * t.y - t.x * e.y
        }(e, t) > 0 && (i *= -1), 180 * i / Math.PI
    }

    var N = function () {
        function e(i) {
            t(this, e), this.handlers = [], this.el = i
        }

        return n(e, [{
            key: "add", value: function (e) {
                this.handlers.push(e)
            }
        }, {
            key: "del", value: function (e) {
                e || (this.handlers = []);
                for (var t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1)
            }
        }, {
            key: "dispatch", value: function () {
                for (var e = 0, t = this.handlers.length; e < t; e++) {
                    var i = this.handlers[e];
                    "function" == typeof i && i.apply(this.el, arguments)
                }
            }
        }]), e
    }();

    function D(e, t) {
        var i = new N(e);
        return i.add(t), i
    }

    var _ = function () {
        function e(i, n) {
            t(this, e), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
            var s = function () {
            };
            this.rotate = D(this.element, n.rotate || s), this.touchStart = D(this.element, n.touchStart || s), this.multipointStart = D(this.element, n.multipointStart || s), this.multipointEnd = D(this.element, n.multipointEnd || s), this.pinch = D(this.element, n.pinch || s), this.swipe = D(this.element, n.swipe || s), this.tap = D(this.element, n.tap || s), this.doubleTap = D(this.element, n.doubleTap || s), this.longTap = D(this.element, n.longTap || s), this.singleTap = D(this.element, n.singleTap || s), this.pressMove = D(this.element, n.pressMove || s), this.twoFingerPressMove = D(this.element, n.twoFingerPressMove || s), this.touchMove = D(this.element, n.touchMove || s), this.touchEnd = D(this.element, n.touchEnd || s), this.touchCancel = D(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            }
        }

        return n(e, [{
            key: "start", value: function (e) {
                if (e.touches) {
                    if (e.target && e.target.nodeName && ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase()); else {
                        this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                        var t = this.preV;
                        if (e.touches.length > 1) {
                            this._cancelLongTap(), this._cancelSingleTap();
                            var i = {x: e.touches[1].pageX - this.x1, y: e.touches[1].pageY - this.y1};
                            t.x = i.x, t.y = i.y, this.pinchStartLen = Y(t), this.multipointStart.dispatch(e, this.element)
                        }
                        this._preventTap = !1, this.longTapTimeout = setTimeout(function () {
                            this.longTap.dispatch(e, this.element), this._preventTap = !0
                        }.bind(this), 750)
                    }
                }
            }
        }, {
            key: "move", value: function (e) {
                if (e.touches) {
                    var t = this.preV, i = e.touches.length, n = e.touches[0].pageX, s = e.touches[0].pageY;
                    if (this.isDoubleTap = !1, i > 1) {
                        var l = e.touches[1].pageX, o = e.touches[1].pageY,
                            r = {x: e.touches[1].pageX - n, y: e.touches[1].pageY - s};
                        null !== t.x && (this.pinchStartLen > 0 && (e.zoom = Y(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = q(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o
                    } else {
                        if (null !== this.x2) {
                            e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                            var a = Math.abs(this.x1 - this.x2), h = Math.abs(this.y1 - this.y2);
                            (a > 10 || h > 10) && (this._preventTap = !0)
                        } else e.deltaX = 0, e.deltaY = 0;
                        this.pressMove.dispatch(e, this.element)
                    }
                    this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault()
                }
            }
        }, {
            key: "end", value: function (e) {
                if (e.changedTouches) {
                    this._cancelLongTap();
                    var t = this;
                    e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout((function () {
                        t.swipe.dispatch(e, t.element)
                    }), 0)) : (this.tapTimeout = setTimeout((function () {
                        t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1)
                    }), 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout((function () {
                        t.singleTap.dispatch(e, t.element)
                    }), 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null
                }
            }
        }, {
            key: "cancelAll", value: function () {
                this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
            }
        }, {
            key: "cancel", value: function (e) {
                this.cancelAll(), this.touchCancel.dispatch(e, this.element)
            }
        }, {
            key: "_cancelLongTap", value: function () {
                clearTimeout(this.longTapTimeout)
            }
        }, {
            key: "_cancelSingleTap", value: function () {
                clearTimeout(this.singleTapTimeout)
            }
        }, {
            key: "_swipeDirection", value: function (e, t, i, n) {
                return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
            }
        }, {
            key: "on", value: function (e, t) {
                this[e] && this[e].add(t)
            }
        }, {
            key: "off", value: function (e, t) {
                this[e] && this[e].del(t)
            }
        }, {
            key: "destroy", value: function () {
                return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
            }
        }]), e
    }();

    function W(e) {
        var t = function () {
                var e, t = document.createElement("fakeelement"), i = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
                for (e in i) if (void 0 !== t.style[e]) return i[e]
            }(), i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            n = c(e, "gslide-media") ? e : e.querySelector(".gslide-media"), s = u(n, ".ginner-container"),
            l = e.querySelector(".gslide-description");
        i > 769 && (n = s), h(n, "greset"), v(n, "translate3d(0, 0, 0)"), a(t, {
            onElement: n,
            once: !0,
            withCallback: function (e, t) {
                d(n, "greset")
            }
        }), n.style.opacity = "", l && (l.style.opacity = "")
    }

    function B(e) {
        if (e.events.hasOwnProperty("touch")) return !1;
        var t, i, n, s = y(), l = s.width, o = s.height, r = !1, a = null, g = null, f = null, p = !1, m = 1, x = 1,
            b = !1, S = !1, w = null, T = null, C = null, k = null, E = 0, A = 0, L = !1, I = !1, O = {}, P = {}, M = 0,
            z = 0, X = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"),
            q = new _(X, {
                touchStart: function (t) {
                    if (r = !0, (c(t.targetTouches[0].target, "ginner-container") || u(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), u(t.targetTouches[0].target, ".gslide-inline") && !c(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
                        if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, M = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, a = e.activeSlide, g = a.querySelector(".gslide-media"), n = a.querySelector(".gslide-inline"), f = null, c(g, "gslide-image") && (f = g.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g = a.querySelector(".ginner-container")), d(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                        t.preventDefault()
                    }
                }, touchMove: function (s) {
                    if (r && (P = s.targetTouches[0], !b && !S)) {
                        if (n && n.offsetHeight > o) {
                            var a = O.pageX - P.pageX;
                            if (Math.abs(a) <= 13) return !1
                        }
                        p = !0;
                        var h, d = s.targetTouches[0].clientX, c = s.targetTouches[0].clientY, u = M - d, m = z - c;
                        if (Math.abs(u) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t = P.pageX - O.pageX, E = 100 * t / l, i = P.pageY - O.pageY, A = 100 * i / o, L && f && (h = 1 - Math.abs(i) / o, Y.style.opacity = h, e.settings.touchFollowAxis && (E = 0)), I && (h = 1 - Math.abs(t) / l, g.style.opacity = h, e.settings.touchFollowAxis && (A = 0)), !f) return v(g, "translate3d(".concat(E, "%, 0, 0)"));
                        v(g, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"))
                    }
                }, touchEnd: function () {
                    if (r) {
                        if (p = !1, S || b) return C = w, void (k = T);
                        var t = Math.abs(parseInt(A)), i = Math.abs(parseInt(E));
                        if (!(t > 29 && f)) return t < 29 && i < 25 ? (h(Y, "greset"), Y.style.opacity = 1, W(g)) : void 0;
                        e.close()
                    }
                }, multipointEnd: function () {
                    setTimeout((function () {
                        b = !1
                    }), 50)
                }, multipointStart: function () {
                    b = !0, m = x || 1
                }, pinch: function (e) {
                    if (!f || p) return !1;
                    b = !0, f.scaleX = f.scaleY = m * e.zoom;
                    var t = m * e.zoom;
                    if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void f.setAttribute("style", "");
                    t > 4.5 && (t = 4.5), f.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), x = t
                }, pressMove: function (e) {
                    if (S && !b) {
                        var t = P.pageX - O.pageX, i = P.pageY - O.pageY;
                        C && (t += C), k && (i += k), w = t, T = i;
                        var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                        x && (n += " scale3d(".concat(x, ", ").concat(x, ", 1)")), v(f, n)
                    }
                }, swipe: function (t) {
                    if (!S) if (b) b = !1; else {
                        if ("Left" == t.direction) {
                            if (e.index == e.elements.length - 1) return W(g);
                            e.nextSlide()
                        }
                        if ("Right" == t.direction) {
                            if (0 == e.index) return W(g);
                            e.prevSlide()
                        }
                    }
                }
            });
        e.events.touch = q
    }

    var H = function () {
        function e(i, n) {
            var s = this, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (t(this, e), this.img = i, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
            this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", (function (e) {
                return s.dragStart(e)
            }), !1), this.img.addEventListener("mouseup", (function (e) {
                return s.dragEnd(e)
            }), !1), this.img.addEventListener("mousemove", (function (e) {
                return s.drag(e)
            }), !1), this.img.addEventListener("click", (function (e) {
                return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn()
            }), !1), this.img.setZoomEvents = !0
        }

        return n(e, [{
            key: "zoomIn", value: function () {
                var e = this.widowWidth();
                if (!(this.zoomedIn || e <= 768)) {
                    var t = this.img;
                    if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                        var i = e / 2 - t.naturalWidth / 2;
                        this.setTranslate(this.img.parentNode, i, 0)
                    }
                    this.slide.classList.add("zoomed"), this.zoomedIn = !0
                }
            }
        }, {
            key: "zoomOut", value: function () {
                this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose()
            }
        }, {
            key: "dragStart", value: function (e) {
                e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1
            }
        }, {
            key: "dragEnd", value: function (e) {
                var t = this;
                e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout((function () {
                    t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging")
                }), 100)
            }
        }, {
            key: "drag", value: function (e) {
                this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
            }
        }, {
            key: "onMove", value: function (e) {
                if (this.zoomedIn) {
                    var t = e.clientX - this.img.naturalWidth / 2, i = e.clientY - this.img.naturalHeight / 2;
                    this.setTranslate(this.img, t, i)
                }
            }
        }, {
            key: "setTranslate", value: function (e, t, i) {
                e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
            }
        }, {
            key: "widowWidth", value: function () {
                return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            }
        }]), e
    }(), V = function () {
        function e() {
            var i = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e);
            var s = n.dragEl, l = n.toleranceX, o = void 0 === l ? 40 : l, r = n.toleranceY, a = void 0 === r ? 65 : r,
                h = n.slide, d = void 0 === h ? null : h, c = n.instance, u = void 0 === c ? null : c;
            this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", (function (e) {
                return i.dragStart(e)
            }), !1), this.el.addEventListener("mouseup", (function (e) {
                return i.dragEnd(e)
            }), !1), this.el.addEventListener("mousemove", (function (e) {
                return i.drag(e)
            }), !1)
        }

        return n(e, [{
            key: "dragStart", value: function (e) {
                if (this.slide.classList.contains("zoomed")) this.active = !1; else {
                    "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                    var t = e.target.nodeName.toLowerCase();
                    e.target.classList.contains("nodrag") || u(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && u(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = u(e.target, ".ginner-container")))
                }
            }
        }, {
            key: "dragEnd", value: function (e) {
                var t = this;
                e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout((function () {
                    t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = ""
                }), 100)
            }
        }, {
            key: "drag", value: function (e) {
                if (this.active) {
                    e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                    var t = Math.abs(this.currentX), i = Math.abs(this.currentY);
                    if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                        this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                        var n = this.shouldChange();
                        if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide())
                    }
                    if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                        this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                        var s = this.shouldClose();
                        return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && s && this.instance.close())
                    }
                }
            }
        }, {
            key: "shouldChange", value: function () {
                var e = !1;
                if (Math.abs(this.currentX) >= this.toleranceX) {
                    var t = this.currentX > 0 ? "right" : "left";
                    ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t)
                }
                return e
            }
        }, {
            key: "shouldClose", value: function () {
                var e = !1;
                return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e
            }
        }, {
            key: "setTranslate", value: function (e, t, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)")
            }
        }]), e
    }();

    function j(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = new Image, o = "gSlideTitle_" + i, r = "gSlideDesc_" + i;
        l.addEventListener("load", (function () {
            T(n) && n()
        }), !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", I(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild)
    }

    function F(e, t, i, n) {
        var s = this, l = e.querySelector(".ginner-container"), o = "gvideo" + i, r = e.querySelector(".gslide-media"),
            a = this.getAllPlayers();
        h(l, "gvideo-container"), r.insertBefore(m('<div class="gvideo-wrapper"></div>'), r.firstChild);
        var d = e.querySelector(".gvideo-wrapper");
        S(this.settings.plyr.css, "Plyr");
        var c = t.href, u = null == t ? void 0 : t.videoProvider, g = !1;
        r.style.maxWidth = t.width, S(this.settings.plyr.js, "Plyr", (function () {
            if (!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"), !u && (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"), "local" === u || !u) {
                u = "local";
                var l = '<video id="' + o + '" ';
                l += 'style="background:#000; max-width: '.concat(t.width, ';" '), l += 'preload="metadata" ', l += 'x-webkit-airplay="allow" ', l += "playsinline ", l += "controls ", l += 'class="gvideo-local">', l += '<source src="'.concat(c, '">'), g = m(l += "</video>")
            }
            var r = g || m('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(c, '"></div>'));
            h(d, "".concat(u, "-video gvideo")), d.appendChild(r), d.setAttribute("data-id", o), d.setAttribute("data-index", i);
            var v = O(s.settings.plyr, "config") ? s.settings.plyr.config : {}, f = new Plyr("#" + o, v);
            f.on("ready", (function (e) {
                a[o] = e.detail.plyr, T(n) && n()
            })), b((function () {
                return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready
            }), (function () {
                s.resize(e)
            })), f.on("enterfullscreen", R), f.on("exitfullscreen", R)
        }))
    }

    function R(e) {
        var t = u(e.target, ".gslide-media");
        "enterfullscreen" === e.type && h(t, "fullscreen"), "exitfullscreen" === e.type && d(t, "fullscreen")
    }

    function G(e, t, i, n) {
        var s, l = this, o = e.querySelector(".gslide-media"),
            r = !(!O(t, "href") || !t.href) && t.href.split("#").pop().trim(),
            d = !(!O(t, "content") || !t.content) && t.content;
        if (d && (C(d) && (s = m('<div class="ginlined-content">'.concat(d, "</div>"))), k(d))) {
            "none" == d.style.display && (d.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(d), s = c
        }
        if (r) {
            var u = document.getElementById(r);
            if (!u) return !1;
            var g = u.cloneNode(!0);
            g.style.height = t.height, g.style.maxWidth = t.width, h(g, "ginlined-content"), s = g
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = a("click", {
            onElement: o.querySelectorAll(".gtrigger-close"),
            withCallback: function (e) {
                e.preventDefault(), l.close()
            }
        }), T(n) && n()
    }

    function Z(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = function (e) {
            var t = e.url, i = e.allow, n = e.callback, s = e.appendTo, l = document.createElement("iframe");
            return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function () {
                l.onload = null, h(l, "node-ready"), T(n) && n()
            }, s && s.appendChild(l), l
        }({url: t.href, callback: n});
        s.parentNode.style.maxWidth = t.width, s.parentNode.style.height = t.height, s.appendChild(l)
    }

    var U = function () {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), this.defaults = {
                    href: "",
                    sizes: "",
                    srcset: "",
                    title: "",
                    type: "",
                    videoProvider: "",
                    description: "",
                    alt: "",
                    descPosition: "bottom",
                    effect: "",
                    width: "",
                    height: "",
                    content: !1,
                    zoomable: !0,
                    draggable: !0
                }, L(i) && (this.defaults = l(this.defaults, i))
            }

            return n(e, [{
                key: "sourceType", value: function (e) {
                    var t = e;
                    if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)) return "image";
                    if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) return "video";
                    if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
                    if (null !== e.match(/\.(mp4|ogg|webm|mov)/)) return "video";
                    if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)) return "audio";
                    if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim()) return "inline";
                    return e.indexOf("goajax=true") > -1 ? "ajax" : "external"
                }
            }, {
                key: "parseConfig", value: function (e, t) {
                    var i = this, n = l({descPosition: t.descPosition}, this.defaults);
                    if (L(e) && !k(e)) {
                        O(e, "type") || (O(e, "content") && e.content ? e.type = "inline" : O(e, "href") && (e.type = this.sourceType(e.href)));
                        var s = l(n, e);
                        return this.setSize(s, t), s
                    }
                    var r = "", a = e.getAttribute("data-glightbox"), h = e.nodeName.toLowerCase();
                    if ("a" === h && (r = e.href), "img" === h && (r = e.src, n.alt = e.alt), n.href = r, o(n, (function (s, l) {
                        O(t, l) && "width" !== l && (n[l] = t[l]);
                        var o = e.dataset[l];
                        I(o) || (n[l] = i.sanitizeValue(o))
                    })), n.content && (n.type = "inline"), !n.type && r && (n.type = this.sourceType(r)), I(a)) {
                        if (!n.title && "a" == h) {
                            var d = e.title;
                            I(d) || "" === d || (n.title = d)
                        }
                        if (!n.title && "img" == h) {
                            var c = e.alt;
                            I(c) || "" === c || (n.title = c)
                        }
                    } else {
                        var u = [];
                        o(n, (function (e, t) {
                            u.push(";\\s?" + t)
                        })), u = u.join("\\s?:|"), "" !== a.trim() && o(n, (function (e, t) {
                            var s = a, l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"), o = s.match(l);
                            if (o && o.length && o[1]) {
                                var r = o[1].trim().replace(/;\s*$/, "");
                                n[t] = i.sanitizeValue(r)
                            }
                        }))
                    }
                    if (n.description && "." === n.description.substring(0, 1)) {
                        var g;
                        try {
                            g = document.querySelector(n.description).innerHTML
                        } catch (e) {
                            if (!(e instanceof DOMException)) throw e
                        }
                        g && (n.description = g)
                    }
                    if (!n.description) {
                        var v = e.querySelector(".glightbox-desc");
                        v && (n.description = v.innerHTML)
                    }
                    return this.setSize(n, t, e), this.slideConfig = n, n
                }
            }, {
                key: "setSize", value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
                        s = this.checkSize(t.height);
                    return e.width = O(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = O(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e
                }
            }, {
                key: "checkSize", value: function (e) {
                    return M(e) ? "".concat(e, "px") : e
                }
            }, {
                key: "sanitizeValue", value: function (e) {
                    return "true" !== e && "false" !== e ? e : "true" === e
                }
            }]), e
        }(), $ = function () {
            function e(i, n, s) {
                t(this, e), this.element = i, this.instance = n, this.index = s
            }

            return n(e, [{
                key: "setContent", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (c(t, "loaded")) return !1;
                    var n = this.instance.settings, s = this.slideConfig, l = w();
                    T(n.beforeSlideLoad) && n.beforeSlideLoad({index: this.index, slide: t, player: !1});
                    var o = s.type, r = s.descPosition, a = t.querySelector(".gslide-media"),
                        d = t.querySelector(".gslide-title"), u = t.querySelector(".gslide-desc"),
                        g = t.querySelector(".gdesc-inner"), v = i, f = "gSlideTitle_" + this.index,
                        p = "gSlideDesc_" + this.index;
                    if (T(n.afterSlideLoad) && (v = function () {
                        T(i) && i(), n.afterSlideLoad({
                            index: e.index,
                            slide: t,
                            player: e.instance.getSlidePlayerInstance(e.index)
                        })
                    }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (d && "" !== s.title ? (d.id = f, d.innerHTML = s.title) : d.parentNode.removeChild(d), u && "" !== s.description ? (u.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), u.innerHTML = s.smallDescription, this.descriptionEvents(u, s)) : u.innerHTML = s.description) : u.parentNode.removeChild(u), h(a.parentNode, "desc-".concat(r)), h(g.parentNode, "description-".concat(r))), h(a, "gslide-".concat(o)), h(t, "loaded"), "video" !== o) {
                        if ("external" !== o) return "inline" === o ? (G.apply(this.instance, [t, s, this.index, v]), void (s.draggable && new V({
                            dragEl: t.querySelector(".gslide-inline"),
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: t,
                            instance: this.instance
                        }))) : void ("image" !== o ? T(v) && v() : j(t, s, this.index, (function () {
                            var i = t.querySelector("img");
                            s.draggable && new V({
                                dragEl: i,
                                toleranceX: n.dragToleranceX,
                                toleranceY: n.dragToleranceY,
                                slide: t,
                                instance: e.instance
                            }), s.zoomable && i.naturalWidth > i.offsetWidth && (h(i, "zoomable"), new H(i, t, (function () {
                                e.instance.resize()
                            }))), T(v) && v()
                        })));
                        Z.apply(this, [t, s, this.index, v])
                    } else F.apply(this.instance, [t, s, this.index, v])
                }
            }, {
                key: "slideShortDesc", value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = document.createElement("div");
                    n.innerHTML = e;
                    var s = n.innerText, l = i;
                    if ((e = s.trim()).length <= t) return e;
                    var o = e.substr(0, t - 1);
                    return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o
                }
            }, {
                key: "descriptionEvents", value: function (e, t) {
                    var i = this, n = e.querySelector(".desc-more");
                    if (!n) return !1;
                    a("click", {
                        onElement: n, withCallback: function (e, n) {
                            e.preventDefault();
                            var s = document.body, l = u(n, ".gslide-desc");
                            if (!l) return !1;
                            l.innerHTML = t.description, h(s, "gdesc-open");
                            var o = a("click", {
                                onElement: [s, u(l, ".gslide-description")], withCallback: function (e, n) {
                                    "a" !== e.target.nodeName.toLowerCase() && (d(s, "gdesc-open"), h(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout((function () {
                                        d(s, "gdesc-closed")
                                    }), 400), o.destroy())
                                }
                            })
                        }
                    })
                }
            }, {
                key: "create", value: function () {
                    return m(this.instance.settings.slideHTML)
                }
            }, {
                key: "getConfig", value: function () {
                    k(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                    var e = new U(this.instance.settings.slideExtraAttributes);
                    return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig
                }
            }]), e
        }(), J = w(),
        K = null !== w() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
        Q = document.getElementsByTagName("html")[0], ee = {
            selector: ".glightbox",
            elements: null,
            skin: "clean",
            theme: "clean",
            closeButton: !0,
            startAt: null,
            autoplayVideos: !0,
            autofocusVideos: !0,
            descPosition: "bottom",
            width: "900px",
            height: "506px",
            videosWidth: "960px",
            beforeSlideChange: null,
            afterSlideChange: null,
            beforeSlideLoad: null,
            afterSlideLoad: null,
            slideInserted: null,
            slideRemoved: null,
            slideExtraAttributes: null,
            onOpen: null,
            onClose: null,
            loop: !1,
            zoomable: !0,
            draggable: !0,
            dragAutoSnap: !1,
            dragToleranceX: 40,
            dragToleranceY: 65,
            preload: !0,
            oneSlidePerOpen: !1,
            touchNavigation: !0,
            touchFollowAxis: !0,
            keyboardNavigation: !0,
            closeOnOutsideClick: !0,
            plugins: !1,
            plyr: {
                css: "https://cdn.plyr.io/3.6.12/plyr.css",
                js: "https://cdn.plyr.io/3.6.12/plyr.js",
                config: {
                    ratio: "16:9",
                    fullscreen: {enabled: !0, iosNative: !0},
                    youtube: {noCookie: !0, rel: 0, showinfo: 0, iv_load_policy: 3},
                    vimeo: {byline: !1, portrait: !1, title: !1, transparent: !1}
                }
            },
            openEffect: "zoom",
            closeEffect: "zoom",
            slideEffect: "slide",
            moreText: "See more",
            moreLength: 60,
            cssEfects: {
                fade: {in: "fadeIn", out: "fadeOut"},
                zoom: {in: "zoomIn", out: "zoomOut"},
                slide: {in: "slideInRight", out: "slideOutLeft"},
                slideBack: {in: "slideInLeft", out: "slideOutRight"},
                none: {in: "none", out: "none"}
            },
            svg: {
                close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
            },
            slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
            lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
        }, te = function () {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), this.customOptions = i, this.settings = l(ee, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
            }

            return n(e, [{
                key: "init", value: function () {
                    var e = this, t = this.getSelector();
                    t && (this.baseEvents = a("click", {
                        onElement: t, withCallback: function (t, i) {
                            t.preventDefault(), e.open(i)
                        }
                    })), this.elements = this.getElements()
                }
            }, {
                key: "open", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (0 === this.elements.length) return !1;
                    this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                    var i = M(t) ? t : this.settings.startAt;
                    if (k(e)) {
                        var n = e.getAttribute("data-gallery");
                        n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), I(i) && (i = this.getElementIndex(e)) < 0 && (i = 0)
                    }
                    M(i) || (i = 0), this.build(), g(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                    var s = document.body, l = window.innerWidth - document.documentElement.clientWidth;
                    if (l > 0) {
                        var o = document.createElement("style");
                        o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), h(s, "gscrollbar-fixer")
                    }
                    h(s, "glightbox-open"), h(Q, "glightbox-open"), J && (h(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 === this.elements.length ? (h(this.prevButton, "glightbox-button-hidden"), h(this.nextButton, "glightbox-button-hidden")) : (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), T(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && B(this), this.settings.keyboardNavigation && X(this)
                }
            }, {
                key: "openAt", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.open(null, e)
                }
            }, {
                key: "showSlide", value: function () {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    f(this.loader), this.index = parseInt(t);
                    var n = this.slidesContainer.querySelector(".current");
                    n && d(n, "current"), this.slideAnimateOut();
                    var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                    if (c(s, "loaded")) this.slideAnimateIn(s, i), p(this.loader); else {
                        f(this.loader);
                        var l = this.elements[t], o = {
                            index: this.index,
                            slide: s,
                            slideNode: s,
                            slideConfig: l.slideConfig,
                            slideIndex: this.index,
                            trigger: l.node,
                            player: null
                        };
                        this.trigger("slide_before_load", o), l.instance.setContent(s, (function () {
                            p(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o)
                        }))
                    }
                    this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s
                }
            }, {
                key: "preloadSlide", value: function (e) {
                    var t = this;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    if (I(this.elements[e])) return !1;
                    var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                    if (c(i, "loaded")) return !1;
                    var n = this.elements[e], s = n.type, l = {
                        index: e,
                        slide: i,
                        slideNode: i,
                        slideConfig: n.slideConfig,
                        slideIndex: e,
                        trigger: n.node,
                        player: null
                    };
                    this.trigger("slide_before_load", l), "video" === s || "external" === s ? setTimeout((function () {
                        n.instance.setContent(i, (function () {
                            t.trigger("slide_after_load", l)
                        }))
                    }), 200) : n.instance.setContent(i, (function () {
                        t.trigger("slide_after_load", l)
                    }))
                }
            }, {
                key: "prevSlide", value: function () {
                    this.goToSlide(this.index - 1)
                }
            }, {
                key: "nextSlide", value: function () {
                    this.goToSlide(this.index + 1)
                }
            }, {
                key: "goToSlide", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                    e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e)
                }
            }, {
                key: "insertSlide", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    t < 0 && (t = this.elements.length);
                    var i = new $(e, this, t), n = i.getConfig(), s = l({}, n), o = i.create(),
                        r = this.elements.length - 1;
                    s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                    var a = null, h = null;
                    if (this.slidesContainer) {
                        if (t > r) this.slidesContainer.appendChild(o); else {
                            var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                            this.slidesContainer.insertBefore(o, d)
                        }
                        (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a
                    }
                    this.trigger("slide_inserted", {
                        index: t,
                        slide: a,
                        slideNode: a,
                        slideConfig: n,
                        slideIndex: t,
                        trigger: null,
                        player: h
                    }), T(this.settings.slideInserted) && this.settings.slideInserted({index: t, slide: a, player: h})
                }
            }, {
                key: "removeSlide", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                    t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), T(this.settings.slideRemoved) && this.settings.slideRemoved(e)
                }
            }, {
                key: "slideAnimateIn", value: function (e, t) {
                    var i = this, n = e.querySelector(".gslide-media"), s = e.querySelector(".gslide-description"), l = {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlide,
                        slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, o = {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideConfig: this.elements[this.index].slideConfig,
                        slideIndex: this.index,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index)
                    };
                    if (n.offsetWidth > 0 && s && (p(s), s.style.display = ""), d(e, this.effectsClasses), t) g(e, this.settings.cssEfects[this.settings.openEffect].in, (function () {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: l,
                            current: o
                        }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
                    })); else {
                        var r = this.settings.slideEffect, a = "none" !== r ? this.settings.cssEfects[r].in : r;
                        this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), g(e, a, (function () {
                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                prev: l,
                                current: o
                            }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [l, o])
                        }))
                    }
                    setTimeout((function () {
                        i.resize(e)
                    }), 100), h(e, "current")
                }
            }, {
                key: "slideAnimateOut", value: function () {
                    if (!this.prevActiveSlide) return !1;
                    var e = this.prevActiveSlide;
                    d(e, this.effectsClasses), h(e, "prev");
                    var t = this.settings.slideEffect, i = "none" !== t ? this.settings.cssEfects[t].out : t;
                    this.slidePlayerPause(e), this.trigger("slide_before_change", {
                        prev: {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlideIndex,
                            slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        current: {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideIndex: this.index,
                            slideConfig: this.elements[this.index].slideConfig,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    }), T(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, {
                        index: this.index,
                        slide: this.activeSlide,
                        player: this.getSlidePlayerInstance(this.index)
                    }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), g(e, i, (function () {
                        var t = e.querySelector(".ginner-container"), i = e.querySelector(".gslide-media"),
                            n = e.querySelector(".gslide-description");
                        t.style.transform = "", i.style.transform = "", d(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), d(e, "prev")
                    }))
                }
            }, {
                key: "getAllPlayers", value: function () {
                    return this.videoPlayers
                }
            }, {
                key: "getSlidePlayerInstance", value: function (e) {
                    var t = "gvideo" + e, i = this.getAllPlayers();
                    return !(!O(i, t) || !i[t]) && i[t]
                }
            }, {
                key: "stopSlideVideo", value: function (e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause()
                }
            }, {
                key: "slidePlayerPause", value: function (e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause()
                }
            }, {
                key: "playSlideVideo", value: function (e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                    var i = this.getSlidePlayerInstance(e);
                    i && !i.playing && i.play()
                }
            }, {
                key: "slidePlayerPlay", value: function (e) {
                    var t;
                    if (!J || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                        if (k(e)) {
                            var i = e.querySelector(".gvideo-wrapper");
                            i && (e = i.getAttribute("data-index"))
                        }
                        var n = this.getSlidePlayerInstance(e);
                        n && !n.playing && (n.play(), this.settings.autofocusVideos && n.elements.container.focus())
                    }
                }
            }, {
                key: "setElements", value: function (e) {
                    var t = this;
                    this.settings.elements = !1;
                    var i = [];
                    e && e.length && o(e, (function (e, n) {
                        var s = new $(e, t, n), o = s.getConfig(), r = l({}, o);
                        r.slideConfig = o, r.instance = s, r.index = n, i.push(r)
                    })), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o(this.elements, (function () {
                        var e = m(t.settings.slideHTML);
                        t.slidesContainer.appendChild(e)
                    })), this.showSlide(0, !0)))
                }
            }, {
                key: "getElementIndex", value: function (e) {
                    var t = !1;
                    return o(this.elements, (function (i, n) {
                        if (O(i, "node") && i.node == e) return t = n, !0
                    })), t
                }
            }, {
                key: "getElements", value: function () {
                    var e = this, t = [];
                    this.elements = this.elements ? this.elements : [], !I(this.settings.elements) && E(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, (function (i, n) {
                        var s = new $(i, e, n), o = s.getConfig(), r = l({}, o);
                        r.node = !1, r.index = n, r.instance = s, r.slideConfig = o, t.push(r)
                    }));
                    var i = !1;
                    return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (o(i, (function (i, n) {
                        var s = new $(i, e, n), o = s.getConfig(), r = l({}, o);
                        r.node = i, r.index = n, r.instance = s, r.slideConfig = o, r.gallery = i.getAttribute("data-gallery"), t.push(r)
                    })), t) : t
                }
            }, {
                key: "getGalleryElements", value: function (e, t) {
                    return e.filter((function (e) {
                        return e.gallery == t
                    }))
                }
            }, {
                key: "getSelector", value: function () {
                    return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
                }
            }, {
                key: "getActiveSlide", value: function () {
                    return this.slidesContainer.querySelectorAll(".gslide")[this.index]
                }
            }, {
                key: "getActiveSlideIndex", value: function () {
                    return this.index
                }
            }, {
                key: "getAnimationClasses", value: function () {
                    var e = [];
                    for (var t in this.settings.cssEfects) if (this.settings.cssEfects.hasOwnProperty(t)) {
                        var i = this.settings.cssEfects[t];
                        e.push("g".concat(i.in)), e.push("g".concat(i.out))
                    }
                    return e.join(" ")
                }
            }, {
                key: "build", value: function () {
                    var e = this;
                    if (this.built) return !1;
                    var t = document.body.childNodes, i = [];
                    o(t, (function (e) {
                        e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"))
                    }));
                    var n = O(this.settings.svg, "next") ? this.settings.svg.next : "",
                        s = O(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                        l = O(this.settings.svg, "close") ? this.settings.svg.close : "", r = this.settings.lightboxHTML;
                    r = m(r = (r = (r = r.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(r);
                    var d = document.getElementById("glightbox-body");
                    this.modal = d;
                    var g = d.querySelector(".gclose");
                    this.prevButton = d.querySelector(".gprev"), this.nextButton = d.querySelector(".gnext"), this.overlay = d.querySelector(".goverlay"), this.loader = d.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {}, h(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && g && (this.events.close = a("click", {
                        onElement: g,
                        withCallback: function (t, i) {
                            t.preventDefault(), e.close()
                        }
                    })), g && !this.settings.closeButton && g.parentNode.removeChild(g), this.nextButton && (this.events.next = a("click", {
                        onElement: this.nextButton,
                        withCallback: function (t, i) {
                            t.preventDefault(), e.nextSlide()
                        }
                    })), this.prevButton && (this.events.prev = a("click", {
                        onElement: this.prevButton,
                        withCallback: function (t, i) {
                            t.preventDefault(), e.prevSlide()
                        }
                    })), this.settings.closeOnOutsideClick && (this.events.outClose = a("click", {
                        onElement: d,
                        withCallback: function (t, i) {
                            e.preventOutsideClick || c(document.body, "glightbox-mobile") || u(t.target, ".ginner-container") || u(t.target, ".gbtn") || c(t.target, "gnext") || c(t.target, "gprev") || e.close()
                        }
                    })), o(this.elements, (function (t, i) {
                        e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i]
                    })), K && h(document.body, "glightbox-touch"), this.events.resize = a("resize", {
                        onElement: window,
                        withCallback: function () {
                            e.resize()
                        }
                    }), this.built = !0
                }
            }, {
                key: "resize", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((e = e || this.activeSlide) && !c(e, "zoomed")) {
                        var t = y(), i = e.querySelector(".gvideo-wrapper"), n = e.querySelector(".gslide-image"),
                            s = this.slideDescription, l = t.width, o = t.height;
                        if (l <= 768 ? h(document.body, "glightbox-mobile") : d(document.body, "glightbox-mobile"), i || n) {
                            var r = !1;
                            if (s && (c(s, "description-bottom") || c(s, "description-top")) && !c(s, "gabsolute") && (r = !0), n) if (l <= 768) n.querySelector("img"); else if (r) {
                                var a = s.offsetHeight, u = n.querySelector("img");
                                u.setAttribute("style", "max-height: calc(100vh - ".concat(a, "px)")), s.setAttribute("style", "max-width: ".concat(u.offsetWidth, "px;"))
                            }
                            if (i) {
                                var g = O(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                if (!g) {
                                    var v = i.clientWidth, f = i.clientHeight, p = v / f;
                                    g = "".concat(v / p, ":").concat(f / p)
                                }
                                var m = g.split(":"), x = this.settings.videosWidth, b = this.settings.videosWidth,
                                    S = (b = M(x) || -1 !== x.indexOf("px") ? parseInt(x) : -1 !== x.indexOf("vw") ? l * parseInt(x) / 100 : -1 !== x.indexOf("vh") ? o * parseInt(x) / 100 : -1 !== x.indexOf("%") ? l * parseInt(x) / 100 : parseInt(i.clientWidth)) / (parseInt(m[0]) / parseInt(m[1]));
                                if (S = Math.floor(S), r && (o -= s.offsetHeight), b > l || S > o || o < S && l > b) {
                                    var w = i.offsetWidth, T = i.offsetHeight, C = o / T, k = {width: w * C, height: T * C};
                                    i.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")), r && s.setAttribute("style", "max-width: ".concat(k.width, "px;"))
                                } else i.parentNode.style.maxWidth = "".concat(x), r && s.setAttribute("style", "max-width: ".concat(x, ";"))
                            }
                        }
                    }
                }
            }, {
                key: "reload", value: function () {
                    this.init()
                }
            }, {
                key: "updateNavigationClasses", value: function () {
                    var e = this.loop();
                    d(this.nextButton, "disabled"), d(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (h(this.prevButton, "disabled"), h(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || h(this.nextButton, "disabled") : h(this.prevButton, "disabled")
                }
            }, {
                key: "loop", value: function () {
                    var e = O(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                    return e = O(this.settings, "loop") ? this.settings.loop : e, e
                }
            }, {
                key: "close", value: function () {
                    var e = this;
                    if (!this.lightboxOpen) {
                        if (this.events) {
                            for (var t in this.events) this.events.hasOwnProperty(t) && this.events[t].destroy();
                            this.events = null
                        }
                        return !1
                    }
                    if (this.closing) return !1;
                    this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, (function (e) {
                        e.removeAttribute("aria-hidden")
                    })), h(this.modal, "glightbox-closing"), g(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), g(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, (function () {
                        if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                            for (var t in e.events) e.events.hasOwnProperty(t) && e.events[t].destroy();
                            e.events = null
                        }
                        var i = document.body;
                        d(Q, "glightbox-open"), d(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), T(e.settings.onClose) && e.settings.onClose();
                        var n = document.querySelector(".gcss-styles");
                        n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null
                    }))
                }
            }, {
                key: "destroy", value: function () {
                    this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
                }
            }, {
                key: "on", value: function (e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e || !T(t)) throw new TypeError("Event name and callback must be defined");
                    this.apiEvents.push({evt: e, once: i, callback: t})
                }
            }, {
                key: "once", value: function (e, t) {
                    this.on(e, t, !0)
                }
            }, {
                key: "trigger", value: function (e) {
                    var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = [];
                    o(this.apiEvents, (function (t, s) {
                        var l = t.evt, o = t.once, r = t.callback;
                        l == e && (r(i), o && n.push(s))
                    })), n.length && o(n, (function (e) {
                        return t.apiEvents.splice(e, 1)
                    }))
                }
            }, {
                key: "clearAllEvents", value: function () {
                    this.apiEvents.splice(0, this.apiEvents.length)
                }
            }, {
                key: "version", value: function () {
                    return "3.1.0"
                }
            }]), e
        }();
    return function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = new te(e);
        return t.init(), t
    }
}));/*! * include swiper ( for sliders )  */
/**
 * Swiper 8.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 21, 2022
 */

!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function () {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }

    const s = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: {
            blur() {
            }, nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {
            }
        }),
        createElement: () => ({
            children: [], childNodes: [], style: {}, setAttribute() {
            }, getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }

    const i = {
        document: s,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState() {
            }, pushState() {
            }, go() {
            }, back() {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({getPropertyValue: () => ""}),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }

    class n extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []), function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t, set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }

    function l(e) {
        void 0 === e && (e = []);
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        })), t
    }

    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function d(e, t) {
        const s = r(), i = a();
        let l = [];
        if (!t && e instanceof n) return e;
        if (!e) return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e])
            } else l = function (e, t) {
                if ("string" != typeof e) return [e];
                const s = [], a = t.querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                return s
            }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i) l.push(e); else if (Array.isArray(e)) {
            if (e instanceof n) return e;
            l = e
        }
        return new n(function (e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }

    d.fn = n.prototype;
    const c = {
        addClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...a)
            })), this
        }, removeClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...a)
            })), this
        }, hasClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return o(this, (e => a.filter((t => e.classList.contains(t))).length > 0)).length > 0
        }, toggleClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            this.forEach((e => {
                a.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        }, attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1) if (2 === arguments.length) this[s].setAttribute(e, t); else for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
            return this
        }, removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, transform: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        }, transition: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        }, on: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;

            function l(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s); else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s)
                }
            }

            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }

            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const c = a.split(" ");
            let p;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i) for (p = 0; p < c.length; p += 1) {
                    const e = c[p];
                    t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                        listener: r,
                        proxyListener: l
                    }), t.addEventListener(e, l, n)
                } else for (p = 0; p < c.length; p += 1) {
                    const e = c[p];
                    t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                        listener: r,
                        proxyListener: o
                    }), t.addEventListener(e, o, n)
                }
            }
            return this
        }, off: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;
            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const l = a.split(" ");
            for (let e = 0; e < l.length; e += 1) {
                const t = l[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let a;
                    if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length) for (let e = a.length - 1; e >= 0; e -= 1) {
                        const i = a[e];
                        r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                    }
                }
            }
            return this
        }, trigger: function () {
            const e = r();
            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
            const i = s[0].split(" "), n = s[1];
            for (let t = 0; t < i.length; t += 1) {
                const a = i[t];
                for (let t = 0; t < this.length; t += 1) {
                    const i = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(a, {detail: n, bubbles: !0, cancelable: !0});
                        i.dom7EventData = s.filter(((e, t) => t > 0)), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData
                    }
                }
            }
            return this
        }, transitionEnd: function (e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s))
            })), this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, styles: function () {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        }, offset: function () {
            if (this.length > 0) {
                const e = r(), t = a(), s = this[0], i = s.getBoundingClientRect(), n = t.body,
                    l = s.clientTop || n.clientTop || 0, o = s.clientLeft || n.clientLeft || 0,
                    d = s === e ? e.scrollY : s.scrollTop, c = s === e ? e.scrollX : s.scrollLeft;
                return {top: i.top + d - l, left: i.left + c - o}
            }
            return null
        }, css: function (e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (const t in e) this[a].style[t] = e[t];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            return e ? (this.forEach(((t, s) => {
                e.apply(t, [t, s])
            })), this) : this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            const t = r(), s = a(), i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
                return !1
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
                return !1
            }
            return !1
        }, index: function () {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        }, append: function () {
            let e;
            const t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for (let s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                } else if (e instanceof n) for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]); else this[s].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                const a = t.createElement("div");
                for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
            } else if (e instanceof n) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]); else this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        }, nextAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        }, prev: function (e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
            }
            return d([])
        }, prevAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        }, parent: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        }, parents: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode
            }
            return d(t)
        }, closest: function (e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) t.push(a[e])
            }
            return d(t)
        }, children: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        }, filter: function (e) {
            return d(o(this, e))
        }, remove: function () {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function p(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function u() {
        return Date.now()
    }

    function h(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function (e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
    }

    function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !f(a)) {
                const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, i = s.length; t < i; t += 1) {
                    const i = s[t], r = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
                }
            }
        }
        return e
    }

    function v(e, t, s) {
        e.style.setProperty(t, s)
    }

    function w(e) {
        let {swiper: t, targetPosition: s, side: a} = e;
        const i = r(), n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev", p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t, u = () => {
            l = (new Date).getTime(), null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0), r = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + r * (s - n);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({[a]: c}), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[a]: c})
            })), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u)
        };
        u()
    }

    let b, x, y;

    function E() {
        return b || (b = function () {
            const e = r(), t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function () {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {
                    }
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), b
    }

    function C(e) {
        return void 0 === e && (e = {}), x || (x = function (e) {
            let {userAgent: t} = void 0 === e ? {} : e;
            const s = E(), a = r(), i = a.navigator.platform, n = t || a.navigator.userAgent,
                l = {ios: !1, android: !1}, o = a.screen.width, d = a.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/), h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l
        }(e)), x
    }

    function T() {
        return y || (y = function () {
            const e = r();
            return {
                isSafari: function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), y
    }

    Object.keys(c).forEach((e => {
        Object.defineProperty(d.fn, e, {value: c[e], writable: !0})
    }));
    var $ = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
            })), a
        }, once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;

            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                t.apply(a, r)
            }

            return i.__emitterProxy = t, a.on(e, i, s)
        }, onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        }, offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        }, off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }))
            })), s) : s
        }, emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(a, [t, ...s])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(a, s)
                }))
            })), e
        }
    };
    var S = {
        updateSize: function () {
            const e = this;
            let t, s;
            const a = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        }, updateSlides: function () {
            const e = this;

            function t(t) {
                return e.isHorizontal() ? t : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[t]
            }

            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0)
            }

            const a = e.params, {$wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e,
                o = e.virtual && a.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length,
                c = i.children(`.${e.params.slideClass}`), p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = [], m = [];
            let f = a.slidesOffsetBefore;
            "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
            let g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length, b = e.slidesGrid.length;
            let x = a.spaceBetween, y = -f, E = 0, C = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }) : c.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = a.grid && a.grid.rows > 1 && e.grid;
            let $;
            T && e.grid.initSlides(p);
            const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < p; i += 1) {
                $ = 0;
                const n = c.eq(i);
                if (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
                    if ("auto" === a.slidesPerView) {
                        S && (c[i].style[t("width")] = "");
                        const r = getComputedStyle(n[0]), l = n[0].style.transform, o = n[0].style.webkitTransform;
                        if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0); else {
                            const e = s(r, "width"), t = s(r, "padding-left"), a = s(r, "padding-right"),
                                i = s(r, "margin-left"), l = s(r, "margin-right"), o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) $ = e + i + l; else {
                                const {clientWidth: s, offsetWidth: r} = n[0];
                                $ = e + t + a + i + l + (r - s)
                            }
                        }
                        l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($))
                    } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`);
                    c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({width: `${e.virtualSize + a.spaceBetween}px`}), a.setWrapperSize && i.css({[t("width")]: `${e.virtualSize + a.spaceBetween}px`}), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                    let i = u[s];
                    a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
                }
                u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
            }
            if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                c.filter(((e, t) => !a.cssMode || t !== c.length - 1)).css({[s]: `${x}px`})
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                })), e -= a.spaceBetween;
                const t = e - r;
                u = u.map((e => e < 0 ? -f : e > t ? t + g : e))
            }
            if (a.centerInsufficientSlides) {
                let e = 0;
                if (m.forEach((t => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                })), e -= a.spaceBetween, e < r) {
                    const t = (r - e) / 2;
                    u.forEach(((e, s) => {
                        u[s] = e - t
                    })), h.forEach(((e, s) => {
                        h[s] = e + t
                    }))
                }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: u,
                slidesGrid: h,
                slidesSizesGrid: m
            }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e.snapGrid[0], s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                const t = `${a.containerModifierClass}backface-hidden`, s = e.$el.hasClass(t);
                p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
            }
        }, updateAutoHeight: function (e) {
            const t = this, s = [], a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || d([])).each((e => {
                s.push(e)
            })); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !a) break;
                s.push(n(e))
            } else s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
                const e = s[i].offsetHeight;
                r = e > r ? e : r
            }
            (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
        }, updateSlidesOffset: function () {
            const e = this, t = e.slides;
            for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this, s = t.params, {slides: a, rtlTranslate: i, snapGrid: r} = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < a.length; e += 1) {
                const l = a[e];
                let o = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    p = -(n - o), u = p + t.slidesSizesGrid[e];
                (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c
            }
            t.visibleSlides = d(t.visibleSlides)
        }, updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params, a = t.maxTranslate() - t.minTranslate();
            let {progress: i, isBeginning: r, isEnd: n} = t;
            const l = r, o = n;
            0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
                progress: i,
                isBeginning: r,
                isEnd: n
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i)
        }, updateSlidesClasses: function () {
            const e = this, {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r} = e,
                n = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
        }, updateActiveIndex: function (e) {
            const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {
                slidesGrid: a,
                snapGrid: i,
                params: r,
                activeIndex: n,
                realIndex: l,
                snapIndex: o
            } = t;
            let d, c = e;
            if (void 0 === c) {
                for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (i.indexOf(s) >= 0) d = i.indexOf(s); else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup)
            }
            if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: n,
                activeIndex: c
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
        }, updateClickedSlide: function (e) {
            const t = this, s = t.params, a = d(e).closest(`.${s.slideClass}`)[0];
            let i, r = !1;
            if (a) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === a) {
                r = !0, i = e;
                break
            }
            if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
            t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var M = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = h(i[0], e);
            return s && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            const s = this, {rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l} = s;
            let o, d = 0, c = 0;
            s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
            const p = s.maxTranslate() - s.minTranslate();
            o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }, translateTo: function (e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
            const r = this, {params: n, wrapperEl: l} = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(), d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c; else {
                    if (!r.support.smoothScroll) return w({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({[e ? "left" : "top"]: -c, behavior: "smooth"})
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
        }
    };

    function P(e) {
        let {swiper: t, runCallbacks: s, direction: a, step: i} = e;
        const {activeIndex: r, previousIndex: n} = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }

    var k = {
        slideTo: function (e, t, s, a, i) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {
                params: l,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: h,
                enabled: m
            } = r;
            if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1);
            const v = -o[g];
            if (l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * v), s = Math.floor(100 * d[e]), a = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
            }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1
            }
            let b;
            if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(), s = u ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                    }))
                } else {
                    if (!r.support.smoothScroll) return w({swiper: r, targetPosition: s, side: e ? "left" : "top"}), !0;
                    h.scrollTo({[e ? "left" : "top"]: s, behavior: "smooth"})
                }
                return !0
            }
            return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
        }, slideToLoop: function (e, t, s, a) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const i = this;
            let r = e;
            return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
        }, slideNext: function (e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this, {animating: i, enabled: r, params: n} = a;
            if (!r) return a;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
            if (n.loop) {
                if (i && n.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }
            return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        }, slidePrev: function (e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this, {params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d} = a;
            if (!d) return a;
            if (i.loop) {
                if (r && i.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }

            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            const p = c(o ? a.translate : -a.translate), u = n.map((e => c(e)));
            let h = n[u.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                n.forEach(((t, s) => {
                    p >= t && (e = s)
                })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return a.slideTo(m, e, t, s)
        }, slideReset: function (e, t, s) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
        }, slideToClosest: function (e, t, s, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
        }, slideToClickedSlide: function () {
            const e = this, {params: t, $wrapperEl: s} = e,
                a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };
    var z = {
        loopCreate: function () {
            const e = this, t = a(), {params: s, $wrapperEl: i} = e,
                r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
            r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
            let n = r.children(`.${s.slideClass}`);
            if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                if (e !== s.slidesPerGroup) {
                    for (let a = 0; a < e; a += 1) {
                        const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                        r.append(e)
                    }
                    n = r.children(`.${s.slideClass}`)
                }
            }
            "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
            const l = [], o = [];
            n.each(((e, t) => {
                d(e).attr("data-swiper-slide-index", t)
            }));
            for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / n.length) * n.length;
                o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0])
            }
            for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
        }, loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const {
                activeIndex: t,
                slides: s,
                loopedSlides: a,
                allowSlidePrev: i,
                allowSlideNext: r,
                snapGrid: n,
                rtlTranslate: l
            } = e;
            let o;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            const d = -n[t] - e.getTranslate();
            if (t < a) {
                o = s.length - 3 * a + t, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            } else if (t >= s.length - a) {
                o = -s.length + t + a, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            }
            e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
        }, loopDestroy: function () {
            const {$wrapperEl: e, params: t, slides: s} = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
        }
    };

    function L(e) {
        const t = this, s = a(), i = r(), n = t.touchEventsData, {params: l, touches: o, enabled: c} = t;
        if (!c) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const m = !!l.noSwipingClass && "" !== l.noSwipingClass, f = e.composedPath ? e.composedPath() : e.path;
        m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
        const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            v = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (v ? function (e, t) {
            return void 0 === t && (t = this), function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
            }(t)
        }(g, h[0]) : h.closest(g)[0])) return void (t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const w = o.currentX, b = o.currentY, x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (x && (w <= y || w >= i.innerWidth - y)) {
            if ("prevent" !== x) return;
            e.preventDefault()
        }
        if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), o.startX = w, o.startY = b, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p)
    }

    function O(e) {
        const t = a(), s = this, i = s.touchEventsData, {params: r, touches: n, rtlTranslate: l, enabled: o} = s;
        if (!o) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
            h = "touchmove" === c.type ? p.pageX : c.pageX, m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
        if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
            if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
        } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX, g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = !0, b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }

    function I(e) {
        const t = this, s = t.touchEventsData, {params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l} = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u(), c = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = u(), p((() => {
            t.destroyed || (t.allowClick = !0)
        })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: h});
        let m = 0, f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2])
        }
        let g = null, v = null;
        a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const w = (h - n[m]) / f, b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
        }
    }

    function A() {
        const e = this, {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function G() {
        const e = this, {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    let N = !1;

    function B() {
    }

    const H = (e, t) => {
        const s = a(), {params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d} = e, c = !!i.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener", u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t)
        } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
    };
    var X = {
        attachEvents: function () {
            const e = this, t = a(), {params: s, support: i} = e;
            e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on")
        }, detachEvents: function () {
            H(this, "off")
        }
    };
    const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var R = {
        addClasses: function () {
            const e = this, {classNames: t, params: s, rtl: a, $el: i, device: r, support: n} = e, l = function (e, t) {
                const s = [];
                return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((a => {
                        e[a] && s.push(t + a)
                    })) : "string" == typeof e && s.push(t + e)
                })), s
            }(["initialized", s.direction, {"pointer-events": !n.touch}, {"free-mode": e.params.freeMode && s.freeMode.enabled}, {autoheight: s.autoHeight}, {rtl: a}, {grid: s.grid && s.grid.rows > 1}, {"grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill}, {android: r.android}, {ios: r.ios}, {"css-mode": s.cssMode}, {centered: s.cssMode && s.centeredSlides}, {"watch-progress": s.watchSlidesProgress}], s.containerModifierClass);
            t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
        }, removeClasses: function () {
            const {$el: e, classNames: t} = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
        }
    };
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function q(e, t) {
        return function (s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0], i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {auto: !0}), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {enabled: !0}), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {enabled: !1}), g(t, s)) : g(t, s)) : g(t, s)
        }
    }

    const j = {
        eventsEmitter: $, update: S, translate: M, transition: {
            setTransition: function (e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
            }, transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                const s = this, {params: a} = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            }, transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                const s = this, {params: a} = s;
                s.animating = !1, a.cssMode || (s.setTransition(0), P({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        }, slide: k, loop: z, grabCursor: {
            setGrabCursor: function (e) {
                const t = this;
                if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
            }, unsetGrabCursor: function () {
                const e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        }, events: X, breakpoints: {
            setBreakpoint: function () {
                const e = this, {activeIndex: t, initialized: s, loopedSlides: a = 0, params: i, $el: r} = e,
                    n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length) return;
                const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l) return;
                const o = (l in n ? n[l] : void 0) || e.originalParams, d = Y(e, i), c = Y(e, o), p = i.enabled;
                d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                    const s = i[t] && i[t].enabled, a = o[t] && o[t].enabled;
                    s && !a && e[t].disable(), !s && a && e[t].enable()
                }));
                const u = o.direction && o.direction !== i.direction,
                    h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                u && s && e.changeDirection(), g(e.params, o);
                const m = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
            }, getBreakpoint: function (e, t, s) {
                if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                let a = !1;
                const i = r(), n = "window" === t ? i.innerHeight : s.clientHeight, l = Object.keys(e).map((e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {value: n * t, point: e}
                    }
                    return {value: e, point: e}
                }));
                l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < l.length; e += 1) {
                    const {point: r, value: n} = l[e];
                    "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                }
                return a || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const e = this, {isLocked: t, params: s} = e, {slidesOffsetBefore: a} = s;
                if (a) {
                    const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        }, classes: R, images: {
            loadImage: function (e, t, s, a, i, n) {
                const l = r();
                let o;

                function c() {
                    n && n()
                }

                d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c()
            }, preloadImages: function () {
                const e = this;

                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                }

                e.imagesToLoad = e.$el.find("img");
                for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                }
            }
        }
    }, _ = {};

    class V {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
            if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
                const e = [];
                return d(t.el).each((s => {
                    const a = g({}, t, {el: s});
                    e.push(new V(a))
                })), e
            }
            const r = this;
            r.__swiper__ = !0, r.support = E(), r.device = C({userAgent: t.userAgent}), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const n = {};
            r.modules.forEach((e => {
                e({
                    swiper: r,
                    extendParams: q(t, n),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }));
            const l = g({}, W, n);
            return r.params = g({}, l, _, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
                r.on(e, r.params.on[e])
            })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function () {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }

        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }

        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }

        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(), i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }

        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }

        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }

        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s => {
                const a = e.getSlideClasses(s);
                t.push({slideEl: s, classNames: a}), e.emit("_slideClass", s, a)
            })), e.emit("_slideClasses", t)
        }

        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
            } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) {
                (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
            } else for (let e = l - 1; e >= 0; e -= 1) {
                i[l] - i[e] < n && (o += 1)
            }
            return o
        }

        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {snapGrid: t, params: s} = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            let i;
            s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }

        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this, a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }

        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }

        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0])) return !1;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e => s.children(e), t
                }
                return s.children ? s.children(i()) : d(s).children(i())
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                    r.append(e)
                }))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0
        }

        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }

        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this, {params: a, $el: i, $wrapperEl: r, slides: n} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.$el[0].swiper = null, function (e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {
                    }
                    try {
                        delete t[e]
                    } catch (e) {
                    }
                }))
            }(s)), s.destroyed = !0), null
        }

        static extendDefaults(e) {
            g(_, e)
        }

        static get extendedDefaults() {
            return _
        }

        static get defaults() {
            return W
        }

        static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }

        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => V.installModule(e))), V) : (V.installModule(e), V)
        }
    }

    function F(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a => {
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n
            }
        })), s
    }

    function U(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }

    function K(e) {
        const t = this, {$wrapperEl: s, params: a} = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]); else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update()
    }

    function Z(e) {
        const t = this, {params: s, $wrapperEl: a, activeIndex: i} = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
            r = i + e.length
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1)
    }

    function Q(e, t) {
        const s = this, {$wrapperEl: a, params: i, activeIndex: r} = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(), d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n
        } else a.append(t);
        for (let e = 0; e < d.length; e += 1) a.append(d[e]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }

    function J(e) {
        const t = this, {params: s, $wrapperEl: a, activeIndex: i} = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0)
        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
    }

    function ee() {
        const e = this, t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
    }

    function te(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l,
            recreateShadows: o,
            getEffectParams: d
        } = e;
        let c;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate", (() => {
            s.params.effect === t && i()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        })), a("transitionEnd", (() => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.each((e => {
                    s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                })), o()
            }
        })), a("virtualUpdate", (() => {
            s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                c && s.slides && s.slides.length && (i(), c = !1)
            })))
        }))
    }

    function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function ae(e) {
        let {swiper: t, duration: s, transformEl: a, allSlides: i} = e;
        const {slides: r, activeIndex: n, $wrapperEl: l} = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd((() => {
                if (s) return;
                if (!t || t.destroyed) return;
                s = !0, t.animating = !1;
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1) l.trigger(e[t])
            }))
        }
    }

    function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""), i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r
    }

    Object.keys(j).forEach((e => {
        Object.keys(j[e]).forEach((t => {
            V.prototype[t] = j[e][t]
        }))
    })), V.use([function (e) {
        let {swiper: t, on: s, emit: a} = e;
        const i = r();
        let n = null, l = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
        }, d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange")
        };
        s("init", (() => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                l = i.requestAnimationFrame((() => {
                    const {width: s, height: a} = t;
                    let i = s, r = a;
                    e.forEach((e => {
                        let {contentBoxSize: s, contentRect: a, target: n} = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
                    })), i === s && r === a || o()
                }))
            })), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
            l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = [], l = r(), o = function (e, t) {
            void 0 === t && (t = {});
            const s = new (l.MutationObserver || l.WebkitMutationObserver)((e => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                    i("observerUpdate", e[0])
                };
                l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
            }));
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), n.push(s)
        };
        s({observer: !1, observeParents: !1, observeSlideChildren: !1}), a("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.$el[0], {childList: t.params.observeSlideChildren}), o(t.$wrapperEl[0], {attributes: !1})
            }
        })), a("destroy", (() => {
            n.forEach((e => {
                e.disconnect()
            })), n.splice(0, n.length)
        }))
    }]);
    const re = [function (e) {
        let t, {swiper: s, extendParams: a, on: i, emit: r} = e;

        function n(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
            const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i
        }

        function l(e) {
            const {slidesPerView: t, slidesPerGroup: a, centeredSlides: i} = s.params, {
                addSlidesBefore: l,
                addSlidesAfter: o
            } = s.params.virtual, {from: d, to: c, slides: p, slidesGrid: u, offset: h} = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const m = s.activeIndex || 0;
            let f, g, v;
            f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
            const w = Math.max((m || 0) - v, 0), b = Math.min((m || 0) + g, p.length - 1),
                x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

            function y() {
                s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate")
            }

            if (Object.assign(s.virtual, {
                from: w,
                to: b,
                offset: x,
                slidesGrid: s.slidesGrid
            }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`), s.updateProgress(), void r("virtualUpdate");
            if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                offset: x,
                from: w,
                to: b,
                slides: function () {
                    const e = [];
                    for (let t = w; t <= b; t += 1) e.push(p[t]);
                    return e
                }()
            }), void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
            const E = [], C = [];
            if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove(); else for (let e = d; e <= c; e += 1) (e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < p.length; t += 1) t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t)));
            C.forEach((e => {
                s.$wrapperEl.append(n(p[e], e))
            })), E.sort(((e, t) => t - e)).forEach((e => {
                s.$wrapperEl.prepend(n(p[e], e))
            })), s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), y()
        }

        a({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, i("beforeInit", (() => {
            s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l())
        })), i("setTranslate", (() => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                l()
            }), 100)) : l())
        })), i("init update resize", (() => {
            s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        })), Object.assign(s.virtual, {
            appendSlide: function (e) {
                if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]); else s.virtual.slides.push(e);
                l(!0)
            }, prependSlide: function (e) {
                const t = s.activeIndex;
                let a = t + 1, i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length, i = e.length
                } else s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache, t = {};
                    Object.keys(e).forEach((s => {
                        const a = e[s], r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a
                    })), s.virtual.cache = t
                }
                l(!0), s.slideTo(a, 0)
            }, removeSlide: function (e) {
                if (null == e) return;
                let t = s.activeIndex;
                if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0); else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                l(!0), s.slideTo(t, 0)
            }, removeAllSlides: function () {
                s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0)
            }, update: l
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: i, emit: n} = e;
        const l = a(), o = r();

        function c(e) {
            if (!t.enabled) return;
            const {rtlTranslate: s} = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode, r = t.params.keyboard.pageUpDown, d = r && 33 === i, c = r && 34 === i,
                p = 37 === i, u = 39 === i, h = 38 === i, m = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                    const a = t.$el, i = a[0].clientWidth, r = a[0].clientHeight, n = o.innerWidth, l = o.innerHeight,
                        d = t.$el.offset();
                    s && (d.left -= t.$el[0].scrollLeft);
                    const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1]) continue;
                            e = !0
                        }
                    }
                    if (!e) return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i)
            }
        }

        function p() {
            t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0)
        }

        function u() {
            t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1)
        }

        t.keyboard = {enabled: !1}, s({keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}}), i("init", (() => {
            t.params.keyboard.enabled && p()
        })), i("destroy", (() => {
            t.keyboard.enabled && u()
        })), Object.assign(t.keyboard, {enable: p, disable: u})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        let l;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), t.mousewheel = {enabled: !1};
        let o, c = u();
        const h = [];

        function m() {
            t.enabled && (t.mouseEntered = !0)
        }

        function f() {
            t.enabled && (t.mouseEntered = !1)
        }

        function g(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = (new n.Date).getTime(), !1)))
        }

        function v(e) {
            let s = e, a = !0;
            if (!t.enabled) return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
            s.originalEvent && (s = s.originalEvent);
            let c = 0;
            const m = t.rtlTranslate ? -1 : 1, f = function (e) {
                let t = 0, s = 0, a = 0, i = 0;
                return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: s,
                    pixelX: a,
                    pixelY: i
                }
            }(s);
            if (r.forceToAxis) if (t.isHorizontal()) {
                if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                c = -f.pixelX * m
            } else {
                if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                c = -f.pixelY
            } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
            if (0 === c) return !0;
            r.invert && (c = -c);
            let v = t.getTranslate() + c * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = {time: u(), delta: Math.abs(c), direction: Math.sign(c)},
                    a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                if (!a) {
                    o = void 0, t.params.loop && t.loopFix();
                    let n = t.getTranslate() + c * r.sensitivity;
                    const d = t.isBeginning, u = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                        clearTimeout(l), l = void 0, h.length >= 15 && h.shift();
                        const s = h.length ? h[h.length - 1] : void 0, a = h[0];
                        if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0); else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = c > 0 ? .8 : .2;
                            o = e, h.splice(0), l = p((() => {
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }), 0)
                        }
                        l || (l = p((() => {
                            o = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate()) return !0
                }
            } else {
                const s = {time: u(), delta: Math.abs(c), direction: Math.sign(c), raw: e};
                h.length >= 2 && h.shift();
                const a = h.length ? h[h.length - 1] : void 0;
                if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function (e) {
                    const s = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                    } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                    return !1
                }(s)) return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
        }

        function w(e) {
            let s = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v)
        }

        function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0)
        }

        function x() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0)
        }

        a("init", (() => {
            !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b()
        })), a("destroy", (() => {
            t.params.cssMode && b(), t.mousewheel.enabled && x()
        })), Object.assign(t.mousewheel, {enable: b, disable: x})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;

        function r(e) {
            let s;
            return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
        }

        function n(e, s) {
            const a = t.params.navigation;
            e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }

        function l() {
            if (t.params.loop) return;
            const {$nextEl: e, $prevEl: s} = t.navigation;
            n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind)
        }

        function o(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
        }

        function c(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
        }

        function p() {
            const e = t.params.navigation;
            if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
            const s = r(e.nextEl), a = r(e.prevEl);
            s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass))
        }

        function u() {
            const {$nextEl: e, $prevEl: s} = t.navigation;
            e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass))
        }

        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), t.navigation = {nextEl: null, $nextEl: null, prevEl: null, $prevEl: null}, a("init", (() => {
            !1 === t.params.navigation.enabled ? h() : (p(), l())
        })), a("toEdge fromEdge lock unlock", (() => {
            l()
        })), a("destroy", (() => {
            u()
        })), a("enable disable", (() => {
            const {$nextEl: e, $prevEl: s} = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        })), a("click", ((e, s) => {
            const {$nextEl: a, $prevEl: r} = t.navigation, n = s.target;
            if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                let e;
                a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
            }
        }));
        const h = () => {
            t.$el.addClass(t.params.navigation.navigationDisabledClass), u()
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l()
            }, disable: h, update: l, init: p, destroy: u
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const r = "swiper-pagination";
        let n;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }), t.pagination = {el: null, $el: null, bullets: []};
        let l = 0;

        function o() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }

        function c(e, s) {
            const {bulletActiveClass: a} = t.params.pagination;
            e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }

        function p() {
            const e = t.rtl, s = t.params.pagination;
            if (o()) return;
            const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                r = t.pagination.$el;
            let p;
            const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const a = t.pagination.bullets;
                let i, o, u;
                if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), r.length > 1) a.each((e => {
                    const t = d(e), a = t.index();
                    a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next"))
                })); else {
                    const e = a.eq(p), r = e.index();
                    if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const e = a.eq(i), n = a.eq(o);
                        for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (t.params.loop) if (r >= a.length) {
                            for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                            a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                        } else c(e, "prev"), c(n, "next"); else c(e, "prev"), c(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4), r = (n * i - n) / 2 - u * n,
                        l = e ? "right" : "left";
                    a.css(t.isHorizontal() ? l : "top", `${r}px`)
                }
            }
            if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                let e;
                e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const a = (p + 1) / u;
                let i = 1, n = 1;
                "horizontal" === e ? i = a : n = a, r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }

        function u() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                a = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
                for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                a.html(r), t.pagination.bullets = a.find(U(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
        }

        function h() {
            t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
            const e = t.params.pagination;
            if (!e.el) return;
            let s = d(e.el);
            0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter((e => d(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), (function (e) {
                e.preventDefault();
                let s = d(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides), t.slideTo(s)
            })), Object.assign(t.pagination, {$el: s, el: s[0]}), t.enabled || s.addClass(e.lockClass))
        }

        function m() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.pagination.$el;
            s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass))
        }

        a("init", (() => {
            !1 === t.params.pagination.enabled ? f() : (h(), u(), p())
        })), a("activeIndexChange", (() => {
            (t.params.loop || void 0 === t.snapIndex) && p()
        })), a("snapIndexChange", (() => {
            t.params.loop || p()
        })), a("slidesLengthChange", (() => {
            t.params.loop && (u(), p())
        })), a("snapGridLengthChange", (() => {
            t.params.loop || (u(), p())
        })), a("destroy", (() => {
            m()
        })), a("enable disable", (() => {
            const {$el: e} = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        })), a("lock unlock", (() => {
            p()
        })), a("click", ((e, s) => {
            const a = s.target, {$el: r} = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
            }
        }));
        const f = () => {
            t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p()
            }, disable: f, render: u, update: p, init: h, destroy: m
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: i, emit: r} = e;
        const n = a();
        let l, o, c, u, h = !1, m = null, f = null;

        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {scrollbar: e, rtlTranslate: s, progress: a} = t, {$dragEl: i, $el: r} = e, n = t.params.scrollbar;
            let l = o, d = (c - o) * a;
            s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout((() => {
                r[0].style.opacity = 0, r.transition(400)
            }), 1e3))
        }

        function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {scrollbar: e} = t, {$dragEl: s, $el: a} = e;
            s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
        }

        function w(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }

        function b(e) {
            const {scrollbar: s, rtlTranslate: a} = t, {$el: i} = s;
            let r;
            r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
        }

        function x(e) {
            const s = t.params.scrollbar, {scrollbar: a, $wrapperEl: i} = t, {$el: n, $dragEl: o} = a;
            h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e)
        }

        function y(e) {
            const {scrollbar: s, $wrapperEl: a} = t, {$el: i, $dragEl: n} = s;
            h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e))
        }

        function E(e) {
            const s = t.params.scrollbar, {scrollbar: a, $wrapperEl: i} = t, {$el: n} = a;
            h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p((() => {
                n.css("opacity", 0), n.transition(400)
            }), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
        }

        function C(e) {
            const {scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l} = t, o = s.$el;
            if (!o) return;
            const d = o[0], c = !(!l.passiveListener || !r.passiveListeners) && {passive: !1, capture: !1},
                p = !(!l.passiveListener || !r.passiveListeners) && {passive: !0, capture: !1};
            if (!d) return;
            const u = "on" === e ? "addEventListener" : "removeEventListener";
            l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p))
        }

        function T() {
            const {scrollbar: e, $el: s} = t;
            t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {el: "swiper-scrollbar"});
            const a = t.params.scrollbar;
            if (!a.el) return;
            let i = d(a.el);
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
            let r = i.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(e, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }

        function $() {
            const e = t.params.scrollbar, s = t.scrollbar.$el;
            s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off")
        }

        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), t.scrollbar = {el: null, dragEl: null, $el: null, $dragEl: null}, i("init", (() => {
            !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g())
        })), i("update resize observerUpdate lock unlock", (() => {
            v()
        })), i("setTranslate", (() => {
            g()
        })), i("setTransition", ((e, s) => {
            !function (e) {
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }(s)
        })), i("enable disable", (() => {
            const {$el: e} = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        })), i("destroy", (() => {
            $()
        }));
        const S = () => {
            t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $()
        };
        Object.assign(t.scrollbar, {
            enable: () => {
                t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g()
            }, disable: S, updateSize: v, setTranslate: g, init: T, destroy: $
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({parallax: {enabled: !1}});
        const i = (e, s) => {
            const {rtl: a} = t, i = d(e), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
            let l = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y");
            const c = i.attr("data-swiper-parallax-scale"), p = i.attr("data-swiper-parallax-opacity");
            if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
                const e = p - (p - 1) * (1 - Math.abs(s));
                i[0].style.opacity = e
            }
            if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`); else {
                const e = c - (c - 1) * (1 - Math.abs(s));
                i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
            }
        }, r = () => {
            const {$el: e, slides: s, progress: a, snapGrid: r} = t;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                i(e, a)
            })), s.each(((e, s) => {
                let n = e.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    i(e, n)
                }))
            }))
        };
        a("beforeInit", (() => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
        })), a("init", (() => {
            t.params.parallax.enabled && r()
        })), a("setTranslate", (() => {
            t.params.parallax.enabled && r()
        })), a("setTransition", ((e, s) => {
            t.params.parallax.enabled && function (e) {
                void 0 === e && (e = t.params.speed);
                const {$el: s} = t;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => {
                    const s = d(t);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), s.transition(a)
                }))
            }(s)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), t.zoom = {enabled: !1};
        let l, o, c, p = 1, u = !1;
        const m = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
        }, f = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }, g = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
        let v = 1;

        function w(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, a = e.targetTouches[1].pageX,
                i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        }

        function b(e) {
            const s = t.support, a = t.params.zoom;
            if (o = !1, c = !1, !s.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                o = !0, m.scaleStart = w(e)
            }
            m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0
        }

        function x(e) {
            const s = t.support, a = t.params.zoom, i = t.zoom;
            if (!s.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                c = !0, m.scaleMove = w(e)
            }
            m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e)
        }

        function y(e) {
            const s = t.device, a = t.support, i = t.params.zoom, r = t.zoom;
            if (!a.gestures) {
                if (!o || !c) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
                o = !1, c = !1
            }
            m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0))
        }

        function E(e) {
            const s = t.zoom;
            if (!m.$imageEl || 0 === m.$imageEl.length) return;
            if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
            f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
            const a = f.width * s.scale, i = f.height * s.scale;
            if (!(a < m.slideWidth && i < m.slideHeight)) {
                if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
                    if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1)
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }
        }

        function C() {
            const e = t.zoom;
            m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0)
        }

        function T(e) {
            const s = t.zoom, a = t.params.zoom;
            if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
            let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }

        function $() {
            const e = t.zoom, s = t.params.zoom;
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass(`${s.zoomedSlideClass}`), m.$slideEl = void 0)
        }

        function S(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? $() : T(e)
        }

        function M() {
            const e = t.support;
            return {
                passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, activeListenerWithCapture: !e.passiveListener || {passive: !1, capture: !0}
            }
        }

        function P() {
            return `.${t.params.slideClass}`
        }

        function k(e) {
            const {passiveListener: s} = M(), a = P();
            t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s)
        }

        function z() {
            l || (l = !0, k("on"))
        }

        function L() {
            l && (l = !1, k("off"))
        }

        function O() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const s = t.support, {passiveListener: a, activeListenerWithCapture: i} = M(), r = P();
            s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }

        function I() {
            const e = t.zoom;
            if (!e.enabled) return;
            const s = t.support;
            e.enabled = !1;
            const {passiveListener: a, activeListenerWithCapture: i} = M(), r = P();
            s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }

        Object.defineProperty(t.zoom, "scale", {
            get: () => v, set(e) {
                if (v !== e) {
                    const t = m.$imageEl ? m.$imageEl[0] : void 0, s = m.$slideEl ? m.$slideEl[0] : void 0;
                    i("zoomChange", e, t, s)
                }
                v = e
            }
        }), a("init", (() => {
            t.params.zoom.enabled && O()
        })), a("destroy", (() => {
            I()
        })), a("touchStart", ((e, s) => {
            t.zoom.enabled && function (e) {
                const s = t.device;
                m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }(s)
        })), a("touchEnd", ((e, s) => {
            t.zoom.enabled && function () {
                const e = t.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length) return;
                if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
                f.isTouched = !1, f.isMoved = !1;
                let s = 300, a = 300;
                const i = g.x * s, r = f.currentX + i, n = g.y * a, l = f.currentY + n;
                0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                const o = Math.max(s, a);
                f.currentX = r, f.currentY = l;
                const d = f.width * e.scale, c = f.height * e.scale;
                f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }()
        })), a("doubleTap", ((e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s)
        })), a("transitionEnd", (() => {
            t.zoom.enabled && t.params.zoom.enabled && C()
        })), a("slideChange", (() => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
        })), Object.assign(t.zoom, {enable: O, disable: I, in: T, out: $, toggle: S})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        s({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), t.lazy = {};
        let n = !1, l = !1;

        function o(e, s) {
            void 0 === s && (s = !0);
            const a = t.params.lazy;
            if (void 0 === e) return;
            if (0 === t.slides.length) return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each((e => {
                const n = d(e);
                n.addClass(a.loadingClass);
                const l = n.attr("data-background"), c = n.attr("data-src"), p = n.attr("data-srcset"),
                    u = n.attr("data-sizes"), h = n.parent("picture");
                t.loadImage(n[0], c || l, p, u, !1, (() => {
                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (l ? (n.css("background-image", `url("${l}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
                            const t = d(e);
                            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                        })), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
                            const e = r.attr("data-swiper-slide-index");
                            if (r.hasClass(t.params.slideDuplicateClass)) {
                                o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                        }
                        i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight()
                    }
                })), i("lazyImageLoad", r[0], n[0])
            }))
        }

        function c() {
            const {$wrapperEl: e, params: s, slides: a, activeIndex: i} = t, r = t.virtual && s.virtual.enabled,
                n = s.lazy;
            let c = s.slidesPerView;

            function p(t) {
                if (r) {
                    if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                } else if (a[t]) return !0;
                return !1
            }

            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }

            if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each((e => {
                o(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
            })); else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e); else o(i);
            if (n.loadPrevNext) if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                const e = n.loadPrevNextAmount, t = Math.ceil(c), s = Math.min(i + t + Math.max(e, t), a.length),
                    r = Math.max(i - Math.max(t, e), 0);
                for (let e = i + t; e < s; e += 1) p(e) && o(e);
                for (let e = r; e < i; e += 1) p(e) && o(e)
            } else {
                const t = e.children(`.${s.slideNextClass}`);
                t.length > 0 && o(u(t));
                const a = e.children(`.${s.slidePrevClass}`);
                a.length > 0 && o(u(a))
            }
        }

        function p() {
            const e = r();
            if (!t || t.destroyed) return;
            const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e), a = s[0] === e,
                i = a ? e.innerWidth : s[0].offsetWidth, l = a ? e.innerHeight : s[0].offsetHeight,
                o = t.$el.offset(), {rtlTranslate: u} = t;
            let h = !1;
            u && (o.left -= t.$el[0].scrollLeft);
            const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f))
        }

        a("beforeInit", (() => {
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        })), a("init", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("scroll", (() => {
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
        })), a("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionStart", (() => {
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionEnd", (() => {
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c())
        })), a("slideChange", (() => {
            const {lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r} = t.params;
            e.enabled && (s || a && (i || 0 === r)) && c()
        })), a("destroy", (() => {
            t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
        })), Object.assign(t.lazy, {load: c, loadInSlide: o})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;

        function i(e, t) {
            const s = function () {
                let e, t, s;
                return (a, i) => {
                    for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }, this
        }

        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }

        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), t.controller = {control: void 0}, a("beforeInit", (() => {
            t.controller.control = t.params.controller.control
        })), a("update", (() => {
            r()
        })), a("resize", (() => {
            r()
        })), a("observerUpdate", (() => {
            r()
        })), a("setTranslate", ((e, s, a) => {
            t.controller.control && t.controller.setTranslate(s, a)
        })), a("setTransition", ((e, s, a) => {
            t.controller.control && t.controller.setTransition(s, a)
        })), Object.assign(t.controller, {
            setTranslate: function (e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;

                function o(e) {
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (!function (e) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid))
                    }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]); else a instanceof l && s !== a && o(a)
            }, setTransition: function (e, s) {
                const a = t.constructor, i = t.controller.control;
                let r;

                function n(s) {
                    s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p((() => {
                        s.updateAutoHeight()
                    })), s.$wrapperEl.transitionEnd((() => {
                        i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd())
                    })))
                }

                if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]); else i instanceof a && s !== i && n(i)
            }
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }), t.a11y = {clicked: !1};
        let i = null;

        function r(e) {
            const t = i;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function n(e) {
            e.attr("tabIndex", "0")
        }

        function l(e) {
            e.attr("tabIndex", "-1")
        }

        function o(e, t) {
            e.attr("role", t)
        }

        function c(e, t) {
            e.attr("aria-roledescription", t)
        }

        function p(e, t) {
            e.attr("aria-label", t)
        }

        function u(e) {
            e.attr("aria-disabled", !0)
        }

        function h(e) {
            e.attr("aria-disabled", !1)
        }

        function m(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const s = t.params.a11y, a = d(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click()
        }

        function f() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function g() {
            return f() && t.params.pagination.clickable
        }

        const v = (e, t, s) => {
            n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s), function (e, t) {
                e.attr("aria-controls", t)
            }(e, t)
        }, w = () => {
            t.a11y.clicked = !0
        }, b = () => {
            requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                    t.destroyed || (t.a11y.clicked = !1)
                }))
            }))
        }, x = e => {
            if (t.a11y.clicked) return;
            const s = e.target.closest(`.${t.params.slideClass}`);
            if (!s || !t.slides.includes(s)) return;
            const a = t.slides.indexOf(s) === t.activeIndex,
                i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
            a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
        }, y = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(d(t.slides), e.slideRole);
            const s = t.params.loop ? t.slides.filter((e => !e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
            e.slideLabelMessage && t.slides.each(((a, i) => {
                const r = d(a), n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s))
            }))
        }, E = () => {
            const e = t.params.a11y;
            t.$el.append(i);
            const s = t.$el;
            e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
            const a = t.$wrapperEl,
                r = e.id || a.attr("id") || `swiper-wrapper-${n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`;
            var n;
            const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var o;
            let d, u;
            o = r, a.attr("id", o), function (e, t) {
                e.attr("aria-live", t)
            }(a, l), y(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", x, !0), t.$el.on("pointerdown", w, !0), t.$el.on("pointerup", b, !0)
        };
        a("beforeInit", (() => {
            i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), a("afterInit", (() => {
            t.params.a11y.enabled && E()
        })), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            t.params.a11y.enabled && y()
        })), a("fromEdge toEdge afterInit lock unlock", (() => {
            t.params.a11y.enabled && function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {$nextEl: e, $prevEl: s} = t.navigation;
                s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)))
            }()
        })), a("paginationUpdate", (() => {
            t.params.a11y.enabled && function () {
                const e = t.params.a11y;
                f() && t.pagination.bullets.each((s => {
                    const a = d(s);
                    t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                }))
            }()
        })), a("destroy", (() => {
            t.params.a11y.enabled && function () {
                let e, s;
                i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", x, !0), t.$el.off("pointerdown", w, !0), t.$el.off("pointerup", b, !0)
            }()
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({history: {enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1}});
        let i = !1, n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)), i = a.length;
                return {key: a[i - 2], value: a[i - 1]}
            }, d = (e, s) => {
                const a = r();
                if (!i || !t.params.history.enabled) return;
                let n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                const o = t.slides.eq(s);
                let d = l(o.attr("data-history"));
                if (t.params.history.root.length > 0) {
                    let s = t.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e}/${d}`
                } else n.pathname.includes(e) || (d = `${e}/${d}`);
                t.params.history.keepQuery && (d += n.search);
                const c = a.history.state;
                c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({value: d}, null, d) : a.history.pushState({value: d}, null, d))
            }, c = (e, s, a) => {
                if (s) for (let i = 0, r = t.slides.length; i < r; i += 1) {
                    const r = t.slides.eq(i);
                    if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                        const s = r.index();
                        t.slideTo(s, e, a)
                    }
                } else t.slideTo(0, e, a)
            }, p = () => {
                n = o(t.params.url), c(t.params.speed, n.value, !1)
            };
        a("init", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                    i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p))
                }
            })()
        })), a("destroy", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            })()
        })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && d(t.params.history.key, t.activeIndex)
        })), a("slideChange", (() => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, emit: i, on: n} = e, l = !1;
        const o = a(), c = r();
        s({hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}});
        const p = () => {
            i("hashChange");
            const e = o.location.hash.replace("#", "");
            if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                if (void 0 === s) return;
                t.slideTo(s)
            }
        }, u = () => {
            if (l && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet"); else {
                const e = t.slides.eq(t.activeIndex), s = e.attr("data-hash") || e.attr("data-history");
                o.location.hash = s || "", i("hashSet")
            }
        };
        n("init", (() => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0;
                    for (let a = 0, i = t.slides.length; a < i; a += 1) {
                        const i = t.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                            const e = i.index();
                            t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                t.params.hashNavigation.watchState && d(c).on("hashchange", p)
            })()
        })), n("destroy", (() => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p)
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            l && u()
        })), n("slideChange", (() => {
            l && t.params.cssMode && u()
        }))
    }, function (e) {
        let t, {swiper: s, extendParams: i, on: r, emit: n} = e;

        function l() {
            if (!s.size) return s.autoplay.running = !1, void (s.autoplay.paused = !1);
            const e = s.slides.eq(s.activeIndex);
            let a = s.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p((() => {
                let e;
                s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l()
            }), a)
        }

        function o() {
            return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0))
        }

        function d() {
            return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0))
        }

        function c(e) {
            s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].addEventListener(e, h)
            })) : (s.autoplay.paused = !1, l())))
        }

        function u() {
            const e = a();
            "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1)
        }

        function h(e) {
            s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            })), s.autoplay.paused = !1, s.autoplay.running ? l() : d())
        }

        function m() {
            s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            }))
        }

        function f() {
            s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l())
        }

        s.autoplay = {running: !1, paused: !1}, i({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), r("init", (() => {
            if (s.params.autoplay.enabled) {
                o();
                a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f))
            }
        })), r("beforeTransitionStart", ((e, t, a) => {
            s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
        })), r("sliderFirstMove", (() => {
            s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
        })), r("touchEnd", (() => {
            s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
        })), r("destroy", (() => {
            s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
            a().removeEventListener("visibilitychange", u)
        })), Object.assign(s.autoplay, {pause: c, run: l, start: o, stop: d})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let i = !1, r = !1;

        function n() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const s = e.clickedIndex, a = e.clickedSlide;
            if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let i;
            if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                    a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
            }
            t.slideTo(i)
        }

        function l() {
            const {thumbs: e} = t.params;
            if (i) return !1;
            i = !0;
            const s = t.constructor;
            if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }); else if (m(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {watchSlidesProgress: !0, slideToClickedSlide: !1}), t.thumbs.swiper = new s(a), r = !0
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0
        }

        function o(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < i; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r); else for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
            const n = t.params.thumbs.autoScrollOffset, l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                let i, r, o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                    const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                        a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, r = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else i = t.realIndex, r = i > t.previousIndex ? "next" : "prev";
                l && (i += "next" === r ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0))
            }
        }

        t.thumbs = {swiper: null}, a("beforeInit", (() => {
            const {thumbs: e} = t.params;
            e && e.swiper && (l(), o(!0))
        })), a("slideChange update resize observerUpdate", (() => {
            o()
        })), a("setTransition", ((e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        })), a("beforeDestroy", (() => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy()
        })), Object.assign(t.thumbs, {init: l, update: o})
    }, function (e) {
        let {swiper: t, extendParams: s, emit: a, once: i} = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function () {
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({currentPos: t.rtl ? t.translate : -t.translate})
                }, onTouchMove: function () {
                    const {touchEventsData: e, touches: s} = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({position: s[t.isHorizontal() ? "currentX" : "currentY"], time: u()})
                }, onTouchEnd: function (e) {
                    let {currentPos: s} = e;
                    const {params: r, $wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d} = t,
                        c = u() - d.touchStartTime;
                    if (s < -t.minTranslate()) t.slideTo(t.activeIndex); else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1); else {
                        if (r.freeMode.momentum) {
                            if (d.velocities.length > 1) {
                                const e = d.velocities.pop(), s = d.velocities.pop(), a = e.position - s.position,
                                    i = e.time - s.time;
                                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let c = t.translate + s;
                            l && (c = -c);
                            let p, h = !1;
                            const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (c < t.maxTranslate()) r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0); else if (c > t.minTranslate()) r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), r.loop && r.centeredSlides && (f = !0); else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < o.length; t += 1) if (o[t] > -c) {
                                    e = t;
                                    break
                                }
                                c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c
                            }
                            if (f && i("transitionEnd", (() => {
                                t.loopFix()
                            })), 0 !== t.velocity) {
                                if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const s = Math.abs((l ? -c : c) - t.translate),
                                        a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(p), n.transitionEnd((() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }
                        (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function (e) {
        let t, s, a, {swiper: i, extendParams: r} = e;
        r({grid: {rows: 1, fill: "column"}}), i.grid = {
            initSlides: e => {
                const {slidesPerView: r} = i.params, {rows: n, fill: l} = i.params.grid;
                s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n))
            }, updateSlide: (e, r, n, l) => {
                const {slidesPerGroup: o, spaceBetween: d} = i.params, {rows: c, fill: p} = i.params.grid;
                let u, h, m;
                if ("row" === p && o > 1) {
                    const s = Math.floor(e / (o * c)), a = e - c * o * s,
                        i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                    m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, r.css({
                        "-webkit-order": u,
                        order: u
                    })
                } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
            }, updateWrapperSize: (e, s, a) => {
                const {spaceBetween: r, centeredSlides: n, roundLengths: l} = i.params, {rows: o} = i.params.grid;
                if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css({[a("width")]: `${i.virtualSize + r}px`}), n) {
                    s.splice(0, s.length);
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a)
                    }
                    s.push(...e)
                }
            }
        }
    }, function (e) {
        let {swiper: t} = e;
        Object.assign(t, {
            appendSlide: K.bind(t),
            prependSlide: Z.bind(t),
            addSlide: Q.bind(t),
            removeSlide: J.bind(t),
            removeAllSlides: ee.bind(t)
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({fadeEffect: {crossFade: !1, transformEl: null}}), te({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e} = t, s = t.params.fadeEffect;
                for (let a = 0; a < e.length; a += 1) {
                    const e = t.slides.eq(a);
                    let i = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (i -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = i, i = 0);
                    const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    se(s, e).css({opacity: n}).transform(`translate3d(${i}px, ${r}px, 0px)`)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.fadeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}});
        const i = (e, t, s) => {
            let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`), e.append(a)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0))
        };
        te({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {$el: e, $wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: c} = t,
                    p = t.params.cubeEffect, u = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled;
                let m, f = 0;
                p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({height: `${r}px`})) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let r = 90 * s, n = Math.floor(r / 360);
                    l && (r = -r, n = Math.floor(-r / 360));
                    const d = Math.max(Math.min(t[0].progress, 1), -1);
                    let c = 0, m = 0, g = 0;
                    s % 4 == 0 ? (c = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (c = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (c = -o, g = 3 * o + 4 * o * n), l && (c = -c), u || (m = c, c = 0);
                    const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
                    d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i(t, d, u)
                }
                if (s.css({
                    "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                    "transform-origin": `50% 50% -${o / 2}px`
                }), p.shadow) if (u) m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`); else {
                    const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                        t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                        s = p.shadowScale, a = p.shadowScale / t, i = p.shadowOffset;
                    m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`)
                }
                const g = c.isSafari || c.isWebView ? -o / 2 : 0;
                s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: e => {
                const {$el: s, slides: a} = t;
                a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.each((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(d(t), s, e)
                }))
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({flipEffect: {slideShadows: !0, limitRotation: !0, transformEl: null}});
        const i = (e, s, a) => {
            let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0))
        };
        te({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, rtlTranslate: s} = t, a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const n = e.eq(r);
                    let l = n[0].progress;
                    t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                    const o = n[0].swiperSlideOffset;
                    let d = -180 * l, c = 0, p = t.params.cssMode ? -o - t.translate : -o, u = 0;
                    t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l, a);
                    const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                    se(a, n).transform(h)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.flipEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            recreateShadows: () => {
                const e = t.params.flipEffect;
                t.slides.each((s => {
                    const a = d(s);
                    let r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e)
                }))
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), te({
            effect: "coverflow", swiper: t, on: a, setTranslate: () => {
                const {width: e, height: s, slides: a, slidesSizesGrid: i} = t, r = t.params.coverflowEffect,
                    n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate,
                    c = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e), s = i[e], l = (o - t[0].swiperSlideOffset - s / 2) / s,
                        p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                    let u = n ? d * p : 0, h = n ? 0 : d * p, m = -c * Math.abs(p), f = r.stretch;
                    "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                    let g = n ? 0 : f * p, v = n ? f * p : 0, w = 1 - (1 - r.scale) * Math.abs(p);
                    Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(w) < .001 && (w = 0);
                    const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                    if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
                    }
                }
            }, setTransition: e => {
                const {transformEl: s} = t.params.coverflowEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1},
                next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        te({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, $wrapperEl: s, slidesSizesGrid: a} = t,
                    r = t.params.creativeEffect, {progressMultiplier: n} = r, l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${e}px))`)
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e.eq(s), o = a[0].progress,
                        d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a[0].swiperSlideOffset, u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                        h = [0, 0, 0];
                    let m = !1;
                    t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                    let f = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
                    d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(((e, t) => {
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
                    })), h.forEach(((e, t) => {
                        h[t] = f.rotate[t] * Math.abs(d * n)
                    })), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", "), v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                        w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`,
                        b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
                        x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = a.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = se(r, a);
                    y.transform(x).css({opacity: b}), f.origin && y.css("transform-origin", f.origin)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.creativeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({cardsEffect: {slideShadows: !0, transformEl: null, rotate: !0, perSlideRotate: 2, perSlideOffset: 8}}), te({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, activeIndex: s} = t, a = t.params.cardsEffect, {
                    startTranslate: i,
                    isTouched: r
                } = t.touchEventsData, n = t.translate;
                for (let l = 0; l < e.length; l += 1) {
                    const o = e.eq(l), d = o[0].progress, c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                    let u = t.params.cssMode ? -p - t.translate : -p, h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1, g = -a.perSlideRotate * c, v = a.perSlideOffset - .75 * Math.abs(c);
                    const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                        b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i,
                        x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                    if (b || x) {
                        const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                        g += -28 * c * e, f += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%"
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
                        const e = h;
                        h = u, u = e
                    }
                    const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c),
                        E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                    se(a, o).transform(E)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.cardsEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
        })
    }];
    return V.use(re), V
}));
//# sourceMappingURL=swiper-bundle.min.js.map/*! * include swiper ( for sliders )  */
/**
 * Swiper 8.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 21, 2022
 */

!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function () {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }

    const s = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: {
            blur() {
            }, nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {
            }
        }),
        createElement: () => ({
            children: [], childNodes: [], style: {}, setAttribute() {
            }, getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }

    const i = {
        document: s,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState() {
            }, pushState() {
            }, go() {
            }, back() {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({getPropertyValue: () => ""}),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }

    class n extends Array {
        constructor(e) {
            "number" == typeof e ? super(e) : (super(...e || []), function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t, set(e) {
                        t.__proto__ = e
                    }
                })
            }(this))
        }
    }

    function l(e) {
        void 0 === e && (e = []);
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        })), t
    }

    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function d(e, t) {
        const s = r(), i = a();
        let l = [];
        if (!t && e instanceof n) return e;
        if (!e) return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e])
            } else l = function (e, t) {
                if ("string" != typeof e) return [e];
                const s = [], a = t.querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                return s
            }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i) l.push(e); else if (Array.isArray(e)) {
            if (e instanceof n) return e;
            l = e
        }
        return new n(function (e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }

    d.fn = n.prototype;
    const c = {
        addClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...a)
            })), this
        }, removeClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...a)
            })), this
        }, hasClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            return o(this, (e => a.filter((t => e.classList.contains(t))).length > 0)).length > 0
        }, toggleClass: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            const a = l(t.map((e => e.split(" "))));
            this.forEach((e => {
                a.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        }, attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1) if (2 === arguments.length) this[s].setAttribute(e, t); else for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
            return this
        }, removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, transform: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        }, transition: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        }, on: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;

            function l(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)) r.apply(t, s); else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s)
                }
            }

            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t)
            }

            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const c = a.split(" ");
            let p;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i) for (p = 0; p < c.length; p += 1) {
                    const e = c[p];
                    t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                        listener: r,
                        proxyListener: l
                    }), t.addEventListener(e, l, n)
                } else for (p = 0; p < c.length; p += 1) {
                    const e = c[p];
                    t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                        listener: r,
                        proxyListener: o
                    }), t.addEventListener(e, o, n)
                }
            }
            return this
        }, off: function () {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
            let [a, i, r, n] = t;
            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const l = a.split(" ");
            for (let e = 0; e < l.length; e += 1) {
                const t = l[e];
                for (let e = 0; e < this.length; e += 1) {
                    const s = this[e];
                    let a;
                    if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length) for (let e = a.length - 1; e >= 0; e -= 1) {
                        const i = a[e];
                        r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                    }
                }
            }
            return this
        }, trigger: function () {
            const e = r();
            for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
            const i = s[0].split(" "), n = s[1];
            for (let t = 0; t < i.length; t += 1) {
                const a = i[t];
                for (let t = 0; t < this.length; t += 1) {
                    const i = this[t];
                    if (e.CustomEvent) {
                        const t = new e.CustomEvent(a, {detail: n, bubbles: !0, cancelable: !0});
                        i.dom7EventData = s.filter(((e, t) => t > 0)), i.dispatchEvent(t), i.dom7EventData = [], delete i.dom7EventData
                    }
                }
            }
            return this
        }, transitionEnd: function (e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s))
            })), this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, styles: function () {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        }, offset: function () {
            if (this.length > 0) {
                const e = r(), t = a(), s = this[0], i = s.getBoundingClientRect(), n = t.body,
                    l = s.clientTop || n.clientTop || 0, o = s.clientLeft || n.clientLeft || 0,
                    d = s === e ? e.scrollY : s.scrollTop, c = s === e ? e.scrollX : s.scrollLeft;
                return {top: i.top + d - l, left: i.left + c - o}
            }
            return null
        }, css: function (e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (const t in e) this[a].style[t] = e[t];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            return e ? (this.forEach(((t, s) => {
                e.apply(t, [t, s])
            })), this) : this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            const t = r(), s = a(), i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
                return !1
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
                return !1
            }
            return !1
        }, index: function () {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        }, append: function () {
            let e;
            const t = a();
            for (let s = 0; s < arguments.length; s += 1) {
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for (let s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                } else if (e instanceof n) for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]); else this[s].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                const a = t.createElement("div");
                for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
            } else if (e instanceof n) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]); else this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        }, nextAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        }, prev: function (e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
            }
            return d([])
        }, prevAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        }, parent: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        }, parents: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode
            }
            return d(t)
        }, closest: function (e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) t.push(a[e])
            }
            return d(t)
        }, children: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        }, filter: function (e) {
            return d(o(this, e))
        }, remove: function () {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function p(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function u() {
        return Date.now()
    }

    function h(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function (e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function f(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
    }

    function g() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < arguments.length; s += 1) {
            const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !f(a)) {
                const s = Object.keys(Object(a)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, i = s.length; t < i; t += 1) {
                    const i = s[t], r = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== r && r.enumerable && (m(e[i]) && m(a[i]) ? a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i]) : !m(e[i]) && m(a[i]) ? (e[i] = {}, a[i].__swiper__ ? e[i] = a[i] : g(e[i], a[i])) : e[i] = a[i])
                }
            }
        }
        return e
    }

    function v(e, t, s) {
        e.style.setProperty(t, s)
    }

    function w(e) {
        let {swiper: t, targetPosition: s, side: a} = e;
        const i = r(), n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev", p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t, u = () => {
            l = (new Date).getTime(), null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0), r = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + r * (s - n);
            if (p(c, s) && (c = s), t.wrapperEl.scrollTo({[a]: c}), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[a]: c})
            })), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u)
        };
        u()
    }

    let b, x, y;

    function E() {
        return b || (b = function () {
            const e = r(), t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function () {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {
                    }
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), b
    }

    function C(e) {
        return void 0 === e && (e = {}), x || (x = function (e) {
            let {userAgent: t} = void 0 === e ? {} : e;
            const s = E(), a = r(), i = a.navigator.platform, n = t || a.navigator.userAgent,
                l = {ios: !1, android: !1}, o = a.screen.width, d = a.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/), h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l
        }(e)), x
    }

    function T() {
        return y || (y = function () {
            const e = r();
            return {
                isSafari: function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), y
    }

    Object.keys(c).forEach((e => {
        Object.defineProperty(d.fn, e, {value: c[e], writable: !0})
    }));
    var $ = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
            })), a
        }, once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;

            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
                t.apply(a, r)
            }

            return i.__emitterProxy = t, a.on(e, i, s)
        }, onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        }, offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        }, off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }))
            })), s) : s
        }, emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(a, [t, ...s])
                })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(a, s)
                }))
            })), e
        }
    };
    var S = {
        updateSize: function () {
            const e = this;
            let t, s;
            const a = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        }, updateSlides: function () {
            const e = this;

            function t(t) {
                return e.isHorizontal() ? t : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[t]
            }

            function s(e, s) {
                return parseFloat(e.getPropertyValue(t(s)) || 0)
            }

            const a = e.params, {$wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e,
                o = e.virtual && a.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length,
                c = i.children(`.${e.params.slideClass}`), p = o ? e.virtual.slides.length : c.length;
            let u = [];
            const h = [], m = [];
            let f = a.slidesOffsetBefore;
            "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
            let g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length, b = e.slidesGrid.length;
            let x = a.spaceBetween, y = -f, E = 0, C = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }) : c.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            }), a.centeredSlides && a.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = a.grid && a.grid.rows > 1 && e.grid;
            let $;
            T && e.grid.initSlides(p);
            const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
            for (let i = 0; i < p; i += 1) {
                $ = 0;
                const n = c.eq(i);
                if (T && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
                    if ("auto" === a.slidesPerView) {
                        S && (c[i].style[t("width")] = "");
                        const r = getComputedStyle(n[0]), l = n[0].style.transform, o = n[0].style.webkitTransform;
                        if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0); else {
                            const e = s(r, "width"), t = s(r, "padding-left"), a = s(r, "padding-right"),
                                i = s(r, "margin-left"), l = s(r, "margin-right"), o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) $ = e + i + l; else {
                                const {clientWidth: s, offsetWidth: r} = n[0];
                                $ = e + t + a + i + l + (r - s)
                            }
                        }
                        l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($))
                    } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`);
                    c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), C % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({width: `${e.virtualSize + a.spaceBetween}px`}), a.setWrapperSize && i.css({[t("width")]: `${e.virtualSize + a.spaceBetween}px`}), T && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
                const t = [];
                for (let s = 0; s < u.length; s += 1) {
                    let i = u[s];
                    a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
                }
                u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
            }
            if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                c.filter(((e, t) => !a.cssMode || t !== c.length - 1)).css({[s]: `${x}px`})
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e = 0;
                m.forEach((t => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                })), e -= a.spaceBetween;
                const t = e - r;
                u = u.map((e => e < 0 ? -f : e > t ? t + g : e))
            }
            if (a.centerInsufficientSlides) {
                let e = 0;
                if (m.forEach((t => {
                    e += t + (a.spaceBetween ? a.spaceBetween : 0)
                })), e -= a.spaceBetween, e < r) {
                    const t = (r - e) / 2;
                    u.forEach(((e, s) => {
                        u[s] = e - t
                    })), h.forEach(((e, s) => {
                        h[s] = e + t
                    }))
                }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: u,
                slidesGrid: h,
                slidesSizesGrid: m
            }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e.snapGrid[0], s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                const t = `${a.containerModifierClass}backface-hidden`, s = e.$el.hasClass(t);
                p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
            }
        }, updateAutoHeight: function (e) {
            const t = this, s = [], a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) if (t.params.centeredSlides) (t.visibleSlides || d([])).each((e => {
                s.push(e)
            })); else for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !a) break;
                s.push(n(e))
            } else s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1) if (void 0 !== s[i]) {
                const e = s[i].offsetHeight;
                r = e > r ? e : r
            }
            (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
        }, updateSlidesOffset: function () {
            const e = this, t = e.slides;
            for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this, s = t.params, {slides: a, rtlTranslate: i, snapGrid: r} = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < a.length; e += 1) {
                const l = a[e];
                let o = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                    p = -(n - o), u = p + t.slidesSizesGrid[e];
                (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c
            }
            t.visibleSlides = d(t.visibleSlides)
        }, updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params, a = t.maxTranslate() - t.minTranslate();
            let {progress: i, isBeginning: r, isEnd: n} = t;
            const l = r, o = n;
            0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
                progress: i,
                isBeginning: r,
                isEnd: n
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i)
        }, updateSlidesClasses: function () {
            const e = this, {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r} = e,
                n = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
        }, updateActiveIndex: function (e) {
            const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {
                slidesGrid: a,
                snapGrid: i,
                params: r,
                activeIndex: n,
                realIndex: l,
                snapIndex: o
            } = t;
            let d, c = e;
            if (void 0 === c) {
                for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (i.indexOf(s) >= 0) d = i.indexOf(s); else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup)
            }
            if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: n,
                activeIndex: c
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
        }, updateClickedSlide: function (e) {
            const t = this, s = t.params, a = d(e).closest(`.${s.slideClass}`)[0];
            let i, r = !1;
            if (a) for (let e = 0; e < t.slides.length; e += 1) if (t.slides[e] === a) {
                r = !0, i = e;
                break
            }
            if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
            t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var M = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = h(i[0], e);
            return s && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            const s = this, {rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l} = s;
            let o, d = 0, c = 0;
            s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
            const p = s.maxTranslate() - s.minTranslate();
            o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }, translateTo: function (e, t, s, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
            const r = this, {params: n, wrapperEl: l} = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(), d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c; else {
                    if (!r.support.smoothScroll) return w({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({[e ? "left" : "top"]: -c, behavior: "smooth"})
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
        }
    };

    function P(e) {
        let {swiper: t, runCallbacks: s, direction: a, step: i} = e;
        const {activeIndex: r, previousIndex: n} = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }

    var k = {
        slideTo: function (e, t, s, a, i) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
            if ("string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {
                params: l,
                snapGrid: o,
                slidesGrid: d,
                previousIndex: c,
                activeIndex: p,
                rtlTranslate: u,
                wrapperEl: h,
                enabled: m
            } = r;
            if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1);
            const v = -o[g];
            if (l.normalizeSlideIndex) for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * v), s = Math.floor(100 * d[e]), a = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
            }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1
            }
            let b;
            if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(v), b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(), s = u ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                    }))
                } else {
                    if (!r.support.smoothScroll) return w({swiper: r, targetPosition: s, side: e ? "left" : "top"}), !0;
                    h.scrollTo({[e ? "left" : "top"]: s, behavior: "smooth"})
                }
                return !0
            }
            return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
        }, slideToLoop: function (e, t, s, a) {
            if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
                const t = parseInt(e, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                e = t
            }
            const i = this;
            let r = e;
            return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
        }, slideNext: function (e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this, {animating: i, enabled: r, params: n} = a;
            if (!r) return a;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
            if (n.loop) {
                if (i && n.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }
            return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        }, slidePrev: function (e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this, {params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d} = a;
            if (!d) return a;
            if (i.loop) {
                if (r && i.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
            }

            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            const p = c(o ? a.translate : -a.translate), u = n.map((e => c(e)));
            let h = n[u.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                n.forEach(((t, s) => {
                    p >= t && (e = s)
                })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return a.slideTo(m, e, t, s)
        }, slideReset: function (e, t, s) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
        }, slideToClosest: function (e, t, s, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
        }, slideToClickedSlide: function () {
            const e = this, {params: t, $wrapperEl: s} = e,
                a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                    e.slideTo(r)
                }))) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };
    var z = {
        loopCreate: function () {
            const e = this, t = a(), {params: s, $wrapperEl: i} = e,
                r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
            r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
            let n = r.children(`.${s.slideClass}`);
            if (s.loopFillGroupWithBlank) {
                const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                if (e !== s.slidesPerGroup) {
                    for (let a = 0; a < e; a += 1) {
                        const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                        r.append(e)
                    }
                    n = r.children(`.${s.slideClass}`)
                }
            }
            "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
            const l = [], o = [];
            n.each(((e, t) => {
                d(e).attr("data-swiper-slide-index", t)
            }));
            for (let t = 0; t < e.loopedSlides; t += 1) {
                const e = t - Math.floor(t / n.length) * n.length;
                o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0])
            }
            for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
            for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
        }, loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const {
                activeIndex: t,
                slides: s,
                loopedSlides: a,
                allowSlidePrev: i,
                allowSlideNext: r,
                snapGrid: n,
                rtlTranslate: l
            } = e;
            let o;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            const d = -n[t] - e.getTranslate();
            if (t < a) {
                o = s.length - 3 * a + t, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            } else if (t >= s.length - a) {
                o = -s.length + t + a, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
            }
            e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
        }, loopDestroy: function () {
            const {$wrapperEl: e, params: t, slides: s} = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
        }
    };

    function L(e) {
        const t = this, s = a(), i = r(), n = t.touchEventsData, {params: l, touches: o, enabled: c} = t;
        if (!c) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const m = !!l.noSwipingClass && "" !== l.noSwipingClass, f = e.composedPath ? e.composedPath() : e.path;
        m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
        const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            v = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (v ? function (e, t) {
            return void 0 === t && (t = this), function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
            }(t)
        }(g, h[0]) : h.closest(g)[0])) return void (t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const w = o.currentX, b = o.currentY, x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (x && (w <= y || w >= i.innerWidth - y)) {
            if ("prevent" !== x) return;
            e.preventDefault()
        }
        if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), o.startX = w, o.startY = b, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
        }
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", p)
    }

    function O(e) {
        const t = a(), s = this, i = s.touchEventsData, {params: r, touches: n, rtlTranslate: l, enabled: o} = s;
        if (!o) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
            h = "touchmove" === c.type ? p.pageX : c.pageX, m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
        if (!s.allowTouchMove) return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) if (s.isVertical()) {
            if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
        } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX, g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = !0, b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }

    function I(e) {
        const t = this, s = t.touchEventsData, {params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l} = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u(), c = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)
        }
        if (s.lastClickTime = u(), p((() => {
            t.destroyed || (t.allowClick = !0)
        })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({currentPos: h});
        let m = 0, f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2])
        }
        let g = null, v = null;
        a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const w = (h - n[m]) / f, b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m))
        }
    }

    function A() {
        const e = this, {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function G() {
        const e = this, {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }

    let N = !1;

    function B() {
    }

    const H = (e, t) => {
        const s = a(), {params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d} = e, c = !!i.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener", u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t)
        } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0)
    };
    var X = {
        attachEvents: function () {
            const e = this, t = a(), {params: s, support: i} = e;
            e.onTouchStart = L.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = I.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !N && (t.addEventListener("touchstart", B), N = !0), H(e, "on")
        }, detachEvents: function () {
            H(this, "off")
        }
    };
    const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var R = {
        addClasses: function () {
            const e = this, {classNames: t, params: s, rtl: a, $el: i, device: r, support: n} = e, l = function (e, t) {
                const s = [];
                return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((a => {
                        e[a] && s.push(t + a)
                    })) : "string" == typeof e && s.push(t + e)
                })), s
            }(["initialized", s.direction, {"pointer-events": !n.touch}, {"free-mode": e.params.freeMode && s.freeMode.enabled}, {autoheight: s.autoHeight}, {rtl: a}, {grid: s.grid && s.grid.rows > 1}, {"grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill}, {android: r.android}, {ios: r.ios}, {"css-mode": s.cssMode}, {centered: s.cssMode && s.centeredSlides}, {"watch-progress": s.watchSlidesProgress}], s.containerModifierClass);
            t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
        }, removeClasses: function () {
            const {$el: e, classNames: t} = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses()
        }
    };
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function q(e, t) {
        return function (s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0], i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {auto: !0}), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {enabled: !0}), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {enabled: !1}), g(t, s)) : g(t, s)) : g(t, s)
        }
    }

    const j = {
        eventsEmitter: $, update: S, translate: M, transition: {
            setTransition: function (e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
            }, transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                const s = this, {params: a} = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            }, transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                const s = this, {params: a} = s;
                s.animating = !1, a.cssMode || (s.setTransition(0), P({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        }, slide: k, loop: z, grabCursor: {
            setGrabCursor: function (e) {
                const t = this;
                if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
            }, unsetGrabCursor: function () {
                const e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        }, events: X, breakpoints: {
            setBreakpoint: function () {
                const e = this, {activeIndex: t, initialized: s, loopedSlides: a = 0, params: i, $el: r} = e,
                    n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length) return;
                const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l) return;
                const o = (l in n ? n[l] : void 0) || e.originalParams, d = Y(e, i), c = Y(e, o), p = i.enabled;
                d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                    const s = i[t] && i[t].enabled, a = o[t] && o[t].enabled;
                    s && !a && e[t].disable(), !s && a && e[t].enable()
                }));
                const u = o.direction && o.direction !== i.direction,
                    h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                u && s && e.changeDirection(), g(e.params, o);
                const m = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
            }, getBreakpoint: function (e, t, s) {
                if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                let a = !1;
                const i = r(), n = "window" === t ? i.innerHeight : s.clientHeight, l = Object.keys(e).map((e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {value: n * t, point: e}
                    }
                    return {value: e, point: e}
                }));
                l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < l.length; e += 1) {
                    const {point: r, value: n} = l[e];
                    "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                }
                return a || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const e = this, {isLocked: t, params: s} = e, {slidesOffsetBefore: a} = s;
                if (a) {
                    const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        }, classes: R, images: {
            loadImage: function (e, t, s, a, i, n) {
                const l = r();
                let o;

                function c() {
                    n && n()
                }

                d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c()
            }, preloadImages: function () {
                const e = this;

                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                }

                e.imagesToLoad = e.$el.find("img");
                for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                }
            }
        }
    }, _ = {};

    class V {
        constructor() {
            let e, t;
            for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
            if (1 === a.length && a[0].constructor && "Object" === Object.prototype.toString.call(a[0]).slice(8, -1) ? t = a[0] : [e, t] = a, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
                const e = [];
                return d(t.el).each((s => {
                    const a = g({}, t, {el: s});
                    e.push(new V(a))
                })), e
            }
            const r = this;
            r.__swiper__ = !0, r.support = E(), r.device = C({userAgent: t.userAgent}), r.browser = T(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
            const n = {};
            r.modules.forEach((e => {
                e({
                    swiper: r,
                    extendParams: q(t, n),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            }));
            const l = g({}, W, n);
            return r.params = g({}, l, _, t), r.originalParams = g({}, r.params), r.passedParams = g({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
                r.on(e, r.params.on[e])
            })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d, Object.assign(r, {
                enabled: r.params.enabled,
                el: e,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function () {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }

        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }

        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }

        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(), i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }

        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }

        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }

        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s => {
                const a = e.getSlideClasses(s);
                t.push({slideEl: s, classNames: a}), e.emit("_slideClass", s, a)
            })), e.emit("_slideClasses", t)
        }

        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
            } else if ("current" === e) for (let e = l + 1; e < a.length; e += 1) {
                (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
            } else for (let e = l - 1; e >= 0; e -= 1) {
                i[l] - i[e] < n && (o += 1)
            }
            return o
        }

        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {snapGrid: t, params: s} = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            let i;
            s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }

        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this, a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }

        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }

        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0])) return !1;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e => s.children(e), t
                }
                return s.children ? s.children(i()) : d(s).children(i())
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                    r.append(e)
                }))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0
        }

        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }

        destroy(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            const s = this, {params: a, $el: i, $wrapperEl: r, slides: n} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.$el[0].swiper = null, function (e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {
                    }
                    try {
                        delete t[e]
                    } catch (e) {
                    }
                }))
            }(s)), s.destroyed = !0), null
        }

        static extendDefaults(e) {
            g(_, e)
        }

        static get extendedDefaults() {
            return _
        }

        static get defaults() {
            return W
        }

        static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }

        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => V.installModule(e))), V) : (V.installModule(e), V)
        }
    }

    function F(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a => {
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n
            }
        })), s
    }

    function U(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }

    function K(e) {
        const t = this, {$wrapperEl: s, params: a} = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]); else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update()
    }

    function Z(e) {
        const t = this, {params: s, $wrapperEl: a, activeIndex: i} = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
            r = i + e.length
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1)
    }

    function Q(e, t) {
        const s = this, {$wrapperEl: a, params: i, activeIndex: r} = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(), d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n
        } else a.append(t);
        for (let e = 0; e < d.length; e += 1) a.append(d[e]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }

    function J(e) {
        const t = this, {params: s, $wrapperEl: a, activeIndex: i} = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0)
        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
    }

    function ee() {
        const e = this, t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
    }

    function te(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l,
            recreateShadows: o,
            getEffectParams: d
        } = e;
        let c;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate", (() => {
            s.params.effect === t && i()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        })), a("transitionEnd", (() => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.each((e => {
                    s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                })), o()
            }
        })), a("virtualUpdate", (() => {
            s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                c && s.slides && s.slides.length && (i(), c = !1)
            })))
        }))
    }

    function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function ae(e) {
        let {swiper: t, duration: s, transformEl: a, allSlides: i} = e;
        const {slides: r, activeIndex: n, $wrapperEl: l} = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e.transitionEnd((() => {
                if (s) return;
                if (!t || t.destroyed) return;
                s = !0, t.animating = !1;
                const e = ["webkitTransitionEnd", "transitionend"];
                for (let t = 0; t < e.length; t += 1) l.trigger(e[t])
            }))
        }
    }

    function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""), i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r
    }

    Object.keys(j).forEach((e => {
        Object.keys(j[e]).forEach((t => {
            V.prototype[t] = j[e][t]
        }))
    })), V.use([function (e) {
        let {swiper: t, on: s, emit: a} = e;
        const i = r();
        let n = null, l = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
        }, d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange")
        };
        s("init", (() => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                l = i.requestAnimationFrame((() => {
                    const {width: s, height: a} = t;
                    let i = s, r = a;
                    e.forEach((e => {
                        let {contentBoxSize: s, contentRect: a, target: n} = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
                    })), i === s && r === a || o()
                }))
            })), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
        })), s("destroy", (() => {
            l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = [], l = r(), o = function (e, t) {
            void 0 === t && (t = {});
            const s = new (l.MutationObserver || l.WebkitMutationObserver)((e => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                    i("observerUpdate", e[0])
                };
                l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
            }));
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), n.push(s)
        };
        s({observer: !1, observeParents: !1, observeSlideChildren: !1}), a("init", (() => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.$el[0], {childList: t.params.observeSlideChildren}), o(t.$wrapperEl[0], {attributes: !1})
            }
        })), a("destroy", (() => {
            n.forEach((e => {
                e.disconnect()
            })), n.splice(0, n.length)
        }))
    }]);
    const re = [function (e) {
        let t, {swiper: s, extendParams: a, on: i, emit: r} = e;

        function n(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
            const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s.virtual.cache[t] = i), i
        }

        function l(e) {
            const {slidesPerView: t, slidesPerGroup: a, centeredSlides: i} = s.params, {
                addSlidesBefore: l,
                addSlidesAfter: o
            } = s.params.virtual, {from: d, to: c, slides: p, slidesGrid: u, offset: h} = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const m = s.activeIndex || 0;
            let f, g, v;
            f = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t / 2) + a + o, v = Math.floor(t / 2) + a + l) : (g = t + (a - 1) + o, v = a + l);
            const w = Math.max((m || 0) - v, 0), b = Math.min((m || 0) + g, p.length - 1),
                x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);

            function y() {
                s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r("virtualUpdate")
            }

            if (Object.assign(s.virtual, {
                from: w,
                to: b,
                offset: x,
                slidesGrid: s.slidesGrid
            }), d === w && c === b && !e) return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`), s.updateProgress(), void r("virtualUpdate");
            if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
                offset: x,
                from: w,
                to: b,
                slides: function () {
                    const e = [];
                    for (let t = w; t <= b; t += 1) e.push(p[t]);
                    return e
                }()
            }), void (s.params.virtual.renderExternalUpdate ? y() : r("virtualUpdate"));
            const E = [], C = [];
            if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove(); else for (let e = d; e <= c; e += 1) (e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < p.length; t += 1) t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t)));
            C.forEach((e => {
                s.$wrapperEl.append(n(p[e], e))
            })), E.sort(((e, t) => t - e)).forEach((e => {
                s.$wrapperEl.prepend(n(p[e], e))
            })), s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), y()
        }

        a({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, i("beforeInit", (() => {
            s.params.virtual.enabled && (s.virtual.slides = s.params.virtual.slides, s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, s.params.initialSlide || l())
        })), i("setTranslate", (() => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
                l()
            }), 100)) : l())
        })), i("init update resize", (() => {
            s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        })), Object.assign(s.virtual, {
            appendSlide: function (e) {
                if ("object" == typeof e && "length" in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]); else s.virtual.slides.push(e);
                l(!0)
            }, prependSlide: function (e) {
                const t = s.activeIndex;
                let a = t + 1, i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length, i = e.length
                } else s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache, t = {};
                    Object.keys(e).forEach((s => {
                        const a = e[s], r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a
                    })), s.virtual.cache = t
                }
                l(!0), s.slideTo(a, 0)
            }, removeSlide: function (e) {
                if (null == e) return;
                let t = s.activeIndex;
                if (Array.isArray(e)) for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0); else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                l(!0), s.slideTo(t, 0)
            }, removeAllSlides: function () {
                s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0)
            }, update: l
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: i, emit: n} = e;
        const l = a(), o = r();

        function c(e) {
            if (!t.enabled) return;
            const {rtlTranslate: s} = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode, r = t.params.keyboard.pageUpDown, d = r && 33 === i, c = r && 34 === i,
                p = 37 === i, u = 39 === i, h = 38 === i, m = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                    let e = !1;
                    if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                    const a = t.$el, i = a[0].clientWidth, r = a[0].clientHeight, n = o.innerWidth, l = o.innerHeight,
                        d = t.$el.offset();
                    s && (d.left -= t.$el[0].scrollLeft);
                    const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1]) continue;
                            e = !0
                        }
                    }
                    if (!e) return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n("keyPress", i)
            }
        }

        function p() {
            t.keyboard.enabled || (d(l).on("keydown", c), t.keyboard.enabled = !0)
        }

        function u() {
            t.keyboard.enabled && (d(l).off("keydown", c), t.keyboard.enabled = !1)
        }

        t.keyboard = {enabled: !1}, s({keyboard: {enabled: !1, onlyInViewport: !0, pageUpDown: !0}}), i("init", (() => {
            t.params.keyboard.enabled && p()
        })), i("destroy", (() => {
            t.keyboard.enabled && u()
        })), Object.assign(t.keyboard, {enable: p, disable: u})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        let l;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), t.mousewheel = {enabled: !1};
        let o, c = u();
        const h = [];

        function m() {
            t.enabled && (t.mouseEntered = !0)
        }

        function f() {
            t.enabled && (t.mouseEntered = !1)
        }

        function g(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), c = (new n.Date).getTime(), !1)))
        }

        function v(e) {
            let s = e, a = !0;
            if (!t.enabled) return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.$el;
            if ("container" !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges) return !0;
            s.originalEvent && (s = s.originalEvent);
            let c = 0;
            const m = t.rtlTranslate ? -1 : 1, f = function (e) {
                let t = 0, s = 0, a = 0, i = 0;
                return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: s,
                    pixelX: a,
                    pixelY: i
                }
            }(s);
            if (r.forceToAxis) if (t.isHorizontal()) {
                if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                c = -f.pixelX * m
            } else {
                if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                c = -f.pixelY
            } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
            if (0 === c) return !0;
            r.invert && (c = -c);
            let v = t.getTranslate() + c * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                const e = {time: u(), delta: Math.abs(c), direction: Math.sign(c)},
                    a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                if (!a) {
                    o = void 0, t.params.loop && t.loopFix();
                    let n = t.getTranslate() + c * r.sensitivity;
                    const d = t.isBeginning, u = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!d && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                        clearTimeout(l), l = void 0, h.length >= 15 && h.shift();
                        const s = h.length ? h[h.length - 1] : void 0, a = h[0];
                        if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0); else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = c > 0 ? .8 : .2;
                            o = e, h.splice(0), l = p((() => {
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }), 0)
                        }
                        l || (l = p((() => {
                            o = e, h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate()) return !0
                }
            } else {
                const s = {time: u(), delta: Math.abs(c), direction: Math.sign(c), raw: e};
                h.length >= 2 && h.shift();
                const a = h.length ? h[h.length - 1] : void 0;
                if (h.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s), function (e) {
                    const s = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
                    } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
                    return !1
                }(s)) return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
        }

        function w(e) {
            let s = t.$el;
            "container" !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", f), s[e]("wheel", v)
        }

        function b() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (w("on"), t.mousewheel.enabled = !0, !0)
        }

        function x() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w("off"), t.mousewheel.enabled = !1, !0)
        }

        a("init", (() => {
            !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b()
        })), a("destroy", (() => {
            t.params.cssMode && b(), t.mousewheel.enabled && x()
        })), Object.assign(t.mousewheel, {enable: b, disable: x})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;

        function r(e) {
            let s;
            return e && (s = d(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
        }

        function n(e, s) {
            const a = t.params.navigation;
            e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }

        function l() {
            if (t.params.loop) return;
            const {$nextEl: e, $prevEl: s} = t.navigation;
            n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind)
        }

        function o(e) {
            e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
        }

        function c(e) {
            e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
        }

        function p() {
            const e = t.params.navigation;
            if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
            const s = r(e.nextEl), a = r(e.prevEl);
            s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass))
        }

        function u() {
            const {$nextEl: e, $prevEl: s} = t.navigation;
            e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass))
        }

        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), t.navigation = {nextEl: null, $nextEl: null, prevEl: null, $prevEl: null}, a("init", (() => {
            !1 === t.params.navigation.enabled ? h() : (p(), l())
        })), a("toEdge fromEdge lock unlock", (() => {
            l()
        })), a("destroy", (() => {
            u()
        })), a("enable disable", (() => {
            const {$nextEl: e, $prevEl: s} = t.navigation;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
        })), a("click", ((e, s) => {
            const {$nextEl: a, $prevEl: r} = t.navigation, n = s.target;
            if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                let e;
                a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
            }
        }));
        const h = () => {
            t.$el.addClass(t.params.navigation.navigationDisabledClass), u()
        };
        Object.assign(t.navigation, {
            enable: () => {
                t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l()
            }, disable: h, update: l, init: p, destroy: u
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const r = "swiper-pagination";
        let n;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }), t.pagination = {el: null, $el: null, bullets: []};
        let l = 0;

        function o() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }

        function c(e, s) {
            const {bulletActiveClass: a} = t.params.pagination;
            e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }

        function p() {
            const e = t.rtl, s = t.params.pagination;
            if (o()) return;
            const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                r = t.pagination.$el;
            let p;
            const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t.params.paginationType && (p = u + p)) : p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const a = t.pagination.bullets;
                let i, o, u;
                if (s.dynamicBullets && (n = a.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", n * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (l += p - (t.previousIndex - t.loopedSlides || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), i = Math.max(p - l, 0), o = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), r.length > 1) a.each((e => {
                    const t = d(e), a = t.index();
                    a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next"))
                })); else {
                    const e = a.eq(p), r = e.index();
                    if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const e = a.eq(i), n = a.eq(o);
                        for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (t.params.loop) if (r >= a.length) {
                            for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                            a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                        } else c(e, "prev"), c(n, "next"); else c(e, "prev"), c(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4), r = (n * i - n) / 2 - u * n,
                        l = e ? "right" : "left";
                    a.css(t.isHorizontal() ? l : "top", `${r}px`)
                }
            }
            if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                let e;
                e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const a = (p + 1) / u;
                let i = 1, n = 1;
                "horizontal" === e ? i = a : n = a, r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }

        function u() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                a = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
                for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                a.html(r), t.pagination.bullets = a.find(U(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
        }

        function h() {
            t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
            const e = t.params.pagination;
            if (!e.el) return;
            let s = d(e.el);
            0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter((e => d(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", U(e.bulletClass), (function (e) {
                e.preventDefault();
                let s = d(this).index() * t.params.slidesPerGroup;
                t.params.loop && (s += t.loopedSlides), t.slideTo(s)
            })), Object.assign(t.pagination, {$el: s, el: s[0]}), t.enabled || s.addClass(e.lockClass))
        }

        function m() {
            const e = t.params.pagination;
            if (o()) return;
            const s = t.pagination.$el;
            s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass))
        }

        a("init", (() => {
            !1 === t.params.pagination.enabled ? f() : (h(), u(), p())
        })), a("activeIndexChange", (() => {
            (t.params.loop || void 0 === t.snapIndex) && p()
        })), a("snapIndexChange", (() => {
            t.params.loop || p()
        })), a("slidesLengthChange", (() => {
            t.params.loop && (u(), p())
        })), a("snapGridLengthChange", (() => {
            t.params.loop || (u(), p())
        })), a("destroy", (() => {
            m()
        })), a("enable disable", (() => {
            const {$el: e} = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        })), a("lock unlock", (() => {
            p()
        })), a("click", ((e, s) => {
            const a = s.target, {$el: r} = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
            }
        }));
        const f = () => {
            t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p()
            }, disable: f, render: u, update: p, init: h, destroy: m
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: i, emit: r} = e;
        const n = a();
        let l, o, c, u, h = !1, m = null, f = null;

        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {scrollbar: e, rtlTranslate: s, progress: a} = t, {$dragEl: i, $el: r} = e, n = t.params.scrollbar;
            let l = o, d = (c - o) * a;
            s ? (d = -d, d > 0 ? (l = o - d, d = 0) : -d + o > c && (l = c + d)) : d < 0 ? (l = o + d, d = 0) : d + o > c && (l = c - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout((() => {
                r[0].style.opacity = 0, r.transition(400)
            }), 1e3))
        }

        function v() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const {scrollbar: e} = t, {$dragEl: s, $el: a} = e;
            s[0].style.width = "", s[0].style.height = "", c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o}px` : s[0].style.height = `${o}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
        }

        function w(e) {
            return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }

        function b(e) {
            const {scrollbar: s, rtlTranslate: a} = t, {$el: i} = s;
            let r;
            r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : o / 2)) / (c - o), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
        }

        function x(e) {
            const s = t.params.scrollbar, {scrollbar: a, $wrapperEl: i} = t, {$el: n, $dragEl: o} = a;
            h = !0, l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r("scrollbarDragStart", e)
        }

        function y(e) {
            const {scrollbar: s, $wrapperEl: a} = t, {$el: i, $dragEl: n} = s;
            h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r("scrollbarDragMove", e))
        }

        function E(e) {
            const s = t.params.scrollbar, {scrollbar: a, $wrapperEl: i} = t, {$el: n} = a;
            h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p((() => {
                n.css("opacity", 0), n.transition(400)
            }), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
        }

        function C(e) {
            const {scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l} = t, o = s.$el;
            if (!o) return;
            const d = o[0], c = !(!l.passiveListener || !r.passiveListeners) && {passive: !1, capture: !1},
                p = !(!l.passiveListener || !r.passiveListeners) && {passive: !0, capture: !1};
            if (!d) return;
            const u = "on" === e ? "addEventListener" : "removeEventListener";
            l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p))
        }

        function T() {
            const {scrollbar: e, $el: s} = t;
            t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {el: "swiper-scrollbar"});
            const a = t.params.scrollbar;
            if (!a.el) return;
            let i = d(a.el);
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
            let r = i.find(`.${t.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(e, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }), a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        }

        function $() {
            const e = t.params.scrollbar, s = t.scrollbar.$el;
            s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off")
        }

        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }), t.scrollbar = {el: null, dragEl: null, $el: null, $dragEl: null}, i("init", (() => {
            !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g())
        })), i("update resize observerUpdate lock unlock", (() => {
            v()
        })), i("setTranslate", (() => {
            g()
        })), i("setTransition", ((e, s) => {
            !function (e) {
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
            }(s)
        })), i("enable disable", (() => {
            const {$el: e} = t.scrollbar;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
        })), i("destroy", (() => {
            $()
        }));
        const S = () => {
            t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $()
        };
        Object.assign(t.scrollbar, {
            enable: () => {
                t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g()
            }, disable: S, updateSize: v, setTranslate: g, init: T, destroy: $
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({parallax: {enabled: !1}});
        const i = (e, s) => {
            const {rtl: a} = t, i = d(e), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
            let l = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y");
            const c = i.attr("data-swiper-parallax-scale"), p = i.attr("data-swiper-parallax-opacity");
            if (l || o ? (l = l || "0", o = o || "0") : t.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
                const e = p - (p - 1) * (1 - Math.abs(s));
                i[0].style.opacity = e
            }
            if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`); else {
                const e = c - (c - 1) * (1 - Math.abs(s));
                i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
            }
        }, r = () => {
            const {$el: e, slides: s, progress: a, snapGrid: r} = t;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                i(e, a)
            })), s.each(((e, s) => {
                let n = e.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    i(e, n)
                }))
            }))
        };
        a("beforeInit", (() => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
        })), a("init", (() => {
            t.params.parallax.enabled && r()
        })), a("setTranslate", (() => {
            t.params.parallax.enabled && r()
        })), a("setTransition", ((e, s) => {
            t.params.parallax.enabled && function (e) {
                void 0 === e && (e = t.params.speed);
                const {$el: s} = t;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t => {
                    const s = d(t);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), s.transition(a)
                }))
            }(s)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), t.zoom = {enabled: !1};
        let l, o, c, p = 1, u = !1;
        const m = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
        }, f = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }, g = {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0};
        let v = 1;

        function w(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, a = e.targetTouches[1].pageX,
                i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        }

        function b(e) {
            const s = t.support, a = t.params.zoom;
            if (o = !1, c = !1, !s.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                o = !0, m.scaleStart = w(e)
            }
            m.$slideEl && m.$slideEl.length || (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`), 0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u = !0) : m.$imageEl = void 0
        }

        function x(e) {
            const s = t.support, a = t.params.zoom, i = t.zoom;
            if (!s.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                c = !0, m.scaleMove = w(e)
            }
            m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b(e)
        }

        function y(e) {
            const s = t.device, a = t.support, i = t.params.zoom, r = t.zoom;
            if (!a.gestures) {
                if (!o || !c) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
                o = !1, c = !1
            }
            m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, u = !1, 1 === r.scale && (m.$slideEl = void 0))
        }

        function E(e) {
            const s = t.zoom;
            if (!m.$imageEl || 0 === m.$imageEl.length) return;
            if (t.allowClick = !1, !f.isTouched || !m.$slideEl) return;
            f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h(m.$imageWrapEl[0], "x") || 0, f.startY = h(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
            const a = f.width * s.scale, i = f.height * s.scale;
            if (!(a < m.slideWidth && i < m.slideHeight)) {
                if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u) {
                    if (t.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1)
                }
                e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** .8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** .8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** .8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = f.touchesCurrent.x, g.prevPositionY = f.touchesCurrent.y, g.prevTime = Date.now(), m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }
        }

        function C() {
            const e = t.zoom;
            m.$slideEl && t.previousIndex !== t.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0)
        }

        function T(e) {
            const s = t.zoom, a = t.params.zoom;
            if (m.$slideEl || (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)), m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
            let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n.scrollX, o = m.$slideEl.offset().top + n.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), C = -y, T = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > C && (h = C), g < E && (g = E), g > T && (g = T)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }

        function $() {
            const e = t.zoom, s = t.params.zoom;
            m.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : m.$slideEl = t.slides.eq(t.activeIndex), m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass(`${s.zoomedSlideClass}`), m.$slideEl = void 0)
        }

        function S(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? $() : T(e)
        }

        function M() {
            const e = t.support;
            return {
                passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, activeListenerWithCapture: !e.passiveListener || {passive: !1, capture: !0}
            }
        }

        function P() {
            return `.${t.params.slideClass}`
        }

        function k(e) {
            const {passiveListener: s} = M(), a = P();
            t.$wrapperEl[e]("gesturestart", a, b, s), t.$wrapperEl[e]("gesturechange", a, x, s), t.$wrapperEl[e]("gestureend", a, y, s)
        }

        function z() {
            l || (l = !0, k("on"))
        }

        function L() {
            l && (l = !1, k("off"))
        }

        function O() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const s = t.support, {passiveListener: a, activeListenerWithCapture: i} = M(), r = P();
            s.gestures ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, r, b, a), t.$wrapperEl.on(t.touchEvents.move, r, x, i), t.$wrapperEl.on(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }

        function I() {
            const e = t.zoom;
            if (!e.enabled) return;
            const s = t.support;
            e.enabled = !1;
            const {passiveListener: a, activeListenerWithCapture: i} = M(), r = P();
            s.gestures ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, r, b, a), t.$wrapperEl.off(t.touchEvents.move, r, x, i), t.$wrapperEl.off(t.touchEvents.end, r, y, a), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i)
        }

        Object.defineProperty(t.zoom, "scale", {
            get: () => v, set(e) {
                if (v !== e) {
                    const t = m.$imageEl ? m.$imageEl[0] : void 0, s = m.$slideEl ? m.$slideEl[0] : void 0;
                    i("zoomChange", e, t, s)
                }
                v = e
            }
        }), a("init", (() => {
            t.params.zoom.enabled && O()
        })), a("destroy", (() => {
            I()
        })), a("touchStart", ((e, s) => {
            t.zoom.enabled && function (e) {
                const s = t.device;
                m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }(s)
        })), a("touchEnd", ((e, s) => {
            t.zoom.enabled && function () {
                const e = t.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length) return;
                if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
                f.isTouched = !1, f.isMoved = !1;
                let s = 300, a = 300;
                const i = g.x * s, r = f.currentX + i, n = g.y * a, l = f.currentY + n;
                0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
                const o = Math.max(s, a);
                f.currentX = r, f.currentY = l;
                const d = f.width * e.scale, c = f.height * e.scale;
                f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)
            }()
        })), a("doubleTap", ((e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s)
        })), a("transitionEnd", (() => {
            t.zoom.enabled && t.params.zoom.enabled && C()
        })), a("slideChange", (() => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
        })), Object.assign(t.zoom, {enable: O, disable: I, in: T, out: $, toggle: S})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        s({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), t.lazy = {};
        let n = !1, l = !1;

        function o(e, s) {
            void 0 === s && (s = !0);
            const a = t.params.lazy;
            if (void 0 === e) return;
            if (0 === t.slides.length) return;
            const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
            !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]), 0 !== n.length && n.each((e => {
                const n = d(e);
                n.addClass(a.loadingClass);
                const l = n.attr("data-background"), c = n.attr("data-src"), p = n.attr("data-srcset"),
                    u = n.attr("data-sizes"), h = n.parent("picture");
                t.loadImage(n[0], c || l, p, u, !1, (() => {
                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                        if (l ? (n.css("background-image", `url("${l}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
                            const t = d(e);
                            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                        })), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t.params.loop && s) {
                            const e = r.attr("data-swiper-slide-index");
                            if (r.hasClass(t.params.slideDuplicateClass)) {
                                o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                        }
                        i("lazyImageReady", r[0], n[0]), t.params.autoHeight && t.updateAutoHeight()
                    }
                })), i("lazyImageLoad", r[0], n[0])
            }))
        }

        function c() {
            const {$wrapperEl: e, params: s, slides: a, activeIndex: i} = t, r = t.virtual && s.virtual.enabled,
                n = s.lazy;
            let c = s.slidesPerView;

            function p(t) {
                if (r) {
                    if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                } else if (a[t]) return !0;
                return !1
            }

            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }

            if ("auto" === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress) e.children(`.${s.slideVisibleClass}`).each((e => {
                o(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
            })); else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e); else o(i);
            if (n.loadPrevNext) if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                const e = n.loadPrevNextAmount, t = Math.ceil(c), s = Math.min(i + t + Math.max(e, t), a.length),
                    r = Math.max(i - Math.max(t, e), 0);
                for (let e = i + t; e < s; e += 1) p(e) && o(e);
                for (let e = r; e < i; e += 1) p(e) && o(e)
            } else {
                const t = e.children(`.${s.slideNextClass}`);
                t.length > 0 && o(u(t));
                const a = e.children(`.${s.slidePrevClass}`);
                a.length > 0 && o(u(a))
            }
        }

        function p() {
            const e = r();
            if (!t || t.destroyed) return;
            const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e), a = s[0] === e,
                i = a ? e.innerWidth : s[0].offsetWidth, l = a ? e.innerHeight : s[0].offsetHeight,
                o = t.$el.offset(), {rtlTranslate: u} = t;
            let h = !1;
            u && (o.left -= t.$el[0].scrollLeft);
            const m = [[o.left, o.top], [o.left + t.width, o.top], [o.left, o.top + t.height], [o.left + t.width, o.top + t.height]];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (c(), s.off("scroll", p, f)) : n || (n = !0, s.on("scroll", p, f))
        }

        a("beforeInit", (() => {
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
        })), a("init", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("scroll", (() => {
            t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
        })), a("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionStart", (() => {
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !l) && (t.params.lazy.checkInView ? p() : c())
        })), a("transitionEnd", (() => {
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c())
        })), a("slideChange", (() => {
            const {lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r} = t.params;
            e.enabled && (s || a && (i || 0 === r)) && c()
        })), a("destroy", (() => {
            t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
        })), Object.assign(t.lazy, {load: c, loadInSlide: o})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;

        function i(e, t) {
            const s = function () {
                let e, t, s;
                return (a, i) => {
                    for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }, this
        }

        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
        }

        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), t.controller = {control: void 0}, a("beforeInit", (() => {
            t.controller.control = t.params.controller.control
        })), a("update", (() => {
            r()
        })), a("resize", (() => {
            r()
        })), a("observerUpdate", (() => {
            r()
        })), a("setTranslate", ((e, s, a) => {
            t.controller.control && t.controller.setTranslate(s, a)
        })), a("setTransition", ((e, s, a) => {
            t.controller.control && t.controller.setTransition(s, a)
        })), Object.assign(t.controller, {
            setTranslate: function (e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;

                function o(e) {
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (!function (e) {
                        t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid))
                    }(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]); else a instanceof l && s !== a && o(a)
            }, setTransition: function (e, s) {
                const a = t.constructor, i = t.controller.control;
                let r;

                function n(s) {
                    s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && p((() => {
                        s.updateAutoHeight()
                    })), s.$wrapperEl.transitionEnd((() => {
                        i && (s.params.loop && "slide" === t.params.controller.by && s.loopFix(), s.transitionEnd())
                    })))
                }

                if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]); else i instanceof a && s !== i && n(i)
            }
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }), t.a11y = {clicked: !1};
        let i = null;

        function r(e) {
            const t = i;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function n(e) {
            e.attr("tabIndex", "0")
        }

        function l(e) {
            e.attr("tabIndex", "-1")
        }

        function o(e, t) {
            e.attr("role", t)
        }

        function c(e, t) {
            e.attr("aria-roledescription", t)
        }

        function p(e, t) {
            e.attr("aria-label", t)
        }

        function u(e) {
            e.attr("aria-disabled", !0)
        }

        function h(e) {
            e.attr("aria-disabled", !1)
        }

        function m(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const s = t.params.a11y, a = d(e.target);
            t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click()
        }

        function f() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }

        function g() {
            return f() && t.params.pagination.clickable
        }

        const v = (e, t, s) => {
            n(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", m)), p(e, s), function (e, t) {
                e.attr("aria-controls", t)
            }(e, t)
        }, w = () => {
            t.a11y.clicked = !0
        }, b = () => {
            requestAnimationFrame((() => {
                requestAnimationFrame((() => {
                    t.destroyed || (t.a11y.clicked = !1)
                }))
            }))
        }, x = e => {
            if (t.a11y.clicked) return;
            const s = e.target.closest(`.${t.params.slideClass}`);
            if (!s || !t.slides.includes(s)) return;
            const a = t.slides.indexOf(s) === t.activeIndex,
                i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
            a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
        }, y = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(d(t.slides), e.slideRole);
            const s = t.params.loop ? t.slides.filter((e => !e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
            e.slideLabelMessage && t.slides.each(((a, i) => {
                const r = d(a), n = t.params.loop ? parseInt(r.attr("data-swiper-slide-index"), 10) : i;
                p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s))
            }))
        }, E = () => {
            const e = t.params.a11y;
            t.$el.append(i);
            const s = t.$el;
            e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
            const a = t.$wrapperEl,
                r = e.id || a.attr("id") || `swiper-wrapper-${n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`;
            var n;
            const l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var o;
            let d, u;
            o = r, a.attr("id", o), function (e, t) {
                e.attr("aria-live", t)
            }(a, l), y(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, r, e.nextSlideMessage), u && u.length && v(u, r, e.prevSlideMessage), g() && t.pagination.$el.on("keydown", U(t.params.pagination.bulletClass), m), t.$el.on("focus", x, !0), t.$el.on("pointerdown", w, !0), t.$el.on("pointerup", b, !0)
        };
        a("beforeInit", (() => {
            i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), a("afterInit", (() => {
            t.params.a11y.enabled && E()
        })), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
            t.params.a11y.enabled && y()
        })), a("fromEdge toEdge afterInit lock unlock", (() => {
            t.params.a11y.enabled && function () {
                if (t.params.loop || t.params.rewind || !t.navigation) return;
                const {$nextEl: e, $prevEl: s} = t.navigation;
                s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)))
            }()
        })), a("paginationUpdate", (() => {
            t.params.a11y.enabled && function () {
                const e = t.params.a11y;
                f() && t.pagination.bullets.each((s => {
                    const a = d(s);
                    t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current")
                }))
            }()
        })), a("destroy", (() => {
            t.params.a11y.enabled && function () {
                let e, s;
                i && i.length > 0 && i.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t.pagination.$el.off("keydown", U(t.params.pagination.bulletClass), m), t.$el.off("focus", x, !0), t.$el.off("pointerdown", w, !0), t.$el.off("pointerup", b, !0)
            }()
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({history: {enabled: !1, root: "", replaceState: !1, key: "slides", keepQuery: !1}});
        let i = !1, n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)), i = a.length;
                return {key: a[i - 2], value: a[i - 1]}
            }, d = (e, s) => {
                const a = r();
                if (!i || !t.params.history.enabled) return;
                let n;
                n = t.params.url ? new URL(t.params.url) : a.location;
                const o = t.slides.eq(s);
                let d = l(o.attr("data-history"));
                if (t.params.history.root.length > 0) {
                    let s = t.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e}/${d}`
                } else n.pathname.includes(e) || (d = `${e}/${d}`);
                t.params.history.keepQuery && (d += n.search);
                const c = a.history.state;
                c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({value: d}, null, d) : a.history.pushState({value: d}, null, d))
            }, c = (e, s, a) => {
                if (s) for (let i = 0, r = t.slides.length; i < r; i += 1) {
                    const r = t.slides.eq(i);
                    if (l(r.attr("data-history")) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                        const s = r.index();
                        t.slideTo(s, e, a)
                    }
                } else t.slideTo(0, e, a)
            }, p = () => {
                n = o(t.params.url), c(t.params.speed, n.value, !1)
            };
        a("init", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                    i = !0, n = o(t.params.url), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p))
                }
            })()
        })), a("destroy", (() => {
            t.params.history.enabled && (() => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            })()
        })), a("transitionEnd _freeModeNoMomentumRelease", (() => {
            i && d(t.params.history.key, t.activeIndex)
        })), a("slideChange", (() => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }))
    }, function (e) {
        let {swiper: t, extendParams: s, emit: i, on: n} = e, l = !1;
        const o = a(), c = r();
        s({hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}});
        const p = () => {
            i("hashChange");
            const e = o.location.hash.replace("#", "");
            if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                if (void 0 === s) return;
                t.slideTo(s)
            }
        }, u = () => {
            if (l && t.params.hashNavigation.enabled) if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i("hashSet"); else {
                const e = t.slides.eq(t.activeIndex), s = e.attr("data-hash") || e.attr("data-history");
                o.location.hash = s || "", i("hashSet")
            }
        };
        n("init", (() => {
            t.params.hashNavigation.enabled && (() => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0;
                    for (let a = 0, i = t.slides.length; a < i; a += 1) {
                        const i = t.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                            const e = i.index();
                            t.slideTo(e, s, t.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                t.params.hashNavigation.watchState && d(c).on("hashchange", p)
            })()
        })), n("destroy", (() => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", p)
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            l && u()
        })), n("slideChange", (() => {
            l && t.params.cssMode && u()
        }))
    }, function (e) {
        let t, {swiper: s, extendParams: i, on: r, emit: n} = e;

        function l() {
            if (!s.size) return s.autoplay.running = !1, void (s.autoplay.paused = !1);
            const e = s.slides.eq(s.activeIndex);
            let a = s.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = p((() => {
                let e;
                s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l()
            }), a)
        }

        function o() {
            return void 0 === t && (!s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0))
        }

        function d() {
            return !!s.autoplay.running && (void 0 !== t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, n("autoplayStop"), !0))
        }

        function c(e) {
            s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].addEventListener(e, h)
            })) : (s.autoplay.paused = !1, l())))
        }

        function u() {
            const e = a();
            "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1)
        }

        function h(e) {
            s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            })), s.autoplay.paused = !1, s.autoplay.running ? l() : d())
        }

        function m() {
            s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                s.$wrapperEl[0].removeEventListener(e, h)
            }))
        }

        function f() {
            s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l())
        }

        s.autoplay = {running: !1, paused: !1}, i({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), r("init", (() => {
            if (s.params.autoplay.enabled) {
                o();
                a().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f))
            }
        })), r("beforeTransitionStart", ((e, t, a) => {
            s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
        })), r("sliderFirstMove", (() => {
            s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
        })), r("touchEnd", (() => {
            s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l()
        })), r("destroy", (() => {
            s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
            a().removeEventListener("visibilitychange", u)
        })), Object.assign(s.autoplay, {pause: c, run: l, start: o, stop: d})
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let i = !1, r = !1;

        function n() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const s = e.clickedIndex, a = e.clickedSlide;
            if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let i;
            if (i = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
                let e = t.activeIndex;
                t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                    a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s
            }
            t.slideTo(i)
        }

        function l() {
            const {thumbs: e} = t.params;
            if (i) return !1;
            i = !0;
            const s = t.constructor;
            if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(t.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }); else if (m(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {watchSlidesProgress: !0, slideToClickedSlide: !1}), t.thumbs.swiper = new s(a), r = !0
            }
            return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n), !0
        }

        function o(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.removeClass(r), s.params.loop || s.params.virtual && s.params.virtual.enabled) for (let e = 0; e < i; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r); else for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
            const n = t.params.thumbs.autoScrollOffset, l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                let i, r, o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                    const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                        a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, r = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else i = t.realIndex, r = i > t.previousIndex ? "next" : "prev";
                l && (i += "next" === r ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(i) < 0 && (s.params.centeredSlides ? i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1 : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0))
            }
        }

        t.thumbs = {swiper: null}, a("beforeInit", (() => {
            const {thumbs: e} = t.params;
            e && e.swiper && (l(), o(!0))
        })), a("slideChange update resize observerUpdate", (() => {
            o()
        })), a("setTransition", ((e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        })), a("beforeDestroy", (() => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && r && e.destroy()
        })), Object.assign(t.thumbs, {init: l, update: o})
    }, function (e) {
        let {swiper: t, extendParams: s, emit: a, once: i} = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(t, {
            freeMode: {
                onTouchStart: function () {
                    const e = t.getTranslate();
                    t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({currentPos: t.rtl ? t.translate : -t.translate})
                }, onTouchMove: function () {
                    const {touchEventsData: e, touches: s} = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }), e.velocities.push({position: s[t.isHorizontal() ? "currentX" : "currentY"], time: u()})
                }, onTouchEnd: function (e) {
                    let {currentPos: s} = e;
                    const {params: r, $wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d} = t,
                        c = u() - d.touchStartTime;
                    if (s < -t.minTranslate()) t.slideTo(t.activeIndex); else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1); else {
                        if (r.freeMode.momentum) {
                            if (d.velocities.length > 1) {
                                const e = d.velocities.pop(), s = d.velocities.pop(), a = e.position - s.position,
                                    i = e.time - s.time;
                                t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let c = t.translate + s;
                            l && (c = -c);
                            let p, h = !1;
                            const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (c < t.maxTranslate()) r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), p = t.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0); else if (c > t.minTranslate()) r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), p = t.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t.minTranslate(), r.loop && r.centeredSlides && (f = !0); else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < o.length; t += 1) if (o[t] > -c) {
                                    e = t;
                                    break
                                }
                                c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t.swipeDirection ? o[e] : o[e - 1], c = -c
                            }
                            if (f && i("transitionEnd", (() => {
                                t.loopFix()
                            })), 0 !== t.velocity) {
                                if (e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), r.freeMode.sticky) {
                                    const s = Math.abs((l ? -c : c) - t.translate),
                                        a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode.momentumBounce && h ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && d.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
                                    t.setTranslate(p), n.transitionEnd((() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd((() => {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky) return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }
                        (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    }
                }
            }
        })
    }, function (e) {
        let t, s, a, {swiper: i, extendParams: r} = e;
        r({grid: {rows: 1, fill: "column"}}), i.grid = {
            initSlides: e => {
                const {slidesPerView: r} = i.params, {rows: n, fill: l} = i.params.grid;
                s = t / n, a = Math.floor(e / n), t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t = Math.max(t, r * n))
            }, updateSlide: (e, r, n, l) => {
                const {slidesPerGroup: o, spaceBetween: d} = i.params, {rows: c, fill: p} = i.params.grid;
                let u, h, m;
                if ("row" === p && o > 1) {
                    const s = Math.floor(e / (o * c)), a = e - c * o * s,
                        i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                    m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t / c, r.css({
                        "-webkit-order": u,
                        order: u
                    })
                } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a || h === a && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s), h = e - m * s);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
            }, updateWrapperSize: (e, s, a) => {
                const {spaceBetween: r, centeredSlides: n, roundLengths: l} = i.params, {rows: o} = i.params.grid;
                if (i.virtualSize = (e + r) * t, i.virtualSize = Math.ceil(i.virtualSize / o) - r, i.$wrapperEl.css({[a("width")]: `${i.virtualSize + r}px`}), n) {
                    s.splice(0, s.length);
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a)
                    }
                    s.push(...e)
                }
            }
        }
    }, function (e) {
        let {swiper: t} = e;
        Object.assign(t, {
            appendSlide: K.bind(t),
            prependSlide: Z.bind(t),
            addSlide: Q.bind(t),
            removeSlide: J.bind(t),
            removeAllSlides: ee.bind(t)
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({fadeEffect: {crossFade: !1, transformEl: null}}), te({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e} = t, s = t.params.fadeEffect;
                for (let a = 0; a < e.length; a += 1) {
                    const e = t.slides.eq(a);
                    let i = -e[0].swiperSlideOffset;
                    t.params.virtualTranslate || (i -= t.translate);
                    let r = 0;
                    t.isHorizontal() || (r = i, i = 0);
                    const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                    se(s, e).css({opacity: n}).transform(`translate3d(${i}px, ${r}px, 0px)`)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.fadeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}});
        const i = (e, t, s) => {
            let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === a.length && (a = d(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`), e.append(a)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0))
        };
        te({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {$el: e, $wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: c} = t,
                    p = t.params.cubeEffect, u = t.isHorizontal(), h = t.virtual && t.params.virtual.enabled;
                let m, f = 0;
                p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({height: `${r}px`})) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d('<div class="swiper-cube-shadow"></div>'), e.append(m))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let r = 90 * s, n = Math.floor(r / 360);
                    l && (r = -r, n = Math.floor(-r / 360));
                    const d = Math.max(Math.min(t[0].progress, 1), -1);
                    let c = 0, m = 0, g = 0;
                    s % 4 == 0 ? (c = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (c = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (c = -o, g = 3 * o + 4 * o * n), l && (c = -c), u || (m = c, c = 0);
                    const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
                    d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i(t, d, u)
                }
                if (s.css({
                    "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                    "transform-origin": `50% 50% -${o / 2}px`
                }), p.shadow) if (u) m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`); else {
                    const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                        t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                        s = p.shadowScale, a = p.shadowScale / t, i = p.shadowOffset;
                    m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`)
                }
                const g = c.isSafari || c.isWebView ? -o / 2 : 0;
                s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`)
            },
            setTransition: e => {
                const {$el: s, slides: a} = t;
                a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && s.find(".swiper-cube-shadow").transition(e)
            },
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.each((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(d(t), s, e)
                }))
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({flipEffect: {slideShadows: !0, limitRotation: !0, transformEl: null}});
        const i = (e, s, a) => {
            let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
            0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0))
        };
        te({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, rtlTranslate: s} = t, a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const n = e.eq(r);
                    let l = n[0].progress;
                    t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                    const o = n[0].swiperSlideOffset;
                    let d = -180 * l, c = 0, p = t.params.cssMode ? -o - t.translate : -o, u = 0;
                    t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l, a);
                    const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                    se(a, n).transform(h)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.flipEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            recreateShadows: () => {
                const e = t.params.flipEffect;
                t.slides.each((s => {
                    const a = d(s);
                    let r = a[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e)
                }))
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), te({
            effect: "coverflow", swiper: t, on: a, setTranslate: () => {
                const {width: e, height: s, slides: a, slidesSizesGrid: i} = t, r = t.params.coverflowEffect,
                    n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate,
                    c = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e), s = i[e], l = (o - t[0].swiperSlideOffset - s / 2) / s,
                        p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                    let u = n ? d * p : 0, h = n ? 0 : d * p, m = -c * Math.abs(p), f = r.stretch;
                    "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                    let g = n ? 0 : f * p, v = n ? f * p : 0, w = 1 - (1 - r.scale) * Math.abs(p);
                    Math.abs(v) < .001 && (v = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(h) < .001 && (h = 0), Math.abs(w) < .001 && (w = 0);
                    const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                    if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0)
                    }
                }
            }, setTransition: e => {
                const {transformEl: s} = t.params.coverflowEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }, perspective: () => !0, overwriteParams: () => ({watchSlidesProgress: !0})
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1},
                next: {translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1}
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        te({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, $wrapperEl: s, slidesSizesGrid: a} = t,
                    r = t.params.creativeEffect, {progressMultiplier: n} = r, l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${e}px))`)
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e.eq(s), o = a[0].progress,
                        d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a[0].swiperSlideOffset, u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
                        h = [0, 0, 0];
                    let m = !1;
                    t.isHorizontal() || (u[1] = u[0], u[0] = 0);
                    let f = {translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1};
                    d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(((e, t) => {
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
                    })), h.forEach(((e, t) => {
                        h[t] = f.rotate[t] * Math.abs(d * n)
                    })), a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", "), v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                        w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`,
                        b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
                        x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = a.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = se(r, a);
                    y.transform(x).css({opacity: b}), f.origin && y.css("transform-origin", f.origin)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.creativeEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s,
                    allSlides: !0
                })
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
        })
    }, function (e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({cardsEffect: {slideShadows: !0, transformEl: null, rotate: !0, perSlideRotate: 2, perSlideOffset: 8}}), te({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, activeIndex: s} = t, a = t.params.cardsEffect, {
                    startTranslate: i,
                    isTouched: r
                } = t.touchEventsData, n = t.translate;
                for (let l = 0; l < e.length; l += 1) {
                    const o = e.eq(l), d = o[0].progress, c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                    let u = t.params.cssMode ? -p - t.translate : -p, h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1, g = -a.perSlideRotate * c, v = a.perSlideOffset - .75 * Math.abs(c);
                    const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                        b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i,
                        x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                    if (b || x) {
                        const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                        g += -28 * c * e, f += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%"
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
                        const e = h;
                        h = u, u = e
                    }
                    const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c),
                        E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                    se(a, o).transform(E)
                }
            },
            setTransition: e => {
                const {transformEl: s} = t.params.cardsEffect;
                (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                    swiper: t,
                    duration: e,
                    transformEl: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode})
        })
    }];
    return V.use(re), V
}));
//# sourceMappingURL=swiper-bundle.min.js.map/*! * include prism ( for code highliter )  */

/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
    ? window   // if in browser
    : (
        (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
            ? self // if in worker
            : {}   // if in node js
    );

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

    // Private helper vars
    var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
    var uniqueId = 0;

    // The grammar object for plaintext
    var plainTextGrammar = {};


    var _ = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: _self.Prism && _self.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
            encode: function encode(tokens) {
                if (tokens instanceof Token) {
                    return new Token(tokens.type, encode(tokens.content), tokens.alias);
                } else if (Array.isArray(tokens)) {
                    return tokens.map(encode);
                } else {
                    return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
                }
            },

            /**
             * Returns the name of the type of the given value.
             *
             * @param {any} o
             * @returns {string}
             * @example
             * type(null)      === 'Null'
             * type(undefined) === 'Undefined'
             * type(123)       === 'Number'
             * type('foo')     === 'String'
             * type(true)      === 'Boolean'
             * type([1, 2])    === 'Array'
             * type({})        === 'Object'
             * type(String)    === 'Function'
             * type(/abc+/)    === 'RegExp'
             */
            type: function (o) {
                return Object.prototype.toString.call(o).slice(8, -1);
            },

            /**
             * Returns a unique number for the given object. Later calls will still return the same number.
             *
             * @param {Object} obj
             * @returns {number}
             */
            objId: function (obj) {
                if (!obj['__id']) {
                    Object.defineProperty(obj, '__id', {value: ++uniqueId});
                }
                return obj['__id'];
            },

            /**
             * Creates a deep clone of the given object.
             *
             * The main intended use of this function is to clone language definitions.
             *
             * @param {T} o
             * @param {Record<number, any>} [visited]
             * @returns {T}
             * @template T
             */
            clone: function deepClone(o, visited) {
                visited = visited || {};

                var clone;
                var id;
                switch (_.util.type(o)) {
                    case 'Object':
                        id = _.util.objId(o);
                        if (visited[id]) {
                            return visited[id];
                        }
                        clone = /** @type {Record<string, any>} */ ({});
                        visited[id] = clone;

                        for (var key in o) {
                            if (o.hasOwnProperty(key)) {
                                clone[key] = deepClone(o[key], visited);
                            }
                        }

                        return /** @type {any} */ (clone);

                    case 'Array':
                        id = _.util.objId(o);
                        if (visited[id]) {
                            return visited[id];
                        }
                        clone = [];
                        visited[id] = clone;

                        (/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
                            clone[i] = deepClone(v, visited);
                        });

                        return /** @type {any} */ (clone);

                    default:
                        return o;
                }
            },

            /**
             * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
             *
             * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
             *
             * @param {Element} element
             * @returns {string}
             */
            getLanguage: function (element) {
                while (element) {
                    var m = lang.exec(element.className);
                    if (m) {
                        return m[1].toLowerCase();
                    }
                    element = element.parentElement;
                }
                return 'none';
            },

            /**
             * Sets the Prism `language-xxxx` class of the given element.
             *
             * @param {Element} element
             * @param {string} language
             * @returns {void}
             */
            setLanguage: function (element, language) {
                // remove all `language-xxxx` classes
                // (this might leave behind a leading space)
                element.className = element.className.replace(RegExp(lang, 'gi'), '');

                // add the new `language-xxxx` class
                // (using `classList` will automatically clean up spaces for us)
                element.classList.add('language-' + language);
            },

            /**
             * Returns the script element that is currently executing.
             *
             * This does __not__ work for line script element.
             *
             * @returns {HTMLScriptElement | null}
             */
            currentScript: function () {
                if (typeof document === 'undefined') {
                    return null;
                }
                if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
                    return /** @type {any} */ (document.currentScript);
                }

                // IE11 workaround
                // we'll get the src of the current script by parsing IE11's error stack trace
                // this will not work for inline scripts

                try {
                    throw new Error();
                } catch (err) {
                    // Get file src url from stack. Specifically works with the format of stack traces in IE.
                    // A stack will look like this:
                    //
                    // Error
                    //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
                    //    at Global code (http://localhost/components/prism-core.js:606:1)

                    var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                    if (src) {
                        var scripts = document.getElementsByTagName('script');
                        for (var i in scripts) {
                            if (scripts[i].src == src) {
                                return scripts[i];
                            }
                        }
                    }
                    return null;
                }
            },

            /**
             * Returns whether a given class is active for `element`.
             *
             * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
             * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
             * given class is just the given class with a `no-` prefix.
             *
             * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
             * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
             * ancestors have the given class or the negated version of it, then the default activation will be returned.
             *
             * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
             * version of it, the class is considered active.
             *
             * @param {Element} element
             * @param {string} className
             * @param {boolean} [defaultActivation=false]
             * @returns {boolean}
             */
            isActive: function (element, className, defaultActivation) {
                var no = 'no-' + className;

                while (element) {
                    var classList = element.classList;
                    if (classList.contains(className)) {
                        return true;
                    }
                    if (classList.contains(no)) {
                        return false;
                    }
                    element = element.parentElement;
                }
                return !!defaultActivation;
            }
        },

        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
            /**
             * The grammar for plain, unformatted text.
             */
            plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,

            /**
             * Creates a deep copy of the language with the given id and appends the given tokens.
             *
             * If a token in `redef` also appears in the copied language, then the existing token in the copied language
             * will be overwritten at its original position.
             *
             * ## Best practices
             *
             * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
             * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
             * understand the language definition because, normally, the order of tokens matters in Prism grammars.
             *
             * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
             * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
             *
             * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
             * @param {Grammar} redef The new tokens to append.
             * @returns {Grammar} The new language created.
             * @public
             * @example
             * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
             *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
             *     // at its original position
             *     'comment': { ... },
             *     // CSS doesn't have a 'color' token, so this token will be appended
             *     'color': /\b(?:red|green|blue)\b/
             * });
             */
            extend: function (id, redef) {
                var lang = _.util.clone(_.languages[id]);

                for (var key in redef) {
                    lang[key] = redef[key];
                }

                return lang;
            },

            /**
             * Inserts tokens _before_ another token in a language definition or any other grammar.
             *
             * ## Usage
             *
             * This helper method makes it easy to modify existing languages. For example, the CSS language definition
             * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
             * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
             * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
             * this:
             *
             * ```js
             * Prism.languages.markup.style = {
             *     // token
             * };
             * ```
             *
             * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
             * before existing tokens. For the CSS example above, you would use it like this:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'cdata', {
             *     'style': {
             *         // token
             *     }
             * });
             * ```
             *
             * ## Special cases
             *
             * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
             * will be ignored.
             *
             * This behavior can be used to insert tokens after `before`:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'comment', {
             *     'comment': Prism.languages.markup.comment,
             *     // tokens after 'comment'
             * });
             * ```
             *
             * ## Limitations
             *
             * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
             * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
             * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
             * deleting properties which is necessary to insert at arbitrary positions.
             *
             * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
             * Instead, it will create a new object and replace all references to the target object with the new one. This
             * can be done without temporarily deleting properties, so the iteration order is well-defined.
             *
             * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
             * you hold the target object in a variable, then the value of the variable will not change.
             *
             * ```js
             * var oldMarkup = Prism.languages.markup;
             * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
             *
             * assert(oldMarkup !== Prism.languages.markup);
             * assert(newMarkup === Prism.languages.markup);
             * ```
             *
             * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
             * object to be modified.
             * @param {string} before The key to insert before.
             * @param {Grammar} insert An object containing the key-value pairs to be inserted.
             * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
             * object to be modified.
             *
             * Defaults to `Prism.languages`.
             * @returns {Grammar} The new grammar object.
             * @public
             */
            insertBefore: function (inside, before, insert, root) {
                root = root || /** @type {any} */ (_.languages);
                var grammar = root[inside];
                /** @type {Grammar} */
                var ret = {};

                for (var token in grammar) {
                    if (grammar.hasOwnProperty(token)) {

                        if (token == before) {
                            for (var newToken in insert) {
                                if (insert.hasOwnProperty(newToken)) {
                                    ret[newToken] = insert[newToken];
                                }
                            }
                        }

                        // Do not insert token which also occur in insert. See #1525
                        if (!insert.hasOwnProperty(token)) {
                            ret[token] = grammar[token];
                        }
                    }
                }

                var old = root[inside];
                root[inside] = ret;

                // Update references in other language definitions
                _.languages.DFS(_.languages, function (key, value) {
                    if (value === old && key != inside) {
                        this[key] = ret;
                    }
                });

                return ret;
            },

            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
                visited = visited || {};

                var objId = _.util.objId;

                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        callback.call(o, i, o[i], type || i);

                        var property = o[i];
                        var propertyType = _.util.type(property);

                        if (propertyType === 'Object' && !visited[objId(property)]) {
                            visited[objId(property)] = true;
                            DFS(property, callback, null, visited);
                        } else if (propertyType === 'Array' && !visited[objId(property)]) {
                            visited[objId(property)] = true;
                            DFS(property, callback, i, visited);
                        }
                    }
                }
            }
        },

        plugins: {},

        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function (async, callback) {
            _.highlightAllUnder(document, async, callback);
        },

        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function (container, async, callback) {
            var env = {
                callback: callback,
                container: container,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };

            _.hooks.run('before-highlightall', env);

            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

            _.hooks.run('before-all-elements-highlight', env);

            for (var i = 0, element; (element = env.elements[i++]);) {
                _.highlightElement(element, async === true, env.callback);
            }
        },

        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function (element, async, callback) {
            // Find language
            var language = _.util.getLanguage(element);
            var grammar = _.languages[language];

            // Set language on the element, if not present
            _.util.setLanguage(element, language);

            // Set language on the parent, for styling
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === 'pre') {
                _.util.setLanguage(parent, language);
            }

            var code = element.textContent;

            var env = {
                element: element,
                language: language,
                grammar: grammar,
                code: code
            };

            function insertHighlightedCode(highlightedCode) {
                env.highlightedCode = highlightedCode;

                _.hooks.run('before-insert', env);

                env.element.innerHTML = env.highlightedCode;

                _.hooks.run('after-highlight', env);
                _.hooks.run('complete', env);
                callback && callback.call(env.element);
            }

            _.hooks.run('before-sanity-check', env);

            // plugins may change/add the parent/element
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
                parent.setAttribute('tabindex', '0');
            }

            if (!env.code) {
                _.hooks.run('complete', env);
                callback && callback.call(env.element);
                return;
            }

            _.hooks.run('before-highlight', env);

            if (!env.grammar) {
                insertHighlightedCode(_.util.encode(env.code));
                return;
            }

            if (async && _self.Worker) {
                var worker = new Worker(_.filename);

                worker.onmessage = function (evt) {
                    insertHighlightedCode(evt.data);
                };

                worker.postMessage(JSON.stringify({
                    language: env.language,
                    code: env.code,
                    immediateClose: true
                }));
            } else {
                insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
            }
        },

        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function (text, grammar, language) {
            var env = {
                code: text,
                grammar: grammar,
                language: language
            };
            _.hooks.run('before-tokenize', env);
            if (!env.grammar) {
                throw new Error('The language "' + env.language + '" has no grammar.');
            }
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run('after-tokenize', env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
        },

        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function (text, grammar) {
            var rest = grammar.rest;
            if (rest) {
                for (var token in rest) {
                    grammar[token] = rest[token];
                }

                delete grammar.rest;
            }

            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);

            matchGrammar(text, tokenList, grammar, tokenList.head, 0);

            return toArray(tokenList);
        },

        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
            all: {},

            /**
             * Adds the given callback to the list of callbacks for the given hook.
             *
             * The callback will be invoked when the hook it is registered for is run.
             * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
             *
             * One callback function can be registered to multiple hooks and the same hook multiple times.
             *
             * @param {string} name The name of the hook.
             * @param {HookCallback} callback The callback function which is given environment variables.
             * @public
             */
            add: function (name, callback) {
                var hooks = _.hooks.all;

                hooks[name] = hooks[name] || [];

                hooks[name].push(callback);
            },

            /**
             * Runs a hook invoking all registered callbacks with the given environment variables.
             *
             * Callbacks will be invoked synchronously and in the order in which they were registered.
             *
             * @param {string} name The name of the hook.
             * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
             * @public
             */
            run: function (name, env) {
                var callbacks = _.hooks.all[name];

                if (!callbacks || !callbacks.length) {
                    return;
                }

                for (var i = 0, callback; (callback = callbacks[i++]);) {
                    callback(env);
                }
            }
        },

        Token: Token
    };
    _self.Prism = _;


    // Typescript note:
    // The following can be used to import the Token type in JSDoc:
    //
    //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

    /**
     * Creates a new token.
     *
     * @param {string} type See {@link Token#type type}
     * @param {string | TokenStream} content See {@link Token#content content}
     * @param {string|string[]} [alias] The alias(es) of the token.
     * @param {string} [matchedStr=""] A copy of the full string this token was created from.
     * @class
     * @global
     * @public
     */
    function Token(type, content, alias, matchedStr) {
        /**
         * The type of the token.
         *
         * This is usually the key of a pattern in a {@link Grammar}.
         *
         * @type {string}
         * @see GrammarToken
         * @public
         */
        this.type = type;
        /**
         * The strings or tokens contained by this token.
         *
         * This will be a token stream if the pattern matched also defined an `inside` grammar.
         *
         * @type {string | TokenStream}
         * @public
         */
        this.content = content;
        /**
         * The alias(es) of the token.
         *
         * @type {string|string[]}
         * @see GrammarToken
         * @public
         */
        this.alias = alias;
        // Copy of the full string this token was created from
        this.length = (matchedStr || '').length | 0;
    }

    /**
     * A token stream is an array of strings and {@link Token Token} objects.
     *
     * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
     * them.
     *
     * 1. No adjacent strings.
     * 2. No empty strings.
     *
     *    The only exception here is the token stream that only contains the empty string and nothing else.
     *
     * @typedef {Array<string | Token>} TokenStream
     * @global
     * @public
     */

    /**
     * Converts the given token or token stream to an HTML representation.
     *
     * The following hooks will be run:
     * 1. `wrap`: On each {@link Token}.
     *
     * @param {string | Token | TokenStream} o The token or token stream to be converted.
     * @param {string} language The name of current language.
     * @returns {string} The HTML representation of the token or token stream.
     * @memberof Token
     * @static
     */
    Token.stringify = function stringify(o, language) {
        if (typeof o == 'string') {
            return o;
        }
        if (Array.isArray(o)) {
            var s = '';
            o.forEach(function (e) {
                s += stringify(e, language);
            });
            return s;
        }

        var env = {
            type: o.type,
            content: stringify(o.content, language),
            tag: 'span',
            classes: ['token', o.type],
            attributes: {},
            language: language
        };

        var aliases = o.alias;
        if (aliases) {
            if (Array.isArray(aliases)) {
                Array.prototype.push.apply(env.classes, aliases);
            } else {
                env.classes.push(aliases);
            }
        }

        _.hooks.run('wrap', env);

        var attributes = '';
        for (var name in env.attributes) {
            attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
        }

        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
    };

    /**
     * @param {RegExp} pattern
     * @param {number} pos
     * @param {string} text
     * @param {boolean} lookbehind
     * @returns {RegExpExecArray | null}
     */
    function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
            // change the match to remove the text matched by the Prism lookbehind group
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
        }
        return match;
    }

    /**
     * @param {string} text
     * @param {LinkedList<string | Token>} tokenList
     * @param {any} grammar
     * @param {LinkedListNode<string | Token>} startNode
     * @param {number} startPos
     * @param {RematchOptions} [rematch]
     * @returns {void}
     * @private
     *
     * @typedef RematchOptions
     * @property {string} cause
     * @property {number} reach
     */
    function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
                continue;
            }

            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];

            for (var j = 0; j < patterns.length; ++j) {
                if (rematch && rematch.cause == token + ',' + j) {
                    return;
                }

                var patternObj = patterns[j];
                var inside = patternObj.inside;
                var lookbehind = !!patternObj.lookbehind;
                var greedy = !!patternObj.greedy;
                var alias = patternObj.alias;

                if (greedy && !patternObj.pattern.global) {
                    // Without the global flag, lastIndex won't work
                    var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                    patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
                }

                /** @type {RegExp} */
                var pattern = patternObj.pattern || patternObj;

                for ( // iterate the token list and keep track of the current token/string position
                    var currentNode = startNode.next, pos = startPos;
                    currentNode !== tokenList.tail;
                    pos += currentNode.value.length, currentNode = currentNode.next
                ) {

                    if (rematch && pos >= rematch.reach) {
                        break;
                    }

                    var str = currentNode.value;

                    if (tokenList.length > text.length) {
                        // Something went terribly wrong, ABORT, ABORT!
                        return;
                    }

                    if (str instanceof Token) {
                        continue;
                    }

                    var removeCount = 1; // this is the to parameter of removeBetween
                    var match;

                    if (greedy) {
                        match = matchPattern(pattern, pos, text, lookbehind);
                        if (!match || match.index >= text.length) {
                            break;
                        }

                        var from = match.index;
                        var to = match.index + match[0].length;
                        var p = pos;

                        // find the node that contains the match
                        p += currentNode.value.length;
                        while (from >= p) {
                            currentNode = currentNode.next;
                            p += currentNode.value.length;
                        }
                        // adjust pos (and p)
                        p -= currentNode.value.length;
                        pos = p;

                        // the current node is a Token, then the match starts inside another Token, which is invalid
                        if (currentNode.value instanceof Token) {
                            continue;
                        }

                        // find the last node which is affected by this match
                        for (
                            var k = currentNode;
                            k !== tokenList.tail && (p < to || typeof k.value === 'string');
                            k = k.next
                        ) {
                            removeCount++;
                            p += k.value.length;
                        }
                        removeCount--;

                        // replace with the new match
                        str = text.slice(pos, p);
                        match.index -= pos;
                    } else {
                        match = matchPattern(pattern, 0, str, lookbehind);
                        if (!match) {
                            continue;
                        }
                    }

                    // eslint-disable-next-line no-redeclare
                    var from = match.index;
                    var matchStr = match[0];
                    var before = str.slice(0, from);
                    var after = str.slice(from + matchStr.length);

                    var reach = pos + str.length;
                    if (rematch && reach > rematch.reach) {
                        rematch.reach = reach;
                    }

                    var removeFrom = currentNode.prev;

                    if (before) {
                        removeFrom = addAfter(tokenList, removeFrom, before);
                        pos += before.length;
                    }

                    removeRange(tokenList, removeFrom, removeCount);

                    var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                    currentNode = addAfter(tokenList, removeFrom, wrapped);

                    if (after) {
                        addAfter(tokenList, currentNode, after);
                    }

                    if (removeCount > 1) {
                        // at least one Token object was removed, so we have to do some rematching
                        // this can only happen if the current pattern is greedy

                        /** @type {RematchOptions} */
                        var nestedRematch = {
                            cause: token + ',' + j,
                            reach: reach
                        };
                        matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

                        // the reach might have been extended because of the rematching
                        if (rematch && nestedRematch.reach > rematch.reach) {
                            rematch.reach = nestedRematch.reach;
                        }
                    }
                }
            }
        }
    }

    /**
     * @typedef LinkedListNode
     * @property {T} value
     * @property {LinkedListNode<T> | null} prev The previous node.
     * @property {LinkedListNode<T> | null} next The next node.
     * @template T
     * @private
     */

    /**
     * @template T
     * @private
     */
    function LinkedList() {
        /** @type {LinkedListNode<T>} */
        var head = {value: null, prev: null, next: null};
        /** @type {LinkedListNode<T>} */
        var tail = {value: null, prev: head, next: null};
        head.next = tail;

        /** @type {LinkedListNode<T>} */
        this.head = head;
        /** @type {LinkedListNode<T>} */
        this.tail = tail;
        this.length = 0;
    }

    /**
     * Adds a new node with the given value to the list.
     *
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {T} value
     * @returns {LinkedListNode<T>} The added node.
     * @template T
     */
    function addAfter(list, node, value) {
        // assumes that node != list.tail && values.length >= 0
        var next = node.next;

        var newNode = {value: value, prev: node, next: next};
        node.next = newNode;
        next.prev = newNode;
        list.length++;

        return newNode;
    }

    /**
     * Removes `count` nodes after the given node. The given node will not be removed.
     *
     * @param {LinkedList<T>} list
     * @param {LinkedListNode<T>} node
     * @param {number} count
     * @template T
     */
    function removeRange(list, node, count) {
        var next = node.next;
        for (var i = 0; i < count && next !== list.tail; i++) {
            next = next.next;
        }
        node.next = next;
        next.prev = node;
        list.length -= i;
    }

    /**
     * @param {LinkedList<T>} list
     * @returns {T[]}
     * @template T
     */
    function toArray(list) {
        var array = [];
        var node = list.head.next;
        while (node !== list.tail) {
            array.push(node.value);
            node = node.next;
        }
        return array;
    }


    if (!_self.document) {
        if (!_self.addEventListener) {
            // in Node.js
            return _;
        }

        if (!_.disableWorkerMessageHandler) {
            // In worker
            _self.addEventListener('message', function (evt) {
                var message = JSON.parse(evt.data);
                var lang = message.language;
                var code = message.code;
                var immediateClose = message.immediateClose;

                _self.postMessage(_.highlight(code, _.languages[lang], lang));
                if (immediateClose) {
                    _self.close();
                }
            }, false);
        }

        return _;
    }

    // Get current script and highlight
    var script = _.util.currentScript();

    if (script) {
        _.filename = script.src;

        if (script.hasAttribute('data-manual')) {
            _.manual = true;
        }
    }

    function highlightAutomaticallyCallback() {
        if (!_.manual) {
            _.highlightAll();
        }
    }

    if (!_.manual) {
        // If the document state is "loading", then we'll use DOMContentLoaded.
        // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
        // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
        // might take longer one animation frame to execute which can create a race condition where only some plugins have
        // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
        // See https://github.com/PrismJS/prism/issues/2102
        var readyState = document.readyState;
        if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
            document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
        } else {
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
                window.setTimeout(highlightAutomaticallyCallback, 16);
            }
        }
    }

    return _;

}(_self));

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
    global.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
    'comment': {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
    },
    'prolog': {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
    },
    'doctype': {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
            'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: true,
                greedy: true,
                inside: null // see below
            },
            'string': {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: true
            },
            'punctuation': /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/i,
            'name': /[^\s<>'"]+/
        }
    },
    'cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
    },
    'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
            'tag': {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    'punctuation': /^<\/?/,
                    'namespace': /^[^\s>\/:]+:/
                }
            },
            'special-attr': [],
            'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    'punctuation': [
                        {
                            pattern: /^=/,
                            alias: 'attr-equals'
                        },
                        {
                            pattern: /^(\s*)["']|["']$/,
                            lookbehind: true
                        }
                    ]
                }
            },
            'punctuation': /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {
                    'namespace': /^[^\s>\/:]+:/
                }
            }

        }
    },
    'entity': [
        {
            pattern: /&[\da-z]{1,8};/i,
            alias: 'named-entity'
        },
        /&#x?[\da-f]{1,8};/i
    ]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

    if (env.type === 'entity') {
        env.attributes['title'] = env.content.replace(/&amp;/, '&');
    }
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
        var includedCdataInside = {};
        includedCdataInside['language-' + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

        var inside = {
            'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: includedCdataInside
            }
        };
        inside['language-' + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[lang]
        };

        var def = {};
        def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
                return tagName;
            }), 'i'),
            lookbehind: true,
            greedy: true,
            inside: inside
        };

        Prism.languages.insertBefore('markup', 'cdata', def);
    }
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function (attrName, lang) {
        Prism.languages.markup.tag.inside['special-attr'].push({
            pattern: RegExp(
                /(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                'i'
            ),
            lookbehind: true,
            inside: {
                'attr-name': /^[^\s=]+/,
                'attr-value': {
                    pattern: /=[\s\S]+/,
                    inside: {
                        'value': {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: true,
                            alias: [lang, 'language-' + lang],
                            inside: Prism.languages[lang]
                        },
                        'punctuation': [
                            {
                                pattern: /^=/,
                                alias: 'attr-equals'
                            },
                            /"|'/
                        ]
                    }
                }
            }
        });
    }
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

    Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
            pattern: RegExp('@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + string.source + ')*?' + /(?:;|(?=\s*\{))/.source),
            inside: {
                'rule': /^@[\w-]+/,
                'selector-function-argument': {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: true,
                    alias: 'selector'
                },
                'keyword': {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: true
                }
                // See rest below
            }
        },
        'url': {
            // https://drafts.csswg.org/css-values-3/#urls
            pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
            greedy: true,
            inside: {
                'function': /^url/i,
                'punctuation': /^\(|\)$/,
                'string': {
                    pattern: RegExp('^' + string.source + '$'),
                    alias: 'url'
                }
            }
        },
        'selector': {
            pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
            lookbehind: true
        },
        'string': {
            pattern: string,
            greedy: true
        },
        'property': {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
        },
        'important': /!important\b/i,
        'function': {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
        },
        'punctuation': /[(){};:,]/
    };

    Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

    var markup = Prism.languages.markup;
    if (markup) {
        markup.tag.addInlined('style', 'css');
        markup.tag.addAttribute('style', 'css');
    }

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
    'comment': [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
        }
    ],
    'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    'class-name': {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
            'punctuation': /[.\\]/
        }
    },
    'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    'boolean': /\b(?:false|true)\b/,
    'function': /\b\w+(?=\()/,
    'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
        Prism.languages.clike['class-name'],
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: true
        }
    ],
    'keyword': [
        {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
        },
        {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
        },
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    'number': {
        pattern: RegExp(
            /(^|[^\w$])/.source +
            '(?:' +
            (
                // constant
                /NaN|Infinity/.source +
                '|' +
                // binary integer
                /0[bB][01]+(?:_[01]+)*n?/.source +
                '|' +
                // octal integer
                /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                '|' +
                // hexadecimal integer
                /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                '|' +
                // decimal bigint
                /\d+(?:_\d+)*n/.source +
                '|' +
                // decimal number (integer or float) but no bigint
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
            ) +
            ')' +
            /(?![\w$])/.source
        ),
        lookbehind: true
    },
    'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
        pattern: RegExp(
            // lookbehind
            // eslint-disable-next-line regexp/no-dupe-characters-character-class
            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
            // Regex pattern:
            // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
            // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
            // with the only syntax, so we have to define 2 different regex patterns.
            /\//.source +
            '(?:' +
            /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
            '|' +
            // `v` flag syntax. This supports 3 levels of nested character classes.
            /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
            ')' +
            // lookahead
            /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: true,
        greedy: true,
        inside: {
            'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: true,
                alias: 'language-regex',
                inside: Prism.languages.regex
            },
            'regex-delimiter': /^\/|\/$/,
            'regex-flags': /^[a-z]+$/,
        }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function'
    },
    'parameter': [
        {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism.languages.javascript
        },
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism.languages.javascript
        },
        {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism.languages.javascript
        },
        {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism.languages.javascript
        }
    ],
    'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
    'hashbang': {
        pattern: /^#!.*/,
        greedy: true,
        alias: 'comment'
    },
    'template-string': {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
            'template-punctuation': {
                pattern: /^`|`$/,
                alias: 'string'
            },
            'interpolation': {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: true,
                inside: {
                    'interpolation-punctuation': {
                        pattern: /^\$\{|\}$/,
                        alias: 'punctuation'
                    },
                    rest: Prism.languages.javascript
                }
            },
            'string': /[\s\S]+/
        }
    },
    'string-property': {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: 'property'
    }
});

Prism.languages.insertBefore('javascript', 'operator', {
    'literal-property': {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: 'property'
    },
});

if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript');

    // add attribute support for all DOM events.
    // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
    Prism.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
        'javascript'
    );
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {

    if (typeof Prism === 'undefined' || typeof document === 'undefined') {
        return;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

    var LOADING_MESSAGE = 'Loading…';
    var FAILURE_MESSAGE = function (status, message) {
        return '✖ Error ' + status + ' while fetching file: ' + message;
    };
    var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

    var EXTENSIONS = {
        'js': 'javascript',
        'py': 'python',
        'rb': 'ruby',
        'ps1': 'powershell',
        'psm1': 'powershell',
        'sh': 'bash',
        'bat': 'batch',
        'h': 'c',
        'tex': 'latex'
    };

    var STATUS_ATTR = 'data-src-status';
    var STATUS_LOADING = 'loading';
    var STATUS_LOADED = 'loaded';
    var STATUS_FAILED = 'failed';

    var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
        + ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

    /**
     * Loads the given file.
     *
     * @param {string} src The URL or path of the source file to load.
     * @param {(result: string) => void} success
     * @param {(reason: string) => void} error
     */
    function loadFile(src, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', src, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status < 400 && xhr.responseText) {
                    success(xhr.responseText);
                } else {
                    if (xhr.status >= 400) {
                        error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
                    } else {
                        error(FAILURE_EMPTY_MESSAGE);
                    }
                }
            }
        };
        xhr.send(null);
    }

    /**
     * Parses the given range.
     *
     * This returns a range with inclusive ends.
     *
     * @param {string | null | undefined} range
     * @returns {[number, number | undefined] | undefined}
     */
    function parseRange(range) {
        var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
        if (m) {
            var start = Number(m[1]);
            var comma = m[2];
            var end = m[3];

            if (!comma) {
                return [start, start];
            }
            if (!end) {
                return [start, undefined];
            }
            return [start, Number(end)];
        }
        return undefined;
    }

    Prism.hooks.add('before-highlightall', function (env) {
        env.selector += ', ' + SELECTOR;
    });

    Prism.hooks.add('before-sanity-check', function (env) {
        var pre = /** @type {HTMLPreElement} */ (env.element);
        if (pre.matches(SELECTOR)) {
            env.code = ''; // fast-path the whole thing and go to complete

            pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

            // add code element with loading message
            var code = pre.appendChild(document.createElement('CODE'));
            code.textContent = LOADING_MESSAGE;

            var src = pre.getAttribute('data-src');

            var language = env.language;
            if (language === 'none') {
                // the language might be 'none' because there is no language set;
                // in this case, we want to use the extension as the language
                var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
                language = EXTENSIONS[extension] || extension;
            }

            // set language classes
            Prism.util.setLanguage(code, language);
            Prism.util.setLanguage(pre, language);

            // preload the language
            var autoloader = Prism.plugins.autoloader;
            if (autoloader) {
                autoloader.loadLanguages(language);
            }

            // load file
            loadFile(
                src,
                function (text) {
                    // mark as loaded
                    pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

                    // handle data-range
                    var range = parseRange(pre.getAttribute('data-range'));
                    if (range) {
                        var lines = text.split(/\r\n?|\n/g);

                        // the range is one-based and inclusive on both ends
                        var start = range[0];
                        var end = range[1] == null ? lines.length : range[1];

                        if (start < 0) {
                            start += lines.length;
                        }
                        start = Math.max(0, Math.min(start - 1, lines.length));
                        if (end < 0) {
                            end += lines.length;
                        }
                        end = Math.max(0, Math.min(end, lines.length));

                        text = lines.slice(start, end).join('\n');

                        // add data-start for line numbers
                        if (!pre.hasAttribute('data-start')) {
                            pre.setAttribute('data-start', String(start + 1));
                        }
                    }

                    // highlight code
                    code.textContent = text;
                    Prism.highlightElement(code);
                },
                function (error) {
                    // mark as failed
                    pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

                    code.textContent = error;
                }
            );
        }
    });

    Prism.plugins.fileHighlight = {
        /**
         * Executes the File Highlight plugin for all matching `pre` elements under the given container.
         *
         * Note: Elements which are already loaded or currently loading will not be touched by this method.
         *
         * @param {ParentNode} [container=document]
         */
        highlight: function highlight(container) {
            var elements = (container || document).querySelectorAll(SELECTOR);

            for (var i = 0, element; (element = elements[i++]);) {
                Prism.highlightElement(element);
            }
        }
    };

    var logged = false;
    /** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
    Prism.fileHighlight = function () {
        if (!logged) {
            console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
            logged = true;
        }
        Prism.plugins.fileHighlight.highlight.apply(this, arguments);
    };

}());
/*! * include clipboard ( for copy )  */
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function () {
    return n = {
        686: function (t, e, n) {
            "use strict";
            n.d(e, {
                default: function () {
                    return b
                }
            });
            var e = n(279), i = n.n(e), e = n(370), u = n.n(e), e = n(817), r = n.n(e);

            function c(t) {
                try {
                    return document.execCommand(t)
                } catch (t) {
                    return
                }
            }

            var a = function (t) {
                t = r()(t);
                return c("cut"), t
            };

            function o(t, e) {
                var n, o,
                    t = (n = t, o = "rtl" === document.documentElement.getAttribute("dir"), (t = document.createElement("textarea")).style.fontSize = "12pt", t.style.border = "0", t.style.padding = "0", t.style.margin = "0", t.style.position = "absolute", t.style[o ? "right" : "left"] = "-9999px", o = window.pageYOffset || document.documentElement.scrollTop, t.style.top = "".concat(o, "px"), t.setAttribute("readonly", ""), t.value = n, t);
                return e.container.appendChild(t), e = r()(t), c("copy"), t.remove(), e
            }

            var f = function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {container: document.body},
                    n = "";
                return "string" == typeof t ? n = o(t, e) : t instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == t ? void 0 : t.type) ? n = o(t.value, e) : (n = r()(t), c("copy")), n
            };

            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            var s = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, e = t.action,
                    n = void 0 === e ? "copy" : e, o = t.container, e = t.target, t = t.text;
                if ("copy" !== n && "cut" !== n) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (void 0 !== e) {
                    if (!e || "object" !== l(e) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === n && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === n && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                }
                return t ? f(t, {container: o}) : e ? "cut" === n ? a(e) : f(e, {container: o}) : void 0
            };

            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function y(t, e) {
                return (y = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function h(n) {
                var o = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                        })), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var t, e = v(n);
                    return t = o ? (t = v(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), e = this, !(t = t) || "object" !== p(t) && "function" != typeof t ? function (t) {
                        if (void 0 !== t) return t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(e) : t
                }
            }

            function v(t) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function m(t, e) {
                t = "data-clipboard-".concat(t);
                if (e.hasAttribute(t)) return e.getAttribute(t)
            }

            var b = function () {
                !function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && y(t, e)
                }(r, i());
                var t, e, n, o = h(r);

                function r(t, e) {
                    var n;
                    return function (t) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this), (n = o.call(this)).resolveOptions(e), n.listenClick(t), n
                }

                return t = r, n = [{
                    key: "copy", value: function (t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {container: document.body};
                        return f(t, e)
                    }
                }, {
                    key: "cut", value: function (t) {
                        return a(t)
                    }
                }, {
                    key: "isSupported", value: function () {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            t = "string" == typeof t ? [t] : t, e = !!document.queryCommandSupported;
                        return t.forEach(function (t) {
                            e = e && !!document.queryCommandSupported(t)
                        }), e
                    }
                }], (e = [{
                    key: "resolveOptions", value: function () {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === p(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick", value: function (t) {
                        var e = this;
                        this.listener = u()(t, "click", function (t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick", value: function (t) {
                        var e = t.delegateTarget || t.currentTarget, n = this.action(e) || "copy",
                            t = s({action: n, container: this.container, target: this.target(e), text: this.text(e)});
                        this.emit(t ? "success" : "error", {
                            action: n,
                            text: t,
                            trigger: e,
                            clearSelection: function () {
                                e && e.focus(), window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction", value: function (t) {
                        return m("action", t)
                    }
                }, {
                    key: "defaultTarget", value: function (t) {
                        t = m("target", t);
                        if (t) return document.querySelector(t)
                    }
                }, {
                    key: "defaultText", value: function (t) {
                        return m("text", t)
                    }
                }, {
                    key: "destroy", value: function () {
                        this.listener.destroy()
                    }
                }]) && d(t.prototype, e), n && d(t, n), r
            }()
        }, 828: function (t) {
            var e;
            "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function (t, e) {
                for (; t && 9 !== t.nodeType;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
        }, 438: function (t, e, n) {
            var u = n(828);

            function i(t, e, n, o, r) {
                var i = function (e, n, t, o) {
                    return function (t) {
                        t.delegateTarget = u(t.target, n), t.delegateTarget && o.call(e, t)
                    }
                }.apply(this, arguments);
                return t.addEventListener(n, i, r), {
                    destroy: function () {
                        t.removeEventListener(n, i, r)
                    }
                }
            }

            t.exports = function (t, e, n, o, r) {
                return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
                    return i(t, e, n, o, r)
                }))
            }
        }, 879: function (t, n) {
            n.node = function (t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, n.nodeList = function (t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            }, n.string = function (t) {
                return "string" == typeof t || t instanceof String
            }, n.fn = function (t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }, 370: function (t, e, n) {
            var f = n(879), l = n(438);
            t.exports = function (t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!f.string(e)) throw new TypeError("Second argument must be a String");
                if (!f.fn(n)) throw new TypeError("Third argument must be a Function");
                if (f.node(t)) return c = e, a = n, (u = t).addEventListener(c, a), {
                    destroy: function () {
                        u.removeEventListener(c, a)
                    }
                };
                if (f.nodeList(t)) return o = t, r = e, i = n, Array.prototype.forEach.call(o, function (t) {
                    t.addEventListener(r, i)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(o, function (t) {
                            t.removeEventListener(r, i)
                        })
                    }
                };
                if (f.string(t)) return t = t, e = e, n = n, l(document.body, t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var o, r, i, u, c, a
            }
        }, 817: function (t) {
            t.exports = function (t) {
                var e,
                    n = "SELECT" === t.nodeName ? (t.focus(), t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), e || t.removeAttribute("readonly"), t.value) : (t.hasAttribute("contenteditable") && t.focus(), n = window.getSelection(), (e = document.createRange()).selectNodeContents(t), n.removeAllRanges(), n.addRange(e), n.toString());
                return n
            }
        }, 279: function (t) {
            function e() {
            }

            e.prototype = {
                on: function (t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({fn: e, ctx: n}), this
                }, once: function (t, e, n) {
                    var o = this;

                    function r() {
                        o.off(t, r), e.apply(n, arguments)
                    }

                    return r._ = e, this.on(t, r, n)
                }, emit: function (t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) n[o].fn.apply(n[o].ctx, e);
                    return this
                }, off: function (t, e) {
                    var n = this.e || (this.e = {}), o = n[t], r = [];
                    if (o && e) for (var i = 0, u = o.length; i < u; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                    return r.length ? n[t] = r : delete n[t], this
                }
            }, t.exports = e, t.exports.TinyEmitter = e
        }
    }, r = {}, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, {a: e}), e
    }, o.d = function (t, e) {
        for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {enumerable: !0, get: e[n]})
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o(686).default;

    function o(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {exports: {}};
        return n[t](e, e.exports, o), e.exports
    }

    var n, r
});/*! * include custom functions  */
/*! * Name: TynApp
  * Version: v1.0.0
  * Author: ILIASH HOSAIN.
  * Copyright: Themeyn 2023.
  * URI: https://themeforest.net/user/themeyn */
let TynApp = (function (win, doc) {
    "use strict";
    let TynApp = {
        meta: {
            name: "TynApp", version: "1.0.0", author: "Themeyn"
        },
        app: {
            name: "ConnectMe", version: "1.0",
        }
    }

    function Ready(callback) {
        doc.addEventListener('DOMContentLoaded', callback, false);
    }

    function Load(callback) {
        win.addEventListener('load', callback, false);
    }

    function Resize(callback, selector) {
        selector = (typeof selector === typeof undefined) ? window : selector;
        selector.addEventListener('resize', callback)
    }

    TynApp.Ready = Ready;
    TynApp.Load = Load;
    TynApp.Resize = Resize;

    return TynApp;
}(window, document));

TynApp = function (TynApp) {
    "use strict";

    //Global Properties
    TynApp.Body = document.querySelector('body');
    TynApp.Style = function (name, value) {
        if (name[0] != '-') name = '--' + name //allow passing with or without --
        if (value) document.documentElement.style.setProperty(name, value)
        return getComputedStyle(document.documentElement).getPropertyValue(name);
    }

    TynApp.Custom = {}
    TynApp.BS = {}
    TynApp.Plugins = {}
    TynApp.Appbar = {}
    TynApp.Page = {
        Height: window.innerHeight,
        Width: window.innerWidth,
    }
    TynApp.Breakpoints = {
        sm: parseInt(TynApp.Style('--bs-breakpoint-sm')),
        md: parseInt(TynApp.Style('--bs-breakpoint-md')),
        lg: parseInt(TynApp.Style('--bs-breakpoint-lg')),
        xl: parseInt(TynApp.Style('--bs-breakpoint-xl')),
        xxl: parseInt(TynApp.Style('--bs-breakpoint-xxl')),
    }
    TynApp.Color = {
        blue: TynApp.Style('--bs-blue'),
    }
    TynApp.Dark = TynApp.Body.classList.contains('dark-mode')
    TynApp.isRTL = TynApp.Body.getAttribute('dir') === 'rtl' ? true : false
    TynApp.hasTouch = ("ontouchstart" in document.documentElement) ? true : false
    TynApp.onMobile = (navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i)) ? true : false

    TynApp.Update = function () {
        TynApp.Page = {
            Height: window.innerHeight,
            Width: window.innerWidth,
        }
    }
    //get parent Elements
    TynApp.getParents = function (el, selector, filter) {
        let parentSelector = (selector === undefined) ? document : document.querySelector(selector);
        var parents = [];
        var pNode = el.parentNode;
        while (pNode !== parentSelector) {
            var element = pNode;
            if (filter === undefined) {
                parents.push(element);
            } else {
                element.classList.contains(filter) && parents.push(element);
            }
            pNode = element.parentNode;
        }
        return parents;
    }
    TynApp.Load(TynApp.Update);
    TynApp.Resize(TynApp.Update);

    return TynApp;
}(TynApp);