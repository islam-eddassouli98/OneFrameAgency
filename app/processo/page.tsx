"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  Package,
  Settings,
  CheckCircle,
  Cloud,
  ArrowRight,
  ArrowDown,
  Clock,
  Monitor,
  Truck,
} from "lucide-react"
import { useEffect, useState, useRef } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"


export default function ProcessoPage() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const [activeStep, setActiveStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  const timelineRef = useRef<HTMLDivElement>(null)

  const processSteps = [
    {
      id: 1,
      title: "INVIO PRODOTTI",
      subtitle: "O consegna in sede",
      description:
        "Invii i tuoi prodotti tramite corriere espresso o li consegni direttamente nel nostro studio. Ogni prodotto viene catalogato e preparato per il shooting.",
      icon: <Package className="h-6 w-6 md:h-8 md:w-8" />,
      details: [
        "Ritiro gratuito in tutta Italia",
        "Imballaggio sicuro e tracciato",
        "Catalogazione prodotti",
        "Controllo qualità iniziale",
      ],
      duration: "1-2 giorni",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      title: "ORGANIZZAZIONE",
      subtitle: "Set, produzione, styling",
      description:
        "Il nostro team creativo organizza il set fotografico, prepara l'illuminazione e definisce lo styling più adatto per ogni prodotto.",
      icon: <Settings className="h-6 w-6 md:h-8 md:w-8" />,
      details: [
        "Setup illuminazione professionale",
        "Preparazione backgrounds",
        "Styling e composizione",
        "Briefing team creativo",
      ],
      duration: "2-4 ore",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 3,
      title: "SCATTO STUDIO",
      subtitle: "Con team dedicato",
      description:
        "Sessione fotografica professionale con il nostro team specializzato. Ogni prodotto viene fotografato da multiple angolazioni.",
      icon: <Camera className="h-6 w-6 md:h-8 md:w-8" />,
      details: [
        "Fotografo specializzato ecommerce",
        "Multiple angolazioni",
        "Foto lifestyle e dettaglio",
        "Controllo qualità in tempo reale",
      ],
      duration: "4-8 ore",
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      id: 4,
      title: "POST-PRODUZIONE",
      subtitle: "E controllo qualità",
      description:
        "Ritocco professionale delle immagini, correzione colori, rimozione imperfezioni e ottimizzazione per tutti i canali di vendita online.",
      icon: <Monitor className="h-6 w-6 md:h-8 md:w-8" />,
      details: ["Ritocco professionale", "Correzione colori", "Rimozione imperfezioni", "Ottimizzazione formati"],
      duration: "24-48 ore",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 5,
      title: "CONSEGNA CLOUD",
      subtitle: "Immagini ottimizzate",
      description:
        "Le immagini finali vengono caricate su una piattaforma cloud sicura con download immediato. Ricevi file ottimizzati per web, stampa e social.",
      icon: <Cloud className="h-6 w-6 md:h-8 md:w-8" />,
      details: ["Piattaforma cloud dedicata", "Download immediato", "Formati multipli", "Backup sicuro 30 giorni"],
      duration: "Immediata",
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      id: 6,
      title: "RITIRO PRODOTTI",
      subtitle: "O reso sicuro",
      description:
        "I tuoi prodotti vengono imballati con cura e rispediti al tuo indirizzo tramite corriere espresso assicurato, oppure puoi ritirarli in sede.",
      icon: <Truck className="h-6 w-6 md:h-8 md:w-8" />,
      details: [
        "Imballaggio professionale",
        "Spedizione assicurata",
        "Tracking completo",
        "Ritiro in sede disponibile",
      ],
      duration: "1-2 giorni",
      color: "from-red-500/20 to-rose-500/20",
    },
  ]
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setIsMobile(width < 768)
      setWindowSize({ width, height })
    }
  
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleScroll = () => {
      const newScrollY = window.scrollY
      setScrollY(newScrollY)

      // Calculate active step based on scroll position - Fixed calculation
      if (timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect()
        const timelineTop = window.scrollY + timelineRect.top
        const viewportCenter = window.scrollY + window.innerHeight / 2

        if (viewportCenter > timelineTop && viewportCenter < timelineTop + timelineRect.height) {
          const scrollProgress = (viewportCenter - timelineTop) / timelineRect.height
          const stepIndex = Math.floor(scrollProgress * processSteps.length)
          setActiveStep(Math.max(0, Math.min(processSteps.length - 1, stepIndex)))
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Reduce mouse effects on mobile for performance
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
          y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
        })
      }
    }

    // Intersection Observer with better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      {
        threshold: isMobile ? 0.05 : 0.1,
        rootMargin: isMobile ? "50px" : "100px",
      },
    )

    // Observe elements with error handling
    const elementsToObserve = document.querySelectorAll("[data-reveal]")
    elementsToObserve.forEach((el) => {
      if (el.id) observer.observe(el)
    })

    window.addEventListener("scroll", handleScroll, { passive: true })
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true })
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkMobile)
      observer.disconnect()
    }
  }, [isMobile])

  // Safe transform calculations with fallbacks
  const getParallaxTransform = (factor: number, index = 0) => {
    if (isMobile) return "translateY(0px)" // Disable parallax on mobile
    return `translateY(${scrollY * factor * (index + 1)}px)`
  }

  const getMouseTransform = (xFactor = 0, yFactor = 0) => {
    if (isMobile) return "translate(0px, 0px)"
    return `translate(${mousePosition.x * xFactor}px, ${mousePosition.y * yFactor}px)`
  }


  

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Advanced Cursor - Desktop Only */}
      {!isMobile && (
        <div
          className="fixed w-6 h-6 md:w-8 md:h-8 pointer-events-none z-50 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x * 15 + windowSize.width / 2 - 12,
            top: mousePosition.y * 15 + windowSize.height / 2 - 12,
            background: `radial-gradient(circle, rgba(255,255,255,${0.4 + Math.abs(mousePosition.x) * 0.2}) 0%, transparent 70%)`,
            transform: `scale(${1 + Math.abs(mousePosition.x) * 0.2})`,
            borderRadius: "50%",
            filter: "blur(1px)",
          }}
        />
      )}

      {/* Floating Particles - Desktop Only */}
      {!isMobile && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                transform: getMouseTransform(5 + i, 3 + i * 0.5),
                transition: "transform 0.3s ease-out",
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <Header scrollY={scrollY} introComplete={true} />


      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background - Simplified for mobile */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-5 md:opacity-10"
            style={{
              transform: isMobile ? "translateY(0px)" : `translateY(${scrollY * 0.3}px)`,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Animated Orbs - Desktop Only */}
          {!isMobile && (
            <>
              <div
                className="absolute top-1/3 left-1/4 w-60 md:w-80 h-60 md:h-80 rounded-full opacity-10 md:opacity-15"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
                  transform: `translate3d(${scrollY * 0.1 + mousePosition.x * 40}px, ${scrollY * 0.05 + mousePosition.y * 20}px, 0)`,
                  filter: "blur(30px)",
                  transition: "transform 0.3s ease-out",
                }}
              />
              <div
                className="absolute bottom-1/3 right-1/4 w-40 md:w-60 h-40 md:h-60 rounded-full opacity-8 md:opacity-10"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                  transform: `translate3d(${-scrollY * 0.08 + mousePosition.x * -30}px, ${scrollY * 0.12 + mousePosition.y * -15}px, 0)`,
                  filter: "blur(25px)",
                  transition: "transform 0.3s ease-out",
                }}
              />
            </>
          )}
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div
            className="mb-6 md:mb-8 transform transition-all duration-1000 ease-out"
            style={{
              transform: getParallaxTransform(0.05),
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <Badge
              variant="outline"
              className="border-white/20 text-white bg-white/5 backdrop-blur-xl mb-4 md:mb-6 px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em]"
            >
              <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              IL NOSTRO PROCESSO
            </Badge>
          </div>

          <div
            className="space-y-4 md:space-y-6 transform transition-all duration-1000 ease-out"
            style={{
              transform: getParallaxTransform(0.03),
              opacity: Math.max(0, 1 - scrollY * 0.001),
            }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter">
              <span
                className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                style={{
                  transform: getMouseTransform(10, 0),
                }}
              >
                DAL PRODOTTO
              </span>
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white"
                style={{
                  transform: getMouseTransform(-8, 0),
                }}
              >
                ALLA VENDITA
              </span>
            </h1>

            <p
              className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
              style={{
                transform: getMouseTransform(0, 5),
              }}
            >
              Un processo studiato nei minimi dettagli per trasformare i tuoi prodotti in immagini che convertono.
              <br />
              <span className="text-white font-semibold">6 step. Risultati garantiti.</span>
            </p>
          </div>

          {/* Scroll Indicator */}
          <div
            className="relative my-3 left-1/2 transform -translate-x-1/2 transition-all duration-300"
            style={{
              opacity: Math.max(0, 1 - scrollY * 0.01),
            }}
          >
            <div className="flex flex-col items-center">
              <div className="w-5 h-10 md:w-6 md:h-12 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden mb-2">
                <div className="w-1 h-3 md:h-4 bg-gradient-to-b from-white to-transparent rounded-full mt-2 animate-bounce" />
              </div>
              <ArrowDown className="w-3 h-3 md:w-4 md:h-4 text-white/50 animate-pulse" />
              <div className="text-xs text-white/50 text-center mt-2 tracking-[0.1em] md:tracking-[0.2em]">SCOPRI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section ref={timelineRef} className="py-16 md:py-32 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div
            id="timeline-header"
            data-reveal
            className={`text-center mb-12 md:mb-20 transform transition-all duration-1000 ease-out ${
              isVisible["timeline-header"] ? "translate-y-0 opacity-100" : "translate-y-10 md:translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-8 tracking-tighter bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              PROCESSO
              <span className="block text-lg md:text-2xl lg:text-3xl text-gray-400 font-normal tracking-[0.1em] md:tracking-[0.2em] mt-2 md:mt-4">
                6 step verso il successo
              </span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Progress Line - Mobile: Left side, Desktop: Center */}
            <div
              className={`absolute ${isMobile ? "left-8" : "left-1/2 transform -translate-x-1/2"} w-1 h-full bg-white/10 rounded-full overflow-hidden`}
            >
              <div
                className="w-full bg-gradient-to-b from-white via-gray-300 to-white transition-all duration-500 ease-out"
                style={{
                  height: `${((activeStep + 1) / processSteps.length) * 100}%`,
                  boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                }}
              />
            </div>

            {/* Process Steps */}
            <div className={`space-y-16 md:space-y-32 ${isMobile ? "pl-20" : ""}`}>
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  id={`step-${step.id}`}
                  data-reveal
                  className={`relative transform transition-all duration-1000 ease-out ${
                    isVisible[`step-${step.id}`]
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 md:translate-y-20 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Mobile Layout */}
                  {isMobile ? (
                    <div className="relative">
                      {/* Step Connector */}
                      <div className="absolute -left-20 top-6">
                        <div
                          className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                            activeStep >= index
                              ? "bg-white border-white shadow-lg shadow-white/50"
                              : "bg-transparent border-white/30"
                          }`}
                        />
                      </div>

                      {/* Step Content */}
                      <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-500 relative overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 hover:opacity-100 transition-opacity duration-500`}
                        />
                        <CardContent className="p-0 relative z-10">
                          <div className="flex items-start space-x-4 mb-4">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                                activeStep >= index ? "bg-white text-black" : "bg-white/10 text-white"
                              }`}
                            >
                              {step.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div className="text-xs text-gray-400 tracking-[0.2em]">STEP {step.id}</div>
                                <Badge variant="outline" className="border-white/20 text-white bg-white/5 text-xs">
                                  {step.duration}
                                </Badge>
                              </div>
                              <h3 className="text-xl md:text-2xl font-black mb-2 tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                {step.title}
                              </h3>
                              <p className="text-sm text-gray-400 mb-3">{step.subtitle}</p>
                            </div>
                          </div>

                          <p className="text-gray-300 text-sm leading-relaxed mb-4">{step.description}</p>

                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-white mr-3 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  ) : (
                    /* Desktop Layout */
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                        index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                      }`}
                    >
                      {/* Step Info */}
                      <div
                        className={`${index % 2 === 0 ? "" : "lg:col-start-2"} transform transition-all duration-700`}
                        style={{
                          transform: getParallaxTransform(0.01, index),
                        }}
                      >
                        <div className="flex items-center mb-6">
                          <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center mr-6 transition-all duration-500 ${
                              activeStep >= index ? "bg-white text-black scale-110" : "bg-white/10 text-white"
                            }`}
                            style={{
                              boxShadow:
                                activeStep >= index
                                  ? "0 0 30px rgba(255,255,255,0.5)"
                                  : "0 0 10px rgba(255,255,255,0.1)",
                            }}
                          >
                            {step.icon}
                          </div>
                          <div>
                            <div className="text-sm text-gray-400 tracking-[0.3em] mb-1">STEP {step.id}</div>
                            <Badge
                              variant="outline"
                              className="border-white/20 text-white bg-white/5 backdrop-blur-sm text-xs"
                            >
                              {step.duration}
                            </Badge>
                          </div>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                          {step.title}
                          <span className="block text-xl md:text-2xl text-gray-400 font-normal mt-2">
                            {step.subtitle}
                          </span>
                        </h3>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8">{step.description}</p>

                        <ul className="space-y-3 mb-8">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>

                        {index < processSteps.length - 1 && (
                          <div className="flex items-center text-gray-400">
                            <ArrowRight className="w-5 h-5 mr-2" />
                            <span className="text-sm tracking-[0.2em]">PROSSIMO STEP</span>
                          </div>
                        )}
                      </div>

                      {/* Step Visual */}
                      <div
                        className={`${index % 2 === 0 ? "" : "lg:col-start-1"} relative group`}
                        style={{
                          transform: `${getParallaxTransform(0.005, index)} rotateY(${mousePosition.x * 1}deg)`,
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <Card
                          className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-700 relative overflow-hidden"
                          style={{
                            boxShadow: `0 25px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)`,
                          }}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          />
                          <CardContent className="p-0 relative z-10">
                            <div className="text-center">
                              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <div className="text-white text-3xl">{step.icon}</div>
                              </div>
                              <div className="text-6xl font-black text-white/20 mb-4">
                                {step.id.toString().padStart(2, "0")}
                              </div>
                              <h4 className="text-2xl font-bold text-white mb-2">{step.title}</h4>
                              <p className="text-gray-400 text-sm tracking-[0.2em]">{step.subtitle}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Step Connector - Desktop */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
                        <div
                          className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                            activeStep >= index
                              ? "bg-white border-white shadow-lg shadow-white/50"
                              : "bg-transparent border-white/30"
                          }`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-24 md:pt-48 pb-16 md:pb-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            transform: getParallaxTransform(0.1),
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
              radial-gradient(circle at 30% 30%, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 40px 40px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div
            id="stats"
            data-reveal
            className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ease-out ${
              isVisible.stats ? "translate-y-0 opacity-100" : "translate-y-10 md:translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-8 tracking-tighter bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              RISULTATI GARANTITI
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { number: "6", label: "STEP OTTIMIZZATI", suffix: "" },
              { number: "24", label: "ORE CONSEGNA", suffix: "H" },
              { number: "99", label: "SODDISFAZIONE", suffix: "%" },
              { number: "2000", label: "PRODOTTI FOTOGRAFATI", suffix: "+" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ease-out ${
                  isVisible.stats ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: getParallaxTransform(0.006, index),
                }}
              >
                <div className="text-3xl md:text-5xl lg:text-6xl font-black mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                  {stat.number}
                  {stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-gray-400 tracking-[0.2em] md:tracking-[0.3em] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: isMobile
              ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)"
              : `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)`,
            transform: getParallaxTransform(0.05),
            transition: "background 0.3s ease-out",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            id="cta"
            data-reveal
            className={`transform transition-all duration-1000 ease-out ${
              isVisible.cta ? "translate-y-0 opacity-100" : "translate-y-10 md:translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-8 tracking-tighter">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                INIZIA IL TUO
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
                PROCESSO OGGI
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Trasforma i tuoi prodotti in bestseller con il nostro processo collaudato.
              <br />
              <span className="text-white font-semibold">Preventivo gratuito in 24h.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-white font-bold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl group relative overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center">
                  INIZIA PROGETTO
                  <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-xl font-bold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl transition-all duration-300 hover:scale-105"
              >
                SCOPRI I PREZZI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer  />
    </div>
  )
}
