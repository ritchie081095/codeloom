// Codeloom mark — two loops (an infinity / "loop") with < and > chevrons inside,
// plus a rising stem. Redrawn as a crisp vector from the original logo so it
// scales perfectly and follows the theme (uses currentColor → set by CSS).
export default function Logo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Codeloom logo"
    >
      <g
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* the two loops */}
        <circle cx="21" cy="40" r="11" />
        <circle cx="43" cy="40" r="11" />
        {/* rising stem */}
        <path d="M32 40 V15" />
      </g>
      {/* chevrons inside each loop */}
      <g
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M24 35 L19 40 L24 45" />
        <path d="M40 35 L45 40 L40 45" />
      </g>
    </svg>
  );
}
