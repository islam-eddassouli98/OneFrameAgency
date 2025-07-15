// === components/Footer.tsx ===
"use client"
import React from "react"
import { Camera, Instagram, Linkedin, Mail, Phone, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FooterProps {
  scrollY: number
}

export default function Footer({ scrollY }: FooterProps) {
  return (
    <footer id="contatti" className="py-20 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Camera className="h-10 w-10 text-white" />
              <div>
                <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ONEFRAME
                </span>
                <div className="text-xs text-gray-400 tracking-[0.3em] font-light">ECOMMERCE AGENCY</div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Studio fotografico specializzato in ecommerce. Trasformiamo i tuoi prodotti in bestseller con foto che convertono.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Linkedin, Mail].map((Icon, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="border-white/20 hover:bg-white hover:text-black bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 tracking-[0.1em]">SERVIZI</h3>
            <ul className="space-y-3 text-gray-400">
              {["Product Photography", "Lifestyle Shots", "360° Photography", "Video Products"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 tracking-[0.1em]">CONTATTI</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center hover:text-white transition-colors duration-300">
                <Phone className="h-4 w-4 mr-3" />
                +39 02 1234 5678
              </li>
              <li className="flex items-center hover:text-white transition-colors duration-300">
                <Mail className="h-4 w-4 mr-3" />
                hello@oneframeagency.com
              </li>
              <li className="flex items-center hover:text-white transition-colors duration-300">
                <ShoppingBag className="h-4 w-4 mr-3" />
                Milano, Italia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} OneFrame Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
