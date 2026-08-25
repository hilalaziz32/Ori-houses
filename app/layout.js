import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/config";
import { localBusinessSchema } from "@/lib/seo";

// Self-hosted at build time: no connection to fonts.googleapis.com / fonts.gstatic.com
// on the critical path, and Next generates a size-adjusted fallback so the swap is
// metric-compatible (no layout shift).
// Inter ships a variable font, so one file covers every weight we use.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: { default: `${SITE.name} | Sell Your Indiana Home Fast for Cash`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  icons: { icon: "/assets/favicon.svg" },
  ...(SITE.googleVerification ? { verification: { google: SITE.googleVerification } } : {}),
};

export const viewport = { themeColor: SITE.themeColor };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Mark JS before first paint so scroll-reveal never flashes content in then out. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
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
