import type { Metadata, Viewport } from "next";
import { bebas, jakarta } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "HubCapStickers - Premium Wheel Emblems, Domed Stickers & Car Decals",
    template: "%s | HubCapStickers - Wheel Emblems & Domed Stickers",
  },
  description:
    "Transform your wheels with premium custom wheel emblems and domed stickers. Hand-crafted resin emblems, car decals, and hub cap stickers with UV protection. Free shipping on orders over €50.",
  keywords: siteConfig.keywords,
  authors: [{ name: "HubCapStickers" }],
  creator: "HubCapStickers",
  publisher: "HubCapStickers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "HubCapStickers",
    title: "HubCapStickers - Premium Wheel Emblems, Domed Stickers & Car Decals",
    description:
      "Premium custom wheel emblems and domed stickers. Hand-crafted resin emblems for hub caps and center wheel covers with UV protection.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HubCapStickers - Custom Wheel Emblems and Domed Stickers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HubCapStickers - Premium Wheel Emblems & Domed Stickers",
    description:
      "Transform your wheels with premium wheel emblems and domed stickers. Hand-crafted resin emblems and car decals.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "Automotive",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HubCapStickers",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: `${siteConfig.url}/contact-us/`,
  },
  sameAs: [],
};

// JSON-LD Product Schema with enhanced keywords
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Wheel Emblems & Domed Stickers",
  description:
    "Premium hand-crafted wheel emblems and domed stickers with UV-resistant resin coating. Perfect for hub caps and center wheel covers.",
  brand: {
    "@type": "Brand",
    name: "HubCapStickers",
  },
  category: "Automotive Accessories",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "24.99",
    highPrice: "49.99",
    offerCount: "100+",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "13000",
  },
};

// JSON-LD FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will wheel emblems and domed stickers actually stick?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We use premium industrial-grade adhesive designed specifically for automotive use. Our hub cap stickers and wheel emblems are heat, cold, and water resistant.",
      },
    },
    {
      "@type": "Question",
      name: "What is the print quality of your car decals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use 4K resolution printing to ensure your custom wheel emblems and domed stickers are crisp, vibrant, and sharp, even for intricate logos.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my own design for custom wheel emblems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, that's what we specialize in! You can upload any image or logo, and we'll turn it into a premium 3D domed emblem for your center wheel covers.",
      },
    },
    {
      "@type": "Question",
      name: "How long do resin emblems and domed stickers last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our domed stickers and resin emblems are coated with a UV-resistant optical resin that prevents yellowing and fading. We back them with a 5-year durability warranty.",
      },
    },
    {
      "@type": "Question",
      name: "Do you ship wheel emblems internationally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we ship our wheel emblems, domed stickers, and car decals worldwide! We have satisfied customers in over 120 countries.",
      },
    },
  ],
};

// JSON-LD LocalBusiness Schema for local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HubCapStickers",
  description: "Premium custom wheel emblems, domed stickers, and car decals manufacturer",
  url: siteConfig.url,
  priceRange: "€€",
  image: `${siteConfig.url}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "EU",
  },
  geo: {
    "@type": "GeoCoordinates",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch and Preconnect for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={siteConfig.url} />
        <link rel="preconnect" href={siteConfig.url} />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${bebas.variable} ${jakarta.variable} antialiased font-sans bg-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}
