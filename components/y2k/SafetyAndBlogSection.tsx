"use client"

const safetyItems = [
  { title: "Moderation", desc: "We actively monitor content generated with our technology.", icon: "■", color: "#00FFFF" },
  { title: "Accountability", desc: "We believe misuse must have consequences.", icon: "■", color: "#FF00FF" },
  { title: "Provenance", desc: "We believe that you should know if audio is AI-generated.", icon: "■", color: "#C0C0C0" },
]

const blogPosts = [
  { title: "Introducing Flows in ElevenCreative", category: "PRODUCT", date: "Mar 11, 2026" },
  { title: "Introducing ElevenLabs for Government", category: "COMPANY", date: "Feb 11, 2026" },
  { title: "Introducing Expressive Mode for ElevenAgents", category: "PRODUCT", date: "Feb 10, 2026" },
]

const newsItems = [
  "ElevenLabs showcases multilingual AI voice technology with NVIDIA ACE at Computex",
  "ElevenLabs AI voice revives Salvador Dalí with a surreal twist",
  "Ukrainian public services will speak through AI: announcing a partnership with ElevenLabs",
  "Matthew McConaughey's Lyrics of Livin' expands with ElevenLabs",
  "Bringing ElevenLabs' AI voice agents to Europe's largest Telco",
  "ElevenLabs Impact Announces $1B In-Kind Donation and Releases Original Docuseries",
]

export function SafetyAndBlogSection() {
  return (
    <>
      {/* News Ticker */}
      <section className="py-10 px-4" style={{ background: "#000" }}>
        <div className="max-w-5xl mx-auto">
          <div
            className="text-xs font-bold mb-4 text-center"
            style={{ color: "#FF00FF", fontFamily: "'Courier New', monospace", letterSpacing: "0.2em" }}
          >
            ★ SHOWCASING THE GLOBAL IMPACT OF AI AUDIO RESEARCH ★
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {newsItems.map((n, i) => (
              <div
                key={i}
                className="bevel-card px-4 py-3 flex items-center gap-3"
              >
                <span className="blink-slow text-sm" style={{ color: i % 2 === 0 ? "#00FFFF" : "#FF00FF" }} aria-hidden="true">▶</span>
                <span className="text-xs leading-relaxed" style={{ color: "#888" }}>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section
        id="safety"
        className="py-16 px-4"
        style={{ background: "linear-gradient(180deg, #000 0%, #080008 50%, #000 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div
              className="inline-block text-xs px-3 py-1 mb-4 font-bold"
              style={{
                border: "2px solid #FF00FF",
                color: "#FF00FF",
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.15em",
                textShadow: "0 0 6px #FF00FF",
              }}
            >
              ■ SAFETY ■
            </div>
            <h2
              className="impact-heading"
              style={{
                fontSize: "clamp(1.4rem, 4vw, 3rem)",
                color: "#FF00FF",
                textShadow: "0 0 12px #FF00FF, 3px 3px 0 #330033",
              }}
            >
              SAFETY, BUILT IN
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {safetyItems.map((s) => (
              <div key={s.title} className="bevel-card p-6 text-center">
                <div
                  className="text-3xl mb-3 blink-slow"
                  style={{ color: s.color, textShadow: `0 0 8px ${s.color}` }}
                  aria-hidden="true"
                >
                  {s.icon}
                </div>
                <h3
                  className="font-bold text-sm mb-2 uppercase"
                  style={{ color: s.color, fontFamily: "'Courier New', monospace" }}
                >
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#666" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 px-4" style={{ background: "#000" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div
              className="inline-block text-xs px-3 py-1 mb-4 font-bold"
              style={{
                border: "2px solid #C0C0C0",
                color: "#C0C0C0",
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.15em",
              }}
            >
              ■ LATEST UPDATES ■
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blogPosts.map((p) => (
              <div key={p.title} className="bevel-card p-5 hover:cursor-pointer">
                <div
                  className="text-xs font-bold mb-1"
                  style={{ color: "#FF00FF", fontFamily: "'Courier New', monospace" }}
                >
                  [{p.category}]
                </div>
                <h3
                  className="font-bold text-sm mb-2 leading-snug"
                  style={{ color: "#C0C0C0", fontFamily: "'Courier New', monospace" }}
                >
                  {p.title}
                </h3>
                <div className="text-xs" style={{ color: "#444" }}>
                  DATE: {p.date}
                </div>
                <div className="mt-3">
                  <button className="btn-xp text-xs">READ MORE »</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
