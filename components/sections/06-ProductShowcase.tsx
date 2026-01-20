"use client";

import { AnimatedBlock } from '@/components/ui/AnimatedBlock';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

// Product images from public/products - wheel emblems showcase
const products = [
    { id: '1336', src: '/products/1336.png', name: 'Carbon Fiber Wheel Emblem', alt: 'Carbon fiber style custom wheel emblem domed sticker' },
    { id: '502', src: '/products/502.png', name: 'Classic Black Hub Cap Sticker', alt: 'Classic black hub cap sticker for center wheel covers' },
    { id: '508', src: '/products/508.png', name: 'Chrome Edition Domed Sticker', alt: 'Chrome edition domed sticker resin emblem' },
    { id: '515', src: '/products/515.png', name: 'Matte Finish Wheel Emblem', alt: 'Matte finish wheel emblem car decal' },
    { id: '524', src: '/products/524.png', name: 'Recessed Logo Domed Decal', alt: 'Recessed logo domed decal for wheels' },
    { id: '614', src: '/products/614.png', name: 'Custom Color Resin Emblem', alt: 'Custom color resin emblem for center wheel covers' },
];

export function ProductShowcase() {
    return (
        <section id="showcase" className="py-24 bg-black" aria-labelledby="showcase-heading">
            <div className="container mx-auto px-4">
                <AnimatedBlock className="text-center mb-16">
                    <h2 id="showcase-heading" className="text-4xl md:text-5xl font-bebas text-white mb-4">
                        Wheel Emblems <span className="text-red-600">Gallery</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        A glimpse of custom domed stickers, hub cap stickers, and resin emblems we can create for your center wheel covers.
                    </p>
                </AnimatedBlock>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6" role="list" aria-label="Wheel emblems product gallery">
                    {products.map((product, index) => (
                        <AnimatedBlock key={product.id} delay={index * 0.1}>
                            <figure className="group relative aspect-square overflow-hidden rounded-xl bg-white/5 border border-white/10" role="listitem">
                                <Image
                                    src={product.src}
                                    alt={product.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    loading="lazy"
                                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                                />
                                <figcaption className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <p className="text-white font-bebas text-xl tracking-wider">{product.name}</p>
                                </figcaption>
                            </figure>
                        </AnimatedBlock>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="lg" className="rounded-full">
                        <a href="https://hubcapstickers.com/stickers/wheel-emblems/?brands=[1]" target="_blank" rel="noopener noreferrer">
                            Browse All Wheel Emblems
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
