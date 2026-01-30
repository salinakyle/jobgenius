import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Recruiting Solutions</h1>
                        <p className="text-xl text-muted-foreground">Tools to help you build your dream team.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <h2 className="text-2xl font-bold mb-4">Resume Database</h2>
                            <p className="text-muted-foreground mb-6">
                                Search through over 5 million active candidate profiles with advanced filters.
                            </p>
                            <Button>Search Resumes</Button>
                        </div>

                        <div className="bg-card p-8 rounded-2xl border border-border">
                            <h2 className="text-2xl font-bold mb-4">Applicant Tracking System</h2>
                            <p className="text-muted-foreground mb-6">
                                Manage your entire hiring pipeline from one dashboard. Free for small teams.
                            </p>
                            <Button variant="outline">Learn More</Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
