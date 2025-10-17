// === components/CtaSection.tsx ===
"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

interface CtaSectionProps {
  scrollY: number
  mousePosition: { x: number; y: number }
}

export default function CtaSection({ scrollY, mousePosition }: CtaSectionProps) {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div style={{ transform: `translateY(${scrollY * 0.05}px) scale(${1 - scrollY * 0.0001})` }}>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">PRONTO A VENDERE</span>
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white"
              style={{
                backgroundSize: `${200 + Math.abs(mousePosition.x) * 100}% 100%`,
                backgroundPosition: `${50 + mousePosition.x * 50}% 50%`,
              }}
            >
              DI PIÙ?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Inizia oggi stesso il tuo progetto fotografico.
            <br />
            <span className="text-white font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Preventivo gratuito in 24h.
            </span>
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-gradient-to-r from-white to-gray-200 text-black font-bold px-12 py-6 text-xl hover:scale-105" asChild>
              <Link href="/contatti#contact-form-card">
                INIZIA PROGETTO
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
