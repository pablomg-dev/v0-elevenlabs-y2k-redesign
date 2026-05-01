"use client"

export function UnderConstructionBadge() {
  return (
    <div
      className="fixed top-20 right-4 z-40"
      style={{
        transform: "rotate(12deg)",
      }}
    >
      <div
        className="relative px-3 py-2"
        style={{
          background: "linear-gradient(135deg, #FFFF00 0%, #FFD700 50%, #FFA500 100%)",
          border: "3px solid #000",
          boxShadow: "4px 4px 0 #000, inset 2px 2px 0 rgba(255,255,255,0.5)",
        }}
      >
        {/* Animated stripes overlay */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ opacity: 0.3 }}
        >
          <div
            style={{
              position: "absolute",
              inset: -20,
              background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                #000 10px,
                #000 20px
              )`,
              animation: "marquee-scroll 20s linear infinite",
            }}
          />
        </div>
        
        {/* Content */}
        <div className="relative flex items-center gap-2">
          {/* Animated worker icon */}
          <div
            className="text-lg"
            style={{
              animation: "float 1s ease-in-out infinite",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
              <path d="M2 20L12 4L22 20H2Z" />
              <line x1="12" y1="10" x2="12" y2="14" />
              <circle cx="12" cy="17" r="1" fill="#000" />
            </svg>
          </div>
          
          <div>
            <div
              className="text-xs font-black"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                color: "#000",
                letterSpacing: "0.1em",
                lineHeight: 1,
              }}
            >
              UNDER
            </div>
            <div
              className="text-xs font-black"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                color: "#000",
                letterSpacing: "0.1em",
                lineHeight: 1,
              }}
            >
              CONSTRUCTION
            </div>
          </div>
          
          {/* Blinking light */}
          <div
            className="blink-fast"
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#FF0000",
              boxShadow: "0 0 8px #FF0000, 0 0 16px #FF0000",
            }}
          />
        </div>
      </div>
      
      {/* Dripping effect */}
      <div
        className="absolute -bottom-2 left-4"
        style={{
          width: 6,
          height: 12,
          background: "linear-gradient(to bottom, #FFA500, transparent)",
          borderRadius: "0 0 3px 3px",
        }}
      />
    </div>
  )
}
