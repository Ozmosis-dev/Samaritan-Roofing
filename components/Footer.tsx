import Image from 'next/image'
import Link from 'next/link'

const servicesCol1 = [
  'Shingle Roofing',
  'Metal Roofing',
  'Roof Repair',
  'Gutters',
  'Insurance Claims',
]

const servicesCol2 = ['Siding', 'Painting', 'Outdoor Spaces', 'Custom Builds', 'Decks']

export default function Footer() {
  return (
    <footer className="bg-purple-dark text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/Asset-10SR.png"
                alt="Samaritan Roofing"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/70 text-[14.4px] leading-relaxed mb-6 max-w-xs">
              Providing top-notch quality craftsmanship, and giving every customer the
              absolute best experience possible.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://m.facebook.com/100089266129991/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-gold flex items-center justify-center hover:bg-gold/80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.thumbtack.com/ga/dahlonega/roofing/samaritan-roofing-restoration-llc/service/440821901933125636"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Thumbtack"
                className="w-10 h-10 bg-gold flex items-center justify-center hover:bg-gold/80 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="font-micro font-semibold text-[16px] uppercase tracking-wide text-white mb-5">
              Services
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <ul className="space-y-2">
                {servicesCol1.map((s) => (
                  <li key={s}>
                    <Link
                      href="/#services"
                      className="text-white/70 text-[14.4px] hover:text-gold transition-colors"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {servicesCol2.map((s) => (
                  <li key={s}>
                    <Link
                      href="/#services"
                      className="text-white/70 text-[14.4px] hover:text-gold transition-colors"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="font-micro font-semibold text-[16px] uppercase tracking-wide text-white mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ba914e" className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                <a href="tel:6787494808" className="text-white/70 text-[14.4px] hover:text-gold transition-colors">
                  (678) 749-4808
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ba914e" className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 1.999-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>
                <a href="tel:6788257579" className="text-white/70 text-[14.4px] hover:text-gold transition-colors">
                  (678) 825-7579{' '}
                  <em className="not-italic text-white/50">(Emergency)</em>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ba914e" className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a href="mailto:info@samaritanroofing.com" className="text-white/70 text-[14.4px] hover:text-gold transition-colors">
                  info@samaritanroofing.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ba914e" className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.843-5.226 3.843-9.052a8.5 8.5 0 10-17 0c0 3.826 1.9 6.973 3.843 9.052a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span className="text-white/70 text-[14.4px]">Dahlonega, GA</span>
              </li>
            </ul>
          </div>

          {/* Col 4 — Have Questions */}
          <div>
            <h4 className="font-micro font-semibold text-[16px] uppercase tracking-wide text-white mb-5">
              Have Questions?
            </h4>
            <Link
              href="/#estimate"
              className="inline-block font-micro font-bold text-[14.4px] uppercase tracking-wide bg-gold text-white px-8 py-4 hover:bg-gold/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/50 text-[14.4px]">
            © {new Date().getFullYear()} Samaritan Roofing | All Rights Reserved
          </p>
          <p className="text-white/50 text-[14.4px]">Website by Andrew Mindy</p>
        </div>
      </div>
    </footer>
  )
}
