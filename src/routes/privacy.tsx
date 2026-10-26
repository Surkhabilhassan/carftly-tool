import { createFileRoute } from "@tanstack/react-router";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${SITE_NAME}` },
      {
        name: "description",
        content:
          "How Craftly Tools handles data: tools run in your browser, we store nothing, and this page explains the few exceptions in plain language.",
      },
      { property: "og:title", content: `Privacy Policy | ${SITE_NAME}` },
      {
        property: "og:description",
        content: "What we collect (very little) and what we never do.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="container-narrow py-10 sm:py-14">
      <header className="rise">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: October 2026
        </p>
        <div className="rule-gold mt-6" aria-hidden="true" />
      </header>

      <div className="rise mt-8 space-y-8 leading-relaxed text-foreground/90">
        <section>
          <h2 className="text-2xl font-semibold">The short version</h2>
          <p className="mt-3">
            All tools on {SITE_NAME} run entirely in your browser. Text you
            type, links you convert and QR codes you generate are processed on
            your device and are never transmitted to us, stored by us, or seen
            by anyone but you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">What we collect</h2>
          <p className="mt-3">
            We do not ask for accounts, and we do not collect personal
            information through the tools themselves. This site is served by
            standard web hosting infrastructure, which may keep ordinary server
            logs (such as IP address, browser type and pages requested) for
            security and operational purposes. Those logs are controlled by the
            hosting provider, not used by us for profiling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p className="mt-3">
            {SITE_NAME} sets no cookies of its own and uses no analytics or
            tracking scripts. If display advertising is enabled in the future,
            the advertising partner (for example Google AdSense) may set its own
            cookies subject to its policies; that would be disclosed here before
            it happens.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact form</h2>
          <p className="mt-3">
            The contact form does not send or store anything on this site. It
            opens your own email application with the message prepared; the
            email you then send is between you and us, and it is used only to
            reply.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Children</h2>
          <p className="mt-3">
            {SITE_NAME} is a general-audience site and does not knowingly
            collect information from anyone, including children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Changes</h2>
          <p className="mt-3">
            If this policy changes, the revised version will be posted on this
            page with an updated date. Questions about privacy can be sent
            through the <a href="/contact" className="link-gold">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
