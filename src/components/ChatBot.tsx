'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface QA {
  q: string
  a: string
}

const qaList: QA[] = [
  { q: 'website web site sites development', a: '🌐 We build professional, fast, and responsive websites tailored to your business needs.' },
  { q: 'pricing price cost packages affordable cheap', a: '💰 Our website packages start from ₹3,999. Contact us for a customized quote.' },
  { q: 'portfolio previous work past projects examples', a: '💼 Explore our portfolio to see our latest projects and client success stories.' },
  { q: 'contact phone call email reach', a: '📞 Call us at +91 8903158727 or email sadaiyappaneliteengineer@gmail.com.' },
  { q: 'seo search engine optimization rankings', a: '📈 Improve your Google rankings and online visibility with our SEO services.' },
  { q: 'marketing digital marketing social media', a: '📊 Grow your business with our digital marketing solutions.' },
  { q: 'chatbot ai chatbot chat bot', a: '🤖 We create AI-powered chatbots to automate customer support and lead generation.' },
  { q: 'ecommerce e-commerce online store shop', a: '🛒 Build a powerful online store with payment integration and inventory management.' },
  { q: 'mobile app android ios application', a: '📱 We develop Android, iOS, and cross-platform mobile applications.' },
  { q: 'business grow growth digital presence', a: '🚀 We help businesses establish a strong digital presence and grow online.' },
  { q: 'startup startups affordable scalable', a: '💡 We provide affordable and scalable solutions for startups.' },
  { q: 'support maintenance after delivery', a: '🛠️ We offer dedicated support and maintenance after project delivery.' },
  { q: 'hosting host deploy deployment', a: '☁️ We can help you with secure website hosting and deployment.' },
  { q: 'domain registration domain name', a: '🌍 Need a domain? We can assist with domain registration and setup.' },
  { q: 'booking appointment booking system reservations', a: '📅 We can integrate appointment and booking systems into your website.' },
  { q: 'redesign redesign transform modernize', a: '🎨 We can transform your old website into a modern and professional platform.' },
  { q: 'ai artificial intelligence automate automation', a: '🧠 Leverage AI solutions to automate and scale your business operations.' },
  { q: 'quote quotation proposal personalized', a: '📝 Share your requirements and receive a personalized project quote.' },
  { q: 'consultation free consultation discuss', a: '☕ Book a free consultation to discuss your project goals.' },
  { q: 'order start begin ready project', a: '🎯 Ready to start? Share your requirements and let\'s build something amazing together!' },
]

function findBestMatch(input: string): string {
  const lower = input.toLowerCase().trim()
  if (!lower) return ''

  let bestScore = 0
  let bestAnswer = ''

  for (const qa of qaList) {
    const keywords = qa.q.split(' ')
    let matchCount = 0

    for (const kw of keywords) {
      if (kw.length <= 2) continue
      if (lower.includes(kw)) matchCount++
    }

    if (matchCount === 0) continue

    const totalSignificant = keywords.filter(k => k.length > 2).length
    const score = matchCount / totalSignificant

    if (score > bestScore) {
      bestScore = score
      bestAnswer = qa.a
    }
  }

  if (bestScore > 0) return bestAnswer

  if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) {
    return '👋 Welcome! I\'m the Sadaiyappan assistant. Ask me about website, pricing, portfolio, contact, SEO, marketing, chatbot, ecommerce, mobile, business, startup, support, hosting, domain, booking, redesign, AI, quote, consultation, or order!'
  }
  if (lower.includes('bye') || lower.includes('goodbye')) {
    return '👋 Thank you for visiting Sadaiyappan Elite Digital Solutions. Have a wonderful day!'
  }
  if (lower.includes('thank')) {
    return '🩷 You\'re very welcome! Feel free to ask me anything about our services.'
  }

  return ''
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    { role: 'bot', text: '👋 Welcome! Ask me about website, pricing, portfolio, contact, SEO, marketing, chatbot, ecommerce, mobile, business, startup, support, hosting, domain, booking, redesign, AI, quote, consultation, or order!' },
  ])
  const [input, setInput] = useState('')
  const [visible, setVisible] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  const handleSend = () => {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, { role: 'user', text }])
    setInput('')
    setTimeout(() => {
      const answer = findBestMatch(text)
      if (answer) {
        setMessages(prev => [...prev, { role: 'bot', text: answer }])
      } else {
        setMessages(prev => [...prev, { role: 'bot', text: '🤔 I\'m not sure about that. Please contact us at +91 8903158727 or email sadaiyappaneliteengineer@gmail.com for more details!' }])
      }
    }, 400)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-96 rounded-2xl border border-amber-500/20 bg-[#0a0a0a] shadow-2xl shadow-amber-500/10 flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-amber-500/10 to-yellow-500/5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-amber-50 text-sm font-medium">Sadaiyappan Assistant</span>
                </div>
                <button onClick={() => setOpen(false)} className="text-amber-400/60 hover:text-amber-300 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-50'
                        : 'bg-white/5 text-amber-100/80 border border-white/5'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                <div ref={endRef} />
              </div>

              <div className="p-3 border-t border-white/5">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-amber-50 placeholder-amber-300/30 outline-none focus:border-amber-500/40 transition-colors"
                  />
                  <button
                    onClick={handleSend}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center shrink-0 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                  >
                    <svg className="w-4 h-4 text-amber-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 0l-7 7m7-7l7 7" /></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              boxShadow: [
                '0 0 15px rgba(245,158,11,0.2)',
                '0 0 40px rgba(245,158,11,0.6)',
                '0 0 15px rgba(245,158,11,0.2)',
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(!open)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
            aria-label="Open chat"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {open ? (
              <svg className="w-6 h-6 text-amber-50 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <span className="relative z-10 text-2xl">🤖</span>
            )}
          </motion.button>
        </>
      )}
    </AnimatePresence>
  )
}
