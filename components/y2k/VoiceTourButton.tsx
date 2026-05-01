"use client"

import { useState, useRef } from "react"

const ELEVEN_API_KEY = "YOUR_API_KEY_HERE"
const VOICE_ID = "pNInz6obpgDQGcFmaJgB"

const TOUR_SCRIPT = `Welcome to ElevenLabs — the future of AI voice technology. 
We are bringing technology to life with ultra-realistic AI voice generation. 
Our platform powers the best enterprises, creators, and developers.
With ElevenCreative, you can generate speech, videos, music, and sound effects.
With ElevenAgents, you can deploy conversational AI agents in 70 plus languages with ultra-low latency.
Our ElevenAPI lets developers build anything with text to speech, speech to text, and music generation APIs.
We have a library of 10,000 plus studio quality voices across more than 70 languages.
Our research redefines human technology interaction, building the most expressive and accurate models in the world.
Join us in building the future. Sign up for free at ElevenLabs dot I O.`

type TourState = "idle" | "loading" | "playing" | "error"

function CassetteLoader() {
  return (
    <div className="flex flex-col items-center gap-2 py-2">
      {/* Cassette body */}
      <div
        className="relative"
        style={{
          width: 80,
          height: 50,
          background: "linear-gradient(to bottom, #c0c0c0, #808080)",
          border: "2px solid #404040",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "6px 10px",
        }}
        aria-hidden="true"
      >
        {/* Reels */}
        {[0, 1].map((i) => (
          <div
            key={i}
            className="cassette-reel"
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: "radial-gradient(circle, #222 30%, #444 50%, #666 70%, #888 100%)",
              border: "2px solid #222",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#111",
              }}
            />
          </div>
        ))}
        {/* Label */}
        <div
          style={{
            position: "absolute",
            bottom: 4,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "5px",
            color: "#000",
            fontFamily: "'Courier New', monospace",
            fontWeight: "bold",
            letterSpacing: "0.3em",
            background: "#e0e0d0",
            padding: "1px 4px",
            width: "80%",
            textAlign: "center",
          }}
        >
          LOADING...
        </div>
      </div>
      <div
        className="text-xs blink"
        style={{ color: "#00FFFF", fontFamily: "'Courier New', monospace" }}
      >
        ► FETCHING AUDIO...
      </div>
    </div>
  )
}

export function VoiceTourButton() {
  const [state, setState] = useState<TourState>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const audioRef = useRef<HTMLAudioElement | null>(null)

  async function handleTour() {
    if (state === "playing") {
      // Stop playback
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
      setState("idle")
      return
    }

    if (state === "loading") return

    setState("loading")
    setErrorMsg("")

    try {
      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
        {
          method: "POST",
          headers: {
            "xi-api-key": ELEVEN_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: TOUR_SCRIPT,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
            },
          }),
        }
      )

      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(err?.detail?.message || `API error ${response.status}`)
      }

      const audioBlob = await response.blob()
      const audioUrl = URL.createObjectURL(audioBlob)
      const audio = new Audio(audioUrl)
      audioRef.current = audio

      audio.onended = () => {
        setState("idle")
        URL.revokeObjectURL(audioUrl)
      }
      audio.onerror = () => {
        setState("error")
        setErrorMsg("Playback error.")
        URL.revokeObjectURL(audioUrl)
      }

      await audio.play()
      setState("playing")
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error"
      setState("error")
      setErrorMsg(message)
    }
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      style={{ fontFamily: "'Courier New', monospace" }}
    >
      {/* Loading cassette overlay */}
      {state === "loading" && (
        <div
          className="bevel-card p-3 text-center"
          style={{ background: "#050d0d", minWidth: 120 }}
        >
          <CassetteLoader />
        </div>
      )}

      {/* Error message */}
      {state === "error" && (
        <div
          className="bevel-card px-3 py-2 text-xs max-w-xs text-center"
          style={{ color: "#FF4444", background: "#100000" }}
        >
          ⚠ {errorMsg || "Error. Check API key."}
        </div>
      )}

      {/* Main button */}
      <button
        onClick={handleTour}
        className={state === "idle" || state === "error" ? "blink-slow" : ""}
        aria-label={state === "playing" ? "Stop voice tour" : "Start voice tour"}
        style={{
          background:
            state === "playing"
              ? "linear-gradient(to bottom, #AAFFAA 0%, #00FF00 40%, #00CC00 100%)"
              : "linear-gradient(to bottom, #80FFFF 0%, #00FFFF 40%, #00CCCC 100%)",
          borderTop: "3px solid",
          borderLeft: "3px solid",
          borderRight: "3px solid",
          borderBottom: "3px solid",
          borderTopColor: state === "playing" ? "#CCFFCC" : "#CCFFFF",
          borderLeftColor: state === "playing" ? "#CCFFCC" : "#CCFFFF",
          borderRightColor: state === "playing" ? "#006600" : "#006666",
          borderBottomColor: state === "playing" ? "#006600" : "#006666",
          color: "#000",
          fontFamily: "'Courier New', monospace",
          fontWeight: "bold",
          fontSize: "14px",
          padding: "10px 18px",
          cursor: state === "loading" ? "wait" : "pointer",
          letterSpacing: "0.08em",
          whiteSpace: "nowrap",
          userSelect: "none",
          boxShadow: state === "playing"
            ? "0 0 12px #00FF00, 0 0 24px rgba(0,255,0,0.3)"
            : "0 0 12px #00FFFF, 0 0 24px rgba(0,255,255,0.3)",
        }}
        disabled={state === "loading"}
      >
        {state === "loading" && "⏳ LOADING..."}
        {state === "playing" && "■ STOP TOUR"}
        {state === "idle" && "► VOICE TOUR"}
        {state === "error" && "► RETRY TOUR"}
      </button>

      {/* Status indicator */}
      {state === "playing" && (
        <div
          className="text-xs blink px-2 py-0.5"
          style={{
            color: "#00FF00",
            background: "#001400",
            border: "1px solid #00FF00",
            fontSize: "10px",
          }}
        >
          ● PLAYING
        </div>
      )}
    </div>
  )
}
