"use client";

import { useEffect, useRef } from 'react';
import { useTransform, motion, useSpring, MotionValue } from 'framer-motion';
import { useImageLoader } from '@/hooks/useImageLoader';
import { heroContent, HeroContentItem } from '@/config/heroContent';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ChevronDown, Loader2 } from 'lucide-react';

export function HeroScrollAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Total frames: 80
    const frameCount = 80;
    const { images, loading, progress } = useImageLoader(frameCount);

    // Manual scroll progress tracking to avoid Framer Motion ref issues
    const smoothProgress = useSpring(0, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // IMPORTANT: All hooks must be called before any conditional returns
    // Move useTransform to top level to avoid hooks order issues
    const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

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
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [smoothProgress]);

    // Render canvas frame based on scroll
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const render = (prog: number) => {
            if (images.length === 0 || loading) return;

            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(prog * frameCount)
            );

            const img = images[frameIndex];
            if (!img) return;

            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;

            let drawWidth = canvas.width;
            let drawHeight = canvas.height;
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
        };

        render(smoothProgress.get());

        const unsubscribe = smoothProgress.on("change", (latest) => {
            requestAnimationFrame(() => render(latest));
        });

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(smoothProgress.get());
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [images, loading, smoothProgress, frameCount]);

    // Loading state - shown while frames load
    if (loading) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-black text-white flex-col gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-red-600" />
                <p className="font-bebas text-xl tracking-widest">Loading Experience... {progress}%</p>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-black">
            {/* Sticky Canvas Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="h-full w-full object-cover"
                />

                {/* Overlay Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: scrollIndicatorOpacity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest opacity-70">Scroll to Explore</span>
                    <ChevronDown className="animate-bounce" />
                </motion.div>
            </div>

            {/* Text Overlay Segments */}
            {heroContent.map((item, index) => (
                <HeroTextOverlay
                    key={index}
                    item={item}
                    scrollProgress={smoothProgress}
                />
            ))}
        </div>
    );
}


function HeroTextOverlay({ item, scrollProgress }: { item: HeroContentItem; scrollProgress: MotionValue<number> }) {
    const opacity = useTransform(
        scrollProgress,
        [item.start, (item.start + item.end) / 2, item.end],
        [0, 1, 0]
    );

    const y = useTransform(
        scrollProgress,
        [item.start, item.end],
        [50, -50]
    );

    const positionClasses = {
        left: "items-start text-left pl-8 md:pl-24",
        right: "items-end text-right pr-8 md:pr-24",
        center: "items-center text-center px-4",
    };

    return (
        <div className="fixed inset-0 pointer-events-none flex flex-col justify-center z-10">
            <motion.div
                className={cn(
                    "container max-w-6xl mx-auto flex flex-col",
                    positionClasses[item.position]
                )}
                style={{ opacity, y }}
            >
                <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
                    <h1
                        className="text-6xl md:text-[20rem] font-bebas text-white drop-shadow-2xl leading-none whitespace-nowrap tracking-tighter"
                        style={{
                            transform: 'scaleX(0.85)',
                            transformOrigin: 'center'
                        }}
                    >
                        {item.title}
                    </h1>
                    {item.subtitle && (
                        <p className="text-2xl md:text-4xl text-white/90 max-w-2xl font-light mt-6 mb-10 drop-shadow-md text-center">
                            {item.subtitle}
                        </p>
                    )}

                    {item.isCta && (
                        <div className="flex gap-4 pointer-events-auto justify-center">
                            <a href="https://www.hubcapstickers.com" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="rounded-full">
                                    Learn More
                                </Button>
                            </a>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
