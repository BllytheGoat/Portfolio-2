"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Mail, Phone } from "lucide-react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/submit-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })
      if (response.ok) {
        setSubmitStatus("Message submitted successfully!")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setSubmitStatus("Failed to submit message. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again.")
    }
  }

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-black mb-10 tracking-tight text-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          GET IN TOUCH
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="glassmorphism rounded-xl p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gradient">Contact Information</h2>
            <div className="space-y-4">
              <motion.div
                className="flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="w-6 h-6 mr-2 text-yellow-400" />
                <a
                  href="mailto:okechukwuokwuchukwu46@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  okechukwuokwuchukwu46@gmail.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="w-6 h-6 mr-2 text-yellow-400" />
                <a href="tel:+2349130060883" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +234 913 006 0883
                </a>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Github className="w-6 h-6 mr-2 text-yellow-400" />
                <a
                  href="http://bit.ly/437sejB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  GitHub
                </a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="glassmorphism rounded-xl p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  placeholder="Your message"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-yellow-400 text-black hover:bg-yellow-300 transition-colors duration-300"
              >
                Send Message
              </Button>
            </form>
            {submitStatus && (
              <motion.p
                className="mt-4 text-yellow-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {submitStatus}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

