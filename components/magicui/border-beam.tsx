"use client";

import { cn } from "@/lib/utils";
import { motion, Transition } from "framer-motion";
import { CSSProperties } from "react";

interface BorderBeamProps {
    /**
     * Custom class to apply to the component
     */
    className?: string;
    /**
     * Size of the beam
     * @default 50
     */
    size?: number;
    /**
     * Duration of the animation in seconds
     * @default 6
     */
    duration?: number;
    /**
     * Delay before the animation starts
     * @default 0
     */
    delay?: number;
    /**
     * Start color of the beam gradient
     * @default "#ffaa40"
     */
    colorFrom?: string;
    /**
     * End color of the beam gradient
     * @default "#9c40ff"
     */
    colorTo?: string;
    /**
     * Custom motion transition configuration
     */
    transition?: Transition;
    /**
     * Custom CSS styles to apply
     */
    style?: CSSProperties;
    /**
     * Whether to reverse animation direction
     * @default false
     */
    reverse?: boolean;
    /**
     * Initial offset position (0-100)
     * @default 0
     */
    initialOffset?: number;
    /**
     * Border width of the beam
     * @default 1
     */
    borderWidth?: number;
}

export function BorderBeam({
    className,
    size = 50,
    duration = 6,
    delay = 0,
    colorFrom = "#E11D48",
    colorTo = "#ff6b6b",
    transition,
    style,
    reverse = false,
    initialOffset = 0,
    borderWidth = 1,
}: BorderBeamProps) {
    return (
        <div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
                padding: borderWidth,
                WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
            }}
        >
            <motion.div
                className={cn(
                    "absolute aspect-square",
                    "bg-gradient-to-l from-transparent",
                    className
                )}
                style={{
                    width: size,
                    offsetPath: `rect(0 auto auto 0 round ${size}px)`,
                    background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
                    ...style,
                }}
                initial={{ offsetDistance: `${initialOffset}%` }}
                animate={{ offsetDistance: reverse ? "0%" : "100%" }}
                transition={
                    transition ?? {
                        repeat: Infinity,
                        duration,
                        ease: "linear",
                        delay,
                    }
                }
            />
        </div>
    );
}
