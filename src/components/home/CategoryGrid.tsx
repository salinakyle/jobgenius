"use client"

import { Code, DollarSign, Heart, GraduationCap, PenTool, Megaphone, TrendingUp, Cpu } from "lucide-react"
import { motion } from "framer-motion"

const categories = [
    { name: "Technology", icon: Code, count: "1.2k+" },
    { name: "Finance", icon: DollarSign, count: "850+" },
    { name: "Healthcare", icon: Heart, count: "2.1k+" },
    { name: "Education", icon: GraduationCap, count: "500+" },
    { name: "Design", icon: PenTool, count: "320+" },
    { name: "Marketing", icon: Megaphone, count: "450+" },
    { name: "Sales", icon: TrendingUp, count: "900+" },
    { name: "Engineering", icon: Cpu, count: "750+" },
]

export function CategoryGrid() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Explore by Category</h2>
                    <p className="text-muted-foreground text-lg">Find the perfect role in your industry.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group flex flex-col items-center justify-center p-8 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
                        >
                            <div className="mb-4 p-4 bg-primary/5 rounded-full text-primary group-hover:scale-110 transition-transform">
                                <cat.icon className="size-8" />
                            </div>
                            <h3 className="font-semibold text-lg mb-1">{cat.name}</h3>
                            <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{cat.count} jobs</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
