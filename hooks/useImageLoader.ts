"use client";

import { useEffect, useState } from 'react';

export function useImageLoader(frameCount: number) {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let mounted = true;
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        const loadImages = async () => {
            // Pre-allocate array
            loadedImages.length = frameCount;

            const promises = Array.from({ length: frameCount }, (_, i) => {
                return new Promise<void>((resolve) => {
                    const img = new Image();
                    // Format: frame_00.webp ... frame_79.webp
                    // i < 10 ? `0${i}` : `${i}`
                    const frameIndex = i < 10 ? `0${i}` : `${i}`;
                    img.src = `/scroll-frames/frame_${frameIndex}.webp`;

                    img.onload = () => {
                        if (!mounted) return;
                        loadedImages[i] = img;
                        loadedCount++;
                        setProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load frame ${i}`);
                        resolve(); // Verify: resolve even on error to prevent hanging?
                    };
                });
            });

            await Promise.all(promises);

            if (mounted) {
                setImages(loadedImages);
                setLoading(false);
            }
        };

        loadImages();

        return () => {
            mounted = false;
        };
    }, [frameCount]);

    return { images, loading, progress };
}
