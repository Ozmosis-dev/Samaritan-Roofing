import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    image: '/images/Roofing-Dahlonega-GA300255932-1.jpeg',
    title: 'Shingle Roofing',
    description:
      'Discover our wide range of beautiful and durable shingle roofing options, designed to suit your home\'s unique style and provide long-lasting protection from the elements.',
  },
  {
    image: '/images/Roofing-Dahlonega-GA255434905-1.jpeg',
    title: 'Metal Roofing',
    description:
      'Experience the ultimate protection and style with our exceptional metal roofing solutions, built to last and withstand the test of time.',
  },
  {
    image: '/images/Simple-Deck-Design-Ideas-to-Improve-Your-Outdoor-Space-web-e1709751317244.jpg',
    title: 'Home Exteriors',
    description:
      'Transform your home\'s exterior with our comprehensive range of services including siding, paint, decks and build-outs. Trust us to enhance your home\'s curb appeal and value.',
  },
  {
    image: '/images/Roofing-Dahlonega-GA220749158-1.jpeg',
    title: 'Gutters',
    description:
      'Protect your home and experience the best gutter solutions for any weather. Our products and services ensure top shape and peace of mind.',
  },
  {
    image: '/images/interior-construction-of-housing-project-with-drywall-installed-door-for-a-new-home-before.jpg',
    title: 'Restoration',
    description:
      'Revive the impeccable beauty and grandeur of your home with the unparalleled expertise and skillful restoration services offered by our team of professionals.',
  },
  {
    image: '/images/Roofing-Dahlonega-GA106735844-1.jpeg',
    title: 'Insurance Claims',
    description:
      'Get the coverage you deserve with our experienced team of professionals who are dedicated to providing you with expert assistance throughout the process of your insurance claim.',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-light-gray py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-micro font-semibold text-gold text-[15px] uppercase tracking-wide mb-4">
            What We Offer
          </p>
          <h2
            className="font-athelas font-semibold text-purple leading-tight uppercase mb-8"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}
          >
            Roofing &amp; Restoration Services<br className="hidden sm:block" /> in Dahlonega, GA
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group bg-white shadow-sm flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex-grow">
                <h3 className="font-micro font-bold text-[19.2px] text-purple uppercase mb-4">
                  {service.title}
                </h3>
                <p className="text-text-gray text-[14.4px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
