'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import QuantumCore from '@/components/QuantumCore'
import EliteGemOrbit from '@/components/EliteGemOrbit'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <PageTransition>
      <QuantumCore />
      <EliteGemOrbit position="left" />
      <EliteGemOrbit position="right" />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950 to-black" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-md mx-4"
        >
          <div className="relative rounded-3xl bg-zinc-900/80 border border-amber-900/30 shadow-2xl shadow-amber-500/5 p-8 md:p-10 overflow-hidden backdrop-blur-xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/[0.02] via-transparent to-yellow-500/[0.02] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

            <div className="relative">
              <div className="text-center mb-8">
                <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center font-bold text-sm text-black shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                    S
                  </div>
                </Link>
                <h1 className="text-3xl font-display font-bold mb-2">
                  <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                    Welcome Back
                  </span>
                </h1>
                <p className="text-amber-200/50 text-sm">
                  Sign in to access your dashboard
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm text-amber-200/70 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-amber-900/30 text-amber-100 placeholder-amber-700/50 focus:outline-none focus:border-amber-500/50 focus:bg-black/70 focus:shadow-[0_0_25px_-5px_rgba(245,158,11,0.15)] transition-all text-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm text-amber-200/70 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-amber-900/30 text-amber-100 placeholder-amber-700/50 focus:outline-none focus:border-amber-500/50 focus:bg-black/70 focus:shadow-[0_0_25px_-5px_rgba(245,158,11,0.15)] transition-all text-sm"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-amber-200/50 cursor-pointer hover:text-amber-200/70 transition-colors">
                    <input type="checkbox" className="rounded border-amber-900/30 bg-black/50 text-amber-500 focus:ring-amber-500/30" />
                    Remember me
                  </label>
                  <a href="#" className="text-amber-400/70 hover:text-amber-300 transition-colors">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="relative w-full px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 text-black font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 hover:scale-[1.02] group"
                >
                  <span className="relative z-10 font-bold">Sign In</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>

              <p className="text-center text-amber-200/40 text-sm mt-6">
                Don&apos;t have an account?{' '}
                <a href="#" className="text-amber-400/80 hover:text-amber-300 transition-colors font-medium">
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  )
}
