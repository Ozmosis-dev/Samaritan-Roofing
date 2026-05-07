import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <Image
        src="/images/roof-repairs-old-roof-replacement-with-new-shingles-of-an-apartment-building.jpg"
        alt="Roofing work in Dahlonega GA"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay — heavier on left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-[70px] w-full">
        <div className="max-w-2xl py-24">
          <h1 className="font-athelas font-bold text-white leading-[1.1] mb-6 uppercase"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.3rem)' }}>
            Trusted Roofing Contractor in Dahlonega, GA
          </h1>

          <p className="font-micro font-semibold text-gold text-[15px] tracking-wide mb-5 uppercase">
            Faith. Customers. Community. — Serving Dahlonega and North Georgia
            homeowners with integrity since 2009.
          </p>

          <p className="font-lato text-white/90 text-base mb-8 max-w-xl">
            Get a FREE Roof Inspection, a FREE Estimate &amp; Real Peace of Mind
            — from Dahlonega&apos;s most trusted roofing team.
          </p>

          <Link
            href="/#estimate"
            className="inline-block font-micro font-bold text-[14.4px] uppercase tracking-wide text-white border-2 border-gold px-10 py-4 hover:bg-gold transition-colors"
          >
            Book My Free Roof Inspection
          </Link>
        </div>
      </div>
    </section>
  )
}
