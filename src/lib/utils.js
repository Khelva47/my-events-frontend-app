import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount)
}

export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Intl.DateTimeFormat("en-US", { ...defaultOptions, ...options }).format(date)
}

export function formatTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date)
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export function truncate(text, length = 100) {
  if (text.length <= length) return text
  return text.substring(0, length).trim() + "..."
}

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone) {
  const phoneRegex = /^\+?[\d\s\-$$$$]{10,}$/
  return phoneRegex.test(phone)
}

export function getEventStatus(startDate, endDate) {
  const now = new Date()
  const start = new Date(startDate)
  const end = new Date(endDate)

  if (now < start) return "upcoming"
  if (now >= start && now <= end) return "ongoing"
  return "ended"
}

export function getDaysUntilEvent(eventDate) {
  const now = new Date()
  const event = new Date(eventDate)
  const diffTime = event - now
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export function generateEventId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
