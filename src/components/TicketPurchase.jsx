"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Mail, Printer } from "lucide-react"

export default function TicketPurchase({ event, ticketType, onClose }) {
  const [quantity, setQuantity] = useState(1)
  const [deliveryMethod, setDeliveryMethod] = useState("email")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  })

  const subtotal = ticketType.price * quantity
  const serviceFee = subtotal * 0.05 // 5% service fee
  const deliveryFee = deliveryMethod === "mail" ? 5 : 0
  const total = subtotal + serviceFee + deliveryFee

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePurchase = () => {
    // In real app, this would integrate with payment processor
    alert("Purchase functionality would integrate with payment gateway (Stripe, PayPal, etc.)")
    onClose()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Purchase Tickets</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Event Summary */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
            <p className="text-sm text-muted-foreground">
              {new Date(event.date).toLocaleDateString()} at {event.time}
            </p>
            <p className="text-sm text-muted-foreground">{event.location}</p>
          </div>

          {/* Ticket Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ticket Details</h3>
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="font-medium text-foreground">{ticketType.name}</h4>
                  <p className="text-sm text-muted-foreground">{ticketType.description}</p>
                </div>
                <span className="text-xl font-bold text-blue-600">${ticketType.price}</span>
              </div>

              <div className="flex items-center space-x-4">
                <Label htmlFor="quantity">Quantity:</Label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[...Array(Math.min(10, ticketType.available))].map((_, i) => (
                      <SelectItem key={i + 1} value={(i + 1).toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Delivery Method</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="email"
                  name="delivery"
                  value="email"
                  checked={deliveryMethod === "email"}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <Label htmlFor="email" className="flex items-center cursor-pointer">
                  <Mail className="h-4 w-4 mr-2" />
                  Email (Free) - Digital tickets with QR codes
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  id="mail"
                  name="delivery"
                  value="mail"
                  checked={deliveryMethod === "mail"}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <Label htmlFor="mail" className="flex items-center cursor-pointer">
                  <Printer className="h-4 w-4 mr-2" />
                  Physical Mail (+$5) - Printed tickets delivered to your address
                </Label>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
              </div>
            </div>

            {deliveryMethod === "mail" && (
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>
                  {ticketType.name} x {quantity}
                </span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Service Fee</span>
                <span>${serviceFee.toFixed(2)}</span>
              </div>
              {deliveryFee > 0 && (
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              I agree to the terms and conditions and refund policy
            </Label>
          </div>

          {/* Purchase Button */}
          <div className="flex space-x-4">
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button onClick={handlePurchase} className="flex-1">
              <CreditCard className="h-4 w-4 mr-2" />
              Purchase Tickets
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
