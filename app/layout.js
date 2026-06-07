import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/config";
import { localBusinessSchema } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: { default: `${SITE.name} | Sell Your Indiana Home Fast for Cash`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  icons: { icon: "/assets/favicon.svg" },
};

export const viewport = { themeColor: SITE.themeColor };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <JsonLd data={localBusinessSchema()} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
