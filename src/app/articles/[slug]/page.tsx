import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { PostCard } from "@/components/layout/PostCard";
import { posts, getPostBySlug } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <article className="max-w-content mx-auto px-6 py-12">
      <div className="max-w-prose mx-auto">
        <div className="eyebrow-rule mb-4">{post.category}</div>
        <h1 className="font-display text-display-md font-semibold mb-4">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-foreground-muted mb-8">
          <span>{post.author}</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </div>

      <div className="relative h-96 rounded-card overflow-hidden mb-10 max-w-content">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>

      <div className="max-w-prose mx-auto">
        <p className="text-lg leading-relaxed text-foreground">{post.content}</p>
      </div>

      {related.length > 0 && (
        <section className="mt-20 max-w-content">
          <div className="eyebrow-rule mb-6">Related articles</div>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
