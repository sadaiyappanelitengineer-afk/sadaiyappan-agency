'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedCounter from '@/components/AnimatedCounter'
import PageTransition from '@/components/PageTransition'
import CosmicParticles from '@/components/CosmicParticles'

const services = [
  {
    title: 'Website Development',
    description: 'Custom websites, landing pages, and web applications built with modern technologies for optimal performance.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    href: '/services/web-development',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    title: 'E-Commerce Stores',
    description: 'High-converting online stores with secure payments, inventory management, and seamless checkout experiences.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    href: '/services/ecommerce',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents powered by AI to automate customer support and lead qualification.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    href: '/services/ai-chatbots',
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile apps for iOS and Android with native performance and beautiful UI.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    href: '/services/mobile-apps',
    color: 'from-emerald-500 to-green-500',
  },
  {
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies to improve rankings, drive organic traffic, and increase visibility.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: '/services/seo',
    color: 'from-rose-500 to-red-500',
  },
  {
    title: 'Digital Marketing',
    description: 'Results-driven digital marketing campaigns including social media, PPC, and content strategy.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    href: '/services/digital-marketing',
    color: 'from-pink-500 to-fuchsia-500',
  },
]

const testimonials = [
  {
    name: 'Paramakalayani TET Coaching Hub',
    role: 'Educational Institution',
    text: 'Professional service, fast delivery, excellent communication, and a high-quality website that exceeded expectations.',
    rating: 5,
    maxRating: 5,
  },
  {
    name: 'RaviKumar B',
    role: 'Restaurant Owner',
    text: 'Our online ordering system transformed the business. Orders increased by 40% in the first month. Highly recommended!',
    rating: 5,
    maxRating: 5,
  },
  {
    name: 'Marai Seelan M',
    role: 'Clinic Director',
    text: 'The AI chatbot on our clinic website handles 80% of patient inquiries. Incredible technology and seamless integration.',
    rating: 5,
    maxRating: 5,
  },
  {
    name: 'Manoj P',
    role: 'Startup Founder',
    text: 'They built our entire e-commerce platform in just 10 days. The design is stunning and our conversion rate speaks for itself.',
    rating: 5,
    maxRating: 5,
  },
]

const StarRating = ({ rating, maxRating }: { rating: number; maxRating: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxRating }, (_, i) => (
        <motion.svg
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-amber-200/30'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  )
}

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95])

  return (
    <PageTransition>
      <CosmicParticles />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />

        <motion.div style={{ opacity, scale }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium tracking-wider uppercase">
              Digital Innovation Agency
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-8 animate-multicolor-gradient">
            We Build Websites<br />That Grow Your<br />Business
          </h1>

          <p className="text-lg md:text-xl text-amber-200/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Premium websites, e-commerce solutions, AI chatbots, mobile applications, SEO strategies, and digital marketing systems designed for modern businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-50 font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105"
            >
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/contact"
              className="group px-8 py-3.5 rounded-xl border border-amber-900/20 text-amber-50 font-semibold text-base hover:bg-amber-900/5 hover:border-amber-700/30 transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Floating service badges */}
          <div className="hidden md:flex items-center justify-center gap-3 mt-16">
            {['Web', 'E-Com', 'AI', 'Mobile', 'SEO', 'Marketing'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg bg-amber-900/5 border border-amber-900/20 text-amber-200/70 text-xs font-medium hover:bg-amber-900/10 hover:text-amber-50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-amber-900/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Comprehensive Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-amber-200/70 max-w-2xl mx-auto text-lg">
              From websites to AI, we deliver end-to-end digital solutions that transform businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href} className="group block">
                  <div className="relative p-6 rounded-2xl bg-amber-900/[0.02] border border-amber-900/20 hover:bg-amber-900/[0.04] hover:border-amber-700/30 transition-all duration-500 h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-amber-50">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-amber-50 mb-2 group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-amber-200/70 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="text-amber-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { end: 50, suffix: '+', label: 'Projects Delivered' },
              { end: 5, suffix: '+', label: 'Years Experience' },
              { end: 20, suffix: '+', label: 'Happy Clients' },
              { end: 99, suffix: '%', label: 'Client Satisfaction' },
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

      {/* Portfolio Preview */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Featured
              </span>
              {' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.a
              href="https://tranquil-dasik-edac77.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-amber-900/20 bg-gradient-to-br from-amber-500/5 to-amber-500/5 hover:border-amber-500/20 transition-all duration-500"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">Featured Project</span>
                  <div className="flex items-center gap-2 text-amber-200/50 text-xs">
                    <span>Live Demo</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-semibold text-amber-50 mb-2 group-hover:text-amber-300 transition-colors">
                  Sadaiyappan Portfolio
                </h3>
                <p className="text-amber-200/70 text-sm mb-6">
                  Personal portfolio showcasing premium web development expertise and modern design capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Next.js', 'Tailwind', 'Framer Motion'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-amber-900/5 text-amber-200/70 text-xs border border-amber-900/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    98/100 Performance
                  </div>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0 group-hover:via-amber-400 transition-all duration-500" />
            </motion.a>

            <motion.a
              href="https://69f4e1d3672514b6becb659a--tet-success-hub.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-amber-900/20 bg-gradient-to-br from-amber-500/5 to-amber-500/5 hover:border-amber-500/20 transition-all duration-500"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-amber-400 uppercase tracking-wider">Client Project</span>
                  <div className="flex items-center gap-2 text-amber-200/50 text-xs">
                    <span>Visit Website</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-semibold text-amber-50 mb-2 group-hover:text-amber-300 transition-colors">
                  Paramakalayani TET Coaching Hub
                </h3>
                <p className="text-amber-200/70 text-sm mb-6">
                  Premium educational platform for teacher eligibility test coaching with modern interactive features.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Education', 'Responsive', 'Modern UI'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-amber-900/5 text-amber-200/70 text-xs border border-amber-900/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5,6,7].map((star) => (
                      <motion.svg
                        key={star}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + star * 0.05, type: 'spring' }}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <span className="text-yellow-400 text-xs font-medium">7/7</span>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0 group-hover:via-amber-400 transition-all duration-500" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                What Our
              </span>
              {' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-amber-900/[0.02] border border-amber-900/20 hover:border-amber-700/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} maxRating={testimonial.maxRating} />
                </div>
                <p className="text-amber-100/80 text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="text-amber-50 text-sm font-medium">{testimonial.name}</p>
                  <p className="text-amber-200/50 text-xs">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              Read All Reviews
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-amber-500/10 border border-amber-900/20 p-8 md:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Your Business?
                </span>
              </h2>
              <p className="text-amber-200/70 text-lg max-w-2xl mx-auto mb-8">
                Let&apos;s discuss your project and create something extraordinary together.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-50 font-semibold hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300"
              >
                Start Your Project
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
