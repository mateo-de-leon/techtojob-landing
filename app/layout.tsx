import type { Metadata } from "next";
import { Sora } from "next/font/google";
import messages from "@/messages/es.json";
import { siteUrl } from "./lib/site";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: messages.seo.title,
    template: "%s | TechToJob",
  },
  description: messages.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: messages.seo.title,
    description: messages.seo.shortDescription,
    url: siteUrl,
    siteName: "TechToJob",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: messages.openGraph.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: messages.seo.title,
    description: messages.seo.shortDescription,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sora.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
