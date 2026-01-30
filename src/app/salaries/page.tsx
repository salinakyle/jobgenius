import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, DollarSign } from "lucide-react"

export default function SalariesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Hero */}
                    <div className="bg-primary/5 rounded-3xl p-8 md:p-16 text-center mb-16">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                            <DollarSign className="size-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Discover What You're Worth</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Access real-time compensation data from over 50,000 companies. Filter by role, location, and experience.
                        </p>

                        <div className="max-w-xl mx-auto flex gap-2">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-3 text-muted-foreground size-5" />
                                <Input placeholder="Search job title (e.g. Product Designer)" className="pl-10 h-12 text-lg bg-white" />
                            </div>
                            <Button size="lg" className="h-12 px-8">Search</Button>
                        </div>
                    </div>

                    {/* Popular Roles Grid */}
                    <h2 className="text-2xl font-bold mb-6">Popular Roles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { role: "Software Engineer", avg: "$145,000" },
                            { role: "Product Manager", avg: "$135,000" },
                            { role: "Data Scientist", avg: "$140,000" },
                            { role: "UX Designer", avg: "$115,000" },
                            { role: "Marketing Manager", avg: "$95,000" },
                            { role: "Sales Executive", avg: "$85,000" },
                        ].map((item) => (
                            <div key={item.role} className="p-6 border border-border rounded-xl hover:bg-muted/30 transition-colors flex justify-between items-center cursor-pointer">
                                <span className="font-medium text-lg">{item.role}</span>
                                <div className="text-right">
                                    <div className="text-xs text-muted-foreground uppercase">Avg Base</div>
                                    <div className="font-bold text-primary text-xl">{item.avg}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
