import type { Metadata } from "next";
import { Montserrat, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";
import ScrollAnimations from "@/components/scroll-animations";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-var",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const siteUrl = "https://bodhilearning.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BODHI LEARNING — Awakening Human Potential",
    template: "%s | BODHI LEARNING",
  },
  description:
    "Cambridge-certified training in English language, workforce readiness, technical skills, teacher development, and corporate leadership. Trusted by leading institutions across India and beyond.",
  keywords: [
    "BODHI LEARNING",
    "English language training",
    "Cambridge CELTA",
    "workforce development",
    "corporate training",
    "teacher training",
    "TKT CIDTT",
    "professional development",
    "school coaching",
    "Hyderabad",
  ],
  authors: [{ name: "BODHI LEARNING", url: siteUrl }],
  creator: "BODHI LEARNING",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "BODHI LEARNING",
    title: "BODHI LEARNING — Awakening Human Potential",
    description:
      "Cambridge-certified training in English, workforce readiness, technical skills, teacher development, and corporate leadership.",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "BODHI LEARNING",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "BODHI LEARNING — Awakening Human Potential",
    description:
      "Cambridge-certified training in English, workforce readiness, technical skills, teacher development, and corporate leadership.",
    images: ["/icon-512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${cormorant.variable} scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface antialiased">
        {children}
        <WhatsAppButton />
        <ScrollAnimations />
      </body>
    </html>
  );
}
