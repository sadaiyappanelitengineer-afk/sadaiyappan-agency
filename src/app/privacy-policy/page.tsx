'use client'

import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import ThreeBackground from '@/components/ThreeBackground'

export default function PrivacyPolicyPage() {
  return (
    <PageTransition>
      <ThreeBackground />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">Legal</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Privacy</span>
              {' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-amber-400/80 text-sm font-medium"><strong>Effective Date:</strong> January 1, 2026</p>
          </motion.div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-amber-100/80 text-sm leading-relaxed">Welcome to Sadaiyappan Elite Digital Solutions.</p>
              <p className="text-amber-100/80 text-sm leading-relaxed mt-3">At Sadaiyappan Elite Digital Solutions, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide when visiting our website or using our services.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Information We Collect</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed mb-3">We may collect the following information:</p>
              <ul className="space-y-2">
                {['Full Name', 'Email Address', 'Phone Number', 'Company Name', 'Project Requirements', 'Website Usage Data', 'Device and Browser Information'].map(item => (
                  <li key={item} className="flex items-start gap-3 text-amber-100/80 text-sm"><svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">How We Use Your Information</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed mb-3">Your information is used to:</p>
              <ul className="space-y-2">
                {['Respond to inquiries and project requests', 'Provide website development and digital services', 'Improve our website and user experience', 'Send project updates and service information', 'Maintain security and prevent unauthorized access'].map(item => (
                  <li key={item} className="flex items-start gap-3 text-amber-100/80 text-sm"><svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Data Security</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed">We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Third-Party Services</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed">We may use trusted third-party services such as analytics, hosting providers, payment processors, and communication platforms to deliver our services effectively.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Cookies</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed">Our website may use cookies to improve functionality, analyze traffic, and enhance your browsing experience.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Your Rights</h2>
              <p className="text-amber-200/70 text-sm leading-relaxed">You may request access, correction, or deletion of your personal information by contacting us directly.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-500/20">
              <h2 className="text-xl font-display font-semibold text-amber-50 mb-3">Contact Information</h2>
              <p className="text-amber-200/70 text-sm mb-2">Sadaiyappan Elite Digital Solutions</p>
              <div className="space-y-1 text-amber-200/70 text-sm">
                <p>Email: <a href="mailto:sadaiyappaneliteengineer@gmail.com" className="text-amber-400 hover:text-amber-300">sadaiyappaneliteengineer@gmail.com</a></p>
                <p>Phone: <a href="tel:+918903158727" className="text-amber-400 hover:text-amber-300">+91 8903158727</a></p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-center">
              <p className="text-amber-200/50 text-xs">By using our website, you agree to the terms outlined in this Privacy Policy.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
