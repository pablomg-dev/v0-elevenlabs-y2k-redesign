"use client"

export function MarqueeBar() {
  const text =
    "✦ ★ ELEVENLABS.IO — THE FUTURE OF AI VOICE IS NOW ★ ✦ ★ FREE AI VOICE GENERATOR ★ ✦ VOICE AGENTS ★ ✦ TEXT TO SPEECH ★ ✦ MUSIC GENERATION ★ ✦ SPEECH TO TEXT ★ ✦ VOICE CLONING ★ ✦ 10,000+ STUDIO QUALITY VOICES ★ ✦ 70+ LANGUAGES SUPPORTED ★ ✦ ULTRA-LOW LATENCY ★ ✦ BUILD THE FUTURE ★ ✦ "

  return (
    <div
      className="overflow-hidden whitespace-nowrap py-1 px-0"
      style={{
        background: "linear-gradient(to right, #000033, #000066, #000033)",
        borderBottom: "2px solid #00FFFF",
        borderTop: "2px solid #003366",
      }}
    >
      <span
        className="marquee-inner text-xs font-bold"
        style={{
          color: "#00FFFF",
          textShadow: "0 0 6px #00FFFF",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.1em",
        }}
      >
        {text}
        {text}
      </span>
    </div>
  )
}
