import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { faqs, site } from "@/lib/data";
import { Providers } from "@/components/ui/providers";
import { Cursor } from "@/components/ui/cursor";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} | Software for Businesses: Web, Mobile and AI`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "software developer for business",
    "custom web platform",
    "mobile app development",
    "AI automation",
    "business website",
    "freelance software engineer India",
    "MVP development",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07080b" },
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      jobTitle: site.role,
      url: site.url,
      email: `mailto:${site.email}`,
      knowsAbout: ["Web development", "Mobile app development", "AI automation", "SaaS"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} | Software Solutions`,
      description: site.description,
      url: site.url,
      email: site.email,
      telephone: site.phone,
      image: `${site.url}/opengraph-image`,
      areaServed: "Worldwide",
      address: { "@type": "PostalAddress", addressCountry: site.location },
      founder: { "@id": `${site.url}/#person` },
      serviceType: [
        "Custom web platforms and dashboards",
        "Mobile app development",
        "AI and automation",
        "Business websites",
        "E-commerce and booking systems",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} dark h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          Skip to content
        </a>
        <Providers>
          {children}
          <WhatsAppFloat />
          <Cursor />
        </Providers>
      </body>
    </html>
  );
}
