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
          <p className="font-micro font-semibold text-gold text-sm uppercase tracking-widest mb-4">
            Latest News
          </p>
          <h2
            className="font-athelas font-bold text-purple leading-tight uppercase"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}
          >
            Check Out Our News &amp; Blog
          </h2>
        </div>

        {/* Posts */}
        <div className={`grid gap-8 ${posts.length === 1 ? 'grid-cols-1 max-w-lg mx-auto' : posts.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
          {posts.map((post) => (
            <article key={post.title} className="bg-white p-8 shadow-sm">
              <p className="text-text-gray text-xs mb-3">{post.date}</p>
              <h3 className="font-micro font-bold text-base uppercase text-purple mb-3 leading-snug">
                {post.title}
              </h3>
              <p className="text-text-gray text-sm leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <Link
                href={post.href}
                className="font-micro font-bold text-sm uppercase tracking-wider text-gold hover:underline"
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
