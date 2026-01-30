import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { JobFilters } from "@/components/jobs/JobFilters"
import { JobHeader } from "@/components/jobs/JobHeader"
import { JobCard, type Job } from "@/components/home/JobCard"
import { Button } from "@/components/ui/button"

// Expanded Mock Data
const JOBS: Job[] = [
    { id: '1', title: "Senior Product Designer", company: "Linear", location: "San Francisco, CA", type: "Full-time", salary: "$140k - $180k", postedAt: "2h ago", tags: ["Design", "Remote", "Figma"] },
    { id: '2', title: "Frontend Developer", company: "Vercel", location: "Remote", type: "Full-time", salary: "$120k - $160k", postedAt: "5h ago", tags: ["React", "Next.js", "TypeScript"] },
    { id: '3', title: "Marketing Manager", company: "Notion", location: "New York, NY", type: "Full-time", salary: "$100k - $140k", postedAt: "1d ago", tags: ["Marketing", "Growth", "SaaS"] },
    { id: '4', title: "Backend Engineer", company: "Supabase", location: "Singapore", type: "Remote", salary: "$130k - $170k", postedAt: "1d ago", tags: ["PostgreSQL", "Go", "Cloud"] },
    { id: '5', title: "Staff Software Engineer", company: "Airbnb", location: "Remote", type: "Full-time", salary: "$200k - $240k", postedAt: "2d ago", tags: ["System Design", "Java", "React"] },
    { id: '6', title: "Customer Success Lead", company: "Intercom", location: "Dublin, IE", type: "Hybrid", salary: "$90k - $120k", postedAt: "3d ago", tags: ["Support", "CRM", "Tech"] },
    { id: '7', title: "DevOps Engineer", company: "Stripe", location: "Seattle, WA", type: "Full-time", salary: "$160k - $210k", postedAt: "3d ago", tags: ["AWS", "Kubernetes", "Terraform"] },
    { id: '8', title: "UX Writer", company: "Spotify", location: "Remote", type: "Contract", salary: "$80k - $100k", postedAt: "4d ago", tags: ["Copywriting", "UX", "Music"] },
]

export default function JobsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-1 pt-20"> {/* Offset for Fixed Header */}
                {/* Page Title & Breadcrumb (Optional) */}
                <div className="bg-muted/20 border-b border-border py-8">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl font-bold tracking-tight">Search Jobs</h1>
                        <p className="text-muted-foreground mt-2">Showing 2,304 jobs matching your criteria</p>
                    </div>
                </div>

                <JobHeader />

                <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar Filters */}
                    <aside className="hidden md:block col-span-1">
                        <div className="sticky top-40 bg-card border border-border rounded-xl p-6 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-semibold text-lg">Filters</h2>
                                <button className="text-xs text-primary hover:underline">Reset</button>
                            </div>
                            <JobFilters />
                        </div>
                    </aside>

                    {/* Job Grid */}
                    <div className="col-span-1 md:col-span-3 space-y-4">
                        {JOBS.map(job => (
                            <JobCard key={job.id} job={job} variant="list" />
                        ))}

                        <div className="flex justify-center pt-8">
                            <Button variant="outline" size="lg">Load More Jobs</Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
