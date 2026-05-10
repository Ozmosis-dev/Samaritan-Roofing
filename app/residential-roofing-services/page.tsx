import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { CheckCircle2, Wrench, Home, Shield, Ruler } from 'lucide-react'
import { FadeUp, SlideInLeft, SlideInRight, StaggerChildren, StaggerItem } from '@/components/ui/motion'

export const metadata: Metadata = {
  title: 'Residential Roofing Services Dahlonega GA | Samaritan Roofing',
  description:
    'Samaritan Roofing provides residential roofing services in Dahlonega, GA and North Georgia, including roof replacement, repairs, fascia and soffit repairs, and gutter replacement.',
  alternates: {
    canonical: 'https://www.samaritanroofing.com/residential-roofing-services',
  },
  openGraph: {
    title: 'Residential Roofing Services Dahlonega GA | Samaritan Roofing',
    description:
      'Samaritan Roofing provides residential roofing services in Dahlonega, GA and North Georgia, including roof replacement, repairs, fascia and soffit repairs, and gutter replacement.',
    url: 'https://www.samaritanroofing.com/residential-roofing-services',
    siteName: 'Samaritan Roofing',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Samaritan Roofing — Residential Roofing Services' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residential Roofing Services Dahlonega GA | Samaritan Roofing',
    description:
      'Samaritan Roofing provides residential roofing services in Dahlonega, GA and North Georgia.',
    images: ['/images/og-image.jpg'],
  },
}

const services = [
  { title: 'Roof Repairs', icon: Wrench },
  { title: 'Gutters + Guards', icon: Ruler },
  { title: 'Soffit + Fascia', icon: Home },
  { title: 'Emergency Calls', icon: Shield },
]

const galleryImages = [
  { src: '/images/siding.png', alt: 'Siding work' },
  { src: '/images/pergola.png', alt: 'Pergola construction' },
  { src: '/images/Roofing-Dahlonega-GA145976094-1.jpeg', alt: 'Roofing Dahlonega' },
  { src: '/images/Roofing-Dahlonega-GA255434905-1.jpeg', alt: 'Shingle roofing' },
  { src: '/images/residential-home.png', alt: 'Residential home' },
  { src: '/images/Roofing-Dahlonega-GA329314743-1.jpeg', alt: 'Roofing project' },
]

const processSteps = [
  'Comprehensive Inspection',
  'Preparation for Tearoff',
  'Remove Existing Materials',
  'Inspect and Address Any Rot',
  'Apply Ice & Water Shield',
  'Install Synthetic Underlayment',
  'Install Drip Edge & Starter Strip',
  'Installation of Premium Shingles',
  'Improve Ventilation with Ridge Vent',
  'Install Leak-Free Perma Boots',
  'Clean up & Final Inspection',
]

const detailServices = [
  {
    title: 'Fascia Repair',
    description:
      'Our team offers expert fascia repair services that guarantee both functional and aesthetically pleasing results.',
    iconSrc: '/icons/fascia-repair.svg',
  },
  {
    title: 'Soffit Repair',
    description:
      "We provide top-notch soffit repair services that will ensure your home's fascia and rafters are protected from water damage.",
    iconSrc: '/icons/soffit-repair.svg',
  },
  {
    title: 'Gutters',
    description:
      'Prevent water damage with our high-quality gutter installation and repair services. Keep your home safe and dry all year round.',
    iconSrc: '/icons/gutters.svg',
  },
  {
    title: 'Gutter Guards',
    description:
      'Protect your property with our durable, low maintenance gutter guards. No more clogs and overflowing gutters.',
    iconSrc: '/icons/gutter-guards.svg',
  },
]

