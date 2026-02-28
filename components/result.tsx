"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import ShareCard from "@/components/share-card"
import type { Horse } from "@/data/results"

interface ResultProps {
  horse: Horse
  onRestart: () => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
}

export default function Result({ horse, onRestart }: ResultProps) {
  return (
    <main className="min-h-screen p-4 sm:p-6 py-12 sm:py-16">
      <motion.div 
        className="max-w-4xl mx-auto space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div 
          className="text-center border-b pb-10 sm:pb-12 space-y-4 border-primary"
          variants={itemVariants}
        >
          <div className="space-y-4">
            <p className="text-xs sm:text-sm tracking-widest uppercase text-primary font-medium">
              Your 2026 Horse-oscope
            </p>
            <div className="flex justify-center px-4">
              <img 
                src={horse.titleSrc}
                alt={horse.title}
                className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto mb-[-24px] mt-0"
              />
            </div>
          </div>
          
          
        </motion.div>

        {/* Horse image */}
        <motion.div 
          className="relative w-full max-w-2xl mx-auto flex justify-center"
          variants={itemVariants}
        >
          <img 
            src={horse.artSrc}
            alt={horse.title}
            className="w-auto h-auto max-w-full max-h-[70vh] rounded shadow-none px-7 my-7 mb-7"
            style={{ filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.15))" }}
          />
        </motion.div>

        {/* Reading */}
        <motion.div 
          className="max-w-2xl mx-auto px-4 text-center"
          variants={itemVariants}
        >
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90 text-pretty pr-0 pb-7">
            {horse.reading}
          </p>
        </motion.div>

        {/* Details grid */}
        <motion.div 
          className="grid sm:grid-cols-2 max-w-3xl mx-auto border-t border-b py-10 sm:py-12 px-4 border-primary mt-2.5 gap-8"
          variants={itemVariants}
        >
          <div className="space-y-2 text-center">
            <h3 className="text-xs sm:text-sm uppercase tracking-widest font-medium text-primary">
              Watch For
            </h3>
            <p className="sm:text-base text-foreground text-base">
              {horse.watchFor}
            </p>
          </div>

          <div className="space-y-2 text-center">
            <h3 className="text-xs sm:text-sm uppercase tracking-widest font-medium text-primary">
              Lucky Color
            </h3>
            <p className="sm:text-base text-foreground text-base">
              {horse.lucky.color}
            </p>
          </div>

          <div className="space-y-2 text-center">
            <h3 className="text-xs sm:text-sm uppercase tracking-widest font-medium text-primary">
              Lucky Number
            </h3>
            <p className="sm:text-base text-foreground text-base">
              {horse.lucky.number}
            </p>
          </div>

          <div className="space-y-2 text-center">
            <h3 className="text-xs sm:text-sm uppercase tracking-widest font-medium text-primary">
              Theme
            </h3>
            <p className="sm:text-base text-foreground text-base">
              {horse.theme}
            </p>
          </div>
        </motion.div>

        {/* Share Section */}
        <motion.div 
          className="border-border px-4 border-t-[0] pt-3"
          variants={itemVariants}
        >
          <div className="max-w-2xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-foreground">
                Share your result
              </h3>
              
            </div>
            
            <ShareCard horse={horse} />
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center pt-8 px-4 space-y-0"
          variants={itemVariants}
        >
          <div className="space-y-3">
            
            
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={onRestart}
              variant="outline"
              size="lg"
              className="px-8 py-5 text-sm tracking-wide bg-transparent"
            >
              Take again
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
