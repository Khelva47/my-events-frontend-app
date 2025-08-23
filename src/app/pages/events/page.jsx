"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EventCard from "@/components/EventCard"
import EventFilters from "@/components/EventFilters"
import { Button } from "@/components/ui/button"

// Mock data - in real app this would come from API
const mockEvents = [
  {
    id: 1,
    title: "Summer Music Festival 2024",
    description: "Join us for an unforgettable night of music with top artists.",
    image: "/summer-music-festival-stage.png",
    date: "2024-07-15",
    time: "6:00 PM",
    location: "Central Park, New York",
    price: 89,
    category: "Music",
    available: 1200,
  },
  {
    id: 2,
    title: "Tech Innovation Conference",
    description: "Discover the latest trends in technology.",
    image: "/tech-conference-presentation.png",
    date: "2024-08-22",
    time: "9:00 AM",
    location: "Convention Center, San Francisco",
    price: 299,
    category: "Conference",
    available: 450,
  },
  {
    id: 3,
    title: "Basketball Championship",
    description: "Watch the season finale championship game.",
    image: "/basketball-championship.png",
    date: "2024-09-10",
    time: "7:30 PM",
    location: "Sports Arena, Los Angeles",
    price: 125,
    category: "Sports",
    available: 3200,
  },
  {
    id: 4,
    title: "Photography Workshop",
    description: "Learn professional photography techniques.",
    image: "/photography-workshop.png",
    date: "2024-07-28",
    time: "10:00 AM",
    location: "Art Studio, Chicago",
    price: 75,
    category: "Workshop",
    available: 25,
  },
]

export default function EventsPage() {
  const [filteredEvents, setFilteredEvents] = useState(mockEvents)
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 6

  const handleFilterChange = (filters) => {
    let filtered = mockEvents

    if (filters.category && filters.category !== "all") {
      filtered = filtered.filter((event) => event.category.toLowerCase() === filters.category.toLowerCase())
    }

    if (filters.priceRange) {
      filtered = filtered.filter((event) => {
        if (filters.priceRange === "under-50") return event.price < 50
        if (filters.priceRange === "50-100") return event.price >= 50 && event.price <= 100
        if (filters.priceRange === "100-200") return event.price > 100 && event.price <= 200
        if (filters.priceRange === "over-200") return event.price > 200
        return true
      })
    }

    if (filters.date) {
      filtered = filtered.filter((event) => event.date >= filters.date)
    }

    setFilteredEvents(filtered)
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)
  const startIndex = (currentPage - 1) * eventsPerPage
  const currentEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Browse Events</h1>
          <p className="text-muted-foreground">Discover amazing events happening near you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <EventFilters onFilterChange={handleFilterChange} />
          </div>

          {/* Events Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-muted-foreground">
                Showing {startIndex + 1}-{Math.min(startIndex + eventsPerPage, filteredEvents.length)} of{" "}
                {filteredEvents.length} events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i + 1}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
