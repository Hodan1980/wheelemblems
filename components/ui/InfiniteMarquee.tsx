"use client";

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

interface InfiniteMarqueeProps {
    children: React.ReactNode;
    className?: string;
    speed?: number; // seconds for one loop
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
    gap?: number; // gap between items in px
}

export function InfiniteMarquee({
    children,
    className,
    speed = 40,
    direction = 'left',
    pauseOnHover = true,
    gap = 48,
}: InfiniteMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className={cn('overflow-hidden relative flex w-full', className)}
        >
            <div
                className={cn(
                    'flex min-w-full shrink-0 items-center justify-around',
                    pauseOnHover && 'hover:[animation-play-state:paused]',
                    direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
                )}
                style={{
                    gap: `${gap}px`,
                    animationDuration: `${speed}s`,
                }}
            >
                {children}
                {children}
            </div>
            <div
                className={cn(
                    'flex min-w-full shrink-0 items-center justify-around',
                    pauseOnHover && 'hover:[animation-play-state:paused]',
                    direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
                )}
                style={{
                    gap: `${gap}px`,
                    animationDuration: `${speed}s`,
                }}
                aria-hidden="true"
            >
                {children}
                {children}
            </div>
        </div>
    );
}
