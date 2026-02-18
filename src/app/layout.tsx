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
  openGraph: {
    title: "Riviera Energy — Where Partnership Meets Performance",
    description:
      "Engineering and asset integrity consultancy delivering high-confidence project outcomes across the global energy sector.",
    url: "https://www.riviera-energy.co",
    siteName: "Riviera Energy",
    locale: "en_SG",
    type: "website",
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
      </body>
    </html>
  );
}
