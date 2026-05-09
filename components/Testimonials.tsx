'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Quote } from 'lucide-react'

const reviews = [
  {
    text: 'Samaritan roofing was amazing. After having 2 different roofing companies come out and never even send us a quote, we got a recommendation from a friend to try them. We had active leaks and needed a new roof badly. He came out and gave a quote quickly. They started the job a week later and had it done in a day. They were also very compassionate about the bad situation we found ourselves in. They were so friendly. They went above and beyond our expectations. Great people and company. I highly recommend them for all your roofing needs.',
    name: 'Angel Dozetos',
    location: 'Dahlonega, GA',
  },
  {
    text: 'Had Brandon and his team replace my roof and gutters. They did a fantastic job. I had them come back out and replace my floors a few weeks later. He has also done work for a few of my neighbors who have been very happy with their work as well. I have a few more things that I need to have done and I will definitely call them to get a quote first.',
    name: 'Sheri Nori',
    location: 'Dahlonega, GA',
  },
  {
    text: 'Brandon responded to us very quickly, and was able to fit us into his schedule right away. He showed up early and had our problem solved in less than an hour. He was knowledgeable and easy to talk to. We plan to use him for all of our roofing needs moving forward. Highly recommend.',
    name: 'Stefon Parker',
    location: 'Dahlonega, GA',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  // Omit prev/next arrow functions since the new design only uses dots for navigation
  function setReview(index: number) {
    setIdx(index)
  }

  const review = reviews[idx]

  return (
    <section id="reviews" className="bg-light-gray pt-20 lg:pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
        {/* Header */}
        <div className="mb-12">
          <p className="font-micro font-semibold text-gold text-sm uppercase tracking-widest mb-4">
            We Take Our Community Seriously
          </p>
          <h2
            className="font-athelas font-bold text-purple leading-[1.1] max-w-4xl mx-auto uppercase mb-8"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}
          >
            What Dahlonega Homeowners Say About Samaritan Roofing
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>

        {/* Slider Area */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative flex flex-col items-center justify-center">
            {/* Quote content centered */}
            <p className="text-text-gray text-base lg:text-lg leading-relaxed mb-8 italic max-w-3xl">
              "{review.text}"
            </p>

            {/* Avatar and name block */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-[#cbd5e1] overflow-hidden flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10 mt-2">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-micro font-bold text-base text-purple uppercase tracking-wide leading-snug">
                  {review.name}
                </p>
                <p className="text-gold font-micro text-xs">{review.location}</p>
              </div>
            </div>

            {/* Decorative quote icon */}
            <div className="hidden lg:block absolute right-4 top-4 pointer-events-none">
              <Quote className="w-10 h-10 text-purple opacity-20" strokeWidth={1} />
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-14">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setReview(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? 'bg-purple' : 'bg-[#cbd5e1]'}`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="https://www.google.com/search?q=Samaritans+Roofing+%26+Exteriors+LLC+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-micro font-bold text-sm uppercase tracking-wider bg-gold text-white px-8 py-3.5 hover:bg-gold/90 transition-colors"
          >
            See All Our Reviews
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Google Maps (Full Width, edge-to-edge) */}
      <div className="w-full h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5!2d-83.9871!3d34.5325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5e8c9e8e0b0e5%3A0x1234567890abcdef!2sDahlonega%2C%20GA%2030533!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Samaritan Roofing service area map"
        />
      </div>
    </section>
  )
}
