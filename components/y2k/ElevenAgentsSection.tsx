"use client"

const agentFeatures = [
  {
    title: "Omnichannel Agents",
    desc: "Agents listen, read and interact just like humans would across phone, chat, email and WhatsApp.",
    color: "#00FFFF",
    isNew: true,
  },
  {
    title: "Analytics",
    desc: "Easily measure success rates and CX metrics, optimizing flows over time.",
    color: "#FF00FF",
    isNew: false,
  },
  {
    title: "Testing",
    desc: "Simulate real-world conversations to validate agents behave as expected before deployment.",
    color: "#00FFFF",
    isNew: false,
  },
  {
    title: "Guardrails",
    desc: "Establish clear behavioral and compliance rules that keep agent responses aligned with policy.",
    color: "#FF00FF",
    isNew: false,
  },
  {
    title: "Workflows",
    desc: "Handle complex conversation flows, apply business logic and connect securely to systems.",
    color: "#00FFFF",
    isNew: true,
  },
]

export function ElevenAgentsSection() {
  return (
    <section
      id="agents"
      className="py-16 px-4"
      style={{ background: "linear-gradient(180deg, #000 0%, #000a00 50%, #000 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-block text-xs px-3 py-1 mb-4 font-bold"
            style={{
              background: "linear-gradient(to right, #001a00, #003300)",
              border: "2px solid #00FFFF",
              color: "#00FFFF",
              fontFamily: "'Courier New', monospace",
              textShadow: "0 0 6px #00FFFF",
              letterSpacing: "0.15em",
            }}
          >
            ■ ELEVENAGENTS ■
          </div>
          <h2
            className="impact-heading"
            style={{
              fontSize: "clamp(1.4rem, 4vw, 3rem)",
              color: "#00FFFF",
              textShadow: "0 0 12px #00FFFF, 3px 3px 0 #003333",
            }}
          >
            DEPLOY AGENTS THAT TALK, TYPE, AND TAKE ACTION
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed"
            style={{ color: "#888", fontFamily: "'Courier New', monospace" }}
          >
            Configure, deploy and monitor natural, human-sounding agents in 70+ languages with leading accuracy
            and ultra-low latency across voice or chat.
          </p>
        </div>

        {/* Chat demo */}
        <div className="bevel-card p-5 mb-10 max-w-lg mx-auto">
          <div
            className="text-xs font-bold mb-3"
            style={{ color: "#00FFFF", fontFamily: "'Courier New', monospace" }}
          >
            ■ LIVE AGENT DEMO ■
          </div>
          {[
            { sender: "USER", msg: "Can I get a refund?", color: "#C0C0C0", align: "right" },
            { sender: "AGENT", msg: "Sure. Can you share your order number please?", color: "#00FFFF", align: "left" },
            { sender: "USER", msg: "It's EL4543490", color: "#C0C0C0", align: "right" },
            { sender: "AGENT", msg: "Thank you. I have initiated the order refund process.", color: "#00FFFF", align: "left" },
          ].map((m, i) => (
            <div
              key={i}
              className="mb-2 text-xs"
              style={{
                textAlign: m.align as "left" | "right",
                color: m.color,
                fontFamily: "'Courier New', monospace",
              }}
            >
              <span
                className="font-bold"
                style={{ color: m.sender === "AGENT" ? "#00FF88" : "#888" }}
              >
                [{m.sender}]:{" "}
              </span>
              {m.msg}
            </div>
          ))}
          <div
            className="mt-3 text-xs blink"
            style={{ color: "#00FF00", fontFamily: "'Courier New', monospace" }}
          >
            ✓ REFUND COMPLETED
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {agentFeatures.map((f) => (
            <div
              key={f.title}
              className={`bevel-card p-5 pixel-corners ${f.color === "#FF00FF" ? "pixel-corners-pink" : ""}`}
            >
              <h3
                className="font-bold text-sm mb-2 uppercase"
                style={{
                  color: f.color,
                  fontFamily: "'Courier New', monospace",
                  textShadow: `0 0 4px ${f.color}`,
                }}
              >
                ▶ {f.title}
                {f.isNew && <span className="badge-new ml-2">NEW!</span>}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#777" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { val: "70+", label: "Languages" },
            { val: "75ms", label: "Ultra-Low Latency" },
            { val: "24/7", label: "Always Online" },
          ].map((s) => (
            <div key={s.label} className="bevel-card py-4">
              <div
                className="impact-heading glow-text-cyan"
                style={{ fontSize: "2rem", color: "#00FFFF" }}
              >
                {s.val}
              </div>
              <div className="text-xs mt-1" style={{ color: "#666", fontFamily: "'Courier New', monospace" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div
          className="mt-10 text-center text-xs"
          style={{ color: "#555", fontFamily: "'Courier New', monospace" }}
        >
          <div className="mb-3" style={{ color: "#00FFFF" }}>
            ✦ AGENT DEPLOYMENTS ✦
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Uber — Rider & Restaurant Experience",
              "Vodafone — Real-Time Support",
              "CARS24 — Voice-Driven Retail",
            ].map((c) => (
              <div key={c} className="bevel-card px-4 py-2 text-xs" style={{ color: "#C0C0C0" }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
