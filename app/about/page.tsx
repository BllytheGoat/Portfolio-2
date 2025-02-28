import { Badge } from "@/components/ui/badge"
import PageTransition from "@/components/page-transition"

export default function About() {
  return (
    <PageTransition>
      <main className="relative min-h-screen py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-10 tracking-tight">ABOUT ME</h1>
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">Okechukwu Okwuchukwu Joshua</h2>
            <p className="text-gray-300 text-lg mb-6">
              Web designer / UI/UX Designer passionate about crafting digital experiences that blend creativity with
              cutting-edge technology. I specialize in leveling up small businesses online, helping startups ditch the
              basic and go bold with web design that actually works.
            </p>
            <h3 className="text-xl font-bold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Web Design",
                "UI/UX Design",
                "Responsive Design",
                "Branding",
                "Figma",
                "Adobe Creative Suite",
                "HTML/CSS",
                "JavaScript",
              ].map((skill, index) => (
                <Badge key={index} variant="outline" className="text-white border-white hover:bg-white/10">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
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
          </div>
        </div>
      </main>
    </PageTransition>
  )
}

