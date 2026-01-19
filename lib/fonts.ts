import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";

export const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-bebas",
    display: "swap",
    preload: true,
});

export const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
    display: "swap",
    preload: true,
});
