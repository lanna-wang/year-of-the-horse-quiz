export interface Horse {
  id: string
  name: string
  title: string
  titleSrc: string
  theme: string
  reading: string
  watchFor: string
  lucky: {
    color: string
    number: number
  }
  artSrc: string
  shareCardSrc: string
}

export const horses: Horse[] = [
  {
    id: "chess",
    name: "Chess Piece Horse",
    title: "The Strategist",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20strategist%20text-LQpbSeCsVZL02nxuOgcw6FniXZMMYH.svg",
    theme: "Measured foresight",
    reading: "You move through 2026 with foresight and restraint. While others rush, you read the board with quiet confidence. This year rewards patience, precision, and long-range thinking. Your timing, at last, is perfectly aligned.",
    watchFor: "Waiting too long once the path is already clear.",
    lucky: {
      color: "Graphite pearl (gray)",
      number: 4
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20chess-XewICheHbY9lCwqEjJkbjqrB8ozoDa.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20strategist-YAEuZlxsR1Fq1ziVEA9kJYCgQitdsJ.png"
  },
  {
    id: "bauhaus",
    name: "Bauhaus Horse",
    title: "The Thinker",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20thinker%20text-AivcSo6cUsOOpzTex3WmCI7k4YEYec.svg",
    theme: "Elegant alignment",
    reading: "Clarity becomes your greatest gift in 2026. When you simplify, momentum flows naturally. Structure does not confine you this year; it liberates you to move with quiet confidence and intention.",
    watchFor: "Mistaking rigidity for discipline.",
    lucky: {
      color: "Sapphire (blue)",
      number: 3
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20bauhaus-cwWB8S8r5OOSzpTv9FXWmHIFdjPJAu.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20thinker-bACA5lsCjer03DpFN82bJwaigNT8KB.png"
  },
  {
    id: "abstract",
    name: "Abstract Horse",
    title: "The Minimalist",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20minimalist%20text-h6Mr9j8kovS6wHD8f31jjEfjyPuqjq.svg",
    theme: "Spacious calm",
    reading: "2026 invites you to choose less and receive more. Peace sharpens your vision, and simplicity reveals what truly matters. You move through this year gently, yet decisively.",
    watchFor: "Emotionally withdrawing instead of engaging.",
    lucky: {
      color: "Forest jade (green)",
      number: 2
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20green-D8EeDCBaBhntIWpCizEIBDe8cJfFTb.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20minimalist-wADWw8oFabrSQ0LKdv1xGL07G3aGO0.png"
  },
  {
    id: "papercut",
    name: "Paper Cut Horse",
    title: "The Traditionalist",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20traditionalist%20text-YxOzrXrkBgdzOOhAlyABvaXPQJU1RX.svg",
    theme: "Rooted abundance",
    reading: "Your strength in 2026 springs from honoring what came before. Ritual, consistency, and intention become your anchors. By staying grounded in tradition, you quietly attract stability and fortune.",
    watchFor: "Resisting necessary change out of habit.",
    lucky: {
      color: "Vermillion (red)",
      number: 8
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20paper%20cut-Ioh1ueMKW2nT5ONgSFv2XyEha1GNHm.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20traditionalist-jei5MniaXOuqvAW4wDNZy9v5gOINb5.png"
  },
  {
    id: "cartoony",
    name: "Funny / Cartoony Horse",
    title: "The Jester",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20jester%20text-idMB3do2v9DyHgeUJ4NY5kxlbXFL5T.svg",
    theme: "Shared delight",
    reading: "Your laughter is sacred medicine this year. You bring levity where it's needed, ease tension that weighs on others, and reconnect people to joy. Your gift becomes currency, multiplying with every shared smile.",
    watchFor: "Using humor to avoid difficult feelings.",
    lucky: {
      color: "Saffron (golden yellow)",
      number: 5
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20funny-bOx3qqqXBVT4d3xWLHmaZgH68Po6q8.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20jester-xG5KGNGTDnFxgzJvEoVYnttcXiuAQV.png"
  },
  {
    id: "rocking",
    name: "Rocking Horse",
    title: "The Haven",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20haven%20text-66P4sAIf8hCErJH4icre5PAwoZgajq.svg",
    theme: "Emotional security",
    reading: "2026 honors what feels familiar and safe. You become a steady presence, grounding for yourself and those around you. Stability does not halt your growth; it becomes the foundation from which you flourish.",
    watchFor: "Staying comfortable when growth is calling.",
    lucky: {
      color: "Mahogany (rich brown)",
      number: 6
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20rocking%20horse-0LMtZLSctxt3qkvG2QI2DJKIg48eeS.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20haven-xS3GhhNM2F7Z20HI9p0mX7Tj84z4bZ.png"
  },
  {
    id: "carousel",
    name: "Carousel Horse",
    title: "The Romantic",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20romantic%20text-fIKqMUsopNBdFd4MvjqO0CvSan5uA0.svg",
    theme: "Enchanted moments",
    reading: "Beauty, ceremony, and delight compose the texture of your year. You are invited to lean into wonder and allow yourself to be moved. Love, art, and joy arrive when your heart remains open.",
    watchFor: "Idealizing moments instead of living them.",
    lucky: {
      color: "Fuchsia (hot pink)",
      number: 7
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20carousel-dWunYdtvVGkjyVdcCftWHFpMIvgr9h.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20carousel-dWunYdtvVGkjyVdcCftWHFpMIvgr9h.png"
  },
  {
    id: "folk",
    name: "Folk Horse",
    title: "The Hearth",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20hearth%20text-aQjw3GE79MFg91IZp2AjUHWZ83ZcRj.svg",
    theme: "Steady devotion",
    reading: "Slow, intentional work brings lasting rewards in 2026. Your patience compounds quietly beneath the surface, and your care creates resilience. Everything you build this year is meant to endure.",
    watchFor: "Giving too much without replenishing yourself.",
    lucky: {
      color: "Indigo (deep blue-purple)",
      number: 9
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20folk-zBBLkkRCjAHUD9Pc45eA8kkCwrPDuY.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20hearth-QZMn6W1XrGAtaDEAG5r8MiXpulYgyY.png"
  },
  {
    id: "pixel",
    name: "Pixel Horse",
    title: "The Navigator",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20navigator%20text-robxPFxGrN9uWbcut8jj7gaGl1zCSM.svg",
    theme: "Digital momentum",
    reading: "2026 flows through your fingertips with electric certainty. You move at the speed of connection, sensing trends before they crest. Your instinct for what's next is your truest superpower. This year belongs to those who dare lead the pulse.",
    watchFor: "Moving so fast you miss the meaning beneath the moment.",
    lucky: {
      color: "Champagne (pale gold)",
      number: 11
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20pixel-QZy7ktpSWxhjvKvMfwq6jpQbrG9ZZy.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20navigator-K7hM4MztAthdnai0qauZDqTSPRYDk7.png"
  },
  {
    id: "whimsical",
    name: "Whimsical Horse",
    title: "The Dreamer",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20dreamer%20text-7uoo1QoBYxvj3J5DGcIXJByS80XRIC.svg",
    theme: "Gentle expansion",
    reading: "Magic arrives softly in 2026, carried on chance encounters and quiet affirmations. When you trust in possibility, doors open gently, without force. Wonder is simply waiting for your belief.",
    watchFor: "Drifting when grounding is needed.",
    lucky: {
      color: "Amethyst (light purple)",
      number: 10
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20whimsical-AzZgUuGXcxnSlW5Yl77chQ4rLo36MD.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20dreamer-r60M6XDYzdUYZPdR8AwgWqcz2HaDMC.png"
  },
  {
    id: "war",
    name: "War Horse",
    title: "The Steadfast",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20steadfast%20text-fCiXNFDQNzqUyNxcch1rGbhh77HJw6.svg",
    theme: "Transformative truth",
    reading: "This year carries shedding and renewal in its current. You will be asked to face what is real, and in that facing, you emerge clearer, stronger, and more beautifully aligned with your truth.",
    watchFor: "Lingering in heaviness after the lesson is learned.",
    lucky: {
      color: "Terracotta (burnt orange)",
      number: 13
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20war-YgpBxK77bM3lzQofUs9ahfUWo3VDrU.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20steadfast-P9QPhIAWMA1AdIZijhbZJQWuIxZizy.png"
  },
  {
    id: "ink",
    name: "Chinese Ink Painting Horse",
    title: "The Force",
    titleSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20force%20text-vKN1oMlgMZjQWVvFwUVTDnigO0CWxX.svg",
    theme: "Decisive motion",
    reading: "Momentum bends toward you in 2026. When you act from instinct, breakthroughs inevitably follow. Movement becomes your native tongue, expressive and powerful, utterly unmistakable.",
    watchFor: "Rushing without direction.",
    lucky: {
      color: "Alabaster (off-white)",
      number: 1
    },
    artSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/year%20of%20the%20horse%20card%20-%20ink%20horse-vCmk4TGhZIZZNyAm0jAH6zRh10vjBs.png",
    shareCardSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/the%20force-7zKMTqAaNFmQc3fPgyWwMPcPSApArM.png"
  }
]
