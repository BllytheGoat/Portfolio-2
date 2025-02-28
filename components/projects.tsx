"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
    <div id="projects" className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-black mb-10 tracking-tight text-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          PROJECTS
        </motion.h1>
        <div className="space-y-12 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-xl p-6 relative overflow-hidden group hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.5, 1.2],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <h2 className="text-3xl font-bold mb-3 relative z-10 text-gradient">{project.title}</h2>
              <p className="text-gray-300 mb-4 relative z-10">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button
                variant="outline"
                className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black relative z-10 transition-colors duration-300"
              >
                View Project
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

