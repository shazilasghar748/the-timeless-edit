import Link from "next/link";
import { categories } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-muted">
      <div className="max-w-content mx-auto px-6 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <div className="font-display text-xl font-semibold mb-3">The Timeless Edit</div>
          <p className="text-sm text-foreground-muted max-w-xs">
            Stories, ideas and insights for everyday life — published daily.
          </p>
        </div>

        <div>
          <div className="eyebrow-rule mb-3">Categories</div>
          <ul className="space-y-2 text-sm text-foreground-muted">
            {categories.slice(0, 6).map((c) => (
              <li key={c}>
                <Link href={`/categories/${c.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-foreground">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow-rule mb-3">Site</div>
          <ul className="space-y-2 text-sm text-foreground-muted">
            <li><Link href="/about" className="hover:text-foreground">About</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-foreground">Privacy policy</Link></li>
            <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-foreground-muted">
        © {new Date().getFullYear()} The Timeless Edit. All rights reserved.
      </div>
    </footer>
  );
}
