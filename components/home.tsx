"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-6xl md:text-7xl font-black mb-6 tracking-tight text-gradient"
          variants={itemVariants}
        >
          JOSHUA
        </motion.h1>
        <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400" variants={itemVariants}>
          Website Vibe Architect 🚀
        </motion.h2>
        <motion.div className="flex flex-wrap justify-center gap-3 mb-6" variants={itemVariants}>
          {["WEB DESIGN", "UI/UX DESIGN", "BRANDING"].map((skill, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
        <motion.p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8" variants={itemVariants}>
          Leveling up small biz online, one killer website at a time. I help startups ditch the basic and go bold with
          web design that actually works. Quality vibes, without breaking the bank. Let's build something awesome
          together! ✨
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="#projects">
            <Button
              variant="default"
              className="rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

