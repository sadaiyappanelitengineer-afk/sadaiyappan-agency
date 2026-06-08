'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import FloatingCards from '@/components/FloatingCards'

export default function TETCoachingHubPage() {
  return (
    <PageTransition>
      <FloatingCards />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-amber-200/70 hover:text-amber-50 transition-colors mb-8 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to Portfolio
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">Client Project</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Paramakalayani TET</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Coaching Hub</span>
                </h1>
                <p className="text-amber-200/70 leading-relaxed mb-6">
                  A premium educational platform built for teacher eligibility test coaching. Features modern design, responsive layout, and an intuitive interface for students and administrators.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['React', 'Responsive Design', 'Modern UI', 'Educational Platform', 'Formation'].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-amber-900/5 text-amber-100/80 text-xs border border-amber-900/20/10">{tech}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[{ label: 'Performance', value: '96/100' }, { label: 'Responsiveness', value: '100/100' }, { label: 'SEO', value: '93/100' }].map((m) => (
                    <div key={m.label} className="p-4 rounded-xl bg-amber-900/[0.02] border border-amber-900/20/5 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">{m.value}</div>
                      <div className="text-amber-200/50 text-xs mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex gap-1">
                    {Array.from({ length: 7 }, (_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                  <span className="text-yellow-400 font-medium">7/7 Perfect Score</span>
                </div>
                <a
                  href="https://69f4e1d3672514b6becb659a--tet-success-hub.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-amber-50 font-medium hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300"
                >
                  Visit Live Website
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-amber-900/20/5 p-8">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px]" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-amber-50 mb-4">Client Feedback</h3>
                    <div className="p-4 rounded-xl bg-amber-900/[0.03] border border-amber-900/20/5 mb-6">
                      <p className="text-amber-100/80 text-sm leading-relaxed italic">
                        &ldquo;Professional service, fast delivery, excellent communication, and a high-quality website that exceeded expectations.&rdquo;
                      </p>
                      <p className="text-amber-200/50 text-xs mt-3">— Paramakalayani TET Coaching Hub</p>
                    </div>
                    <h4 className="text-sm font-semibold text-amber-50 mb-3">Project Highlights</h4>
                    <ul className="space-y-3">
                      {[
                        'Modern educational platform design',
                        'Responsive across all devices',
                        'Fast loading and optimized',
                        'Client satisfaction: 7/7 rating',
                        'Clean, professional aesthetic',
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
