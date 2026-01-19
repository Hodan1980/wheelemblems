// Text content synchronized with scroll frames
// progress: 0-1 (percentage of scroll)

export interface HeroContentItem {
    start: number;
    end: number;
    title: string;
    subtitle: string;
    position: 'left' | 'right' | 'center';
    isCta?: boolean;
}

export const heroContent: HeroContentItem[] = [
    {
        start: -0.1,
        end: 0.15,
        title: "CUSTOM. DOMED. PRECISE.",
        subtitle: "",
        position: "center",
    },
    {
        start: 0.20,
        end: 0.35,
        title: "4K Print Quality",
        subtitle: "Ultra-sharp details. If you can design it, we can print it.",
        position: "center",
    },
    {
        start: 0.40,
        end: 0.55,
        title: "Industrial Hold",
        subtitle: "Premium adhesive that stays put. Reliable performance, mile after mile.",
        position: "center",
    },
    {
        start: 0.60,
        end: 0.75,
        title: "Peace of Mind",
        subtitle: "5-Year Warranty. 30-Day Money Back Guarantee.",
        position: "center",
    },
    {
        start: 0.80,
        end: 0.95,
        title: "Your Wheels. Your Style.",
        subtitle: "Start your custom order today.",
        position: "center",
        isCta: true,
    },
];
