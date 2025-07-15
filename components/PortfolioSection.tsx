// === components/PortfolioSection.tsx ===
"use client"
import React from "react"

interface PortfolioSectionProps {
  scrollY: number
  isVisible: { [key: string]: boolean }
}

export default function PortfolioSection({ scrollY, isVisible }: PortfolioSectionProps) {
  return (
    <section id="portfolio" data-reveal className="py-32 relative">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ease-out ${
            isVisible.portfolio ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            PORTFOLIO
            <span className="block text-2xl md:text-3xl text-gray-400 font-normal tracking-[0.2em] mt-4">
              Prodotti che convertono
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}