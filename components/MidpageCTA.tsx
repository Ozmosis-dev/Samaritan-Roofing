'use client'

import Link from 'next/link'
import { FadeUp } from './ui/motion'
import { motion } from 'framer-motion'

export default function MidpageCTA() {
  return (
    <section
      className="relative py-24 lg:py-32 bg-fixed bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/Roofing-Dahlonega-GA312604790-1.jpeg')" }}
    >
      <div className="absolute inset-0 bg-purple-dark/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeUp>
          <h2
            className="font-athelas font-bold text-white leading-[1.1] mb-6 uppercase"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Don&apos;t Just Replace Your Roof — Replace Your Worries. Dahlonega&apos;s
            Trusted Contractor Is Here.
          </h2>
        </FadeUp>
        <FadeUp delay={0.12}>
          <p className="text-white/80 text-base max-w-2xl mx-auto mb-10">
            With a foundation deeply rooted in keeping our word, we approach every
            roofing project in Dahlonega and surrounding North Georgia communities with
            integrity, trustworthiness, and a genuine desire to make a positive, lasting
            impact.
          </p>
        </FadeUp>
        <FadeUp delay={0.22}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              href="/#estimate"
              className="inline-block font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-10 py-4 hover:bg-gold/90 transition-colors"
            >
              Request My Free Roofing Estimate
            </Link>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  )
}
