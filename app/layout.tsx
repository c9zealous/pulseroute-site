import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pulseroute.dev"),
  title: "PulseRoute — Predictive payment resilience",
  description:
    "PulseRoute detects payment processor degradation in seconds, not minutes. Smart routing, predictive failover, zero code changes required.",
  openGraph: {
    title: "PulseRoute — Predictive payment resilience",
    description:
      "Detect processor degradation in seconds. Failover automatically. Recover revenue.",
    url: "https://pulseroute.dev",
    siteName: "PulseRoute",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseRoute — Predictive payment resilience",
    description:
      "Detect processor degradation in seconds. Failover automatically. Recover revenue.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
