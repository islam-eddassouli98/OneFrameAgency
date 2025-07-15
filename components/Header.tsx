"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, Menu, X } from "lucide-react"

interface HeaderProps {
  scrollY: number
  introComplete: boolean
}

export default function Header({ scrollY, introComplete }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navLinks = ["HOMEPAGE", "SERVIZI", "PROCESSO", "CONTATTI"]

  return (
    <header className="fixed top-0 z-40 w-full">
      <div
        className="backdrop-blur-2xl bg-black/20 border-b border-white/5"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,${0.3 + scrollY * 0.001}) 0%, rgba(0,0,0,${0.1 + scrollY * 0.0005}) 100%)`,
        }}
      >
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative">
            <div
              className="relative transition-transform duration-500 ease-out"
              style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
            >
              <Camera
                className={`text-white group-hover:scale-110 transition-transform duration-300 ${
                  introComplete ? "h-10 w-10" : "h-0 w-0"
                }`}
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-white to-gray-300 rounded-full animate-pulse" />
            </div>
            <div
              className={`transition-all duration-500 ease-out ${
                introComplete ? "opacity-100 transform-none" : "opacity-0 transform scale-0"
              }`}
            >
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ONEFRAME
              </span>
              <div className="text-xs text-gray-400 tracking-[0.3em] font-light">ECOMMERCE STUDIO</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className={`hidden md:flex items-center space-x-12 transition-all duration-700 delay-300 ${
              introComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {navLinks.map((item, index) => (
              <Link
                key={item}
                href={item === "HOMEPAGE" ? "/" : `${item.toLowerCase()}`}
                className="text-sm font-medium tracking-[0.2em] hover:text-gray-300 transition-all duration-300 relative group overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: `translateY(${scrollY * 0.01}px)`,
                }}
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Button
              className={`bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-white font-bold tracking-wide transition-all duration-700 delay-500 hover:scale-105 ${
                introComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              INIZIA PROGETTO
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white transition-transform"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile drawer */}
{mobileMenuOpen && (
  <>
    {/* Blur background */}
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-opacity duration-300"
      onClick={() => setMobileMenuOpen(false)}
    />

    {/* Drawer */}
    <div className="fixed top-0 right-0 z-50 h-screen w-full sm:max-w-xs bg-zinc-950/95 backdrop-blur-xl border-l border-white/10 flex flex-col shadow-xl transition-transform duration-300">
      {/* Header with close */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <span className="text-lg font-semibold text-white tracking-wide">MENU</span>
        <button onClick={() => setMobileMenuOpen(false)} className="text-white">
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Links */}
      <nav className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {navLinks.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium tracking-wide text-white/90 hover:text-white transition"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="px-6 py-6 border-t border-white/10">
        <Button className="w-full bg-gradient-to-r from-white to-gray-200 text-black font-bold">
          INIZIA PROGETTO
        </Button>
      </div>
    </div>
  </>
)}
      </div>
    </header>
  )
}
