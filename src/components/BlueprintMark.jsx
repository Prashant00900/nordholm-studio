/**
 * Signature decorative element: a hand-drawn blueprint-style mark that
 * echoes the studio's "design + engineering" identity. Reused in the
 * hero and footer as a subtle recurring motif.
 */
export default function BlueprintMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="20" y="20" width="360" height="260" rx="4" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      <line x1="20" y1="90" x2="380" y2="90" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <line x1="20" y1="180" x2="380" y2="180" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <line x1="140" y1="20" x2="140" y2="280" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <line x1="260" y1="20" x2="260" y2="280" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <path
        d="M60 220 C 100 140, 180 240, 220 120 S 340 60, 360 100"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-drawLine"
        style={{ strokeDasharray: 1000 }}
      />
      <circle cx="60" cy="220" r="4" fill="currentColor" />
      <circle cx="220" cy="120" r="4" fill="currentColor" />
      <circle cx="360" cy="100" r="4" fill="currentColor" />
    </svg>
  )
}
