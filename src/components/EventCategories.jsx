import { Card, CardContent } from "@/components/ui/card"
import { Music, Users, Trophy, Briefcase, Heart, Gamepad2 } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Music & Concerts",
    icon: Music,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    count: "1,234",
  },
  {
    name: "Conferences",
    icon: Briefcase,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    count: "567",
  },
  {
    name: "Sports",
    icon: Trophy,
    color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    count: "890",
  },
  {
    name: "Workshops",
    icon: Users,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
    count: "345",
  },
  {
    name: "Social",
    icon: Heart,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
    count: "678",
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400",
    count: "234",
  },
]

export default function EventCategories() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore Event Categories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find events that match your interests from our diverse categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Link key={category.name} href={`/events?category=${category.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} events</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
