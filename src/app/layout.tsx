import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  title: "FixIt",
  description: "FixIt - get things fixed, faster.",
  icons: {
    icon: [{ url: "/brand/logo.png", type: "image/png" }],
    apple: [{ url: "/brand/logo.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        {children}
        <Footer />
        <WhatsAppWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
