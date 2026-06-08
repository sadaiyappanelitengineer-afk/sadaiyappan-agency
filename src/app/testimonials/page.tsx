'use client'

import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import OrbBackground from '@/components/OrbBackground'

const testimonials = [
  {
    name: 'Paramakalayani TET Coaching Hub',
    role: 'Educational Institution',
    text: 'Professional service, fast delivery, excellent communication, and a high-quality website that exceeded expectations. The team understood our requirements perfectly and delivered a stunning platform.',
    rating: 5, maxRating: 5,
  },
  {
    name: 'RaviKumar B',
    role: 'Restaurant Owner',
    text: 'Our online ordering system transformed the business. Orders increased by 40% in the first month. The website is beautiful and our customers love it. Highly recommended!',
    rating: 5, maxRating: 5,
  },
  {
    name: 'Marai Seelan M',
    role: 'Clinic Director',
    text: 'The AI chatbot on our clinic website handles 80% of patient inquiries. Incredible technology and seamless integration. It has significantly reduced our staff workload.',
    rating: 5, maxRating: 5,
  },
  {
    name: 'Manoj P',
    role: 'Startup Founder',
    text: 'They built our entire e-commerce platform in just 10 days. The design is stunning and our conversion rate has never been better. Truly exceptional work.',
    rating: 5, maxRating: 5,
  },
  {
    name: 'Gobi Shankar A',
    role: 'School Principal',
    text: 'The school management system they developed is fantastic. Parents love the parent portal, and our administrative efficiency has improved dramatically.',
    rating: 5, maxRating: 5,
  },
  {
    name: 'Paramashivan S',
    role: 'Real Estate Agency Owner',
    text: 'Our property listing website generates leads daily. The virtual tour integration and responsive design have given us a significant competitive advantage.',
    rating: 5, maxRating: 5,
  },
  {
    name: 'Vijay Srinath V',
    role: 'Hotel Manager',
    text: 'The booking system is seamless and our online reservations have tripled. The website perfectly captures the premium experience of our hotel.',
    rating: 5, maxRating: 5,
  },
  {
    name: 'Yashwant B',
    role: 'Coaching Center Director',
    text: 'Student enrollment increased by 60% after the new website launched. The online test platform and student dashboard are game-changers for us.',
    rating: 5, maxRating: 5,
  },
]

function StarRating({ rating, maxRating }: { rating: number; maxRating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: maxRating }, (_, i) => (
        <motion.svg
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor" viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  return (
    <PageTransition>
      <OrbBackground />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase mb-4 block">Testimonials</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">What Our</span>
              {' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Clients Say</span>
            </h1>
            <p className="text-amber-200/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Don&apos;t take our word for it. Here&apos;s what business owners and professionals have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} maxRating={testimonial.maxRating} />
                </div>
                <p className="text-amber-100/80 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-amber-50 font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <p className="text-amber-50 text-sm font-medium">{testimonial.name}</p>
                      <p className="text-amber-200/50 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
