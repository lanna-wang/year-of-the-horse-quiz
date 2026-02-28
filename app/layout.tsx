import React from "react"
import type { Metadata } from 'next'
import { Faculty_Glyphic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _facultyGlyphic = Faculty_Glyphic({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: 'Year of the Horse Quiz',
  description: 'Discover your fortune with your personal horse-oscope for 2026 by Lanna',
  generator: 'v0.app',
  openGraph: {
    title: 'Year of the Horse Quiz',
    description: 'Your 2026 Horse-oscope Awaits',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Year of the Horse - Your 2026 Horse-oscope Awaits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Year of the Horse Quiz',
    description: 'Your 2026 Horse-oscope Awaits',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
