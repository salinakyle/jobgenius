"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function JobFilters() {
    return (
        <div className="space-y-8">
            {/* Job Type */}
            <div className="space-y-4">
                <h3 className="font-semibold text-sm text-foreground">Job Type</h3>
                <div className="space-y-3">
                    {["Full-time", "Contract", "Part-time", "Internship", "Freelance"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={`type-${type}`} />
                            <Label htmlFor={`type-${type}`} className="text-sm text-muted-foreground font-normal cursor-pointer">
                                {type}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Salary Range */}
            <div className="space-y-4">
                <h3 className="font-semibold text-sm text-foreground">Salary Range</h3>
                <Slider defaultValue={[50]} max={200} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>$30k</span>
                    <span>$200k+</span>
                </div>
            </div>

            {/* Experience Level */}
            <div className="space-y-4">
                <h3 className="font-semibold text-sm text-foreground">Experience Level</h3>
                <div className="space-y-3">
                    {["Entry Level", "Mid Level", "Senior", "Director", "Executive"].map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                            <Checkbox id={`level-${level}`} />
                            <Label htmlFor={`level-${level}`} className="text-sm text-muted-foreground font-normal cursor-pointer">
                                {level}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Remote */}
            <div className="space-y-4">
                <h3 className="font-semibold text-sm text-foreground">Remote Options</h3>
                <div className="space-y-3">
                    {["Remote", "On-site", "Hybrid"].map((opt) => (
                        <div key={opt} className="flex items-center space-x-2">
                            <Checkbox id={`remote-${opt}`} />
                            <Label htmlFor={`remote-${opt}`} className="text-sm text-muted-foreground font-normal cursor-pointer">
                                {opt}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <Button variant="outline" className="w-full">
                Clear Filters
            </Button>
        </div>
    )
}
