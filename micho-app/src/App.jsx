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
const Menu = lazy(() => import('./pages/Menu'))
const About = lazy(() => import('./pages/About'))
const Collection = lazy(() => import('./pages/Collection'))
const Reservations = lazy(() => import('./pages/Reservations'))
const Sitemap = lazy(() => import('./pages/Sitemap'))
const LocalLandingPage = lazy(() => import('./pages/LocalLandingPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))

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
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/collection" element={<Collection />} />
              <Route path="/reservations" element={<Reservations />} />
               <Route path="/sitemap" element={<Sitemap />} />
               <Route path="/turkish-restaurant-broomhill-sheffield" element={<LocalLandingPage slug="broomhill" />} />
               <Route path="/turkish-restaurant-sheffield-city-centre" element={<LocalLandingPage slug="city-centre" />} />
               <Route path="/turkish-restaurant-crookesmoor" element={<LocalLandingPage slug="crookesmoor" />} />
               <Route path="/turkish-restaurant-ecclesall-sheffield" element={<LocalLandingPage slug="ecclesall" />} />
               <Route path="/turkish-restaurant-fulwood-sheffield" element={<LocalLandingPage slug="fulwood" />} />
               <Route path="/turkish-restaurant-greystones-sheffield" element={<LocalLandingPage slug="greystones" />} />
               <Route path="/turkish-restaurant-heeley-sheffield" element={<LocalLandingPage slug="heeley" />} />
               <Route path="/turkish-restaurant-hillsborough-sheffield" element={<LocalLandingPage slug="hillsborough" />} />
               <Route path="/turkish-restaurant-hunters-bar-sheffield" element={<LocalLandingPage slug="hunters-bar" />} />
               <Route path="/turkish-restaurant-kelham-island-sheffield" element={<LocalLandingPage slug="kelham-island" />} />
               <Route path="/turkish-restaurant-london-road-sheffield" element={<LocalLandingPage slug="london-road" />} />
               <Route path="/turkish-restaurant-nether-edge-sheffield" element={<LocalLandingPage slug="nether-edge" />} />
               <Route path="/turkish-restaurant-ranmoor-sheffield" element={<LocalLandingPage slug="ranmoor" />} />
               <Route path="/turkish-restaurant-sharrow-sheffield" element={<LocalLandingPage slug="sharrow" />} />
               <Route path="/turkish-restaurant-walkley-sheffield" element={<LocalLandingPage slug="walkley" />} />
               <Route path="/turkish-restaurant-woodseats-sheffield" element={<LocalLandingPage slug="woodseats" />} />
               <Route path="/privacy" element={<PrivacyPolicy />} />
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
