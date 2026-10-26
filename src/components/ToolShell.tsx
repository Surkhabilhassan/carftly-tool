import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AdSlot } from "@/components/AdSlot";
import { ToolCard } from "@/components/ToolCard";
import { relatedTools, type ToolDef } from "@/lib/tools";

/**
 * Shared layout for individual tool pages: breadcrumb, heading, the tool
 * itself, real "how to use" steps, reserved ad space, and related tools.
 */
export function ToolShell({
  tool,
  children,
}: {
  tool: ToolDef;
  children: ReactNode;
}) {
  const related = relatedTools(tool.slug);

  return (
    <div className="container-page py-10 sm:py-14">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <Link to="/" className="link-gold">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link to="/tools" className="link-gold">Tools</Link>
        <span aria-hidden="true"> / </span>
        <span>{tool.name}</span>
      </nav>

      <header className="rise mt-6 max-w-2xl">
        <p className="eyebrow">{tool.category} tool</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">{tool.name}</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {tool.description}
        </p>
      </header>

      <div className="rise mt-8" style={{ animationDelay: "120ms" }}>
        {children}
      </div>

      <section aria-labelledby="how-to" className="mt-12 max-w-2xl">
        <h2 id="how-to" className="text-2xl font-semibold">
          How to use it
        </h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {tool.howTo.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <div className="mt-10">
        <AdSlot />
      </div>

      <section aria-labelledby="related" className="mt-14">
        <h2 id="related" className="text-2xl font-semibold">
          Related tools
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((t, i) => (
            <ToolCard key={t.slug} tool={t} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
