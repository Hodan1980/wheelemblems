"use client";

import Image from "next/image";
import { AnimatedBlock } from "@/components/ui/AnimatedBlock";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Design Your Wheel Emblems",
        description: "Choose from our curated collection of wheel emblem designs or upload your own custom artwork for domed stickers. Our intuitive editor makes it easy to visualize your new center wheel covers.",
        image: "/how-it-works/design.webp",
        alt: "Design custom wheel emblems interface"
    },
    {
        number: "02",
        title: "We Print & Dome",
        description: "We print your car decals in 4K resolution and apply a UV-resistant, clear polyurethane resin dome. This creates stunning 3D domed stickers that are scratch-proof and weatherproof.",
        image: "/how-it-works/production.webp",
        alt: "Domed stickers and resin emblems production process"
    },
    {
        number: "03",
        title: "Peel & Stick",
        description: "Installation is easy. Just clean your center wheel cover, peel off the backing, and stick on your new hub cap stickers. Our industrial adhesive ensures your wheel emblems stay put.",
        image: "/how-it-works/application.webp",
        alt: "Installing hub cap stickers on center wheel covers"
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-black relative overflow-hidden" aria-labelledby="how-it-works-heading">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true" />

            <div className="container mx-auto px-4">
                <AnimatedBlock className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 id="how-it-works-heading" className="text-4xl md:text-5xl font-bebas text-white mb-4">
                        How Wheel Emblems <span className="text-red-600">Work</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        Transforming your center wheel covers with premium domed stickers is easier than you think. Three simple steps to custom hub cap stickers.
                    </p>
                </AnimatedBlock>

                <div className="flex flex-col md:flex-row gap-8 md:gap-4 relative" role="list" aria-label="Steps to create custom wheel emblems">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[160px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-red-900/50 to-transparent z-0" aria-hidden="true" />

                    {steps.map((step, index) => (
                        <article key={step.number} className="flex-1 relative z-10" role="listitem">
                            <AnimatedBlock delay={index * 0.2} className="flex flex-col items-center text-center">
                                <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden glass-panel group transition-all duration-500 hover:shadow-[0_0_40px_rgba(225,29,72,0.15)] hover:border-red-500/30">
                                    <Image
                                        src={step.image}
                                        alt={step.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        loading="lazy"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent" aria-hidden="true" />

                                    {/* Number Badge */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-xl shadow-black">
                                        <span className="font-bebas text-3xl text-red-600" aria-hidden="true">{step.number}</span>
                                    </div>
                                </div>

                                <div className="mt-8 px-4">
                                    <h3 className="text-2xl font-bebas text-white mb-3 tracking-wide">{step.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimatedBlock>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button asChild size="lg" className="rounded-full">
                        <a href="https://hubcapstickers.com/stickers/wheel-emblems/" target="_blank" rel="noopener noreferrer">
                            Order Custom Wheel Emblems <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
