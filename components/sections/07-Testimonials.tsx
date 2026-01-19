"use client";

import { testimonials } from '@/config/testimonials';
import { cn } from "@/lib/utils";
import { Marquee } from '@/components/magicui/marquee';
import { Star } from 'lucide-react';

const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

const ReviewCard = ({
    name,
    role,
    quote,
    avatar,
}: {
    name: string;
    role: string;
    quote: string;
    avatar: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-colors"
            )}
        >
            <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-red-600 text-red-600" />
                ))}
            </div>
            <blockquote className="text-sm text-white/80 italic leading-relaxed mb-4">"{quote}"</blockquote>
            <div className="flex flex-row items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bebas text-sm">
                    {name.slice(0, 2)}
                </div>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-bold text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs text-white/40 uppercase tracking-wider">{role}</p>
                </div>
            </div>
        </figure>
    );
};

export function Testimonials() {
    return (
        <section className="py-24 bg-gradient-to-b from-dark to-black overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4">
                    Review <span className="text-red-600">Wall</span>
                </h2>
                <p className="text-lg text-white/60">
                    Join 13,000+ satisfied car enthusiasts.
                </p>
            </div>

            <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
                <div
                    className="flex flex-row items-center gap-4"
                    style={{
                        transform:
                            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)",
                    }}
                >
                    <Marquee pauseOnHover vertical className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                        {secondRow.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                        {firstRow.map((review) => (
                            <ReviewCard key={review.name + "-2"} {...review} />
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover className="[--duration:20s]" vertical>
                        {secondRow.map((review) => (
                            <ReviewCard key={review.name + "-2"} {...review} />
                        ))}
                    </Marquee>
                </div>

                <div className="from-dark pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
                <div className="from-dark pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
                <div className="from-dark pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
                <div className="from-dark pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </div>
        </section>
    );
}
