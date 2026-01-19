import { Suspense } from "react";
import dynamic from "next/dynamic";

import { Navigation } from "@/components/sections/01-Navigation";
import { HeroScrollAnimation } from "@/components/sections/02-HeroScrollAnimation";
import { SocialProof } from "@/components/sections/03-SocialProof";
import { Features } from "@/components/sections/04-Features";
import { HowItWorks } from "@/components/sections/05-HowItWorks";
import { Footer } from "@/components/sections/10-Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";

// Lazy load below-the-fold sections for faster initial load
const ProductShowcase = dynamic(
  () => import("@/components/sections/06-ProductShowcase").then((mod) => mod.ProductShowcase),
  { ssr: true }
);

const Testimonials = dynamic(
  () => import("@/components/sections/07-Testimonials").then((mod) => mod.Testimonials),
  { ssr: true }
);

const Pricing = dynamic(
  () => import("@/components/sections/08-Pricing").then((mod) => mod.Pricing),
  { ssr: true }
);

const FAQ = dynamic(
  () => import("@/components/sections/09-FAQ").then((mod) => mod.FAQ),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      {/* Skip to content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-red-600 text-white px-4 py-2 rounded z-[100]"
      >
        Skip to main content
      </a>

      <Navigation />

      <main
        id="main-content"
        className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white"
        role="main"
      >
        {/* Hero Section - Above the fold, critical */}
        <HeroScrollAnimation />

        {/* Social proof immediately after hero */}
        <SocialProof />

        {/* Core value proposition */}
        <section aria-label="Features">
          <Features />
        </section>

        {/* Process explanation */}
        <section aria-label="How it works">
          <HowItWorks />
        </section>

        {/* Product gallery - lazy loaded */}
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <section aria-label="Product showcase">
            <ProductShowcase />
          </section>
        </Suspense>

        {/* Social proof - lazy loaded */}
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <section aria-label="Customer testimonials">
            <Testimonials />
          </section>
        </Suspense>

        {/* Pricing - lazy loaded */}
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <section aria-label="Pricing">
            <Pricing />
          </section>
        </Suspense>

        {/* FAQ - lazy loaded */}
        <Suspense fallback={<div className="h-96 bg-black" />}>
          <section aria-label="Frequently asked questions">
            <FAQ />
          </section>
        </Suspense>
      </main>

      <Footer />

      {/* Cookie consent - client-side only */}
      <Suspense fallback={null}>
        <CookieConsent />
      </Suspense>
    </>
  );
}
