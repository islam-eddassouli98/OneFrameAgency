"use client"

import type React from "react"
import { useHydration } from "@/lib/use-hydration"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Zap,
  Users,
  Star,
  Heart,
  Sparkles,
  ArrowRight,
  Coffee,
  Headphones,
  Shield,
} from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"

const typingTexts = [
  "Trasformiamo i tuoi prodotti in bestseller",
  "Shooting fotografici che convertono",
  "Immagini che fanno vendere di più",
  "Il tuo successo è la nostra passione",
]

export default function ContattiPage() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const [isMobile, setIsMobile] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    shootingType: "",
    productCount: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "EMAIL",
      value: "contact@oneframeagency.com",
      href: "mailto:contact@oneframeagency.com",
      description: "Rispondiamo entro 2 ore",
      color: "from-blue-500/20 to-cyan-500/20",
      bgGradient: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "TELEFONO",
      value: "+39 334 196 0682",
      href: "tel:+39 334 196 0682",
      description: "Lun-Ven 9:00-18:00",
      color: "from-green-500/20 to-emerald-500/20",
      bgGradient: "radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "STUDIO",
      value: "San Marcellino (CE), Italia",
      href: "https://maps.app.goo.gl/vffR7MtS67QmSZ4h9?g_st=ipc",
      description: "Visita su appuntamento",
      color: "from-purple-500/20 to-pink-500/20",
      bgGradient: "radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WHATSAPP",
      value: "+39 334 196 0682",
      href: "https://wa.me/393341960682",
      description: "Chat diretta",
      color: "from-yellow-500/20 to-orange-500/20",
      bgGradient: "radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)",
    },
  ]

  const faqs = [
    {
      question: "Quanto tempo serve per un progetto?",
      answer: "Le tempistiche dipendono dal numero di prodotti e dalla complessità della produzione. Per cataloghi standard, i tempi di consegna sono generalmente di circa 1 settimana lavorativa.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      question: "Quali formati di file consegnate?",
      answer: "JPG ad alta risoluzione, PNG con sfondo trasparente, e formati ottimizzati per web e stampa.",
      icon: <Camera className="h-5 w-5" />,
    },
    {
      question: "Offrite servizi di ritocco avanzato?",
      answer: "Sì, includiamo ritocco professionale, correzione colori e ottimizzazione per ecommerce.",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      question: "Posso vedere esempi del vostro lavoro?",
      answer: "Certamente! Visita la nostra sezione portfolio o richiedi esempi specifici per il tuo settore.",
      icon: <Star className="h-5 w-5" />,
    },
  ]


  useEffect(() => {
    // Marca il componente come montato
    setMounted(true)

    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth
        const height = window.innerHeight
        setIsMobile(width < 768)
        setWindowSize({ width, height })
      }
    }
  
    checkMobile()
    
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", checkMobile)
    }

    // Typing animation
    const typingInterval = setInterval(() => {
      const currentText = typingTexts[currentTextIndex]
      if (typedText.length < currentText.length) {
        setTypedText(currentText.slice(0, typedText.length + 1))
      } else {
        setTimeout(() => {
          setTypedText("")
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length)
        }, 2000)
      }
    }, 100)

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile && typeof window !== 'undefined' && windowSize.width > 0 && windowSize.height > 0) {
        setMousePosition({
          x: (e.clientX - windowSize.width / 2) / windowSize.width,
          y: (e.clientY - windowSize.height / 2) / windowSize.height,
        })
      }
    }

    let observer: IntersectionObserver | null = null
    
    if (typeof window !== 'undefined') {
      observer = new IntersectionObserver(
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

      const elementsToObserve = document.querySelectorAll("[data-reveal]")
      elementsToObserve.forEach((el) => {
        if (el.id && observer) observer.observe(el)
      })

      window.addEventListener("scroll", handleScroll, { passive: true })
      if (!isMobile) {
        window.addEventListener("mousemove", handleMouseMove, { passive: true })
      }
    }

    return () => {
      clearInterval(typingInterval)
      if (typeof window !== 'undefined') {
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("resize", checkMobile)
      }
      if (observer) {
        observer.disconnect()
      }
    }
  }, [typedText, currentTextIndex, isMobile, windowSize.width, windowSize.height])

  const isHydrated = useHydration()
  
  const getParallaxTransform = (factor: number, index = 0, maxOffset = 100) => {
    if (isMobile || !mounted || !isHydrated) return "translateY(0px)"
    
    // Calcola l'offset del parallax con limiti dinamici
    const rawOffset = scrollY * factor * (index + 1)
    const clampedOffset = Math.max(-maxOffset, Math.min(maxOffset, rawOffset))
    
    return `translateY(${clampedOffset}px)`
  }

  const getMouseTransform = (xFactor = 0, yFactor = 0) => {
    if (isMobile || !mounted || !isHydrated) return "translate(0px, 0px)"
    
    // Controlla per valori infiniti o NaN
    const x = isFinite(mousePosition.x) ? mousePosition.x : 0
    const y = isFinite(mousePosition.y) ? mousePosition.y : 0
    
    return `translate(${x * xFactor}px, ${y * yFactor}px)`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        shootingType: "",
        productCount: "",
        message: "",
      })
    }, 3000)
  }

  const handleScrollToForm = () => {
    if (typeof window !== 'undefined') {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handlePhoneCall = () => {
    if (typeof window !== 'undefined') {
      window.open("tel:+393341960682")
    }
  }

  const handleEmailClick = () => {
    if (typeof window !== 'undefined') {
      window.open("mailto:contact@oneframeagency.com")
    }
  }

  const handleWhatsappClick = () => {
    if (typeof window !== 'undefined') {
      window.open("https://wa.me/393341960682")
    }
  }

  const handleContactClick = (href: string) => {
    if (typeof window !== 'undefined') {
      window.open(href)
    }
  }

  // Non renderizzare animazioni complesse fino a quando il componente non è montato
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Header introComplete={true} />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">CONTATTACI</h1>
            <p className="text-gray-400">Caricamento...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Advanced Cursor with Trail Effect */}
      {!isMobile && mounted && (
        <>
          <div
            className="fixed w-8 h-8 pointer-events-none z-50 transition-all duration-300 ease-out"
            style={{
              left: mousePosition.x * 15 + windowSize.width / 2 - 12,
              top: mousePosition.y * 15 + windowSize.height / 2 - 12,
              background: `radial-gradient(circle, rgba(255,255,255,${0.6 + Math.abs(mousePosition.x) * 0.4}) 0%, transparent 70%)`,
              transform: `scale(${1 + Math.abs(mousePosition.x) * 0.3})`,
              borderRadius: "50%",
              filter: "blur(1px)",
            }}
          />
          {/* Cursor Trail */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="fixed w-4 h-4 pointer-events-none z-40 transition-all duration-500 ease-out"
              style={{
                left: mousePosition.x * (10 - i * 2) + windowSize.width / 2 - 8,
                top: mousePosition.y * (10 - i * 2) + windowSize.height / 2 - 8,
                background: `radial-gradient(circle, rgba(255,255,255,${0.2 - i * 0.05}) 0%, transparent 70%)`,
                borderRadius: "50%",
                filter: "blur(2px)",
                transitionDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </>
      )}

      {/* Enhanced Floating Particles */}
      {!isMobile && mounted && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `rgba(255,255,255,${0.03 + Math.random() * 0.05})`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                transform: getMouseTransform(8 + i * 0.5, 5 + i * 0.3),
                transition: "transform 0.3s ease-out",
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <Header introComplete={true} />

      {/* Hero Section with Enhanced Animations */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background with More Layers */}
        <div className="absolute inset-0">

          {/* Multiple Animated Orbs */}
          {!isMobile && mounted && (
            <>
              <div
                className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full opacity-5"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                  transform: `translate3d(${scrollY * 0.15 + mousePosition.x * 80}px, ${scrollY * 0.08 + mousePosition.y * 40}px, 0) scale(${1 + mousePosition.x * 0.1})`,
                  filter: "blur(40px)",
                  transition: "transform 0.3s ease-out",
                }}
              />
              <div
                className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-3"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                  transform: `translate3d(${-scrollY * 0.1 + mousePosition.x * -60}px, ${scrollY * 0.2 + mousePosition.y * -30}px, 0) scale(${1 + mousePosition.y * 0.1})`,
                  filter: "blur(30px)",
                  transition: "transform 0.3s ease-out",
                }}
              />
              <div
                className="absolute top-1/2 right-1/3 w-60 h-60 rounded-full opacity-2"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                  transform: `translate3d(${scrollY * 0.12 + mousePosition.x * 50}px, ${-scrollY * 0.15 + mousePosition.y * 25}px, 0)`,
                  filter: "blur(35px)",
                  transition: "transform 0.3s ease-out",
                }}
              />
            </>
          )}

          {/* Floating Contact Icons with Animation */}
          <div
            className="absolute top-1/2 left-1/4 opacity-5"
            style={{
              transform: `${getParallaxTransform(0.05, 0, 50)} rotate(${scrollY * 0.02}deg)`,
              animation: "float 6s ease-in-out infinite",
            }}
          >
            <Mail className="h-24 w-24 text-white" />
          </div>
          <div
            className="absolute top-1/3 right-1/3 opacity-5"
            style={{
              transform: `${getParallaxTransform(0.08, 0, 60)} rotate(${-scrollY * 0.03}deg)`,
              animation: "float 8s ease-in-out infinite reverse",
            }}
          >
            <Phone className="h-20 w-20 text-white" />
          </div>
          <div
            className="absolute bottom-1/3 left-1/5 opacity-5"
            style={{
              transform: `${getParallaxTransform(0.06, 0, 40)} rotate(${scrollY * 0.025}deg)`,
              animation: "float 7s ease-in-out infinite",
            }}
          >
            <MessageCircle className="h-18 w-18 text-white" />
          </div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div
            className="mb-6 md:mb-8 transform transition-all duration-1000 ease-out"
            style={{
              transform: getParallaxTransform(0.05, 0, 30),
              opacity: Math.max(0, 1 - scrollY * 0.002),
            }}
          >
            <Badge
              variant="outline"
              className="border-white/20 text-white bg-white/5 backdrop-blur-xl mb-4 md:mb-6 px-4 md:px-8 py-2 md:py-3 text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] hover:bg-white/10 transition-all duration-300"
              style={{
                boxShadow: `0 0 30px rgba(255,255,255,${0.1 + Math.abs(mousePosition.x) * 0.1})`,
              }}
            >
              <Heart className="w-3 h-3 md:w-4 md:h-4 mr-2 animate-pulse text-red-400" />
              PARLIAMO DEL TUO PROGETTO
            </Badge>
          </div>

          <div
            className="space-y-4 md:space-y-6 transform transition-all duration-1000 ease-out"
            style={{
              transform: getParallaxTransform(0.03, 0, 20),
              opacity: Math.max(0, 1 - scrollY * 0.001),
            }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-black leading-[0.95] tracking-tighter px-4 sm:px-4 md:px-6 lg:px-4 break-words">
              <span
                className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                style={{
                  transform: getMouseTransform(12, 0),
                  textShadow: `${mousePosition.x * 3}px ${mousePosition.y * 3}px 15px rgba(0,0,0,0.3)`,
                }}
              >
                INIZIAMO
              </span>
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white"
                style={{
                  transform: getMouseTransform(-10, 0),
                  backgroundSize: `${200 + Math.abs(mousePosition.x) * 50}% 100%`,
                  backgroundPosition: `${50 + mousePosition.x * 30}% 50%`,
                }}
              >
                INSIEME
              </span>
            </h1>

            {/* Typing Animation */}
            <div
              className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 h-16 md:h-20 flex items-center justify-center"
              style={{
                transform: getMouseTransform(0, 6),
              }}
            >
              <span className="text-white font-semibold">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Preventivo gratuito in 24h • Consegna rapida • Qualità garantita
            </p>
          </div>

          {/* Enhanced Quick Contact Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-8 md:mt-12 px-4"
            style={{
              transform: getParallaxTransform(-0.02, 0, 25),
              opacity: Math.max(0, 1 - scrollY * 0.0015),
            }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-white font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg group relative overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: `0 10px 40px rgba(255,255,255,${0.2 + Math.abs(mousePosition.x) * 0.1})`,
              }}
              onClick={handleScrollToForm}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Send className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                INVIA MESSAGGIO
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-xl font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg group relative overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: `0 10px 40px rgba(255,255,255,${0.1 + Math.abs(mousePosition.y) * 0.1})`,
              }}
              onClick={handlePhoneCall}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform duration-300" />
                CHIAMA ORA
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>

        {/* Floating Action Hints */}
        <div className="absolute bottom-20 left-8 hidden lg:block">
          <div
            className="flex items-center space-x-2 text-gray-400 text-sm animate-pulse"
            style={{
              transform: getParallaxTransform(0.02, 0, 15),
            }}
          >
            <Coffee className="h-4 w-4" />
            <span>Prendiamoci un caffè virtuale</span>
          </div>
        </div>
        <div className="absolute bottom-20 right-8 hidden lg:block">
          <div
            className="flex items-center space-x-2 text-gray-400 text-sm animate-pulse"
            style={{
              transform: getParallaxTransform(0.03, 0, 20),
              animationDelay: "1s",
            }}
          >
            <Headphones className="h-4 w-4" />
            <span>Supporto dedicato</span>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info Cards */}
      <section className="py-16 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div
            id="contact-info"
            data-reveal
            className={`text-center mb-12 md:mb-20 transform transition-all duration-1000 ease-out ${
              isVisible["contact-info"] ? "translate-y-0 opacity-100" : "translate-y-10 md:translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-4 md:mb-8 tracking-tighter bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent px-2">
              CONTATTACI
              <span className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-400 font-normal tracking-[0.1em] md:tracking-[0.2em] mt-2 md:mt-4">
                Siamo qui per te ❤️
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                id={`contact-card-${index}`}
                data-reveal
                className={`bg-white/5 border-white/10 p-6 md:p-8 hover:bg-white/10 transition-all duration-700 group relative overflow-hidden transform cursor-pointer ${
                  isVisible[`contact-card-${index}`] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{
                  transform: `${getParallaxTransform(0.01, index, 15)} rotateY(${mousePosition.x * 1}deg) ${
                    hoveredCard === index ? "scale(1.05)" : "scale(1)"
                  }`,
                  transformStyle: "preserve-3d",
                  transitionDelay: `${index * 150}ms`,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)`,
                  background: info.bgGradient,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleContactClick(info.href)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Floating Sparkles */}
                {hoveredCard === index && !isMobile && mounted && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: "1s",
                        }}
                      />
                    ))}
                  </>
                )}

                <CardContent className="p-0 relative z-10 text-center">
                  <div
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 group-hover:rotate-12"
                    style={{ transform: `translateZ(20px)` }}
                  >
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                  </div>
                  <h3
                    className="text-sm font-bold text-gray-400 tracking-[0.3em] mb-2 group-hover:text-gray-300 transition-colors duration-300"
                    style={{ transform: `translateZ(15px)` }}
                  >
                    {info.title}
                  </h3>
                  <div
                    className="text-lg md:text-xl font-bold text-white hover:text-gray-300 transition-colors duration-300 block mb-2 group-hover:scale-105"
                    style={{ transform: `translateZ(10px)` }}
                  >
                    {info.value}
                  </div>
                  <p
                    className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    style={{ transform: `translateZ(5px)` }}
                  >
                    {info.description}
                  </p>

                  {/* Hover Arrow */}
                  <div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
                    style={{ transform: `translateZ(25px)` }}
                  >
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section id="contact-form" className="py-16 md:py-32 relative overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div
              id="form-header"
              data-reveal
              className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ease-out ${
                isVisible["form-header"] ? "translate-y-0 opacity-100" : "translate-y-10 md:translate-y-20 opacity-0"
              }`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6 tracking-tighter bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent px-2">
                RACCONTACI IL TUO PROGETTO
                <Sparkles className="inline-block ml-2 md:ml-4 h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12 text-yellow-400 animate-pulse" />
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Compila il form e riceverai un preventivo personalizzato entro 24 ore
              </p>
            </div>

            <Card
              id="contact-form-card"
              data-reveal
              className={`bg-white/5 border-white/10 p-6 md:p-12 backdrop-blur-xl relative overflow-hidden transform transition-all duration-1000 ease-out ${
                isVisible["contact-form-card"] ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{
                boxShadow: `0 30px 100px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6 md:space-y-8">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 tracking-[0.1em] group-focus-within:text-white transition-colors duration-300">
                      Nome e cognome *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:bg-white/10 transition-all duration-300 hover:bg-white/8"
                      placeholder="Il tuo nome e cognome"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 tracking-[0.1em] group-focus-within:text-white transition-colors duration-300">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:bg-white/10 transition-all duration-300 hover:bg-white/8"
                      placeholder="la-tua-email@esempio.com"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 tracking-[0.1em] group-focus-within:text-white transition-colors duration-300">
                      Brand / Azienda *
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:bg-white/10 transition-all duration-300 hover:bg-white/8"
                      placeholder="Nome del brand o azienda"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 tracking-[0.1em] group-focus-within:text-white transition-colors duration-300">
                      Tipo di shooting *
                    </label>
                    <select
                      name="shootingType"
                      value={formData.shootingType}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/20 text-white rounded-md px-3 py-2 focus:border-white/40 focus:bg-white/10 transition-all duration-300 hover:bg-white/8"
                    >
                      <option value="" className="bg-black">
                        Seleziona tipo di shooting
                      </option>
                      <option value="still" className="bg-black">
                        Still
                      </option>
                      <option value="ghost" className="bg-black">
                        Ghost
                      </option>
                      <option value="on-model" className="bg-black">
                        On-model
                      </option>
                      <option value="mix" className="bg-black">
                        Mix
                      </option>
                    </select>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 tracking-[0.1em] group-focus-within:text-white transition-colors duration-300">
                      Numero indicativo di prodotti *
                    </label>
                    <Input
                      type="text"
                      name="productCount"
                      value={formData.productCount}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:bg-white/10 transition-all duration-300 hover:bg-white/8"
                      placeholder="Es: 10, 20-30, 50+"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 tracking-[0.1em] group-focus-within:text-white transition-colors duration-300">
                      Messaggio libero
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:bg-white/10 transition-all duration-300 resize-none hover:bg-white/8"
                      placeholder="Aggiungi qualsiasi informazione aggiuntiva sul tuo progetto..."
                    />
                  </div>

                  <div className="text-center text-sm text-gray-400 space-y-2 pt-4">
                    <p>Rispondiamo entro 24 ore lavorative</p>
                    <p>Nessun impegno, solo una valutazione concreta del progetto</p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-white font-bold py-4 text-lg group relative overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      boxShadow: `0 20px 60px rgba(255,255,255,${0.2 + Math.abs(mousePosition.x) * 0.1})`,
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                          INVIO IN CORSO...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                          INVIA RICHIESTA
                          <Sparkles className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </form>
              ) : (
                <div className="relative z-10 text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                    <CheckCircle className="h-10 w-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Messaggio Inviato! 🎉</h3>
                  <p className="text-gray-300 text-lg">
                    Grazie per averci contattato. Ti risponderemo entro 24 ore con un preventivo personalizzato!
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-16 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div
            id="faq-header"
            data-reveal
            className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ease-out ${
              isVisible["faq-header"] ? "translate-y-0 opacity-100" : "translate-y-10 md:translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6 tracking-tighter bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent px-2">
              DOMANDE FREQUENTI
              <span className="block text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-normal tracking-[0.1em] mt-2">
                Tutto quello che devi sapere
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                id={`faq-${index}`}
                data-reveal
                className={`bg-white/5 border-white/10 p-6 md:p-8 hover:bg-white/10 transition-all duration-500 group transform cursor-pointer ${
                  isVisible[`faq-${index}`] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                      {faq.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div
            id="stats"
            data-reveal
            className={`text-center mb-12 md:mb-16 transform transition-all duration-1000 ease-out ${
              isVisible.stats ? "translate-y-0 opacity-100" : "translate-y-10 md:translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 tracking-tighter bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent px-2">
              PERCHÉ SCEGLIERCI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "RISPOSTA RAPIDA",
                description: "Rispondiamo a tutte le richieste entro 2 ore lavorative",
                stat: "< 2H",
                color: "from-yellow-500/20 to-orange-500/20",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "TEAM ESPERTO",
                description: "Fotografi specializzati in ecommerce con anni di esperienza",
                stat: "10+ ANNI",
                color: "from-blue-500/20 to-cyan-500/20",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "QUALITÀ GARANTITA",
                description: "Soddisfazione garantita o rifacciamo il lavoro gratuitamente",
                stat: "100%",
                color: "from-green-500/20 to-emerald-500/20",
              },
            ].map((item, index) => (
              <div
                key={index}
                id={`stat-${index}`}
                data-reveal
                className={`text-center group transform transition-all duration-1000 ease-out ${
                  isVisible[`stat-${index}`] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  transform: getParallaxTransform(0.02, index, 20),
                }}
              >
                <div className="relative">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                  {item.stat}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: isMobile
              ? "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)"
              : `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 30%, transparent 70%)`,
            transform: getParallaxTransform(0.08, 0, 50),
            transition: "background 0.3s ease-out",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            id="final-cta"
            data-reveal
            className={`transform transition-all duration-1000 ease-out ${
              isVisible["final-cta"] ? "translate-y-0 opacity-100" : "translate-y-10 md:translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black mb-4 md:mb-8 tracking-tighter px-2">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                PRONTO A INIZIARE?
              </span>
              <br />
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-400 font-normal">Il successo ti aspetta! 🚀</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Contattaci oggi stesso e trasforma i tuoi prodotti in bestseller.
              <br />
              <span className="text-white font-semibold">Il primo preventivo è sempre gratuito.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-white font-bold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl group relative overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: `0 20px 60px rgba(255,255,255,${0.2 + Math.abs(mousePosition.x) * 0.1})`,
                }}
                onClick={handleEmailClick}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
                  SCRIVI EMAIL
                  <Heart className="ml-2 h-4 w-4 text-red-500 group-hover:scale-125 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-xl font-bold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl group relative overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow: `0 20px 60px rgba(255,255,255,${0.1 + Math.abs(mousePosition.y) * 0.1})`,
                }}
                onClick={handleWhatsappClick}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <MessageCircle className="mr-2 h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
                  WHATSAPP
                  <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <Footer />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}