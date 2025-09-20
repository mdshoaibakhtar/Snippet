import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { I18nProvider } from "@/components/providers/i18n-provider"
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Md Shoaib Akhtar - Professional Web Developer & E-commerce Specialist in Dubai, UAE",
    template: "%s | Md Shoaib Akhtar - Web Developer",
  },
  description:
    "Professional web development services in Dubai, UAE. Specializing in custom websites, e-commerce stores, and digital solutions for businesses. Expert in Next.js, React, and Shopify development.",
  keywords: [
    "web developer Dubai",
    "website development UAE",
    "e-commerce developer",
    "Shopify developer Dubai",
    "Next.js developer",
    "React developer UAE",
    "custom website development",
    "online store development",
    "web design Dubai",
    "freelance web developer",
    "business website Dubai",
    "responsive web design",
    "SEO optimization",
    "digital marketing Dubai",
  ],
  authors: [{ name: "Md Shoaib Akhtar", url: "https://md-shoaib.com" }],
  creator: "Md Shoaib Akhtar",
  publisher: "Md Shoaib Akhtar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://md-shoaib.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "ar-AE": "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://md-shoaib.com",
    title: "Md Shoaib Akhtar - Professional Web Developer & E-commerce Specialist in Dubai, UAE",
    description:
      "Professional web development services in Dubai, UAE. Specializing in custom websites, e-commerce stores, and digital solutions for businesses.",
    siteName: "Md Shoaib Akhtar - Web Developer",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md Shoaib Akhtar - Professional Web Developer in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Shoaib Akhtar - Professional Web Developer & E-commerce Specialist",
    description:
      "Professional web development services in Dubai, UAE. Custom websites, e-commerce stores, and digital solutions.",
    images: ["/images/twitter-image.jpg"],
    creator: "@mdshoaibakhtar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playpen+Sans+Arabic:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#344FFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md Shoaib Akhtar",
              jobTitle: "Web Developer & E-commerce Specialist",
              description:
                "Professional web developer specializing in custom websites, e-commerce stores, and digital solutions for businesses in Dubai, UAE.",
              url: "https://md-shoaib.com",
              image: "https://md-shoaib.com/images/md-shoaib.jpg",
              email: "imdshoaibakhtar@gmail.com",
              telephone: "++919905109322",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "UAE",
              },
              sameAs: [
                "https://www.linkedin.com/in/md-shoaib-790b991b3/",
                "https://www.instagram.com/mdshoaibakhtar",
                "https://wa.me/+919905109322",
              ],
              knowsAbout: [
                "Web Development",
                "E-commerce Development",
                "Next.js",
                "React",
                "Shopify",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "SEO Optimization",
              ],
              offers: {
                "@type": "Service",
                serviceType: "Web Development Services",
                areaServed: {
                  "@type": "Place",
                  name: "Dubai, UAE",
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Web Development Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Custom Website Development",
                        description: "Professional custom website development for businesses",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "E-commerce Store Development",
                        description: "Complete e-commerce solutions using Shopify and custom platforms",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Web Application Development",
                        description: "Modern web applications using Next.js and React",
                      },
                    },
                  ],
                },
              },
            }),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Md Shoaib Akhtar Web Development",
              description: "Professional web development services in Dubai, UAE",
              url: "https://md-shoaib.com",
              telephone: "++919905109322",
              email: "imdshoaibakhtar@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "UAE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "25.2048",
                longitude: "55.2708",
              },
              openingHours: "Mo-Su 09:00-18:00",
              priceRange: "$$",
              serviceArea: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
