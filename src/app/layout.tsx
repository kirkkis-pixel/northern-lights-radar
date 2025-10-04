import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Northern Lights Radar - Live Aurora Forecasts in Lapland",
    template: "%s | Northern Lights Radar"
  },
  description: "Real-time aurora borealis forecasts and viewing conditions across Finnish, Swedish, and Norwegian Lapland. Live space weather data, cloud cover, and expert tips for successful aurora hunting.",
  keywords: [
    "northern lights",
    "aurora borealis", 
    "lapland",
    "finland",
    "sweden", 
    "norway",
    "aurora forecast",
    "space weather",
    "aurora hunting",
    "northern lights guide",
    "arctic circle",
    "aurora photography"
  ],
  authors: [{ name: "Northern Lights Radar" }],
  creator: "Northern Lights Radar",
  publisher: "Northern Lights Radar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://northernlightsradar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://northernlightsradar.com',
    siteName: 'Northern Lights Radar',
    title: 'Northern Lights Radar - Live Aurora Forecasts in Lapland',
    description: 'Real-time aurora borealis forecasts and viewing conditions across Finnish, Swedish, and Norwegian Lapland. Live space weather data, cloud cover, and expert tips for successful aurora hunting.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Northern Lights Radar - Live Aurora Forecasts in Lapland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Northern Lights Radar - Live Aurora Forecasts in Lapland',
    description: 'Real-time aurora borealis forecasts and viewing conditions across Finnish, Swedish, and Norwegian Lapland.',
    images: ['/og-image.svg'],
    creator: '@northernlightsradar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="msapplication-TileColor" content="#0F172A" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
