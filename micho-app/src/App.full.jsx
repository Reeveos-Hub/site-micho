import React, { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import BottomCTA from './components/BottomCTA'
import FloatingDecorations from './components/FloatingDecorations'
import PromoBanner from './components/PromoBanner'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Menu = lazy(() => import('./pages/Menu'))
const Collection = lazy(() => import('./pages/Collection'))
const Reservations = lazy(() => import('./pages/Reservations'))
const Journal = lazy(() => import('./pages/Journal'))
const JournalPost = lazy(() => import('./pages/JournalPost'))
const LocalLandingPage = lazy(() => import('./pages/LocalLandingPage'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Sitemap = lazy(() => import('./pages/Sitemap'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent-copper border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <ScrollToTop />
      <FloatingDecorations />
      <Navbar />
      <PromoBanner />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageFallback />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalPost />} />
            <Route path="/crookes/:area" element={<LocalLandingPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
      <BottomCTA />
      <CookieBanner />
    </div>
  )
}
