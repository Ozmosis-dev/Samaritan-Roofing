import Link from 'next/link'
import { ThumbsUp, HardHat, ShieldCheck, Headset } from 'lucide-react'

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
          <div>
            <p className="font-micro font-semibold text-gold text-[15px] uppercase tracking-wide mb-4">
              Why Choose Samaritan
            </p>
            <h2
              className="font-athelas font-bold text-purple leading-tight mb-6 uppercase"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Why Dahlonega Homeowners Choose Samaritan Roofing
            </h2>
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
            <Link
              href="/#estimate"
              className="inline-block font-micro font-bold text-[14.4px] uppercase tracking-wide bg-gold text-white px-10 py-4 hover:bg-gold/90 transition-colors"
            >
              Book a Free Inspection
            </Link>
          </div>

          {/* Right — 2x2 feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="bg-white p-8 lg:p-10 shadow-sm flex flex-col items-center text-center"
              >
                <div className="mb-4">{feat.icon}</div>
                <h3 className="font-micro font-bold text-[16px] lg:text-[17px] uppercase tracking-wide text-purple mb-4">
                  {feat.title}
                </h3>
                <p className="text-text-gray text-[14.4px] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
