"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95, zIndex: 1 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20,
          scale: isVisible ? 1 : 0.95,
          zIndex: isVisible ? 2 : 1,
        }}
        exit={{ opacity: 0, y: -20, scale: 0.95, zIndex: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
      <motion.div
        className="fixed inset-0 bg-black"
        initial={{ opacity: 1, zIndex: 3 }}
        animate={{ opacity: 0, zIndex: 0 }}
        exit={{ opacity: 1, zIndex: 3 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </>
  )
}

export default PageTransition

