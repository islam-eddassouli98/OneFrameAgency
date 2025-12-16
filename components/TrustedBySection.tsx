"use client"

import React from "react"
import Image from "next/image"
import "@/styles/animations.css"

const logos = [
  "/just-cavalli-logo.png",
  "/John-Richmond-logo.png",
  "/north-sails-logo.png",
  "/trussardi-logo.png",
  "/Silvian Heach_idSsaWyj_Z_0.png",
]

export default function TrustedBySection() {
  // Duplico i loghi per creare un loop infinito
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-16 md:py-24 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-gray-400 uppercase mb-2">
            Trusted by
          </h2>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="trusted-by-slider">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
                style={{ width: "200px" }}
              >
                <div 
                  className="relative w-full h-20 md:h-24 transition-all duration-300 opacity-80 hover:opacity-100"
                  style={{ filter: 'brightness(0) invert(1)' }}
                >
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

