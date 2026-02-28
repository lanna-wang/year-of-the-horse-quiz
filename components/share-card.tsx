"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import type { Horse } from "@/data/results"
import { Download } from "lucide-react"

interface ShareCardProps {
  horse: Horse
}

export default function ShareCard({ horse }: ShareCardProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadImage = async () => {
    setIsDownloading(true)

    try {
      // Fetch the pre-made share card image
      const response = await fetch(horse.shareCardSrc)
      const blob = await response.blob()

      // Create download link
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${horse.title.toLowerCase().replace(/\s+/g, "-")}-horse-oscope.png`
      link.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("[v0] Error downloading image:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="space-y-10">
      {/* Preview of the share card image */}
      <div className="flex justify-center">
        <div className="w-full max-w-xs sm:max-w-sm rounded-lg overflow-hidden shadow-lg">
          <img 
            src={horse.shareCardSrc}
            alt={`${horse.title} share card`}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Button
          onClick={downloadImage}
          disabled={isDownloading}
          size="lg"
          className="w-full sm:w-auto px-6 py-5 text-sm tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
        >
          <Download className="w-4 h-4" />
          {isDownloading ? "Downloading..." : "Download image"}
        </Button>
      </div>
    </div>
  )
}
