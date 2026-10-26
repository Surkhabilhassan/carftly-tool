import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact | ${SITE_NAME}` },
      {
        name: "description",
        content:
          "Questions, bug reports or tool suggestions for Craftly Tools — send a message and it opens straight in your email app.",
      },
      { property: "og:title", content: `Contact | ${SITE_NAME}` },
      {
        property: "og:description",
        content: "Questions, bug reports or tool suggestions — get in touch.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const to = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : "mailto:";
    const fullSubject = subject.trim()
      ? `[${SITE_NAME}] ${subject.trim()}`
      : `[${SITE_NAME}] Message from ${name.trim() || "a visitor"}`;
    const body = [
      message.trim(),
      "",
      "—",
      name.trim() ? `From: ${name.trim()}` : "",
      email.trim() ? `Reply-to: ${email.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `${to}?subject=${encodeURIComponent(
      fullSubject,
    )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <div className="container-narrow py-10 sm:py-14">
      <header className="rise">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Say hello</h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
          Found a bug, spotted something that doesn't work, or have an idea for
          a tool? Fill in the form — pressing send opens your own email app with
          the message ready. Nothing is stored on this site.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="rise mt-8 max-w-xl rounded-xl border border-line bg-card p-5 sm:p-7"
        style={{ animationDelay: "100ms" }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="ct-name" className="text-sm font-semibold">
              Name
            </label>
            <input
              id="ct-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="field mt-1.5"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="ct-email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="ct-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field mt-1.5"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="ct-subject" className="text-sm font-semibold">
            Subject
          </label>
          <input
            id="ct-subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="field mt-1.5"
            placeholder="Bug report, tool idea, feedback…"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="ct-message" className="text-sm font-semibold">
            Message
          </label>
          <textarea
            id="ct-message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="field mt-1.5 resize-y"
            placeholder="Tell us what's on your mind…"
          />
        </div>

        <button type="submit" className="btn btn-gold mt-5">
          Send message
        </button>

        {opened && (
          <p className="mt-4 rounded-md bg-secondary px-4 py-3 text-sm text-muted-foreground">
            Your email app should have opened with the message ready. If it
            didn't, copy your text and email us manually from your mail client.
          </p>
        )}
      </form>
    </div>
  );
}
