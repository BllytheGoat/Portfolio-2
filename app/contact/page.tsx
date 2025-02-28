import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import PageTransition from "@/components/page-transition"
import { Github, Mail, Phone } from "lucide-react"

export default function Contact() {
  return (
    <PageTransition>
      <main className="relative min-h-screen py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-10 tracking-tight">GET IN TOUCH</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-2 text-yellow-400" />
                  <a href="mailto:okechukwuokwuchukwu46@gmail.com" className="text-gray-300 hover:text-white">
                    okechukwuokwuchukwu46@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-yellow-400" />
                  <a href="tel:+2349130060883" className="text-gray-300 hover:text-white">
                    +234 913 006 0883
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="w-6 h-6 mr-2 text-yellow-400" />
                  <a
                    href="http://bit.ly/437sejB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full rounded-full bg-white text-black hover:bg-white/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}

