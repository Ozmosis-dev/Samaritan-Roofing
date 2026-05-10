'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeUp, StaggerChildren } from './ui/motion'
import { motion } from 'framer-motion'

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]

const services = [
  {
    image: '/images/Roofing-Dahlonega-GA300255932-1.jpeg',
    title: 'Shingle Roofing',
    description:
      'We install shingle roofs built to stand up to North Georgia\'s weather. Whether you need a full replacement or a spot repair, we\'ll get it done right. Call us for a free inspection anywhere in the Dahlonega area.',
    href: '/residential-roofing-services',
    linkText: 'Explore Shingle Roofing',
  },
  {
    image: '/images/Roofing-Dahlonega-GA255434905-1.jpeg',
    title: 'Metal Roofing',
    description:
      'Metal roofs outlast most other options and hold up well in rough mountain weather. We install standing seam and metal panel systems for homes across Lumpkin County and North Georgia. Ask us if metal roofing is right for your home.',
    href: '/residential-roofing-services',
    linkText: 'See Metal Roofing Options',
  },
  {
    image: '/images/Simple-Deck-Design-Ideas-to-Improve-Your-Outdoor-Space-web-e1709751317244.jpg',
    title: 'Home Exteriors',
    description:
      'From siding and paint to custom decks and outdoor living spaces, we handle it all. One crew, one contractor — no juggling multiple bids. We serve Dahlonega and all of North Georgia.',
    href: '/exterior-renovations',
    linkText: 'View Exterior Services',
  },
  {
    image: '/images/Roofing-Dahlonega-GA220749158-1.jpeg',
    title: 'Gutters',
    description:
      'Good gutters protect your foundation, siding, and roof line from water damage. We install, repair, and replace gutters for homes across North Georgia. Get a free estimate before the next big storm hits.',
    href: '/residential-roofing-services',
    linkText: 'Learn About Our Gutters',
  },
  {
    image: '/images/interior-construction-of-housing-project-with-drywall-installed-door-for-a-new-home-before.jpg',
    title: 'Restoration',
    description:
      'Storm damage, aging materials, water intrusion — we fix it all. Our restoration team brings your home back to solid condition using quality materials that last. Serving Dahlonega and surrounding North Georgia counties.',
    href: '/#estimate',
    linkText: 'Get Restoration Help',
  },
  {
    image: '/images/Roofing-Dahlonega-GA299135945-1.jpeg',
    title: 'Insurance Claims',
    description:
      'Roof insurance claims can feel overwhelming — we make the process simpler. Our team knows what adjusters look for and will help you get the coverage you\'re owed. We\'ve helped homeowners across North Georgia get fair settlements.',
    href: '/#estimate',
    linkText: 'Start Your Insurance Claim',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-light-gray py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <p className="font-micro font-semibold text-gold text-sm uppercase tracking-widest mb-4">
              What We Offer
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              className="font-athelas font-bold text-purple leading-[1.1] uppercase mb-8"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}
            >
              Roofing &amp; Restoration Services<br className="hidden sm:block" /> in Dahlonega, GA
            </h2>
          </FadeUp>
          <FadeUp delay={0.14}>
            <div className="w-20 h-[2px] bg-gold mx-auto" />
          </FadeUp>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group bg-white shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6, ease: EASE_OUT }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex-grow flex flex-col">
                <h3 className="font-micro font-bold text-xl text-purple uppercase mb-4">
                  {service.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 font-micro font-bold text-xs uppercase tracking-wide text-gold hover:text-gold/80 transition-colors group/link"
                >
                  {service.linkText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
