"use client";

import { faq } from '@/config/faq';
import { AnimatedBlock } from '@/components/ui/AnimatedBlock';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/Accordion';
import { useState } from 'react';

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-dark" aria-labelledby="faq-heading">
            <div className="container mx-auto px-4 max-w-2xl">
                <AnimatedBlock className="text-center mb-16">
                    <h2 id="faq-heading" className="text-4xl md:text-5xl font-bebas text-white mb-4">
                        Wheel Emblems <span className="text-red-600">FAQ</span>
                    </h2>
                    <p className="text-lg text-white/60">
                        Everything you need to know about our domed stickers, hub cap stickers, and resin emblems.
                    </p>
                </AnimatedBlock>

                <div className="space-y-2" role="list" aria-label="Frequently asked questions about wheel emblems">
                    {faq.map((item, index) => (
                        <AnimatedBlock key={index} delay={index * 0.05}>
                            <AccordionItem>
                                <AccordionTrigger
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                    id={`faq-question-${index}`}
                                >
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent
                                    isOpen={openIndex === index}
                                    id={`faq-answer-${index}`}
                                    aria-labelledby={`faq-question-${index}`}
                                >
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </AnimatedBlock>
                    ))}
                </div>
            </div>
        </section>
    );
}
