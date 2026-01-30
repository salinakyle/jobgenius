"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, CreditCard, Sparkles } from "lucide-react"

export default function PostJobPage() {
    return (
        <div className="flex flex-col min-h-screen bg-muted/10">
            <Header />

            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Post a Job</h1>
                        <p className="text-xl text-muted-foreground">Find your next star employee.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Form Section */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Step 1: Job Details */}
                            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">1</span>
                                    Job Details
                                </h2>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Job Title</Label>
                                        <Input id="title" placeholder="e.g. Senior Software Engineer" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="category">Category</Label>
                                            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus:ring-1 focus:ring-ring">
                                                <option>Engineering</option>
                                                <option>Design</option>
                                                <option>Marketing</option>
                                                <option>Sales</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="type">Employment Type</Label>
                                            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus:ring-1 focus:ring-ring">
                                                <option>Full-time</option>
                                                <option>Part-time</option>
                                                <option>Contract</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Job Description</Label>
                                        <Textarea id="description" placeholder="Enter the job description..." className="min-h-[200px]" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="location">Location</Label>
                                        <Input id="location" placeholder="e.g. San Francisco, CA or Remote" />
                                    </div>
                                </div>
                            </div>

                            {/* Step 2: Company Details */}
                            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">2</span>
                                    Company Details
                                </h2>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company Name</Label>
                                        <Input id="company" placeholder="e.g. Acme Inc." />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="website">Website</Label>
                                        <Input id="website" type="url" placeholder="https://..." />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="logo">Logo</Label>
                                        <div className="border-2 border-dashed border-input rounded-lg p-8 text-center hover:bg-muted/50 cursor-pointer transition-colors">
                                            <p className="text-sm text-muted-foreground">Drag and drop your logo here, or click to browse.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar: Pricing */}
                        <div className="space-y-6">
                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
                                <h2 className="font-bold text-lg mb-4">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="font-bold">Standard Post</h3>
                                            <span className="font-bold text-xl">$299</span>
                                        </div>
                                        <ul className="text-sm space-y-2 text-muted-foreground">
                                            <li className="flex gap-2"><Check className="size-4 text-green-500" /> Live for 30 days</li>
                                            <li className="flex gap-2"><Check className="size-4 text-green-500" /> Email to candidates</li>
                                            <li className="flex gap-2"><Check className="size-4 text-green-500" /> Brand logo included</li>
                                        </ul>
                                    </div>

                                    <div className="flex items-start gap-3 p-4 border border-border rounded-lg opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
                                        <div className="mt-1"><Sparkles className="size-5 text-amber-500" /></div>
                                        <div>
                                            <div className="flex justify-between">
                                                <h3 className="font-medium">Highlight Post</h3>
                                                <span className="font-medium">+$99</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">Get 2x more views with a highlighted background.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-border pt-4 mb-6">
                                    <div className="flex justify-between items-center text-lg font-bold">
                                        <span>Total</span>
                                        <span>$299</span>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full h-12 text-base shadow-lg shadow-primary/20">
                                    Post Job Now
                                </Button>
                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    By posting, you agree to our Terms of Service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
