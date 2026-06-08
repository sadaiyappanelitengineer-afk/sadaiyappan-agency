'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import FloatingCards from '@/components/FloatingCards'

const projects = [
  {
    title: 'Sadaiyappan Portfolio',
    description: 'Personal portfolio website showcasing premium web development expertise, modern design, and technical capabilities. Built with Next.js, featuring stunning animations and a clean, professional aesthetic.',
    link: 'https://tranquil-dasik-edac77.netlify.app',
    slug: 'sadaiyappan-portfolio',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    gradient: 'from-amber-500 to-purple-500',
    category: 'Portfolio Website',
    color: 'indigo',
    metrics: [
      { label: 'Performance', value: '98/100' },
      { label: 'Responsiveness', value: '100/100' },
      { label: 'SEO', value: '95/100' },
    ],
  },
  {
    title: 'Paramakalayani TET Coaching Hub',
    description: 'Premium educational platform designed for teacher eligibility test (TET) coaching. Features include course management, student portals, interactive learning materials, and modern responsive design.',
    link: 'https://69f4e1d3672514b6becb659a--tet-success-hub.netlify.app/',
    slug: 'tet-coaching-hub',
    tags: ['React', 'Education', 'Responsive', 'Modern UI', 'Formation'],
    gradient: 'from-cyan-500 to-emerald-500',
    category: 'Educational Platform',
    color: 'cyan',
    rating: 7,
    maxRating: 7,
    metrics: [
      { label: 'Performance', value: '96/100' },
      { label: 'Responsiveness', value: '100/100' },
      { label: 'SEO', value: '93/100' },
    ],
  },
]

export default function PortfolioPage() {
  return (
    <PageTransition>
      <FloatingCards />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">Our Work</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Our</span>
              {' '}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-amber-200/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Each project represents our commitment to quality, innovation, and client satisfaction. Click on any project to see it live.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-amber-900/[0.02] border border-amber-900/20/5 hover:border-amber-900/30 transition-all duration-500">
                    <div className={`h-3 bg-gradient-to-r ${project.gradient}`} />
                    <div className="p-6 md:p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-medium tracking-wider uppercase text-${project.color}-400`}>
                          {project.category}
                        </span>
                        <span className="text-amber-200/50 text-xs flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                          Visit Live Site
                          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-amber-50 mb-3 group-hover:text-amber-300 transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-amber-200/70 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-amber-900/5 text-amber-200/70 text-xs border border-amber-900/20/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <div className="text-lg font-bold text-amber-50">{metric.value}</div>
                            <div className="text-amber-200/50 text-xs">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      {project.rating && (
                        <div className="flex items-center gap-2">
                          <div className="flex gap-0.5">
                            {Array.from({ length: project.maxRating }, (_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-yellow-400 text-sm font-medium">{project.rating}/{project.maxRating} Client Rating</span>
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-purple-500/5 to-yellow-500/10 border border-amber-900/20/5 p-8 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Want Your Project Featured Here?</span>
              </h2>
              <p className="text-amber-200/70 text-lg max-w-2xl mx-auto mb-8">Let&apos;s build something amazing together.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-50 font-semibold hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300">
                Start Your Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
