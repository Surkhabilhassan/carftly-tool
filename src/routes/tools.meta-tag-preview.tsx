import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ToolShell } from "@/components/ToolShell";
import { CopyButton } from "@/components/CopyButton";
import { getTool } from "@/lib/tools";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/tools/meta-tag-preview")({
  head: () => ({
    meta: [
      {
        title: `Meta Tag Preview — Test Titles & Descriptions | ${SITE_NAME}`,
      },
      {
        name: "description",
        content:
          "Preview your page title and description as a search result and a social share card, with live character-limit warnings. Free and instant.",
      },
      {
        property: "og:title",
        content: `Meta Tag Preview — Test Before You Publish | ${SITE_NAME}`,
      },
      {
        property: "og:description",
        content:
          "See exactly how your meta title and description look in search results and social shares.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tools/meta-tag-preview" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/tools/meta-tag-preview" }],
  }),
  component: MetaTagPreviewPage,
});

const tool = getTool("/tools/meta-tag-preview")!;

const TITLE_LIMIT = 60;
const DESC_LIMIT = 160;

function Counter({ length, limit }: { length: number; limit: number }) {
  const over = length > limit;
  const near = !over && length > limit * 0.9;
  return (
    <span
      className={`text-xs font-semibold tabular-nums ${
        over ? "text-destructive" : near ? "text-gold-deep" : "text-muted-foreground"
      }`}
    >
      {length}/{limit}{over ? " — too long" : ""}
    </span>
  );
}

function MetaTagPreviewPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [siteName, setSiteName] = useState("");

  const displayUrl = useMemo(() => {
    const clean = url.trim();
    if (!clean) return "yoursite.com › your-page";
    const noProto = clean.replace(/^https?:\/\//, "").replace(/\/+$/, "");
    const parts = noProto.split("/");
    return [parts[0], ...parts.slice(1).map((p) => ` › ${p}`)].join("");
  }, [url]);

  const displayTitle = title.trim() || "Your page title appears here";
  const displayDesc =
    description.trim() ||
    "Your meta description appears here. Write one or two sentences that summarize the page.";

  return (
    <ToolShell tool={tool}>
      <div className="rounded-xl border border-line bg-card p-5 sm:p-7">
        <p className="eyebrow">Page details</p>
        <div className="mt-4 grid gap-4">
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <label htmlFor="mt-title" className="text-sm font-semibold">
                Meta title
              </label>
              <Counter length={title.length} limit={TITLE_LIMIT} />
            </div>
            <input
              id="mt-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Word Counter — Free Word & Character Count"
              className="field mt-1.5"
            />
          </div>
          <div>
            <div className="flex items-baseline justify-between gap-2">
              <label htmlFor="mt-desc" className="text-sm font-semibold">
                Meta description
              </label>
              <Counter length={description.length} limit={DESC_LIMIT} />
            </div>
            <textarea
              id="mt-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="One or two sentences summarizing the page…"
              className="field mt-1.5 resize-y"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="mt-url" className="text-sm font-semibold">
                Page URL
              </label>
              <input
                id="mt-url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://yoursite.com/your-page"
                className="field mt-1.5"
              />
            </div>
            <div>
              <label htmlFor="mt-site" className="text-sm font-semibold">
                Site name <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <input
                id="mt-site"
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                placeholder="Your Site"
                className="field mt-1.5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search result preview */}
      <div className="mt-5 rounded-xl border border-line bg-card p-5 sm:p-7">
        <p className="eyebrow">Search result preview</p>
        <div className="mt-4 rounded-lg border border-line bg-background p-4">
          <p className="text-xs text-muted-foreground">{displayUrl}</p>
          <p className="mt-1 text-lg font-medium leading-snug text-serp-link sm:text-xl">
            {displayTitle.length > TITLE_LIMIT
              ? `${displayTitle.slice(0, TITLE_LIMIT).trimEnd()}…`
              : displayTitle}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {displayDesc.length > DESC_LIMIT
              ? `${displayDesc.slice(0, DESC_LIMIT).trimEnd()}…`
              : displayDesc}
          </p>
        </div>
      </div>

      {/* Social card preview */}
      <div className="mt-5 rounded-xl border border-line bg-card p-5 sm:p-7">
        <p className="eyebrow">Social share card preview</p>
        <div className="mt-4 max-w-md overflow-hidden rounded-lg border border-line bg-ink text-paper">
          <div className="flex h-32 items-center justify-center bg-ink-soft">
            <span className="font-display text-2xl font-bold text-gold-soft">
              {siteName.trim() || "Your Site"}
            </span>
          </div>
          <div className="p-4">
            <p className="text-xs uppercase tracking-wider text-paper/60">
              {displayUrl.split(" › ")[0]}
            </p>
            <p className="mt-1 text-base font-semibold leading-snug">
              {displayTitle.length > 70
                ? `${displayTitle.slice(0, 70).trimEnd()}…`
                : displayTitle}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-paper/70">
              {displayDesc.length > 110
                ? `${displayDesc.slice(0, 110).trimEnd()}…`
                : displayDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <CopyButton label="Copy title" value={() => title} variant="primary" />
        <CopyButton label="Copy description" value={() => description} variant="primary" />
        <button
          type="button"
          onClick={() => {
            setTitle("");
            setDescription("");
            setUrl("");
            setSiteName("");
          }}
          className="btn btn-quiet"
          disabled={!title && !description && !url && !siteName}
        >
          Clear all
        </button>
      </div>
    </ToolShell>
  );
}
