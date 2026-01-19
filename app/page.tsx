import { Navigation } from "@/components/sections/01-Navigation";
import { HeroScrollAnimation } from "@/components/sections/02-HeroScrollAnimation";
import { SocialProof } from "@/components/sections/03-SocialProof";
import { Features } from "@/components/sections/04-Features";
import { HowItWorks } from "@/components/sections/05-HowItWorks";
import { ProductShowcase } from "@/components/sections/06-ProductShowcase";
import { Testimonials } from "@/components/sections/07-Testimonials";
import { Pricing } from "@/components/sections/08-Pricing";
import { FAQ } from "@/components/sections/09-FAQ";
import { Footer } from "@/components/sections/10-Footer";
import { CookieConsent } from "@/components/ui/CookieConsent";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Navigation />
      <HeroScrollAnimation />
      <SocialProof />
      <Features />
      <HowItWorks />
      <ProductShowcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <CookieConsent />
    </main>
  );
}
