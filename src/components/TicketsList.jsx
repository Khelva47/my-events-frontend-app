"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Ticket } from "lucide-react"

export default function TicketsList() {
  const [tickets] = useState([
    {
      id: 1,
      eventTitle: "Summer Music Festival 2024",
      date: "2024-07-15",
      time: "6:00 PM",
      location: "Central Park, New York",
      ticketType: "General Admission",
      status: "confirmed",
    },
    {
      id: 2,
      eventTitle: "Tech Innovation Conference",
      date: "2024-08-22",
      time: "9:00 AM",
      location: "Convention Center, San Francisco",
      ticketType: "VIP Pass",
      status: "confirmed",
    },
  ])

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Tickets</CardTitle>
        <CardDescription>View and manage your event tickets</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{ticket.eventTitle}</h3>
                  <p className="text-sm text-muted-foreground">{ticket.ticketType}</p>
                </div>
                <Badge variant={ticket.status === "confirmed" ? "default" : "secondary"}>{ticket.status}</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(ticket.date).toLocaleDateString()} at {ticket.time}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {ticket.location}
                </div>
                <div className="flex justify-end">
                  <Button size="sm" variant="outline">
                    <Ticket className="h-4 w-4 mr-2" />
                    View Ticket
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
