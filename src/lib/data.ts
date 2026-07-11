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
    slug: "why-pcos-is-now-pmos",
    title: "Why PCOS Is Now PMOS? Understanding the New Perspective",
    excerpt:
      "Experts are proposing a new term, PMOS, to better reflect the hormonal and metabolic reality behind PCOS.",
    content:
      "For decades, Polycystic Ovary Syndrome (PCOS) has been one of the most common hormonal disorders affecting women of reproductive age. Millions of women worldwide experience irregular periods, acne, unwanted hair growth, infertility, and weight gain because of this condition. However, experts are now proposing a new term — PMOS (PolyMetabolic Ovary Syndrome) — to better reflect what is actually happening inside the body. This isn't simply about changing a name. It represents a major shift in understanding that PCOS is not only an ovarian disorder, but also a metabolic disease. The traditional name focuses mainly on the ovaries, yet many women with PCOS don't actually have ovarian cysts, and many women with ovarian cysts do not have PCOS. Research over the past two decades has shown that insulin resistance, inflammation, and metabolic dysfunction are often the underlying causes. When the body's cells stop responding properly to insulin, blood sugar rises, the pancreas produces more insulin, and high insulin stimulates the ovaries to produce excess testosterone — leading to irregular periods, acne, facial hair, weight gain, and infertility. Insulin resistance also raises the risk of type 2 diabetes, fatty liver disease, high cholesterol, and heart disease, which is why doctors increasingly focus on metabolic health when treating PCOS. Management typically includes a balanced diet rich in lean protein, vegetables, fiber, and healthy fats; regular exercise; better sleep; modest weight management; and, when needed, medications to improve insulin sensitivity or regulate cycles. As of now, PMOS is not an officially adopted replacement for PCOS by major medical organizations — it remains a term used by some researchers to emphasize the condition's metabolic nature, while PCOS stays the official clinical diagnosis. Still, the growing emphasis on metabolic health is already shaping how the condition is diagnosed and treated, offering hope for more comprehensive, whole-body care.",
    category: "Health",
    author: "Amelia Hart",
    date: "2026-07-11",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800",
    badge: "New",
  },
  {
    slug: "iron-deficiency-in-women-causes-symptoms-treatment",
    title: "Iron Deficiency in Women: Causes, Symptoms, Risks, and How to Restore Healthy Iron Levels",
    excerpt:
      "Why women are especially prone to low iron, the symptoms to watch for, and how to restore healthy levels naturally.",
    content:
      "Iron deficiency is one of the most common nutritional deficiencies worldwide, affecting millions of women of all ages. It often develops gradually, making its symptoms easy to overlook or mistake for stress, poor sleep, or a busy lifestyle. Left untreated, low iron can progress to iron deficiency anemia, affecting energy, physical performance, mental well-being, and overall health. Iron is essential for producing hemoglobin, the protein in red blood cells that carries oxygen throughout the body — when stores become depleted, less oxygen reaches muscles and organs, leading to fatigue, weakness, and other symptoms. Women are especially vulnerable because of menstruation, pregnancy, breastfeeding, and shifting iron needs across life stages. Common causes include heavy menstrual periods, pregnancy, breastfeeding, poor dietary intake, vegetarian or vegan diets (plant-based, non-heme iron is absorbed less efficiently), poor absorption due to conditions like celiac disease, frequent blood donation, and gastrointestinal blood loss. Symptoms often develop slowly and can include constant fatigue, weakness, pale skin, shortness of breath, dizziness, headaches, cold hands and feet, hair loss, brittle nails, difficulty concentrating, and unusual cravings for ice or starch. Left untreated, iron deficiency can lead to anemia, reduced immune function, pregnancy complications, and in severe cases, heart complications. Diagnosis typically involves blood tests such as a complete blood count and ferritin levels, often the earliest indicator of low iron stores. To restore healthy levels naturally, focus on iron-rich foods like lean meat, fish, eggs, lentils, beans, and spinach; pair them with vitamin C sources like citrus, strawberries, or bell peppers to boost absorption; avoid tea or coffee around meals since they inhibit absorption; and only take supplements under medical guidance, since excess iron can cause side effects. Most cases are preventable through a balanced diet, attention to heavy menstrual bleeding, regular prenatal checkups, and monitoring iron levels when symptoms or risk factors are present. If you experience persistent fatigue, heavy bleeding, unexplained hair loss, or symptoms that don't improve with dietary changes, consult a healthcare professional for proper testing and personalized treatment.",
    category: "Health",
    author: "Priya Nair",
    date: "2026-07-11",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    badge: "New",
  },
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
