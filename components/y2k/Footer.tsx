"use client"

export function Footer() {
  return (
    <footer
      className="py-10 px-4 text-center"
      style={{
        background: "linear-gradient(to bottom, #000, #000a00)",
        borderTop: "3px solid #00FFFF",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-4">
          <span
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              fontSize: "2rem",
              color: "#00FFFF",
              textShadow: "0 0 10px #00FFFF, 2px 2px 0 #003333",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            ELEVEN
          </span>
          <span
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              fontSize: "2rem",
              color: "#FF00FF",
              textShadow: "0 0 10px #FF00FF, 2px 2px 0 #330033",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            LABS
          </span>
        </div>

        {/* Tagline */}
        <p
          className="text-xs mb-6"
          style={{ color: "#555", fontFamily: "'Courier New', monospace" }}
        >
          The most realistic voice AI platform
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="btn-cyan-xp text-sm">TALK TO SALES</button>
          <button className="btn-pink-xp text-sm">CREATE AN AI AGENT</button>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs">
          {["Products", "API Docs", "Pricing", "Blog", "Careers", "Contact", "Privacy", "Terms"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: "#555",
                fontFamily: "'Courier New', monospace",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                ;(e.target as HTMLAnchorElement).style.color = "#00FFFF"
              }}
              onMouseLeave={(e) => {
                ;(e.target as HTMLAnchorElement).style.color = "#555"
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* IE Badge */}
        <div
          className="inline-block mb-4 px-4 py-2 blink-slow"
          style={{
            background: "linear-gradient(to bottom, #e0ddd4, #c4c0b8)",
            border: "outset 3px #c0c0c0",
            fontFamily: "'Courier New', monospace",
            fontSize: "11px",
            color: "#000080",
            fontWeight: "bold",
          }}
        >
          🖥️ Best viewed in Internet Explorer 6 — 800×600
        </div>

        <div
          className="mt-4 text-xs"
          style={{ color: "#333", fontFamily: "'Courier New', monospace" }}
        >
          © 2026 ElevenLabs, Inc. All rights reserved. ✦ Powered by AI ✦ Made with ♥ and Courier New
        </div>

        {/* Visitor counter */}
        <div
          className="mt-3 inline-block px-4 py-1 text-xs"
          style={{
            background: "#000",
            border: "2px inset #808080",
            color: "#00FF00",
            fontFamily: "'Courier New', monospace",
          }}
        >
          VISITOR COUNT: <span className="font-bold">0001337042</span>
        </div>
      </div>
    </footer>
  )
}
