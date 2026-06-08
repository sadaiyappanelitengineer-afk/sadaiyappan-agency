'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import FloatingCards from '@/components/FloatingCards'

export default function SadaiyappanPortfolioPage() {
  return (
    <PageTransition>
      <FloatingCards />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-amber-200/70 hover:text-amber-50 transition-colors mb-8 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to Portfolio
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">Featured Project</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Sadaiyappan</span>
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
                </h1>
                <p className="text-amber-200/70 leading-relaxed mb-6">
                  A premium personal portfolio website built with Next.js, featuring stunning animations, 3D elements, and a clean, professional design that showcases web development expertise.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'GSAP', 'Lenis'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-amber-900/5 text-amber-100/80 text-xs border border-amber-900/20/10">{tech}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[{ label: 'Performance', value: '98/100' }, { label: 'Accessibility', value: '95/100' }, { label: 'SEO', value: '95/100' }].map((m) => (
                    <div key={m.label} className="p-4 rounded-xl bg-amber-900/[0.02] border border-amber-900/20/5 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{m.value}</div>
                      <div className="text-amber-200/50 text-xs mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://tranquil-dasik-edac77.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-purple-500 text-amber-50 font-medium hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300"
                >
                  Visit Live Website
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl bg-gradient-to-br from-amber-500/10 to-purple-500/10 border border-amber-900/20/5 p-8">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px]" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-amber-50 mb-4">Project Highlights</h3>
                    <ul className="space-y-4">
                      {[
                        'Cinematic hero with 3D particle system',
                        'Smooth scrolling with Lenis',
                        'GSAP scroll-triggered animations',
                        'Framer Motion page transitions',
                        'Responsive & accessible design',
                        'Lighthouse score 95+',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-amber-200/70 text-sm">
                          <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
