// Ultimo blocco dei componenti

// === components/StatsSection.tsx ===
"use client"
import React from "react"

interface StatsSectionProps {
  scrollY: number
  mousePosition: { x: number; y: number }
  isVisible: { [key: string]: boolean }
}

export default function StatsSection({ scrollY, mousePosition, isVisible }: StatsSectionProps) {
  const stats = [
    { number: "2000+", label: "PRODOTTI FOTOGRAFATI", delay: 0 },
    { number: "+150%", label: "AUMENTO CONVERSIONI", delay: 100 },
    { number: "24H", label: "CONSEGNA EXPRESS", delay: 200 },
    { number: "99%", label: "CLIENTI SODDISFATTI", delay: 300 },
  ]

  return (
    <section id="stats" data-reveal className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-1000 ease-out ${
                isVisible.stats ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{
                transform: `translateY(${isVisible.stats ? scrollY * 0.05 * (index + 1) : 20}px)
                  rotateY(${mousePosition.x * 5}deg)
                  rotateX(${mousePosition.y * 3}deg)`,
                transformStyle: "preserve-3d",
                transitionDelay: `${stat.delay}ms`,
              }}
            >
              <div
                className="text-5xl md:text-6xl font-black mb-4 group-hover:scale-110 transition-all duration-500 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"
                style={{ textShadow: `0 0 30px rgba(255,255,255,${0.3 + Math.abs(mousePosition.x) * 0.2})` }}
              >
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 tracking-[0.3em] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}