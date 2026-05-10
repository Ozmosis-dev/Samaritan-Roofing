import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Brush, Wrench, Home, Trees } from 'lucide-react'
import { FadeUp, SlideInLeft, SlideInRight, StaggerChildren, StaggerItem } from '@/components/ui/motion'

export const metadata: Metadata = {
  title: 'Exterior Renovations Dahlonega GA | Samaritan Roofing',
  description:
    'Transform your home aesthetics and durability with Samaritan Roofing. We offer siding, painting, decks, and outdoor living spaces in Dahlonega and North Georgia.',
  alternates: {
    canonical: 'https://www.samaritanroofing.com/exterior-renovations',
  },
  openGraph: {
    title: 'Exterior Renovations Dahlonega GA | Samaritan Roofing',
    description:
      'Transform your home aesthetics and durability with Samaritan Roofing. We offer siding, painting, decks, and outdoor living spaces in Dahlonega and North Georgia.',
    url: 'https://www.samaritanroofing.com/exterior-renovations',
    siteName: 'Samaritan Roofing',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Samaritan Roofing — Exterior Renovations Dahlonega GA' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Exterior Renovations Dahlonega GA | Samaritan Roofing',
    description:
      'Transform your home with siding, painting, decks, and outdoor living spaces in Dahlonega, GA.',
    images: ['/images/og-image.jpg'],
  },
}

const services = [
  {
    title: 'Siding',
    icon: Home,
    description:
      "Upgrade your home's appeal with our siding services. We offer vinyl, fiber cement and Hardie board siding options for maximum durability and beauty.",
  },
  {
    title: 'Outdoor Spaces',
    icon: Trees,
    description:
      'Create a stunning outdoor oasis with our custom patio, pergola, and outdoor living space construction services.',
  },
  {
    title: 'Painting',
    icon: Brush,
    description:
      'A fresh coat of paint does wonders for exterior surfaces. From siding to trim, we provide top-tier painting services that transform your home.',
  },
  {
    title: 'Decks & Repairs',
    icon: Wrench,
    description:
      'Enjoy the outdoors with confidence. Our deck building and repair services focus on structural integrity and aesthetics.',
  },
]

const cards = [
  {
    image: '/images/exterior-home-2.png',
    title: 'Revitalize Your Siding',
    description:
      "Discover the perfect match for your home's style from an array of styles, colors, and materials. Improve curb appeal, weatherproofing, insulation, and lower energy bills with top-tier siding installers.",
  },
  {
    image: '/images/painting.png',
    title: 'Transformative Paint Solutions',
    description:
      "Enhance your home's appearance and protection against the elements with expert exterior paint options. From elegant neutrals to vibrant hues, our painting pros deliver a pristine finish to give your home a fresh look.",
  },
  {
    image: '/images/pergola.png',
    title: 'Outdoor Living Spaces',
    description:
      'Design the ultimate home extension with a custom built outdoor living space that serves as an oasis for relaxing or entertaining friends and family in the comfort of your own backyard.',
  },
  {
    image: '/images/deck.png',
    title: 'Deck Builds & Repairs',
    description:
      'From building a brand-new space from the ground up to breathing life back into an existing deck structure, we use robust materials to ensure your deck adds value to your property and stands the test of time.',
  },
]

