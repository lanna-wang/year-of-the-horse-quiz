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

      // Create an image element to load the original
      const img = new Image()
      img.crossOrigin = "anonymous"
      
      const imageLoaded = new Promise<void>((resolve, reject) => {
        img.onload = () => resolve()
        img.onerror = reject
      })
      
      img.src = URL.createObjectURL(blob)
      await imageLoaded

      // Resize for mobile-optimized download (max 1080px width for Instagram stories)
      const maxWidth = 1080
      const scale = Math.min(1, maxWidth / img.width)
      const newWidth = Math.round(img.width * scale)
      const newHeight = Math.round(img.height * scale)

      // Create canvas and draw resized image
      const canvas = document.createElement("canvas")
      canvas.width = newWidth
      canvas.height = newHeight
      const ctx = canvas.getContext("2d")
      
      if (ctx) {
        // Enable image smoothing for better quality
        ctx.imageSmoothingEnabled = true
        ctx.imageSmoothingQuality = "high"
        ctx.drawImage(img, 0, 0, newWidth, newHeight)
      }

      // Convert to optimized JPEG (smaller file size than PNG)
      const optimizedBlob = await new Promise<Blob>((resolve) => {
        canvas.toBlob(
          (b) => resolve(b || blob),
          "image/jpeg",
          0.85 // Quality setting for good balance of size/quality
        )
      })

      // Clean up the object URL from loading
      URL.revokeObjectURL(img.src)

      // Create download link
      const url = URL.createObjectURL(optimizedBlob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${horse.title.toLowerCase().replace(/\s+/g, "-")}-horse-oscope.jpg`
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
