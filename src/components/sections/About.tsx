'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Code, Brain, Rocket, Users, CircuitBoard,  Sparkles, Timer
} from 'lucide-react'

const experiences = [
  {
    title: "Computer Scientist",
    icon: CircuitBoard,
    description: "Strong foundation in algorithms, data structures, and software architecture",
    skills: ["Algorithm Design", "System Architecture", "Problem Solving"],
    stats: { years: 5, projects: 20 }
  },
  {
    title: "Fullstack Developer",
    icon: Code,
    description: "Building scalable web applications with modern technologies",
    skills: ["Frontend Development", "Backend Systems", "Database Design"],
    stats: { years: 6, projects: 50 }
  },
  {
    title: "AI/ML Expert",
    icon: Brain,
    description: "Implementing intelligent solutions using cutting-edge AI technologies",
    skills: ["Machine Learning", "Neural Networks", "Data Analysis"],
    stats: { years: 4, projects: 25 }
  },
  {
    title: "Trainer/Mentor",
    icon: Users,
    description: "Helping developers grow and master new technologies",
    skills: ["Technical Training", "Code Review", "Team Leadership"],
    stats: { students: 500, courses: 10 }
  }
]

const InteractiveCard = ({ children }: { children: React.ReactNode }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateX = (e.clientY - centerY) / 20
    const rotateY = -(e.clientX - centerX) / 20
    setRotate({ x: rotateX, y: rotateY })
  }

  return (
    <motion.div
      className="relative group"
      animate={{ 
        rotateX: rotate.x,
        rotateY: rotate.y,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setRotate({ x: 0, y: 0 })
      }}
    >
      {children}
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity"
        animate={{ scale: isHovered ? 1 : 0.95 }}
      />
    </motion.div>
  )
}

const StatCounter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      setCount(value)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="font-bold text-violet-600 dark:text-violet-400">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]
  })

  return (
    <section 
      ref={targetRef}
      id="about" 
      className="relative py-20 bg-gray-50 dark:bg-dark-500 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <motion.div
          className="absolute inset-0"
          style={{
            scaleY: useTransform(scrollYProgress, [0, 1], [0.5, 1]),
            opacity: useTransform(scrollYProgress, [0, 1], [0.5, 1])
          }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-violet-500/10 rounded-xl mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            </motion.div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about building innovative solutions and sharing knowledge with the developer community
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon
            return (
              <InteractiveCard key={exp.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative bg-white dark:bg-dark-400 p-6 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      className="flex-shrink-0 p-3 bg-violet-500/10 rounded-lg"
                    >
                      <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                      
                      {/* Skills with Animation */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.skills.map((skill, idx) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-sm px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-900/10 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                        {Object.entries(exp.stats).map(([key, value]) => (
                          <div key={key} className="flex items-center gap-1">
                            <Timer className="w-4 h-4" />
                            <span>{key}: </span>
                            <StatCounter value={typeof value === 'number' ? value : 0} suffix={typeof value === 'string' ? value : ''} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </InteractiveCard>
            )
          })}
        </div>

        {/* Personal Quotes Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Quote */}
            <InteractiveCard>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 bg-white dark:bg-dark-400 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)] overflow-hidden"
              >
                {/* Quote mark decoration */}
                <div className="absolute -top-4 -left-4 text-8xl font-serif text-violet-500/10">
                  &quot;
                </div>
                <div className="relative">
                  <p className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                    Niba ubumenyi butuma ubaho nawe tuma bubaho
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    &quot;If knowledge allows you to live, make it live too&quot;
                  </p>
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-xl"
                  />
                </div>
              </motion.div>
            </InteractiveCard>

            {/* Second Quote */}
            <InteractiveCard>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 bg-white dark:bg-dark-400 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)] overflow-hidden"
              >
                {/* Quote mark decoration */}
                <div className="absolute -top-4 -left-4 text-8xl font-serif text-violet-500/10">
                  &quot;
                </div>
                <div className="relative">
                  <p className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                    Knowledge is good when is shared and has value when is applied
                  </p>
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-500/10"
                    >
                      <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    </motion.div>
                    <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                      Personal Philosophy
                    </span>
                  </div>
                </div>
              </motion.div>
            </InteractiveCard>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <InteractiveCard>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto bg-white dark:bg-dark-400 p-8 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              className="inline-flex items-center justify-center p-3 bg-violet-500/10 rounded-lg mb-6"
            >
              <Rocket className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Dedicated to pushing the boundaries of technology and empowering others through knowledge sharing.
              My goal is to create innovative solutions that make a positive impact while helping fellow developers grow.
            </p>
          </motion.div>
        </InteractiveCard>
      </div>
    </section>
  )
}