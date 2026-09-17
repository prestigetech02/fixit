import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import JsonLdScript from "@/components/JsonLdScript";
import { QuoteModalProvider } from "@/components/QuoteModal";
import { sitewideJsonLd } from "@/lib/json-ld";
import { rootMetadata, siteConfig } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={siteConfig.language} className="h-full scroll-smooth antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <JsonLdScript data={sitewideJsonLd()} />
        <QuoteModalProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppWidget />
          <CookieConsent />
          <Analytics />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
