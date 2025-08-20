import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import Header from "./Header"

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Discover Amazing <span className="text-blue-600">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Find and book tickets for concerts, conferences, sports events, and workshops. Create unforgettable
            experiences with EventTix.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-card rounded-lg shadow-lg p-6 border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Search events..." className="pl-10 h-12" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Location" className="pl-10 h-12" />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input type="date" className="pl-10 h-12" />
                </div>
              </div>
              <Button className="w-full mt-4 h-12 text-lg" asChild>
                <Link href="/events">Search Events</Link>
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/events">Browse Events</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
              <Link href="/create-event">Create Event</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
