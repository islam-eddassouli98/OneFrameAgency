"use client"
import React from "react"

interface AnimatedCursorProps {
  mousePosition: { x: number; y: number }
  heroInView: boolean
}

export default function AnimatedCursor({ mousePosition, heroInView }: AnimatedCursorProps) {
  if (typeof window === "undefined") return null
  return (
    <div
      className="fixed w-8 h-8 pointer-events-none z-50 transition-all duration-300 ease-out"
      style={{
        left: mousePosition.x * 20 + window.innerWidth / 2 - 16,
        top: mousePosition.y * 20 + window.innerHeight / 2 - 16,
        background: `radial-gradient(circle, rgba(255,255,255,${heroInView ? 0.8 : 0.3}) 0%, transparent 70%)`,
        transform: `scale(${1 + Math.abs(mousePosition.x) * 0.5})`,
        borderRadius: "50%",
        filter: "blur(1px)",
      }}
    />
  )
}