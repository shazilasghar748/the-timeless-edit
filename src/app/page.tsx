import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PostCard } from "@/components/layout/PostCard";
import { posts, categories } from "@/lib/data";

export default function HomePage() {
  const [featured, ...rest] = posts;

  return (
    <div className="max-w-content mx-auto px-6 py-12">
      {/* Hero / Featured post */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div>
          {featured.badge && <Badge tone="gold" className="mb-4">{featured.badge}</Badge>}
          <h1 className="font-display text-display-lg font-semibold mb-5">
            {featured.title}
          </h1>
          <p className="text-foreground-muted text-lg mb-6 max-w-prose">{featured.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-foreground-muted mb-8">
            <span>{featured.author}</span>
            <span>·</span>
            <span>{featured.readingTime}</span>
          </div>
          <Link href={`/articles/${featured.slug}`}>
            <Button size="lg">Read the story</Button>
          </Link>
        </div>
        <div className="relative h-80 rounded-card overflow-hidden shadow-card">
          <Image src={featured.image} alt={featured.title} fill className="object-cover" />
        </div>
      </section>

      {/* Trending */}
      <section className="mb-20">
        <div className="eyebrow-rule mb-6">Trending now</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-20">
        <div className="eyebrow-rule mb-6">Explore categories</div>
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link
              key={c}
              href={`/categories/${c.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-5 py-2.5 rounded-button bg-surface-muted text-sm hover:bg-border/60 transition-colors"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      {/* Latest */}
      <section className="mb-20">
        <div className="eyebrow-rule mb-6">Latest posts</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-surface-muted rounded-card p-10 text-center">
        <h2 className="text-display-sm font-display font-semibold mb-3">
          Never miss a story
        </h2>
        <p className="text-foreground-muted mb-6 max-w-md mx-auto">
          Join the weekly newsletter for the best of The Timeless Edit, delivered every Sunday.
        </p>
        <form className="flex gap-3 max-w-sm mx-auto">
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 rounded-button border border-border bg-surface px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </section>
    </div>
  );
}
