import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://blindsight.app"),
  title: {
    default: "BlindSight — See Beyond The Curve",
    template: "%s | BlindSight",
  },
  description:
    "BlindSight is a road safety platform that prevents blind-curve accidents on mountain roads. Real-time vehicle presence detection for Kerala's hairpin bends — Vagamon, Munnar, Idukki, Wayanad.",
  keywords: [
    "blind curve safety",
    "mountain road safety",
    "road accident prevention",
    "Kerala road safety",
    "hairpin bend warning",
    "vehicle detection system",
    "Vagamon road safety",
    "Munnar road safety",
    "ghat road safety",
    "V2V communication",
    "road safety technology",
  ],
  authors: [{ name: "BlindSight", url: "https://blindsight.app" }],
  creator: "BlindSight",
  publisher: "BlindSight",
  category: "Road Safety Technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://blindsight.app",
    siteName: "BlindSight",
    title: "BlindSight — See Beyond The Curve",
    description:
      "Prevent blind-curve accidents before they happen. Real-time vehicle awareness for mountain roads.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BlindSight — See Beyond The Curve",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@blindsight_app",
    creator: "@blindsight_app",
    title: "BlindSight — See Beyond The Curve",
    description:
      "Prevent blind-curve accidents before they happen. Real-time vehicle awareness for mountain roads.",
    images: ["/og-image.png"],
  },
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
  alternates: {
    canonical: "https://blindsight.app",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://blindsight.app/#organization",
      name: "BlindSight",
      url: "https://blindsight.app",
      logo: {
        "@type": "ImageObject",
        url: "https://blindsight.app/logo.png",
      },
      description:
        "Road safety technology company focused on preventing blind-curve accidents on mountain roads.",
      foundingDate: "2026",
      areaServed: "IN",
      knowsAbout: ["Road Safety", "V2X Communication", "IoT", "Mountain Road Safety"],
    },
    {
      "@type": "WebSite",
      "@id": "https://blindsight.app/#website",
      url: "https://blindsight.app",
      name: "BlindSight",
      publisher: { "@id": "https://blindsight.app/#organization" },
    },
    {
      "@type": "Product",
      "@id": "https://blindsight.app/#product",
      name: "BlindSight Safety System",
      description:
        "Real-time vehicle presence detection system for blind curve safety on mountain roads.",
      brand: { "@id": "https://blindsight.app/#organization" },
      category: "Road Safety Technology",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/PreOrder",
        priceCurrency: "INR",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#F8FAFC] text-[#0F172A]`}
      >
        {children}
      </body>
    </html>
  );
}
