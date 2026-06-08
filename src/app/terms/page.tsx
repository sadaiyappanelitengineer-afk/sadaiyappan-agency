'use client'

import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import ThreeBackground from '@/components/ThreeBackground'

export default function TermsPage() {
  return (
    <PageTransition>
      <ThreeBackground />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">Legal</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Terms &</span>
              {' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Conditions</span>
            </h1>
          </motion.div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-amber-100/80 text-sm leading-relaxed">Welcome to Sadaiyappan Elite Digital Solutions.</p>
              <p className="text-amber-100/80 text-sm leading-relaxed mt-3">By accessing our website or using our services, you agree to comply with the following terms and conditions.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Services</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed mb-3">We provide professional services including:</p>
              <ul className="space-y-2">
                {['Website Development', 'E-Commerce Solutions', 'AI Chatbot Development', 'Mobile App Development', 'SEO Optimization', 'Digital Marketing', 'Custom Software Solutions'].map(item => (
                  <li key={item} className="flex items-start gap-3 text-amber-100/80 text-sm"><svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Project Requirements</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed">Clients are responsible for providing accurate project information, content, images, branding assets, and necessary approvals within agreed timelines.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Intellectual Property</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed">Upon full payment, ownership of the completed project will be transferred to the client unless otherwise specified in the project agreement.</p>
              <p className="text-amber-200/70 text-sm leading-relaxed mt-3">Sadaiyappan Elite Digital Solutions reserves the right to display completed projects within its portfolio for promotional purposes.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Payments</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed">Projects may require an advance payment before work begins. Final project delivery may be subject to completion of all agreed payments.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Project Timeline</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed">Project timelines depend on project complexity, client feedback, and content availability.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Limitation of Liability</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed">We strive to provide high-quality services but cannot guarantee uninterrupted operation of third-party platforms, hosting providers, or external services.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Modifications</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed">We reserve the right to update these terms at any time without prior notice.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-500/20">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Contact</h2>
              <div className="space-y-1 text-amber-200/70 text-sm">
                <p>Email: <a href="mailto:sadaiyappaneliteengineer@gmail.com" className="text-amber-400 hover:text-amber-300">sadaiyappaneliteengineer@gmail.com</a></p>
                <p>Phone: <a href="tel:+918903158727" className="text-amber-400 hover:text-amber-300">+91 8903158727</a></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
