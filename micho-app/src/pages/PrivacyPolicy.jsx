import React from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const BUSINESS_NAME = 'Micho Turkish Bar & Grill'
const BUSINESS_EMAIL = 'info@michoturkishbarandgrill.co.uk'
const BUSINESS_ADDRESS = '229 Fulwood Road, Sheffield, S10 3BA'
const LAST_UPDATED = '14 March 2026'

const sections = [
  {
    title: 'Who we are',
    content: `${BUSINESS_NAME} operates this website. Our restaurant is located at ${BUSINESS_ADDRESS}. For any privacy-related enquiries, contact us at ${BUSINESS_EMAIL}.`,
  },
  {
    title: 'What data we collect',
    content: `When you visit our website, we may collect the following information:
    
• Information you provide when making a reservation through our booking partner (Dojo), such as your name, email address, phone number, and party size
• Technical data collected automatically, including your IP address, browser type, device information, and pages visited
• Cookies and similar technologies as described in our cookie section below`,
  },
  {
    title: 'How we use your data',
    content: `We use your information to:
    
• Process and manage table reservations
• Respond to enquiries and provide customer service
• Improve our website and user experience
• Comply with legal obligations

We do not sell, rent, or share your personal data with third parties for marketing purposes.`,
  },
  {
    title: 'Third-party services',
    content: `Our website uses the following third-party services:
    
• Dojo — for processing table reservations. When you book a table, your data is handled according to Dojo's privacy policy.
• Google Fonts — for web typography. Google may collect your IP address when fonts are loaded.
• Unsplash — for imagery. Unsplash may collect anonymised usage data.

Each third-party service has its own privacy policy governing the data they collect.`,
  },
  {
    title: 'Cookies',
    content: `Our website uses cookies — small text files stored on your device — to ensure the site functions correctly and to remember your preferences (such as dismissing announcements).
    
We use:
• Essential cookies — required for the website to function. These cannot be disabled.
• Analytics cookies — to understand how visitors use our site. These are only set with your consent.

You can manage your cookie preferences at any time through your browser settings.`,
  },
  {
    title: 'Your rights under UK GDPR',
    content: `Under UK data protection law, you have the right to:

• Access the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your data
• Object to or restrict how we process your data
• Data portability — receive your data in a structured, machine-readable format
• Withdraw consent at any time where processing is based on consent

To exercise any of these rights, contact us at ${BUSINESS_EMAIL}. We will respond within 30 days.`,
  },
  {
    title: 'Data retention',
    content: 'We retain your personal data only for as long as necessary to fulfil the purposes described above, or as required by law. Reservation data is retained for up to 12 months after your visit.',
  },
  {
    title: 'Security',
    content: 'We take appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our website uses HTTPS encryption for all data transmitted between your browser and our servers.',
  },
  {
    title: 'Changes to this policy',
    content: `We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. This policy was last updated on ${LAST_UPDATED}.`,
  },
  {
    title: 'Contact',
    content: `If you have questions about this privacy policy or wish to make a complaint, contact us at ${BUSINESS_EMAIL} or write to us at ${BUSINESS_ADDRESS}. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Micho Turkish Bar & Grill"
        description="How Micho Turkish Bar & Grill collects, uses, and protects your personal data."
        canonical="https://michoturkishbarandgrill.co.uk/privacy"
      />

      <main className="min-h-screen bg-bg-primary pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <p className="font-sans text-xs uppercase tracking-widest text-accent-copper mb-4">Legal</p>
            <h1 className="font-serif font-light text-text-primary text-3xl md:text-4xl mb-3">
              Privacy Policy
            </h1>
            <p className="font-sans text-text-muted text-sm mb-12">
              Last updated: {LAST_UPDATED}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((section, i) => (
                <section key={i}>
                  <h2 className="font-serif text-text-primary text-xl mb-3">
                    {section.title}
                  </h2>
                  <div className="font-sans text-text-muted text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}
