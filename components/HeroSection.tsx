// === components/HeroSection.tsx ===
"use client"
import React, { forwardRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

interface HeroSectionProps {
  scrollY: number
  mousePosition: { x: number; y: number }
  introComplete: boolean
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(({ scrollY, mousePosition, introComplete }, ref) => {
  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Badge */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 transition-all duration-1000 delay-700">
        <div className="mb-8 transform transition-all duration-1000 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.1}px) scale(${1 - scrollY * 0.0002})`,
            opacity: Math.max(0, 1 - scrollY * 0.002),
          }}>
          <Badge
            variant="outline"
            className="border-white/20 text-white bg-white/5 backdrop-blur-xl mb-6 px-8 py-3 text-sm tracking-[0.2em] hover:bg-white/10 transition-all duration-300"
            style={{ boxShadow: `0 0 30px rgba(255,255,255,${0.1 + Math.abs(mousePosition.x) * 0.1})` }}
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            ECOMMERCE PHOTOGRAPHY STUDIO
          </Badge>
        </div>

        <div className="space-y-6 transform transition-all duration-1000 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.05}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.001),
          }}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter">
            <span
              className="block transform transition-all duration-700 ease-out"
              style={{
                transform: `translateX(${mousePosition.x * 20}px)`,
                textShadow: `${mousePosition.x * 5}px ${mousePosition.y * 5}px 20px rgba(0,0,0,0.5)`
              }}
            >
              PRODOTTI
            </span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white transform transition-all duration-700 ease-out"
              style={{
                transform: `translateX(${mousePosition.x * -15}px)`,
                backgroundSize: `${200 + Math.abs(mousePosition.x) * 100}% 100%`,
                backgroundPosition: `${50 + mousePosition.x * 50}% 50%`,
              }}
            >
              CHE VENDONO
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transform transition-all duration-500 ease-out"
            style={{
              transform: `translateY(${mousePosition.y * 10}px)`,
              opacity: 0.8 + Math.abs(mousePosition.y) * 0.2,
            }}
          >
            Shooting fotografici che trasformano i tuoi prodotti in bestseller.
            <br />
            <span className="text-white font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Più conversioni. Più vendite. Più successo.
            </span>
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12 transform transition-all duration-1000 ease-out"
          style={{
            transform: `translateY(${-scrollY * 0.02}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.0015),
          }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-white font-bold px-8 py-4 text-lg group relative overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ boxShadow: `0 10px 40px rgba(255,255,255,${0.2 + Math.abs(mousePosition.x) * 0.1})` }}
          >
            <span className="relative z-10 flex items-center">
              VEDI PORTFOLIO
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-xl font-bold px-8 py-4 text-lg group relative overflow-hidden transition-all duration-300 hover:scale-105"
            style={{ boxShadow: `0 10px 40px rgba(255,255,255,${0.1 + Math.abs(mousePosition.y) * 0.1})` }}
          >
            <span className="relative z-10">PREVENTIVO GRATUITO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = "HeroSection"
export default HeroSection
