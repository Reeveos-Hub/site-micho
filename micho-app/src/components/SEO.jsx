import React from 'react'
import { Helmet } from 'react-helmet-async'

export const BASE_URL = 'https://michoturkishbargrill.co.uk'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'BarOrPub'],
  '@id': `${BASE_URL}/#restaurant`,
  name: 'Micho Turkish Bar & Grill',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  image: DEFAULT_IMAGE,
  description:
    'Authentic Turkish Bar & Grill in Sheffield. Named after chef Micho, with 25 years of culinary expertise behind the charcoal grill. Fresh meze in Crookes, Sheffield.',
  telephone: '+441143492043',
  email: 'info@michoturkishbargrill.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '200 Crookes',
    addressLocality: 'Sheffield',
    addressRegion: 'South Yorkshire',
    postalCode: 'S10 1TG',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.3826,
    longitude: -1.496,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday', 'Thursday'], opens: '16:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '16:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '12:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '12:00', closes: '21:00' },
  ],
  servesCuisine: ['Turkish', 'Mediterranean', 'Bar food'],
  priceRange: '££',
  hasMap: 'https://maps.google.com/?q=200+Crookes+Sheffield+S10+1TG',
  sameAs: [
    'https://instagram.com/michoturkishbargrill',
    'https://facebook.com/michoturkishbargrill',
  ],
}

const LOCAL_BUSINESS_SCHEMA_JSON = JSON.stringify(localBusinessSchema)

/**
 * @param {string}  title
 * @param {string}  description
 * @param {string}  canonical      – path only, e.g. '/menu'
 * @param {string}  [ogType]       – 'website' | 'article' (default: 'website')
 * @param {string}  [ogImage]      – full image URL (default: og-image.jpg)
 * @param {string}  [datePublished]– ISO date string, for articles
 * @param {string}  [dateModified] – ISO date string, for articles
 * @param {boolean} [noindex]      – add noindex,nofollow (default: false)
 * @param {object}  [pageSchema]   – extra JSON-LD for this page
 */
export default function SEO({
  title,
  description,
  canonical = '/',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  datePublished,
  dateModified,
  noindex = false,
  pageSchema = null,
}) {
  const canonicalPath = canonical.startsWith('http')
    ? canonical.replace(/^https?:\/\/[^/]*/, '')
    : canonical
  const canonicalUrl = `${BASE_URL}${canonicalPath || '/'}`

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      ...(canonicalPath !== '/'
        ? [{ '@type': 'ListItem', position: 2, name: title.split('|')[0].trim(), item: canonicalUrl }]
        : []),
    ],
  }

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Micho Turkish Bar & Grill" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_GB" />
      {datePublished && <meta property="article:published_time" content={datePublished} />}
      {dateModified && <meta property="article:modified_time" content={dateModified} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo */}
      <meta name="geo.region" content="GB-SYK" />
      <meta name="geo.placename" content="Sheffield" />

      {/* JSON-LD */}
      <script type="application/ld+json">{LOCAL_BUSINESS_SCHEMA_JSON}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      {pageSchema && (Array.isArray(pageSchema) ? pageSchema : [pageSchema]).map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  )
}
