"use client"
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Zap, TrendingUp } from "lucide-react"

interface ServicesSectionProps {
  scrollY: number
  mousePosition: { x: number; y: number }
  isVisible: { [key: string]: boolean }
}
export default function ServicesSection({ scrollY, mousePosition, isVisible }: ServicesSectionProps) {
    const services = [
      {
        icon: <Package className="h-12 w-12" />,
        title: "PRODUCT PHOTOGRAPHY",
        description:
          "Still-life,ambientate o 360°, ottimizzate per qualsiasi marketplace e piattaforma e-commerce.",
        features: ["Sfondo bianco professionale", "Lifestyle shots", "Foto 360° interattive", "Ritocco avanzato"],
        gradient: "from-blue-500/10 to-purple-500/10",
      },
      {
        icon: <Zap className="h-12 w-12" />,
        title: "SHOOTING EXPRESS",
        description:
          "Servizio express per grandi volumi. Consegna rapida garantita,ideale per lanci,restock o collezioni last-minute",
        features: ["Setup multipli attivi", "Consegna 24h", "Ottimizzazione batch automatica"],
        gradient: "from-yellow-500/10 to-orange-500/10",
      },
      {
        icon: <TrendingUp className="h-12 w-12" />,
        title: "CONVERSION OPTIMIZATION",
        description: "Foto che fanno vendere.E vendere meglio",
        features: ["A/B testing visivo", "Analisi performance", "Ottimizzazione SEO", "Report dettagliati"],
        gradient: "from-green-500/10 to-emerald-500/10",
      },
    ]
  
    return (
      <section id="servizi" data-reveal className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-20 transform transition-all duration-1000 ease-out ${
              isVisible.servizi ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ transform: `translateY(${scrollY * 0.03}px)` }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              SERVIZI
              <span className="block text-2xl md:text-3xl text-gray-400 font-normal tracking-[0.2em] mt-4">
                Tutto quello che serve al tuo ecommerce
              </span>
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-700 group relative overflow-hidden transform ${
                  isVisible.servizi ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{
                  transform: `translateY(${isVisible.servizi ? scrollY * 0.02 * (index + 1) : 20}px)
                    rotateY(${mousePosition.x * 3}deg)
                    rotateX(${mousePosition.y * 2}deg)`,
                  transformStyle: "preserve-3d",
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="p-0 relative z-10">
                  <div className="text-white mb-6 group-hover:scale-110 transition-all duration-500" style={{ transform: `translateZ(20px)` }}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ transform: `translateZ(15px)` }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300" style={{ transform: `translateZ(10px)` }}>
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8" style={{ transform: `translateZ(5px)` }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-white to-gray-300 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* <div className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" style={{ transform: `translateZ(10px)` }}>
                    {service.price}
                  </div> */}
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white hover:text-black bg-transparent transition-all duration-300 hover:scale-105" style={{ transform: `translateZ(15px)` }}>
                    RICHIEDI PREVENTIVO
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }