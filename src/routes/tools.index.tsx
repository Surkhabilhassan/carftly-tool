import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SearchTools } from "@/components/SearchTools";
import { ToolGrid } from "@/components/ToolCard";
import { AdSlot } from "@/components/AdSlot";
import { TOOLS, CATEGORIES, type ToolCategory } from "@/lib/tools";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/tools/")({
  head: () => ({
    meta: [
      { title: `All Tools — Free Word, Text & SEO Utilities | ${SITE_NAME}` },
      {
        name: "description",
        content:
          "Browse every Craftly Tools utility: word counter, text case converter, URL slug generator and meta tag preview. Free, private and browser-based.",
      },
      { property: "og:title", content: `All Tools | ${SITE_NAME}` },
      {
        property: "og:description",
        content:
          "Every Craftly Tools utility on one page — free, private and browser-based.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tools" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/tools" }],
  }),
  component: AllToolsPage,
});

type Filter = "All" | ToolCategory;

function AllToolsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOOLS.filter((t) => filter === "All" || t.category === filter).filter(
      (t) =>
        !q ||
        `${t.name} ${t.tagline} ${t.description} ${t.category}`
          .toLowerCase()
          .includes(q),
    );
  }, [query, filter]);

  const filters: Filter[] = ["All", ...CATEGORIES.map((c) => c.id)];

  return (
    <div className="container-page py-10 sm:py-14">
      <header className="rise max-w-2xl">
        <p className="eyebrow">The collection</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">All tools</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Every utility {SITE_NAME} offers, in one place. Search, filter, and
          open what you need — each tool runs entirely in your browser.
        </p>
      </header>

      <div className="rise mt-8 max-w-xl" style={{ animationDelay: "100ms" }}>
        <SearchTools
          value={query}
          onValueChange={setQuery}
          placeholder="Filter tools by name or use…"
        />
        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`btn px-4 py-2 text-xs ${filter === f ? "btn-primary" : "btn-quiet"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="rise mt-10" style={{ animationDelay: "180ms" }}>
        <ToolGrid tools={visible} />
      </div>

      <div className="mt-12">
        <AdSlot />
      </div>
    </div>
  );
}
