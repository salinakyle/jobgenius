import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PricingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-muted-foreground mb-16">Choose the plan that fits your hiring needs.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* Starter */}
                        <div className="border border-border rounded-2xl p-8 bg-card flex flex-col">
                            <h3 className="text-xl font-bold mb-2">Starter</h3>
                            <div className="text-4xl font-bold mb-6">$199<span className="text-base font-normal text-muted-foreground">/post</span></div>
                            <p className="text-muted-foreground mb-6">Perfect for small teams hiring occasionally.</p>
                            <Button variant="outline" className="w-full mb-8">Get Started</Button>
                            <ul className="space-y-4 text-left text-sm">
                                <li className="flex gap-2"><Check className="size-4 text-green-500" /> Live for 30 days</li>
                                <li className="flex gap-2"><Check className="size-4 text-green-500" /> Basic placement</li>
                                <li className="flex gap-2"><Check className="size-4 text-green-500" /> Email support</li>
                            </ul>
                        </div>

                        {/* Growth */}
                        <div className="border-2 border-primary rounded-2xl p-8 bg-card flex flex-col relative shadow-xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                                Most Popular
                            </div>
                            <h3 className="text-xl font-bold mb-2">Growth</h3>
                            <div className="text-4xl font-bold mb-6">$299<span className="text-base font-normal text-muted-foreground">/post</span></div>
                            <p className="text-muted-foreground mb-6">For growing startups needing quality talent fast.</p>
                            <Button className="w-full mb-8">Get Started</Button>
                            <ul className="space-y-4 text-left text-sm">
                                <li className="flex gap-2"><Check className="size-4 text-green-500" /> Everything in Starter</li>
                                <li className="flex gap-2"><Check className="size-4 text-green-500" /> Highlighted post</li>
                                <li className="flex gap-2"><Check className="size-4 text-green-500" /> Matches emailed to candidates</li>
                                <li className="flex gap-2"><Check className="size-4 text-green-500" /> 2x views guarantee</li>
                            </ul>
                        </div>

                        {/* Enterprise */}
                        <div className="border border-border rounded-2xl p-8 bg-card flex flex-col">
                            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                            <div className="text-4xl font-bold mb-6">Custom</div>
                            <p className="text-muted-foreground mb-6">Volume hiring for large organizations.</p>
                            <Button variant="outline" className="w-full mb-8">Contact Sales</Button>
                            <ul className="space-y-4 text-left text-sm">
                                <li className="flex gap-2"><Check className="size-4 text-green-500" /> Unlimited slots</li>
                                <li className="flex gap-2"><Check className="size-4 text-green-500" /> Dedicated account manager</li>
                                <li className="flex gap-2"><Check className="size-4 text-green-500" /> API Access</li>
                                <li className="flex gap-2"><Check className="size-4 text-green-500" /> ATS Integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
