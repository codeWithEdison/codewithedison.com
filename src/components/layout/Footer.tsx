'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone,
  MapPin,
  Heart,
  Code,
  ChevronRight
} from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '#blog' },
    { name: 'Mentorship', href: '#mentorship' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: Github,
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: Linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/yourusername',
      icon: Twitter,
      color: 'hover:text-sky-500 dark:hover:text-sky-400'
    },
    {
      name: 'Email',
      href: 'mailto:hello@codewithedison.com',
      icon: Mail,
      color: 'hover:text-violet-600 dark:hover:text-violet-400'
    }
  ],
  contact: [
    { text: 'hello@codewithedison.com', href: 'mailto:hello@codewithedison.com', icon: Mail },
    { text: '+250 788 000 000', href: 'tel:+250788000000', icon: Phone },
    { text: 'Kigali, Rwanda', href: '#', icon: MapPin }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-400">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link 
              href="#home"
              className="flex items-center space-x-2"
            >
              <motion.div 
                className="p-2 bg-violet-600 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                CodeWithEdison
              </span>
            </Link>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-md">
              Building innovative solutions and empowering developers through knowledge sharing and mentorship.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-500 ${item.color} transition-colors`}
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Navigation & Contact */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Navigation
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center text-base text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Contact
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.contact.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.text}>
                        <a
                          href={item.href}
                          className="flex items-center text-base text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                        >
                          <Icon className="h-5 w-5 mr-2" />
                          {item.text}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 text-center">
            <motion.span
              className="flex items-center justify-center gap-1"
              whileHover={{ scale: 1.02 }}
            >
              Made with <Heart className="h-4 w-4 text-red-500" /> by Edison Uwihanganye. © {new Date().getFullYear()}
            </motion.span>
          </p>
        </div>
      </div>
    </footer>
  )
}