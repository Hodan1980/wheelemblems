"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedBlockProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    variant?: 'default' | 'small';
}

export function AnimatedBlock({
    children,
    className,
    delay = 0,
    variant = 'default'
}: AnimatedBlockProps) {
    const { ref, isInView } = useScrollAnimation();

    return (
        <div
            ref={ref}
            className={cn(
                'opacity-0 filter blur-sm translate-y-8 transition-all duration-700 ease-out',
                isInView && 'opacity-100 filter-none translate-y-0',
                className
            )}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}
