import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "accent" | "gold" | "neutral";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

/**
 * Small uppercase label used for Trending / Featured / Editor's Choice /
 * New / Popular content flags. Deliberately not a filled pill in gold for
 * every case — gold is reserved for "Editor's Choice" specifically so it
 * keeps meaning as a signal rather than becoming decorative noise.
 */
export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  const tones: Record<BadgeTone, string> = {
    accent: "bg-accent/10 text-accent",
    gold: "bg-accent-gold/15 text-accent-gold",
    neutral: "bg-surface-muted text-foreground-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-eyebrow uppercase font-medium",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
