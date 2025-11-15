import { Sparkles, Zap, Target, TrendingUp } from "lucide-react"

export function SolutionSection() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Engagement",
      description:
        "Automatically engage with thousands of dormant leads using intelligent, personalized communication.",
    },
    {
      icon: Zap,
      title: "Real-Time Analytics",
      description: "Track and analyze all engagement in real-time on one unified dashboard.",
    },
    {
      icon: Target,
      title: "Smart Lead Scoring",
      description: "Our AI identifies and flags the most relevant, high-intent leads automatically.",
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Turn cold leads into qualified opportunities and see measurable results in days, not months.",
    },
  ]

  return (
    <section id="solution" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
            Introducing <span className="text-primary">LidsAI</span>: The One Platform to Activate Your Database
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            LidsAI is a smart engagement and analytics platform built for Israeli real estate. We help you find the
            right leads at the right time, moving them from dormant to sale opportunity automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
