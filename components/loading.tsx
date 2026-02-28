"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Loading() {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".")
    }, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-xl w-full text-center space-y-12">
        {/* Animated particles */}
        <div className="relative h-32 flex items-center justify-center">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
              style={{
                left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 40}%`,
                top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 40}%`,
              }}
            />
          ))}
          <motion.div 
            className="w-16 h-16 border border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear"
            }}
          />
        </div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground">
            Consulting the stars{dots}
          </p>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-4">
            Your celestial horse is being summoned.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
