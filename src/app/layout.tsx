import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'

import SmoothScrollProvider from '@/components/SmoothScrollProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sadaiyappan Elite Digital Solutions | Website Development, AI Chatbots, SEO & Digital Marketing',
  description: 'Professional website development, e-commerce stores, AI chatbots, mobile app development, SEO optimization, and digital marketing services for businesses worldwide.',
  keywords: 'web development, e-commerce, AI chatbots, mobile apps, SEO, digital marketing, business automation',
  openGraph: {
    title: 'Sadaiyappan Elite Digital Solutions',
    description: 'Transforming Businesses Through Digital Innovation',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="noise-bg" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatBot />

        </SmoothScrollProvider>
      </body>
    </html>
  )
}
