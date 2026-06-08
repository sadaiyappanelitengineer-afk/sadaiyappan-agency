'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import PageTransition from '@/components/PageTransition'
import GlobalNetwork from '@/components/GlobalNetwork'

const socialLinks = [
  { name: 'Instagram', url: 'https://instagram.com/sadaiyappan.dev', handle: '@sadaiyappan.dev' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sadaiyappan', handle: 'linkedin.com/in/sadaiyappan' },
  { name: 'GitHub', url: 'https://github.com/sadaiyappan', handle: 'github.com/sadaiyappan' },
  { name: 'Facebook', url: 'https://facebook.com/Sadaiyappan', handle: 'Sadaiyappan' },
  { name: 'Telegram', url: 'https://t.me/SadaiyappanSaravanan', handle: 'Sadaiyappan Saravanan' },
  { name: 'Snapchat', url: 'https://snapchat.com/add/sadaiyappan007', handle: '@sadaiyappan007' },
  { name: 'YouTube', url: 'https://youtube.com/@IQRanker', handle: '@IQRanker' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.send(
        'service_qq2aniv',
        'template_ptixy2f',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        'rxC6hXdS8jiueyWQq'
      )
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch {
      alert('Failed to send. Please try again.')
    }
    setSending(false)
  }

  return (
    <PageTransition>
      <GlobalNetwork />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-amber-500/20 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Let&apos;s</span>
              {' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-400 bg-clip-text text-transparent">Talk Business</span>
            </h1>
            <p className="text-amber-200/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-amber-100/80 mb-2">Your Name *</label>
                    <input id="name" name="name" type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-amber-50 placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all text-sm" placeholder="Sadaiyappan" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-amber-100/80 mb-2">Your Email *</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-amber-50 placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all text-sm" placeholder="sadaiyappan@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-amber-100/80 mb-2">Phone Number</label>
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-amber-50 placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all text-sm" placeholder="8903158727" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm text-amber-100/80 mb-2">Service Interested In</label>
                  <select id="service" name="service" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-amber-100/80 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all text-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Development</option>
                    <option value="ecommerce">E-Commerce Store</option>
                    <option value="chatbot">AI Chatbot</option>
                    <option value="mobile">Mobile App</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-amber-100/80 mb-2">Your Message *</label>
                  <textarea id="message" name="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-amber-50 placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-white/[0.05] transition-all text-sm resize-none"
                    placeholder="Tell us about your project..." />
                </div>
                <button type="submit"
                  className="w-full px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-500 text-amber-50 font-semibold hover:shadow-xl hover:shadow-amber-500/25 hover:scale-[1.02] transition-all duration-300"
                >
                  {sending ? 'Sending...' : submitted ? 'Message Sent! ✓' : 'Send Message'}
                </button>
                {submitted && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-emerald-400 text-sm text-center">
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </motion.p>
                )}
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="font-display font-semibold text-amber-50 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-amber-200/50 text-xs mb-1">Founder</p>
                    <p className="text-amber-50 text-sm">Sadaiyappan S</p>
                    <p className="text-amber-200/70 text-xs">Founder & Developer</p>
                  </div>
                  <div>
                    <p className="text-amber-200/50 text-xs mb-1">Phone</p>
                    <a href="tel:+918903158727" className="text-amber-400 hover:text-amber-300 text-sm transition-colors">+91 89031 58727</a>
                  </div>
                  <div>
                    <p className="text-amber-200/50 text-xs mb-1">Email</p>
                    <a href="mailto:sadaiyappaneliteengineer@gmail.com" className="text-amber-400 hover:text-amber-300 text-sm transition-colors break-all">sadaiyappaneliteengineer@gmail.com</a>
                  </div>
                  <div>
                    <p className="text-amber-200/50 text-xs mb-1">Company</p>
                    <p className="text-amber-50 text-sm">Sadaiyappan Elite Digital Solutions</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="font-display font-semibold text-amber-50 mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-500/20 flex items-center justify-center text-amber-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d={social.name === 'Instagram' ? 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' : social.name === 'LinkedIn' ? 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' : social.name === 'GitHub' ? 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' : social.name === 'Facebook' ? 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' : 'M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'} />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-amber-50 text-xs font-medium">{social.name}</p>
                        <p className="text-amber-200/50 text-xs truncate">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-500/10 border border-amber-500/10">
                <h3 className="font-display font-semibold text-amber-50 mb-2">Prefer WhatsApp?</h3>
                <p className="text-amber-200/70 text-sm mb-4">Chat with us directly on WhatsApp for a quick response.</p>
                <a href="https://wa.me/918903158727" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-amber-50 font-medium text-sm hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
