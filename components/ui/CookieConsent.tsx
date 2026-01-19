"use client";

import { useState, useEffect } from 'react';
import { Button } from './Button';
import { Card } from './Card';

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setTimeout(() => setIsVisible(true), 1000);
        }
    }, []);

    const accept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-slide-in">
            <Card className="bg-black/90 border-white/10 backdrop-blur-xl p-6 shadow-2xl">
                <h3 className="text-lg font-bebas text-white mb-2">We use cookies</h3>
                <p className="text-sm text-gray-400 mb-4">
                    To ensure you get the best experience on our website.
                </p>
                <div className="flex gap-2">
                    <Button size="sm" onClick={accept} className="w-full bg-white text-black hover:bg-gray-200">
                        Accept
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setIsVisible(false)} className="w-full">
                        Close
                    </Button>
                </div>
            </Card>
        </div>
    );
}