export default function ResidentialRoofingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative pt-52 pb-44 lg:pt-72 lg:pb-64 flex items-center justify-center text-center">
          <Image
            src="/images/Roofing-Dahlonega-GA300255932-1.jpeg"
            alt="Residential roofing in Dahlonega GA"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-purple/75" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">
            <FadeUp delay={0.1}>
              <h1
                className="font-athelas font-bold text-white leading-[1.1] mb-6 uppercase tracking-wide"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}
              >
                Residential Roofing<br />Contractor in Dahlonega, GA
              </h1>
            </FadeUp>
            <FadeUp delay={0.22}>
              <p className="text-white/90 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto font-lato">
                At Samaritan Roofing, your trusted roofing contractor serving Dahlonega,
                GA and surrounding North Georgia communities, we specialize in
                residential roofing services including roof replacement, fascia and
                soffit repairs, and gutter replacement.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── Overlapping Services Box ──────────────────────────── */}
        <section className="relative z-20 -mt-24 max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <FadeUp>
            <div className="bg-white shadow-xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between">
              <SlideInLeft className="lg:w-[45%]">
                <h2 className="font-micro font-bold text-purple text-lg lg:text-xl leading-snug mb-5 uppercase tracking-wide">
                  Residential Roofing Services In Dahlonega & North Georgia
                </h2>
                <p className="text-text-gray text-sm leading-relaxed font-lato">
                  From routine repairs to full roof replacements, Samaritan Roofing
                  provides reliable solutions built for North Georgia's weather. Whether
                  you're in Dahlonega, Dawsonville, or Cleveland, our team has you
                  covered.
                </p>
              </SlideInLeft>
              <StaggerChildren className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {services.map((s) => {
                  const Icon = s.icon
                  return (
                    <StaggerItem key={s.title}>
                      <div className="flex items-center gap-4 p-4 border border-gray-100 shadow-sm bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                        <div className="bg-gold p-2.5 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                        </div>
                        <span className="font-micro font-bold text-xs uppercase tracking-wider text-purple">
                          {s.title}
                        </span>
                      </div>
                    </StaggerItem>
                  )
                })}
              </StaggerChildren>
            </div>
          </FadeUp>
        </section>

        {/* ── Gallery Strip ────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
          <StaggerChildren className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {galleryImages.map((img) => (
              <StaggerItem key={img.src}>
                <div className="relative w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] overflow-hidden shadow-sm group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="140px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        {/* ── Process Section ──────────────────────────────────── */}
        <section className="bg-light-gray py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <SlideInLeft>
                <FadeUp delay={0.05}>
                  <h2
                    className="font-athelas font-bold text-purple leading-[1.1] mb-6 uppercase"
                    style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}
                  >
                    Our Roof Replacement Process in Dahlonega, GA
                  </h2>
                </FadeUp>
                <FadeUp delay={0.12}>
                  <p className="text-text-gray text-base leading-relaxed mb-6 font-lato">
                    When it comes to replacing your residential roof in Dahlonega or
                    anywhere across North Georgia, Samaritan Roofing follows a systematic
                    and thorough process. Our experienced team ensures that every step is
                    executed with precision, from the initial inspection to the final
                    touches.
                  </p>
                </FadeUp>
                <FadeUp delay={0.18}>
                  <p className="text-text-gray text-base leading-relaxed mb-10 font-lato">
                    Throughout the replacement process, we prioritize clear communication
                    and transparency. Our team keeps you informed at every stage, ensuring
                    that you have peace of mind and confidence in the quality of our work.
                  </p>
                </FadeUp>
                <FadeUp delay={0.24}>
                  <Link
                    href="#estimate"
                    className="inline-block font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-8 py-4 hover:bg-gold/90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  >
                    Get Your Free Roof Inspection
                  </Link>
                </FadeUp>
              </SlideInLeft>

              <SlideInRight delay={0.1}>
                <div className="bg-white p-8 lg:p-10 shadow-sm border border-gray-50">
                  <StaggerChildren className="space-y-4">
                    {processSteps.map((step, i) => (
                      <StaggerItem key={step}>
                        <li className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0 list-none">
                          <div className="text-gold shrink-0">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <span className="font-micro font-bold text-xs uppercase tracking-wider text-text-gray">
                            {step}
                          </span>
                          <span className="ml-auto font-micro text-xs text-mid-gray shrink-0">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </li>
                      </StaggerItem>
                    ))}
                  </StaggerChildren>
                </div>
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* ── Comprehensive Services ───────────────────────────── */}
        <section className="bg-light-gray/50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <SlideInLeft className="lg:w-[45%]">
                <FadeUp delay={0.05}>
                  <p className="font-micro font-bold text-gold text-xs uppercase tracking-widest mb-4">
                    Choose Samaritan Roofing
                  </p>
                </FadeUp>
                <FadeUp delay={0.12}>
                  <h2
                    className="font-athelas font-bold text-purple leading-[1.1] mb-6 uppercase"
                    style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}
                  >
                    Comprehensive Roofing Services for Dahlonega Homeowners
                  </h2>
                </FadeUp>
                <FadeUp delay={0.18}>
                  <p className="text-text-gray text-base leading-relaxed mb-10 font-lato">
                    We&apos;re committed to delivering excellence in every aspect of roof care
                    for homeowners throughout Dahlonega and Lumpkin County. Choose Samaritan
                    Roofing for a seamless, all-encompassing approach to roofing maintenance
                    and repair, where quality meets reliability.
                  </p>
                </FadeUp>
                <FadeUp delay={0.24}>
                  <Link
                    href="#estimate"
                    className="inline-block font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-8 py-4 hover:bg-gold/90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  >
                    Book Your Free Roof Inspection
                  </Link>
                </FadeUp>
              </SlideInLeft>

              <SlideInRight delay={0.1} className="lg:w-[55%] w-full">
                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {detailServices.map((s) => (
                    <StaggerItem key={s.title}>
                      <div className="bg-white p-8 text-center shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 h-full">
                        <div className="flex justify-center mb-6">
                          <Image
                            src={s.iconSrc}
                            alt={`${s.title} icon`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <h3 className="font-micro font-bold text-sm uppercase tracking-wider text-purple mb-4 leading-snug">
                          {s.title}
                        </h3>
                        <p className="text-text-gray text-sm leading-relaxed font-lato">
                          {s.description}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* ── Materials Section ────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <SlideInLeft className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full shrink-0 overflow-hidden group">
                <Image
                  src="/images/roofer-working-on-replacement-asphalt-shingle-roof-construction.jpg"
                  alt="Roofer working on shingle roof"
                  fill
                  className="object-cover shadow-lg group-hover:scale-105 transition-transform duration-700"
                />
              </SlideInLeft>
              <SlideInRight delay={0.1} className="lg:w-1/2">
                <FadeUp delay={0.1}>
                  <h2
                    className="font-athelas font-bold text-purple leading-[1.1] mb-6 uppercase"
                    style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}
                  >
                    Premium Roofing Materials Built for North Georgia Weather
                  </h2>
                </FadeUp>
                <FadeUp delay={0.18}>
                  <p className="text-text-gray text-base leading-relaxed mb-10 font-lato">
                    From high-grade shingles to advanced underlayment, we source materials
                    known for their strength, resistance to the elements, and aesthetic
                    appeal — important qualities for homes across Dahlonega and the North
                    Georgia mountains.
                  </p>
                </FadeUp>
                <FadeUp delay={0.24}>
                  <Link
                    href="#options"
                    className="inline-block font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-8 py-4 hover:bg-gold/90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  >
                    View Our Roofing Options
                  </Link>
                </FadeUp>
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────── */}
        <section className="relative py-24 lg:py-32 text-center overflow-hidden">
          <Image
            src="/images/aerial-photo-of-house-surrounded-by-luscious-land-2789121.jpg"
            alt="Aerial view"
            fill
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-near-black/80" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
            <FadeUp>
              <h2
                className="font-athelas font-bold text-white leading-[1.1] mb-6 uppercase"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}
              >
                Ready to Work With a Trusted Roofing Contractor in Dahlonega, GA?
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="text-white/80 text-base leading-relaxed mb-10 font-lato">
                Experience peace of mind knowing that our roofing services across
                Dahlonega, Dawsonville, Cleveland, and the surrounding North Georgia area
                are delivered with integrity and professionalism.
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <Link
                href="#estimate"
                className="inline-block font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-8 py-4 hover:bg-gold/90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                Get a Free Estimate Today
              </Link>
            </FadeUp>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
