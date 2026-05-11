'use client'

import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { SlideInLeft, SlideInRight, FadeUp, StaggerChildren, StaggerItem } from './ui/motion'
import { motion } from 'framer-motion'

const Lightbox = dynamic(() => import('./Lightbox'), { ssr: false })

const galleryImages = [
  { src: '/images/364742838_242998808685655_2414065212046442333_n.jpg', alt: 'Roofing project' },
  { src: '/images/architecture-brick-building-design-209315-scaled.jpg', alt: 'Building exterior' },
  { src: '/images/364747960_242998698685666_7166444402908074858_n.jpg', alt: 'Roofing work' },
  { src: '/images/architecture-building-buy-driveway-209296-scaled.jpg', alt: 'Residential home' },
  { src: '/images/architecture-construction-daylight-design-534228-scaled.jpg', alt: 'Construction' },
  { src: '/images/Roofing-Dahlonega-GA288914939-1.jpeg', alt: 'Roofing Dahlonega' },
]

export default function WelcomeAbout() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const total = galleryImages.length

  function openAt(i: number) { setLightboxIndex(i) }
  function close() { setLightboxIndex(null) }
  function prev() { setLightboxIndex((i) => ((i ?? 0) - 1 + total) % total) }
  function next() { setLightboxIndex((i) => ((i ?? 0) + 1) % total) }
  function goTo(i: number) { setLightboxIndex(i) }

  return (
    <section id="about" className="bg-white relative z-10">
      {/* Main two-column content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          {/* Left */}
          <SlideInLeft>
            <FadeUp delay={0.05}>
              <p className="font-micro font-semibold text-gold text-sm uppercase tracking-widest mb-4">
                Welcome to Samaritan Roofing
              </p>
            </FadeUp>
            <FadeUp delay={0.12}>
              <h2
                className="font-athelas font-bold text-purple leading-[1.1] mb-6 uppercase"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Experienced Roofing Services for Dahlonega Homeowners &amp;
                Businesses
              </h2>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="text-text-gray text-base leading-relaxed mb-4">
                Welcome to Samaritan Roofing — Dahlonega, GA&apos;s trusted roofing
                contractor guided by the principles of &ldquo;Faith. Customers.
                Community.&rdquo; We are more than a roofing company; we are a steadfast
                commitment to building a stronger, more resilient community across
                Lumpkin County and North Georgia.
              </p>
            </FadeUp>
            <FadeUp delay={0.22}>
              <p className="text-text-gray text-base leading-relaxed mb-8 relative">
                With 15 years of keeping our word, we approach every roofing project —
                from routine repairs to full storm restoration — with integrity,
                trustworthiness, and a genuine desire to make a lasting impact.
              </p>
            </FadeUp>

            {/* Feature badges */}
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {[
                'Top Quality\nMaterials',
                'Limited Lifetime\nWarranty',
              ].map((label) => (
                <StaggerItem key={label}>
                  <div className="flex items-start gap-3">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ba914e"
                      strokeWidth="2.5"
                      className="w-5 h-5 shrink-0 mt-0.5"
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </motion.svg>
                    <span className="font-micro font-bold text-sm leading-snug uppercase tracking-wider text-purple">
                      {label.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </SlideInLeft>

          {/* Right — owner photo */}
          <SlideInRight delay={0.1}>
            <div className="relative">
              <motion.div
                className="relative overflow-hidden bg-white aspect-square lg:aspect-4/3 w-full"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/Roofing-Dahlonega-GA28892847238-1.jpeg"
                  alt="Brandon and Candice Delk, Owners of Samaritan Roofing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  priority={true}
                  className="object-cover object-center"
                />
                {/* Owners overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-navy/80 px-6 py-4">
                  <p className="font-micro font-semibold text-gold text-sm uppercase tracking-widest">
                    Owners
                  </p>
                  <p className="font-micro font-semibold text-white text-2xl leading-tight tracking-wide">
                    Brandon + Candice Delk
                  </p>
                </div>
              </motion.div>

              {/* 15+ years badge */}
              <motion.div
                className="bg-gold text-white px-6 py-4 flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="text-2xl leading-none">★</span>
                <p className="font-athelas font-bold text-xl leading-tight tracking-wide uppercase">
                  15+ Years Experience
                </p>
              </motion.div>
            </div>
          </SlideInRight>
        </div>
      </div>

      {/* Photo strip — clickable gallery */}
      <div className="grid grid-cols-3 lg:grid-cols-6 h-48 lg:h-56 mb-16 lg:mb-20">
        {galleryImages.map((img, i) => (
          <motion.button
            key={img.src}
            onClick={() => openAt(i)}
            className="relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-zoom-in"
            aria-label={`View ${img.alt}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 33vw, 17vw"
              className="object-cover group-hover:scale-108 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
              </svg>
            </div>
          </motion.button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
          onGoTo={goTo}
        />
      )}
    </section>
  )
}
