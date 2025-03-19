export default function HeroImage() {
  return (
    <svg
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Background with Slovak flag colors */}
      <rect width="1920" height="1080" fill="#FFFFFF" />
      <rect width="1920" height="360" fill="#0B4EA2" />
      <rect width="1920" height="360" y="720" fill="#EE1C25" />

      {/* Decorative elements */}
      <path d="M960 360 L1260 540 L960 720 L660 540 Z" fill="#FFFFFF" opacity="0.8" />
      <circle cx="960" cy="540" r="120" fill="#0B4EA2" opacity="0.7" />
      <circle cx="960" cy="540" r="80" fill="#EE1C25" opacity="0.9" />

      {/* Abstract patterns */}
      <path
        d="M0 360 Q 480 480 960 360 Q 1440 240 1920 360"
        stroke="#0B4EA2"
        strokeWidth="5"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M0 720 Q 480 600 960 720 Q 1440 840 1920 720"
        stroke="#EE1C25"
        strokeWidth="5"
        fill="none"
        opacity="0.3"
      />

      {/* Traditional Slovak pattern elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 192}, 0)`}>
          <path d="M0 180 L96 180 L96 276 L0 276 Z" fill="#FFFFFF" opacity="0.1" />
          <path d="M96 180 L192 180 L192 276 L96 276 Z" fill="#0B4EA2" opacity="0.1" />
          <path d="M0 804 L96 804 L96 900 L0 900 Z" fill="#FFFFFF" opacity="0.1" />
          <path d="M96 804 L192 804 L192 900 L96 900 Z" fill="#EE1C25" opacity="0.1" />
        </g>
      ))}
    </svg>
  )
}

