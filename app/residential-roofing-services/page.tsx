import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CTAForm from '@/components/CTAForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Residential Roofing Services Dahlonega GA | Samaritan Roofing',
  description:
    'Samaritan Roofing provides residential roofing services in Dahlonega, GA and North Georgia, including roof replacement, repairs, fascia and soffit repairs, and gutter replacement.',
}

const services = [
  { title: 'Roof Repairs' },
  { title: 'Soffit + Fascia' },
  { title: 'Gutters + Guards' },
  { title: 'Emergency Calls' },
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
  },
  {
    title: 'Soffit Repair',
    description:
      "We provide top-notch soffit repair services that will ensure your home's fascia and rafters are protected from water damage.",
  },
  {
    title: 'Gutters',
    description:
      'Prevent water damage with our high-quality gutter installation and repair services. Keep your home safe and dry all year round.',
  },
  {
    title: 'Gutter Guards',
    description:
      'Protect your property with our durable, low maintenance gutter guards. No more clogs and overflowing gutters.',
  },
]

export default function ResidentialRoofingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center">
          <Image
            src="/images/Roofing-Dahlonega-GA300255932-1.jpeg"
            alt="Residential roofing in Dahlonega GA"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-[70px] w-full">
            <div className="max-w-2xl py-20">
              <h1
                className="font-athelas font-bold text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Residential Roofing Contractor in Dahlonega, GA
              </h1>
              <p className="text-white/80 text-base leading-relaxed max-w-xl">
                At Samaritan Roofing, your trusted roofing contractor serving Dahlonega,
                GA and surrounding North Georgia communities, we specialize in
                residential roofing services including roof replacement, fascia and
                soffit repairs, and gutter replacement.
              </p>
            </div>
          </div>
        </section>

        {/* Services intro */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-10">
              <p className="font-micro font-semibold text-gold text-[15px] uppercase tracking-wide mb-4">
                Choose Samaritan Roofing
              </p>
              <h2
                className="font-athelas font-semibold text-purple leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
              >
                Residential Roofing Services in Dahlonega &amp; North Georgia
              </h2>
              <p className="text-text-gray text-base leading-relaxed">
                From routine repairs to full roof replacements, Samaritan Roofing
                provides reliable solutions built for North Georgia&apos;s weather. Whether
                you&apos;re in Dahlonega, Dawsonville, or Cleveland, our team has you
                covered.
              </p>
            </div>

            {/* Service pills */}
            <div className="flex flex-wrap gap-4 mb-14">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="font-micro font-semibold text-[16px] uppercase tracking-wide border-2 border-gold text-gold px-6 py-3"
                >
                  {s.title}
                </div>
              ))}
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 h-[400px] lg:h-[500px]">
              {galleryImages.map((img) => (
                <div key={img.src} className="relative overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process section */}
        <section className="bg-light-gray py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <h2
                  className="font-athelas font-semibold text-purple leading-tight mb-5"
                  style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)' }}
                >
                  Our Roof Replacement Process in Dahlonega, GA
                </h2>
                <p className="text-text-gray text-base leading-relaxed mb-5">
                  When it comes to replacing your residential roof in Dahlonega or
                  anywhere across North Georgia, Samaritan Roofing follows a systematic
                  and thorough process. Our experienced team ensures that every step is
                  executed with precision, from the initial inspection to the final
                  touches.
                </p>
                <p className="text-text-gray text-base leading-relaxed mb-8">
                  Throughout the replacement process, we prioritize clear communication
                  and transparency. Our team keeps you informed at every stage, ensuring
                  that you have peace of mind and confidence in the quality of our work.
                </p>
                <Link
                  href="#estimate"
                  className="inline-block font-micro font-bold text-[14.4px] uppercase tracking-wide bg-gold text-white px-10 py-4 hover:bg-gold/90 transition-colors"
                >
                  Get Your Free Roof Inspection
                </Link>
              </div>

              <div>
                <ol className="space-y-3">
                  {processSteps.map((step, i) => (
                    <li key={step} className="flex items-center gap-4 bg-white px-5 py-4">
                      <span className="font-athelas font-bold text-gold text-xl w-7 flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-micro font-semibold text-[15px] uppercase tracking-wide text-purple">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive services */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="font-micro font-semibold text-gold text-[15px] uppercase tracking-wide mb-4">
                Choose Samaritan Roofing
              </p>
              <h2
                className="font-athelas font-semibold text-purple leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
              >
                Comprehensive Roofing Services for Dahlonega Homeowners
              </h2>
              <p className="text-text-gray text-base leading-relaxed mb-8">
                We&apos;re committed to delivering excellence in every aspect of roof care
                for homeowners throughout Dahlonega and Lumpkin County. Choose Samaritan
                Roofing for a seamless, all-encompassing approach to roofing maintenance
                and repair, where quality meets reliability.
              </p>
              <Link
                href="#estimate"
                className="inline-block font-micro font-bold text-[14.4px] uppercase tracking-wide bg-gold text-white px-10 py-4 hover:bg-gold/90 transition-colors"
              >
                Book Your Free Roof Inspection
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {detailServices.map((s) => (
                <div key={s.title} className="bg-light-gray p-7">
                  <h3 className="font-micro font-semibold text-[16px] uppercase tracking-wide text-purple mb-3">
                    {s.title}
                  </h3>
                  <p className="text-text-gray text-[14.4px] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials section */}
        <section className="relative py-20 lg:py-24">
          <Image
            src="/images/roofer-working-on-replacement-asphalt-shingle-roof-construction.jpg"
            alt="Roofer working on shingle roof"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/80" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2
                className="font-athelas font-semibold text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
              >
                Premium Roofing Materials Built for North Georgia Weather
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                From high-grade shingles to advanced underlayment, we source materials
                known for their strength, resistance to the elements, and aesthetic
                appeal — important qualities for homes across Dahlonega and the North
                Georgia mountains.
              </p>
              <Link
                href="#estimate"
                className="inline-block font-micro font-bold text-[14.4px] uppercase tracking-wide text-white border-2 border-gold px-10 py-4 hover:bg-gold transition-colors"
              >
                See Our Roofing Options
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-purple py-20 lg:py-24 text-center">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h2
              className="font-athelas font-semibold text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              Ready to Work With a Trusted Roofing Contractor in Dahlonega, GA?
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              Experience peace of mind knowing that our roofing services across
              Dahlonega, Dawsonville, Cleveland, and the surrounding North Georgia area
              are delivered with integrity and professionalism.
            </p>
            <Link
              href="#estimate"
              className="inline-block font-micro font-bold text-[14.4px] uppercase tracking-wide text-white border-2 border-gold px-10 py-4 hover:bg-gold transition-colors"
            >
              Get a Free Roofing Estimate
            </Link>
          </div>
        </section>

        <CTAForm />
      </main>
      <Footer />
    </>
  )
}
