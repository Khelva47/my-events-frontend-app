import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

const featuredEvents = [
  {
    id: 1,
    title: "Summer Music Festival 2024",
    description: "Join us for an unforgettable night of music with top artists from around the world.",
    image: "/summer-music-festival-stage.png",
    date: "2024-07-15",
    time: "6:00 PM",
    location: "Central Park, New York",
    price: "From $89",
    category: "Music",
    attendees: 5000,
    available: 1200,
  },
  {
    id: 2,
    title: "Tech Innovation Conference",
    description: "Discover the latest trends in technology and network with industry leaders.",
    image: "/tech-conference-presentation.png",
    date: "2024-08-22",
    time: "9:00 AM",
    location: "Convention Center, San Francisco",
    price: "From $299",
    category: "Conference",
    attendees: 2000,
    available: 450,
  },
  {
    id: 3,
    title: "Championship Basketball Game",
    description: "Watch the season finale as two top teams compete for the championship title.",
    image: "/basketball-championship.png",
    date: "2024-09-10",
    time: "7:30 PM",
    location: "Sports Arena, Los Angeles",
    price: "From $125",
    category: "Sports",
    attendees: 15000,
    available: 3200,
  },
]

export default function FeaturedEvents() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Events</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on these popular events happening near you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {event.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(event.date).toLocaleDateString()} at {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {event.available} tickets available
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-blue-600">{event.price}</span>
                </div>
                <Button asChild>
                  <Link href={`/events/${event.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
