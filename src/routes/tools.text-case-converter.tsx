import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ToolShell } from "@/components/ToolShell";
import { CopyButton } from "@/components/CopyButton";
import { getTool } from "@/lib/tools";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/tools/text-case-converter")({
  head: () => ({
    meta: [
      {
        title: `Text Case Converter — UPPERCASE, Title Case, camelCase | ${SITE_NAME}`,
      },
      {
        name: "description",
        content:
          "Convert text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case and more. Free and instant.",
      },
      {
        property: "og:title",
        content: `Text Case Converter — 10 Cases, One Click | ${SITE_NAME}`,
      },
      {
        property: "og:description",
        content:
          "Switch any text between ten common cases with one-click copy. Free and private.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tools/text-case-converter" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/tools/text-case-converter" }],
  }),
  component: CaseConverterPage,
});

const tool = getTool("/tools/text-case-converter")!;

const minorWords = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "in", "nor", "of", "on",
  "or", "per", "the", "to", "vs", "via", "with",
]);

const CASES: { label: string; convert: (t: string) => string }[] = [
  {
    label: "UPPERCASE",
    convert: (t) => t.toUpperCase(),
  },
  {
    label: "lowercase",
    convert: (t) => t.toLowerCase(),
  },
  {
    label: "Title Case",
    convert: (t) =>
      t
        .toLowerCase()
        .split(/(\s+)/)
        .map((word, i, arr) => {
          if (!word.trim()) return word;
          const isEdge = i === 0 || i === arr.length - 1;
          if (!isEdge && minorWords.has(word)) return word;
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(""),
  },
  {
    label: "Sentence case",
    convert: (t) =>
      t
        .toLowerCase()
        .replace(/(^\s*[a-z])|([.!?…]\s+[a-z])|(\n\s*[a-z])/g, (m) =>
          m.toUpperCase(),
        ),
  },
  {
    label: "camelCase",
    convert: (t) =>
      t
        .toLowerCase()
        .replace(/[^a-z0-9]+(.)?/g, (_, c: string | undefined) =>
          c ? c.toUpperCase() : "",
        ),
  },
  {
    label: "PascalCase",
    convert: (t) => {
      const camel = t
        .toLowerCase()
        .replace(/[^a-z0-9]+(.)?/g, (_, c: string | undefined) =>
          c ? c.toUpperCase() : "",
        );
      return camel.charAt(0).toUpperCase() + camel.slice(1);
    },
  },
  {
    label: "snake_case",
    convert: (t) =>
      t
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .replace(/\s+/g, "_"),
  },
  {
    label: "kebab-case",
    convert: (t) =>
      t
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .replace(/\s+/g, "-"),
  },
  {
    label: "aLtErNaTiNg",
    convert: (t) =>
      [...t]
        .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
        .join(""),
  },
  {
    label: "iNVERSE",
    convert: (t) =>
      [...t]
        .map((c) =>
          c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase(),
        )
        .join(""),
  },
];

function CaseConverterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function convert(fn: (t: string) => string) {
    setOutput(fn(input));
  }

  return (
    <ToolShell tool={tool}>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-card p-5 sm:p-6">
          <label htmlFor="case-input" className="eyebrow">
            Your text
          </label>
          <textarea
            id="case-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={9}
            placeholder="Paste or type the text you want to convert…"
            className="field mt-3 resize-y leading-relaxed"
          />
        </div>

        <div className="rounded-xl border border-line bg-card p-5 sm:p-6">
          <label htmlFor="case-output" className="eyebrow">
            Result
          </label>
          <textarea
            id="case-output"
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            rows={9}
            placeholder="Converted text appears here…"
            className="field mt-3 resize-y leading-relaxed"
            readOnly={false}
          />
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-line bg-card p-5 sm:p-6">
        <p className="text-sm font-semibold">Convert to…</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {CASES.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={() => convert(c.convert)}
              disabled={!input}
              className="btn btn-quiet px-3.5 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-50"
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
          <CopyButton label="Copy result" value={() => output} />
          <button
            type="button"
            onClick={() => {
              setInput("");
              setOutput("");
            }}
            className="btn btn-quiet"
            disabled={!input && !output}
          >
            Clear both
          </button>
        </div>
      </div>
    </ToolShell>
  );
}
