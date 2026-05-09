'use client'

import Link from 'next/link'
import { ThumbsUp, HardHat, ShieldCheck, Headset } from 'lucide-react'
import { SlideInLeft, SlideInRight, FadeUp } from './ui/motion'
import { motion } from 'framer-motion'

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1]

const features = [
  {
    icon: <ThumbsUp className="w-12 h-12 text-gold" strokeWidth={1.5} />,
    title: 'Trusted Company',
    description:
      'We have 5 star rating and are highly recommended by our customers. We are also registered with the BBB.',
  },
  {
    icon: <HardHat className="w-12 h-12 text-gold" strokeWidth={1.5} />,
    title: 'Experienced',
    description:
      'We have over 15 years combined experience in the home improvement industry. Our team of experts can help provide the solutions you are looking for!',
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-gold" strokeWidth={1.5} />,
    title: 'Licensed + Insured',
    description:
      'We carry comprehensive coverage so you can rest assured you are protected in the event of any emergency.',
  },
  {
    icon: <Headset className="w-12 h-12 text-gold" strokeWidth={1.5} />,
    title: '24/7 Support',
    description:
      'We provide a 24/7 response time for those unexpected emergency repairs. Don\'t wait days for repair, get the help you need right away!',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="bg-light-gray py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <SlideInLeft>
            <FadeUp delay={0.05}>
              <p className="font-micro font-semibold text-gold text-sm uppercase tracking-widest mb-4">
                Why Choose Samaritan
              </p>
            </FadeUp>
            <FadeUp delay={0.12}>
              <h2
                className="font-athelas font-bold text-purple leading-[1.1] mb-6 uppercase"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
              >
                Why Dahlonega Homeowners Choose Samaritan Roofing
              </h2>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="text-text-gray text-base leading-relaxed mb-8">
                At Samaritan Roofing, we understand the importance of having a solid and
                secure roof over your head. That&apos;s why we offer a{' '}
                <strong className="text-near-black">
                  free, comprehensive inspection and quote
                </strong>{' '}
                for any roofing needs you may have. Our team of experts will thoroughly
                examine your roof, attic, gutters, and any other areas you&apos;re concerned
                about. We provide an honest and transparent evaluation of your roofing
                needs, ensuring you have all the information you need to make an informed
                decision.
              </p>
            </FadeUp>
            <FadeUp delay={0.24}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/#estimate"
                  className="inline-block font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-10 py-4 hover:bg-gold/90 transition-colors"
                >
                  Book a Free Inspection
                </Link>
              </motion.div>
            </FadeUp>
          </SlideInLeft>

          {/* Right — 2x2 feature cards */}
          <SlideInRight delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  className="bg-white p-8 lg:p-10 shadow-sm flex flex-col items-start"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: EASE_OUT }}
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}
                >
                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0, rotate: -10 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    {feat.icon}
                  </motion.div>
                  <h3 className="font-micro font-bold text-base uppercase tracking-wide text-purple mb-4">
                    {feat.title}
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed text-left">
                    {feat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}
