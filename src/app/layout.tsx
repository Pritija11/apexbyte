import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexbyte.cloud"),

  title: {
    default: "ApexByte — High-Performance Cloud Infrastructure",
    template: "%s — ApexByte",
  },

  description:
    "ApexByte is a technology startup building high-performance cloud infrastructure for developers and technical teams — self-serve compute, hosting, and infrastructure built for speed and uptime.",

  keywords: [
    "ApexByte",
    "technology startup",
    "cloud infrastructure startup",
    "cloud infrastructure",
    "high performance hosting",
    "developer cloud",
    "self-serve infrastructure",
    "cloud compute",
  ],

  applicationName: "ApexByte",

  authors: [
    {
      name: "ApexByte",
      url: "https://apexbyte.cloud",
    },
  ],

  creator: "ApexByte",
  publisher: "ApexByte",

  category: "Technology",

  alternates: {
    canonical: "https://apexbyte.cloud",
  },

  openGraph: {
    type: "website",
    url: "https://apexbyte.cloud",
    siteName: "ApexByte",
    title: "ApexByte — High-Performance Cloud Infrastructure",
    description:
      "High-performance cloud infrastructure for developers and technical teams — built for speed and uptime.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "ApexByte — High-Performance Cloud Infrastructure",
    description:
      "High-performance cloud infrastructure for developers and technical teams — built for speed and uptime.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ApexByte",
  url: "https://apexbyte.cloud",
  description:
    "ApexByte is a technology startup building high-performance cloud infrastructure for developers and technical teams.",
  email: "info@apexbyte.cloud",
  telephone: "+977 01-5537821",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jhamsikhel",
    addressLocality: "Lalitpur",
    addressCountry: "NP",
  },
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lalitpur",
      addressCountry: "NP",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ApexByte",
  url: "https://apexbyte.cloud",
  description: "ApexByte — High-Performance Cloud Infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
