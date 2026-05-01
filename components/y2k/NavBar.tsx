"use client"

import { useState } from "react"

const navItems = [
  { label: "Products", href: "#products" },
  { label: "ElevenCreative", href: "#creative" },
  { label: "ElevenAgents", href: "#agents" },
  { label: "ElevenAPI", href: "#api" },
  { label: "Research", href: "#research" },
  { label: "Safety", href: "#safety" },
  { label: "Blog", href: "#blog" },
]

export function NavBar() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <nav
      className="taskbar sticky top-0 z-50 flex items-center justify-between px-4 py-2"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div
          className="btn-xp px-2 py-1 text-xs font-black"
          style={{ letterSpacing: "0.15em" }}
        >
          <span style={{ color: "#000080", fontFamily: "Impact, sans-serif", fontSize: "16px" }}>
            ELEVEN
          </span>
          <span style={{ color: "#CC0000", fontFamily: "Impact, sans-serif", fontSize: "16px" }}>
            LABS
          </span>
        </div>
        <div className="retro-spinner hidden md:block" aria-hidden="true" />
        <span
          className="hidden md:block text-xs font-bold"
          style={{ color: "#000080", fontFamily: "'Courier New', monospace" }}
        >
          v2.0 BETA
        </span>
      </div>

      {/* Nav Items */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className="btn-xp text-xs"
            style={{
              background:
                active === item.label
                  ? "linear-gradient(to bottom, #b0acaa 0%, #c8c4bc 100%)"
                  : undefined,
              borderTopColor: active === item.label ? "#808080" : undefined,
              borderLeftColor: active === item.label ? "#808080" : undefined,
              borderRightColor: active === item.label ? "#ffffff" : undefined,
              borderBottomColor: active === item.label ? "#ffffff" : undefined,
              textDecoration: "none",
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-2">
        <a href="#" className="btn-xp text-xs">
          Log In
        </a>
        <a href="#" className="btn-cyan-xp text-xs">
          Sign Up FREE
        </a>
      </div>
    </nav>
  )
}
