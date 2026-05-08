import Image from 'next/image'

const categories = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    label: 'Residential Roofing',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
      </svg>
    ),
    label: 'Home Exteriors',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    label: 'Insurance Claims',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    label: 'Complete Restoration',
  },
]

export default function ServicesOverview() {
  return (
    <section className="relative bg-light-gray">
      {/* Dark background with photo */}
      <div className="relative lg:min-h-[550px] pt-16 pb-32 flex flex-col justify-center">
        <Image
          src="/images/aerial-photo-of-house-surrounded-by-luscious-land-2789121.jpg"
          alt="North Georgia home aerial view"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center w-full">
          <p className="font-micro font-semibold text-gold text-[15px] uppercase tracking-wide mb-5">
            Our Expertise
          </p>
          <h2
            className="font-athelas font-semibold text-white leading-tight mb-6 max-w-4xl mx-auto uppercase"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            Roofing &amp; Exterior Solutions<br className="hidden md:block" /> You Can Trust in North Georgia
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto mb-10">
            Experience peace of mind knowing that our roofing services are delivered
            with the highest level of integrity and professionalism. Trust us to
            protect your home or business from any weather condition.
          </p>
          <div className="w-20 h-[2px] bg-gold mx-auto" />
        </div>
      </div>

      {/* Category tiles overlapping bottom edge */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-8 -mt-20 lg:-mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-white shadow-xl py-6 lg:py-8 rounded-sm">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="flex flex-col items-center justify-center gap-4 p-4 lg:p-6 bg-white"
            >
              <span className="text-gold">
                {cat.icon}
              </span>
              <span className="font-micro font-bold text-[14px] lg:text-[16px] leading-tight uppercase tracking-wide text-purple text-center">
                {cat.label.replace(' ', '\n').split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
