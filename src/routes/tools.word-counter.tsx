import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ToolShell } from "@/components/ToolShell";
import { CopyButton } from "@/components/CopyButton";
import { getTool } from "@/lib/tools";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/tools/word-counter")({
  head: () => ({
    meta: [
      {
        title: `Word Counter — Free Word & Character Count Online | ${SITE_NAME}`,
      },
      {
        name: "description",
        content:
          "Count words, characters, sentences, paragraphs and reading time as you type. Free online word counter with keyword frequency — nothing leaves your browser.",
      },
      {
        property: "og:title",
        content: `Word Counter — Free Online Word & Character Count | ${SITE_NAME}`,
      },
      {
        property: "og:description",
        content:
          "Live word, character and reading-time counts, plus keyword frequency. Free and private.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tools/word-counter" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/tools/word-counter" }],
  }),
  component: WordCounterPage,
});

const tool = getTool("/tools/word-counter")!;

function countStats(text: string) {
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const sentences = trimmed
    ? trimmed.split(/[.!?…]+(?:\s|$)/).filter((s) => s.trim()).length
    : 0;
  const paragraphs = text
    .split(/\n\s*\n/)
    .filter((p) => p.trim()).length;
  const seconds = Math.round((words / 200) * 60);
  return { words, chars, charsNoSpaces, sentences, paragraphs, seconds };
}

const STOP_WORDS = new Set([
  "the", "and", "for", "that", "with", "this", "your", "from", "have", "will",
  "they", "been", "were", "when", "what", "which", "their", "there", "would",
  "about", "into", "than", "then", "them", "these", "those", "upon", "over",
  "also", "just", "very", "much", "more", "some", "such", "only", "like",
]);

function topKeywords(text: string) {
  const counts = new Map<string, number>();
  const words = text.toLowerCase().match(/[a-z0-9'’-]+/g) ?? [];
  for (const w of words) {
    if (w.length < 4 || STOP_WORDS.has(w)) continue;
    counts.set(w, (counts.get(w) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
}

function readingTime(seconds: number) {
  if (seconds === 0) return "—";
  if (seconds < 60) return `${seconds} sec`;
  return `${Math.round(seconds / 60)} min`;
}

function WordCounterPage() {
  const [text, setText] = useState("");
  const stats = useMemo(() => countStats(text), [text]);
  const keywords = useMemo(() => topKeywords(text), [text]);

  const statItems = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.chars },
    { label: "No spaces", value: stats.charsNoSpaces },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Reading time", value: readingTime(stats.seconds) },
  ];

  return (
    <ToolShell tool={tool}>
      <div className="rounded-xl border border-line bg-card p-5 sm:p-7">
        <label htmlFor="wc-input" className="eyebrow">
          Your text
        </label>
        <textarea
          id="wc-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          placeholder="Paste or type your text here — the counts update as you type."
          className="field mt-3 resize-y font-sans leading-relaxed"
        />
        <div className="mt-4 flex flex-wrap gap-2">
          <CopyButton
            label="Copy text"
            value={() => text}
            variant="quiet"
          />
          <button
            type="button"
            onClick={() => setText("")}
            className="btn btn-quiet"
            disabled={!text}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {statItems.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-line bg-card p-4 text-center"
          >
            <p className="font-display text-2xl font-bold tabular-nums">
              {s.value}
            </p>
            <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {keywords.length > 0 && (
        <div className="mt-6 rounded-xl border border-line bg-card p-5 sm:p-7">
          <h2 className="text-xl font-semibold">Top keywords</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {keywords.map(([word, count], i) => (
              <li
                key={word}
                className="flex items-center justify-between rounded-md bg-secondary px-4 py-2 text-sm"
              >
                <span className="font-semibold">
                  <span className="mr-2 text-muted-foreground">{i + 1}.</span>
                  {word}
                </span>
                <span className="tabular-nums text-muted-foreground">
                  {count}×
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </ToolShell>
  );
}
