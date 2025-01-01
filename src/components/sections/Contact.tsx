/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Phone,
  MapPin,
  Loader2
} from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/yourusername',
    color: 'hover:text-gray-900 dark:hover:text-gray-100'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/yourusername',
    color: 'hover:text-blue-600 dark:hover:text-blue-400'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/yourusername',
    color: 'hover:text-sky-500 dark:hover:text-sky-400'
  }
]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@codewithedison.com',
    link: 'mailto:hello@codewithedison.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+250 788 000 000',
    link: 'tel:+250788000000'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kigali, Rwanda'
  }
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-500">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-violet-500/10 rounded-xl mb-4">
            <Mail className="w-6 h-6 text-violet-600 dark:text-violet-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-white dark:bg-dark-400 p-6 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-400 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-shadow"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-400 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-400 text-gray-900 dark:text-white focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 focus:border-transparent transition-shadow resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-colors
                    ${submitStatus === 'error' 
                      ? 'bg-red-500 hover:bg-red-600' 
                      : submitStatus === 'success'
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-violet-600 hover:bg-violet-700'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : submitStatus === 'success' ? (
                    'Message Sent!'
                  ) : submitStatus === 'error' ? (
                    'Error Sending Message'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              {/* Contact Cards */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-dark-400 p-6 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-violet-500/10 rounded-lg">
                        <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {info.label}
                        </h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-violet-600 dark:text-violet-400 hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Social Links */}
              <div className="bg-white dark:bg-dark-400 p-6 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                  Connect with me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 bg-gray-100 dark:bg-dark-300 rounded-lg transition-colors ${social.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}