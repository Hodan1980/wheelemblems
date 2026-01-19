import type { Metadata } from "next";
import { bebas, jakarta } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "HubCapStickers - custom domed wheel emblems",
  description: "Premium hand-made 3D reliability domed stickers for your wheels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${jakarta.variable} antialiased font-sans bg-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}
