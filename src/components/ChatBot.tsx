'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface QA {
  q: string
  a: string
}

const qaList: QA[] = [
  { q: 'name who are you introduce yourself about you', a: 'My name is Sadaiyappan S. I am a Computer Science and Engineering student passionate about software development, artificial intelligence, and innovative technology solutions.' },
  { q: 'about tell me about yourself self introduction introduction', a: 'I am an aspiring software engineer with interests in Full Stack Development, AI, Cloud Computing, and Entrepreneurship. I enjoy building real-world applications and continuously learning new technologies.' },
  { q: 'profession occupation career current role', a: 'I am currently a Computer Science and Engineering student.' },
  { q: 'location where are you from hometown place', a: 'I am from Tamil Nadu, India.' },
  { q: 'career goal future goal ambition objective', a: 'My goal is to become a successful software engineer and entrepreneur who creates impactful technology solutions.' },
  { q: 'motivation what motivates you inspiration', a: 'Learning new technologies and solving real-world problems motivate me.' },
  { q: 'hobbies interests free time activities', a: 'Coding, exploring AI tools, reading technology articles, and building projects.' },
  { q: 'strengths strong points best qualities', a: 'Problem solving, adaptability, teamwork, leadership, and communication.' },
  { q: 'education degree qualification', a: 'I am pursuing B.E. Computer Science and Engineering.' },
  { q: 'college institute university', a: 'I study at Ramco Institute of Technology, Rajapalayam, affiliated with Anna University.' },
  { q: 'graduation pass out year completion year', a: 'My expected graduation year is 2029.' },
  { q: 'cgpa academic score', a: 'My current CGPA is approximately 6.5.' },
  { q: 'hsc higher secondary 12th mark', a: 'I scored 85% in Higher Secondary Certificate examinations.' },
  { q: 'sslc 10th mark school score', a: 'I scored 90.8% in SSLC examinations.' },
  { q: 'languages spoken languages', a: 'I can communicate in Tamil and English.' },
  { q: 'programming languages coding languages technical skills', a: 'I have experience with Python, C, and C++.' },
  { q: 'python python skill', a: 'Python is my strongest programming language and I use it for problem solving and application development.' },
  { q: 'web development frontend backend', a: 'I have experience building modern web applications using HTML, CSS, JavaScript, React, Next.js, Node.js, and Express.js.' },
  { q: 'react react js', a: 'I use React to build modern and interactive user interfaces.' },
  { q: 'nextjs next js', a: 'I use Next.js for scalable and high-performance React applications.' },
  { q: 'nodejs node js', a: 'I use Node.js for backend development and server-side applications.' },
  { q: 'github git repositories', a: 'I use GitHub for version control, collaboration, and project management.' },
  { q: 'tools software development tools', a: 'I use VS Code, GitHub, Figma, Netlify, and Vercel.' },
  { q: 'cloud deployment hosting', a: 'I deploy applications using Netlify and Vercel.' },
  { q: 'projects portfolio projects work', a: 'Some of my major projects include a Freelancing Website and a Coaching Website.' },
  { q: 'freelancing website freelance project', a: 'My Freelancing Website is a platform that offers portfolio websites, business websites, personal websites, e-commerce websites, and landing pages.' },
  { q: 'coaching website tet website', a: 'My Coaching Website supports TET preparation through study materials, question papers, and online learning resources.' },
  { q: 'supabase database', a: 'Supabase is the backend platform I use for database management and authentication.' },
  { q: 'emailjs email service', a: 'EmailJS allows me to send automated emails without managing a separate backend mail server.' },
  { q: 'ai artificial intelligence', a: 'Artificial Intelligence is one of my strongest areas of interest because it enables intelligent problem solving and automation.' },
  { q: 'ai tools chatgpt claude opencode ai', a: 'I use ChatGPT, Claude, OpenCode AI, and other AI tools for development, learning, and productivity.' },
  { q: 'machine learning ml', a: 'Machine Learning enables systems to learn patterns from data and improve automatically.' },
  { q: 'soft skills interpersonal skills', a: 'My soft skills include communication, leadership, teamwork, adaptability, and time management.' },
  { q: 'internship internships', a: 'I am actively seeking internship opportunities in Software Development, Web Development, and AI-related roles.' },
  { q: 'hire why hire you', a: 'I am eager to learn, adaptable, hardworking, and passionate about technology. I bring enthusiasm and a strong willingness to grow.' },
  { q: 'freelance services services offered', a: 'I provide website design and development services including portfolio websites, business websites, and custom web solutions.' },
  { q: 'contact contact details reach you', a: 'You can contact me through email, LinkedIn, GitHub, WhatsApp, or the contact form available on this website.' },
  { q: 'email mail address', a: 'sadaiyappaneliteengineer@gmail.com' },
  { q: 'linkedin linkedin profile', a: 'linkedin.com/in/sadaiyappan' },
  { q: 'github profile github account', a: 'github.com/sadaiyappan' },
  { q: 'resume cv download resume', a: 'You can download my latest resume using the Download Resume button on this website.' },
  { q: 'certificates certifications', a: 'You can view my certificates and achievements in the Certifications section.' },
  { q: 'achievements awards', a: 'Visit the Achievements section to explore my certifications, awards, workshops, and accomplishments.' },
  { q: 'future plans long term goals', a: 'My long-term goal is to become a successful software engineer and entrepreneur while building impactful technology solutions.' },
  { q: 'founder', a: 'Sadaiyappan S is the Founder & Developer of Sadaiyappan Elite Digital Solutions.' },
  { q: 'company', a: 'Sadaiyappan Elite Digital Solutions provides premium digital solutions for businesses worldwide.' },
  { q: 'services', a: 'We offer Website Development, E-Commerce, AI Chatbots, Mobile Apps, SEO, and Digital Marketing.' },
  { q: 'website web site sites development', a: 'We build fast, modern, and responsive websites for all types of businesses.' },
  { q: 'ecommerce e-commerce online store shop', a: 'We create powerful online stores with secure payment integration.' },
  { q: 'chatbot ai chatbot chat bot', a: 'We develop AI-powered chatbots for customer support and lead generation.' },
  { q: 'mobile app android ios application', a: 'We develop Android, iOS, and cross-platform mobile applications.' },
  { q: 'seo search engine optimization rankings', a: 'We help improve your website visibility on Google and other search engines.' },
  { q: 'marketing digital marketing social media', a: 'Our digital marketing services help attract more customers and generate leads.' },
  { q: 'portfolio previous work past projects examples', a: 'Explore our portfolio to see our latest projects and success stories.' },
  { q: 'pricing price cost packages affordable cheap', a: 'Website packages start from 3,999. Contact us for a customized quote.' },
  { q: 'cost', a: 'Project costs depend on your requirements and desired features.' },
  { q: 'quote quotation proposal personalized', a: 'Share your requirements and receive a personalized quotation.' },
  { q: 'order start begin ready project', a: 'Ready to start? Tell us about your project and well guide you through the process.' },
  { q: 'consultation free consultation discuss', a: 'We offer free consultations to discuss your business needs.' },
  { q: 'support maintenance after delivery', a: 'We provide ongoing technical support and maintenance services.' },
  { q: 'hosting host deploy deployment', a: 'We can help with website hosting, deployment, and management.' },
  { q: 'domain registration domain name', a: 'We assist with domain registration and setup.' },
  { q: 'security', a: 'Security is a top priority in every project we build.' },
  { q: 'responsive', a: 'All our websites work perfectly on mobile, tablet, and desktop devices.' },
  { q: 'startup startups affordable scalable', a: 'We help startups establish a strong online presence and scale digitally.' },
  { q: 'restaurant', a: 'We create restaurant websites with menus, reservations, and ordering systems.' },
  { q: 'hospital', a: 'We develop professional healthcare and clinic websites.' },
  { q: 'school', a: 'We build websites and portals for schools, colleges, and educational institutions.' },
  { q: 'realestate', a: 'We create real estate websites with property listings and lead generation features.' },
  { q: 'salon', a: 'We build salon websites with appointment booking and service showcases.' },
  { q: 'gym', a: 'We create fitness websites with membership and booking features.' },
  { q: 'ai artificial intelligence automate automation', a: 'We integrate modern AI solutions to automate and enhance business operations.' },
  { q: 'automation', a: 'We automate repetitive business tasks to save time and improve efficiency.' },
  { q: 'software', a: 'We develop custom software tailored to your business requirements.' },
  { q: 'dashboard', a: 'We create admin dashboards for easy management of your business data.' },
  { q: 'technologies', a: 'We use React, Next.js, Node.js, Python, MongoDB, and modern cloud technologies.' },
  { q: 'react react js', a: 'We build modern and interactive user interfaces using React.' },
  { q: 'nextjs next js', a: 'Next.js enables us to create fast and SEO-friendly websites.' },
  { q: 'python', a: 'Python powers many of our automation and software solutions.' },
  { q: 'cloud', a: 'We deploy scalable applications on modern cloud platforms.' },
  { q: 'reviews', a: 'Client satisfaction is our priority, and we strive to exceed expectations.' },
  { q: 'process', a: 'Consultation Planning Design Development Testing Launch.' },
  { q: 'timeline', a: 'Many websites can be delivered in as little as 5 days.' },
  { q: 'quality', a: 'We focus on premium quality, performance, and user experience.' },
  { q: 'trust', a: 'Transparency, reliability, and long-term relationships are at the core of our business.' },
  { q: 'contact phone call email reach', a: 'Call us at +91 8903158727 or email sadaiyappaneliteengineer@gmail.com.' },
  { q: 'email mail address', a: 'sadaiyappaneliteengineer@gmail.com' },
  { q: 'phone', a: '+91 8903158727' },
  { q: 'instagram', a: 'Follow us at @sadaiyappan.dev' },
  { q: 'linkedin linkedin profile', a: 'Connect with us on LinkedIn for professional updates.' },
  { q: 'github', a: 'Explore our development projects on GitHub.' },
  { q: 'future', a: 'Our goal is to help businesses worldwide succeed through digital innovation.' },
  { q: 'whyyou', a: 'We combine premium design, modern technology, fast delivery, and dedicated support.' },
  { q: 'start', a: 'Tell us about your idea and lets build something amazing together!' },
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
    return '👋 Welcome! I\'m the Sadaiyappan assistant. Ask me about my background, skills, projects, education, services, or anything else!'
  }
  if (lower.includes('bye') || lower.includes('goodbye')) {
    return '👋 Thank you for visiting Sadaiyappan Elite Digital Solutions. Have a wonderful day!'
  }
  if (lower.includes('thank')) {
    return '🩷 You\'re very welcome! Feel free to ask me anything.'
  }

  return ''
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    { role: 'bot', text: '👋 Welcome! Ask me about my background, skills, projects, education, services, or anything!' },
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
