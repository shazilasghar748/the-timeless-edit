import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * Rounded, editorial button. Primary uses the espresso/gold "button" token
 * (swaps automatically in dark mode via CSS variables — no dark: overrides
 * needed in the component itself).
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-button font-body font-medium " +
      "transition-all duration-300 ease-editorial disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-button text-button-foreground hover:brightness-110 active:brightness-95 shadow-sm",
      secondary:
        "bg-surface-muted text-foreground hover:bg-border/60",
      outline:
        "border border-border text-foreground hover:bg-surface-muted",
      ghost:
        "text-foreground hover:bg-surface-muted",
    };

    const sizes: Record<ButtonSize, string> = {
      sm: "text-sm px-4 py-2",
      md: "text-sm px-6 py-3",
      lg: "text-base px-8 py-4",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
