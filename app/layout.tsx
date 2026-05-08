import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato-google',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Roofing Contractor Dahlonega GA | Samaritan Roofing',
  description:
    'Samaritan Roofing is your trusted roofing contractor in Dahlonega, GA offering roof replacement, repairs, gutters & more across North Georgia.',
  keywords:
    'roofing contractor Dahlonega GA, roof replacement, roof repair, North Georgia roofing',
  alternates: {
    canonical: 'https://www.samaritanroofing.com/',
  },
  openGraph: {
    title: 'Roofing Contractor Dahlonega GA | Samaritan Roofing',
    description:
      'Trusted roofing contractor in Dahlonega, GA. Roof replacement, repairs, gutters & more across North Georgia.',
    url: 'https://www.samaritanroofing.com/',
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
    title: 'Roofing Contractor Dahlonega GA | Samaritan Roofing',
    description:
      'Trusted roofing contractor in Dahlonega, GA. Roof replacement, repairs, gutters & more across North Georgia.',
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
      image: 'https://www.samaritanroofing.com/images/Asset-6SR-copy.png',
      sameAs: [
        'https://m.facebook.com/100089266129991/',
        'https://www.thumbtack.com/ga/dahlonega/roofing/samaritan-roofing-restoration-llc/service/440821901933125636',
        'https://share.google/iHAzYYg7QOjgrKZbz',
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
    <html lang="en" className={`${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
