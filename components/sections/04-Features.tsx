"use client";

import { features } from '@/config/features';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { AnimatedBlock } from '@/components/ui/AnimatedBlock';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { BorderBeam } from '@/components/magicui/border-beam';

export function Features() {
    return (
        <section id="features" className="py-24 bg-dark relative overflow-hidden" aria-labelledby="features-heading">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto px-4">
                <AnimatedBlock className="text-center mb-10 md:mb-16 max-w-2xl mx-auto">
                    <h2 id="features-heading" className="text-4xl md:text-5xl font-bebas text-white mb-4 tracking-wider">
                        Premium Wheel Emblems <span className="text-red-600">Features</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        We don't just print stickers. We create industrial-grade domed stickers and resin emblems designed to outlast your car.
                    </p>
                </AnimatedBlock>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Wheel emblems features">
                    {features.map((feature, index) => (
                        <AnimatedBlock
                            key={feature.title}
                            delay={index * 0.1}
                            className={cn("h-full", feature.className)}
                        >
                            <SpotlightCard className="h-full group" spotlightColor="rgba(225, 29, 72, 0.2)">
                                <div className="p-6 h-full flex flex-col">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600/30 to-red-900/10 flex items-center justify-center mb-6 border border-red-500/20 shadow-[0_0_15px_rgba(225,29,72,0.15)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(225,29,72,0.3)] transition-all duration-300">
                                        <feature.icon className="w-7 h-7 text-red-500 drop-shadow-md" />
                                    </div>
                                    <h3 className="mb-3 text-white font-bebas text-3xl tracking-wide group-hover:text-red-500 transition-colors duration-300">{feature.title}</h3>
                                    <p className="text-white/60 text-base leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                                <BorderBeam
                                    duration={8}
                                    size={200}
                                    colorFrom="#E11D48"
                                    colorTo="#ff6b6b"
                                    delay={index * 0.5}
                                />
                            </SpotlightCard>
                        </AnimatedBlock>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button asChild size="lg" className="rounded-full">
                        <a href="https://hubcapstickers.com/stickers/wheel-emblems/" target="_blank" rel="noopener noreferrer">
                            Shop Wheel Emblems & Domed Stickers
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
