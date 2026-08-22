import React, { useEffect } from 'react'
import SEO, { BASE_URL } from '../components/SEO'

const BOOKING_URL = 'https://web.dojo.app/create_booking/vendor/IMRbX5h6TDitS4ia5XT3HxTvOdSiYmbC-xwiQb1-icM_restaurant'

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ReservationAction',
  name: 'Book a Table at Micho Turkish Bar & Grill',
  target: {
    '@type': 'EntryPoint',
    urlTemplate: BOOKING_URL,
    actionPlatform: [
      'https://schema.org/DesktopWebPlatform',
      'https://schema.org/MobileWebPlatform',
    ],
  },
  object: {
    '@type': 'FoodEstablishmentReservation',
    provider: { '@id': `${BASE_URL}/#restaurant` },
  },
}

export default function Reservations() {
  useEffect(() => {
    window.location.href = BOOKING_URL
  }, [])

  return (
    <>
      <SEO
        title="Reservations | Micho Turkish Bar & Grill Sheffield"
        description="Book a table at Micho Turkish Bar & Grill in Sheffield. Reserve online or call +44 114 349 2043. Authentic Turkish dining in Crookes, Sheffield."
        canonical="/reservations"
        pageSchema={pageSchema}
      />
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6"
        style={{ background: '#1A1816' }}
      >
        <p className="font-serif font-light text-text-primary text-2xl mb-4">
          Taking you to our booking system…
        </p>
        <p className="font-sans text-text-muted text-sm mb-8">
          If you're not redirected,{' '}
          <a
            href={BOOKING_URL}
            className="text-accent-copper underline hover:text-accent-gold transition-colors"
          >
            click here to book
          </a>
        </p>
      </div>
    </>
  )
}
