"use client"
import React from "react"

interface LoadingScreenProps {
  loadingProgress: number
}

export default function LoadingScreen({ loadingProgress }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white/20">
        {Math.floor(loadingProgress).toString().padStart(3, "0")}
      </div>
      <div className="w-64 h-px bg-white/20 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-white to-gray-300 transition-all duration-300 ease-out"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>
      <div className="text-xs text-white/40 tracking-[0.5em] mt-8 animate-pulse">LOADING EXPERIENCE</div>
    </div>
  )
}
