import Image from 'next/image'
import Link from 'next/link'

export default function StormDamageCTA() {
  return (
    <section className="relative py-24 lg:py-28 text-center overflow-hidden">
      <Image
        src="/images/Roofing-Dahlonega-GA537019497-1.jpeg"
        alt="Storm damaged roof"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <p className="font-micro font-semibold text-gold text-sm uppercase tracking-widest mb-5">
          Insurance Claim Specialists
        </p>
        <h2
          className="font-athelas font-bold text-white leading-tight mb-8 uppercase"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
        >
          Storm Damage in Dahlonega? Get Expert Roofing Insurance Claim Help.
        </h2>
        <Link
          href="/#estimate"
          className="inline-block font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-10 py-4 hover:bg-gold/90 transition-colors"
        >
          Get Storm Damage Help Now
        </Link>
      </div>
    </section>
  )
}
