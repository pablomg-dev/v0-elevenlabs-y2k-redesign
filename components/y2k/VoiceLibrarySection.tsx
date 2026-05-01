"use client"

const voices = [
  { name: "Audiobooks & Podcasts", desc: "Expressive voices that bring audiobooks and podcasts to life.", color: "#00FFFF" },
  { name: "Brand & Marketing", desc: "Persuasive voices that drive action and brand recall.", color: "#FF00FF" },
  { name: "Games & Animation", desc: "Playful and engaging voices for cartoons or video games.", color: "#00FFFF" },
  { name: "Conversational", desc: "Natural voices perfect for informal scenarios.", color: "#C0C0C0" },
  { name: "Short-Form Content", desc: "Trendy, attention-grabbing voices for short-form content.", color: "#FF00FF" },
]

export function VoiceLibrarySection() {
  return (
    <section id="products" className="py-16 px-4" style={{ background: "#000" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <div
            className="inline-block text-xs px-3 py-1 mb-4"
            style={{
              border: "1px solid #FF00FF",
              color: "#FF00FF",
              fontFamily: "'Courier New', monospace",
              textShadow: "0 0 6px #FF00FF",
            }}
          >
            ✦ VOICE LIBRARY ✦
          </div>
          <h2
            className="impact-heading"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              color: "#00FFFF",
              textShadow: "0 0 10px #00FFFF, 2px 2px 0 #003333",
            }}
          >
            ACCESS A LIBRARY OF 10,000+
          </h2>
          <h2
            className="impact-heading"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              color: "#FF00FF",
              textShadow: "0 0 10px #FF00FF, 2px 2px 0 #330033",
            }}
          >
            STUDIO QUALITY AI VOICES
          </h2>
        </div>

        {/* Voice cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {voices.map((v, i) => (
            <div
              key={v.name}
              className="bevel-card p-5"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="text-xl mt-0.5 blink-slow"
                  style={{ color: v.color }}
                  aria-hidden="true"
                >
                  ✦
                </span>
                <div>
                  <h3
                    className="font-bold text-sm mb-1"
                    style={{
                      color: v.color,
                      fontFamily: "'Courier New', monospace",
                      textTransform: "uppercase",
                      textShadow: `0 0 4px ${v.color}`,
                    }}
                  >
                    {v.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#888" }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Big stat card */}
          <div className="bevel-card p-5 flex flex-col items-center justify-center text-center md:col-span-2 lg:col-span-1">
            <div
              className="impact-heading glow-text-cyan"
              style={{ fontSize: "3.5rem", color: "#00FFFF" }}
            >
              10,000+
            </div>
            <div className="text-xs mt-2" style={{ color: "#C0C0C0", fontFamily: "'Courier New', monospace" }}>
              STUDIO QUALITY VOICES
            </div>
            <div className="mt-3 text-xs" style={{ color: "#FF00FF" }}>
              ✦ 70+ LANGUAGES ✦
            </div>
          </div>
        </div>

        {/* Trusted by */}
        <div
          className="mt-12 text-center text-xs"
          style={{
            color: "#555",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          <div
            className="mb-4"
            style={{ color: "#00FFFF", textShadow: "0 0 6px #00FFFF" }}
          >
            ★ TRUSTED BY LEADING DEVELOPERS AND ENTERPRISES ★
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["NVIDIA", "Duolingo", "Uber", "Mercedes-Benz", "Vodafone"].map((brand) => (
              <span
                key={brand}
                className="btn-xp px-4 py-2 text-xs"
                style={{ fontSize: "11px" }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
