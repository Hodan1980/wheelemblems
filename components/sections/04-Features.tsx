"use client";

import { features } from '@/config/features';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { AnimatedBlock } from '@/components/ui/AnimatedBlock';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { BorderBeam } from '@/components/magicui/border-beam';

export function Features() {
    return (
        <section id="features" className="py-24 bg-dark relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4">
                <AnimatedBlock className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">
                        Engineered for <span className="text-red-600">Perfection</span>
                    </h2>
                    <p className="text-lg text-white/70">
                        We don't just print stickers. We create industrial-grade automotive emblems designed to outlast your car.
                    </p>
                </AnimatedBlock>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <AnimatedBlock
                            key={feature.title}
                            delay={index * 0.1}
                            className={cn("h-full", feature.className)}
                        >
                            <Card className="relative h-full bg-white/5 hover:bg-white/10 transition-colors border-white/10 group overflow-hidden">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-red-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-6 h-6 text-red-500" />
                                    </div>
                                    <CardTitle className="mb-2 text-white font-bebas text-2xl tracking-wide">{feature.title}</CardTitle>
                                    <CardDescription className="text-white/60 text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>
                                <BorderBeam
                                    duration={8}
                                    size={200}
                                    colorFrom="#E11D48"
                                    colorTo="#ff6b6b"
                                    delay={index * 0.5}
                                />
                            </Card>
                        </AnimatedBlock>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="https://hubcapstickers.com/stickers/wheel-emblems/" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="rounded-full">
                            Start Your Custom Order
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
