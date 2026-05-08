'use client'

import { useEffect, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'

interface LightboxImage {
  src: string
  alt: string
}

interface LightboxProps {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onGoTo?: (index: number) => void
}

export default function Lightbox({ images, index, onClose, onPrev, onNext, onGoTo }: LightboxProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const current = images[index]
  const total = images.length

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy/97" />

      {/* Gold top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold z-10" />

      {/* Close button — always on top */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[10001] w-11 h-11 flex items-center justify-center bg-gold hover:bg-gold/80 transition-colors text-white shadow-lg"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-6 z-[10001]">
        <p className="font-micro font-semibold text-gold text-[13px] uppercase tracking-wide">
          {index + 1} / {total}
        </p>
      </div>

      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 lg:left-8 z-[10001] w-12 h-12 flex items-center justify-center bg-navy/60 border border-gold/60 hover:bg-gold hover:border-gold transition-colors text-white"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 lg:right-8 z-[10001] w-12 h-12 flex items-center justify-center bg-navy/60 border border-gold/60 hover:bg-gold hover:border-gold transition-colors text-white"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative z-[10000] w-full h-full flex items-center justify-center px-20 py-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="90vw"
            priority
          />
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[10001] flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); onGoTo ? onGoTo(i) : null }}
            className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-gold' : 'bg-white/30 hover:bg-white/60'}`}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>,
    document.body
  )
}
