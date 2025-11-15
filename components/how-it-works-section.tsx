import { MessageSquare, BarChart3, Search, CheckCircle2 } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Engage",
      description:
        "Automatically start engaging with thousands of leads in your database using AI-powered personalized messaging.",
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Analyze",
      description:
        "Track and analyze all engagement in real-time on one comprehensive dashboard with actionable insights.",
    },
    {
      number: "03",
      icon: Search,
      title: "Identify",
      description:
        "Our system finds and flags the most relevant, high-intent leads based on engagement patterns and behavior.",
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: "Close",
      description:
        "Your team gets a stream of qualified opportunities, not cold leads. Focus on closing, not prospecting.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            From Dormant Lead to Closed Deal in 4 Steps
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Our proven process transforms your existing database into a revenue-generating machine.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}

                <div className="relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 z-10">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
