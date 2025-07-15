'use client'

import { useState, useEffect, useRef } from "react"
import LoadingScreen from "@/components/LoadingScreen"
import IntroAnimation from "@/components/IntroAnimation"
import AnimatedCursor from "@/components/AnimatedCursor"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import StatsSection from "@/components/StatsSection"
import PortfolioSection from "@/components/PortfolioSection"
import ServicesSection from "@/components/ServicesSection"
import CtaSection from "@/components/CtaSection"
import Footer from "@/components/Footer"

import "@/styles/animations.css"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [introComplete, setIntroComplete] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const [heroInView, setHeroInView] = useState(false)

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval)
          setTimeout(() => {
            setIsLoading(false)
            setTimeout(() => setIntroComplete(true), 2000)
          }, 500)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)

    const handleScroll = () => {
      if (!introComplete) return
      setScrollY(window.scrollY)
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setHeroInView(rect.bottom > 0 && rect.top < window.innerHeight)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!introComplete) return
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    if (introComplete) {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        if (el.id) observer.observe(el)
      })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearInterval(loadingInterval)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
    }
  }, [introComplete])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {isLoading && <LoadingScreen loadingProgress={loadingProgress} />}
      {!isLoading && !introComplete && <IntroAnimation />}
      <div
        className={`transition-all duration-1000 ${introComplete ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <AnimatedCursor mousePosition={mousePosition} heroInView={heroInView} />
        <Header introComplete={introComplete} />
        <HeroSection
          ref={heroRef}
          scrollY={scrollY}
          mousePosition={mousePosition}
          introComplete={introComplete}
        />
        <PortfolioSection scrollY={scrollY} isVisible={isVisible} />
        <StatsSection scrollY={scrollY} mousePosition={mousePosition} isVisible={isVisible} />
        <ServicesSection scrollY={scrollY} mousePosition={mousePosition} isVisible={isVisible} />
        <CtaSection scrollY={scrollY} mousePosition={mousePosition} />
        <Footer />
      </div>
    </div>
  )
}
