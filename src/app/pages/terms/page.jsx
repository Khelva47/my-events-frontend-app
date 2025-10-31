"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {

    return (
        <div className="min-h-screen bg-background">
            <Header />
            This is the terms page
            <Footer />
        </div>
    )
}