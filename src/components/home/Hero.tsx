"use client"

import { motion } from "framer-motion"
import { Search, MapPin, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Placeholder for now, can be extracted
function HeroSearch() {
    return (
        <div className="w-full max-w-4xl mx-auto mt-10 p-4 bg-background/80 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl shadow-indigo-500/10 dark:shadow-indigo-500/5">
            <div className="flex flex-col md:flex-row gap-4 p-2">
                <div className="flex-1 relative group">
                    <Search className="absolute left-3 top-3 text-muted-foreground size-5 group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="Job title, keywords, or company"
                        className="pl-10 h-12 text-base bg-white/50 border-transparent focus:bg-white transition-all shadow-sm"
                    />
                </div>

                <div className="flex-1 relative group">
                    <MapPin className="absolute left-3 top-3 text-muted-foreground size-5 group-focus-within:text-primary transition-colors" />
                    <Input
                        placeholder="City, state, or zip code"
                        className="pl-10 h-12 text-base bg-white/50 border-transparent focus:bg-white transition-all shadow-sm"
                    />
                </div>

                <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                    Search Jobs
                </Button>
            </div>

            <div className="flex items-center gap-4 mt-4 px-2 text-sm text-muted-foreground overflow-x-auto pb-2 scrollbar-hide">
                <span className="font-medium shrink-0">Popular:</span>
                {["Remote", "Software Engineer", "Product Manager", "Design", "Marketing"].map((tag) => (
                    <button key={tag} className="px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap">
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    )
}

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white dark:from-slate-900/50 dark:to-background">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-[100px] mix-blend-multiply dark:bg-purple-900/20"
                />
                <motion.div
                    animate={{
                        x: [0, -70, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] right-[0%] w-[35%] h-[35%] bg-indigo-200/30 rounded-full blur-[100px] mix-blend-multiply dark:bg-indigo-900/20"
                />
            </div>

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                        Find your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">dream job</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        Join 5,000+ companies hiring top talent today. Simple, fast, and transparent job search.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <HeroSearch />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-border/40"
                >
                    <p className="text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wider">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos */}
                        {["Acme Corp", "Global Bank", "TechStart", "Innovate", "FutureLabs"].map((logo) => (
                            <div key={logo} className="text-xl font-bold font-serif text-foreground/40">{logo}</div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
