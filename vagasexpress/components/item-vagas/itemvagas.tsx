"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Building2, Clock, ArrowRight } from "lucide-react"

interface JobCardProps {
    title: string
    company: string
    location: string
    description: string
    image: string
    tags?: string[]
}

export function JobCard({
    title,
    company,
    location,
    description,
    image,
    tags = ["Full-time", "Remoto"]
}: JobCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -4 }}
            className="group"
        >
            <Card className="w-full overflow-hidden border hover:shadow-md  duration-300">
                <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                        {/* Container da Imagem com Padding */}
                        <div className="relative w-full md:w-72 h-48 md:h-auto p-4 md:p-6">
                            {/* Container interno com overflow hidden */}
                            <div className="relative w-full h-full overflow-hidden rounded-lg">
                                {/* Overlay de gradiente sutil */}
                                <div className="absolute inset-0  from-primary/5 to-secondary/5 z-10" />

                                <Image
                                    src={image}
                                    alt={`${company} - ${title}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 280px"
                                />

                                {/* Efeito de brilho no hover */}
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 z-20" />
                            </div>
                        </div>
                        {/* Conteúdo Principal */}
                        <div className="flex-1 p-6 md:p-8 space-y-4">
                            {/* Cabeçalho */}
                            <div className="space-y-2">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                                            {title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Building2 size={14} />
                                                <span>{company}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                <span>{location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Badge de tempo */}
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Clock size={12} />
                                        2d atrás
                                    </span>
                                </div>
                            </div>

                            {/* Descrição */}
                            <p className="text-gray-600 line-clamp-2 leading-relaxed">
                                {description}
                            </p>

                            {/* Tags */}
                            <div className="flex gap-2 flex-wrap">
                                {tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground border"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Ações */}
                            <div className="pt-2">
                                <Button
                                    variant="default"
                                    className="w-full md:w-auto bg-blue-500 hover:bg-primary/90"
                                >
                                    Ver vaga completa
                                    <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Button>
                            </div>
                        </div>



                    </div>
                </CardContent>
            </Card>
        </motion.article>
    )
}