export default function ExteriorRenovationsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-light-gray/30">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative pt-52 pb-44 lg:pt-72 lg:pb-64 flex items-center justify-center text-center">
          <Image
            src="/images/exterior-home-2-1.png"
            alt="Exterior renovations background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-purple/75" />
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 w-full">
            <FadeUp delay={0.1}>
              <p className="font-micro font-bold text-gold text-xs md:text-sm uppercase tracking-widest mb-6">
                Your Home, Reimagined By North Georgia&apos;s Trusted Roofers
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1
                className="font-athelas font-bold text-white leading-[1.1] uppercase tracking-wide"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3.25rem)' }}
              >
                Exterior Renovations In<br />Dahlonega, GA
              </h1>
            </FadeUp>
          </div>
        </section>

        {/* ── Overlapping Services Box ──────────────────────────── */}
        <section className="relative z-20 -mt-24 max-w-7xl mx-auto px-6 lg:px-8 mb-24">
          <FadeUp>
            <div className="bg-white shadow-xl p-8 lg:p-14 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between">
              <SlideInLeft className="lg:w-[40%]">
                <h2 className="font-micro font-bold text-purple text-lg lg:text-xl leading-snug mb-6 uppercase tracking-wide">
                  Transform Your Home&apos;s Exterior With Dahlonega&apos;s Top Contractor
                </h2>
                <p className="text-text-gray text-sm leading-relaxed font-lato mb-4">
                  At Samaritan Roofing, our expertise extends far beyond residential
                  roofing. We know that your home&apos;s exterior is just as critical to both
                  its overall value and aesthetic appeal.
                </p>
                <p className="text-text-gray text-sm leading-relaxed font-lato">
                  That&apos;s why we offer comprehensive exterior renovation services aimed at
                  boosting curb appeal, protecting your property, and expanding your
                  livable space. Discover how our experienced team can elevate the beauty
                  and functionality of your home.
                </p>
              </SlideInLeft>
              <SlideInRight delay={0.1} className="lg:w-[60%] w-full">
                <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  {services.map((s) => {
                    const Icon = s.icon
                    return (
                      <StaggerItem key={s.title}>
                        <div className="flex gap-4 group">
                          <div className="bg-gold p-3 shrink-0 h-10 w-10 flex items-center justify-center group-hover:bg-gold/80 transition-colors duration-200">
                            <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                          </div>
                          <div>
                            <h3 className="font-micro font-bold text-sm uppercase tracking-wider text-purple mb-2 leading-snug">
                              {s.title}
                            </h3>
                            <p className="text-text-gray text-sm leading-relaxed font-lato">
                              {s.description}
                            </p>
                          </div>
                        </div>
                      </StaggerItem>
                    )
                  })}
                </StaggerChildren>
              </SlideInRight>
            </div>
          </FadeUp>
        </section>

        {/* ── One-Stop Shop ────────────────────────────────────── */}
        <section className="py-20 lg:py-24 bg-light-gray/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <SlideInLeft className="lg:w-1/2 relative h-[350px] lg:h-[400px] w-full shrink-0 overflow-hidden group">
                <Image
                  src="/images/364742838_242998808685655_2414065212046442333_n.jpg"
                  alt="Aerial home view"
                  fill
                  className="object-cover shadow-sm group-hover:scale-105 transition-transform duration-700"
                />
              </SlideInLeft>
              <SlideInRight delay={0.1} className="lg:w-1/2">
                <FadeUp delay={0.08}>
                  <h2
                    className="font-athelas font-bold text-purple leading-[1.1] mb-6 uppercase"
                    style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.25rem)' }}
                  >
                    Your One-Stop Shop For Home Exterior Solutions In North Georgia
                  </h2>
                </FadeUp>
                <FadeUp delay={0.15}>
                  <p className="text-text-gray text-base leading-relaxed mb-6 font-lato">
                    Our fully licensed and fully insured contractors are here to ensure
                    that every aspect of your home meets our uncompromising standard of
                    excellence. Because we offer painting, siding, outdoor living spaces,
                    and gutters all in-house, we save you the hassle of coordinating
                    between different contractors.
                  </p>
                </FadeUp>
                <FadeUp delay={0.22}>
                  <p className="text-text-gray text-base leading-relaxed mb-10 font-lato">
                    Whether you&apos;re looking to touch up your trim or reinvent the entire
                    look of your home, Samaritan Roofing ensures every detail enhances
                    your home&apos;s total value, all under one roof.
                  </p>
                </FadeUp>
                <FadeUp delay={0.28}>
                  <Link
                    href="#estimate"
                    className="inline-block font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-8 py-4 hover:bg-gold/90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                  >
                    Get Your Free Estimate
                  </Link>
                </FadeUp>
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* ── 4 Cards Grid ─────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-light-gray/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {cards.map((card) => (
                <StaggerItem key={card.title}>
                  <div className="bg-white shadow-sm flex flex-col items-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden group">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-600"
                      />
                    </div>
                    <div className="px-8 pb-10 pt-8 text-center grow flex flex-col justify-start">
                      <h3 className="font-micro font-bold text-base lg:text-lg uppercase tracking-widest text-purple mb-4 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-text-gray text-sm leading-relaxed font-lato max-w-md mx-auto">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────── */}
        <section className="relative py-24 lg:py-32 text-center overflow-hidden">
          <Image
            src="/images/interior-construction-of-housing-project-with-drywall-installed-door-for-a-new-home-before.jpg"
            alt="Interior construction plans"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-near-black/85" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
            <FadeUp>
              <p className="font-micro font-bold text-gold text-xs md:text-sm uppercase tracking-widest mb-4">
                Bring Your Vision To Life With Samaritan
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="font-athelas font-bold text-white leading-[1.1] mb-8 uppercase"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
              >
                Looking For A Custom Exterior Solution In Dahlonega Or North Georgia?
              </h2>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="text-white/80 text-sm leading-relaxed mb-10 font-lato max-w-3xl mx-auto">
                If your home improvement needs go beyond standard siding, painting, or
                decking solutions, our custom fabrication capabilities and top-tier
                exterior expertise mean that the only limit is your imagination. Contact
                us to start discussing your fully custom build today.
              </p>
            </FadeUp>
            <FadeUp delay={0.26}>
              <Link
                href="#quote"
                className="inline-block font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-8 py-4 hover:bg-gold/90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                Request A Custom Quote
              </Link>
            </FadeUp>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
