import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function ResourcesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">HR Resources</h1>
                    <p className="text-xl text-muted-foreground mb-12">Guides, templates, and tools for modern HR teams.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {["Offer Letter Templates", "Interview Question Bank", "Onboarding Checklist", "Diversity Hiring Guide", "Remote Work Policy", "Salary Benchmarks"].map((item) => (
                            <div key={item} className="p-6 border border-border rounded-xl hover:border-primary cursor-pointer transition-colors bg-card">
                                <h3 className="font-bold text-lg mb-2">{item}</h3>
                                <p className="text-sm text-muted-foreground">Download our free comprehensive guide.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
