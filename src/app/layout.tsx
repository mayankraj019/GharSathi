import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GharSathi",
  description:
    "Stop searching hundreds of rental listings. Fill out one simple requirement form on GharSathi and get matched directly with trusted local property experts.",
  keywords: [
    "GharSathi",
    "Smart Rental Requirement Platform",
    "Rent House",
    "Rental Property Matchmaker",
    "1BHK Rental",
    "2BHK Rental",
    "Verified Brokers",
    "Rent flat without searching",
  ],
  authors: [{ name: "GharSathi Team" }],
  creator: "GharSathi",
  metadataBase: new URL("https://gharsathi.com"),
  openGraph: {
    title: "GharSathi",
    description:
      "Tell us your rental requirements once. Our trusted property experts will find the right home based on your needs.",
    url: "https://gharsathi.com",
    siteName: "GharSathi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GharSathi",
    description:
      "Fill one simple form and let verified property brokers bring tailored rental options to you.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "GharSathi",
    url: "https://gharsathi.com",
    logo: "https://gharsathi.com/icon.svg",
    description:
      "Smart rental requirement platform matching tenant seekers directly with verified property brokers.",
    provider: {
      "@type": "Organization",
      name: "GharSathi",
      url: "https://gharsathi.com",
    },
    areaServed: "India",
    serviceType: "Real Estate Rental Matchmaking",
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-gray-700 antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
