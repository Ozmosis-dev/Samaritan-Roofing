import Image from 'next/image'
import Link from 'next/link'

const photos = [
  { src: '/images/366626664_252824134369789_8392567229813601249_n.jpg', alt: 'Samaritan Roofing crew completing a job in Dahlonega GA', className: 'row-span-2' },
  { src: '/images/367721266_252518514400351_2636352342363597746_n.jpg', alt: 'North Georgia roofing project by Samaritan Roofing' },
  { src: '/images/373567361_262148730103996_6919455844817923889_n.jpg', alt: 'Samaritan Roofing team on a residential roof in Lumpkin County GA' },
  { src: '/images/370282795_262283493423853_4732951357477937980_n.jpg', alt: 'Roof replacement in progress by Samaritan Roofing in North Georgia', className: 'row-span-2' },
  { src: '/images/380422715_272942955691240_5735936287150425510_n.jpg', alt: 'Samaritan Roofing contractors working on a home in Dawson County GA' },
  { src: '/images/376726193_266483119670557_8907199813045476357_n.jpg', alt: 'Completed roofing project by Samaritan Roofing in Hall County GA' },
  { src: '/images/364787928_243586848626851_1636939987281191696_n.jpg', alt: 'Samaritan Roofing team photo in Dahlonega GA' },
  { src: '/images/365219736_244236668561869_7711716886474415662_n.jpg', alt: 'Samaritan Roofing job site in Cherokee County North Georgia' },
]

export default function HappyCustomers() {
  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-micro font-semibold text-gold text-sm uppercase tracking-widest mb-4">
            Building Our Community
          </p>
          <h2
            className="font-athelas font-bold text-purple leading-[1.1] mb-4 uppercase"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            Our Happy Customers Say It All!
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mb-8" />
          <Link
            href="https://www.google.com/search?q=Samaritans+Roofing+%26+Exteriors+LLC+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-micro font-bold text-sm uppercase tracking-wider text-gold border border-gold px-8 py-3 hover:bg-gold hover:text-white transition-colors"
          >
            See Our Reviews
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Photo mosaic */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3 auto-rows-[180px]">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden ${photo.className ?? ''}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
