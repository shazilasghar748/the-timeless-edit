import Link from "next/link";
import { DarkModeToggle } from "@/components/theme/DarkModeToggle";
import { categories } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
          The Timeless Edit
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-body">
          {categories.slice(0, 5).map((c) => (
            <Link
              key={c}
              href={`/categories/${c.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              {c}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/about"
            className="hidden sm:inline text-sm text-foreground-muted hover:text-foreground transition-colors"
          >
            About
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
