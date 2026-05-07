import Link from 'next/link'

export default function MidpageCTA() {
  return (
    <section
      className="relative py-24 lg:py-32 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/peaceful-senior-black-man-meditating-sitting-at-laptop-at-workplace.jpg')" }}
    >
      <div className="absolute inset-0 bg-purple-dark/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2
          className="font-athelas font-semibold text-white leading-tight mb-6 uppercase"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Don&apos;t Just Replace Your Roof — Replace Your Worries. Dahlonega&apos;s
          Trusted Contractor Is Here.
        </h2>
        <p className="text-white/80 text-base max-w-2xl mx-auto mb-10">
          With a foundation deeply rooted in keeping our word, we approach every
          roofing project in Dahlonega and surrounding North Georgia communities with
          integrity, trustworthiness, and a genuine desire to make a positive, lasting
          impact.
        </p>
        <Link
          href="/#estimate"
          className="inline-block font-micro font-bold text-[14.4px] uppercase tracking-wide bg-gold text-white px-10 py-4 hover:bg-gold/90 transition-colors"
        >
          Request My Free Roofing Estimate
        </Link>
      </div>
    </section>
  )
}
