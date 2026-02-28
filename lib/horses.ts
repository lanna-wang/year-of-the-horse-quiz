export interface Horse {
  id: string
  name: string
  title: string
  theme: string
  reading: string
  watchFor: string
  luckyColor: string
  luckyNumber: number
  luckyDay: string
  luckySymbol: string
  artSrc: string
}

export const horses: Horse[] = [
  {
    id: "celestial",
    name: "Celestial Steed",
    title: "The Visionary",
    theme: "Ascension & Clarity",
    reading: "2026 beckons you toward heights unknown. Your vision pierces the veil between what is and what could be. Trust your instincts, for they are celestial guides leading you to unprecedented territory. Partnerships formed this year carry karmic weight.",
    watchFor: "March and September hold pivotal moments",
    luckyColor: "Midnight Blue",
    luckyNumber: 8,
    luckyDay: "Tuesday",
    luckySymbol: "⭐",
    artSrc: "/horses/celestial.png"
  },
  {
    id: "wildfire",
    name: "Wildfire Runner",
    title: "The Catalyst",
    theme: "Passion & Transformation",
    reading: "Your energy burns bright enough to ignite change in everything you touch. This year demands bold action. What you've been hesitating to pursue now demands your full attention. The universe rewards your audacity with unexpected doors opening.",
    watchFor: "July brings a turning point",
    luckyColor: "Crimson Red",
    luckyNumber: 3,
    luckyDay: "Thursday",
    luckySymbol: "🔥",
    artSrc: "/horses/wildfire.png"
  },
  {
    id: "moonwater",
    name: "Moonwater Mare",
    title: "The Intuitive",
    theme: "Emotion & Flow",
    reading: "Like water, you move through obstacles rather than against them. 2026 asks you to honor your emotional intelligence. Your dreams hold messages; keep a journal. Creative pursuits flourish under your touch this year, especially those involving collaboration.",
    watchFor: "Full moons amplify your power",
    luckyColor: "Pearl White",
    luckyNumber: 7,
    luckyDay: "Monday",
    luckySymbol: "🌙",
    artSrc: "/horses/moonwater.png"
  },
  {
    id: "earthbound",
    name: "Earthbound Stallion",
    title: "The Builder",
    theme: "Foundation & Mastery",
    reading: "Your patience is your power. What you build this year will stand for generations. Focus on tangible goals and practical magic. Your reputation grows through consistent, quality work. Financial gains come through strategic planning rather than risk.",
    watchFor: "Spring equinox initiates growth",
    luckyColor: "Forest Green",
    luckyNumber: 4,
    luckyDay: "Saturday",
    luckySymbol: "🌿",
    artSrc: "/horses/earthbound.png"
  },
  {
    id: "phoenix",
    name: "Phoenix Runner",
    title: "The Reborn",
    theme: "Endings & New Beginnings",
    reading: "What dies makes room for rebirth. 2026 is your year of profound transformation. Release what no longer serves you with grace. From these ashes, you rise with newfound purpose and clarity. Your reinvention inspires others to do the same.",
    watchFor: "October brings closure and liberation",
    luckyColor: "Golden Amber",
    luckyNumber: 9,
    luckyDay: "Sunday",
    luckySymbol: "🔆",
    artSrc: "/horses/phoenix.png"
  },
  {
    id: "shadow",
    name: "Shadow Dancer",
    title: "The Mystic",
    theme: "Mystery & Inner Work",
    reading: "You walk between worlds with ease. This year calls you to explore your shadow self with compassion. Hidden truths reveal themselves. Your spiritual practice deepens significantly. What others fear, you transmute into wisdom. Trust the darkness as much as the light.",
    watchFor: "Winter solstice unveils secrets",
    luckyColor: "Deep Plum",
    luckyNumber: 11,
    luckyDay: "Friday",
    luckySymbol: "🌑",
    artSrc: "/horses/shadow.png"
  },
  {
    id: "windwhisper",
    name: "Windwhisper Colt",
    title: "The Communicator",
    theme: "Expression & Connection",
    reading: "Your words carry weight this year. Communication becomes your superpower. Writing, speaking, teaching—these channels amplify your influence. New connections form through shared ideas. Travel expands your worldview. Stay curious and open to dialogue.",
    watchFor: "May and November favor announcements",
    luckyColor: "Sky Blue",
    luckyNumber: 5,
    luckyDay: "Wednesday",
    luckySymbol: "💨",
    artSrc: "/horses/windwhisper.png"
  },
  {
    id: "rosegold",
    name: "Rosegold Filly",
    title: "The Beloved",
    theme: "Love & Harmony",
    reading: "Beauty and grace surround you. 2026 strengthens bonds of love and friendship. Your magnetism attracts what you desire. Prioritize self-love first, and watch how others mirror that energy back. Creative and romantic ventures flourish under your gentle power.",
    watchFor: "Valentine's and autumn bring romantic peaks",
    luckyColor: "Rose Gold",
    luckyNumber: 6,
    luckyDay: "Friday",
    luckySymbol: "💕",
    artSrc: "/horses/rosegold.png"
  },
  {
    id: "thunderhoof",
    name: "Thunderhoof",
    title: "The Warrior",
    theme: "Courage & Victory",
    reading: "Your strength is undeniable this year. Challenges that once seemed insurmountable now crumble before your determination. Stand firm in your convictions. Leadership opportunities arise. Your protective nature serves both yourself and your community. Victory is yours.",
    watchFor: "Spring and summer favor bold moves",
    luckyColor: "Steel Gray",
    luckyNumber: 1,
    luckyDay: "Tuesday",
    luckySymbol: "⚡",
    artSrc: "/horses/thunderhoof.png"
  },
  {
    id: "silkroad",
    name: "Silk Road Pony",
    title: "The Traveler",
    theme: "Adventure & Wisdom",
    reading: "The world calls your name. 2026 is a year of expansion through experience. Travel—whether physical, intellectual, or spiritual—becomes your teacher. Embrace foreign concepts and diverse perspectives. Your journey enriches not just you, but all you encounter.",
    watchFor: "June and December favor exploration",
    luckyColor: "Saffron Gold",
    luckyNumber: 12,
    luckyDay: "Thursday",
    luckySymbol: "🗺️",
    artSrc: "/horses/silkroad.png"
  },
  {
    id: "velvet",
    name: "Velvet Noir",
    title: "The Sophisticate",
    theme: "Elegance & Refinement",
    reading: "Grace under pressure defines your year. Cultivate quality over quantity in all areas. Your taste and discernment attract opportunities in art, culture, and high society. Personal style becomes a form of self-expression. Luxury comes through appreciation, not excess.",
    watchFor: "Autumn presents cultural opportunities",
    luckyColor: "Burgundy",
    luckyNumber: 2,
    luckyDay: "Wednesday",
    luckySymbol: "🎭",
    artSrc: "/horses/velvet.png"
  },
  {
    id: "dawn",
    name: "Dawn Breaker",
    title: "The Optimist",
    theme: "Hope & Renewal",
    reading: "Every day is a fresh start. Your infectious optimism lifts spirits wherever you go. 2026 rewards your positive outlook with synchronicities and serendipitous encounters. Health and vitality improve. Your presence is a gift. Keep shining your light.",
    watchFor: "Sunrise hours hold special magic",
    luckyColor: "Coral Pink",
    luckyNumber: 10,
    luckyDay: "Sunday",
    luckySymbol: "🌅",
    artSrc: "/horses/dawn.png"
  }
]

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
    question: "When faced with a crossroads, you tend to...",
    answers: [
      { text: "Trust your gut immediately", scores: { celestial: 1, moonwater: 1, shadow: 1 } },
      { text: "Analyze every possible outcome", scores: { earthbound: 1, velvet: 1, windwhisper: 1 } },
      { text: "Leap before you look", scores: { wildfire: 1, phoenix: 1, thunderhoof: 1 } },
      { text: "Seek advice from trusted sources", scores: { rosegold: 1, silkroad: 1, dawn: 1 } }
    ]
  },
  {
    id: 2,
    question: "Your ideal evening involves...",
    answers: [
      { text: "Deep conversation under the stars", scores: { celestial: 1, windwhisper: 1, shadow: 1 } },
      { text: "An elegant dinner at a new restaurant", scores: { velvet: 1, rosegold: 1, silkroad: 1 } },
      { text: "Dancing until dawn", scores: { wildfire: 1, phoenix: 1, dawn: 1 } },
      { text: "Cozy solitude with a good book", scores: { moonwater: 1, earthbound: 1, thunderhoof: 1 } }
    ]
  },
  {
    id: 3,
    question: "What draws you most to a person?",
    answers: [
      { text: "Their mysterious, enigmatic aura", scores: { shadow: 1, moonwater: 1, velvet: 1 } },
      { text: "Their passion and intensity", scores: { wildfire: 1, phoenix: 1, rosegold: 1 } },
      { text: "Their wisdom and groundedness", scores: { earthbound: 1, silkroad: 1, celestial: 1 } },
      { text: "Their bold confidence", scores: { thunderhoof: 1, windwhisper: 1, dawn: 1 } }
    ]
  },
  {
    id: 4,
    question: "If you could master one skill overnight...",
    answers: [
      { text: "Reading minds or seeing the future", scores: { celestial: 1, shadow: 1, moonwater: 1 } },
      { text: "Speaking every language fluently", scores: { windwhisper: 1, silkroad: 1, velvet: 1 } },
      { text: "Unshakeable physical strength", scores: { thunderhoof: 1, earthbound: 1, wildfire: 1 } },
      { text: "The power to heal others", scores: { rosegold: 1, phoenix: 1, dawn: 1 } }
    ]
  },
  {
    id: 5,
    question: "How do you approach change?",
    answers: [
      { text: "Embrace it as necessary growth", scores: { phoenix: 1, wildfire: 1, dawn: 1 } },
      { text: "Resist at first, then adapt gracefully", scores: { earthbound: 1, velvet: 1, moonwater: 1 } },
      { text: "Lead the change yourself", scores: { thunderhoof: 1, celestial: 1, windwhisper: 1 } },
      { text: "Flow with it naturally", scores: { silkroad: 1, rosegold: 1, shadow: 1 } }
    ]
  },
  {
    id: 6,
    question: "Your personal mantra might be...",
    answers: [
      { text: "Quality over quantity", scores: { velvet: 1, earthbound: 1, moonwater: 1 } },
      { text: "Feel everything deeply", scores: { rosegold: 1, shadow: 1, wildfire: 1 } },
      { text: "The world is my classroom", scores: { silkroad: 1, windwhisper: 1, celestial: 1 } },
      { text: "Fortune favors the bold", scores: { thunderhoof: 1, phoenix: 1, dawn: 1 } }
    ]
  },
  {
    id: 7,
    question: "In your friend group, you're known as...",
    answers: [
      { text: "The wise advisor", scores: { celestial: 1, earthbound: 1, silkroad: 1 } },
      { text: "The life of the party", scores: { wildfire: 1, dawn: 1, windwhisper: 1 } },
      { text: "The mysterious one", scores: { shadow: 1, velvet: 1, moonwater: 1 } },
      { text: "The heart of the group", scores: { rosegold: 1, phoenix: 1, thunderhoof: 1 } }
    ]
  },
  {
    id: 8,
    question: "What kind of art speaks to your soul?",
    answers: [
      { text: "Abstract and thought-provoking", scores: { celestial: 1, shadow: 1, velvet: 1 } },
      { text: "Bold and colorful", scores: { wildfire: 1, phoenix: 1, dawn: 1 } },
      { text: "Romantic and beautiful", scores: { rosegold: 1, moonwater: 1, silkroad: 1 } },
      { text: "Classic and timeless", scores: { earthbound: 1, thunderhoof: 1, windwhisper: 1 } }
    ]
  }
]
