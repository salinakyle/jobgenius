import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-3xl prose dark:prose-invert">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: Jan 30, 2026</p>
                    <p>Your privacy is important to us.</p>
                    <h2>1. Information We Collect</h2>
                    <p>We collect information you provide directly, such as when you create an account or post a job.</p>
                    <h2>2. How We Use It</h2>
                    <p>We use your data to facilitate the hiring process and improve our services.</p>
                    <h2>3. Sharing</h2>
                    <p>We do not sell your personal data to third parties.</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
