'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function CTAForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    zipcode: '',
    message: '',
    date: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please call us or try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'border border-gold px-3 py-2 text-base font-lato text-near-black placeholder-text-gray focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold w-full transition-colors'

  return (
    <section
      id="estimate"
      className="relative z-20 -mt-16 lg:-mt-24 -mb-10 lg:-mb-16 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto shadow-xl">
        {/* relative on this wrapper so the arrow can escape overflow:hidden on the left panel */}
        <div className="flex flex-col lg:flex-row relative">
          {/* Left — dark panel, 50% */}
          <div className="relative lg:w-1/2 flex items-center px-10 py-10 lg:py-12 overflow-hidden">
            <Image
              src="/images/selective-focus-of-grey-shingles-on-rooftop-of-building.jpg"
              alt=""
              fill
              sizes="50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-navy/93" />

            <div className="relative z-10">
              <h2
                className="font-athelas font-bold text-white leading-tight uppercase mb-4"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
              >
                Request a<br />free estimate
              </h2>
              <p className="font-micro font-semibold text-gold text-sm uppercase tracking-widest mb-8">
                We are ready to help
              </p>
              <a
                href="tel:6787494808"
                className="inline-block font-micro font-bold text-sm uppercase tracking-wider border-2 border-gold text-white px-8 py-3 hover:bg-gold transition-colors"
                aria-label="Call 678-749-4808"
              >
                Call 678-749-4808
              </a>
            </div>
          </div>

          {/* Arrow — on the parent so overflow:hidden on left panel can't clip it */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-gold items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Right — form, 50% */}
          <div className="bg-white lg:w-1/2 px-8 lg:px-10 py-10 lg:py-12 flex items-center">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 transition-opacity duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-micro font-bold text-lg uppercase tracking-wide text-purple leading-snug">
                    We&apos;ll Be In Touch!
                  </h3>
                </div>
                <p className="text-text-gray text-sm leading-relaxed">
                  Thanks for reaching out. We&apos;ll review your request and contact you shortly to schedule your free inspection.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', zipcode: '', message: '', date: '' }) }}
                  className="font-micro font-bold text-xs uppercase tracking-wide text-gold hover:text-gold/80 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className={inputClass} />
                <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required className={inputClass} />
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className={inputClass} />
                <input type="text" name="zipcode" placeholder="Zipcode" value={form.zipcode} onChange={handleChange} className={inputClass} />
              </div>

              <textarea
                name="message"
                placeholder="How Can We Help?"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className={`${inputClass} mb-3 resize-none`}
              />

              <div className="mb-4">
                <label className="block text-text-gray text-xs font-lato tracking-wide mb-1">Requested Inspection Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  aria-label="Requested Inspection Date"
                  className={inputClass}
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm mb-3">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-8 py-3 hover:bg-gold/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : 'Submit'}
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
