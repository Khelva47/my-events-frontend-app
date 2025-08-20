import { Card, CardContent } from "@/components/ui/card"
import { Search, CreditCard, Ticket, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse Events",
    description: "Search and discover events by category, location, or date that match your interests.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Purchase tickets safely with our secure payment system supporting multiple payment methods.",
  },
  {
    icon: Ticket,
    title: "Get Your Tickets",
    description: "Receive digital tickets via email with QR codes, or opt for physical tickets to be mailed.",
  },
  {
    icon: CheckCircle,
    title: "Attend Event",
    description: "Show your ticket at the venue for quick entry. QR codes are scanned for instant verification.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting tickets for your favorite events is simple and secure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={index} className="text-center relative">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
