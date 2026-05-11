import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Welcome | Samaritan Roofing & Restoration',
  description:
    "Learn about Samaritan Roofing & Restoration — Dahlonega GA's trusted roofing contractor serving North Georgia since 2009.",
  alternates: {
    canonical: 'https://samaritanroofing.com/welcome/',
  },
}

export default function WelcomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-light-gray/30 pt-[130px]">

        {/* Page Header */}
        <section className="bg-purple py-16 lg:py-20 text-center">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-micro font-bold text-gold text-xs md:text-sm uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h1
              className="font-athelas font-bold text-white leading-tight uppercase tracking-wide"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)' }}
            >
              Welcome to Samaritan Roofing &amp; Restoration
            </h1>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="bg-white shadow-sm p-8 lg:p-14">

              <p className="font-micro font-bold text-gold text-xs uppercase tracking-widest mb-3">
                Published May 2025
              </p>

              <p className="text-text-gray text-base leading-relaxed font-lato mb-6">
                If you live in Dahlonega or anywhere across North Georgia, you already know how quickly the weather can change — and what that means for your roof. Hailstorms, heavy rain, high winds, and the wear and tear of mountain seasons can take a real toll on your home. That's exactly why Samaritan Roofing &amp; Restoration was built: to give homeowners in this area a roofing contractor they can trust.
              </p>

              <h2 className="font-micro font-bold text-purple text-sm uppercase tracking-wide mb-3 mt-8">
                15+ Years Serving North Georgia
              </h2>
              <p className="text-text-gray text-base leading-relaxed font-lato mb-6">
                With more than 15 years of hands-on experience, our team has worked on hundreds of roofs across Lumpkin, Dawson, Hall, Cherokee, and White counties. We know the homes here. We know the climate. And we know what it takes to protect your biggest investment from the elements.
              </p>

              <h2 className="font-micro font-bold text-purple text-sm uppercase tracking-wide mb-3 mt-8">
                Everything Your Home's Exterior Needs
              </h2>
              <p className="text-text-gray text-base leading-relaxed font-lato mb-6">
                We're not just a roofing company — we're a full-service exterior contractor. Whether you need a complete shingle roof replacement, a metal roofing system, gutter installation, help navigating an insurance claim after storm damage, or a full exterior renovation, we handle it all under one roof. That means less hassle and more consistency for you.
              </p>

              <h2 className="font-micro font-bold text-purple text-sm uppercase tracking-wide mb-3 mt-8">
                Faith. Customers. Community.
              </h2>
              <p className="text-text-gray text-base leading-relaxed font-lato mb-6">
                Our name isn't just a name — it reflects who we are. We built Samaritan Roofing on three core values: faith, our customers, and this community. That means we show up on time, do the job right the first time, treat your home like it's our own, and stand behind every project we complete. Our reputation in Dahlonega and across North Georgia means everything to us.
              </p>

              <p className="text-text-gray text-base leading-relaxed font-lato mb-10">
                Whether you're dealing with unexpected storm damage or planning a long overdue roof replacement, we'd love to earn your trust. Reach out today for a free estimate — no pressure, no runaround.
              </p>

              <Link
                href="/#estimate"
                className="inline-block font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-8 py-4 hover:bg-gold/90 transition-colors shadow-sm"
              >
                Get Your Free Estimate
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
