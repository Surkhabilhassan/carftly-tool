import { createFileRoute, Link } from "@tanstack/react-router";
import { TOOLS } from "@/lib/tools";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${SITE_NAME}` },
      {
        name: "description",
        content:
          "Craftly Tools is a small collection of free, browser-based utilities for writers, editors and marketers. No accounts, no uploads, no tracking.",
      },
      { property: "og:title", content: `About ${SITE_NAME}` },
      {
        property: "og:description",
        content:
          "A small collection of free, private, browser-based writing and SEO tools.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container-narrow py-10 sm:py-14">
      <header className="rise">
        <p className="eyebrow">About</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">
          Small tools, made carefully
        </h1>
        <div className="rule-gold mt-6" aria-hidden="true" />
      </header>

      <div className="rise mt-8 space-y-6 leading-relaxed text-foreground/90">
        <p>
          {SITE_NAME} started with a simple observation: the everyday utilities
          writers and marketers reach for — a word count, a case change, a clean
          URL slug — shouldn't require an account, a subscription, or a page
          cluttered with ads and pop-ups.
        </p>
        <p>
          Every tool here runs entirely in your browser. Your text, your links
          and your drafts are never sent to a server, stored, or seen by anyone
          but you. That also makes the tools fast: there is nothing to upload
          and nothing to wait for.
        </p>
        <p>
          The collection is deliberately small. Each tool does one job well, and
          each is paired with a short guide that explains the craft behind it —
          not just which button to press.
        </p>
      </div>

      <section className="rise mt-10" aria-labelledby="principles">
        <h2 id="principles" className="text-2xl font-semibold">What we commit to</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/90">
          <li>Free to use, with no sign-up walls.</li>
          <li>Everything computes locally in your browser.</li>
          <li>No fake claims, no invented statistics, no dark patterns.</li>
          <li>Tools stay fast and lightweight on any connection.</li>
        </ul>
      </section>

      <section className="rise mt-10" aria-labelledby="about-tools">
        <h2 id="about-tools" className="text-2xl font-semibold">The collection</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {TOOLS.map((t) => (
            <li key={t.slug}>
              <Link to={t.slug} className="link-gold font-semibold">
                {t.name}
              </Link>
              <span className="text-muted-foreground"> — {t.tagline}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="rise mt-10">
        <Link to="/contact" className="btn btn-primary">
          Get in touch
        </Link>
      </div>
    </div>
  );
}
