import Header from "@/components/layout/Header"
import Hero from "@/components/Hero"
import EventCategories from "@/components/EventCategories"
import FeaturedEvents from "@/components/FeaturedEvents"
import HowItWorks from "@/components/HowItWorks"
import Footer from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EventCategories />
        <FeaturedEvents />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
