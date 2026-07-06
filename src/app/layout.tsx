import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://commercialroofingflorida.net"),
  title: {
    default: "Commercial Roofing Florida | JR&CO — Statewide Commercial Roofers",
    template: "%s | JR&CO Commercial Roofing Florida",
  },
  description:
    "JR&CO is Florida's trusted commercial roofing contractor. Over four decades of veteran-owned, family-operated expertise in TPO, PVC, EPDM, metal, coatings, and 24/7 emergency service.",
  keywords: [
    "commercial roofing Florida",
    "Florida commercial roofers",
    "TPO roofing",
    "PVC roofing",
    "roof repair Florida",
    "commercial roof replacement",
    "storm damage roofing",
  ],
  openGraph: {
    title: "Commercial Roofing Florida | JR&CO",
    description:
      "Florida's trusted commercial roofing contractor. 40+ years of veteran-owned, family-operated craftsmanship. Free storm report & inspection.",
    url: "https://commercialroofingflorida.net",
    siteName: "JR&CO Commercial Roofing Florida",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-dark font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              name: "JR&CO Commercial Roofing Florida",
              description:
                "Veteran-owned, family-operated commercial roofing contractor serving all of Florida.",
              telephone: "+1-833-572-6872",
              url: "https://commercialroofingflorida.net",
              areaServed: "Florida",
              address: {
                "@type": "PostalAddress",
                addressRegion: "FL",
                addressCountry: "US",
              },
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
