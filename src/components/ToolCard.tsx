import { Link } from "@tanstack/react-router";
import { TOOLS, type ToolDef } from "@/lib/tools";

export function ToolCard({ tool, index = 0 }: { tool: ToolDef; index?: number }) {
  return (
    <Link
      to={tool.slug}
      className="card-lift rise block p-6"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <p className="eyebrow">{tool.category}</p>
      <h3 className="mt-2 text-xl font-semibold">{tool.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {tool.tagline}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">
        Open tool
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}

export function ToolGrid({ tools }: { tools: ToolDef[] }) {
  if (tools.length === 0) {
    return (
      <p className="py-10 text-center text-sm text-muted-foreground">
        No tools match your search yet.
      </p>
    );
  }
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool, i) => (
        <ToolCard key={tool.slug} tool={tool} index={i} />
      ))}
    </div>
  );
}

export function AllToolsGrid() {
  return <ToolGrid tools={TOOLS} />;
}
