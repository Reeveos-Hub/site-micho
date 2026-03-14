import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import BookingPrompt from '../components/BookingPrompt'

const IMG_HERO     = '/micho-interior.png'
const IMG_STORY1   = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80'
const IMG_STORY2   = 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80'
const IMG_INTERIOR = '/micho-interior.png'

const values = [
  { label: 'Authenticity', text: 'Every recipe is rooted in Turkish culinary tradition. We source ingredients that honour the flavours of Anatolia — from hand-selected spices to the wood that fuels our charcoal grill.' },
  { label: 'Family',       text: "Micho was born from a family's love of cooking and sharing. That spirit lives in every dish — generous portions, warm service, and a table that always has room for one more." },
  { label: 'Craft',        text: 'Over 25 years of honing techniques passed down through generations. Our köfte is hand-shaped, our börek is hand-rolled, and our grill is tended with the care it deserves.' },
  { label: 'Community',    text: "Rooted in Sheffield's Crookes neighbourhood, we are proud to be part of the fabric of this city. Our guests are our community — and community is why we cook." },
]



function ParallaxHero({ src }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative flex items-end justify-start overflow-hidden" style={{ height: '72vh', minHeight: '480px' }}>
      <motion.div className="absolute inset-0" style={{ y, scale: 1.2 }}>
        <img src={src} alt="Micho restaurant" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,14,12,0.75) 0%, rgba(15,14,12,0.3) 55%, rgba(15,14,12,0.8) 100%)' }} />
      </motion.div>

      <motion.div className="relative z-10 px-8 md:px-16 pb-20 max-w-3xl" style={{ opacity }}>
        <motion.p className="section-label" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9, ease: [0.22,1,0.36,1] }}>
          Our Story
        </motion.p>
        <div className="overflow-hidden">
          <motion.h1
            className="font-serif font-light text-text-primary leading-none"
            style={{ fontSize: 'clamp(44px, 8vw, 96px)' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            A family table
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-serif font-light text-accent-copper leading-tight"
            style={{ fontSize: 'clamp(44px, 8vw, 96px)' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.45, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            open to everyone
          </motion.h1>
        </div>
        <motion.div className="w-20 h-px bg-accent-copper mt-8" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.1, duration: 0.8 }} />
      </motion.div>
    </section>
  )
}

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <SEO
          title="Our Story | Micho Turkish Bar &amp; Grill Sheffield"
          description="25 years of authentic Turkish cuisine in Sheffield. Discover the story behind Micho — a family restaurant rooted in Anatolian tradition, craft, and community."
          canonical="/about"
        />

      <ParallaxHero src={IMG_HERO} />

      {/* Opening quote */}
      <section className="py-36 px-6">
        <div className="max-w-[700px] mx-auto">
          <ScrollReveal direction="up" distance={80} duration={1.2}>
            <p className="font-serif font-light text-text-primary text-2xl md:text-4xl leading-relaxed mb-12" style={{ borderLeft: '2px solid #C47A3B', paddingLeft: '1.5rem' }}>
              "We didn't open a restaurant. We opened our home — and invited the whole of Sheffield in."
            </p>
          </ScrollReveal>
          {['Micho Turkish Bar & Grill has been part of Sheffield\'s Crookes neighbourhood since 1999. What began as a small family venture — a charcoal grill, a handful of recipes passed down through generations, and an unwavering belief in the power of a shared meal — has grown into one of the city\'s most beloved dining destinations.',
            'Every dish that leaves our kitchen carries the weight of that original promise: to cook honestly, to serve generously, and to make every guest feel like they\'ve come home.'
          ].map((text, i) => (
            <ScrollReveal key={i} direction="up" distance={50} delay={0.1 + i * 0.15} duration={1.1}>
              <p className="font-sans text-text-muted text-base md:text-lg leading-relaxed mb-6">{text}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Two-column: image left, text right */}
      <section className="grid md:grid-cols-2 gap-0 mb-0">
        <ScrollReveal direction="left" distance={80} duration={1.3} className="overflow-hidden" style={{ minHeight: '480px' }}>
          <motion.img
            src={IMG_STORY1}
            alt="Turkish cooking"
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8 }}
            style={{ minHeight: '480px', objectFit: 'cover', display: 'block' }}
          />
        </ScrollReveal>
        <div className="flex flex-col justify-center px-6 md:px-12 py-14 md:py-20" style={{ background: '#1A1816' }}>
          <ScrollReveal direction="right" distance={60} duration={1.2}>
            <p className="section-label">The Craft</p>
            <h2 className="font-serif font-light text-text-primary text-4xl md:text-5xl mb-8 leading-tight">
              Fire, patience,<br />and tradition
            </h2>
            <p className="font-sans text-text-muted text-base leading-relaxed mb-6">
              Our charcoal grill is the heart of Micho. It burns through every service, tended by hands that have spent decades perfecting the art of live-fire cooking. The smoke, the sear, the char — these are not techniques you can replicate. They are the result of time, care, and an uncompromising respect for the ingredient.
            </p>
            <p className="font-sans text-text-muted text-base leading-relaxed">
              Beyond the grill, our kitchen is a place of daily ritual: börek pastry rolled at dawn, meze prepared fresh before each service, bread baked to order. Nothing at Micho comes from a packet. Everything comes from our hands.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Two-column: text left, image right */}
      <section className="grid md:grid-cols-2 gap-0">
        <div className="flex flex-col justify-center px-6 md:px-12 py-14 md:py-20 order-2 md:order-1" style={{ background: '#221F1B' }}>
          <ScrollReveal direction="left" distance={60} duration={1.2}>
            <p className="section-label">The Heritage</p>
            <h2 className="font-serif font-light text-text-primary text-4xl md:text-5xl mb-8 leading-tight">
              Anatolia on<br />your plate
            </h2>
            <p className="font-sans text-text-muted text-base leading-relaxed mb-6">
              Turkish cuisine is one of the world's great culinary traditions — rich, diverse, and deeply regional. Our menu draws from across Anatolia: the kebabs of Gaziantep, the meze culture of the Aegean coast, the börek traditions of Istanbul, and the slow-cooked güveç of the Black Sea highlands.
            </p>
            <p className="font-sans text-text-muted text-base leading-relaxed">
              We honour these traditions not by freezing them in time, but by bringing them alive — freshly, daily, for every guest who sits at our table.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal direction="right" distance={80} duration={1.3} className="overflow-hidden order-1 md:order-2" style={{ minHeight: '480px' }}>
          <motion.img
            src={IMG_STORY2}
            alt="Restaurant kitchen"
            className="w-full h-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8 }}
            style={{ minHeight: '480px', objectFit: 'cover', display: 'block' }}
          />
        </ScrollReveal>
      </section>

      {/* Full-bleed interior with parallax */}
      <section className="relative overflow-hidden w-full" style={{ height: 'clamp(300px, 48vw, 620px)' }}>
        <InteriorParallax src={IMG_INTERIOR} />
      </section>

      {/* Values */}
      <section className="py-36 px-6">
        <div className="max-w-screen-lg mx-auto">
          <ScrollReveal direction="up" distance={70} duration={1.1}>
            <div className="text-center mb-24">
              <p className="section-label">What We Stand For</p>
              <h2 className="font-serif font-light text-text-primary text-5xl md:text-6xl">Our values</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-14 md:gap-20">
            {values.map((v, i) => (
              <ScrollReveal key={v.label} direction={i % 2 === 0 ? 'left' : 'right'} distance={60} delay={i * 0.12} duration={1.1}>
                <motion.div whileHover={{ x: 8 }} transition={{ duration: 0.3 }}>
                  <motion.div
                    className="h-px bg-accent-copper mb-6"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.12 }}
                    style={{ width: '48px' }}
                  />
                  <h3 className="font-serif font-light text-text-primary text-2xl md:text-3xl mb-4">{v.label}</h3>
                  <p className="font-sans text-text-muted text-base leading-relaxed">{v.text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="py-36 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <ScrollReveal direction="scale" duration={1.2}>
            <p className="section-label">Find Us</p>
            <h2 className="font-serif font-light text-text-primary text-5xl md:text-6xl mb-10">Come and eat with us</h2>
            <div className="flex flex-col gap-3 text-text-muted font-sans text-base mb-12">
              <p>200 Crookes, Sheffield, S10 1TG</p>
              <p><a href="tel:+441143492043" className="hover:text-accent-copper transition-colors duration-300">+44 114 349 2043</a></p>
              <p><a href="mailto:info@michoturkishbargrill.co.uk" className="hover:text-accent-copper transition-colors duration-300">info@michoturkishbargrill.co.uk</a></p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://web.dojo.app/create_booking/vendor/IMRbX5h6TDitS4ia5XT3HxTvOdSiYmbC-xwiQb1-icM_restaurant" target="_blank" rel="noopener noreferrer" className="btn-copper inline-block">Book a Table</a>
              <Link to="/menu" className="btn-outline inline-block">View Menu</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BookingPrompt />
    </motion.main>
  )
}

// Separate component to avoid hook-in-conditional error
function InteriorParallax({ src }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <div ref={ref} className="relative overflow-hidden w-full h-full">
      <motion.div className="absolute inset-0" style={{ y, scale: 1.25 }}>
        <img src={src} alt="Micho interior" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'rgba(15,14,12,0.45)' }} />
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <ScrollReveal direction="scale" duration={1.3}>
          <p className="font-serif font-light text-text-primary text-3xl md:text-5xl lg:text-6xl text-center px-6 leading-tight">
            200 Crookes, Sheffield S10 1TG
          </p>
        </ScrollReveal>
      </div>
    </div>
  )
}
