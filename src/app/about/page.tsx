'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import AnimatedCounter from '@/components/AnimatedCounter'
import DNANetwork from '@/components/DNANetwork'

const values = [
  {
    title: 'Fast Delivery',
    description: 'Websites delivered in as little as 5 days without compromising on quality.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Premium Design',
    description: 'World-class design standards that rival top-tier digital agencies globally.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Client-Focused',
    description: 'Your success is our priority. We listen, understand, and deliver beyond expectations.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Support',
    description: 'Round-the-clock support to ensure your digital presence runs smoothly.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security and architecture that grows with your business.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Innovation First',
    description: 'Leveraging cutting-edge technology to give your business a competitive edge.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <PageTransition>
      <DNANetwork />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-amber-500/20 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-multicolor-gradient">
              Transforming Businesses Through<br />Digital Innovation
            </h1>
            <p className="text-amber-200/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We are a premium digital agency dedicated to helping businesses thrive in the digital age with cutting-edge technology and exceptional design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  Built by a Passion for
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Technology &amp; Design
                </span>
              </h2>
              <div className="space-y-4 text-amber-200/70 leading-relaxed">
                <p>
                  Sadaiyappan Elite Digital Solutions was founded by Sadaiyappan S with a singular vision: to make enterprise-grade digital solutions accessible to businesses of all sizes.
                </p>
                <p>
                  We believe that every business deserves a stunning digital presence that drives real results. From local shops to educational institutions, from startups to established enterprises, we bring the same level of dedication and premium quality to every project.
                </p>
                <p>
                  Our approach combines technical expertise with creative design thinking, delivering solutions that not only look exceptional but also perform flawlessly.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-900/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-[60px]" />
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-2xl font-bold text-amber-50 mb-4">
                    SS
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-amber-50 mb-1">Sadaiyappan S</h3>
                  <p className="text-amber-400 text-sm mb-4">Founder &amp; Developer</p>
                  <p className="text-amber-200/70 text-sm leading-relaxed mb-6">
                    &ldquo;Every line of code we write is crafted with the intention of helping businesses grow. We don&apos;t just build websites &mdash; we build digital success stories.&rdquo;
                  </p>
                  <div className="flex gap-3">
                    <a href="https://github.com/sadaiyappan" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-amber-900/5 text-amber-200/70 hover:text-amber-50 hover:bg-amber-900/10 text-sm transition-all">
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/sadaiyappan" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-amber-900/5 text-amber-200/70 hover:text-amber-50 hover:bg-amber-900/10 text-sm transition-all">
                      LinkedIn
                    </a>
                    <a href="https://instagram.com/sadaiyappan.dev" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-amber-900/5 text-amber-200/70 hover:text-amber-50 hover:bg-amber-900/10 text-sm transition-all">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Our Core
              </span>
              {' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-amber-900/[0.02] border border-amber-900/20 hover:bg-amber-900/[0.04] hover:border-amber-900/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center text-amber-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-amber-50 mb-2">{value.title}</h3>
                <p className="text-amber-200/70 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 50, suffix: '+', label: 'Projects Delivered' },
              { end: 5, suffix: '+', label: 'Years Experience' },
              { end: 20, suffix: '+', label: 'Happy Clients' },
              { end: 7, suffix: '/7', label: 'Client Rating' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                <p className="text-amber-200/70 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-700/5 to-yellow-500/10 border border-amber-900/20 p-8 md:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  Want to Work With Us?
                </span>
              </h2>
              <p className="text-amber-200/70 text-lg max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how we can help transform your digital presence.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-50 font-semibold hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
