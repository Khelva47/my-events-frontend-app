"use client"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Calendar, CreditCard, Ticket, Users, Shield, Clock, Star } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      icon: Search,
      title: "Discover Events",
      description:
        "Browse through thousands of events in your area or search for specific types of events you're interested in.",
    },
    {
      icon: Calendar,
      title: "Choose Your Event",
      description:
        "Select the perfect event, check the date, time, location, and read all the details to make sure it's right for you.",
    },
    {
      icon: CreditCard,
      title: "Secure Purchase",
      description: "Buy your tickets securely with our encrypted payment system. Choose from multiple payment options.",
    },
    {
      icon: Ticket,
      title: "Get Your Tickets",
      description:
        "Receive your tickets instantly via email or choose physical delivery. Show your ticket at the event entrance.",
    },
  ]

  const organizerSteps = [
    {
      icon: Users,
      title: "Create Your Event",
      description:
        "Set up your event with all the details, pricing, and capacity. Upload images and write compelling descriptions.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your event is hosted on our secure platform with fraud protection and reliable payment processing.",
    },
    {
      icon: Clock,
      title: "Real-time Management",
      description: "Track ticket sales, manage attendees, and get real-time analytics about your event performance.",
    },
    {
      icon: Star,
      title: "Get Paid",
      description: "Receive payments directly to your account with transparent fees and detailed financial reporting.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">How EventTix Works</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Simple, secure, and reliable event ticketing for everyone
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* For Event Attendees */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">For Event Attendees</h2>
            <p className="text-muted-foreground">Find and attend amazing events in just a few clicks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/pages/events">Start Browsing Events</Link>
            </Button>
          </div>
        </div>

        {/* For Event Organizers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">For Event Organizers</h2>
            <p className="text-muted-foreground">Create and manage successful events with our powerful tools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {organizerSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/pages/create-event">Create Your First Event</Link>
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-muted/50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose EventTix?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Reliable</h3>
              <p className="text-muted-foreground">Bank-level security with 99.9% uptime guarantee</p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Instant Delivery</h3>
              <p className="text-muted-foreground">Get your tickets immediately after purchase</p>
            </div>

            <div className="text-center">
              <Star className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock customer support when you need it</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
