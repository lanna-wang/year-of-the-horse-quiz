export interface QuizQuestion {
  id: number
  question: string
  answers: {
    text: string
    scores: Record<string, number>
  }[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you usually make decisions?",
    answers: [
      { text: "I think several steps ahead before moving", scores: { chess: 2, bauhaus: 1, abstract: 1 } },
      { text: "I follow instinct and adjust as I go", scores: { ink: 2, whimsical: 1, cartoony: 1 } },
      { text: "I rely on what feels meaningful or time-tested", scores: { papercut: 2, folk: 1, rocking: 1 } },
      { text: "I choose what brings the most joy", scores: { cartoony: 2, carousel: 1, pixel: 1 } }
    ]
  },
  {
    id: 2,
    question: "Which environment feels most like home?",
    answers: [
      { text: "Clean, quiet, and uncluttered", scores: { abstract: 2, bauhaus: 1, chess: 1 } },
      { text: "Ornate, dreamy, and slightly theatrical", scores: { carousel: 2, pixel: 1, whimsical: 1 } },
      { text: "Familiar, warm, and nostalgic", scores: { rocking: 2, folk: 1, papercut: 1 } },
      { text: "Dark, dramatic, and atmospheric", scores: { war: 2, chess: 1, ink: 1 } }
    ]
  },
  {
    id: 3,
    question: "What do people come to you for?",
    answers: [
      { text: "Perspective and strategy", scores: { chess: 2, bauhaus: 1, abstract: 1 } },
      { text: "Comfort and reassurance", scores: { rocking: 2, folk: 1, papercut: 1 } },
      { text: "Inspiration and ideas", scores: { pixel: 2, whimsical: 1, ink: 1 } },
      { text: "Laughter and lightness", scores: { cartoony: 2, carousel: 1, whimsical: 1 } }
    ]
  },
  {
    id: 4,
    question: "Pick a guiding principle:",
    answers: [
      { text: "Structure creates freedom", scores: { bauhaus: 2, chess: 1, abstract: 1 } },
      { text: "Tradition carries meaning", scores: { papercut: 2, folk: 1, rocking: 1 } },
      { text: "Expression over perfection", scores: { ink: 2, cartoony: 1, war: 1 } },
      { text: "Life should feel magical", scores: { whimsical: 2, carousel: 1, pixel: 1 } }
    ]
  },
  {
    id: 5,
    question: "How do you handle chaos?",
    answers: [
      { text: "I eliminate it", scores: { bauhaus: 2, abstract: 1, chess: 1 } },
      { text: "I work through it patiently", scores: { folk: 2, rocking: 1, papercut: 1 } },
      { text: "I lean into it", scores: { cartoony: 2, ink: 1, war: 1 } },
      { text: "I transform it into something beautiful", scores: { pixel: 2, carousel: 1, whimsical: 1 } }
    ]
  },
  {
    id: 6,
    question: "Which pace feels most natural to you?",
    answers: [
      { text: "Slow, steady, and intentional", scores: { abstract: 2, folk: 1, papercut: 1 } },
      { text: "Fast, instinctive, high-energy", scores: { ink: 2, cartoony: 1, carousel: 1 } },
      { text: "Measured and strategic", scores: { chess: 2, bauhaus: 1, abstract: 1 } },
      { text: "Fluid and emotionally led", scores: { pixel: 2, whimsical: 1, war: 1 } }
    ]
  },
  {
    id: 7,
    question: "Choose a moment you love most:",
    answers: [
      { text: "When a long plan finally works", scores: { chess: 2, bauhaus: 1, abstract: 1 } },
      { text: "When something handmade comes together", scores: { folk: 2, papercut: 1, rocking: 1 } },
      { text: "When a room fills with laughter", scores: { cartoony: 2, carousel: 1, rocking: 1 } },
      { text: "When something feels beautiful and unreal", scores: { whimsical: 2, pixel: 1, carousel: 1 } }
    ]
  },
  {
    id: 8,
    question: "What is your ideal evening?",
    answers: [
      { text: "A long dinner followed by thoughtful conversation", scores: { pixel: 2, chess: 1, bauhaus: 1 } },
      { text: "A quiet night in, candle lit, doing something familiar", scores: { rocking: 2, abstract: 1, folk: 1 } },
      { text: "Dancing until dawn", scores: { carousel: 2, cartoony: 1, ink: 1 } },
      { text: "Wandering somewhere beautiful with no fixed plan", scores: { whimsical: 2, ink: 1, pixel: 1 } }
    ]
  },
  {
    id: 9,
    question: "How do you usually approach change?",
    answers: [
      { text: "Carefully, after assessing all outcomes", scores: { bauhaus: 2, chess: 1, abstract: 1 } },
      { text: "Slowly — I need time to adjust", scores: { papercut: 2, rocking: 1, folk: 1 } },
      { text: "Fully — I dive in and adapt along the way", scores: { ink: 2, cartoony: 1, carousel: 1 } },
      { text: "Emotionally — I follow what feels right", scores: { war: 2, pixel: 1, whimsical: 1 } }
    ]
  },
  {
    id: 10,
    question: "Which compliment means the most to you?",
    answers: [
      { text: "You're always two steps ahead.", scores: { chess: 2, bauhaus: 1, abstract: 1 } },
      { text: "You make people feel safe.", scores: { rocking: 2, folk: 1, papercut: 1 } },
      { text: "You bring so much energy into the room.", scores: { cartoony: 2, carousel: 1, ink: 1 } },
      { text: "You see beauty where others don't.", scores: { pixel: 2, whimsical: 1, war: 1 } }
    ]
  },
  {
    id: 11,
    question: "When things feel uncertain, you tend to…",
    answers: [
      { text: "Create a plan", scores: { bauhaus: 2, chess: 1, abstract: 1 } },
      { text: "Hold onto what's familiar", scores: { rocking: 2, papercut: 1, folk: 1 } },
      { text: "Seek connection or movement", scores: { carousel: 2, cartoony: 1, ink: 1 } },
      { text: "Trust that things will unfold", scores: { whimsical: 2, pixel: 1, war: 1 } }
    ]
  },
  {
    id: 12,
    question: "Pick a wish for 2026:",
    answers: [
      { text: "Clarity and direction", scores: { bauhaus: 2, chess: 1, abstract: 1 } },
      { text: "Stability and protection", scores: { papercut: 2, rocking: 1, folk: 1 } },
      { text: "Creative expansion", scores: { pixel: 2, whimsical: 1, carousel: 1 } },
      { text: "Transformation and momentum", scores: { war: 2, ink: 1, cartoony: 1 } }
    ]
  }
]
