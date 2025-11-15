"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Rocket } from "lucide-react"

export function FinalCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-background to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Rocket className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary font-medium">Limited Pilot Program</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">See Your ROI in 2 Days</h2>
              <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto">
                We are now accepting medium and large real estate firms into our exclusive pilot program. We can get you
                set up and running in just 2 days.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+972 50-123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-secondary border-border"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base h-12"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                {"By submitting, you agree to our terms and privacy policy."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
