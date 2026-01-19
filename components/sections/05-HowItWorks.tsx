"use client";

import Image from "next/image";
import { AnimatedBlock } from "@/components/ui/AnimatedBlock";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Design or Upload",
        description: "Choose from our curated collection of wheel emblem designs or upload your own custom artwork. Our intuitive editor makes it easy to visualize your new look.",
        image: "/how-it-works/design.webp",
        alt: "Design Interface"
    },
    {
        number: "02",
        title: "We Print & Dome",
        description: "We print your design in 4K resolution and apply a UV-resistant, clear polyurethane resin dome. This creates a stunning 3D effect that is scratch-proof and weatherproof.",
        image: "/how-it-works/production.webp",
        alt: "Doming Process"
    },
    {
        number: "03",
        title: "Peel & Stick",
        description: "Application is a breeze. Just clean your wheel center cap, peel off the backing, and stick on your new emblem. Our industrial adhesive ensures it stays put.",
        image: "/how-it-works/application.webp",
        alt: "Application"
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4">
                <AnimatedBlock className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">
                        How It <span className="text-red-600">Works</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        Transforming your wheels is easier than you think. Three simple steps to a fresh new look.
                    </p>
                </AnimatedBlock>

                <div className="flex flex-col md:flex-row gap-8 md:gap-4 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[160px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-red-900/50 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <div key={step.number} className="flex-1 relative z-10">
                            <AnimatedBlock delay={index * 0.2} className="flex flex-col items-center text-center">
                                <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden border border-white/10 group">
                                    <Image
                                        src={step.image}
                                        alt={step.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />

                                    {/* Number Badge */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-xl shadow-black">
                                        <span className="font-bebas text-3xl text-red-600">{step.number}</span>
                                    </div>
                                </div>

                                <div className="mt-8 px-4">
                                    <h3 className="text-2xl font-bebas text-white mb-3 tracking-wide">{step.title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimatedBlock>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="https://hubcapstickers.com/stickers/wheel-emblems/" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="rounded-full">
                            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
