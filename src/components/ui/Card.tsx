import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Base card: ivory surface, soft shadow, subtle lift on hover.
 * Used as the shell for PostCard, AuthorCard, dashboard stat cards, etc.
 */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-surface rounded-card shadow-card hover:shadow-card-hover",
        "transition-shadow duration-300 ease-editorial overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}
