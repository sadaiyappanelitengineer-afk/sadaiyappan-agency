'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import NeuralNetwork from '@/components/NeuralNetwork'

const features = [
  'Natural Language Processing', '24/7 Customer Support', 'Lead Qualification', 'Multi-language Support',
  'Analytics Dashboard', 'Custom Training', 'CRM Integration', 'Human Handoff',
  'Website Widget', 'Mobile SDK',
]

const process = [
  { step: '01', title: 'Discovery', desc: 'Understanding your customer support needs.' },
  { step: '02', title: 'Train', desc: 'Training the AI on your business knowledge.' },
  { step: '03', title: 'Integrate', desc: 'Seamless integration with your platforms.' },
  { step: '04', title: 'Optimize', desc: 'Continuous learning and performance improvement.' },
]

export default function AIChatbotsPage() {
  return (
    <PageTransition>
      <NeuralNetwork />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4 block">Service</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">AI</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Chatbots</span>
            </h1>
            <p className="text-amber-200/70 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              Intelligent chatbots that handle customer inquiries, qualify leads, and provide 24/7 support. Powered by advanced AI that learns and improves over time.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-amber-50 font-medium hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300">
              Deploy Your Chatbot
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4 block">Features</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold"><span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Intelligent Automation Features</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {features.map((feature, i) => (
              <motion.div key={feature} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-4 rounded-xl bg-amber-900/[0.02] border border-white/5 text-center">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-amber-100/80 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold"><span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Our Process</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative p-6 rounded-2xl bg-amber-900/[0.02] border border-white/5">
                <span className="text-5xl font-display font-bold text-white/5 absolute top-4 right-4">{item.step}</span>
                <span className="text-emerald-400 text-sm font-bold mb-2 block">{item.step}</span>
                <h3 className="text-lg font-semibold text-amber-50 mb-2">{item.title}</h3>
                <p className="text-amber-200/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-white/5 p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6"><span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Ready to Automate Your Support?</span></h2>
            <p className="text-amber-200/70 text-lg max-w-2xl mx-auto mb-8">Deploy an AI chatbot and provide 24/7 customer support.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-amber-50 font-semibold hover:shadow-xl hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300">
              Get Started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
