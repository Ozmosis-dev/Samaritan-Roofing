import Link from 'next/link'

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
          <p className="font-micro font-semibold text-gold text-[15px] uppercase tracking-wide mb-4">
            Latest News
          </p>
          <h2
            className="font-athelas font-semibold text-purple leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}
          >
            Checkout our news &amp; blog
          </h2>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="bg-white p-8 shadow-sm">
              <p className="text-text-gray text-[12.56px] mb-3">{post.date}</p>
              <h3 className="font-micro font-semibold text-[16px] uppercase text-purple mb-3">
                {post.title}
              </h3>
              <p className="text-text-gray text-[14.4px] leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <Link
                href={post.href}
                className="font-micro font-bold text-[14.4px] uppercase tracking-wide text-gold hover:underline"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
