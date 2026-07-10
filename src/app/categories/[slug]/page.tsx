import { notFound } from "next/navigation";
import { PostCard } from "@/components/layout/PostCard";
import { categories, getPostsByCategory } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.toLowerCase().replace(/\s+/g, "-") }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.toLowerCase().replace(/\s+/g, "-") === params.slug);
  if (!category) notFound();

  const categoryPosts = getPostsByCategory(category);

  return (
    <div className="max-w-content mx-auto px-6 py-12">
      <div className="eyebrow-rule mb-4">Category</div>
      <h1 className="font-display text-display-md font-semibold mb-10">{category}</h1>

      {categoryPosts.length === 0 ? (
        <p className="text-foreground-muted">No articles published in this category yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
