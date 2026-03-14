import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const COOKIE_KEY = 'micho_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Small delay so it doesn't compete with page load
    const timer = setTimeout(() => {
      const consent = localStorage.getItem(COOKIE_KEY)
      if (!consent) setVisible(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  function accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed z-50 left-0 right-0 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-sm"
          style={{ bottom: '57px' }}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="mx-0 sm:mx-0 p-5 rounded-none sm:rounded-lg"
            style={{
              background: 'rgba(26, 24, 22, 0.97)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(196, 122, 59, 0.15)',
              boxShadow: '0 -4px 24px rgba(0,0,0,0.3)',
            }}
          >
            <p className="font-sans text-text-muted text-xs leading-relaxed mb-4">
              We use cookies to ensure the best experience on our site.{' '}
              <Link
                to="/privacy"
                className="text-accent-copper hover:text-accent-gold underline transition-colors"
              >
                Privacy&nbsp;Policy
              </Link>
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={accept}
                className="font-sans text-xs font-semibold uppercase tracking-label bg-accent-copper hover:bg-accent-gold text-bg-primary px-5 py-2 rounded-sm transition-colors duration-200"
              >
                Accept
              </button>
              <button
                onClick={decline}
                className="font-sans text-xs font-semibold uppercase tracking-label text-text-muted hover:text-text-primary px-4 py-2 transition-colors duration-200"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
