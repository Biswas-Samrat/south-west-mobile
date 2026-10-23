import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonVariant =
  | "whatsapp"
  | "primary-red"
  | "light"
  | "navy"
  | "outline-light"
  | "outline-navy"
  | "ghost"
  | "link";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  href?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  whatsapp:
    "bg-wa-500 text-navy-950 hover:bg-wa-600 active:bg-wa-700 focus-visible:outline-aqua-400",
  "primary-red":
    "bg-signal-600 text-white hover:bg-signal-700 active:bg-signal-700 focus-visible:outline-aqua-400",
  light:
    "bg-white text-navy-900 hover:bg-mist-50 active:bg-mist-100 focus-visible:outline-electric-600",
  navy:
    "bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-700 focus-visible:outline-electric-600",
  "outline-light":
    "border-2 border-white text-white hover:bg-white/10 active:bg-white/20 focus-visible:outline-aqua-400",
  "outline-navy":
    "border-2 border-navy-900 text-navy-900 hover:bg-navy-900/5 active:bg-navy-900/10 focus-visible:outline-electric-600",
  ghost:
    "text-ink-700 hover:bg-mist-100 active:bg-mist-200 focus-visible:outline-electric-600",
  link:
    "text-electric-600 hover:text-aqua-500 underline underline-offset-2 focus-visible:outline-electric-600 !p-0 !h-auto !min-h-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 min-h-[44px] px-5 text-sm",
  md: "h-12 min-h-[44px] px-6 text-base",
  lg: "h-14 min-h-[44px] px-7 text-base",
};

export function Button({
  variant = "navy",
  size = "md",
  fullWidth = false,
  iconLeft,
  iconRight,
  href,
  onClick,
  loading = false,
  disabled = false,
  className,
  children,
  target,
  rel,
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-200 ease-out",
    "hover:-translate-y-0.5 active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    "cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className,
  );

  const content = (
    <>
      {loading ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        iconLeft
      )}
      <span>{children}</span>
      {iconRight}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={target || (href.startsWith("http") ? "_blank" : undefined)}
          rel={rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
