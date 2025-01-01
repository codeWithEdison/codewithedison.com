import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

export const Favicon = () => {
  return (
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
  )
}