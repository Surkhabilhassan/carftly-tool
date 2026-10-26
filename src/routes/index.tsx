import { createFileRoute, Link } from "@tanstack/react-router";
import { SearchTools } from "@/components/SearchTools";
import { ToolCard } from "@/components/ToolCard";
import { AdSlot } from "@/components/AdSlot";
import { TOOLS, CATEGORIES } from "@/lib/tools";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE_NAME} — Free Word, Text & SEO Tools` },
      {
        name: "description",
        content:
          "Free browser-based writing and SEO tools: word counter, text case converter, URL slug generator and meta tag preview. Fast, private, no sign-up.",
      },
      { property: "og:title", content: `${SITE_NAME} — Free Word, Text & SEO Tools` },
      {
        property: "og:description",
        content:
          "Word counter, case converter, slug generator and meta tag preview — all free and all in your browser.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const popular = TOOLS.filter((t) => t.popular);

  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-paper">
        <div className="container-page py-20 sm:py-28">
          <div className="rise max-w-3xl">
            <p className="eyebrow text-gold-soft">Free · No sign-up · Runs in your browser</p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.08] sm:text-6xl">
              Small tools,
              <br />
              crafted for <span className="text-gold-soft">good writing</span>.
            </h1>
            <div className="rule-gold mt-6" aria-hidden="true" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
              {SITE_NAME} is a small collection of everyday utilities for
              writers, editors and marketers — counting words, fixing case,
              cleaning up URLs and previewing meta tags. Nothing leaves your
              browser.
            </p>
          </div>

          <div className="rise mt-10 max-w-xl" style={{ animationDelay: "150ms" }}>
            <SearchTools />
          </div>

          <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <Link to="/tools" className="btn btn-gold">
              Browse all tools
            </Link>
            <Link to="/guides" className="btn btn-outline text-paper">
              Read the guides
            </Link>
          </div>
        </div>
      </section>

      {/* Popular tools */}
      <section className="container-page py-16 sm:py-20" aria-labelledby="popular">
        <div className="rise max-w-2xl">
          <p className="eyebrow">Most used</p>
          <h2 id="popular" className="mt-2 text-3xl font-bold sm:text-4xl">
            Popular tools
          </h2>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popular.map((tool, i) => (
            <ToolCard key={tool.slug} tool={tool} index={i} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section
        className="border-y border-line bg-card"
        aria-labelledby="categories"
      >
        <div className="container-page py-16 sm:py-20">
          <div className="rise max-w-2xl">
            <p className="eyebrow">Browse by need</p>
            <h2 id="categories" className="mt-2 text-3xl font-bold sm:text-4xl">
              Categories
            </h2>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {CATEGORIES.map((cat, i) => {
              const count = TOOLS.filter((t) => t.category === cat.id).length;
              return (
                  <Link
                    key={cat.id}
                    to="/tools"
                  className="card-lift rise block p-8"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <p className="eyebrow">{count} tool{count === 1 ? "" : "s"}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{cat.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cat.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
                    View category <span aria-hidden="true">→</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guides teaser */}
      <section className="container-page py-16 sm:py-20" aria-labelledby="guides-teaser">
        <div className="rise flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Learn</p>
            <h2 id="guides-teaser" className="mt-2 text-3xl font-bold sm:text-4xl">
              Straight-talking guides
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Short, practical reads on titles, word counts and URL slugs — no
              filler, no fluff.
            </p>
          </div>
          <Link to="/guides" className="btn btn-quiet">
            All guides
          </Link>
        </div>
      </section>

      <div className="container-page pb-4">
        <AdSlot />
      </div>
    </>
  );
}
