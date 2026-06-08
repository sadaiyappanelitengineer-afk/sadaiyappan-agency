'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StickyConsultation() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-50 hidden md:block"
    >
      <Link
        href="/contact"
        className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium text-sm shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Free Consultation
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full" />
      </Link>
    </motion.div>
  )
}
