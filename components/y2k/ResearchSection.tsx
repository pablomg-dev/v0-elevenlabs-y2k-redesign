"use client"

const milestones = [
  { name: "Eleven Multilingual v2", desc: "Most consistent and lifelike TTS model", date: "Aug 2023", color: "#00FFFF" },
  { name: "Eleven Turbo v2", desc: "High-quality, low-latency TTS model", date: "Nov 2023", color: "#FF00FF" },
  { name: "Eleven Flash v2.5", desc: "Ultra-low latency TTS model", date: "Dec 2024", color: "#00FFFF" },
  { name: "Scribe", desc: "Original transcription model", date: "Feb 2025", color: "#C0C0C0" },
  { name: "Eleven v3", desc: "Most expressive TTS model ever released", date: "Jun 2025", color: "#FF00FF" },
  { name: "Eleven Music", desc: "Highest quality AI music, trained on licensed data", date: "Aug 2025", color: "#00FFFF" },
  { name: "Scribe v2 Realtime", desc: "Most accurate real-time transcription model", date: "Nov 2025", color: "#FF00FF" },
  { name: "Scribe v2", desc: "Most accurate transcription model ever released", date: "Jan 2026", color: "#C0C0C0" },
  { name: "Expressive Mode for Agents", desc: "More expressive voice agents for real-world conversations", date: "Feb 2026", color: "#00FFFF" },
]

export function ResearchSection() {
  return (
    <section
      id="research"
      className="py-16 px-4"
      style={{ background: "linear-gradient(180deg, #000 0%, #000510 50%, #000 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-block text-xs px-3 py-1 mb-4 font-bold"
            style={{
              border: "2px solid #00FFFF",
              color: "#00FFFF",
              fontFamily: "'Courier New', monospace",
              letterSpacing: "0.15em",
              textShadow: "0 0 6px #00FFFF",
            }}
          >
            ■ RESEARCH ■
          </div>
          <h2
            className="impact-heading"
            style={{
              fontSize: "clamp(1.4rem, 4vw, 3rem)",
              color: "#C0C0C0",
              textShadow: "0 0 8px #C0C0C0, 3px 3px 0 #222",
            }}
          >
            RESEARCH THAT REDEFINES HUMAN TECHNOLOGY INTERACTION
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed"
            style={{ color: "#666", fontFamily: "'Courier New', monospace" }}
          >
            Our vision is to make communication and creation with technology seamless. We build our own foundational
            models, beginning with the first human-like voice model and now extending far beyond voice.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px md:left-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, #00FFFF, #FF00FF, #00FFFF, transparent)" }}
            aria-hidden="true"
          />

          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div
                key={m.name}
                className={`flex gap-6 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} pl-10 md:pl-0`}
              >
                {/* Connector dot */}
                <div
                  className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full blink-slow"
                  style={{
                    background: m.color,
                    boxShadow: `0 0 6px ${m.color}`,
                    marginTop: "6px",
                  }}
                  aria-hidden="true"
                />
                {/* Card */}
                <div className={`bevel-card p-4 flex-1 ${i % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3
                      className="font-bold text-sm uppercase"
                      style={{ color: m.color, fontFamily: "'Courier New', monospace" }}
                    >
                      {m.name}
                    </h3>
                    <span
                      className="text-xs shrink-0"
                      style={{
                        color: "#444",
                        background: "#111",
                        border: "1px solid #333",
                        padding: "1px 6px",
                        fontFamily: "'Courier New', monospace",
                      }}
                    >
                      {m.date}
                    </span>
                  </div>
                  <p className="text-xs" style={{ color: "#666" }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className="mt-10 text-center text-xs"
          style={{ color: "#444", fontFamily: "'Courier New', monospace" }}
        >
          <span style={{ color: "#FF00FF" }}>✦</span> Advancing research beyond voice into transcription, music, voice cloning, intelligent agents, and more. <span style={{ color: "#FF00FF" }}>✦</span>
        </div>
      </div>
    </section>
  )
}
