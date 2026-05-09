import Link from 'next/link'
import { FadeUp, StaggerChildren, StaggerItem } from './ui/motion'

const posts = [
  {
    date: 'April 10, 2026',
    title: 'Welcome',
    excerpt:
      'Welcome to Samaritan Roofing & Restoration — the roofing contractor Dahlonega, GA homeowners trust for quality craftsmanship and honest service.',
    href: '/welcome',
  },
]

export default function LatestNews() {
  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeUp>
            <p className="font-micro font-semibold text-gold text-sm uppercase tracking-widest mb-4">
              Latest News
            </p>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              className="font-athelas font-bold text-purple leading-[1.1] uppercase"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}
            >
              Check Out Our News &amp; Blog
            </h2>
          </FadeUp>
        </div>

        {/* Posts */}
        <StaggerChildren
          className={`grid gap-8 ${
            posts.length === 1
              ? 'grid-cols-1 max-w-lg mx-auto'
              : posts.length === 2
              ? 'grid-cols-1 sm:grid-cols-2'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {posts.map((post) => (
            <StaggerItem key={post.title}>
              <article className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group h-full flex flex-col">
                <p className="text-text-gray text-xs mb-3">{post.date}</p>
                <h3 className="font-micro font-bold text-base uppercase text-purple mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed mb-5 flex-grow">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-1.5 font-micro font-bold text-sm uppercase tracking-wider text-gold hover:underline group/link"
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
