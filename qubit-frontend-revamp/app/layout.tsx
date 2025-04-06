import type { Metadata } from "next";
import './globals.css';
import { Plus_Jakarta_Sans } from "next/font/google";
// import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: "Qubit - Connect. Create. Thrive.",
  description: "Qubit offers Quickie for seamless shopping, QuickGig for freelancing opportunities, and Quantumania for a thriving study community.",
  keywords: "Qubit, Quickie, QuickGig, Quantumania, shopping, freelancing, study community, quantum computing",
  openGraph: {
    title: "Qubit - Connect. Create. Thrive.",
    description: "Explore Quickie for shopping, QuickGig for freelancing, and Quantumania for educational resources.",
    url: "https://qubit.mobi",
    type: "website",
    siteName: "Qubit",
    images: [
      {
        url: "https://qubit.mobi/assets/website.jpg",
        width: 800,
        height: 600,
        alt: "Qubit Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@QubitPlatform",
    title: "Qubit - Connect. Create. Thrive.",
    description: "Discover Quickie, QuickGig, and Quantumania on Qubit.",
    images: [
      {
        url: "https://qubit.mobi/assets/website.jpg",
        alt: "Qubit Platform"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Qubit offers Quickie for seamless shopping, QuickGig for freelancing opportunities, and Quantumania for a thriving study community." />
        <meta name="keywords" content="Qubit, Quickie, QuickGig, Quantumania, shopping, freelancing, study community, quantum computing" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qubit.mobi" />
        <meta property="og:site_name" content="Qubit - Connect. Create. Thrive." />
        <meta property="og:title" content="Qubit - Connect. Create. Thrive." />
        <meta property="og:description" content="Explore Quickie for shopping, QuickGig for freelancing, and Quantumania for educational resources." />
        <meta property="og:image" content="https://qubit.mobi/assets/website.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@QubitPlatform" />
        <meta name="twitter:title" content="Qubit - Connect. Create. Thrive." />
        <meta name="twitter:description" content="Discover Quickie, QuickGig, and Quantumania on Qubit." />
        <meta name="twitter:image" content="https://qubit.mobi/assets/website.jpg" />
        <link rel="canonical" href="https://qubit.mobi" />
      </head>
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}>
        {/* <ThemeProvider attribute="class" defaultTheme="dark"> */}
          <Analytics />
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
