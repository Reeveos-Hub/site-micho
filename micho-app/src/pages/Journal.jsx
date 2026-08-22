import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import SEO, { BASE_URL } from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import { posts, categories } from '../data/blogData'

const HERO_IMG = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80'

const journalSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${BASE_URL}/journal#blog`,
  name: 'Micho Journal',
  description: 'Stories, recipes and Sheffield food culture from Micho Turkish Bar and Grill.',
  url: `${BASE_URL}/journal`,
  publisher: { '@id': `${BASE_URL}/#restaurant` },
}

function ParallaxHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative flex items-end justify-start overflow-hidden" style={{ height: '52vh', minHeight: '320px' }}>
      <motion.div className="absolute inset-0" style={{ y, scale: 1.2, willChange: 'transform' }}>
        <img src={HERO_IMG} alt="Micho Journal" className="w-full h-full object-cover" fetchpriority="high" width="1600" height="900" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,14,12,0.1), rgba(15,14,12,0.9))' }} />
      </motion.div>
      <motion.div className="relative z-10 px-8 md:px-14 pb-14 max-w-2xl" style={{ opacity }}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Journal
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            className="font-serif font-light text-text-primary leading-none"
            style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}
            initial={{ y: '100%' }} animate={{ y: 0 }}
            transition={{ delay: 0.15, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Stories from the
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-serif font-light text-accent-copper leading-tight"
            style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}
            initial={{ y: '100%' }} animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Grill &amp; the City
          </motion.h1>
        </div>
      </motion.div>
    </section>
  )
}

function PostCard({ post, index, featured = false }) {
  if (featured) {
    return (
      <ScrollReveal direction="up" distance={30} duration={0.9}>
        <Link to={`/journal/${post.slug}`} className="group block">
          <div className="grid md:grid-cols-2 gap-0 overflow-hidden" style={{ background: 'rgba(34,31,27,0.7)', border: '1px solid rgba(196,122,59,0.12)' }}>
            <div className="relative overflow-hidden" style={{ height: 'clamp(240px, 35vw, 420px)' }}>
              <img
                src={post.hero}
                alt={post.heroAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(15,14,12,0.5) 100%)' }} />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper mb-4">
                {post.category}
              </span>
              <h2 className="font-serif font-light text-text-primary leading-snug mb-4 group-hover:text-accent-copper transition-colors duration-300" style={{ fontSize: 'clamp(22px, 2.8vw, 32px)' }}>
                {post.title}
              </h2>
              <p className="font-sans text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4">
                <span className="font-sans text-xs text-text-muted">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-accent-copper/40" />
                <span className="font-sans text-xs text-text-muted">{post.readTime}</span>
              </div>
              <div className="mt-6 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper group-hover:gap-3 transition-all duration-300">
                Read article
                <span style={{ fontSize: '14px' }}>→</span>
              </div>
            </div>
          </div>
        </Link>
      </ScrollReveal>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24), ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link to={`/journal/${post.slug}`} className="group block h-full" style={{ background: 'rgba(34,31,27,0.7)', border: '1px solid rgba(196,122,59,0.12)' }}>
        <div className="relative overflow-hidden" style={{ height: '200px' }}>
          <img
            src={post.hero}
            alt={post.heroAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-bg-primary bg-accent-copper px-2 py-1">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-serif font-light text-text-primary text-lg leading-snug mb-3 group-hover:text-accent-copper transition-colors duration-300 line-clamp-3">
            {post.title}
          </h3>
          <p className="font-sans text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-text-muted">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-accent-copper/40" />
            <span className="font-sans text-xs text-text-muted">{post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <motion.main
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <SEO
        title="Journal | Micho Turkish Bar &amp; Grill Sheffield"
        description="Stories from the grill, Sheffield food culture and Turkish culinary traditions from Micho Turkish Bar and Grill in Crookes, Sheffield."
        canonical="/journal"
        pageSchema={journalSchema}
      />

      <ParallaxHero />

      {/* Category filter */}
      <div
        className="sticky z-30 py-3 px-4"
        style={{ top: '64px', background: 'rgba(15,14,12,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(196,122,59,0.15)' }}
      >
        <div className="flex gap-1 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative px-3 py-2 font-sans text-xs font-semibold uppercase tracking-label transition-all duration-300 whitespace-nowrap flex-shrink-0"
              style={{ color: activeCategory === cat ? '#C47A3B' : '#A89F94' }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent-copper"
                  layoutId="journalActiveTab"
                  transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 pt-12">

        {/* Featured post */}
        {featured && (
          <div className="mb-14">
            <ScrollReveal direction="left" distance={40} duration={0.8}>
              <div className="flex items-center gap-5 mb-6">
                <motion.div
                  className="h-px bg-accent-copper flex-shrink-0"
                  style={{ width: '28px', originX: 0 }}
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                />
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper">Featured</p>
              </div>
            </ScrollReveal>
            <PostCard post={featured} index={0} featured />
          </div>
        )}

        {/* Rest of articles */}
        {rest.length > 0 && (
          <>
            <ScrollReveal direction="left" distance={40} duration={0.8}>
              <div className="flex items-center gap-5 mb-8">
                <motion.div
                  className="h-px bg-accent-copper flex-shrink-0"
                  style={{ width: '28px', originX: 0 }}
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                />
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-accent-copper">All Articles</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {rest.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-sans text-text-muted text-base">No articles in this category yet.</p>
          </div>
        )}
      </div>

    </motion.main>
  )
}
