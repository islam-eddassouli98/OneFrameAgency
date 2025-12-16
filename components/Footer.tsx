// === components/Footer.tsx ===
"use client"
import React from "react"
import Image from "next/image"
import { Instagram, Linkedin, Mail, Phone, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Footer() {
  return (
    <footer id="contatti" className="py-20 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="OneFrame Agency Logo"
                width={140}
                height={140}
                className="h-20 w-auto md:h-24 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Qualità costante, standard elevati, pensati per vendere.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 hover:bg-white hover:text-black bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110"
                asChild
              >
                <Link href="https://www.instagram.com/oneframeagency" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 hover:bg-white hover:text-black bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110"
                asChild
              >
                <Link href="https://www.linkedin.com/company/oneframe-agency/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 hover:bg-white hover:text-black bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-110"
                asChild
              >
                <Link href="mailto:contact@oneframeagency.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
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
                +39 3341960682
              </li>
              <li className="flex items-center hover:text-white transition-colors duration-300">
                <Mail className="h-4 w-4 mr-3" />
                contact@oneframeagency.com
              </li>
              <li className="flex items-center hover:text-white transition-colors duration-300">
                <ShoppingBag className="h-4 w-4 mr-3" />
                <Link 
                  href="https://maps.app.goo.gl/vffR7MtS67QmSZ4h9?g_st=ipc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  San Marcellino (CE), Italia
                </Link>
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
