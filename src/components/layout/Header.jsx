"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, User } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-foreground">EventTix</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/pages/events" className="text-muted-foreground hover:text-blue-600 transition-colors">
              Browse Events
            </Link>
            <Link href="/pages/create-event" className="text-muted-foreground hover:text-blue-600 transition-colors">
              Create Event
            </Link>
            <Link href="/pages/how-it-works" className="text-muted-foreground hover:text-blue-600 transition-colors">
              How It Works
            </Link>
          </nav>

          {/* Desktop Auth Buttons and Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button variant="ghost" asChild>
              <Link href="/pages/login">
                <User className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link href="/pages/register">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/pages/events" className="text-muted-foreground hover:text-blue-600 transition-colors">
                Browse Events
              </Link>
              <Link href="/pages/create-event" className="text-muted-foreground hover:text-blue-600 transition-colors">
                Create Event
              </Link>
              <Link href="/pages/how-it-works" className="text-muted-foreground hover:text-blue-600 transition-colors">
                How It Works
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <div className="flex justify-center pb-2">
                  <ModeToggle />
                </div>
                <Button variant="ghost" asChild>
                  <Link href="/pages/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/pages/register">Sign Up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
