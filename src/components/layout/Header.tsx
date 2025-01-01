'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Code, Command, Sparkles, Brain, Blocks, Users, MessageCircle } from 'lucide-react'

const NavLinks = [
  { href: '#home', label: 'Home', icon: Command },
  { href: '#about', label: 'About', icon: Brain },
  { href: '#projects', label: 'Projects', icon: Blocks },
  // { href: '#blog', label: 'Blog', icon: Newspaper },
  { href: '#mentorship', label: 'Mentorship', icon: Users },
  { href: '#contact', label: 'Contact', icon: MessageCircle },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const sections = NavLinks.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY

      setScrolled(scrollPosition > 50)

      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop - 100
          const offsetBottom = offsetTop + element.offsetHeight
          return scrollPosition >= offsetTop && scrollPosition < offsetBottom
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-[#0c1220]/80 via-[#0f172a]/80 to-[#0c1220]/80 dark:from-[#0f172a]/90 dark:via-[#1e293b]/90 dark:to-[#0f172a]/90 backdrop-blur-md shadow-lg shadow-indigo-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Animated Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Link href="/" className="flex items-center space-x-3">
              <motion.div className="relative flex h-10 w-10">
                <motion.span 
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500"
                />
                <span className="relative flex rounded-xl h-10 w-10 bg-black items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </span>
              </motion.div>
              <div className="flex items-center">
                <motion.span 
                  className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500"
                  animate={isHovered ? {
                    backgroundPosition: ["0%", "100%"],
                  } : {}}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  CodeWithEdison
                </motion.span>
                <motion.div
                  animate={{ rotate: isHovered ? [0, 15, -15, 0] : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="h-5 w-5 ml-2 text-yellow-400" />
                </motion.div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            {NavLinks.map(({ href, label, icon: Icon }) => (
              <motion.div
                key={href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group flex items-center gap-2 
                    ${activeSection === href.substring(1) 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'}`}
                >
                  {/* Background decoration */}
                  <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    activeSection === href.substring(1)
                      ? 'opacity-100 bg-gradient-to-r from-violet-600/80 via-indigo-500/80 to-purple-500/80 backdrop-blur-sm'
                      : 'opacity-0 group-hover:opacity-100 bg-gradient-to-r from-violet-600/20 via-indigo-500/20 to-purple-500/20'
                  }`}>
                    {/* Animated border */}
                    <div className="absolute inset-px rounded-lg bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 animate-border-flow" />
                  </div>

                  {/* Icon wrapper with glow effect */}
                  <motion.div
                    className={`relative z-10 rounded-md p-1 ${
                      activeSection === href.substring(1)
                        ? 'text-white'
                        : 'text-gray-300 group-hover:text-white'
                    }`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-4 w-4" />
                    {activeSection === href.substring(1) && (
                      <div className="absolute inset-0 blur-sm bg-white/20 animate-pulse rounded-md" />
                    )}
                  </motion.div>

                  {/* Label with shine effect */}
                  <span className="relative z-10 inline-block">
                    {label}
                    <div className={`absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/20 to-transparent
                      group-hover:translate-x-full -skew-x-12 transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100`}
                      style={{ width: '200%', left: '-100%' }}
                    />
                  </span>

                  {/* Hover dots decoration */}
                  <div className="absolute -bottom-1 left-0 right-0 h-px">
                    <div className={`h-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300
                      ${activeSection === href.substring(1) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    >
                      <div className="absolute -top-1 left-0 w-1 h-1 rounded-full bg-violet-500 
                        transition-all duration-300 group-hover:animate-dot-flow" />
                      <div className="absolute -top-1 right-0 w-1 h-1 rounded-full bg-purple-500 
                        transition-all duration-300 group-hover:animate-dot-flow-reverse" />
                    </div>
                  </div>

                </Link>
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-purple-500/10 hover:from-violet-500/20 hover:via-indigo-500/20 hover:to-purple-500/20 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-indigo-400" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden p-2 rounded-xl bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-purple-500/10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-300" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-gradient-to-r from-[#0c1220] via-[#0f172a] to-[#0c1220] rounded-xl shadow-lg shadow-indigo-500/10 mb-4"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {NavLinks.map(({ href, label, icon: Icon }) => (
                  <motion.div
                    key={href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-base font-medium transition-all ${
                        activeSection === href.substring(1)
                          ? 'bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500 text-white'
                          : 'text-gray-300 hover:bg-gradient-to-r hover:from-violet-600/10 hover:via-indigo-500/10 hover:to-purple-500/10'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{label}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  onClick={() => {
                    setTheme(theme === 'dark' ? 'light' : 'dark')
                    setIsOpen(false)
                  }}
                  className="w-full flex items-center space-x-2 px-3 py-2 rounded-xl text-base font-medium text-gray-300 hover:bg-gradient-to-r hover:from-violet-600/10 hover:via-indigo-500/10 hover:to-purple-500/10"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun className="h-5 w-5 text-yellow-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5 text-indigo-400" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}