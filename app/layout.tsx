import type { Metadata } from 'next'
import { Lato, Geist } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans',display:'swap'});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato-google',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://samaritanroofing.com'),
  title: 'Roof Repair & Replacement in Dahlonega, GA | Samaritan Roofing',
  description:
    'Samaritan Roofing offers expert roof repair, replacement & free inspections in Dahlonega, GA. 15+ years serving North Georgia homeowners. Get your free quote today.',
  keywords:
    'roofing contractor Dahlonega GA, roof replacement, roof repair, North Georgia roofing',
  alternates: {
    canonical: 'https://samaritanroofing.com/',
  },
  openGraph: {
    title: 'Roof Repair & Replacement in Dahlonega, GA | Samaritan Roofing',
    description:
      'Expert roof repair, replacement & free inspections in Dahlonega, GA. 15+ years serving North Georgia homeowners. Get your free quote today.',
    url: 'https://samaritanroofing.com/',
    siteName: 'Samaritan Roofing',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Samaritan Roofing — Dahlonega GA Roofing Contractor',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Repair & Replacement in Dahlonega, GA | Samaritan Roofing',
    description:
      'Expert roof repair, replacement & free inspections in Dahlonega, GA. 15+ years serving North Georgia homeowners. Get your free quote today.',
    images: ['/images/og-image.jpg'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://samaritanroofing.com/#localbusiness',
      name: 'Samaritan Roofing & Restoration',
      url: 'https://samaritanroofing.com/',
      telephone: '6787494808',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dahlonega',
        addressRegion: 'GA',
        postalCode: '30533',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'Place', name: 'Dahlonega, GA' },
        { '@type': 'Place', name: 'Dawson County, GA' },
        { '@type': 'Place', name: 'White County, GA' },
        { '@type': 'Place', name: 'Hall County, GA' },
        { '@type': 'Place', name: 'Cherokee County, GA' },
        { '@type': 'Place', name: 'Union County, GA' },
        { '@type': 'Place', name: 'Fannin County, GA' },
      ],
      priceRange: '$$',
      image: 'https://samaritanroofing.com/images/Asset-6SR-copy.png',
      sameAs: [
        'https://m.facebook.com/100089266129991/',
        'https://www.thumbtack.com/ga/dahlonega/roofing/samaritan-roofing-restoration-llc/service/440821901933125636',
        'https://share.google/iHAzYYg7QOjgrKZbz',
        'https://www.bbb.org/us/ga/dahlonega/profile/residential-roofing/samaritan-roofing-restoration-llc-0443-91846199',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '42',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://samaritanroofing.com/exterior-renovations/#service',
      name: 'Exterior Renovations',
      description:
        'Samaritan Roofing & Restoration provides comprehensive exterior renovation services including roofing, siding, decks, and custom builds for homeowners in Dahlonega, GA and North Georgia.',
      provider: { '@id': 'https://samaritanroofing.com/#localbusiness' },
      areaServed: { '@type': 'Place', name: 'Dahlonega, GA' },
      serviceType: 'Exterior Renovation',
      url: 'https://samaritanroofing.com/exterior-renovations/',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://samaritanroofing.com/#website',
      url: 'https://samaritanroofing.com/',
      name: 'Samaritan Roofing & Restoration',
      publisher: { '@id': 'https://samaritanroofing.com/#localbusiness' },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(lato.variable, "font-sans", geist.variable)}>
      <head>
        <link rel="preload" href="/fonts/microextendflf-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/microextendflf-bold-webfont.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fimages%2Froof-repairs-old-roof-replacement-with-new-shingles-of-an-apartment-building.jpg&w=1920&q=85"
          imageSrcSet="/_next/image?url=%2Fimages%2Froof-repairs-old-roof-replacement-with-new-shingles-of-an-apartment-building.jpg&w=390&q=85 390w, /_next/image?url=%2Fimages%2Froof-repairs-old-roof-replacement-with-new-shingles-of-an-apartment-building.jpg&w=768&q=85 768w, /_next/image?url=%2Fimages%2Froof-repairs-old-roof-replacement-with-new-shingles-of-an-apartment-building.jpg&w=1080&q=85 1080w, /_next/image?url=%2Fimages%2Froof-repairs-old-roof-replacement-with-new-shingles-of-an-apartment-building.jpg&w=1200&q=85 1200w, /_next/image?url=%2Fimages%2Froof-repairs-old-roof-replacement-with-new-shingles-of-an-apartment-building.jpg&w=1920&q=85 1920w"
          imageSizes="100vw"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Strip known anchor-only hash fragments from the URL so Googlebot
            records the canonical homepage rather than /#about, /#services, etc.
            Uses replaceState so the page scroll position is unaffected. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=window.location.hash;if(['#about','#services','#why','#estimate'].indexOf(h)!==-1){history.replaceState(null,'',window.location.pathname+window.location.search);}})();`,
          }}
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4FYPH5SLLB"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4FYPH5SLLB');
        `}
      </Script>
      <body>{children}</body>
    </html>
  )
}
