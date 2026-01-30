import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-3xl prose dark:prose-invert">
                    <h1>Terms of Service</h1>
                    <p>Last updated: Jan 30, 2026</p>
                    <p>Welcome to JobGenius. By using our website, you agree to these terms.</p>
                    <h2>1. Accounts</h2>
                    <p>You must provide accurate information when creating an account.</p>
                    <h2>2. Job Postings</h2>
                    <p>Employers must post legitimate jobs. We reserve the right to remove scams.</p>
                    <h2>3. Content</h2>
                    <p>You own the content you post, but give us a license to display it.</p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
