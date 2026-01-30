import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Building2, Users, MapPin } from "lucide-react"

// Mock Data
const COMPANIES = [
    { name: "Stripe", industry: "Fintech", location: "San Francisco, CA", jobs: 42, logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "Airbnb", industry: "Travel", location: "Remote", jobs: 15, logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
    { name: "Vercel", industry: "Cloud Infrastructure", location: "Remote", jobs: 8, logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    { name: "Linear", industry: "Productivity", location: "San Francisco, CA", jobs: 5, logo: "" },
    { name: "Notion", industry: "Collaboration", location: "New York, NY", jobs: 12, logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { name: "Figma", industry: "Design Tools", location: "San Francisco, CA", jobs: 23, logo: "" },
]

export default function CompaniesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Top Companies Hiring Now</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Discover companies with the best culture, benefits, and missions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {COMPANIES.map((company) => (
                            <div key={company.name} className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all flex flex-col items-center text-center">
                                <div className="size-16 bg-muted rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                                    {company.logo ? (
                                        <img src={company.logo} alt={company.name} className="w-10 h-10 object-contain" />
                                    ) : (
                                        <Building2 className="text-muted-foreground size-8" />
                                    )}
                                </div>
                                <h3 className="font-bold text-xl mb-1">{company.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{company.industry}</p>

                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                    <span className="flex items-center gap-1"><MapPin className="size-3.5" /> {company.location}</span>
                                    <span className="flex items-center gap-1"><Users className="size-3.5" /> 500+</span>
                                </div>

                                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    View {company.jobs} Open Jobs
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
