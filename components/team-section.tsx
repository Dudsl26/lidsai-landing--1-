import { Linkedin } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Dudi Lerech",
      role: "Data Expert",
      image: "/professional-data-scientist.png",
      linkedin: "#",
    },
    {
      name: "Itai Birenshtok",
      role: "Tech & Product Leader",
      image: "/professional-tech-leader.png",
      linkedin: "#",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">Built by Industry Experts</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Our team combines deep expertise in data science, AI, and real estate technology to deliver results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="aspect-square relative overflow-hidden bg-secondary">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-muted-foreground mb-4">{member.role}</p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
