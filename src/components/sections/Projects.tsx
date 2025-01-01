'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Github, 
  ExternalLink, 
  Brain,
  Building,
  Blocks,
  Vote,
  Wallet,
  TicketIcon,
  Database,
  FileStack,
  Music,
  Home,
  HeartPulse,
  ServerIcon
} from 'lucide-react'
import { Category, Project } from '@/types'

const projects:Project[] = [
  {
    title: "GENRE-RECOMMENDATION-API",
    description: "Machine learning-based music genre recommendation system with RESTful API integration using Express.",
    image: "/api/placeholder/600/400",
    icon: Music,
    tags: ["Machine Learning", "API", "Express", "Music"],
    technologies: ["Python", "Express.js", "ML Libraries", "REST API"],
    links: {
      github: "https://github.com/yourusername/GENRE-RECOMMANDATION-API",
    },
    category: "ai"
  },
  {
    title: "UR-HG-STOCK",
    description: "Comprehensive stock management system developed for UR HOLDING Ltd, streamlining inventory processes.",
    image: "/api/placeholder/600/400",
    icon: Database,
    tags: ["Stock Management", "Enterprise", "System"],
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      github: "https://github.com/yourusername/UR-HG-STOCK",
    },
    category: "web"
  },
  {
    title: "House Price Prediction Model",
    description: "Advanced machine learning model for predicting house prices, deployed as an API for real-time predictions.",
    image: "/api/placeholder/600/400",
    icon: Home,
    tags: ["Machine Learning", "API", "Real Estate"],
    technologies: ["Python", "Scikit-learn", "FastAPI", "ML Models"],
    links: {
      github: "https://github.com/yourusername/house-price-prediction-model",
    },
    category: "ai"
  },
  {
    title: "UR-ELECTIFY",
    description: "Modern and secure electronic voting system designed for University of Rwanda student elections.",
    image: "/api/placeholder/600/400",
    icon: Vote,
    tags: ["E-Voting", "Security", "University"],
    technologies: ["React", "Node.js", "Blockchain", "Security"],
    links: {
      github: "https://github.com/yourusername/UR-ELECTIFY",
    },
    category: "web"
  },
  {
    title: "HIV-TB Co-Infection Dashboard",
    description: "Interactive dashboard for monitoring HIV-TB co-infection using mathematical models and ML.",
    image: "/api/placeholder/600/400",
    icon: HeartPulse,
    tags: ["Healthcare", "ML", "Dashboard"],
    technologies: ["MATLAB", "React", "Node.js", "ML"],
    links: {
      github: "https://github.com/yourusername/hiv-tb-dashboard",
    },
    category: "ai",
    highlight: true
  },
  {
    title: "CareSphere DApp",
    description: "Blockchain-based healthcare management application using smart contracts for secure health records.",
    image: "/api/placeholder/600/400",
    icon: HeartPulse,
    tags: ["Blockchain", "Healthcare", "DApp"],
    technologies: ["Solidity", "React", "Web3.js", "Ethereum"],
    links: {
      github: "https://github.com/yourusername/careSphere-Dapp",
    },
    category: "blockchain",
    highlight: true
  },
  {
    title: "Balance DApp",
    description: "Decentralized application for checking wallet balances and making transactions on blockchain.",
    image: "/api/placeholder/600/400",
    icon: Wallet,
    tags: ["Blockchain", "DApp", "Wallet"],
    technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
    links: {
      github: "https://github.com/yourusername/Balance-Dapp",
    },
    category: "blockchain"
  },
  {
    title: "X-Ticket",
    description: "Modern ticketing platform providing seamless event ticket management and distribution.",
    image: "/api/placeholder/600/400",
    icon: TicketIcon,
    tags: ["Ticketing", "Events", "Web"],
    technologies: ["React", "Node.js", "PostgreSQL", "API"],
    links: {
      github: "https://github.com/yourusername/x-ticket",
    },
    category: "web"
  },
  {
    title: "UR-AMS",
    description: "Asset management system for University of Rwanda, developed under Binary Hub.",
    image: "/api/placeholder/600/400",
    icon: Building,
    tags: ["Asset Management", "University", "System"],
    technologies: ["React", "Node.js", "SQL", "API"],
    links: {
      github: "https://github.com/yourusername/UR-AMS",
    },
    category: "web"
  },
  {
    title: "IRIMS Portal v2",
    description: "Integrated regulatory management system for Rwanda Food and Drug Authority.",
    image: "/api/placeholder/600/400",
    icon: FileStack,
    tags: ["Regulatory", "Management", "Government"],
    technologies: ["React", "Node.js", "PostgreSQL", "API"],
    links: {
      github: "https://github.com/yourusername/irims-portal-v2",
    },
    category: "web",
    highlight: true
  }
]

const categories: Category[] = [
  { id: 'all', label: 'All Projects', icon: Blocks },
  { id: 'web', label: 'Web Apps', icon: ServerIcon },
  { id: 'ai', label: 'AI/ML', icon: Brain },
  { id: 'blockchain', label: 'Blockchain', icon: Blocks },
]
interface ProjectCardProps {
    project: Project;
  }

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const Icon = project.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`group relative bg-white dark:bg-dark-400 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.3)] overflow-hidden ${
        project.highlight ? 'ring-2 ring-violet-500 dark:ring-violet-400' : ''
      }`}
    >
      {/* Project Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${
              project.highlight 
                ? 'bg-violet-500 text-white'
                : 'bg-violet-500/10 text-violet-600 dark:text-violet-400'
            }`}>
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
            )}
            {project.links.live && (
              <a 
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-violet-50 dark:bg-violet-900/10 text-violet-600 dark:text-violet-400 border border-violet-100 dark:border-violet-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Technologies */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap gap-3">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  )

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-500">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of impactful projects showcasing expertise in web development, AI/ML, and blockchain technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-violet-600 text-white'
                    : 'bg-white dark:bg-dark-400 text-gray-600 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-dark-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}