import { AlertCircle, TrendingDown, Target } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Untapped Lead Database",
      description:
        "Your CRM is full of tens of thousands of untapped leads collecting dust while you spend money acquiring new ones.",
    },
    {
      icon: TrendingDown,
      title: "High Acquisition Costs",
      description:
        "Lead acquisition costs exceed ₪200 per lead, and most leads are never re-engaged after the initial contact.",
    },
    {
      icon: Target,
      title: "Missed Opportunities",
      description:
        "Your campaigns keep targeting the same clients, missing real opportunities hidden in your existing database.",
    },
  ]

  return (
    <section id="problem" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">Are You Wasting Your Marketing Budget?</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Most real estate companies are sitting on a goldmine of dormant leads while continuously spending on
            expensive new lead acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors"
            >
              <div className="p-3 bg-destructive/10 rounded-lg w-fit mb-6">
                <problem.icon className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
