'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/images/roof-repairs-old-roof-replacement-with-new-shingles-of-an-apartment-building.jpg"
          alt="Roofing work in Dahlonega GA"
          fill
          className="object-cover object-center scale-110"
          priority
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-[70px] w-full">
        <div className="max-w-2xl py-24">
          <motion.p
            className="font-micro font-semibold text-gold text-sm tracking-widest mb-5 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
          >
            Faith. Customers. Community. — Serving Dahlonega and North Georgia
            homeowners with integrity since 2009.
          </motion.p>

          <motion.h1
            className="font-athelas font-bold text-white leading-[1.05] mb-6 uppercase"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.3rem)' }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: EASE_OUT }}
          >
            Trusted Roofing Contractor in Dahlonega, GA
          </motion.h1>

          <motion.p
            className="font-lato text-white/90 text-base leading-relaxed mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: EASE_OUT }}
          >
            Get a FREE Roof Inspection, a FREE Estimate &amp; Real Peace of Mind
            — from Dahlonega&apos;s most trusted roofing team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT }}
          >
            <Link
              href="/#estimate"
              className="inline-block font-micro font-bold text-sm uppercase tracking-wider text-white border-2 border-gold px-10 py-4 hover:bg-gold transition-colors duration-300"
            >
              Book My Free Roof Inspection
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
