import Link from "next/link";

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={className}
      aria-label="South West Mobile home"
    >
      <svg
        viewBox="0 0 280 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto md:h-10"
        role="img"
        aria-label="South West Mobile logo"
      >
        {/* Swoosh roofline */}
        <path
          d="M5 18 Q70 2, 140 10 T275 8"
          stroke="url(#logo-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* South */}
        <text
          x="5"
          y="34"
          fill={onDark ? "#C084FC" : "#7E22CE"}
          fontFamily="var(--font-display)"
          fontWeight="800"
          fontSize="18"
        >
          South
        </text>
        {/* West */}
        <text
          x="68"
          y="34"
          fill={onDark ? "#38BDF8" : "#0284C7"}
          fontFamily="var(--font-display)"
          fontWeight="800"
          fontSize="18"
        >
          West
        </text>
        {/* Mobile */}
        <text
          x="123"
          y="34"
          fill={onDark ? "#60A5FA" : "#1D4ED8"}
          fontFamily="var(--font-display)"
          fontWeight="800"
          fontSize="18"
        >
          Mobile
        </text>
        <defs>
          <linearGradient id="logo-grad" x1="5" y1="10" x2="275" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8B6CC9" />
            <stop offset="35%" stopColor="#22C7E8" />
            <stop offset="65%" stopColor="#2F55E8" />
            <stop offset="100%" stopColor="#E5263A" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
}
