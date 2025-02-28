"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { AnimatePresence } from "framer-motion"
import Background3D from "@/components/3d-background"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    const eventSource = new EventSource("/api/visitor-count")
    eventSource.onmessage = (event) => {
      setVisitorCount(Number.parseInt(event.data, 10))
    }
    return () => eventSource.close()
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white overflow-hidden">
          <Background3D />
          <Navigation />
          <AnimatePresence mode="wait">{children}</AnimatePresence>
          <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            Visitors: {visitorCount}
          </div>
        </div>
      </body>
    </html>
  )
}

