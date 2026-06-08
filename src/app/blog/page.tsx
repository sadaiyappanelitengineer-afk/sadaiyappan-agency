'use client'

import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import GridBackground from '@/components/GridBackground'

const posts = [
  {
    title: 'Why Every Business Needs a Professional Website in 2026',
    excerpt: 'In today\'s digital-first world, a professional website is no longer optional. Discover why your business needs a strong online presence to stay competitive.',
    date: 'June 1, 2026', category: 'Web Development', slug: 'why-every-business-needs-a-professional-website',
    gradient: 'from-indigo-500 to-purple-500', readTime: '5 min read',
  },
  {
    title: 'The Rise of AI Chatbots in Customer Service',
    excerpt: 'How artificial intelligence is transforming customer support and why businesses of all sizes are adopting chatbot technology.',
    date: 'May 28, 2026', category: 'AI & Technology', slug: 'rise-of-ai-chatbots-in-customer-service',
    gradient: 'from-emerald-500 to-teal-500', readTime: '4 min read',
  },
  {
    title: 'E-Commerce Trends to Watch in 2026',
    excerpt: 'Stay ahead of the competition with these game-changing e-commerce trends that are shaping the future of online shopping.',
    date: 'May 20, 2026', category: 'E-Commerce', slug: 'ecommerce-trends-2026',
    gradient: 'from-cyan-500 to-blue-500', readTime: '6 min read',
  },
  {
    title: 'SEO Strategies That Actually Work in 2026',
    excerpt: 'Cut through the noise with proven SEO strategies that drive real results. Learn what\'s working now and what\'s not.',
    date: 'May 15, 2026', category: 'SEO', slug: 'seo-strategies-that-actually-work',
    gradient: 'from-pink-500 to-rose-500', readTime: '5 min read',
  },
  {
    title: 'Mobile App vs. Mobile Website: What\'s Right for Your Business?',
    excerpt: 'Choosing between a mobile app and a mobile-optimized website depends on your business goals. We break down the pros and cons.',
    date: 'May 10, 2026', category: 'Mobile Development', slug: 'mobile-app-vs-website',
    gradient: 'from-orange-500 to-red-500', readTime: '4 min read',
  },
  {
    title: 'Digital Marketing on a Budget: Tips for Small Businesses',
    excerpt: 'You don\'t need a massive budget to make an impact online. Discover cost-effective digital marketing strategies for small businesses.',
    date: 'May 5, 2026', category: 'Digital Marketing', slug: 'digital-marketing-on-a-budget',
    gradient: 'from-yellow-500 to-amber-500', readTime: '5 min read',
  },
]

export default function BlogPage() {
  return (
    <PageTransition>
      <GridBackground />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4 block">Blog</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Our</span>
              {' '}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Insights, tips, and trends from our team of digital experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500"
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-medium bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}>
                      {post.category}
                    </span>
                    <span className="text-gray-600 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-display font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-indigo-400 text-sm font-medium group-hover:gap-2 transition-all">
                      Read More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
