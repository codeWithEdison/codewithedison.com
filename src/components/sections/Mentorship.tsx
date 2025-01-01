'use client'

import { MentorshipStat, Offering, OfferingCardProps } from '@/types'
import { motion } from 'framer-motion'
import { 
  Users, 
  Star, 
  CheckCircle, 
  Calendar,
  Laptop,
  GraduationCap,
  School,
  BookOpenCheck
} from 'lucide-react'

const mentorshipStats: MentorshipStat[] = [
  { 
    icon: Users,
    count: 500,
    label: "Students & Teachers",
    description: "Empowering learners"
  },
  {
    icon: School,
    count: 5,
    label: "Partner Schools",
    description: "RTB curriculum training"
  },
  {
    icon: Star,
    count: 98,
    label: "Success Rate",
    suffix: "%",
    description: "Training satisfaction"
  }
]

const offerings: Offering[] = [
  {
    title: "1-on-1 Mentoring",
    description: "Personalized guidance tailored to your learning goals and pace",
    icon: GraduationCap,
    features: [
      "Custom learning path",
      "Code reviews",
      "Career guidance",
      "Project planning"
    ]
  },
  {
    title: "Teacher Training Program",
    description: "Empowering educators with modern technology skills and REB curriculum",
    icon: BookOpenCheck,
    features: [
      "RTB curriculum training",
      "Technology integration",
      "Modern teaching tools",
      "Hands-on workshops"
    ],
    highlight: "Currently training teachers in 5+ schools",
    isHighlighted: true
  },
  {
    title: "Group Sessions",
    description: "Interactive group learning with fellow developers",
    icon: Users,
    features: [
      "Collaborative learning",
      "Live coding sessions",
      "Project workshops",
      "Peer networking"
    ]
  },
  {
    title: "Technical Consultation",
    description: "Expert advice on your technical challenges and projects",
    icon: Laptop,
    features: [
      "Architecture review",
      "Best practices",
      "Performance optimization",
      "Security assessment"
    ]
  }
]

const OfferingCard: React.FC<OfferingCardProps> = ({ offering }) => {
  const Icon = offering.icon

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`p-6 bg-white dark:bg-dark-400 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)] ${
        offering.isHighlighted ? 'ring-2 ring-violet-500 dark:ring-violet-400' : ''
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${
          offering.isHighlighted 
            ? 'bg-violet-500 text-white'
            : 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
        }`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {offering.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {offering.description}
          </p>
          {offering.highlight && (
            <div className="bg-violet-50 dark:bg-violet-900/10 text-violet-600 dark:text-violet-400 text-sm px-4 py-2 rounded-lg mb-4">
              {offering.highlight}
            </div>
          )}
          <ul className="space-y-3">
            {offering.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-violet-600 dark:text-violet-400 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Mentorship() {
  return (
    <section id="mentorship" className="py-20 bg-gray-50 dark:bg-dark-500">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-violet-500/10 rounded-xl mb-4">
            <Users className="w-6 h-6 text-violet-600 dark:text-violet-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mentorship & Training
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Empowering developers and educators through personalized guidance and modern technology training
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mentorshipStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="text-center p-6 bg-white dark:bg-dark-400 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
                >
                  <div className="inline-flex items-center justify-center p-3 bg-violet-500/10 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    >
                      {stat.count}
                    </motion.span>
                    {stat.suffix}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {stat.label}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {stat.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <OfferingCard offering={offering} />
            </motion.div>
          ))}
        </div>

        {/* Educational Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 bg-white dark:bg-dark-400 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="p-4 bg-violet-500 rounded-xl">
                  <BookOpenCheck className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Educational Technology Leadership
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Currently providing comprehensive technology training to teachers across multiple schools, focusing on the latest RTB curriculum. This initiative aims to enhance educational delivery through modern technology integration.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-violet-50 dark:bg-violet-900/10 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800">
                    5+ Schools
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-violet-50 dark:bg-violet-900/10 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800">
                    RTB Curriculum
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-violet-50 dark:bg-violet-900/10 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800">
                    Modern Tech Integration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors"
          >
            Book a Session
            <Calendar className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}