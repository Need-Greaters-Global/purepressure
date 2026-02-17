import type { Metadata } from "next";
import { PT_Serif, Roboto_Condensed } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pure Pressure | Exterior Building Cleaning in the Lower Mainland",
    template: "%s | Pure Pressure",
  },
  description:
    "Professional gutter cleaning, pressure washing, brush washing, and window cleaning services in Vancouver, Coquitlam, Maple Ridge, Surrey, Langley and the Fraser Valley.",
  metadataBase: new URL("https://purepressure.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://purepressure.ca",
    siteName: "Pure Pressure",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ptSerif.variable} ${robotoCondensed.variable} font-[family-name:var(--font-pt-serif)] antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
