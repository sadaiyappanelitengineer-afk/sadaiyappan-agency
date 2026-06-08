'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import NeuralNetwork from '@/components/NeuralNetwork'

const services = [
  {
    title: 'Website Development',
    tagline: 'Custom websites that make an impact',
    description: 'From stunning landing pages to complex web applications, we build websites that are fast, responsive, and conversion-optimized. Using cutting-edge technologies like Next.js, React, and modern CSS frameworks, we deliver digital experiences that captivate your audience.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: '/services/web-development',
    gradient: 'from-amber-500 to-purple-500',
    features: ['Responsive Design', 'SEO Optimized', 'Lightning Fast', 'CMS Integration', 'Custom Animations'],
  },
  {
    title: 'E-Commerce Stores',
    tagline: 'High-converting online stores',
    description: 'Launch a powerful online store with seamless checkout, secure payments, and intelligent inventory management. We create e-commerce experiences that drive sales and build customer loyalty.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    href: '/services/ecommerce',
    gradient: 'from-cyan-500 to-blue-500',
    features: ['Payment Integration', 'Inventory Management', 'Mobile Optimized', 'Analytics Dashboard', 'Marketing Tools'],
  },
  {
    title: 'AI Chatbots',
    tagline: 'Intelligent customer automation',
    description: 'Deploy AI-powered chatbots that handle customer inquiries, qualify leads, and provide 24/7 support. Our chatbots learn from interactions and continuously improve.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    href: '/services/ai-chatbots',
    gradient: 'from-emerald-500 to-teal-500',
    features: ['Natural Language Processing', 'Multi-language Support', 'Analytics Dashboard', 'Custom Training', 'CRM Integration'],
  },
  {
    title: 'Mobile Applications',
    tagline: 'Beautiful apps for iOS & Android',
    description: 'Cross-platform mobile applications with native performance, stunning UI, and seamless user experiences. From concept to App Store deployment, we handle everything.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    href: '/services/mobile-apps',
    gradient: 'from-orange-500 to-red-500',
    features: ['Cross-platform', 'Push Notifications', 'Offline Mode', 'App Store Publishing', 'Analytics Integration'],
  },
  {
    title: 'SEO Optimization',
    tagline: 'Dominate search rankings',
    description: 'Data-driven SEO strategies that improve your search engine rankings, drive organic traffic, and increase your online visibility. We use proven techniques that deliver measurable results.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: '/services/seo',
    gradient: 'from-pink-500 to-rose-500',
    features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building', 'Performance Tracking'],
  },
  {
    title: 'Digital Marketing',
    tagline: 'Results-driven campaigns',
    description: 'Comprehensive digital marketing services including social media management, PPC advertising, content marketing, and email campaigns that generate real business results.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    href: '/services/digital-marketing',
    gradient: 'from-yellow-500 to-amber-500',
    features: ['Social Media', 'PPC Advertising', 'Content Strategy', 'Email Marketing', 'Analytics & Reporting'],
  },
]

export default function ServicesPage() {
  return (
    <PageTransition>
      <NeuralNetwork />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-amber-500/20 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Comprehensive Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-amber-200/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              End-to-end digital solutions tailored to your business needs. From web development to AI, we deliver excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={service.href} className="group block h-full">
                  <div className="relative h-full rounded-2xl bg-amber-900/[0.02] border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500">
                    <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                    <div className="p-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-amber-50">{service.icon}</div>
                      </div>
                      <h3 className="text-xl font-display font-semibold text-amber-50 mb-1 group-hover:text-indigo-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-amber-400/80 text-sm mb-3">{service.tagline}</p>
                      <p className="text-amber-200/70 text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {service.features.map((feature) => (
                          <span key={feature} className="px-2.5 py-1 rounded-full bg-amber-900/5 text-gray-500 text-xs border border-white/5">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium group-hover:gap-2 transition-all">
                        Learn More
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-purple-500/5 to-yellow-500/10 border border-white/5 p-8 md:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  Not Sure Which Service You Need?
                </span>
              </h2>
              <p className="text-amber-200/70 text-lg max-w-2xl mx-auto mb-8">
                We&apos;ll analyze your business and recommend the perfect solution.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-50 font-semibold hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300"
              >
                Get a Free Consultation
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
