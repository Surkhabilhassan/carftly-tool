import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getGuide } from "@/lib/guides";
import { AdSlot } from "@/components/AdSlot";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(`/guides/${params.slug}`);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ loaderData }) => {
    // loaderData is undefined when the loader didn't complete (e.g. notFound)
    if (!loaderData) {
      return { meta: [{ title: `Guide unavailable | ${SITE_NAME}` }, { name: "robots", content: "noindex" }] };
    }
    const { guide } = loaderData;
    return {
      meta: [
        { title: `${guide.title} | ${SITE_NAME}` },
        { name: "description", content: guide.description },
        { property: "og:title", content: guide.title },
        { property: "og:description", content: guide.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: guide.slug },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: guide.slug }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.description,
            author: { "@type": "Organization", name: SITE_NAME },
            dateModified: guide.updated,
          }),
        },
      ],
    };
  },
  component: GuidePage,
});

function GuidePage() {
  const { guide } = Route.useLoaderData();

  return (
    <div className="container-narrow py-10 sm:py-14">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="link-gold">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link to="/guides" className="link-gold">Guides</Link>
        <span aria-hidden="true"> / </span>
        <span>{guide.title}</span>
      </nav>

      <header className="rise mt-6">
        <p className="eyebrow">{guide.readingMinutes} min read · Updated {guide.updated}</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
          {guide.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {guide.description}
        </p>
        <div className="rule-gold mt-6" aria-hidden="true" />
      </header>

      <article className="rise mt-8" style={{ animationDelay: "120ms" }}>
        {guide.sections.map((section) => (
          <section key={section.heading} className="mb-10">
            <h2 className="text-2xl font-semibold">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
            {section.list && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/90">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      {guide.toolLink && (
        <div className="rise rounded-xl border border-line bg-card p-6">
          <p className="eyebrow">Try it yourself</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Put this guide into practice right away.
          </p>
          <Link to={guide.toolLink.href} className="btn btn-gold mt-4">
            Open {guide.toolLink.label}
          </Link>
        </div>
      )}

      <div className="mt-10">
        <AdSlot />
      </div>
    </div>
  );
}
