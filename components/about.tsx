"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const skills = [
    "Web Design",
    "UI/UX Design",
    "Responsive Design",
    "Branding",
    "Figma",
    "Adobe Creative Suite",
    "HTML/CSS",
    "JavaScript",
  ]

  return (
    <div id="about" className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-black mb-10 tracking-tight text-gradient"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ABOUT ME
        </motion.h1>
        <motion.div
          className="glassmorphism rounded-xl p-6 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gradient">Okechukwu Okwuchukwu Joshua</h2>
          <p className="text-gray-300 text-lg mb-6">
            Web designer / UI/UX Designer passionate about crafting digital experiences that blend creativity with
            cutting-edge technology. I specialize in leveling up small businesses online, helping startups ditch the
            basic and go bold with web design that actually works.
          </p>
          <h3 className="text-xl font-bold mb-2 text-yellow-400">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="glassmorphism rounded-xl p-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gradient">Work Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-bold">Web Designer</h3>
            <p className="text-yellow-400">Royale Computers (2024-2025)</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
              <li>Crafted high-converting landing pages, boosting sales by 20%</li>
              <li>Led the redesign of Royale's main website, improving user engagement by 15%</li>
              <li>Designed user flow and interface for the online store</li>
              <li>Created marketing visuals for various campaigns</li>
              <li>Collaborated with cross-functional teams to deliver projects on time</li>
              <li>Contributed to and maintained Royale's design system</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

