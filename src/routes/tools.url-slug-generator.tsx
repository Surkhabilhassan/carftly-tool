import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ToolShell } from "@/components/ToolShell";
import { CopyButton } from "@/components/CopyButton";
import { getTool } from "@/lib/tools";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/tools/url-slug-generator")({
  head: () => ({
    meta: [
      {
        title: `URL Slug Generator — Clean, SEO-Friendly Slugs | ${SITE_NAME}`,
      },
      {
        name: "description",
        content:
          "Turn any title into a clean, lowercase, SEO-friendly URL slug. Handles accents and punctuation, with separator and length options. Free and instant.",
      },
      {
        property: "og:title",
        content: `URL Slug Generator — SEO-Friendly Slugs | ${SITE_NAME}`,
      },
      {
        property: "og:description",
        content:
          "Convert titles into clean URL slugs with separator and length options. Free and private.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tools/url-slug-generator" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/tools/url-slug-generator" }],
  }),
  component: SlugGeneratorPage,
});

const tool = getTool("/tools/url-slug-generator")!;

function makeSlug(input: string, separator: "-" | "_", lowercase: boolean, maxLength: number) {
  let slug = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (lowercase) slug = slug.toLowerCase();
  slug = slug
    .replace(/[''`]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, separator);
  if (maxLength > 0 && slug.length > maxLength) {
    const cut = slug.slice(0, maxLength);
    const lastBreak = Math.max(
      cut.lastIndexOf(separator),
      cut.lastIndexOf(" "),
    );
    slug = (lastBreak > maxLength * 0.5 ? cut.slice(0, lastBreak) : cut)
      .replace(new RegExp(`\\${separator}+$`), "");
  }
  return slug;
}

function SlugGeneratorPage() {
  const [title, setTitle] = useState("");
  const [separator, setSeparator] = useState<'-' | '_'>("-");
  const [lowercase, setLowercase] = useState(true);
  const [maxLength, setMaxLength] = useState(60);

  const slug = useMemo(
    () => makeSlug(title, separator, lowercase, maxLength),
    [title, separator, lowercase, maxLength],
  );

  return (
    <ToolShell tool={tool}>
      <div className="rounded-xl border border-line bg-card p-5 sm:p-7">
        <label htmlFor="slug-input" className="eyebrow">
          Page title or headline
        </label>
        <input
          id="slug-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. The Complete Guide to Container Gardening"
          className="field mt-3"
        />

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="slug-sep" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Separator
            </label>
            <select
              id="slug-sep"
              value={separator}
              onChange={(e) => setSeparator(e.target.value as '-' | '_')}
              className="field mt-1.5"
            >
              <option value="-">Hyphen ( - )</option>
              <option value="_">Underscore ( _ )</option>
            </select>
          </div>
          <div>
            <label htmlFor="slug-max" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Max length: {maxLength}
            </label>
            <input
              id="slug-max"
              type="range"
              min={20}
              max={100}
              step={5}
              value={maxLength}
              onChange={(e) => setMaxLength(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--color-gold)]"
            />
          </div>
          <div className="flex items-end">
            <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold">
              <input
                type="checkbox"
                checked={lowercase}
                onChange={(e) => setLowercase(e.target.checked)}
                className="h-4 w-4 accent-[var(--color-gold)]"
              />
              Force lowercase
            </label>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-line bg-card p-5 sm:p-7">
        <label htmlFor="slug-output" className="eyebrow">
          Slug
        </label>
        <input
          id="slug-output"
          type="text"
          value={slug}
          readOnly
          aria-label="Generated slug"
          placeholder="your-slug-appears-here"
          className="field mt-3 font-mono text-base"
        />
        <p className="mt-2 text-xs text-muted-foreground">
          URL preview: <span className="font-mono">yoursite.com/{slug || "your-slug"}</span>
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <CopyButton label="Copy slug" value={() => slug} />
          <button
            type="button"
            onClick={() => setTitle("")}
            className="btn btn-quiet"
            disabled={!title}
          >
            Clear
          </button>
        </div>
      </div>
    </ToolShell>
  );
}
