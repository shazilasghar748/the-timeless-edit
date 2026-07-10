export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  image: string;
  badge?: "Editor's Choice" | "Trending" | "New" | "Popular";
}

export const categories = [
  "Health", "Science", "Technology", "Artificial Intelligence", "Lifestyle",
  "Psychology", "Travel", "Food", "Business", "Books", "Self Improvement",
];

export const posts: Post[] = [
  {
    slug: "quiet-return-of-analog-living",
    title: "The quiet return of analog living",
    excerpt: "Why slower rituals are reshaping how we spend evenings at home.",
    content:
      "Across cities, a small but growing number of people are trading screens for paper — notebooks, film cameras, printed photographs. It isn't nostalgia so much as a search for friction in a frictionless world...",
    category: "Lifestyle",
    author: "Amelia Hart",
    date: "2026-07-08",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
    badge: "Editor's Choice",
  },
  {
    slug: "inside-the-new-space-economy",
    title: "Inside the new space economy",
    excerpt: "What commercial launches this year mean for the next decade.",
    content:
      "Private launch costs have fallen for six consecutive years. What used to be a government-only frontier is now a crowded commercial race, and the implications reach far beyond orbit...",
    category: "Science",
    author: "Daniel Osei",
    date: "2026-07-07",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    badge: "Trending",
  },
  {
    slug: "short-history-of-sunday-dinner",
    title: "A short history of Sunday dinner",
    excerpt: "Tracing one ritual across a century of changing family life.",
    content:
      "The Sunday roast, the family table, the unhurried afternoon — where did it come from, and why does it keep resurfacing every time life speeds up again?",
    category: "Food",
    author: "Priya Nair",
    date: "2026-07-06",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800",
    badge: "New",
  },
  {
    slug: "ai-in-everyday-decisions",
    title: "How AI quietly entered everyday decisions",
    excerpt: "From playlists to portfolios, the invisible layer making choices for us.",
    content:
      "Most people interact with a recommendation algorithm dozens of times a day without noticing. What happens when that invisible layer starts shaping bigger decisions?",
    category: "Artificial Intelligence",
    author: "Marcus Lee",
    date: "2026-07-05",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    badge: "Popular",
  },
  {
    slug: "psychology-of-morning-routines",
    title: "The psychology of morning routines",
    excerpt: "Why the first hour of the day carries so much weight.",
    content:
      "Behavioral scientists have long studied why mornings feel disproportionately important — and how a handful of small choices ripple through the rest of the day.",
    category: "Psychology",
    author: "Amelia Hart",
    date: "2026-07-04",
    readingTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  },
  {
    slug: "the-case-for-boring-finance",
    title: "The case for boring finance",
    excerpt: "Why the least exciting strategy is usually the one that works.",
    content:
      "Financial media rewards drama. Long-term outcomes rarely do. A look at why patience remains the most undervalued asset in personal finance.",
    category: "Business",
    author: "Daniel Osei",
    date: "2026-07-03",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string) {
  return posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}
