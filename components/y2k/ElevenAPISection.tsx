"use client"

const ttsCode = `import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const client = new ElevenLabsClient({ apiKey: "YOUR_API_KEY" });

await client.textToSpeech.convert("JBFqnCBsd6RMkjVDRZzb", {
  outputFormat: "mp3_44100_128",
  text: "The first move is what sets everything in motion.",
  modelId: "eleven_multilingual_v2",
});`

const musicCode = `import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const { music } = new ElevenLabsClient();

const compositionPlan = await music.compositionPlan.create({
  prompt: "Fast-paced electronic track for a video...",
  musicLengthMs: 10000,
});`

export function ElevenAPISection() {
  return (
    <section
      id="api"
      className="py-16 px-4"
      style={{ background: "#000" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div
            className="inline-block text-xs px-3 py-1 mb-4 font-bold"
            style={{
              background: "linear-gradient(to right, #1a1a00, #333300)",
              border: "2px solid #C0C0C0",
              color: "#C0C0C0",
              fontFamily: "'Courier New', monospace",
              letterSpacing: "0.15em",
            }}
          >
            ■ ELEVENAPI ■
          </div>
          <h2
            className="impact-heading"
            style={{
              fontSize: "clamp(1.4rem, 4vw, 3rem)",
              color: "#C0C0C0",
              textShadow: "0 0 8px #C0C0C0, 3px 3px 0 #222",
            }}
          >
            BUILD ANYTHING WITH A POWERFUL HOST OF APIS
          </h2>
        </div>

        {/* TTS API */}
        <div className="bevel-card p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div
                className="text-xs font-bold mb-3 uppercase"
                style={{ color: "#00FFFF", fontFamily: "'Courier New', monospace" }}
              >
                ▶ TEXT TO SPEECH API
              </div>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "#888" }}>
                Independently rated the leading Text to Speech models. Choose a model to optimize for
                consistency, latency or emotional control. All support 29+ languages.
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { name: "Eleven Flash", tag: "75ms latency for conversational usecases", color: "#00FFFF" },
                  { name: "Eleven Multilingual", tag: "Best lifelike consistent speech", color: "#FF00FF" },
                  { name: "Eleven v3", tag: "Our most expressive model yet", color: "#C0C0C0" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center gap-3 px-3 py-2" style={{ border: "1px solid #222" }}>
                    <span className="blink-slow" style={{ color: m.color }}>◆</span>
                    <div>
                      <span className="font-bold text-xs" style={{ color: m.color }}>{m.name}</span>
                      <span className="text-xs ml-2" style={{ color: "#555" }}>— {m.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div
                className="text-xs font-bold mb-2"
                style={{ color: "#00FF00", fontFamily: "'Courier New', monospace" }}
              >
                // SAMPLE CODE:
              </div>
              <pre className="retro-code text-xs overflow-x-auto">{ttsCode}</pre>
            </div>
          </div>
        </div>

        {/* STT API */}
        <div className="bevel-card p-6 mb-6">
          <div
            className="text-xs font-bold mb-3 uppercase"
            style={{ color: "#FF00FF", fontFamily: "'Courier New', monospace" }}
          >
            ▶ SPEECH TO TEXT API
          </div>
          <p className="text-xs leading-relaxed mb-3" style={{ color: "#888" }}>
            The most accurate ASR model. Low cost and supporting speaker diarization and character level timestamps.
          </p>
          <div className="flex items-center gap-4">
            <div className="bevel-card px-5 py-3 text-center">
              <div
                className="impact-heading glow-text-pink"
                style={{ fontSize: "2rem", color: "#FF00FF" }}
              >
                98%
              </div>
              <div className="text-xs mt-1" style={{ color: "#888" }}>Accuracy</div>
            </div>
            <div>
              <div className="font-bold text-sm" style={{ color: "#FF00FF", fontFamily: "'Courier New', monospace" }}>
                Eleven Scribe
              </div>
              <div className="text-xs mt-1" style={{ color: "#666" }}>
                Speaker diarization · Character level timestamps · 29+ languages
              </div>
            </div>
          </div>
        </div>

        {/* Music API */}
        <div className="bevel-card p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div
                className="text-xs font-bold mb-3 uppercase"
                style={{ color: "#C0C0C0", fontFamily: "'Courier New', monospace" }}
              >
                ▶ MUSIC API
              </div>
              <p className="text-xs leading-relaxed mb-3" style={{ color: "#888" }}>
                Studio-grade music with natural language prompts in any genre, style or structure.
              </p>
              <div
                className="px-3 py-2 text-xs"
                style={{ border: "1px solid #333", color: "#C0C0C0" }}
              >
                <span className="blink-slow" style={{ color: "#C0C0C0" }}>◆</span>
                <span className="font-bold ml-2">Eleven Music</span>
                <span className="ml-2" style={{ color: "#555" }}>
                  — Trained on licensed data, suitable for commercial use
                </span>
              </div>
            </div>
            <div className="flex-1">
              <div
                className="text-xs font-bold mb-2"
                style={{ color: "#00FF00", fontFamily: "'Courier New', monospace" }}
              >
                // SAMPLE CODE:
              </div>
              <pre className="retro-code text-xs overflow-x-auto">{musicCode}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
