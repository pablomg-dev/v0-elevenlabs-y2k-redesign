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

      <StarDivider />

      {/* Voice Library */}
      <VoiceLibrarySection />

      <StarDivider />

      {/* ElevenCreative */}
      <ElevenCreativeSection />

      <StarDivider />

      {/* ElevenAgents */}
      <ElevenAgentsSection />

      <StarDivider />

      {/* ElevenAPI */}
      <ElevenAPISection />

      <StarDivider />

      {/* Research Timeline */}
      <ResearchSection />

      <StarDivider />

      {/* Safety + Blog */}
      <SafetyAndBlogSection />

      {/* Footer */}
      <Footer />

      {/* Floating Voice Tour Button */}
      <VoiceTourButton />
    </div>
  )
}
