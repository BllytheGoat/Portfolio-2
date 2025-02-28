"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PageTransition from "@/components/page-transition"
import { motion } from "framer-motion"

const projects = [
  {
    title: "OneView",
    description:
      "Chill smart home dashboard. Aggregates all your devices into one easy view. Energy usage, security cams, climate control—all in one place.",
    tags: ["SMART HOME", "UI/UX", "DASHBOARD"],
    link: "#",
  },
  {
    title: "QuadraConnect",
    description:
      "Social media for real connections. Find your tribe in groups of four based on shared interests. Encourages focused discussions and collabs.",
    tags: ["SOCIAL MEDIA", "UX DESIGN", "COMMUNITY"],
    link: "#",
  },
  {
    title: "TriCycle",
    description:
      "Biker app for all your cycling needs. Route tracking, maintenance logs, and a marketplace for gear. Connects you with local bike shops and cycling communities.",
    tags: ["MOBILE APP", "UI DESIGN", "E-COMMERCE"],
    link: "#",
  },
  {
    title: "SixtySeven Studios",
    description:
      "Design agency's portfolio website. Showcases their work with interactive case studies. Web design, UI/UX, and branding experts.",
    tags: ["WEB DESIGN", "PORTFOLIO", "INTERACTIVE"],
    link: "#",
  },
]

export default function Projects() {
  return (
    <PageTransition>
      <main className="relative min-h-screen py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-10 tracking-tight">PROJECTS</h1>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden group"
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={false}
                  animate={{ scale: [1, 1.5, 1.2] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
                />
                <h2 className="text-3xl font-bold mb-3 relative z-10">{project.title}</h2>
                <p className="text-gray-300 mb-4 relative z-10">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-white border-white hover:bg-white/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={project.link}>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10 relative z-10">
                    View Project
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
}

