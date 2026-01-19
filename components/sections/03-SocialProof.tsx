"use client";

import { InfiniteMarquee } from '@/components/ui/InfiniteMarquee';

const brands = [
    "BMW", "AUDI", "MERCEDES", "VOLKSWAGEN", "PORSCHE", "FORD", "TESLA", "TOYOTA"
];

export function SocialProof() {
    return (
        <section className="py-12 bg-black border-y border-white/5">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm text-white/50 uppercase tracking-[0.3em]">
                    Trusted by enthusiasts driving
                </p>
            </div>

            <InfiniteMarquee speed={30} gap={80}>
                {brands.map((brand) => (
                    <span
                        key={brand}
                        className="text-2xl md:text-3xl font-bebas text-white/30 hover:text-red-500 transition-colors cursor-default select-none"
                    >
                        {brand}
                    </span>
                ))}
            </InfiniteMarquee>
        </section>
    );
}
