"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Briefcase } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/40 py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:scale-105 transition-transform">
                        <Briefcase className="size-5" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">JobGenius</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/jobs" className="text-sm font-medium hover:text-primary transition-colors">Find Jobs</Link>
                    <Link href="/companies" className="text-sm font-medium hover:text-primary transition-colors">Companies</Link>
                    <Link href="/salaries" className="text-sm font-medium hover:text-primary transition-colors">Salaries</Link>
                    <Link href="/advice" className="text-sm font-medium hover:text-primary transition-colors">Advice</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="hidden sm:inline-flex" asChild>
                        <Link href="/login">Sign In</Link>
                    </Button>
                    <Button className="font-semibold shadow-lg shadow-primary/20" asChild>
                        <Link href="/post-job">Post a Job</Link>
                    </Button>

                    {/* Mobile Menu */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="size-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}
