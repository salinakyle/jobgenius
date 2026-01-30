import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function HelpPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold tracking-tight mb-6">How can we help?</h1>
                        <div className="relative max-w-xl mx-auto">
                            <Search className="absolute left-3 top-3 text-muted-foreground size-5" />
                            <Input placeholder="Search for help articles..." className="pl-10 h-12 text-lg" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold">For Candidates</h2>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-primary hover:underline">How do I upload my resume?</a></li>
                                <li><a href="#" className="text-primary hover:underline">Can I hide my profile?</a></li>
                                <li><a href="#" className="text-primary hover:underline">How to set up job alerts</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold">For Employers</h2>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-primary hover:underline">How do I post a job?</a></li>
                                <li><a href="#" className="text-primary hover:underline">Pricing and billing</a></li>
                                <li><a href="#" className="text-primary hover:underline">Managing candidates</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
