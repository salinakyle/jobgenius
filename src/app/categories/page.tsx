import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Code, DollarSign, Heart, GraduationCap, PenTool, Megaphone, TrendingUp, Cpu, Truck, Utensils, Gavel, Shield } from "lucide-react"

const ALL_CATEGORIES = [
    { name: "Technology", icon: Code, count: "1.2k+" },
    { name: "Finance", icon: DollarSign, count: "850+" },
    { name: "Healthcare", icon: Heart, count: "2.1k+" },
    { name: "Education", icon: GraduationCap, count: "500+" },
    { name: "Design", icon: PenTool, count: "320+" },
    { name: "Marketing", icon: Megaphone, count: "450+" },
    { name: "Sales", icon: TrendingUp, count: "900+" },
    { name: "Engineering", icon: Cpu, count: "750+" },
    { name: "Logistics", icon: Truck, count: "400+" },
    { name: "Hospitality", icon: Utensils, count: "600+" },
    { name: "Legal", icon: Gavel, count: "150+" },
    { name: "Security", icon: Shield, count: "200+" },
]

export default function CategoriesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Browse by Category</h1>
                        <p className="text-xl text-muted-foreground">Explore thousands of jobs across all industries.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {ALL_CATEGORIES.map((cat) => (
                            <div key={cat.name} className="group flex flex-col items-center justify-center p-8 bg-card border border-border rounded-xl hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                                <div className="mb-4 p-4 bg-primary/5 rounded-full text-primary group-hover:scale-110 transition-transform">
                                    <cat.icon className="size-8" />
                                </div>
                                <h3 className="font-semibold text-lg mb-1">{cat.name}</h3>
                                <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{cat.count} jobs</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
