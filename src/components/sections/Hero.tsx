'use client'

import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { useState, useRef} from 'react'
import Link from 'next/link'
import { 
  Download, 
  ExternalLink, 
  // ChevronDown,
  Code,
  Brain,
  Database,
  Cloud,
  Lock,
  Terminal
} from 'lucide-react'

const TechStack = [
  { name: "Next.js", icon: Code },
  { name: "React", icon: Code },
  { name: "TypeScript", icon: Terminal },
  { name: "Node.js", icon: Terminal },
  { name: "Python", icon: Terminal },
  { name: "AI/ML", icon: Brain },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "Blockchain", icon: Lock },
]

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    setMousePosition({ x: clientX, y: clientY })
  }

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      {/* Background base */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />
      
      {/* Interactive gradient that follows mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(124,58,237,0.06),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm13.312 0L44.143 8.485 42.728 9.9l-7.9-7.9h.828zm-9.9 0L17.272 8.485 15.858 9.9 8.786 2.828 10.2 1.414 17.272 8.486h-2.83L21.03 1.414 20.2 0h5.657z' fill='%237C3AED' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Animated gradient circles */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/2 left-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-violet-500/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 5 }}
          className="absolute -bottom-1/2 right-1/2 w-[800px] h-[800px] bg-gradient-to-l from-indigo-500/20 to-transparent rounded-full blur-3xl"
        />
      </div>
    </div>
  )
}

const FloatingCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * 10
    const rotateY = ((x - centerX) / centerX) * 10

    setRotateX(-rotateX)
    setRotateY(rotateY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const { scrollY } = useScroll()
  
  // Improved scroll transform values
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const y = useTransform(scrollY, [0, 400], [0, 100])
  const scale = useTransform(scrollY, [0, 400], [1, 0.9])

  return (
    <section 
      ref={ref} 
      id="home" 
      className="relative min-h-[100vh] flex flex-col justify-center"
      style={{ 
        paddingTop: 'var(--navbar-height, 5rem)',
        marginTop: '0px' 
      }}
    >
      <InteractiveBackground />

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 z-10 relative pt-20"
        style={{ y, opacity, scale }}
      >
        <div className="text-center relative">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <FloatingCard className="inline-block">
              <span className="relative inline-block px-4 py-2 text-sm font-medium text-violet-500 dark:text-violet-400 rounded-full bg-violet-500/5 border border-violet-500/10">
                Full Stack Developer & AI Enthusiast
              </span>
            </FloatingCard>
          </motion.div>

          {/* Main Title */}
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I&apos;m{' '}
                <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600">
                  Edison Uwihanganye 
                </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-violet-600/40 via-indigo-500/40 to-purple-600/40 blur-lg" />
                </span>
              </h1>
            </motion.div>
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {['Computer Scientist', 'Fullstack Developer', 'AI/ML Expert', 'Blockchain Dev'].map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-purple-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex justify-center gap-4 mb-12"
          >
            <FloatingCard>
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-white transition-all duration-300 hover:shadow-[0_0_30px_2px_rgba(124,58,237,0.5)]"
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.div
                  className="absolute right-0 translate-x-full transition-transform duration-300 group-hover:-translate-x-4"
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </FloatingCard>

            <FloatingCard>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium border border-violet-500/20 hover:bg-violet-500/10 transition-all duration-300"
              >
                <Download className="h-5 w-5" />
                Resume
              </motion.button>
            </FloatingCard>
          </motion.div>

          {/* Interactive Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <motion.p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Tech Stack & Expertise
            </motion.p>
            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 p-2">
              {TechStack.map((tech, index) => {
                const Icon = tech.icon
                return (
                  <FloatingCard key={tech.name}>
                    <motion.div
                      className="relative p-4 rounded-xl bg-violet-500/5 border border-violet-500/10 transition-all duration-300 hover:bg-violet-500/10"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <motion.div
                        animate={{
                          scale: hoveredIndex === index ? 1.2 : 1,
                          rotate: hoveredIndex === index ? 360 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex justify-center mb-2"
                      >
                        <Icon className="h-6 w-6 text-violet-500" />
                      </motion.div>
                      <p className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </p>
                    </motion.div>
                  </FloatingCard>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <FloatingCard>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-8 rounded-full bg-violet-500/10 flex items-center justify-center"
            >
              <ChevronDown className="h-5 w-5 text-violet-500" />
            </motion.div>
            <span className="text-sm text-violet-500">Scroll to explore</span>
          </motion.div>
        </FloatingCard>
      </motion.div> */}
    </section>
  )
}