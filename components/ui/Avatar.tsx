"use client";

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

interface AvatarProps {
    src: string;
    alt: string;
    fallback: string;
    className?: string;
}

export function Avatar({ src, alt, fallback, className }: AvatarProps) {
    const [error, setError] = useState(false);

    return (
        <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full font-bebas", className)}>
            {!error ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="aspect-square h-full w-full object-cover"
                    onError={() => setError(true)}
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center rounded-full bg-muted text-white bg-white/10">
                    {fallback}
                </div>
            )}
        </div>
    );
}
