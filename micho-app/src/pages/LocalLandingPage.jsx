import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { neighbourhoods, neighbourhoodBySlug } from '../data/neighbourhoods'

const BASE_URL = 'https://micho-restaurant.vercel.app'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function LocalLandingPage({ slug }) {
  const area = neighbourhoodBySlug[slug]

  // 404 → redirect home rather than crash
  if (!area) return <Navigate to="/" replace />

  const canonicalPath = area.path
  const title = `Turkish Restaurant in ${area.name}, Sheffield | Micho Turkish Bar & Grill`
  const description = `Looking for Turkish food near ${area.name}? Micho Turkish Bar & Grill in Crookes is just ${area.distance} away. Charcoal-grilled kebabs, fresh pide, mezze & halal options. Family-run since 1999.`

  // Extra JSON-LD for this page
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'Micho Turkish Bar & Grill',
    url: BASE_URL,
    description: `Authentic Turkish restaurant serving ${area.name} and surrounding Sheffield areas. Charcoal-grilled meats, pide, meze and halal options in Crookes.`,
    areaServed: {
      '@type': 'City',
      name: 'Sheffield',
    },
    servesCuisine: ['Turkish', 'Mediterranean'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '200 Crookes',
      addressLocality: 'Sheffield',
      postalCode: 'S10 1TG',
      addressCountry: 'GB',
    },
  }

  // Other neighbourhoods for the footer grid (exclude current)
  const others = neighbourhoods.filter((n) => n.slug !== slug)

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={canonicalPath}
        pageSchema={serviceSchema}
      />

      <main className="min-h-screen bg-bg-primary text-text-primary">

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          {/* Background gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(196,122,59,0.12) 0%, transparent 70%)',
            }}
          />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-copper mb-6"
            >
              Turkish Restaurant in Sheffield
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-text-primary leading-tight mb-8"
            >
              Turkish Restaurant in{' '}
              <span className="text-accent-copper italic">{area.name}</span>,{' '}
              Sheffield
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-sans text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10"
            >
              {area.intro}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/reservations"
                className="inline-block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bg-primary bg-accent-copper px-8 py-4 hover:bg-accent-copper/90 transition-colors duration-200"
              >
                Book a Table
              </Link>
              <Link
                to="/menu"
                className="inline-block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-copper border border-accent-copper/40 px-8 py-4 hover:border-accent-copper transition-colors duration-200"
              >
                View the Menu
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div
          className="w-full h-px max-w-screen-xl mx-auto"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(196,122,59,0.3), transparent)' }}
        />

        {/* ── Content ── */}
        <section className="max-w-3xl mx-auto px-6 py-20">
          <div className="space-y-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-text-primary mb-5">
                Getting to Micho from {area.name}
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                {area.body1}
              </p>
              {area.bus && (
                <p className="font-sans text-sm text-text-muted mt-4 pl-4 border-l-2 border-accent-copper/40">
                  <strong className="text-text-primary">By bus:</strong> Catch {area.bus}.
                </p>
              )}
              {area.parking && (
                <p className="font-sans text-sm text-text-muted mt-2 pl-4 border-l-2 border-accent-copper/20">
                  <strong className="text-text-primary">Parking:</strong> {area.parking}
                </p>
              )}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-text-primary mb-5">
                Why Micho Is Worth the Trip
              </h2>
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                {area.body2}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <p className="font-sans text-base text-text-secondary leading-relaxed">
                {area.body3}
              </p>
            </motion.div>

            {/* Key facts strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-b border-text-primary/8 py-10"
            >
              {[
                { label: 'Address', value: '200 Crookes, S10 1TG' },
                { label: 'Phone', value: '0114 349 2043' },
                { label: 'Halal', value: 'Full menu, certified' },
                { label: 'Family-run', value: 'Since 1999' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-accent-copper mb-1">
                    {item.label}
                  </p>
                  <p className="font-sans text-sm text-text-secondary">{item.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Map embed */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
            >
              <h2 className="font-serif text-2xl font-light text-text-primary mb-5">
                Find Us on the Map
              </h2>
              <div className="w-full overflow-hidden" style={{ height: '360px' }}>
                <iframe
                  title={`Micho Turkish Bar & Grill — directions from ${area.name}`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.8!2d-1.496!3d53.3826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48798288b2e9b1e7%3A0x5e6b1e9b3c1c3b1a!2s200%20Crookes%2C%20Sheffield%20S10%201TG!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="font-sans text-xs text-text-muted mt-3">
                200 Crookes, Sheffield, S10 1TG —{' '}
                <a
                  href="https://maps.google.com/?q=200+Crookes+Sheffield+S10+1TG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-copper hover:underline"
                >
                  Open in Google Maps
                </a>
              </p>
            </motion.div>

            {/* CTA block */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              className="text-center py-10 border border-accent-copper/20 px-8"
              style={{ background: 'rgba(196,122,59,0.04)' }}
            >
              <p className="font-serif text-2xl sm:text-3xl font-light text-text-primary mb-4">
                Why wait? We&apos;re just up the road in Crookes.
              </p>
              <p className="font-sans text-sm text-text-secondary mb-8">
                Come taste real Turkish — charcoal grill, fresh meze, and a warm welcome from a family that&apos;s been doing this for 25 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/reservations"
                  className="inline-block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bg-primary bg-accent-copper px-8 py-4 hover:bg-accent-copper/90 transition-colors duration-200"
                >
                  Book a Table
                </Link>
                <a
                  href="tel:+441143492043"
                  className="inline-block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent-copper border border-accent-copper/40 px-8 py-4 hover:border-accent-copper transition-colors duration-200"
                >
                  Call: 0114 349 2043
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Neighbourhood Footer Grid ── */}
        <section
          className="border-t px-6 py-14"
          style={{ borderColor: 'rgba(196,122,59,0.12)', background: 'rgba(0,0,0,0.2)' }}
        >
          <div className="max-w-screen-xl mx-auto">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-copper mb-8 text-center">
              Turkish food nearby? Explore Sheffield
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center">
              {others.map((n) => (
                <Link
                  key={n.slug}
                  to={n.path}
                  className="font-sans text-sm text-text-muted hover:text-accent-copper transition-colors duration-200 whitespace-nowrap"
                >
                  Turkish in {n.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
