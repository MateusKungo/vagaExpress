"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, Rocket, Search, Briefcase, Target } from "lucide-react"
import heroImage from "@/public/undraw_working-together_r43a.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30" />
        
        {/* Elementos decorativos */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40" />
        
        {/* Conteúdo Principal */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Texto à Esquerda */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 max-w-2xl space-y-8"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Revolucionando recrutamento</span>
              </motion.div>

              {/* Título Principal */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Encontre seu próximo{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  trabalho dos sonhos
                </span>
              </h1>

              {/* Descrição */}
              <p className="text-xl text-gray-600 leading-relaxed">
                Conectamos talentos excepcionais com oportunidades incríveis. 
                Mais de 10.000 carreiras transformadas através da nossa plataforma.
              </p>

              {/* Estatísticas */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                {[
                  { icon: Users, value: "10k+", label: "Profissionais" },
                  { icon: Rocket, value: "2k+", label: "Empresas" },
                  { icon: Sparkles, value: "98%", label: "Sucesso" },
                ].map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <stat.icon className="w-5 h-5 text-blue-600" />
                      <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                    </div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Botões de Ação */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Encontrar Vagas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-lg border-2 hover:bg-blue-50 transition-all"
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  Para Empresas
                </Button>
              </motion.div>
            </motion.div>

            {/* Imagem à Direita com Elementos Flutuantes */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 relative"
            >
              {/* Container da Imagem */}
              <div className="relative max-w-xl mx-auto">
                
                {/* Elementos Flutuantes SOBRE a imagem */}
                <motion.div 
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-blue-100 z-20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-blue-900">+150</div>
                      <div className="text-sm text-gray-600">vagas hoje</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    delay: 0.5,
                    ease: "easeInOut" 
                  }}
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl border border-purple-100 z-20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-purple-900">Match</div>
                      <div className="text-sm text-gray-600">instantâneo</div>
                    </div>
                  </div>
                </motion.div>

                {/* Imagem Principal com Efeitos */}
                <div className="relative z-10">
                  {/* Gradiente atrás da imagem */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-3xl blur-xl" />
                  
                  {/* Container da imagem com bordas */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src={heroImage}
                      alt="Profissionais colaborando em ambiente moderno"
                      className="w-full h-auto"
                      priority
                    />
                    
                    {/* Overlay de gradiente sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />
                  </div>
                </div>

                {/* Elemento decorativo adicional */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="absolute -z-10 -inset-8"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-blue-200/30 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-purple-200/20 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Seção de Features */}
      <div className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como funciona o <span className="text-blue-600">VagasExpress</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Transformamos a busca por emprego em uma experiência rápida e eficiente
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Search,
                title: "Busca Inteligente",
                description: "Encontre vagas que combinam com suas habilidades e preferências",
                color: "blue"
              },
              {
                icon: Target,
                title: "Match Perfeito",
                description: "Nosso algoritmo conecta você às oportunidades ideais",
                color: "purple"
              },
              {
                icon: Rocket,
                title: "Processo Rápido",
                description: "Candidatura simplificada e respostas em tempo recorde",
                color: "green"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}