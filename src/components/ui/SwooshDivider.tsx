export function SwooshDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={flip ? "rotate-180" : ""}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 C360 60, 720 0, 1080 30 S1440 50 1440 30"
          stroke="url(#swoosh-grad)"
          strokeWidth="3"
          fill="none"
        />
        <defs>
          <linearGradient id="swoosh-grad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8B6CC9" />
            <stop offset="35%" stopColor="#22C7E8" />
            <stop offset="65%" stopColor="#2F55E8" />
            <stop offset="100%" stopColor="#E5263A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
