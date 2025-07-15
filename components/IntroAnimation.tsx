// === components/IntroAnimation.tsx ===
"use client"
import { Camera } from "lucide-react"
import React from "react"

export default function IntroAnimation() {
  return (
    <div className="fixed inset-0 z-[90] bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: "100px 100px, 150px 150px",
          animation: "pulse 3s ease-in-out infinite",
        }}
      />
      <div className="relative z-10 text-center">
        <div className="transform transition-all duration-2000 ease-out" style={{ animation: "logoIntro 2s ease-out forwards" }}>
          <div className="flex items-center justify-center mb-8">
            <Camera
              className="text-white"
              style={{ width: "120px", height: "120px", animation: "iconSpin 2s ease-out forwards" }}
            />
          </div>
          <h1 className="font-black tracking-tighter bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
            style={{ fontSize: "clamp(4rem, 15vw, 12rem)", lineHeight: "0.8", animation: "textReveal 2s ease-out forwards" }}>
            ONEFRAME
          </h1>
          <div className="text-gray-400 tracking-[0.5em] mt-6 opacity-0"
            style={{ fontSize: "clamp(0.8rem, 2vw, 1.2rem)", animation: "subtitleFade 1s ease-out 1s forwards" }}>
            ECOMMERCE AGENCY
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-white to-transparent opacity-0"
            style={{ animation: "lineGrow 1.5s ease-out 0.5s forwards" }}
          />
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ animation: "lineGrow 1.5s ease-out 0.8s forwards" }}
          />
        </div>
      </div>
    </div>
  )
}
