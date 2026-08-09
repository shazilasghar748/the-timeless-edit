// Lightweight renderer for article body text.
// Supports a small markdown-like syntax so posts can have real headings,
// bullet lists, and paragraphs without adding a full markdown library:
//   ## Heading        -> H2
//   ### Subheading     -> H3
//   - list item         -> bullet list
//   blank line           -> paragraph break

export function ArticleContent({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\s*\n/); // split into paragraphs/blocks by blank lines

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);

        // Heading block
        if (lines.length === 1 && lines[0].startsWith("### ")) {
          return (
            <h3 key={i} className="font-display text-xl font-semibold text-foreground mt-8 mb-2">
              {lines[0].replace(/^###\s+/, "")}
            </h3>
          );
        }
        if (lines.length === 1 && lines[0].startsWith("## ")) {
          return (
            <h2 key={i} className="font-display text-2xl font-semibold text-foreground mt-10 mb-3">
              {lines[0].replace(/^##\s+/, "")}
            </h2>
          );
        }

        // Bullet list block
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="list-disc pl-6 space-y-1.5 text-lg leading-relaxed text-foreground">
              {lines.map((l, j) => (
                <li key={j}>{l.replace(/^-\s+/, "")}</li>
              ))}
            </ul>
          );
        }

        // Regular paragraph
        return (
          <p key={i} className="text-lg leading-relaxed text-foreground">
            {lines.join(" ")}
          </p>
        );
      })}
    </div>
  );
}
