"use client"

interface DecorativeFrameProps {
  children: React.ReactNode
}

export default function DecorativeFrame({ children }: DecorativeFrameProps) {
  const inset = "8px"
  const insetSm = "16px"
  const insetLg = "32px"
  const radius = "10px"

  return (
    <div className="relative min-h-screen">
      {/* Parchment texture overlay */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none mix-blend-multiply opacity-70"
        style={{
          backgroundImage: "url('/images/parchment-texture.png')",
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Clipping mask - content outside the border is hidden on scroll */}
      <div
        className="fixed z-30"
        style={{
          top: inset,
          left: inset,
          right: inset,
          bottom: inset,
          borderRadius: radius,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {/* This empty div creates the clipping region - nothing renders here,
            but the overflow:hidden clips any fixed children that overflow */}
      </div>

      {/* Outer mask - covers the area OUTSIDE the border to clip scroll bleed */}
      {/* Top strip */}
      <div className="fixed top-0 left-0 right-0 z-35 pointer-events-none bg-[#F5EDE0]" style={{ height: inset }} />
      {/* Bottom strip */}
      <div className="fixed bottom-0 left-0 right-0 z-35 pointer-events-none bg-[#F5EDE0]" style={{ height: inset }} />
      {/* Left strip */}
      <div className="fixed top-0 left-0 bottom-0 z-35 pointer-events-none bg-[#F5EDE0]" style={{ width: inset }} />
      {/* Right strip */}
      <div className="fixed top-0 right-0 bottom-0 z-35 pointer-events-none bg-[#F5EDE0]" style={{ width: inset }} />

      {/* Elegant thin border - on top of the mask strips */}
      <div
        className="fixed z-40 pointer-events-none"
        style={{
          top: inset,
          left: inset,
          right: inset,
          bottom: inset,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            borderRadius: radius,
            border: "3px solid #7a0c1e",
            boxShadow: "inset 0 0 0 1px rgba(139, 30, 50, 0.3)",
          }}
        />
      </div>

      {/* Page content */}
      {children}
    </div>
  )
}
