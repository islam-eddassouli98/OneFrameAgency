"use client"
import React from "react"
import { useHydration } from "@/lib/use-hydration"

interface AnimatedCursorProps {
  mousePosition: { x: number; y: number }
  heroInView: boolean
}

export default function AnimatedCursor({ mousePosition, heroInView }: AnimatedCursorProps) {
  const isHydrated = useHydration()

  if (!isHydrated || typeof window === "undefined") return null

  // Controlla per valori infiniti o NaN
  const x = isFinite(mousePosition.x) ? mousePosition.x : 0
  const y = isFinite(mousePosition.y) ? mousePosition.y : 0

  return (
    <div
      className="fixed w-8 h-8 pointer-events-none z-50 transition-all duration-300 ease-out"
      style={{
        left: x * 20 + window.innerWidth / 2 - 16,
        top: y * 20 + window.innerHeight / 2 - 16,
        background: `radial-gradient(circle, rgba(255,255,255,${heroInView ? 0.8 : 0.3}) 0%, transparent 70%)`,
        transform: `scale(${1 + Math.abs(x) * 0.5})`,
        borderRadius: "50%",
        filter: "blur(1px)",
      }}
    />
  )
}