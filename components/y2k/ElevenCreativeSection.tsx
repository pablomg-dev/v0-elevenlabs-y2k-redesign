"use client"

const features = [
  {
    title: "All-in-one AI Editor",
    desc: "Create podcasts, audiobooks and voiceovers in an editor built on all of ElevenLabs' audio research combined.",
    icon: "◈",
    color: "#FF00FF",
    isNew: false,
  },
  {
    title: "Ultra-Realistic Speech",
    desc: "Create controllable, expressive speech layered across 70+ languages.",
    icon: "◈",
    color: "#00FFFF",
    isNew: false,
  },
  {
    title: "Music Generation",
    desc: "Generate studio-quality tracks instantly, any genre, any style, vocals or instrumental.",
    icon: "◈",
    color: "#FF00FF",
    isNew: true,
  },
  {
    title: "Sound Effects (SFX)",
    desc: "Create custom sound effects, soundscapes and ambient audio or search the SFX library.",
    icon: "◈",
    color: "#00FFFF",
    isNew: false,
  },
  {
    title: "Voice Cloning",
    desc: "Clone a replica of your own voice, design one from a prompt, or explore 1000s of voices from the library.",
    icon: "◈",
    color: "#FF00FF",
    isNew: false,
  },
  {
    title: "Image & Video",
    desc: "Create or edit images and turn ideas into videos with leading models like Veo, Sora, Wan, Kling and Seedance.",
    icon: "◈",
    color: "#00FFFF",
    isNew: true,
  },
]

export function ElevenCreativeSection() {
  return (
    <section
      id="creative"
      className="py-16 px-4"
      style={{
        background: "linear-gradient(180deg, #000 0%, #050010 50%, #000 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-block text-xs px-3 py-1 mb-4 font-bold"
            style={{
              background: "linear-gradient(to right, #330033, #660066)",
              border: "2px solid #FF00FF",
              color: "#FF00FF",
              fontFamily: "'Courier New', monospace",
              textShadow: "0 0 6px #FF00FF",
              letterSpacing: "0.15em",
            }}
          >
            ■ ELEVENCREATIVE ■
          </div>
          <h2
            className="impact-heading"
            style={{
              fontSize: "clamp(1.4rem, 4vw, 3rem)",
              color: "#FF00FF",
              textShadow: "0 0 12px #FF00FF, 3px 3px 0 #330033",
            }}
          >
            CREATE, EDIT AND LOCALIZE IN ONE AI PLATFORM
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed"
            style={{ color: "#888", fontFamily: "'Courier New', monospace" }}
          >
            Create ultra-realistic speech, turn ideas into videos, compose music in any genre, or design immersive
            sound effects. Craft your next film, ad, audiobook, or podcast with our all-in-one platform.
          </p>
        </div>

        {/* Demo quote block */}
        <div
          className="bevel-card p-6 mb-10 text-center"
          style={{
            background: "linear-gradient(135deg, #0a0010, #100020)",
            borderColor: "#FF00FF",
          }}
        >
          <div
            className="text-sm italic leading-relaxed"
            style={{ color: "#DDD", fontFamily: "'Courier New', monospace" }}
          >
            &quot;Amidst the outer atmosphere of the planet Aurora, the sky shimmered with fractured light, as
            though the planet&apos;s veil were made of stained glass suspended in space. Sensors pulsed with
            irregular patterns, the kind no algorithm could quite reconcile.&quot;
          </div>
          <div className="mt-3">
            <button className="btn-pink-xp text-xs">► PLAY DEMO</button>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`bevel-card p-5 pixel-corners ${f.color === "#FF00FF" ? "pixel-corners-pink" : ""}`}
            >
              <div
                className="text-2xl mb-2 blink-slow"
                style={{ color: f.color, textShadow: `0 0 6px ${f.color}` }}
                aria-hidden="true"
              >
                {f.icon}
              </div>
              <h3
                className="font-bold text-sm mb-2 uppercase"
                style={{
                  color: f.color,
                  fontFamily: "'Courier New', monospace",
                  textShadow: `0 0 4px ${f.color}`,
                }}
              >
                {f.title}
                {f.isNew && <span className="badge-new ml-2">NEW!</span>}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#777" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div
          className="mt-10 text-center text-xs"
          style={{ color: "#555", fontFamily: "'Courier New', monospace" }}
        >
          <div className="mb-3" style={{ color: "#FF00FF" }}>
            ✦ FEATURED USE CASES ✦
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "NVIDIA — Multilingual Marketing",
              "Streamlining Product Updates",
              "Duolingo — Character Voices",
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
