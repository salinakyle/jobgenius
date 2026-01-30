import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { TrendingJobs } from "@/components/home/TrendingJobs"
import { EmployerSection } from "@/components/home/EmployerSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        <TrendingJobs />
        <EmployerSection />
      </main>

      <Footer />
    </div>
  )
}
