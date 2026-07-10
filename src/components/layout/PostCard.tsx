import Image from "next/image";
import Link from "next/link";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Post } from "@/lib/data";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/articles/${post.slug}`}>
      <Card className="h-full">
        <div className="relative h-44 w-full">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
        <CardBody>
          {post.badge && (
            <Badge tone={post.badge === "Editor's Choice" ? "gold" : "accent"} className="mb-3">
              {post.badge}
            </Badge>
          )}
          <h3 className="font-display text-lg font-semibold mb-2 leading-snug">{post.title}</h3>
          <p className="text-sm text-foreground-muted mb-3 line-clamp-2">{post.excerpt}</p>
          <div className="text-xs text-foreground-muted">
            {post.author} · {post.readingTime}
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
