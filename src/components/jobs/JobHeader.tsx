"use client"

import { Search, MapPin, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function JobHeader() {
    return (
        <div className="bg-background border-b border-border sticky top-[73px] z-30 py-4 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    {/* Compact Search Bar */}
                    <div className="flex-1 flex gap-2 w-full">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                            <Input placeholder="Job title, keywords..." className="pl-9 bg-card" />
                        </div>
                        <div className="relative flex-1 hidden sm:block">
                            <MapPin className="absolute left-3 top-2.5 size-4 text-muted-foreground" />
                            <Input placeholder="City or zip" className="pl-9 bg-card" />
                        </div>
                        <Button>Search</Button>
                    </div>

                    {/* Mobile Filter Toggle & Sort */}
                    <div className="flex w-full md:w-auto gap-2 justify-between">
                        <Button variant="outline" className="md:hidden flex-1 gap-2">
                            <SlidersHorizontal className="size-4" /> Filters
                        </Button>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
                            <select className="h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                <option>Most Recent</option>
                                <option>Relevance</option>
                                <option>Highest Paid</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
