import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Micho Turkish Bar & Grill"
        description="The page you're looking for doesn't exist. Return to Micho Turkish Bar & Grill."
        canonical="https://michoturkishbarandgrill.co.uk/404"
      />

      <main className="min-h-screen bg-bg-primary flex items-center justify-center px-6">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative number */}
          <p
            className="font-light text-accent-copper/20 leading-none select-none"
            style={{ fontSize: 'clamp(100px, 20vw, 180px)', fontFamily: "'Montserrat', sans-serif", letterSpacing: '0.06em' }}
          >
            404
          </p>

          <h1 className="font-serif italic text-text-primary text-2xl md:text-3xl mt-2 mb-4">
            Page not found
          </h1>

          <p className="font-sans text-text-muted text-base leading-relaxed mb-8">
            This page doesn't exist — but our food certainly does. Head back and explore our menu or book a table.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="font-sans font-semibold uppercase tracking-label text-sm text-bg-primary bg-accent-copper hover:bg-accent-gold transition-colors duration-300 px-8 py-3 rounded-sm"
            >
              Back to Home
            </Link>
            <Link
              to="/menu"
              className="font-sans font-semibold uppercase tracking-label text-sm text-accent-copper hover:text-accent-gold border border-accent-copper/30 hover:border-accent-gold/50 transition-colors duration-300 px-8 py-3 rounded-sm"
            >
              View Menu
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  )
}
