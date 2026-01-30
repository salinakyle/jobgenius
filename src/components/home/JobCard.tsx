import { Heart, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface Job {
    id: string
    title: string
    company: string
    logo?: string
    location: string
    type: string
    salary: string
    tags: string[]
    postedAt: string
}

interface JobCardProps {
    job: Job
    variant?: "grid" | "list"
}

export function JobCard({ job, variant = "grid" }: JobCardProps) {
    if (variant === "list") {
        return (
            <div className="group relative flex flex-col md:flex-row md:items-center gap-6 p-6 bg-card border border-border rounded-xl transition-all hover:shadow-lg hover:border-primary/30">
                <div className="flex-shrink-0">
                    <div className="size-16 rounded-lg bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground uppercase overflow-hidden">
                        {job.logo ? <img src={job.logo} alt={job.company} className="w-full h-full object-cover" /> : job.company.substring(0, 2)}
                    </div>
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{job.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm font-medium text-foreground">{job.company}</span>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-sm text-muted-foreground">{job.type}</span>
                            </div>
                        </div>
                        <button className="text-muted-foreground hover:text-red-500 transition-colors md:hidden">
                            <Heart className="size-5" />
                        </button>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="size-3.5" /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="size-3.5" /> {job.postedAt}</span>
                        <div className="inline-block px-2 py-0.5 rounded-md bg-green-50 text-green-700 text-xs font-semibold dark:bg-green-900/30 dark:text-green-400">
                            {job.salary}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:items-end gap-3 flex-shrink-0 mt-4 md:mt-0">
                    <div className="hidden md:block">
                        <button className="text-muted-foreground hover:text-red-500 transition-colors bg-accent/50 p-2 rounded-full hover:bg-accent">
                            <Heart className="size-5" />
                        </button>
                    </div>
                    <Button className="w-full md:w-auto opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                        Apply Now
                    </Button>
                    <div className="flex gap-2">
                        {job.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-1 rounded-full border border-border text-xs text-muted-foreground bg-gray-50 dark:bg-gray-900">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Grid Variant (Original)
    return (
        <div className="group relative flex flex-col p-6 bg-card border border-border rounded-xl transition-all hover:shadow-lg hover:border-primary/30 h-full">
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                    <div className="size-12 rounded-lg bg-muted flex items-center justify-center text-xl font-bold text-muted-foreground uppercase overflow-hidden">
                        {/* Placeholder for logo */}
                        {job.logo ? <img src={job.logo} alt={job.company} className="w-full h-full object-cover" /> : job.company.substring(0, 2)}
                    </div>
                    <div>
                        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1">{job.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{job.company}</p>
                    </div>
                </div>
                <button className="text-muted-foreground hover:text-red-500 transition-colors">
                    <Heart className="size-5" />
                </button>
            </div>

            <div className="mb-6 space-y-2 flex-1">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="size-3.5" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="size-3.5" /> {job.postedAt}</span>
                </div>
                <div className="inline-block px-2 py-1 rounded-md bg-green-50 text-green-700 text-xs font-semibold dark:bg-green-900/30 dark:text-green-400">
                    {job.salary}
                </div>
            </div>

            <div className="mt-auto flex items-center justify-between gap-4">
                <div className="flex gap-2 flex-wrap">
                    {job.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 rounded-full border border-border text-xs text-muted-foreground bg-gray-50 dark:bg-gray-900">
                            {tag}
                        </span>
                    ))}
                </div>
                <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Apply Now
                </Button>
            </div>
        </div>
    )
}
