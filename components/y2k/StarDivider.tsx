interface StarDividerProps {
  color?: "cyan" | "pink"
}

export function StarDivider({ color = "pink" }: StarDividerProps) {
  const lineColor = color === "cyan" ? "#00FFFF" : "#FF00FF"
  const glowColor = color === "cyan" ? "#00FFFF" : "#FF00FF"

  return (
    <div className="star-divider-fancy my-0" aria-hidden="true">
      {/* Left line cluster */}
      <div className="star-divider-line" style={{ background: `linear-gradient(to right, transparent, ${lineColor})` }} />
      {/* Center ornament */}
      <div
        className="star-divider-text"
        style={{ color: glowColor, textShadow: `0 0 8px ${glowColor}, 0 0 20px ${glowColor}` }}
      >
        ★ ══════ ★ ══════ ★
      </div>
      {/* Right line cluster */}
      <div className="star-divider-line" style={{ background: `linear-gradient(to left, transparent, ${lineColor})` }} />
    </div>
  )
}
