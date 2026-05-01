"use client"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="chrome-bg scanlines relative overflow-hidden py-20 px-4 text-center"
      style={{ minHeight: "85vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />

      {/* Corner decorations */}
      <div
        aria-hidden="true"
        className="absolute top-4 left-4 text-xs font-bold blink"
        style={{ color: "#FF00FF", fontFamily: "'Courier New', monospace", zIndex: 2 }}
      >
        ✦ ONLINE ✦
      </div>
      <div
        aria-hidden="true"
        className="absolute top-4 right-4 text-xs font-bold blink"
        style={{ color: "#00FFFF", fontFamily: "'Courier New', monospace", zIndex: 2 }}
      >
        ✦ AI POWERED ✦
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-block mb-6 px-4 py-1 text-xs font-bold blink-slow"
          style={{
            background: "linear-gradient(to right, #000033, #000066)",
            border: "2px solid #00FFFF",
            color: "#00FFFF",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.2em",
            boxShadow: "0 0 10px #00FFFF, inset 0 0 10px rgba(0,255,255,0.1)",
          }}
        >
          ★ WELCOME TO THE FUTURE ★
        </div>

        {/* Main Headline */}
        <h1
          className="impact-heading cursor-blink glow-cyan mb-4"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            lineHeight: 1.05,
            color: "#00FFFF",
            textShadow: "0 0 10px #00FFFF, 0 0 30px #00FFFF, 4px 4px 0px #003333",
            letterSpacing: "0.04em",
          }}
        >
          BRINGING TECHNOLOGY TO LIFE
        </h1>

        {/* Subheadline */}
        <p
          className="mt-4 mb-8 text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
          style={{
            color: "#C0C0C0",
            fontFamily: "'Courier New', monospace",
          }}
        >
          Powering the best enterprises, creators, and developers. From{" "}
          <span style={{ color: "#00FFFF", fontWeight: "bold" }}>ElevenAgents</span> for customer experience,{" "}
          <span style={{ color: "#FF00FF", fontWeight: "bold" }}>ElevenCreative</span> for content creation, to the
          leading AI voice generator.
        </p>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { name: "ElevenCreative", sub: "Creative", color: "#FF00FF" },
            { name: "ElevenAgents", sub: "Agents", color: "#00FFFF" },
            { name: "ElevenAPI", sub: "API", color: "#C0C0C0" },
          ].map((p) => (
            <div
              key={p.name}
              className="bevel-card px-5 py-3 text-center float-anim"
              style={{ minWidth: 140, cursor: "pointer" }}
            >
              <div
                className="font-bold text-sm"
                style={{ color: p.color, fontFamily: "Impact, sans-serif", textShadow: `0 0 6px ${p.color}` }}
              >
                {p.name}
              </div>
              <div className="text-xs mt-1" style={{ color: "#888" }}>
                [ {p.sub} ]
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button className="btn-cyan-xp text-sm">
            ► SIGN UP FREE
          </button>
          <button className="btn-xp text-sm">
            CONTACT SALES »
          </button>
        </div>

        {/* Product list */}
        <div
          className="flex flex-wrap justify-center gap-3 text-xs"
          style={{ color: "#808080", fontFamily: "'Courier New', monospace" }}
        >
          {["AI Voice Generator", "Text to Speech", "Music", "Speech to Text", "Voice Cloning"].map((item) => (
            <span
              key={item}
              className="px-3 py-1"
              style={{ border: "1px solid #333", background: "rgba(0,255,255,0.03)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar decoration */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(to right, transparent, #00FFFF, #FF00FF, #00FFFF, transparent)" }}
      />
    </section>
  )
}
