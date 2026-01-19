"use client";

import { pricing } from '@/config/pricing';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, Zap } from 'lucide-react';
import { AnimatedBlock } from '@/components/ui/AnimatedBlock';

export function Pricing() {
    const plan = pricing[0]; // We only have one main plan for now

    return (
        <section id="pricing" className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <AnimatedBlock className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">
                        Simple <span className="text-red-600">Pricing</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        Premium quality, fair price. No hidden fees.
                    </p>
                </AnimatedBlock>

                <AnimatedBlock className="max-w-md mx-auto">
                    <Card className="relative bg-white/5 border-white/10 hover:border-red-600/50 transition-colors duration-500 overflow-hidden">
                        {plan.popular && (
                            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg font-bebas tracking-widest">
                                BEST SELLER
                            </div>
                        )}

                        <div className="p-8 text-center border-b border-white/5">
                            <h3 className="text-2xl font-bebas text-white mb-2">{plan.name}</h3>
                            <div className="flex items-baseline justify-center gap-1 mb-2">
                                <span className="text-5xl font-bold text-white tracking-tighter">{plan.price}</span>
                                <span className="text-white/50">{plan.period}</span>
                            </div>
                            <p className="text-sm text-white/60">{plan.description}</p>
                        </div>

                        <div className="p-8 bg-white/2">
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80">
                                        <div className="h-5 w-5 rounded-full bg-red-600/20 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-red-500" />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="https://hubcapstickers.com/stickers/wheel-emblems/" target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button size="lg" className="w-full rounded-full">
                                    <Zap className="mr-2 h-5 w-5 fill-current" />
                                    {plan.cta}
                                </Button>
                            </a>
                            <p className="text-xs text-center text-white/30 mt-4">
                                Free shipping on orders over €50
                            </p>
                        </div>
                    </Card>
                </AnimatedBlock>
            </div>
        </section>
    );
}
