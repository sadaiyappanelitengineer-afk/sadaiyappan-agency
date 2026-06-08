'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import WaveBackground from '@/components/WaveBackground'

const faqs = [
  { q: 'What services does Sadaiyappan Elite Digital Solutions offer?', a: 'We offer comprehensive digital solutions including website development, e-commerce stores, AI chatbots, mobile applications, SEO optimization, digital marketing, custom business software, and business automation services.' },
  { q: 'How long does it take to build a website?', a: 'We can deliver a premium, fully functional website in as little as 5 days for standard projects. More complex projects with custom features, e-commerce functionality, or AI integrations may take 2-4 weeks depending on requirements.' },
  { q: 'What technologies do you use for web development?', a: 'We use cutting-edge technologies including Next.js 15, React, TypeScript, Tailwind CSS, and various animation libraries like Framer Motion, GSAP, and Three.js. We always choose the best technology stack for your specific project needs.' },
  { q: 'Do you offer e-commerce solutions?', a: 'Yes, we specialize in building high-converting e-commerce stores with secure payment gateways, inventory management, shopping carts, order tracking, and mobile-optimized shopping experiences.' },
  { q: 'Can you integrate AI chatbots into existing websites?', a: 'Absolutely! Our AI chatbots can be seamlessly integrated into existing websites, CRM systems, and other platforms. We customize the chatbot\'s knowledge base to match your business perfectly.' },
  { q: 'Do you develop mobile apps for both iOS and Android?', a: 'Yes, we build cross-platform mobile applications using technologies like React Native and Flutter, ensuring native performance on both iOS and Android from a single codebase.' },
  { q: 'What is your SEO process?', a: 'Our SEO process includes comprehensive keyword research, on-page optimization, technical SEO audit, content strategy, link building, and continuous performance monitoring and optimization.' },
  { q: 'How much do your services cost?', a: 'Every project is unique, so we provide custom quotes based on your specific requirements. Contact us for a free consultation and we\'ll provide a detailed proposal tailored to your needs and budget.' },
  { q: 'Do you provide post-launch support?', a: 'Yes, we offer ongoing maintenance and support for all our projects. Our support packages include regular updates, security patches, performance monitoring, and technical assistance.' },
  { q: 'What kind of businesses do you work with?', a: 'We work with a wide range of businesses including shop owners, startups, restaurants, hospitals, clinics, schools, colleges, coaching centers, real estate agencies, hotels, and manufacturing businesses.' },
  { q: 'How do I get started with my project?', a: 'Simply contact us through our website, call us at +91 8903158727, or email us at sadaiyappaneliteengineer@gmail.com. We\'ll schedule a free consultation to discuss your project requirements.' },
  { q: 'Do you offer digital marketing services?', a: 'Yes, we provide comprehensive digital marketing services including social media management, PPC advertising, content marketing, email campaigns, and brand strategy development.' },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <PageTransition>
      <WaveBackground />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4 block">FAQ</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Frequently Asked</span>
              {' '}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our services. Can&apos;t find what you&apos;re looking for? Contact us!
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className={`rounded-xl border transition-all duration-300 cursor-pointer ${
                  openIndex === index
                    ? 'bg-white/[0.04] border-indigo-500/20'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-white font-medium text-sm md:text-base pr-4">{faq.q}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/10 border border-white/5 p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Still Have Questions?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">We&apos;re here to help. Reach out to us anytime.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:shadow-xl hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300">
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
