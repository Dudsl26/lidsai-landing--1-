import { TrendingUp, Users, Rocket, CheckCircle2 } from "lucide-react"

export function TractionSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">Already Making an Impact</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Real estate companies are seeing the value immediately.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-10 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
                <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                11<span className="text-muted-foreground">/12</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Companies we showed this to said they need it immediately
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-10 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="inline-flex p-4 bg-accent/10 rounded-full mb-6">
                <Rocket className="h-12 w-12 text-accent" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                4<span className="text-muted-foreground">/12</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have already started a pilot program with us
              </p>
            </div>
          </div>

          <div className="mt-12 bg-secondary/50 border border-border rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">92%</div>
                  <div className="text-sm text-muted-foreground">Interest Rate</div>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border" />
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">33%</div>
                  <div className="text-sm text-muted-foreground">Conversion to Pilot</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
