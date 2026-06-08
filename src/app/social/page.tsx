'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import FloatingCrystalGem from '@/components/FloatingCrystalGem'

const socialPlatforms = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/sadaiyappan.dev',
    handle: '@sadaiyappan.dev',
    description: 'Follow our latest projects, behind-the-scenes content, and design inspiration.',
    color: 'from-pink-500 to-purple-500',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sadaiyappan',
    handle: 'linkedin.com/in/sadaiyappan',
    description: 'Connect professionally and follow our company updates and industry insights.',
    color: 'from-blue-500 to-blue-700',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    url: 'https://github.com/sadaiyappan',
    handle: 'github.com/sadaiyappan',
    description: 'Explore our open-source projects, code samples, and technical contributions.',
    color: 'from-gray-600 to-gray-800',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/Sadaiyappan',
    handle: 'facebook.com/Sadaiyappan',
    description: 'Like our page for updates, promotions, and community engagement.',
    color: 'from-blue-500 to-blue-600',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    url: 'https://t.me/SadaiyappanSaravanan',
    handle: '@SadaiyappanSaravanan',
    description: 'Join our Telegram channel for instant updates and direct communication.',
    color: 'from-blue-400 to-blue-600',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@IQRanker',
    handle: '@IQRanker',
    description: 'Subscribe for tech tutorials, project walkthroughs, and digital insights.',
    color: 'from-red-500 to-red-700',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Snapchat',
    url: 'https://snapchat.com/add/sadaiyappan007',
    handle: '@sadaiyappan007',
    description: 'Follow us on Snapchat for fun, casual updates and daily moments.',
    color: 'from-yellow-400 to-yellow-600',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.628c-.177.346-.546.543-.992.543-.306 0-.673.06-1.024.189-.468.172-.901.496-1.27.868-.524.528-1.007 1.142-1.608 1.142-.601 0-1.084-.614-1.608-1.142-.369-.372-.802-.696-1.27-.868-.351-.129-.718-.189-1.024-.189-.446 0-.815-.197-.992-.543-.14-.274-.082-.628.14-.88.067-.077.14-.152.217-.226.282-.272.601-.579.774-.951.169-.363.199-.73.084-1.057-.174-.497-.633-.826-1.186-.856-.318-.018-.618.076-.822.245a.48.48 0 0 1-.303.12.472.472 0 0 1-.419-.692c.353-.626 1.05-1.048 1.874-1.113.424-.034.83.042 1.172.21l.011-.615c.02-1.155.487-2.176 1.255-2.875a.47.47 0 0 1 .664.032.47.47 0 0 1-.032.663c-.573.517-.936 1.278-.956 2.136l-.011.615c.342-.168.748-.244 1.172-.21.824.065 1.521.487 1.874 1.113a.472.472 0 0 1-.419.692.48.48 0 0 1-.303-.12c-.204-.169-.504-.263-.822-.245-.553.03-1.012.359-1.186.856-.115.327-.085.694.084 1.057.173.372.492.679.774.951.077.074.15.149.217.226.222.252.28.606.14.88z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/918903158727',
    handle: '+91 89031 58727',
    description: 'Chat with us directly on WhatsApp for quick responses and support.',
    color: 'from-green-500 to-emerald-600',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 150, damping: 15 },
  },
}

export default function SocialPage() {
  return (
    <PageTransition>
      <FloatingCrystalGem />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">Connect</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-transparent">
                Follow Us
              </span>
            </h1>
            <p className="text-amber-200/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Stay connected with us across all platforms for the latest updates, projects, and insights.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {socialPlatforms.map((platform, i) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-amber-900/20 bg-gradient-to-br from-amber-500/[0.02] to-transparent hover:border-amber-500/30 transition-all duration-500 p-6"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">{platform.icon}</div>
                </div>
                <h3 className="text-lg font-display font-semibold text-amber-50 mb-1 group-hover:text-amber-300 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-amber-400/60 text-xs font-mono mb-3">{platform.handle}</p>
                <p className="text-amber-200/60 text-sm leading-relaxed">{platform.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 group-hover:via-amber-400 transition-all duration-500 translate-y-full group-hover:translate-y-0" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold hover:shadow-xl hover:shadow-amber-500/25 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send a Message
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
