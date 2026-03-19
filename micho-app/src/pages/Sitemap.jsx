import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const sections = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Welcome', path: '/', description: 'Home page — our story, the experience, food gallery' },
      { label: 'Our Menu', path: '/menu', description: 'Full food & drinks menu — kebabs, meze, pide, desserts' },
      { label: 'Our Story', path: '/about', description: '25 years of Turkish culinary heritage in Sheffield' },
      { label: 'Collection', path: '/collection', description: 'Click & collect takeaway — kebab boxes, family platters' },
      { label: 'Reservations', path: '/reservations', description: 'Book a table online or call us directly' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: 'Privacy Policy', path: '/privacy', description: 'How we collect, use, and protect your data' },
      { label: 'Sitemap', path: '/sitemap', description: 'Full site structure and page index' },
    ],
  },
  {
    title: 'External Resources',
    external: true,
    links: [
      { label: 'XML Sitemap', path: '/sitemap.xml', description: 'Machine-readable sitemap for search engines' },
      { label: 'Robots.txt', path: '/robots.txt', description: 'Crawl rules for search engine bots' },
      { label: 'LLMs.txt', path: '/llms.txt', description: 'AI-readable site summary for language models' },
    ],
  },
  {
    title: 'Contact & Find Us',
    contact: true,
    items: [
      { label: 'Address', value: '200 Crookes, Sheffield, S10 1TG' },
      { label: 'Phone', value: '+44 114 349 2043', href: 'tel:+441143492043' },
      { label: 'Email', value: 'info@michoturkishbargrill.co.uk', href: 'mailto:info@michoturkishbargrill.co.uk' },
      { label: 'Official Website', value: 'michoturkishbargrill.co.uk', href: 'https://michoturkishbargrill.co.uk' },
    ],
  },
]

export default function Sitemap() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pb-20 pt-32 px-6"
    >
      <SEO
        title="Sitemap | Micho Turkish Bar & Grill Sheffield"
        description="Full site map for Micho Turkish Bar & Grill. Navigate all pages: menu, reservations, our story, collection, and contact information."
        canonical="/sitemap"
      />

      <div className="max-w-screen-md mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-4">Navigation</p>
          <h1 className="font-serif font-light text-text-primary" style={{ fontSize: 'clamp(40px, 7vw, 72px)' }}>
            Site Map
          </h1>
          <div className="w-16 h-px bg-accent-copper mt-6" />
        </motion.div>

        {/* Sections */}
        <div className="flex flex-col gap-16">
          {sections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + si * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-label text-accent-copper mb-6">
                {section.title}
              </p>

              {section.contact ? (
                <div className="flex flex-col gap-4">
                  {section.items.map((item) => (
                    <div key={item.label} className="flex gap-6 items-baseline border-b border-text-primary/5 pb-4">
                      <span className="font-sans text-xs text-text-muted/50 uppercase tracking-label w-24 flex-shrink-0">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-sans text-sm text-text-muted hover:text-accent-copper transition-colors duration-200"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-sans text-sm text-text-muted">{item.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-0">
                  {section.links.map((link, i) => (
                    <motion.div
                      key={link.path}
                      className="group flex items-baseline justify-between py-4 border-b border-text-primary/5"
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-baseline gap-6">
                        <span className="font-sans text-xs text-text-muted/30 w-5 flex-shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          {section.external ? (
                            <a
                              href={link.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-serif text-xl text-text-primary group-hover:text-accent-copper transition-colors duration-200"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              to={link.path}
                              className="font-serif text-xl text-text-primary group-hover:text-accent-copper transition-colors duration-200"
                            >
                              {link.label}
                            </Link>
                          )}
                          <p className="font-sans text-xs text-text-muted mt-1">{link.description}</p>
                        </div>
                      </div>
                      <span className="font-sans text-xs text-text-muted/30 group-hover:text-accent-copper transition-colors duration-200 flex-shrink-0 ml-4">
                        →
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 pt-12 border-t border-text-primary/5 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="font-serif italic text-text-muted text-lg mb-8">
            Ready to experience Micho?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://web.dojo.app/create_booking/vendor/IMRbX5h6TDitS4ia5XT3HxTvOdSiYmbC-xwiQb1-icM_restaurant" target="_blank" rel="noopener noreferrer" className="btn-copper">Book a Table</a>
            <Link to="/menu" className="btn-outline">View Menu</Link>
          </div>
        </motion.div>
      </div>
    </motion.main>
  )
}
