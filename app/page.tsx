import { MarqueeBar } from "@/components/y2k/MarqueeBar"
import { NavBar } from "@/components/y2k/NavBar"
import { HeroSection } from "@/components/y2k/HeroSection"
import { StarDivider } from "@/components/y2k/StarDivider"
import { VoiceLibrarySection } from "@/components/y2k/VoiceLibrarySection"
import { ElevenCreativeSection } from "@/components/y2k/ElevenCreativeSection"
import { ElevenAgentsSection } from "@/components/y2k/ElevenAgentsSection"
import { ElevenAPISection } from "@/components/y2k/ElevenAPISection"
import { ResearchSection } from "@/components/y2k/ResearchSection"
import { SafetyAndBlogSection } from "@/components/y2k/SafetyAndBlogSection"
import { Footer } from "@/components/y2k/Footer"
import { VoiceTourButton } from "@/components/y2k/VoiceTourButton"
import { UnderConstructionBadge } from "@/components/y2k/UnderConstructionBadge"

export default function HomePage() {
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      {/* Top marquee bar */}
      <MarqueeBar />

      {/* Windows XP-style navigation */}
      <NavBar />

      {/* Hero */}
      <HeroSection />

      <StarDivider color="cyan" />

      {/* Voice Library */}
      <VoiceLibrarySection />

      <StarDivider color="pink" />

      {/* ElevenCreative */}
      <ElevenCreativeSection />

      <StarDivider color="cyan" />

      {/* ElevenAgents */}
      <ElevenAgentsSection />

      <StarDivider color="pink" />

      {/* ElevenAPI */}
      <ElevenAPISection />

      <StarDivider color="cyan" />

      {/* Research Timeline */}
      <ResearchSection />

      <StarDivider color="pink" />

      {/* Safety + Blog */}
      <SafetyAndBlogSection />

      {/* Footer */}
      <Footer />

      {/* Floating Voice Tour Button */}
      <VoiceTourButton />

      {/* Under Construction Badge */}
      <UnderConstructionBadge />
    </div>
  )
}
