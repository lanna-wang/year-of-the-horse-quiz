"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"

interface LandingProps {
  onStart: () => void
}

export default function Landing({ onStart }: LandingProps) {
  const hasTriggeredRef = useRef(false)
  const [isExiting, setIsExiting] = useState(false)
  const { scrollY } = useScroll()

  // As user scrolls 0 -> 300px, envelope scales 1 -> 2.2 and moves up slightly
  const envelopeScale = useTransform(scrollY, [0, 300], [1, 2.2])
  const envelopeY = useTransform(scrollY, [0, 300], [0, -60])
  
  // Fade out all text as user scrolls (faster fade - done by 150px)
  const textOpacity = useTransform(scrollY, [0, 150], [1, 0])

  // Auto-trigger quiz when scroll reaches the threshold
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 280 && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true
      setIsExiting(true)
      // Wait for envelope fade-out animation to complete before switching
      setTimeout(() => {
        onStart()
      }, 1200)
    }
  })
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
  }

  // Envelope appears last with extra delay
  const envelopeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.8 },
    },
  }

  return (
    <main 
      className="relative min-h-[150vh] flex items-start justify-center p-0 cursor-pointer"
      onClick={onStart}
    >
      <motion.div
        className="relative w-full min-h-screen flex flex-col sticky top-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >

        {/* ===== MOBILE LAYOUT (below lg) ===== */}
        <div className="lg:hidden flex flex-col flex-1">
          {/* Top content section - fades out on scroll */}
          <motion.div 
            className="relative z-0 flex-1 flex flex-col items-center justify-center px-6 sm:px-10 pt-12 sm:pt-16 pb-4 sm:pb-6"
            style={{ opacity: textOpacity }}
          >
            {/* Title - Mobile Image */}
            <motion.div
              className="w-full max-w-[85%] sm:max-w-[75%] mb-6 sm:mb-8"
              variants={itemVariants}
            >
              <img 
                src="/images/hero-title.png"
                alt="Year of the Horse"
                className="w-full h-auto ml-[-3px]"
              />
            </motion.div>

            {/* Byline */}
            <motion.p
              className="text-[#720611] text-[0.65rem] sm:text-xs uppercase font-sans mb-3 sm:mb-5 tracking-widest font-medium"
              variants={itemVariants}
            >
              By @LANNA.WNG
            </motion.p>

            {/* Subtitle */}
            <motion.p
              className="text-[#720611] text-[0.65rem] sm:text-xs uppercase font-sans font-medium tracking-widest"
              variants={itemVariants}
            >
              Your 2026 Horse-Oscope Awaits
            </motion.p>
          </motion.div>

          {/* Red Envelope - Mobile (above border) */}
          <motion.div
            className="relative z-[45] flex justify-center px-8 sm:px-16 pb-0"
            initial={{ opacity: 0, y: 40 }}
            animate={isExiting 
              ? { opacity: 0, scale: 2.5 } 
              : { opacity: 1, y: 0 }
            }
            transition={isExiting 
              ? { duration: 1.2, ease: "easeInOut" }
              : { duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 1.2 }
            }
            style={{ scale: envelopeScale, y: envelopeY, transformOrigin: "bottom center" }}
          >
            <div className="w-full max-w-xs sm:max-w-sm">
              <img 
                src="/images/red-envelope.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* ===== DESKTOP LAYOUT (lg and above) ===== */}
        <div className="hidden lg:flex flex-col flex-1 items-center justify-center">
          {/* Top content section - fades out on scroll */}
          <motion.div 
            className="relative z-0 flex flex-col items-center px-16 pt-12 pb-4 mt-12"
            style={{ opacity: textOpacity }}
          >
            {/* Title - Desktop Image (horizontal) */}
            <motion.div
              className="w-full max-w-[80%] mb-6"
              variants={itemVariants}
            >
              <img 
                src="/images/hero-title-desktop.png"
                alt="Year of the Horse"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Byline */}
            <motion.p
              className="text-[#720611] text-sm uppercase font-sans font-medium mb-1.5 tracking-[0]"
              variants={itemVariants}
            >
              By @LANNA.WNG
            </motion.p>
          </motion.div>

          {/* Subtitle - larger on desktop, positioned between border area and envelope */}
          <motion.p
            className="text-[#720611] text-lg uppercase font-sans font-medium mb-6 tracking-[0]"
            variants={itemVariants}
            style={{ opacity: textOpacity }}
          >
            Your 2026 Horse-Oscope Awaits
          </motion.p>

          {/* Red Envelope - Desktop (above border) */}
          <motion.div
            className="relative z-[45] flex justify-center pb-0"
            initial={{ opacity: 0, y: 40 }}
            animate={isExiting 
              ? { opacity: 0, scale: 2.5 } 
              : { opacity: 1, y: 0 }
            }
            transition={isExiting 
              ? { duration: 1.2, ease: "easeInOut" }
              : { duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 1.2 }
            }
            style={{ scale: envelopeScale, y: envelopeY, transformOrigin: "bottom center" }}
          >
            <div className="w-full max-w-xs">
              <img 
                src="/images/red-envelope.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
