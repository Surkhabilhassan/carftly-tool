import { createFileRoute } from "@tanstack/react-router";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms of Use | ${SITE_NAME}` },
      {
        name: "description",
        content:
          "The terms that apply to using Craftly Tools: the service is provided as-is, free of charge, and you keep ownership of everything you create with it.",
      },
      { property: "og:title", content: `Terms of Use | ${SITE_NAME}` },
      {
        property: "og:description",
        content: "Simple, fair terms for a free tool site.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="container-narrow py-10 sm:py-14">
      <header className="rise">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Terms of Use</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: October 2026
        </p>
        <div className="rule-gold mt-6" aria-hidden="true" />
      </header>

      <div className="rise mt-8 space-y-8 leading-relaxed text-foreground/90">
        <section>
          <h2 className="text-2xl font-semibold">Using the site</h2>
          <p className="mt-3">
            {SITE_NAME} provides free browser-based utilities. You may use them
            for personal or commercial work without restriction. You agree not
            to abuse the service — for example by attempting to disrupt it,
            scrape it at scale, or use it in violation of any applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Your content</h2>
          <p className="mt-3">
            Everything you type into the tools stays on your device. You keep
            full ownership of any text, slugs, meta tags or QR codes you create.
            We claim no rights over your content because we never receive it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">No warranty</h2>
          <p className="mt-3">
            The tools are provided “as is”, without warranty of any kind, express
            or implied — including accuracy, fitness for a particular purpose
            and availability. Word counts, character limits and previews are
            best-effort estimates; always verify anything critical before
            relying on it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Limitation of liability</h2>
          <p className="mt-3">
            To the fullest extent permitted by law, {SITE_NAME} is not liable
            for any loss or damage arising from your use of, or inability to
            use, the site or its tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Changes</h2>
          <p className="mt-3">
            Tools, features and these terms may change over time. Continued use
            of the site after changes are posted means you accept the revised
            terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-3">
            Questions about these terms? Reach us through the{" "}
            <a href="/contact" className="link-gold">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
