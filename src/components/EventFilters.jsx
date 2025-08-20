"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EventFilters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: "any",
    date: "",
    location: "",
  })

  const handleFilterUpdate = (key, value) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = {
      category: "all",
      priceRange: "any",
      date: "",
      location: "",
    }
    setFilters(clearedFilters)
    onFilterChange(clearedFilters)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div>
          <Label htmlFor="category">Category</Label>
          <Select value={filters.category} onValueChange={(value) => handleFilterUpdate("category", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="conference">Conference</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <div>
          <Label htmlFor="price">Price Range</Label>
          <Select value={filters.priceRange} onValueChange={(value) => handleFilterUpdate("priceRange", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Price</SelectItem>
              <SelectItem value="under-50">Under $50</SelectItem>
              <SelectItem value="50-100">$50 - $100</SelectItem>
              <SelectItem value="100-200">$100 - $200</SelectItem>
              <SelectItem value="over-200">Over $200</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Filter */}
        <div>
          <Label htmlFor="date">Date From</Label>
          <Input type="date" value={filters.date} onChange={(e) => handleFilterUpdate("date", e.target.value)} />
        </div>

        {/* Location Filter */}
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            placeholder="Enter city or venue"
            value={filters.location}
            onChange={(e) => handleFilterUpdate("location", e.target.value)}
          />
        </div>

        <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
          Clear Filters
        </Button>
      </CardContent>
    </Card>
  )
}
