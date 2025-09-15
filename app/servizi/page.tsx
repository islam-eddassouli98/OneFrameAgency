"use client"


import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Camera, Users, Palette, Video, MessageSquare, ArrowRight, Star, Play, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header introComplete={true}/>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[url('/professional-photography-studio-equipment.jpg')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-gray-700">
              <Star className="w-4 h-4 text-white" />
              <span className="text-sm text-gray-300">Agenzia fotografica di fiducia per oltre 500+ brand</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
              Servizi Fotografici
              <span className="block text-white">per eCommerce</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto text-pretty">
              Trasformiamo i tuoi prodotti in immagini che vendono. Dalla fotografia professionale al sistema DAM
              integrato, tutto quello che serve per far crescere il tuo business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-200 text-black group">
                Scopri i nostri servizi
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-900 group bg-transparent"
              >
                <Play className="w-4 h-4 mr-2" />
                Guarda il portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700">
              I nostri servizi
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Tutto quello che serve per il tuo eCommerce</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Dalla fotografia professionale alla gestione digitale degli asset, offriamo soluzioni complete per il tuo
              business online.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Still Life & Ghost Mannequin</CardTitle>
                <CardDescription className="text-base text-gray-400">
                  Fotografia professionale per marketplace e store online
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Fotografia su fondo bianco professionale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Servizio ghost per abbigliamento</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Ottimizzato per marketplace</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full group bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:text-white"
                >
                  Scopri di più
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">On Model / Flat Lay</CardTitle>
                <CardDescription className="text-base text-gray-400">
                  Scatti ottimizzati per conversione e branding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Scatti indossati per cataloghi moda</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Flat lay per accessori e beauty</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Ottimizzati per conversione</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full group bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:text-white"
                >
                  Scopri di più
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Servizi su Misura</CardTitle>
                <CardDescription className="text-base text-gray-400">
                  Produzione completa con editing professionale
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Pre e post-produzione incluse</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Lavorazione con referenze</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Editing e correzione colore</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full group bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:text-white"
                >
                  Scopri di più
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* DAM Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/digital-asset-management-dashboard-interface.jpg')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700">
                Sistema Integrato
              </Badge>
              <h2 className="text-5xl font-bold mb-6 text-balance text-white">
                Digital Asset Management
                <span className="block text-white">(DAM)</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 text-pretty">
                Il tuo portale riservato per gestire tutto il flusso di lavoro fotografico. Dalla revisione
                all'approvazione, tutto in un unico posto.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="font-semibold text-white mb-3">Gestione Centralizzata</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Visionare immagini in anteprima</li>
                    <li>• Approvare o richiedere modifiche</li>
                    <li>• Download organizzato per formato</li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h4 className="font-semibold text-white mb-3">Collaborazione</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Flusso collaborativo con team</li>
                    <li>• Commenti e feedback in tempo reale</li>
                    <li>• Notifiche automatiche</li>
                  </ul>
                </div>
              </div>

              <Button size="lg" className="bg-white hover:bg-gray-200 text-black group">
                Accedi al portale DAM
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <div className="bg-[url('/modern-dashboard-interface-with-image-gallery.jpg')] bg-cover bg-center rounded-xl h-80 mb-6 border border-gray-600"></div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">Dashboard Progetti</h4>
                    <p className="text-sm text-gray-300">Gestisci tutti i tuoi progetti fotografici</p>
                  </div>
                  <Badge className="bg-gray-700 text-gray-300 border-gray-600">Attivo</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700">
              Servizi aggiuntivi
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Contenuti che fanno la differenza</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Video & Animazioni</CardTitle>
                <CardDescription className="text-base text-gray-400">
                  Contenuti dinamici per il tuo eCommerce
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Video prodotto 360°</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Animazioni per social media</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Contenuti per advertising</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:text-white"
                >
                  Scopri di più
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Packshot Multilingua</CardTitle>
                <CardDescription className="text-base text-gray-400">
                  Contenuti localizzati per mercati internazionali
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Adattamento per mercati locali</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Packaging multilingua</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm text-gray-300">Conformità normative locali</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full group bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:text-white"
                >
                  Scopri di più
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-balance text-white">Pronto a trasformare il tuo eCommerce?</h2>
            <p className="text-xl mb-12 text-gray-300 text-pretty">
              Ogni progetto è unico. Raccontaci di cosa hai bisogno e prepareremo una proposta su misura per far
              crescere il tuo business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 group">
                INIZIA IL TUO PROGETTO
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-900 bg-transparent group hover:text-white"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                CONTATTACI
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
