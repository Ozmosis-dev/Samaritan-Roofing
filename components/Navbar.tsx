'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Why Us', href: '/#why' },
  { label: 'Services', href: '/#services' },
  { label: 'Roofing', href: '/residential-roofing-services' },
  { label: 'Exteriors', href: '/exterior-renovations' },
  { label: 'Contact', href: '/#estimate' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white ${scrolled ? 'shadow-sm py-0' : 'py-2'
        }`}
    >
      <div className={`max-w-7xl mx-auto px-4 flex items-center justify-between transition-all duration-500 ease-in-out ${scrolled ? 'h-[70px]' : 'h-[130px]'
        }`}>
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src={scrolled ? "/images/Asset-12SR.png" : "/images/Asset-6SR-copy.png"}
            alt="Samaritan Roofing"
            width={scrolled ? 240 : 280}
            height={scrolled ? 42 : 110}
            className={`transition-all duration-500 ease-in-out w-auto object-contain ${scrolled ? 'h-[36px] lg:h-[42px]' : 'h-[90px] lg:h-[110px]'
              }`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-center pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-micro font-bold text-[12.8px] tracking-wide uppercase text-purple hover:text-purple-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-2 pt-2">
          <Link
            href="/#estimate"
            className="font-micro font-bold text-[13px] tracking-wide uppercase bg-gold text-white px-5 py-2.5 hover:bg-gold/90 transition-colors"
          >
            Free Estimate
          </Link>
          <a
            href="tel:6787494808"
            className="bg-purple hover:bg-purple-dark text-white p-2.5 transition-colors"
            aria-label="Call us"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 transition-colors text-purple hover:text-purple-dark"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-mid-gray px-4 py-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-micro font-bold text-[14px] tracking-wide uppercase text-purple hover:text-purple-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#estimate"
            onClick={() => setOpen(false)}
            className="font-micro font-bold text-[14px] uppercase bg-gold text-white px-5 py-3 text-center mt-2 hover:bg-gold/90 transition-colors"
          >
            Free Estimate
          </Link>
        </div>
      )}
    </header>
  )
}
