"use client"

import { motion, useAnimate, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import type { Horse } from "@/data/results"

interface RevealProps {
  horse?: Horse
  onComplete: () => void
}

// Storyboard frames in order
const FRAMES = [
  "/images/envelope-frame-1.png", // Closed envelope
  "/images/envelope-frame-2.png", // Opened, empty
  "/images/envelope-frame-3.png", // Card barely peeking
  "/images/envelope-frame-4.png", // Card emerging, tilted
  "/images/envelope-frame-5.png", // Card more emerged, more tilted
  "/images/envelope-frame-6.png", // Card mostly out, large
  "/images/envelope-frame-7.png", // Card fully out, envelope below
  "/images/envelope-frame-8.png", // Card centered large, envelope fading
  "/images/envelope-frame-9.png", // Just the card, centered
]

// Frame timing (ms) - how long each frame shows before transitioning
const FRAME_DURATIONS = [
  800,  // Frame 1: closed envelope enters
  400,  // Frame 2: opens
  300,  // Frame 3: card barely peeking
  300,  // Frame 4: emerging
  300,  // Frame 5: more emerged
  350,  // Frame 6: mostly out
  400,  // Frame 7: fully out
  450,  // Frame 8: centering
  600,  // Frame 9: centered - pause before flip
]

export default function Reveal({ horse, onComplete }: RevealProps) {
  const [scope, animate] = useAnimate()
  const [currentFrame, setCurrentFrame] = useState(0)
  const [showFlip, setShowFlip] = useState(false)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    if (!horse) return

    const runAnimation = async () => {
      // Initial entrance animation
      await new Promise((resolve) => setTimeout(resolve, 300))
      setEntered(true)

      // Cycle through frames with delays
      for (let i = 0; i < FRAMES.length; i++) {
        setCurrentFrame(i)
        await new Promise((resolve) => setTimeout(resolve, FRAME_DURATIONS[i]))
      }

      // After last frame, transition to flip animation
      await new Promise((resolve) => setTimeout(resolve, 200))
      setShowFlip(true)

      // Wait for flip setup
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Perform the 3D flip
      await animate(
        ".card-flipper",
        { rotateY: 180 },
        { duration: 1, ease: [0.4, 0, 0.2, 1] }
      )

      // Wait then complete
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onComplete()
    }

    runAnimation()
  }, [horse, animate, onComplete])

  if (!horse) return null

  return (
    <main
      ref={scope}
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden"
    >
      <div className="relative w-full h-[600px] sm:h-[800px] lg:h-[900px] flex items-center justify-center">
        
        {/* Frame-based animation - crossfade between storyboard images */}
        {!showFlip && (
          <motion.div
            className="absolute flex items-center justify-center px-4"
            initial={{ y: 100, opacity: 0 }}
            animate={entered ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              width: "min(90vw, 1000px)",
              height: "min(90vw, 1000px)",
              maxWidth: "1000px",
              maxHeight: "1000px"
            }}
          >
            <img
              src={FRAMES[currentFrame]}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>
        )}

        {/* Centered Card with 3D Flip */}
        {showFlip && (
          <motion.div
            className="middle-card absolute flex items-center justify-center px-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            style={{
              perspective: "1200px",
              width: "min(90vw, 1000px)",
              height: "min(90vw, 1000px)",
              maxWidth: "1000px",
              maxHeight: "1000px"
            }}
          >
            <div
              className="card-flipper relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front of card (Chinese characters) */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src="/images/envelope-frame-9.png"
                  alt=""
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.25))" }}
                />
              </div>

              {/* Back of card (Horse image) */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <img
                  src={horse.artSrc}
                  alt={horse.title}
                  className="max-w-[60%] max-h-[60%] object-contain"
                  style={{ filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.15))" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
