"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: "star" | "cross" | "dot"
  color: string
}

export function SparkleBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const colors = ["#00FFFF", "#FF00FF", "#FFFFFF", "#FFFF00"]
    const types: Sparkle["type"][] = ["star", "cross", "dot"]
    
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = []
      for (let i = 0; i < 30; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 12 + 6,
          duration: Math.random() * 4 + 2,
          delay: Math.random() * 5,
          type: types[Math.floor(Math.random() * types.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      setSparkles(newSparkles)
    }

    generateSparkles()
  }, [])

  const renderSparkle = (sparkle: Sparkle) => {
    const style: React.CSSProperties = {
      position: "absolute",
      left: `${sparkle.x}%`,
      top: `${sparkle.y}%`,
      width: sparkle.size,
      height: sparkle.size,
      color: sparkle.color,
      animation: `twinkle ${sparkle.duration}s ease-in-out ${sparkle.delay}s infinite`,
      filter: `drop-shadow(0 0 ${sparkle.size / 2}px ${sparkle.color})`,
      pointerEvents: "none",
    }

    if (sparkle.type === "star") {
      return (
        <svg
          key={sparkle.id}
          style={style}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
        </svg>
      )
    }

    if (sparkle.type === "cross") {
      return (
        <svg
          key={sparkle.id}
          style={style}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10 0H14V10H24V14H14V24H10V14H0V10H10V0Z" />
        </svg>
      )
    }

    return (
      <div
        key={sparkle.id}
        style={{
          ...style,
          width: sparkle.size / 2,
          height: sparkle.size / 2,
          borderRadius: "50%",
          backgroundColor: sparkle.color,
        }}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    >
      {sparkles.map(renderSparkle)}
    </div>
  )
}
