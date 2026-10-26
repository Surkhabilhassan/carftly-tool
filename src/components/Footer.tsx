import { Link } from "@tanstack/react-router";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import { TOOLS } from "@/lib/tools";

const columns = [
  {
    heading: "Tools",
    links: TOOLS.map((t) => ({ label: t.name, to: t.slug })),
  },
  {
    heading: "Resources",
    links: [
      { label: "All Tools", to: "/tools" },
      { label: "Guides", to: "/guides" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Use", to: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-ink text-paper">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold">
            Craftly<span className="text-gold-soft"> Tools</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/70">
            {SITE_TAGLINE}. Everything runs in your browser — no accounts, no
            uploads.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="eyebrow text-gold-soft">{col.heading}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-paper/80 transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-paper/15">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-paper/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Built to be fast, simple and free.</p>
        </div>
      </div>
    </footer>
  );
}
