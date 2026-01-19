"use client";

import { navigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a href="#" className="text-3xl font-bebas tracking-widest text-white uppercase">
                    {siteConfig.name}
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-2xl font-bebas text-white/80 hover:text-white transition-colors uppercase tracking-widest"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <a href="https://hubcapstickers.com/stickers/wheel-emblems/" target="_blank" rel="noopener noreferrer" className="hidden md:block">
                    <Button size="sm" className="rounded-full">
                        Order Now
                    </Button>
                </a>

                {/* Mobile Menu Button Placeholder */}
                <button className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </button>
            </div>
        </header>
    );
}
