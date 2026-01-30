import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-32 pb-16">
                <article className="container max-w-3xl mx-auto px-4">
                    {/* Article Header */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                            <span>Career Advice</span>
                            <span>•</span>
                            <span>Jan 12, 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                            10 Resume Tips for the AI Era ({slug})
                        </h1>
                        <div className="flex items-center justify-center gap-3">
                            <div className="size-10 rounded-full bg-slate-200" />
                            <div className="text-left">
                                <div className="font-semibold text-sm">Sarah Jenkins</div>
                                <div className="text-xs text-muted-foreground">HR Specialist</div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="rounded-2xl overflow-hidden mb-12 aspect-video bg-muted">
                        <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80" alt="Resume Tips" className="w-full h-full object-cover" />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert mx-auto">
                        <p className="lead text-xl text-muted-foreground mb-8">
                            In the age of AI recruiting tools, your resume needs to be optimized for both machines and humans. Here's how to stand out.
                        </p>

                        <h2>1. Use quantifiable metrics</h2>
                        <p>Don't just say "managed a team". Say "Managed a team of 12 engineers and increased deployment velocity by 40%". Numbers speak louder than words.</p>

                        <h2>2. Optimize for Keywords</h2>
                        <p>AI scanners look for specific skills. Match your resume keywords to the job description.</p>

                        <blockquote>
                            "The goal isn't to trick the AI, it's to help it understand your value clearly."
                        </blockquote>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non eros nec ex luctus tincidunt. Suspendisse potenti. Nunc vel ligula at libero luctus varius. Duis eget urna sed justo dapibus porta.</p>

                        <div className="bg-primary/5 p-6 rounded-xl border border-primary/20 my-8">
                            <h3 className="text-primary font-bold text-lg mb-2">Need a resume review?</h3>
                            <p className="text-sm mb-4">Our experts can give you personalized feedback in 24 hours.</p>
                            <Button>Get Resume Review</Button>
                        </div>

                        <h2>Conclusion</h2>
                        <p>Your resume is a living document. Keep testing and iterating.</p>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    )
}
