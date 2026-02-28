"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { quizQuestions } from "@/data/questions"

interface QuizProps {
  onComplete: (answers: Record<number, number>) => void
  onBack: () => void
}

export default function Quiz({ onComplete, onBack }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [direction, setDirection] = useState(1)

  const question = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = { ...answers, [question.id]: answerIndex }
    setAnswers(newAnswers)
    setDirection(1)

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 300)
    } else {
      setTimeout(() => {
        onComplete(newAnswers)
      }, 500)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setDirection(-1)
      setCurrentQuestion(currentQuestion - 1)
    } else {
      onBack()
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="relative flex items-center justify-center mb-3">
            <Button
              onClick={handleBack}
              variant="ghost"
              size="sm"
              className="absolute left-0 h-9 w-9 p-0 hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-xs sm:text-sm text-muted-foreground tracking-wide">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className="absolute right-0 text-xs sm:text-sm text-muted-foreground tracking-wide">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-0.5 bg-border relative overflow-hidden rounded-full">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-primary rounded-full"
              initial={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center py-24 px-7">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentQuestion}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-8 sm:space-y-12"
            >
              {/* Question */}
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-balance leading-tight">
                {question.question}
              </h2>

              {/* Answers */}
              <div className="grid gap-3 sm:gap-4">
                {question.answers.map((answer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Button
                      onClick={() => handleAnswer(index)}
                      variant="outline"
                      className="w-full text-left text-sm sm:text-base md:text-lg font-normal justify-start hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 border-border/50 bg-card/30 backdrop-blur-sm shadow-sm hover:shadow-md group py-5 px-3 min-h-[4.5rem] sm:py-7 sm:px-4 sm:min-h-0"
                    >
                      <span className="text-primary font-serif text-lg sm:text-xl group-hover:scale-110 transition-transform inline-block sm:mr-2 mr-1">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span className="text-balance leading-relaxed font-sans">{answer.text}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
