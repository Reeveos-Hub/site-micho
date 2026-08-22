import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO, { BASE_URL } from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import { getPost, getRelatedPosts } from '../data/blogData'

const BOOKING_URL = 'https://web.dojo.app/create_booking/vendor/IMRbX5h6TDitS4ia5XT3HxTvOdSiYmbC-xwiQb1-icM_restaurant'

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const total = scrollHeight - clientHeight
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5" style={{ background: 'rgba(196,122,59,0.15)' }}>
      <motion.div
        className="h-full bg-accent-copper"
        style={{ width: `${progress}%`, transformOrigin: 'left' }}
        transition={{ duration: 0 }}
      />
    </div>
  )
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="font-serif font-light text-text-primary mt-10 mb-4" style={{ fontSize: 'clamp(20px, 2.4vw, 26px)' }}>
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p className="font-sans text-text-muted text-base leading-relaxed mb-5">
          {block.text}
        </p>
      )
    case 'blockquote':
      return (
        <blockquote className="my-8 pl-5 font-serif italic text-text-primary text-lg leading-relaxed" style={{ borderLeft: '2px solid #C47A3B' }}>
          {block.text}
        </blockquote>
      )
    default:
      return null
  }
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid rgba(196,122,59,0.12)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left font-sans text-sm font-medium text-text-primary hover:text-accent-copper transition-colors duration-200"
      >
        <span>{item.q}</span>
        <motion.span
          className="flex-shrink-0 text-accent-copper mt-0.5"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ fontSize: '18px', lineHeight: 1 }}
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >
        <p className="font-sans text-text-muted text-sm leading-relaxed pb-5">
          {item.a}
        </p>
      </motion.div>
    </div>
  )
}

