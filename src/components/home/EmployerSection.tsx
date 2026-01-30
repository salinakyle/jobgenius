import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export function EmployerSection() {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[50%] h-full bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-8">
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium border border-indigo-500/30">
                        For Employers
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Hire the top 1% of talent, <br />
                        <span className="text-indigo-400">faster than ever.</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                        Stop sifting through unqualified resumes. Our AI-driven matching engine connects you with candidates who fit your stack and culture perfectly.
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Access to 5M+ vetted candidates",
                            "AI-powered skills verification",
                            "Integrated video interviewing",
                            "Seamless ATS Integration"
                        ].map(item => (
                            <li key={item} className="flex items-center gap-3 text-slate-200">
                                <CheckCircle className="size-5 text-emerald-400" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                            Post a Job for Free
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-slate-700 hover:bg-slate-800 hover:text-white">
                            Contact Sales
                        </Button>
                    </div>
                </div>

                {/* Simple Visual Placeholder for Dashboard UI */}
                <div className="flex-1 w-full relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm aspect-[4/3] p-6 group">
                        {/* Mock UI Elements */}
                        <div className="flex items-center justify-between mb-8">
                            <div className="w-32 h-8 bg-slate-700 rounded animate-pulse" />
                            <div className="w-8 h-8 bg-indigo-500 rounded-full" />
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-slate-700/50 border border-slate-600/50 hover:bg-slate-700 transition-colors">
                                    <div className="size-10 rounded-full bg-slate-600" />
                                    <div className="flex-1 space-y-2">
                                        <div className="w-24 h-4 bg-slate-600 rounded" />
                                        <div className="w-40 h-3 bg-slate-600/50 rounded" />
                                    </div>
                                    <div className="px-3 py-1 rounded bg-green-500/20 text-green-400 text-xs">98% Match</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
