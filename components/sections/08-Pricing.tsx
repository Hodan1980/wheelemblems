"use client";

import { pricing } from '@/config/pricing';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Check, Zap } from 'lucide-react';
import { AnimatedBlock } from '@/components/ui/AnimatedBlock';

export function Pricing() {
    const plan = pricing[0]; // We only have one main plan for now

    return (
        <section id="pricing" className="py-24 bg-black relative" aria-labelledby="pricing-heading">
            <div className="container mx-auto px-4">
                <AnimatedBlock className="text-center mb-16">
                    <h2 id="pricing-heading" className="text-4xl md:text-5xl font-bebas text-white mb-4">
                        Wheel Emblems <span className="text-red-600">Pricing</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        Premium domed stickers and hub cap stickers at fair prices. No hidden fees.
                    </p>
                </AnimatedBlock>

                <AnimatedBlock className="max-w-md mx-auto">
                    <Card
                        className="relative bg-white/5 border-white/10 hover:border-red-600/50 transition-colors duration-500 overflow-hidden"
                        itemScope
                        itemType="https://schema.org/Product"
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg font-bebas tracking-widest">
                                BEST SELLER
                            </div>
                        )}

                        <div className="p-8 text-center border-b border-white/5">
                            <h3 className="text-2xl font-bebas text-white mb-2" itemProp="name">{plan.name}</h3>
                            <div className="flex items-baseline justify-center gap-1 mb-2" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                <span className="text-5xl font-bold text-white tracking-tighter" itemProp="price">{plan.price}</span>
                                <span className="text-white/50" itemProp="priceCurrency" content="EUR">{plan.period}</span>
                                <meta itemProp="availability" content="https://schema.org/InStock" />
                            </div>
                            <p className="text-sm text-white/60" itemProp="description">{plan.description}</p>
                        </div>

                        <div className="p-8 bg-white/2">
                            <ul className="space-y-4 mb-8" aria-label="Package features">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80">
                                        <div className="h-5 w-5 rounded-full bg-red-600/20 flex items-center justify-center shrink-0" aria-hidden="true">
                                            <Check className="w-3 h-3 text-red-500" />
                                        </div>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="https://hubcapstickers.com/stickers/wheel-emblems/" target="_blank" rel="noopener noreferrer" className="w-full block">
                                <Button size="lg" className="w-full rounded-full">
                                    <Zap className="mr-2 h-5 w-5 fill-current" aria-hidden="true" />
                                    {plan.cta}
                                </Button>
                            </a>
                            <p className="text-xs text-center text-white/30 mt-4">
                                Free shipping on wheel emblems orders over €50
                            </p>
                        </div>
                    </Card>
                </AnimatedBlock>
            </div>
        </section>
    );
}
