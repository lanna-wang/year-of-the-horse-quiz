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
      { text: "I think several steps ahead before moving", scores: { strategist: 2, thinker: 1, minimalist: 1 } },
      { text: "I follow instinct and adjust as I go", scores: { force: 2, dreamer: 1, jester: 1 } },
      { text: "I rely on what feels meaningful or time-tested", scores: { traditionalist: 2, hearth: 1, haven: 1 } },
      { text: "I choose what brings the most joy", scores: { jester: 2, romantic: 1, navigator: 1 } }
    ]
  },
  {
    id: 2,
    question: "Which environment feels most like home?",
    answers: [
      { text: "Clean, quiet, and uncluttered", scores: { minimalist: 2, thinker: 1, strategist: 1 } },
      { text: "Ornate, dreamy, and slightly theatrical", scores: { romantic: 2, navigator: 1, dreamer: 1 } },
      { text: "Familiar, warm, and nostalgic", scores: { haven: 2, hearth: 1, traditionalist: 1 } },
      { text: "Dark, dramatic, and atmospheric", scores: { steadfast: 2, strategist: 1, force: 1 } }
    ]
  },
  {
    id: 3,
    question: "What do people come to you for?",
    answers: [
      { text: "Perspective and strategy", scores: { strategist: 2, thinker: 1, minimalist: 1 } },
      { text: "Comfort and reassurance", scores: { haven: 2, hearth: 1, traditionalist: 1 } },
      { text: "Inspiration and ideas", scores: { navigator: 2, dreamer: 1, force: 1 } },
      { text: "Laughter and lightness", scores: { jester: 2, romantic: 1, dreamer: 1 } }
    ]
  },
  {
    id: 4,
    question: "Pick a guiding principle:",
    answers: [
      { text: "Structure creates freedom", scores: { thinker: 2, strategist: 1, minimalist: 1 } },
      { text: "Tradition carries meaning", scores: { traditionalist: 2, hearth: 1, haven: 1 } },
      { text: "Expression over perfection", scores: { force: 2, jester: 1, steadfast: 1 } },
      { text: "Life should feel magical", scores: { dreamer: 2, romantic: 1, navigator: 1 } }
    ]
  },
  {
    id: 5,
    question: "How do you handle chaos?",
    answers: [
      { text: "I eliminate it", scores: { thinker: 2, minimalist: 1, strategist: 1 } },
      { text: "I work through it patiently", scores: { hearth: 2, haven: 1, traditionalist: 1 } },
      { text: "I lean into it", scores: { jester: 2, force: 1, steadfast: 1 } },
      { text: "I transform it into something beautiful", scores: { navigator: 2, romantic: 1, dreamer: 1 } }
    ]
  },
  {
    id: 6,
    question: "Which pace feels most natural to you?",
    answers: [
      { text: "Slow, steady, and intentional", scores: { minimalist: 2, hearth: 1, traditionalist: 1 } },
      { text: "Fast, instinctive, high-energy", scores: { force: 2, jester: 1, romantic: 1 } },
      { text: "Measured and strategic", scores: { strategist: 2, thinker: 1, minimalist: 1 } },
      { text: "Fluid and emotionally led", scores: { navigator: 2, dreamer: 1, steadfast: 1 } }
    ]
  },
  {
    id: 7,
    question: "Choose a moment you love most:",
    answers: [
      { text: "When a long plan finally works", scores: { strategist: 2, thinker: 1, minimalist: 1 } },
      { text: "When something handmade comes together", scores: { hearth: 2, traditionalist: 1, haven: 1 } },
      { text: "When a room fills with laughter", scores: { jester: 2, romantic: 1, haven: 1 } },
      { text: "When something feels beautiful and unreal", scores: { dreamer: 2, navigator: 1, romantic: 1 } }
    ]
  },
  {
    id: 8,
    question: "What is your ideal evening?",
    answers: [
      { text: "A long dinner followed by thoughtful conversation", scores: { navigator: 2, strategist: 1, thinker: 1 } },
      { text: "A quiet night in, candle lit, doing something familiar", scores: { haven: 2, minimalist: 1, hearth: 1 } },
      { text: "Dancing until dawn", scores: { romantic: 2, jester: 1, force: 1 } },
      { text: "Wandering somewhere beautiful with no fixed plan", scores: { dreamer: 2, force: 1, navigator: 1 } }
    ]
  },
  {
    id: 9,
    question: "How do you usually approach change?",
    answers: [
      { text: "Carefully, after assessing all outcomes", scores: { thinker: 2, strategist: 1, minimalist: 1 } },
      { text: "Slowly — I need time to adjust", scores: { traditionalist: 2, haven: 1, hearth: 1 } },
      { text: "Fully — I dive in and adapt along the way", scores: { force: 2, jester: 1, romantic: 1 } },
      { text: "Emotionally — I follow what feels right", scores: { steadfast: 2, navigator: 1, dreamer: 1 } }
    ]
  },
  {
    id: 10,
    question: "Which compliment means the most to you?",
    answers: [
      { text: "You're always two steps ahead.", scores: { strategist: 2, thinker: 1, minimalist: 1 } },
      { text: "You make people feel safe.", scores: { haven: 2, hearth: 1, traditionalist: 1 } },
      { text: "You bring so much energy into the room.", scores: { jester: 2, romantic: 1, force: 1 } },
      { text: "You see beauty where others don't.", scores: { navigator: 2, dreamer: 1, steadfast: 1 } }
    ]
  },
  {
    id: 11,
    question: "When things feel uncertain, you tend to…",
    answers: [
      { text: "Create a plan", scores: { thinker: 2, strategist: 1, minimalist: 1 } },
      { text: "Hold onto what's familiar", scores: { haven: 2, traditionalist: 1, hearth: 1 } },
      { text: "Seek connection or movement", scores: { romantic: 2, jester: 1, force: 1 } },
      { text: "Trust that things will unfold", scores: { dreamer: 2, navigator: 1, steadfast: 1 } }
    ]
  },
  {
    id: 12,
    question: "Pick a wish for 2026:",
    answers: [
      { text: "Clarity and direction", scores: { thinker: 2, strategist: 1, minimalist: 1 } },
      { text: "Stability and protection", scores: { traditionalist: 2, haven: 1, hearth: 1 } },
      { text: "Creative expansion", scores: { navigator: 2, dreamer: 1, romantic: 1 } },
      { text: "Transformation and momentum", scores: { steadfast: 2, force: 1, jester: 1 } }
    ]
  }
]
