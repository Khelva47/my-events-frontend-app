import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function EventCard({ event }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
          <span className="text-2xl font-bold text-blue-600">${event.price}</span>
        </div>
        <Button asChild>
          <Link href={`/pages/events/${event.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
