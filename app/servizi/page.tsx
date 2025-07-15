"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Camera, Mail, Bell, CheckCircle } from "lucide-react"
import { useState } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ServiziPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)


  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Header */}
      <Header introComplete={true} />

      {/* Main Coming Soon Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px, 150px 150px",
          }}
        />

        <div className="text-center max-w-2xl mx-auto px-4 relative z-10">
          {/* Animated Logo */}
          <div className="mb-12">
            <div className="relative inline-block">
              <Camera
                className="h-24 w-24 md:h-32 md:w-32 text-white mx-auto"
                style={{
                  animation: "spin 8s linear infinite",
                }}
              />
              <div className="absolute -top-2 -right-2 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          {/* Brand Name */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4">
              ONEFRAME
            </h1>
            <div className="text-sm md:text-base text-gray-400 tracking-[0.3em] font-light mb-6">ECOMMERCE AGENCY</div>
          </div>

          {/* Coming Soon Message */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">COMING SOON</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Stiamo preparando qualcosa di straordinario per i tuoi prodotti.
              <br />
              <span className="text-white font-semibold">Servizi fotografici rivoluzionari in arrivo!</span>
            </p>
          </div>

          {/* Email Subscription */}
          <div className="max-w-md mx-auto mb-8">
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="la-tua-email@esempio.com"
                  required
                  className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:bg-white/10 transition-all duration-300 text-center"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white text-black font-bold py-3 transition-all duration-300 hover:scale-105"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  AVVISAMI QUANDO È PRONTO
                </Button>
              </form>
            ) : (
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-center">
                <CheckCircle className="h-8 w-8 text-white mx-auto mb-3" />
                <p className="text-white font-semibold text-lg">Perfetto! Ti avviseremo appena saremo pronti! 🎉</p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">Nel frattempo, puoi contattarci per informazioni</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300"
                onClick={() => window.open("/contatti")}
              >
                <Mail className="h-4 w-4 mr-2" />
                CONTATTACI
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300"
                onClick={() => window.open("/")}
              >
                TORNA AL SITO
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer  />

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
