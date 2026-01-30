import Link from "next/link"
import { Briefcase, Twitter, Linkedin, Facebook } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border mt-20">
            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                                <Briefcase className="size-5" />
                            </div>
                            <span className="font-bold text-xl tracking-tight">JobGenius</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Connecting the world's best talent with the world's best companies. Join 5,000+ teams hiring today.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="size-5" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="size-5" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="size-5" /></Link>
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="font-semibold mb-4">For Candidates</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/jobs" className="hover:text-primary">Browse Jobs</Link></li>
                            <li><Link href="/categories" className="hover:text-primary">Browse Categories</Link></li>
                            <li><Link href="/companies" className="hover:text-primary">Company Directory</Link></li>
                            <li><Link href="/salaries" className="hover:text-primary">Salary Calculator</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="font-semibold mb-4">For Employers</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/post-job" className="hover:text-primary">Post a Job</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary">Pricing Plans</Link></li>
                            <li><Link href="/products" className="hover:text-primary">Recruiting Solutions</Link></li>
                            <li><Link href="/resources" className="hover:text-primary">HR Resources</Link></li>
                        </ul>
                    </div>

                    {/* Links 3 */}
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/help" className="hover:text-primary">Help Center</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© 2026 JobGenius Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>Made with ♥ for code</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
