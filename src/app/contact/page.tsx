"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Phone } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight mb-4">Get in touch</h1>
                                <p className="text-xl text-muted-foreground">
                                    Have questions about posting a job or finding one? We're here to help.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Mail className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email us</h3>
                                        <p className="text-muted-foreground mb-1">Our friendly team is here to help.</p>
                                        <a href="mailto:support@jobgenius.com" className="text-primary font-medium hover:underline">support@jobgenius.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <MessageSquare className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Live Chat</h3>
                                        <p className="text-muted-foreground mb-1">Mon-Fri from 9am to 6pm EST.</p>
                                        <a href="#" className="text-primary font-medium hover:underline">Start a chat</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Phone className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <p className="text-muted-foreground mb-1">Mon-Fri from 8am to 5pm.</p>
                                        <a href="tel:+15550000000" className="text-primary font-medium hover:underline">+1 (555) 000-0000</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name">First name</Label>
                                        <Input id="first-name" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name">Last name</Label>
                                        <Input id="last-name" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <textarea
                                        id="message"
                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