function RelatedCard({ post }) {
  return (
    <Link to={`/journal/${post.slug}`} className="group block" style={{ background: 'rgba(34,31,27,0.7)', border: '1px solid rgba(196,122,59,0.12)' }}>
      <div className="relative overflow-hidden" style={{ height: '160px' }}>
        <img
          src={post.hero}
          alt={post.heroAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper">{post.category}</span>
        <h4 className="font-serif font-light text-text-primary text-base leading-snug mt-2 group-hover:text-accent-copper transition-colors duration-300 line-clamp-3">
          {post.title}
        </h4>
        <p className="font-sans text-xs text-text-muted mt-2">{post.readTime}</p>
      </div>
    </Link>
  )
}

export default function JournalPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) {
    return (
      <main className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-serif italic text-text-primary text-2xl mb-4">Article not found</p>
          <Link to="/journal" className="font-sans text-sm text-accent-copper underline hover:text-accent-gold transition-colors">
            Back to Journal
          </Link>
        </div>
      </main>
    )
  }

  const related = getRelatedPosts(post.related)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.hero,
    datePublished: post.dateISO,
    author: {
      '@type': 'Organization',
      name: 'Micho Turkish Bar and Grill',
      url: BASE_URL,
    },
    publisher: {
      '@id': `${BASE_URL}/#restaurant`,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/journal/${post.slug}` },
  }

  const faqSchema = post.faq && post.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null

  const h2Headings = post.content.filter(b => b.type === 'h2').map(b => b.text)

  return (
    <>
      <ReadingProgress />
      <motion.main
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pb-24"
      >
        <SEO
          title={`${post.title} | Micho Turkish Bar &amp; Grill`}
          description={post.excerpt}
          canonical={`/journal/${post.slug}`}
          pageSchema={[articleSchema, ...(faqSchema ? [faqSchema] : [])]}
        />

        {/* Compact two-column header */}
        <div className="pt-6 pb-0" style={{ borderBottom: '1px solid rgba(196,122,59,0.1)' }}>
          <div className="max-w-screen-xl mx-auto px-6">

            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 font-sans text-xs text-text-muted mb-6">
              <Link to="/" className="hover:text-accent-copper transition-colors">Home</Link>
              <span className="text-accent-copper/40">›</span>
              <Link to="/journal" className="hover:text-accent-copper transition-colors">Journal</Link>
              <span className="text-accent-copper/40">›</span>
              <span className="text-text-muted/60 truncate max-w-xs">{post.category}</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start pb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper block mb-3">
                  {post.category}
                </span>
                <h1 className="font-serif font-light text-text-primary leading-snug mb-5" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-sans text-xs text-text-muted">Micho Kitchen</span>
                  <span className="w-1 h-1 rounded-full bg-accent-copper/40" />
                  <span className="font-sans text-xs text-text-muted">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-accent-copper/40" />
                  <span className="font-sans text-xs text-text-muted">{post.readTime}</span>
                </div>
              </motion.div>

              <motion.div
                className="relative overflow-hidden"
                style={{ aspectRatio: '16/9' }}
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={post.hero}
                  alt={post.heroAlt}
                  className="w-full h-full object-cover"
                  fetchpriority="high"
                  width="800"
                  height="450"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 60%, rgba(15,14,12,0.4) 100%)' }} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Article body + sidebar */}
        <div className="max-w-screen-xl mx-auto px-6 pt-10">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 xl:gap-16 items-start">

            {/* Main content */}
            <div>
              {/* In brief */}
              <ScrollReveal direction="up" distance={20} duration={0.7}>
                <div className="mb-10 p-6" style={{ background: 'rgba(196,122,59,0.06)', border: '1px solid rgba(196,122,59,0.18)' }}>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper mb-4">In brief</p>
                  <ul className="space-y-2">
                    {post.brief.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 font-sans text-sm text-text-muted leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-copper flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Content blocks */}
              <article className="max-w-2xl">
                {post.content.map((block, i) => (
                  <ContentBlock key={i} block={block} />
                ))}
              </article>

              {/* FAQ */}
              {post.faq && post.faq.length > 0 && (
                <div className="mt-14 max-w-2xl">
                  <ScrollReveal direction="up" distance={24} duration={0.7}>
                    <div className="flex items-center gap-5 mb-6">
                      <motion.div
                        className="h-px bg-accent-copper flex-shrink-0"
                        style={{ width: '24px', originX: 0 }}
                        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      />
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper">
                        Frequently asked
                      </p>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(196,122,59,0.12)' }}>
                      {post.faq.map((item, i) => (
                        <FAQItem key={i} item={item} index={i} />
                      ))}
                    </div>
                  </ScrollReveal>
                </div>
              )}

              {/* Author */}
              <ScrollReveal direction="up" distance={20} duration={0.7}>
                <div className="mt-12 max-w-2xl flex items-start gap-5 p-5" style={{ border: '1px solid rgba(196,122,59,0.12)', background: 'rgba(34,31,27,0.5)' }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(196,122,59,0.15)', border: '1px solid rgba(196,122,59,0.3)' }}>
                    <svg viewBox="0 0 40 50" fill="none" className="w-6 h-7">
                      <path d="M20 45 L20 26" stroke="#C47A3B" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M20 8 C17 16 11 21 13 30 C15 36 25 36 27 30 C29 21 23 16 20 8Z" fill="#C47A3B" opacity="0.7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-text-primary mb-1">Micho Kitchen</p>
                    <p className="font-sans text-xs text-text-muted leading-relaxed">
                      Written by the team at Micho Turkish Bar and Grill, Crookes, Sheffield. Named after Micho the chef, who brings twenty-five years of culinary experience to the charcoal grill.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Share */}
              <div className="mt-8 max-w-2xl flex items-center gap-4 flex-wrap">
                <span className="font-sans text-xs text-text-muted uppercase tracking-widest">Share</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${BASE_URL}/journal/${post.slug}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="font-sans text-xs font-medium text-text-muted hover:text-accent-copper transition-colors border border-text-muted/20 hover:border-accent-copper/40 px-3 py-1.5"
                >
                  X / Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${BASE_URL}/journal/${post.slug}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="font-sans text-xs font-medium text-text-muted hover:text-accent-copper transition-colors border border-text-muted/20 hover:border-accent-copper/40 px-3 py-1.5"
                >
                  Facebook
                </a>
                <Link
                  to="/journal"
                  className="ml-auto font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper hover:text-accent-gold transition-colors"
                >
                  ← All articles
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky" style={{ top: '90px' }}>

                {/* TOC */}
                {h2Headings.length > 0 && (
                  <div className="mb-8 p-5" style={{ border: '1px solid rgba(196,122,59,0.12)', background: 'rgba(34,31,27,0.5)' }}>
                    <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper mb-4">Contents</p>
                    <ul className="space-y-2.5">
                      {h2Headings.map((heading, i) => (
                        <li key={i}>
                          <span className="font-sans text-xs text-text-muted leading-snug cursor-default">{heading}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Booking CTA */}
                <div className="p-5" style={{ border: '1px solid rgba(196,122,59,0.2)', background: 'rgba(196,122,59,0.06)' }}>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper mb-2">Book a table</p>
                  <p className="font-serif font-light text-text-primary text-lg leading-snug mb-4">
                    200 Crookes, Sheffield S10 1TG
                  </p>
                  <p className="font-sans text-xs text-text-muted mb-5 leading-relaxed">
                    Mon, Wed–Fri from 4pm. Sat–Sun from 12pm. Closed Tuesdays.
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank" rel="noopener noreferrer"
                    className="block text-center font-sans font-semibold uppercase tracking-label text-xs text-bg-primary bg-accent-copper hover:bg-accent-gold transition-colors duration-300 px-5 py-3"
                  >
                    Reserve a table
                  </a>
                  <a
                    href="tel:+441143492043"
                    className="block text-center font-sans text-xs text-text-muted hover:text-accent-copper transition-colors mt-3"
                  >
                    +44 114 349 2043
                  </a>
                </div>

                {/* Opening hours quick ref */}
                <div className="mt-6 p-5" style={{ border: '1px solid rgba(196,122,59,0.1)' }}>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper mb-3">Opening hours</p>
                  <div className="space-y-1.5">
                    {[
                      ['Monday', '4pm – late'],
                      ['Tuesday', 'Closed'],
                      ['Wednesday', '4pm – late'],
                      ['Thursday', '4pm – late'],
                      ['Friday', '4pm – late'],
                      ['Saturday', '12pm – late'],
                      ['Sunday', '12pm – late'],
                    ].map(([day, time]) => (
                      <div key={day} className="flex justify-between items-center">
                        <span className="font-sans text-xs text-text-muted">{day}</span>
                        <span className="font-sans text-xs" style={{ color: time === 'Closed' ? '#6B2D3E' : '#A89F94' }}>{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-20">
              <ScrollReveal direction="left" distance={40} duration={0.8}>
                <div className="flex items-center gap-5 mb-8">
                  <motion.div
                    className="h-px bg-accent-copper flex-shrink-0"
                    style={{ width: '24px', originX: 0 }}
                    initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper">
                    You might also like
                  </p>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-screen-md">
                {related.map(rp => <RelatedCard key={rp.slug} post={rp} />)}
              </div>
            </div>
          )}
        </div>
      </motion.main>
    </>
  )
}
