"use client";

import { AnimatedBlock } from '@/components/ui/AnimatedBlock';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

// Product images from public/products
const products = [
    { id: '1336', src: '/products/1336.png', name: 'Carbon Fiber Style' },
    { id: '502', src: '/products/502.png', name: 'Classic Black' },
    { id: '508', src: '/products/508.png', name: 'Chrome Edition' },
    { id: '515', src: '/products/515.png', name: 'Matte Finish' },
    { id: '524', src: '/products/524.png', name: 'Recessed Logo' },
    { id: '614', src: '/products/614.png', name: 'Custom Color' },
];

export function ProductShowcase() {
    return (
        <section id="showcase" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <AnimatedBlock className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">
                        Gallery <span className="text-red-600">Showcase</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        A glimpse of what we can create for your wheels.
                    </p>
                </AnimatedBlock>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <AnimatedBlock key={product.id} delay={index * 0.1}>
                            <div className="group relative aspect-square overflow-hidden rounded-xl bg-white/5 border border-white/10">
                                <Image
                                    src={product.src}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <p className="text-white font-bebas text-xl tracking-wider">{product.name}</p>
                                </div>
                            </div>
                        </AnimatedBlock>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://hubcapstickers.com/stickers/wheel-emblems/?brands=[1]" target="_blank" rel="noopener noreferrer">
                        <Button className="rounded-full">
                            View Full Gallery
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
