(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/config/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navigation",
    ()=>navigation
]);
const navigation = [
    {
        name: "Features",
        href: "#features"
    },
    {
        name: "How it Works",
        href: "#how-it-works"
    },
    {
        name: "Showcase",
        href: "#showcase"
    },
    {
        name: "Pricing",
        href: "#pricing"
    },
    {
        name: "FAQ",
        href: "#faq"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: "HubCapStickers",
    description: "Premium hand-made 3D reliability domed stickers for your wheels.",
    url: "https://hubcapstickers.com",
    ogImage: "https://hubcapstickers.com/og.jpg",
    links: {
        twitter: "https://twitter.com/hubcapstickers",
        github: "https://github.com/hubcapstickers"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wider uppercase", {
    variants: {
        variant: {
            default: "bg-red-600 text-white hover:bg-red-700 font-bebas tracking-widest",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-transparent hover:bg-white/10 hover:text-white border-white/20 text-white",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-12 px-6 py-2 text-lg",
            sm: "h-9 rounded-md px-3",
            lg: "h-14 rounded-md px-8 text-xl",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 45,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/01-Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navigation() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "fd693eedd962ece29821fccdb27f3d26428cd22d06ce2c881221b948906d3371") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fd693eedd962ece29821fccdb27f3d26428cd22d06ce2c881221b948906d3371";
    }
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Navigation[useEffect()]": ()=>{
                const handleScroll = {
                    "Navigation[useEffect() > handleScroll]": ()=>{
                        setScrolled(window.scrollY > 50);
                    }
                }["Navigation[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["Navigation[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const t2 = scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6";
    let t3;
    if ($[3] !== t2) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-300", t2);
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "text-3xl font-bebas tracking-widest text-white uppercase",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].name
        }, void 0, false, {
            fileName: "[project]/components/sections/01-Navigation.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden md:flex items-center gap-8",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].map(_NavigationNavigationMap)
        }, void 0, false, {
            fileName: "[project]/components/sections/01-Navigation.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "sm",
            className: "hidden md:flex bg-red-600 hover:bg-red-700 text-white font-bebas text-2xl tracking-wider px-6 py-2",
            children: "Order Now"
        }, void 0, false, {
            fileName: "[project]/components/sections/01-Navigation.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 flex items-center justify-between",
            children: [
                t4,
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "md:hidden text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 6h16M4 12h16m-7 6h7"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/01-Navigation.tsx",
                            lineNumber: 69,
                            columnNumber: 216
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/01-Navigation.tsx",
                        lineNumber: 69,
                        columnNumber: 137
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/01-Navigation.tsx",
                    lineNumber: 69,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/01-Navigation.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] !== t3) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t3,
            children: t7
        }, void 0, false, {
            fileName: "[project]/components/sections/01-Navigation.tsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    return t8;
}
_s(Navigation, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c = Navigation;
function _NavigationNavigationMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: item.href,
        className: "text-2xl font-bebas text-white/80 hover:text-white transition-colors uppercase tracking-widest",
        children: item.name
    }, item.name, false, {
        fileName: "[project]/components/sections/01-Navigation.tsx",
        lineNumber: 85,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useImageLoader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useImageLoader",
    ()=>useImageLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useImageLoader(frameCount) {
    _s();
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useImageLoader.useEffect": ()=>{
            let mounted = true;
            const loadedImages = [];
            let loadedCount = 0;
            const loadImages = {
                "useImageLoader.useEffect.loadImages": async ()=>{
                    // Pre-allocate array
                    loadedImages.length = frameCount;
                    const promises = Array.from({
                        length: frameCount
                    }, {
                        "useImageLoader.useEffect.loadImages.promises": (_, i)=>{
                            return new Promise({
                                "useImageLoader.useEffect.loadImages.promises": (resolve, reject)=>{
                                    const img = new Image();
                                    // Format: frame_00.webp ... frame_79.webp
                                    // i < 10 ? `0${i}` : `${i}`
                                    const frameIndex = i < 10 ? `0${i}` : `${i}`;
                                    img.src = `/scroll-frames/frame_${frameIndex}.webp`;
                                    img.onload = ({
                                        "useImageLoader.useEffect.loadImages.promises": ()=>{
                                            if (!mounted) return;
                                            loadedImages[i] = img;
                                            loadedCount++;
                                            setProgress(Math.round(loadedCount / frameCount * 100));
                                            resolve();
                                        }
                                    })["useImageLoader.useEffect.loadImages.promises"];
                                    img.onerror = ({
                                        "useImageLoader.useEffect.loadImages.promises": ()=>{
                                            console.error(`Failed to load frame ${i}`);
                                            resolve(); // Verify: resolve even on error to prevent hanging?
                                        }
                                    })["useImageLoader.useEffect.loadImages.promises"];
                                }
                            }["useImageLoader.useEffect.loadImages.promises"]);
                        }
                    }["useImageLoader.useEffect.loadImages.promises"]);
                    await Promise.all(promises);
                    if (mounted) {
                        setImages(loadedImages);
                        setLoading(false);
                    }
                }
            }["useImageLoader.useEffect.loadImages"];
            loadImages();
            return ({
                "useImageLoader.useEffect": ()=>{
                    mounted = false;
                }
            })["useImageLoader.useEffect"];
        }
    }["useImageLoader.useEffect"], [
        frameCount
    ]);
    return {
        images,
        loading,
        progress
    };
}
_s(useImageLoader, "Magdu6LUvg0cq8mMN7s+wT5Q0xM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config/heroContent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Text content synchronized with scroll frames
// progress: 0-1 (percentage of scroll)
__turbopack_context__.s([
    "heroContent",
    ()=>heroContent
]);
const heroContent = [
    {
        start: -0.1,
        end: 0.15,
        title: "CUSTOM. DOMED. PRECISE.",
        subtitle: "",
        position: "center"
    },
    {
        start: 0.20,
        end: 0.35,
        title: "4K Print Quality",
        subtitle: "Ultra-sharp details. If you can design it, we can print it.",
        position: "center"
    },
    {
        start: 0.40,
        end: 0.55,
        title: "Industrial Hold",
        subtitle: "Premium adhesive that stays put. Reliable performance, mile after mile.",
        position: "center"
    },
    {
        start: 0.60,
        end: 0.75,
        title: "Peace of Mind",
        subtitle: "5-Year Warranty. 30-Day Money Back Guarantee.",
        position: "center"
    },
    {
        start: 0.80,
        end: 0.95,
        title: "Your Wheels. Your Style.",
        subtitle: "Start your custom order today.",
        position: "center",
        isCta: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/02-HeroScrollAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroScrollAnimation",
    ()=>HeroScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useImageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useImageLoader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$heroContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/heroContent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function HeroScrollAnimation() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "6f5ce4212f2d4e78abcc536f7664fea29888dd4dee76128b4b53200cde48651a") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f5ce4212f2d4e78abcc536f7664fea29888dd4dee76128b4b53200cde48651a";
    }
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { images, loading, progress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useImageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageLoader"])(80);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const smoothProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(0, t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            0,
            0.1
        ];
        t2 = [
            1,
            0
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    const scrollIndicatorOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothProgress, t1, t2);
    let t3;
    let t4;
    if ($[4] !== smoothProgress) {
        t3 = ({
            "HeroScrollAnimation[useEffect()]": ()=>{
                const handleScroll = {
                    "HeroScrollAnimation[useEffect() > handleScroll]": ()=>{
                        if (!containerRef.current) {
                            return;
                        }
                        const container = containerRef.current;
                        const { top, height } = container.getBoundingClientRect();
                        const windowHeight = window.innerHeight;
                        const scrollDistance = height - windowHeight;
                        const scrolled = -top;
                        let prog = 0;
                        if (scrollDistance > 0) {
                            prog = Math.max(0, Math.min(1, scrolled / scrollDistance));
                        }
                        smoothProgress.set(prog);
                    }
                }["HeroScrollAnimation[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll);
                window.addEventListener("resize", handleScroll);
                handleScroll();
                return ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", handleScroll);
                };
            }
        })["HeroScrollAnimation[useEffect()]"];
        t4 = [
            smoothProgress
        ];
        $[4] = smoothProgress;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[7] !== images || $[8] !== loading || $[9] !== smoothProgress) {
        t5 = ({
            "HeroScrollAnimation[useEffect()]": ()=>{
                const canvas = canvasRef.current;
                if (!canvas) {
                    return;
                }
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    return;
                }
                const render = {
                    "HeroScrollAnimation[useEffect() > render]": (prog_0)=>{
                        if (images.length === 0 || loading) {
                            return;
                        }
                        const frameIndex = Math.min(79, Math.floor(prog_0 * 80));
                        const img = images[frameIndex];
                        if (!img) {
                            return;
                        }
                        const canvasRatio = canvas.width / canvas.height;
                        const imgRatio = img.width / img.height;
                        let drawWidth;
                        let drawHeight;
                        let offsetX = 0;
                        let offsetY = 0;
                        if (imgRatio > canvasRatio) {
                            drawHeight = canvas.height;
                            drawWidth = canvas.height * imgRatio;
                            offsetX = (canvas.width - drawWidth) / 2;
                        } else {
                            drawWidth = canvas.width;
                            drawHeight = canvas.width / imgRatio;
                            offsetY = (canvas.height - drawHeight) / 2;
                        }
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                    }
                }["HeroScrollAnimation[useEffect() > render]"];
                render(smoothProgress.get());
                const unsubscribe = smoothProgress.on("change", {
                    "HeroScrollAnimation[useEffect() > smoothProgress.on()]": (latest)=>{
                        requestAnimationFrame({
                            "HeroScrollAnimation[useEffect() > smoothProgress.on() > requestAnimationFrame()]": ()=>render(latest)
                        }["HeroScrollAnimation[useEffect() > smoothProgress.on() > requestAnimationFrame()]"]);
                    }
                }["HeroScrollAnimation[useEffect() > smoothProgress.on()]"]);
                const handleResize = {
                    "HeroScrollAnimation[useEffect() > handleResize]": ()=>{
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                        render(smoothProgress.get());
                    }
                }["HeroScrollAnimation[useEffect() > handleResize]"];
                window.addEventListener("resize", handleResize);
                handleResize();
                return ()=>{
                    unsubscribe();
                    window.removeEventListener("resize", handleResize);
                };
            }
        })["HeroScrollAnimation[useEffect()]"];
        t6 = [
            images,
            loading,
            smoothProgress,
            80
        ];
        $[7] = images;
        $[8] = loading;
        $[9] = smoothProgress;
        $[10] = t5;
        $[11] = t6;
    } else {
        t5 = $[10];
        t6 = $[11];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    if (loading) {
        let t7;
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-10 w-10 animate-spin text-red-600"
            }, void 0, false, {
                fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
                lineNumber: 172,
                columnNumber: 12
            }, this);
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        let t8;
        if ($[13] !== progress) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen w-full flex items-center justify-center bg-black text-white flex-col gap-4",
                children: [
                    t7,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bebas text-xl tracking-widest",
                        children: [
                            "Loading Experience... ",
                            progress,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
                        lineNumber: 179,
                        columnNumber: 117
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
                lineNumber: 179,
                columnNumber: 12
            }, this);
            $[13] = progress;
            $[14] = t8;
        } else {
            t8 = $[14];
        }
        return t8;
    }
    let t7;
    let t8;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "h-full w-full object-cover"
        }, void 0, false, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 190,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 191,
            columnNumber: 10
        }, this);
        $[15] = t7;
        $[16] = t8;
    } else {
        t7 = $[15];
        t8 = $[16];
    }
    let t9;
    if ($[17] !== scrollIndicatorOpacity) {
        t9 = {
            opacity: scrollIndicatorOpacity
        };
        $[17] = scrollIndicatorOpacity;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs uppercase tracking-widest opacity-70",
            children: "Scroll to Explore"
        }, void 0, false, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "animate-bounce"
        }, void 0, false, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t11;
    } else {
        t10 = $[19];
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen w-full overflow-hidden",
            children: [
                t7,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    style: t9,
                    className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2",
                    children: [
                        t10,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
                    lineNumber: 221,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[21] = t9;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== smoothProgress) {
        t13 = __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$heroContent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroContent"].map({
            "HeroScrollAnimation[heroContent.map()]": (item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroTextOverlay, {
                    item: item,
                    scrollProgress: smoothProgress
                }, index, false, {
                    fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
                    lineNumber: 230,
                    columnNumber: 66
                }, this)
        }["HeroScrollAnimation[heroContent.map()]"]);
        $[23] = smoothProgress;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== t12 || $[26] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "relative h-[500vh] bg-black",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[25] = t12;
        $[26] = t13;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    return t14;
}
_s(HeroScrollAnimation, "kaU5xxRj/DtyRK64UYgep1TAC6I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useImageLoader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImageLoader"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = HeroScrollAnimation;
function HeroTextOverlay(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(36);
    if ($[0] !== "6f5ce4212f2d4e78abcc536f7664fea29888dd4dee76128b4b53200cde48651a") {
        for(let $i = 0; $i < 36; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f5ce4212f2d4e78abcc536f7664fea29888dd4dee76128b4b53200cde48651a";
    }
    const { item, scrollProgress } = t0;
    const t1 = (item.start + item.end) / 2;
    let t2;
    if ($[1] !== item.end || $[2] !== item.start || $[3] !== t1) {
        t2 = [
            item.start,
            t1,
            item.end
        ];
        $[1] = item.end;
        $[2] = item.start;
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            0,
            1,
            0
        ];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollProgress, t2, t3);
    let t4;
    if ($[6] !== item.end || $[7] !== item.start) {
        t4 = [
            item.start,
            item.end
        ];
        $[6] = item.end;
        $[7] = item.start;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            50,
            -50
        ];
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollProgress, t4, t5);
    let T0;
    let t6;
    let t7;
    if ($[10] !== item.position) {
        const positionClasses = {
            left: "items-start text-left pl-8 md:pl-24",
            right: "items-end text-right pr-8 md:pr-24",
            center: "items-center text-center px-4"
        };
        t7 = "fixed inset-0 pointer-events-none flex flex-col justify-center z-10";
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("container max-w-6xl mx-auto flex flex-col", positionClasses[item.position]);
        $[10] = item.position;
        $[11] = T0;
        $[12] = t6;
        $[13] = t7;
    } else {
        T0 = $[11];
        t6 = $[12];
        t7 = $[13];
    }
    let t8;
    if ($[14] !== opacity || $[15] !== y) {
        t8 = {
            opacity,
            y
        };
        $[14] = opacity;
        $[15] = y;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            transform: "scaleX(0.85)",
            transformOrigin: "center"
        };
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== item.title) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-6xl md:text-[20rem] font-bebas text-white drop-shadow-2xl leading-none whitespace-nowrap tracking-tighter",
            style: t9,
            children: item.title
        }, void 0, false, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 341,
            columnNumber: 11
        }, this);
        $[18] = item.title;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== item.subtitle) {
        t11 = item.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-2xl md:text-4xl text-white/90 max-w-2xl font-light mt-6 mb-10 drop-shadow-md text-center",
            children: item.subtitle
        }, void 0, false, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 349,
            columnNumber: 28
        }, this);
        $[20] = item.subtitle;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== item.isCta) {
        t12 = item.isCta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 pointer-events-auto justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "lg",
                className: "bg-red-600 hover:bg-red-700 text-white rounded-full px-8 font-bebas text-2xl tracking-wider",
                children: "Learn More"
            }, void 0, false, {
                fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
                lineNumber: 357,
                columnNumber: 88
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 357,
            columnNumber: 25
        }, this);
        $[22] = item.isCta;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t10 || $[25] !== t11 || $[26] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 flex flex-col items-center text-center",
            children: [
                t10,
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t11;
        $[26] = t12;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== T0 || $[29] !== t13 || $[30] !== t6 || $[31] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t6,
            style: t8,
            children: t13
        }, void 0, false, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[28] = T0;
        $[29] = t13;
        $[30] = t6;
        $[31] = t8;
        $[32] = t14;
    } else {
        t14 = $[32];
    }
    let t15;
    if ($[33] !== t14 || $[34] !== t7) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t14
        }, void 0, false, {
            fileName: "[project]/components/sections/02-HeroScrollAnimation.tsx",
            lineNumber: 386,
            columnNumber: 11
        }, this);
        $[33] = t14;
        $[34] = t7;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    return t15;
}
_s1(HeroTextOverlay, "nNLXSSmMeyHkLcxJU8DbAuS8h/Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c1 = HeroTextOverlay;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeroScrollAnimation");
__turbopack_context__.k.register(_c1, "HeroTextOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/InfiniteMarquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfiniteMarquee",
    ()=>InfiniteMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function InfiniteMarquee(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "6ad5c6c1e4fc1ebca86d0ec3c3d339cad6a283792093b2107dae115fdf0b633a") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ad5c6c1e4fc1ebca86d0ec3c3d339cad6a283792093b2107dae115fdf0b633a";
    }
    const { children, className, speed: t1, direction: t2, pauseOnHover: t3, gap: t4 } = t0;
    const speed = t1 === undefined ? 40 : t1;
    const direction = t2 === undefined ? "left" : t2;
    const pauseOnHover = t3 === undefined ? true : t3;
    const gap = t4 === undefined ? 48 : t4;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t5;
    if ($[1] !== className) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden relative flex w-full", className);
        $[1] = className;
        $[2] = t5;
    } else {
        t5 = $[2];
    }
    const t6 = pauseOnHover && "hover:[animation-play-state:paused]";
    const t7 = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";
    let t8;
    if ($[3] !== t6 || $[4] !== t7) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-w-full shrink-0 items-center justify-around", t6, t7);
        $[3] = t6;
        $[4] = t7;
        $[5] = t8;
    } else {
        t8 = $[5];
    }
    const t9 = `${gap}px`;
    const t10 = `${speed}s`;
    let t11;
    if ($[6] !== t10 || $[7] !== t9) {
        t11 = {
            gap: t9,
            animationDuration: t10
        };
        $[6] = t10;
        $[7] = t9;
        $[8] = t11;
    } else {
        t11 = $[8];
    }
    let t12;
    if ($[9] !== children || $[10] !== t11 || $[11] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            style: t11,
            children: [
                children,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/InfiniteMarquee.tsx",
            lineNumber: 70,
            columnNumber: 11
        }, this);
        $[9] = children;
        $[10] = t11;
        $[11] = t8;
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    const t13 = pauseOnHover && "hover:[animation-play-state:paused]";
    const t14 = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";
    let t15;
    if ($[13] !== t13 || $[14] !== t14) {
        t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-w-full shrink-0 items-center justify-around", t13, t14);
        $[13] = t13;
        $[14] = t14;
        $[15] = t15;
    } else {
        t15 = $[15];
    }
    const t16 = `${gap}px`;
    const t17 = `${speed}s`;
    let t18;
    if ($[16] !== t16 || $[17] !== t17) {
        t18 = {
            gap: t16,
            animationDuration: t17
        };
        $[16] = t16;
        $[17] = t17;
        $[18] = t18;
    } else {
        t18 = $[18];
    }
    let t19;
    if ($[19] !== children || $[20] !== t15 || $[21] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            style: t18,
            "aria-hidden": "true",
            children: [
                children,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/InfiniteMarquee.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[19] = children;
        $[20] = t15;
        $[21] = t18;
        $[22] = t19;
    } else {
        t19 = $[22];
    }
    let t20;
    if ($[23] !== t12 || $[24] !== t19 || $[25] !== t5) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: t5,
            children: [
                t12,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/InfiniteMarquee.tsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[23] = t12;
        $[24] = t19;
        $[25] = t5;
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    return t20;
}
_s(InfiniteMarquee, "5okL0DAk6Atnb3+Rru+wGBWyP+4=");
_c = InfiniteMarquee;
var _c;
__turbopack_context__.k.register(_c, "InfiniteMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/03-SocialProof.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialProof",
    ()=>SocialProof
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$InfiniteMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/InfiniteMarquee.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const brands = [
    "BMW",
    "AUDI",
    "MERCEDES",
    "VOLKSWAGEN",
    "PORSCHE",
    "FORD",
    "TESLA",
    "TOYOTA"
];
function SocialProof() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "e1f59fcb82a73752b1ad3e868dd7b65906d0da2e13cbaa3ddad53f07d5747e02") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e1f59fcb82a73752b1ad3e868dd7b65906d0da2e13cbaa3ddad53f07d5747e02";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 mb-8 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-white/50 uppercase tracking-[0.3em]",
                children: "Trusted by enthusiasts driving"
            }, void 0, false, {
                fileName: "[project]/components/sections/03-SocialProof.tsx",
                lineNumber: 16,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/03-SocialProof.tsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-12 bg-black border-y border-white/5",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$InfiniteMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfiniteMarquee"], {
                    speed: 30,
                    gap: 80,
                    children: brands.map(_SocialProofBrandsMap)
                }, void 0, false, {
                    fileName: "[project]/components/sections/03-SocialProof.tsx",
                    lineNumber: 23,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/03-SocialProof.tsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = SocialProof;
function _SocialProofBrandsMap(brand) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-2xl md:text-3xl font-bebas text-white/30 hover:text-red-500 transition-colors cursor-default select-none",
        children: brand
    }, brand, false, {
        fileName: "[project]/components/sections/03-SocialProof.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "SocialProof");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config/features.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "features",
    ()=>features
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gem.js [app-client] (ecmascript) <export default as Gem>");
;
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
        title: "Fully Custom",
        description: "Any design, any artwork. If you can imagine it, we can print it in 4K quality.",
        className: "md:col-span-2"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"],
        title: "Hand-Made Quality",
        description: "Crafted with care, not mass-produced. Each sticker is hand-domed for perfection.",
        className: "md:col-span-1"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: "Built to Last",
        description: "Weather-resistant resin coating that survives car washes, UV rays, and extreme roads.",
        className: "md:col-span-1"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        title: "Global Trust",
        description: "13,000+ sets sold internationally to car enthusiasts in over 120 countries.",
        className: "md:col-span-2"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"],
        title: "Risk-Free",
        description: "14-day free returns & 30-day money back guarantee. Peace of mind included.",
        className: "md:col-span-1"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        title: "Premium Finish",
        description: "High-gloss domed effect that gives your wheels a factory-new premium look.",
        className: "md:col-span-2"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border border-white/10 bg-white/5 text-card-foreground shadow-sm backdrop-blur-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight font-bebas", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useScrollAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useScrollAnimation(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "5e4a35341cc970c8486f26ad2697bd0f1fa52dc5c00cd908fbe5a432ff231c35") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5e4a35341cc970c8486f26ad2697bd0f1fa52dc5c00cd908fbe5a432ff231c35";
    }
    let t1;
    if ($[1] !== t0) {
        t1 = t0 === undefined ? {} : t0;
        $[1] = t0;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const options = t1;
    const { threshold: t2, rootMargin: t3, triggerOnce: t4 } = options;
    const threshold = t2 === undefined ? 0.1 : t2;
    const rootMargin = t3 === undefined ? "0px 0px -50px 0px" : t3;
    const triggerOnce = t4 === undefined ? true : t4;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t5;
    let t6;
    if ($[3] !== rootMargin || $[4] !== threshold || $[5] !== triggerOnce) {
        t5 = ({
            "useScrollAnimation[useEffect()]": ()=>{
                const element = ref.current;
                if (!element) {
                    return;
                }
                const observer = new IntersectionObserver((t7)=>{
                    const [entry] = t7;
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        if (triggerOnce) {
                            observer.unobserve(element);
                        }
                    } else {
                        if (!triggerOnce) {
                            setIsInView(false);
                        }
                    }
                }, {
                    threshold,
                    rootMargin
                });
                observer.observe(element);
                return ()=>observer.disconnect();
            }
        })["useScrollAnimation[useEffect()]"];
        t6 = [
            threshold,
            rootMargin,
            triggerOnce
        ];
        $[3] = rootMargin;
        $[4] = threshold;
        $[5] = triggerOnce;
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[8] !== isInView) {
        t7 = {
            ref,
            isInView
        };
        $[8] = isInView;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    return t7;
}
_s(useScrollAnimation, "/12cXKPriHa22IO15l9SziF6xSg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/AnimatedBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedBlock",
    ()=>AnimatedBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useScrollAnimation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AnimatedBlock(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "aacc10792fdff5403fcef04bc10629c6351a3479813ded6462db576a01281397") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aacc10792fdff5403fcef04bc10629c6351a3479813ded6462db576a01281397";
    }
    const { children, className, delay: t1, variant: t2 } = t0;
    const delay = t1 === undefined ? 0 : t1;
    t2 === undefined ? "default" : t2;
    const { ref, isInView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const t3 = isInView && "opacity-100 filter-none translate-y-0";
    let t4;
    if ($[1] !== className || $[2] !== t3) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("opacity-0 filter blur-sm translate-y-8 transition-all duration-700 ease-out", t3, className);
        $[1] = className;
        $[2] = t3;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    const t5 = `${delay}s`;
    let t6;
    if ($[4] !== t5) {
        t6 = {
            transitionDelay: t5
        };
        $[4] = t5;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] !== children || $[7] !== ref || $[8] !== t4 || $[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: t4,
            style: t6,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/AnimatedBlock.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = ref;
        $[8] = t4;
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
}
_s(AnimatedBlock, "pYjAI7Nkv63P38dbL7x3WCGOTUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useScrollAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = AnimatedBlock;
var _c;
__turbopack_context__.k.register(_c, "AnimatedBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/04-Features.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Features",
    ()=>Features
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$features$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/features.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/AnimatedBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Features() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "f451a1cbb9e0ab8a0db46f1a74bf1a03e7e2aede1ad6696760088009393a2b1f") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f451a1cbb9e0ab8a0db46f1a74bf1a03e7e2aede1ad6696760088009393a2b1f";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/components/sections/04-Features.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/components/sections/04-Features.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBlock"], {
            className: "text-center mb-16 max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bebas text-white mb-4",
                    children: [
                        "Engineered for ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-600",
                            children: "Perfection"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/04-Features.tsx",
                            lineNumber: 30,
                            columnNumber: 152
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/04-Features.tsx",
                    lineNumber: 30,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-white/70",
                    children: "We don't just print stickers. We create industrial-grade automotive emblems designed to outlast your car."
                }, void 0, false, {
                    fileName: "[project]/components/sections/04-Features.tsx",
                    lineNumber: 30,
                    columnNumber: 205
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/04-Features.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$features$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["features"].map(_FeaturesFeaturesMap)
        }, void 0, false, {
            fileName: "[project]/components/sections/04-Features.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "features",
            className: "py-24 bg-dark relative overflow-hidden",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        t2,
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-16 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "lg",
                                className: "rounded-full px-8 font-bebas text-xl tracking-wider",
                                children: "Start Your Custom Order"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/04-Features.tsx",
                                lineNumber: 44,
                                columnNumber: 175
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/04-Features.tsx",
                            lineNumber: 44,
                            columnNumber: 140
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/04-Features.tsx",
                    lineNumber: 44,
                    columnNumber: 92
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/04-Features.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = Features;
function _FeaturesFeaturesMap(feature, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBlock"], {
        delay: index * 0.1,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full", feature.className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "h-full bg-white/5 hover:bg-white/10 transition-colors border-white/10 group",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-lg bg-red-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                            className: "w-6 h-6 text-red-500"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/04-Features.tsx",
                            lineNumber: 52,
                            columnNumber: 361
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/04-Features.tsx",
                        lineNumber: 52,
                        columnNumber: 215
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "mb-2 text-white font-bebas text-2xl tracking-wide",
                        children: feature.title
                    }, void 0, false, {
                        fileName: "[project]/components/sections/04-Features.tsx",
                        lineNumber: 52,
                        columnNumber: 416
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                        className: "text-white/60 text-base",
                        children: feature.description
                    }, void 0, false, {
                        fileName: "[project]/components/sections/04-Features.tsx",
                        lineNumber: 52,
                        columnNumber: 516
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/04-Features.tsx",
                lineNumber: 52,
                columnNumber: 203
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/04-Features.tsx",
            lineNumber: 52,
            columnNumber: 109
        }, this)
    }, feature.title, false, {
        fileName: "[project]/components/sections/04-Features.tsx",
        lineNumber: 52,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Features");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/06-ProductShowcase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductShowcase",
    ()=>ProductShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/AnimatedBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// Product images from public/products
const products = [
    {
        id: '1336',
        src: '/products/1336.png',
        name: 'Carbon Fiber Style'
    },
    {
        id: '502',
        src: '/products/502.png',
        name: 'Classic Black'
    },
    {
        id: '508',
        src: '/products/508.png',
        name: 'Chrome Edition'
    },
    {
        id: '515',
        src: '/products/515.png',
        name: 'Matte Finish'
    },
    {
        id: '524',
        src: '/products/524.png',
        name: 'Recessed Logo'
    },
    {
        id: '614',
        src: '/products/614.png',
        name: 'Custom Color'
    }
];
function ProductShowcase() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "7f964aa0fbeea5d2bed67117ac651dc1ff74fa0519aa99462bc5a2e3414ef4fb") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7f964aa0fbeea5d2bed67117ac651dc1ff74fa0519aa99462bc5a2e3414ef4fb";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBlock"], {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bebas text-white mb-4",
                    children: [
                        "Gallery ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-600",
                            children: "Showcase"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/06-ProductShowcase.tsx",
                            lineNumber: 45,
                            columnNumber: 127
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/06-ProductShowcase.tsx",
                    lineNumber: 45,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-white/60",
                    children: "A glimpse of what we can create for your wheels."
                }, void 0, false, {
                    fileName: "[project]/components/sections/06-ProductShowcase.tsx",
                    lineNumber: 45,
                    columnNumber: 178
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/06-ProductShowcase.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 md:grid-cols-3 gap-6",
            children: products.map(_ProductShowcaseProductsMap)
        }, void 0, false, {
            fileName: "[project]/components/sections/06-ProductShowcase.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "showcase",
            className: "py-24 bg-black",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: [
                    t0,
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "rounded-full px-8 border-white/20 hover:bg-white text-white hover:text-black transition-colors",
                            children: "View Full Gallery"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/06-ProductShowcase.tsx",
                            lineNumber: 59,
                            columnNumber: 143
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/06-ProductShowcase.tsx",
                        lineNumber: 59,
                        columnNumber: 108
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/06-ProductShowcase.tsx",
                lineNumber: 59,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/06-ProductShowcase.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = ProductShowcase;
function _ProductShowcaseProductsMap(product, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBlock"], {
        delay: index * 0.1,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative aspect-square overflow-hidden rounded-xl bg-white/5 border border-white/10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: product.src,
                    alt: product.name,
                    fill: true,
                    className: "object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                }, void 0, false, {
                    fileName: "[project]/components/sections/06-ProductShowcase.tsx",
                    lineNumber: 67,
                    columnNumber: 169
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-bebas text-xl tracking-wider",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/components/sections/06-ProductShowcase.tsx",
                        lineNumber: 67,
                        columnNumber: 495
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/06-ProductShowcase.tsx",
                    lineNumber: 67,
                    columnNumber: 314
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/06-ProductShowcase.tsx",
            lineNumber: 67,
            columnNumber: 62
        }, this)
    }, product.id, false, {
        fileName: "[project]/components/sections/06-ProductShowcase.tsx",
        lineNumber: 67,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProductShowcase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config/testimonials.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "testimonials",
    ()=>testimonials
]);
const testimonials = [
    {
        name: "Alex M.",
        role: "BMW Enthusiast",
        quote: "I was skeptical about stickers, but these are legit emblems. The 3D effect matches my factory badges perfectly.",
        avatar: "/avatars/avatar-1.webp"
    },
    {
        name: "Sarah K.",
        role: "Audi Owner",
        quote: "Super easy to install and they've survived a year of automatic car washes without peeling. incredible quality.",
        avatar: "/avatars/avatar-2.webp"
    },
    {
        name: "James R.",
        role: "Car Club President",
        quote: "We ordered a custom batch for our club. The detail in the print is sharp, even on small text. Highly recommend.",
        avatar: "/avatars/avatar-3.webp"
    },
    {
        name: "David L.",
        role: "Mercedes Driver",
        quote: "Totally changed the look of my winter wheels. Fast shipping to the UK too!",
        avatar: "/avatars/avatar-4.webp"
    },
    {
        name: "Michael T.",
        role: "Auto Detailer",
        quote: "I recommend these to all my clients who want a custom look. The resin quality is top notch.",
        avatar: "/avatars/avatar-5.webp"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/magicui/marquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Marquee",
    ()=>Marquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Marquee(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "f489ade8716c96028f1c08fd2e6cd967c2cd67bee011b0565b5ea79d5ffded16") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f489ade8716c96028f1c08fd2e6cd967c2cd67bee011b0565b5ea79d5ffded16";
    }
    let children;
    let className;
    let props;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== t0) {
        ({ className, reverse: t1, pauseOnHover: t2, children, vertical: t3, repeat: t4, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = className;
        $[4] = props;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
    } else {
        children = $[2];
        className = $[3];
        props = $[4];
        t1 = $[5];
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
    }
    const reverse = t1 === undefined ? false : t1;
    const pauseOnHover = t2 === undefined ? false : t2;
    const vertical = t3 === undefined ? false : t3;
    const repeat = t4 === undefined ? 4 : t4;
    const t5 = !vertical;
    let t6;
    if ($[9] !== className || $[10] !== t5 || $[11] !== vertical) {
        t6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]", {
            "flex-row": t5,
            "flex-col": vertical
        }, className);
        $[9] = className;
        $[10] = t5;
        $[11] = vertical;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== children || $[14] !== pauseOnHover || $[15] !== repeat || $[16] !== reverse || $[17] !== vertical) {
        let t8;
        if ($[19] !== children || $[20] !== pauseOnHover || $[21] !== reverse || $[22] !== vertical) {
            t8 = ({
                "Marquee[(anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex shrink-0 justify-around [gap:var(--gap)]", {
                            "animate-marquee flex-row": !vertical,
                            "animate-marquee-vertical flex-col": vertical,
                            "group-hover:[animation-play-state:paused]": pauseOnHover,
                            "[animation-direction:reverse]": reverse
                        }),
                        children: children
                    }, i, false, {
                        fileName: "[project]/components/magicui/marquee.tsx",
                        lineNumber: 101,
                        columnNumber: 45
                    }, this)
            })["Marquee[(anonymous)()]"];
            $[19] = children;
            $[20] = pauseOnHover;
            $[21] = reverse;
            $[22] = vertical;
            $[23] = t8;
        } else {
            t8 = $[23];
        }
        t7 = Array(repeat).fill(0).map(t8);
        $[13] = children;
        $[14] = pauseOnHover;
        $[15] = repeat;
        $[16] = reverse;
        $[17] = vertical;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[24] !== props || $[25] !== t6 || $[26] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ...props,
            className: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/components/magicui/marquee.tsx",
            lineNumber: 128,
            columnNumber: 10
        }, this);
        $[24] = props;
        $[25] = t6;
        $[26] = t7;
        $[27] = t8;
    } else {
        t8 = $[27];
    }
    return t8;
}
_c = Marquee;
var _c;
__turbopack_context__.k.register(_c, "Marquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/07-Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Testimonials",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$testimonials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/testimonials.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magicui$2f$marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/magicui/marquee.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
"use client";
;
;
;
;
;
;
const firstRow = __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$testimonials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"].slice(0, Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$testimonials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"].length / 2));
const secondRow = __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$testimonials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"].slice(Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$testimonials$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testimonials"].length / 2));
const ReviewCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "94f0916efe326fe5f6f6210ac942a7b8672ffaee63078bb0d2ef930198969ebb") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "94f0916efe326fe5f6f6210ac942a7b8672ffaee63078bb0d2ef930198969ebb";
    }
    const { name, role, quote } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4", "border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-colors");
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-1 mb-3",
            children: [
                ...Array(5)
            ].map(_temp)
        }, void 0, false, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== quote) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
            className: "text-sm text-white/80 italic leading-relaxed mb-4",
            children: [
                '"',
                quote,
                '"'
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = quote;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== name) {
        t4 = name.slice(0, 2);
        $[5] = name;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bebas text-sm",
            children: t4
        }, void 0, false, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
            className: "text-sm font-bold text-white",
            children: name
        }, void 0, false, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = name;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== role) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-white/40 uppercase tracking-wider",
            children: role
        }, void 0, false, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = role;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t6 || $[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== t5 || $[17] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-row items-center gap-3",
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t5;
        $[17] = t8;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t3 || $[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
            className: t1,
            children: [
                t2,
                t3,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 97,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t3;
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    return t10;
};
_c = ReviewCard;
function Testimonials() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "94f0916efe326fe5f6f6210ac942a7b8672ffaee63078bb0d2ef930198969ebb") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "94f0916efe326fe5f6f6210ac942a7b8672ffaee63078bb0d2ef930198969ebb";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 mb-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bebas text-white mb-4",
                    children: [
                        "Review ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-600",
                            children: "Wall"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/07-Testimonials.tsx",
                            lineNumber: 116,
                            columnNumber: 139
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/07-Testimonials.tsx",
                    lineNumber: 116,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-white/60",
                    children: "Join 13,000+ satisfied car enthusiasts."
                }, void 0, false, {
                    fileName: "[project]/components/sections/07-Testimonials.tsx",
                    lineNumber: 116,
                    columnNumber: 186
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            transform: "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magicui$2f$marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marquee"], {
            pauseOnHover: true,
            vertical: true,
            className: "[--duration:20s]",
            children: firstRow.map(_TestimonialsFirstRowMap)
        }, void 0, false, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 132,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magicui$2f$marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marquee"], {
            reverse: true,
            pauseOnHover: true,
            className: "[--duration:20s]",
            vertical: true,
            children: secondRow.map(_TestimonialsSecondRowMap)
        }, void 0, false, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 139,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magicui$2f$marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marquee"], {
            reverse: true,
            pauseOnHover: true,
            className: "[--duration:20s]",
            vertical: true,
            children: firstRow.map(_TestimonialsFirstRowMap2)
        }, void 0, false, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 146,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-24 bg-gradient-to-b from-dark to-black overflow-hidden",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center gap-4",
                            style: t1,
                            children: [
                                t2,
                                t3,
                                t4,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$magicui$2f$marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marquee"], {
                                    pauseOnHover: true,
                                    className: "[--duration:20s]",
                                    vertical: true,
                                    children: secondRow.map(_TestimonialsSecondRowMap2)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/07-Testimonials.tsx",
                                    lineNumber: 153,
                                    columnNumber: 293
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/07-Testimonials.tsx",
                            lineNumber: 153,
                            columnNumber: 220
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "from-dark pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/07-Testimonials.tsx",
                            lineNumber: 153,
                            columnNumber: 426
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "from-dark pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/07-Testimonials.tsx",
                            lineNumber: 153,
                            columnNumber: 523
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "from-dark pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/07-Testimonials.tsx",
                            lineNumber: 153,
                            columnNumber: 623
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "from-dark pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/07-Testimonials.tsx",
                            lineNumber: 153,
                            columnNumber: 721
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/07-Testimonials.tsx",
                    lineNumber: 153,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/07-Testimonials.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c1 = Testimonials;
function _TestimonialsSecondRowMap2(review_2) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewCard, {
        ...review_2
    }, review_2.name + "-2", false, {
        fileName: "[project]/components/sections/07-Testimonials.tsx",
        lineNumber: 161,
        columnNumber: 10
    }, this);
}
function _TestimonialsFirstRowMap2(review_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewCard, {
        ...review_1
    }, review_1.name + "-2", false, {
        fileName: "[project]/components/sections/07-Testimonials.tsx",
        lineNumber: 164,
        columnNumber: 10
    }, this);
}
function _TestimonialsSecondRowMap(review_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewCard, {
        ...review_0
    }, review_0.name, false, {
        fileName: "[project]/components/sections/07-Testimonials.tsx",
        lineNumber: 167,
        columnNumber: 10
    }, this);
}
function _TestimonialsFirstRowMap(review) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewCard, {
        ...review
    }, review.name, false, {
        fileName: "[project]/components/sections/07-Testimonials.tsx",
        lineNumber: 170,
        columnNumber: 10
    }, this);
}
function _temp(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
        className: "w-3 h-3 fill-red-600 text-red-600"
    }, i, false, {
        fileName: "[project]/components/sections/07-Testimonials.tsx",
        lineNumber: 173,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ReviewCard");
__turbopack_context__.k.register(_c1, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config/pricing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pricing",
    ()=>pricing
]);
const pricing = [
    {
        name: "Standard Set",
        price: "€20",
        period: "per set",
        description: "Perfect for upgrading one vehicle.",
        features: [
            "Set of 4 Domed Stickers",
            "Any Custom Design",
            "Premium 3M Adhesive",
            "5-Year Warranty",
            "30-Day Money Back"
        ],
        cta: "Order Now",
        popular: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/08-Pricing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pricing",
    ()=>Pricing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/pricing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/AnimatedBlock.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Pricing() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "621824b9b89e7d17e81999724dc8fc7eac093e4962dd15b2d946d58aed7bfa72") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "621824b9b89e7d17e81999724dc8fc7eac093e4962dd15b2d946d58aed7bfa72";
    }
    const plan = __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$pricing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pricing"][0];
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBlock"], {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bebas text-white mb-4",
                    children: [
                        "Simple ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-600",
                            children: "Pricing"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/08-Pricing.tsx",
                            lineNumber: 20,
                            columnNumber: 126
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/08-Pricing.tsx",
                    lineNumber: 20,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-white/60",
                    children: "Premium quality, fair price. No hidden fees."
                }, void 0, false, {
                    fileName: "[project]/components/sections/08-Pricing.tsx",
                    lineNumber: 20,
                    columnNumber: 176
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/08-Pricing.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = plan.popular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg font-bebas tracking-widest",
            children: "BEST SELLER"
        }, void 0, false, {
            fileName: "[project]/components/sections/08-Pricing.tsx",
            lineNumber: 27,
            columnNumber: 26
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bebas text-white mb-2",
            children: plan.name
        }, void 0, false, {
            fileName: "[project]/components/sections/08-Pricing.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center border-b border-white/5",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-baseline justify-center gap-1 mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-5xl font-bold text-white tracking-tighter",
                            children: plan.price
                        }, void 0, false, {
                            fileName: "[project]/components/sections/08-Pricing.tsx",
                            lineNumber: 41,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white/50",
                            children: plan.period
                        }, void 0, false, {
                            fileName: "[project]/components/sections/08-Pricing.tsx",
                            lineNumber: 41,
                            columnNumber: 218
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/08-Pricing.tsx",
                    lineNumber: 41,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-white/60",
                    children: plan.description
                }, void 0, false, {
                    fileName: "[project]/components/sections/08-Pricing.tsx",
                    lineNumber: 41,
                    columnNumber: 276
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/08-Pricing.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-4 mb-8",
            children: plan.features.map(_PricingPlanFeaturesMap)
        }, void 0, false, {
            fileName: "[project]/components/sections/08-Pricing.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "pricing",
            className: "py-24 bg-black relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBlock"], {
                        className: "max-w-md mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "relative bg-white/5 border-white/10 hover:border-red-600/50 transition-colors duration-500 overflow-hidden",
                            children: [
                                t1,
                                t3,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 bg-white/2",
                                    children: [
                                        t4,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            className: "w-full text-lg shadow-lg shadow-red-900/20 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "mr-2 h-4 w-4 fill-current group-hover:text-yellow-300 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/08-Pricing.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 404
                                                }, this),
                                                plan.cta
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/08-Pricing.tsx",
                                            lineNumber: 55,
                                            columnNumber: 325
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-center text-white/30 mt-4",
                                            children: "Free shipping on orders over €50"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/08-Pricing.tsx",
                                            lineNumber: 55,
                                            columnNumber: 514
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/08-Pricing.tsx",
                                    lineNumber: 55,
                                    columnNumber: 289
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/08-Pricing.tsx",
                            lineNumber: 55,
                            columnNumber: 156
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/08-Pricing.tsx",
                        lineNumber: 55,
                        columnNumber: 112
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/08-Pricing.tsx",
                lineNumber: 55,
                columnNumber: 68
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/08-Pricing.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c = Pricing;
function _PricingPlanFeaturesMap(feature, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-center gap-3 text-white/80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-5 w-5 rounded-full bg-red-600/20 flex items-center justify-center shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-3 h-3 text-red-500"
                }, void 0, false, {
                    fileName: "[project]/components/sections/08-Pricing.tsx",
                    lineNumber: 63,
                    columnNumber: 166
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/08-Pricing.tsx",
                lineNumber: 63,
                columnNumber: 72
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm",
                children: feature
            }, void 0, false, {
                fileName: "[project]/components/sections/08-Pricing.tsx",
                lineNumber: 63,
                columnNumber: 214
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/components/sections/08-Pricing.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Pricing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config/faq.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "faq",
    ()=>faq
]);
const faq = [
    {
        question: "Will these actually stick?",
        answer: "Yes! We use premium industrial-grade adhesive designed specifically for automotive use. They are heat, cold, and water resistant."
    },
    {
        question: "Is the print quality good?",
        answer: "Absolutely. We use 4K resolution printing to ensure your custom design is crisp, vibrant, and sharp, even for intricate logos."
    },
    {
        question: "Can I use my own design?",
        answer: "Yes, that's what we specialize in! You can upload any image or logo, and we'll turn it into a premium 3D domed emblem."
    },
    {
        question: "How long do they last?",
        answer: "Our stickers are coated with a UV-resistant optical resin that prevents yellowing and fading. We back them with a 5-year durability warranty."
    },
    {
        question: "What if I don't like them?",
        answer: "We offer a 14-day free return policy and a 30-day money-back guarantee. If you're not happy, we'll make it right."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship worldwide! We have satisfied customers in over 120 countries."
    },
    {
        question: "Are they easy to install?",
        answer: "Very easy. Just clean the surface with alcohol, peel the backing, and stick it on. No tools required."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Accordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Accordion = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Accordion.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Accordion;
Accordion.displayName = "Accordion";
const AccordionItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b border-white/10", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Accordion.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = AccordionItem;
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, children, isOpen, onClick, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ref: ref,
            onClick: onClick,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-red-500 text-left cursor-pointer", isOpen ? "text-red-500" : "text-white/80", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 shrink-0 transition-transform duration-200 text-white/50", isOpen && "rotate-180")
                }, void 0, false, {
                    fileName: "[project]/components/ui/Accordion.tsx",
                    lineNumber: 44,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Accordion.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/Accordion.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = AccordionTrigger;
AccordionTrigger.displayName = "AccordionTrigger";
const AccordionContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, children, isOpen, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden text-sm transition-all", isOpen ? "max-h-96 pb-4" : "max-h-0", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white/60 pt-0",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/Accordion.tsx",
            lineNumber: 72,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/Accordion.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = AccordionContent;
AccordionContent.displayName = "AccordionContent";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Accordion$React.forwardRef");
__turbopack_context__.k.register(_c1, "Accordion");
__turbopack_context__.k.register(_c2, "AccordionItem$React.forwardRef");
__turbopack_context__.k.register(_c3, "AccordionItem");
__turbopack_context__.k.register(_c4, "AccordionTrigger$React.forwardRef");
__turbopack_context__.k.register(_c5, "AccordionTrigger");
__turbopack_context__.k.register(_c6, "AccordionContent$React.forwardRef");
__turbopack_context__.k.register(_c7, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/09-FAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQ",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$faq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/faq.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/AnimatedBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FAQ() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "dec79a6882d61683ede79ceb76ee6b85fbaeba9c7d514f49b14fb4b4558e6d25") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dec79a6882d61683ede79ceb76ee6b85fbaeba9c7d514f49b14fb4b4558e6d25";
    }
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBlock"], {
            className: "text-center mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bebas text-white mb-4",
                    children: [
                        "Common ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-red-600",
                            children: "Questions"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/09-FAQ.tsx",
                            lineNumber: 19,
                            columnNumber: 126
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/09-FAQ.tsx",
                    lineNumber: 19,
                    columnNumber: 55
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-white/60",
                    children: "Everything you need to know about our domed stickers."
                }, void 0, false, {
                    fileName: "[project]/components/sections/09-FAQ.tsx",
                    lineNumber: 19,
                    columnNumber: 178
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/09-FAQ.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== openIndex) {
        t1 = __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$faq$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faq"].map({
            "FAQ[faq.map()]": (item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$AnimatedBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedBlock"], {
                    delay: index * 0.05,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                isOpen: openIndex === index,
                                onClick: {
                                    "FAQ[faq.map() > <AccordionTrigger>.onClick]": ()=>setOpenIndex(index === openIndex ? null : index)
                                }["FAQ[faq.map() > <AccordionTrigger>.onClick]"],
                                children: item.question
                            }, void 0, false, {
                                fileName: "[project]/components/sections/09-FAQ.tsx",
                                lineNumber: 27,
                                columnNumber: 105
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                isOpen: openIndex === index,
                                children: item.answer
                            }, void 0, false, {
                                fileName: "[project]/components/sections/09-FAQ.tsx",
                                lineNumber: 29,
                                columnNumber: 95
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/09-FAQ.tsx",
                        lineNumber: 27,
                        columnNumber: 90
                    }, this)
                }, index, false, {
                    fileName: "[project]/components/sections/09-FAQ.tsx",
                    lineNumber: 27,
                    columnNumber: 42
                }, this)
        }["FAQ[faq.map()]"]);
        $[2] = openIndex;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "faq",
            className: "py-24 bg-dark",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 max-w-2xl",
                children: [
                    t0,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: t1
                    }, void 0, false, {
                        fileName: "[project]/components/sections/09-FAQ.tsx",
                        lineNumber: 38,
                        columnNumber: 108
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/09-FAQ.tsx",
                lineNumber: 38,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/09-FAQ.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_s(FAQ, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/CookieConsent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookieConsent",
    ()=>CookieConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CookieConsent() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "fdd41a625c6d8f2d1a3b94dd569a0fc1a449c4658c6d2a2be98d78752c85b9fd") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fdd41a625c6d8f2d1a3b94dd569a0fc1a449c4658c6d2a2be98d78752c85b9fd";
    }
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "CookieConsent[useEffect()]": ()=>{
                const consent = localStorage.getItem("cookie-consent");
                if (!consent) {
                    setTimeout({
                        "CookieConsent[useEffect() > setTimeout()]": ()=>setIsVisible(true)
                    }["CookieConsent[useEffect() > setTimeout()]"], 1000);
                }
            }
        })["CookieConsent[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "CookieConsent[accept]": ()=>{
                localStorage.setItem("cookie-consent", "accepted");
                setIsVisible(false);
            }
        })["CookieConsent[accept]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const accept = t2;
    if (!isVisible) {
        return null;
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-bebas text-white mb-2",
            children: "We use cookies"
        }, void 0, false, {
            fileName: "[project]/components/ui/CookieConsent.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-400 mb-4",
            children: "To ensure you get the best experience on our website."
        }, void 0, false, {
            fileName: "[project]/components/ui/CookieConsent.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "sm",
            onClick: accept,
            className: "w-full bg-white text-black hover:bg-gray-200",
            children: "Accept"
        }, void 0, false, {
            fileName: "[project]/components/ui/CookieConsent.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-4 right-4 z-50 max-w-sm animate-slide-in",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-black/90 border-white/10 backdrop-blur-xl p-6 shadow-2xl",
                children: [
                    t3,
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            t5,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "outline",
                                onClick: {
                                    "CookieConsent[<Button>.onClick]": ()=>setIsVisible(false)
                                }["CookieConsent[<Button>.onClick]"],
                                className: "w-full",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/CookieConsent.tsx",
                                lineNumber: 73,
                                columnNumber: 199
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/CookieConsent.tsx",
                        lineNumber: 73,
                        columnNumber: 167
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/CookieConsent.tsx",
                lineNumber: 73,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/CookieConsent.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_s(CookieConsent, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = CookieConsent;
var _c;
__turbopack_context__.k.register(_c, "CookieConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_fec5d252._.js.map