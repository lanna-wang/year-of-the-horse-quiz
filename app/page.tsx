"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Landing from "@/components/landing"
import Quiz from "@/components/quiz"
import Loading from "@/components/loading"
import Reveal from "@/components/reveal"
import Result from "@/components/result"
import DecorativeFrame from "@/components/decorative-frame"
import { horses } from "@/data/results"
import { quizQuestions } from "@/data/questions"

export default function Home() {
  const [step, setStep] = useState<"landing" | "quiz" | "loading" | "reveal" | "result">("landing")
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [horseId, setHorseId] = useState<string>("")

  const handleStartQuiz = () => {
    // Landing component handles its own fade-out, then calls this
    setStep("quiz")
    // Reset scroll position when quiz starts
    window.scrollTo({ top: 0, behavior: "instant" })
  }

  const handleQuizComplete = (quizAnswers: Record<number, number>) => {
    setAnswers(quizAnswers)
    setStep("loading")
    
    // Calculate scores based on quiz data
    const scores: Record<string, number> = {}
    horses.forEach(horse => {
      scores[horse.id] = 0
    })
    
    // Add up scores from each question's selected answer
    Object.entries(quizAnswers).forEach(([questionId, answerIndex]) => {
      const question = quizQuestions.find(q => q.id === Number(questionId))
      if (question && question.answers[answerIndex]) {
        const answerScores = question.answers[answerIndex].scores
        Object.entries(answerScores).forEach(([horseId, points]) => {
          scores[horseId] = (scores[horseId] || 0) + points
        })
      }
    })
    
    // Find horse with highest score
    const winningHorseId = Object.entries(scores).reduce((a, b) => 
      b[1] > a[1] ? b : a
    )[0]
    
    setTimeout(() => {
      setHorseId(winningHorseId)
      setStep("reveal")
    }, 2000)
  }

  const handleRevealComplete = () => {
    setStep("result")
  }

  const handleRestart = () => {
    setAnswers({})
    setHorseId("")
    setStep("landing")
  }

  const selectedHorse = horses.find(h => h.id === horseId)

  const handleBackToLanding = () => {
    setStep("landing")
    setAnswers({})
  }

  return (
    <DecorativeFrame>
      <AnimatePresence mode="wait">
        {step === "landing" && (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
          >
            <Landing onStart={handleStartQuiz} />
          </motion.div>
        )}
        {step === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Quiz onComplete={handleQuizComplete} onBack={handleBackToLanding} />
          </motion.div>
        )}
        {step === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loading />
          </motion.div>
        )}
        {step === "reveal" && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Reveal horse={selectedHorse} onComplete={handleRevealComplete} />
          </motion.div>
        )}
        {step === "result" && selectedHorse && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Result horse={selectedHorse} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </DecorativeFrame>
  )
}
