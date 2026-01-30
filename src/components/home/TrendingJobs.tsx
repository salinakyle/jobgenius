"use client"

import { Button } from "@/components/ui/button"
import { JobCard, type Job } from "./JobCard"

// Mock Data
const JOBS: Job[] = [
    { id: '1', title: "Senior Product Designer", company: "Linear", location: "San Francisco, CA", type: "Full-time", salary: "$140k - $180k", postedAt: "2h ago", tags: ["Design", "Remote", "Figma"] },
    { id: '2', title: "Frontend Developer", company: "Vercel", location: "Remote", type: "Full-time", salary: "$120k - $160k", postedAt: "5h ago", tags: ["React", "Next.js", "TypeScript"] },
    { id: '3', title: "Marketing Manager", company: "Notion", location: "New York, NY", type: "Full-time", salary: "$100k - $140k", postedAt: "1d ago", tags: ["Marketing", "Growth", "SaaS"] },
    { id: '4', title: "Backend Engineer", company: "Supabase", location: "Singapore", type: "Remote", salary: "$130k - $170k", postedAt: "1d ago", tags: ["PostgreSQL", "Go", "Cloud"] },
    { id: '5', title: "Staff Software Engineer", company: "Airbnb", location: "Remote", type: "Full-time", salary: "$200k - $240k", postedAt: "2d ago", tags: ["System Design", "Java", "React"] },
    { id: '6', title: "Customer Success Lead", company: "Intercom", location: "Dublin, IE", type: "Hybrid", salary: "$90k - $120k", postedAt: "3d ago", tags: ["Support", "CRM", "Tech"] },
]

export function TrendingJobs() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Latest Opportunities</h2>
                        <p className="text-muted-foreground text-lg">Hand-picked jobs from top companies.</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">Most Recent</Button>
                        <Button variant="ghost">Recommended</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {JOBS.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button size="lg" variant="secondary" className="px-8">
                        View All 1,240 Jobs
                    </Button>
                </div>
            </div>
        </section>
    )
}
