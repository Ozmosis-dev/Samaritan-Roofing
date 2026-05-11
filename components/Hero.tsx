'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect } from 'react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current || !parallaxRef.current) return
      const { top, height } = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -top / height))
      parallaxRef.current.style.transform = `translateY(${progress * 25}%)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background */}
      <div ref={parallaxRef} className="absolute inset-0">
        <Image
          src="/images/roof-repairs-old-roof-replacement-with-new-shingles-of-an-apartment-building.jpg"
          alt="Roofing work in Dahlonega GA"
          fill
          sizes="100vw"
          className="object-cover object-center scale-110"
          priority={true}
          quality={85}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-[70px] w-full">
        <div className="max-w-2xl py-24">
          <p className="font-micro font-semibold text-gold text-sm tracking-widest mb-5 uppercase">
            Faith. Customers. Community. — Serving Dahlonega and North Georgia
            homeowners with integrity since 2009.
          </p>

          <h1
            className="font-athelas font-bold text-white leading-[1.05] mb-6 uppercase"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.3rem)' }}
          >
            Trusted Roofing Contractor in Dahlonega, GA
          </h1>

          <p className="font-lato text-white/90 text-base leading-relaxed mb-8 max-w-xl">
            Get a FREE Roof Inspection, a FREE Estimate &amp; Real Peace of Mind
            — from Dahlonega&apos;s most trusted roofing team.
          </p>

          <Link
            href="/#estimate"
            className="inline-block font-micro font-bold text-sm uppercase tracking-wider text-white border-2 border-gold px-10 py-4 hover:bg-gold transition-colors duration-300"
          >
            Book My Free Roof Inspection
          </Link>
        </div>
      </div>
    </section>
  )
}
