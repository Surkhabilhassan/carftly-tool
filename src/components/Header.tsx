import { Link, useRouterState } from "@tanstack/react-router";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/tools/" ? pathname.startsWith("/tools") : pathname.startsWith(to.replace(/\/$/, ""));

  return (
    <header className="border-b border-line bg-card">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-baseline gap-2" aria-label={`${SITE_NAME} home`}>
          <span className="font-display text-2xl font-bold tracking-tight">
            Craftly<span className="text-gold"> Tools</span>
          </span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-gold-deep ${
                isActive(link.to) ? "text-gold-deep" : "text-foreground"
              }`}
              aria-current={isActive(link.to) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
