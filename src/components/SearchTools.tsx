import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { TOOLS } from "@/lib/tools";

/**
 * Live search over the tool registry. Results link straight to tool pages.
 * Works uncontrolled (own state) or controlled via value/onValueChange.
 */
export function SearchTools({
  value,
  onValueChange,
  placeholder = "Search tools — try “word count” or “slug”…",
  autoFocus = false,
}: {
  value?: string;
  onValueChange?: (v: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  const [internal, setInternal] = useState("");
  const query = value ?? internal;
  const setQuery = (v: string) => {
    setInternal(v);
    onValueChange?.(v);
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return TOOLS.filter((tool) =>
      `${tool.name} ${tool.tagline} ${tool.description} ${tool.category}`
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const showResults = query.trim().length > 0 && !onValueChange;

  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="search"
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label="Search tools"
          className="field pl-10"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        >
          ⌕
        </span>
      </div>

      {showResults && (
        <ul
          role="listbox"
          aria-label="Search results"
          className="mt-3 divide-y divide-line overflow-hidden rounded-md border border-line bg-card"
        >
          {results.length === 0 ? (
            <li className="px-4 py-3 text-sm text-muted-foreground">
              Nothing matches “{query}”. Try “counter”, “case” or “slug”.
            </li>
          ) : (
            results.map((tool) => (
              <li key={tool.slug}>
                <Link
                  to={tool.slug}
                  onClick={() => setQuery("")}
                  className="flex items-baseline justify-between gap-3 px-4 py-3 transition-colors hover:bg-secondary"
                >
                  <span>
                    <span className="block text-sm font-semibold">
                      {tool.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {tool.tagline}
                    </span>
                  </span>
                  <span className="eyebrow shrink-0 text-[0.65rem]">
                    {tool.category}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
