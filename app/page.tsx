import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TractionSection } from "@/components/traction-section"
import { TeamSection } from "@/components/team-section"
import { FinalCTASection } from "@/components/final-cta-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <TractionSection />
        <TeamSection />
        <FinalCTASection />
      </main>
    </div>
  )
}
