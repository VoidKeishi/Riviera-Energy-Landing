import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.riviera-energy.co"),
  title: {
    default: "Riviera Energy — Where Partnership Meets Performance",
    template: "%s | Riviera Energy",
  },
  description:
    "Engineering and asset integrity consultancy delivering high-confidence project outcomes across the global energy sector. Commissioning, consultancy, and workforce solutions.",
  keywords: [
    "energy consultancy",
    "commissioning",
    "operational readiness",
    "workforce solutions",
    "oil and gas",
    "asset integrity",
    "project consultancy",
    "Singapore",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Riviera Energy — Where Partnership Meets Performance",
    description:
      "Engineering and asset integrity consultancy delivering high-confidence project outcomes across the global energy sector.",
    url: "https://www.riviera-energy.co",
    siteName: "Riviera Energy",
    locale: "en_SG",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Riviera Energy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riviera Energy — Where Partnership Meets Performance",
    description:
      "Engineering and asset integrity consultancy delivering high-confidence project outcomes across the global energy sector.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.riviera-energy.co/#organization",
                  "name": "Riviera Energy Pte Ltd",
                  "url": "https://www.riviera-energy.co",
                  "logo": "https://www.riviera-energy.co/logo-light.png",
                  "description":
                    "Engineering and asset integrity consultancy delivering high-confidence project outcomes across the global energy sector.",
                  "foundingDate": "2014",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "152 Beach Road, #10-07 Gateway East",
                    "addressLocality": "Singapore",
                    "postalCode": "189721",
                    "addressCountry": "SG",
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+65-9040-4928",
                    "contactType": "customer service",
                  },
                  "sameAs": [],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.riviera-energy.co/#website",
                  "url": "https://www.riviera-energy.co",
                  "name": "Riviera Energy",
                  "publisher": {
                    "@id": "https://www.riviera-energy.co/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
