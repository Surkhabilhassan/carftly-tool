import { createFileRoute, Link } from "@tanstack/react-router";
import { GUIDES } from "@/lib/guides";
import { AdSlot } from "@/components/AdSlot";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: `Guides — Practical Writing & SEO Advice | ${SITE_NAME}` },
      {
        name: "description",
        content:
          "Short, practical guides on meta titles, blog post length and SEO-friendly URL slugs. No filler — just what works.",
      },
      { property: "og:title", content: `Guides | ${SITE_NAME}` },
      {
        property: "og:description",
        content:
          "Short, practical guides on meta titles, word counts and URL slugs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/guides" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/guides" }],
  }),
  component: GuidesPage,
});

function GuidesPage() {
  return (
    <div className="container-page py-10 sm:py-14">
      <header className="rise max-w-2xl">
        <p className="eyebrow">Learn</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Guides</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Short, practical reads that pair with our tools — how to write titles
          people click, how long a post should be, and what makes a URL slug
          work.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((guide, i) => (
          <Link
            key={guide.slug}
            to={guide.slug}
            className="card-lift rise block p-6"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <p className="eyebrow">{guide.readingMinutes} min read</p>
            <h2 className="mt-2 text-xl font-semibold leading-snug">
              {guide.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {guide.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
              Read guide <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <AdSlot />
      </div>
    </div>
  );
}
