"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Home from "@/components/home"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import Background3D from "@/components/3d-background"

export default function MainPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.5, 0.5, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.95, 0.95, 1])

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      <Background3D />
      <div className="relative z-10">
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </motion.div>
  )
}

