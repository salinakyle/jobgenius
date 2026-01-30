import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

const POSTS = [
    { slug: "resume-tips-2026", title: "10 Resume Tips for the AI Era", category: "Career Advice", date: "Jan 12, 2026", image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80" },
    { slug: "negotiating-salary", title: "How to Negotiate Your Salary Like a Pro", category: "Finance", date: "Jan 08, 2026", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" },
    { slug: "remote-work-trends", title: "The Future of Remote Work in 2026", category: "Trends", date: "Dec 28, 2025", image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&q=80" },
    { slug: "acing-technical-interviews", title: "Acing Technical Interviews: A Guide", category: "Interviewing", date: "Dec 15, 2025", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" },
]

export default function AdvicePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">Career Advice Blog</span>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-6">Level Up Your Career</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Expert tips, industry trends, and practical guides to help you land your dream job.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {POSTS.map((post) => (
                            <Link key={post.slug} href={`/advice/${post.slug}`} className="group block">
                                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                                    <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="text-sm text-muted-foreground">{post.date}</div>
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                                    <p className="text-muted-foreground line-clamp-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <span className="inline-flex items-center text-primary font-medium">Read Article →</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg">Load More Articles</Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
