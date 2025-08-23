"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import TicketPurchase from "@/components/TicketPurchase"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, Share2, Heart } from "lucide-react"

// Mock event data - in real app this would come from API
const mockEvent = {
  id: 1,
  title: "Summer Music Festival 2024",
  description:
    "Join us for an unforgettable night of music with top artists from around the world. This festival features multiple stages, food vendors, and an amazing atmosphere that will create memories to last a lifetime.",
  longDescription:
    "The Summer Music Festival 2024 is the biggest music event of the year, featuring over 50 artists across 5 different stages. From indie rock to electronic dance music, there's something for everyone. The festival includes food trucks, art installations, and interactive experiences that make it more than just a concert.",
  image: "/summer-music-festival-stage.png",
  date: "2024-07-15",
  time: "6:00 PM",
  endTime: "11:00 PM",
  location: "Central Park, New York",
  venue: "Great Lawn",
  category: "Music",
  organizer: "NYC Events Co.",
  totalCapacity: 5000,
  availableTickets: 1200,
  ticketTypes: [
    {
      id: 1,
      name: "General Admission",
      price: 89,
      description: "Access to all stages and festival grounds",
      available: 800,
    },
    {
      id: 2,
      name: "VIP Experience",
      price: 199,
      description: "Premium viewing area, complimentary drinks, and exclusive merchandise",
      available: 150,
    },
    {
      id: 3,
      name: "Backstage Pass",
      price: 399,
      description: "Meet & greet with artists, backstage access, and VIP amenities",
      available: 25,
    },
  ],
  features: [
    "Multiple music stages",
    "Food and beverage vendors",
    "Art installations",
    "Merchandise booths",
    "Free parking available",
  ],
}

export default function EventDetailPage() {
  const params = useParams()
  const [selectedTicketType, setSelectedTicketType] = useState(null)
  const [showPurchase, setShowPurchase] = useState(false)

  const handleTicketSelect = (ticketType) => {
    setSelectedTicketType(ticketType)
    setShowPurchase(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Event Header */}
        <div className="bg-card rounded-lg shadow-sm overflow-hidden mb-8 border">
          <div className="relative">
            <img
              src={mockEvent.image || "/placeholder.svg"}
              alt={mockEvent.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {mockEvent.category}
              </Badge>
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button size="sm" variant="secondary">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button size="sm" variant="secondary">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{mockEvent.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-5 w-5 mr-3" />
                <div>
                  <p className="font-medium text-foreground">{new Date(mockEvent.date).toLocaleDateString()}</p>
                  <p className="text-sm">
                    {mockEvent.time} - {mockEvent.endTime}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-5 w-5 mr-3" />
                <div>
                  <p className="font-medium text-foreground">{mockEvent.venue}</p>
                  <p className="text-sm">{mockEvent.location}</p>
                </div>
              </div>

              <div className="flex items-center text-muted-foreground">
                <Users className="h-5 w-5 mr-3" />
                <div>
                  <p className="font-medium text-foreground">{mockEvent.availableTickets} available</p>
                  <p className="text-sm">of {mockEvent.totalCapacity} total</p>
                </div>
              </div>

              <div className="flex items-center text-muted-foreground">
                <Clock className="h-5 w-5 mr-3" />
                <div>
                  <p className="font-medium text-foreground">5 hours</p>
                  <p className="text-sm">Duration</p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">{mockEvent.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-card rounded-lg shadow-sm p-8 border">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Event</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{mockEvent.longDescription}</p>

              <h3 className="text-xl font-semibold text-foreground mb-4">What's Included</h3>
              <ul className="space-y-2">
                {mockEvent.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Organizer Info */}
            <div className="bg-card rounded-lg shadow-sm p-8 border">
              <h2 className="text-2xl font-bold text-foreground mb-4">Event Organizer</h2>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{mockEvent.organizer}</h3>
                  <p className="text-muted-foreground">Professional event organizer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Purchase Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-sm p-6 sticky top-8 border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Select Tickets</h2>

              <div className="space-y-4">
                {mockEvent.ticketTypes.map((ticketType) => (
                  <div key={ticketType.id} className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-foreground">{ticketType.name}</h3>
                      <span className="text-2xl font-bold text-blue-600">${ticketType.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{ticketType.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{ticketType.available} available</span>
                      <Button onClick={() => handleTicketSelect(ticketType)} disabled={ticketType.available === 0}>
                        {ticketType.available === 0 ? "Sold Out" : "Select"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      {showPurchase && selectedTicketType && (
        <TicketPurchase event={mockEvent} ticketType={selectedTicketType} onClose={() => setShowPurchase(false)} />
      )}

      <Footer />
    </div>
  )
}
