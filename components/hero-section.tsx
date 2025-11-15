import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Announcement badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Launching pilot programs in 2 days</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
            Your next sale is already in your <span className="text-primary">CRM</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground text-balance mb-10 max-w-3xl mx-auto leading-relaxed">
            LidsAI turns your thousands of dormant real estate leads into active opportunities. Stop buying new leads
            and start closing the ones you already have.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 bg-transparent">
              See How It Works
            </Button>
          </div>

          {/* Dashboard preview */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative bg-card border border-border rounded-lg p-6 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">45,000+</div>
                    <div className="text-sm text-muted-foreground">Leads Engaged</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">87%</div>
                    <div className="text-sm text-muted-foreground">Response Rate</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-foreground">3.2x</div>
                    <div className="text-sm text-muted-foreground">ROI Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
