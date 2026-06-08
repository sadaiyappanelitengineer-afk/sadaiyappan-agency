'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import QuantumCore from '@/components/QuantumCore'

const plans = [
  {
    name: 'Starter',
    price: 'Custom',
    description: 'Perfect for small businesses and startups looking to establish their digital presence.',
    features: [
      '5-Page Responsive Website',
      'Mobile Optimized Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      'Social Media Integration',
      '1 Month Support',
    ],
    cta: 'Get Started',
    popular: false,
    gradient: 'from-amber-500 to-purple-500',
  },
  {
    name: 'Professional',
    price: 'Custom',
    description: 'Ideal for growing businesses that need a comprehensive digital solution.',
    features: [
      '10-Page Dynamic Website',
      'Advanced Animations',
      'Complete SEO Optimization',
      'CMS Integration',
      'E-Commerce Ready',
      'AI Chatbot Integration',
      '3 Months Support',
      'Performance Optimization',
    ],
    cta: 'Get Started',
    popular: true,
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For established businesses requiring a full-scale digital transformation.',
    features: [
      'Unlimited Pages',
      'Custom Web Application',
      'Advanced AI Solutions',
      'Mobile App Development',
      'Full SEO & Marketing Suite',
      'Dedicated Project Manager',
      '12 Months Priority Support',
      'SLA Guarantee',
      'Custom Integrations',
      'Team Training',
    ],
    cta: 'Contact Us',
    popular: false,
    gradient: 'from-purple-500 to-pink-500',
  },
]

const faqs = [
  { q: 'How long does it take to build a website?', a: 'We can deliver a premium website in as little as 5 days, depending on the complexity and requirements.' },
  { q: 'Do you offer custom pricing?', a: 'Yes! Every project is unique. Contact us for a personalized quote tailored to your specific needs.' },
  { q: 'What technologies do you use?', a: 'We use cutting-edge technologies including Next.js, React, TypeScript, and modern CSS frameworks for optimal performance.' },
  { q: 'Do you provide hosting?', a: 'Yes, we offer hosting solutions and can help you choose the best option for your project.' },
  { q: 'Is there post-launch support?', a: 'Absolutely. All our plans include support, with Enterprise plans receiving dedicated priority support.' },
]

export default function PricingPage() {
  return (
    <PageTransition>
      <QuantumCore />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">Pricing</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Simple, Transparent</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-amber-200/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Every project is unique. Contact us for a custom quote tailored to your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl border p-6 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-amber-500/10 to-yellow-500/5 border-amber-500/30 scale-105'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-50 text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-display font-semibold text-amber-50 mb-1">{plan.name}</h3>
                  <p className="text-amber-200/70 text-sm mb-4">{plan.description}</p>
                  <div className="text-3xl font-display font-bold text-amber-50">{plan.price}</div>
                  <p className="text-amber-200/50 text-xs mt-1">per project</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-amber-100/80 text-sm">
                      <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-50 hover:shadow-lg hover:shadow-amber-500/25'
                      : 'bg-white/5 text-amber-100/80 hover:bg-white/10 hover:text-amber-50 border border-white/5'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Frequently Asked</span>
              {' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <h3 className="text-amber-50 font-medium mb-2">{faq.q}</h3>
                <p className="text-amber-200/70 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8">
            <Link href="/faq" className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">
              View All FAQs →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-600/10 to-amber-500/10 border border-white/5 p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Need a Custom Solution?</span>
            </h2>
            <p className="text-amber-200/70 text-lg max-w-2xl mx-auto mb-8">Tell us about your project and we&apos;ll create a tailored proposal.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-50 font-semibold hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300">
              Get a Custom Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
