import { r as getTool } from "./tools-BWdn-AY6.js";
import { t as ToolShell } from "./ToolShell-dYOWsDIv.js";
import { t as CopyButton } from "./CopyButton-BreOLWaJ.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/tools.word-counter.tsx?tsr-split=component
var tool = getTool("/tools/word-counter");
function countStats(text) {
	const trimmed = text.trim();
	const words = trimmed ? trimmed.split(/\s+/).length : 0;
	return {
		words,
		chars: text.length,
		charsNoSpaces: text.replace(/\s/g, "").length,
		sentences: trimmed ? trimmed.split(/[.!?…]+(?:\s|$)/).filter((s) => s.trim()).length : 0,
		paragraphs: text.split(/\n\s*\n/).filter((p) => p.trim()).length,
		seconds: Math.round(words / 200 * 60)
	};
}
var STOP_WORDS = /* @__PURE__ */ new Set([
	"the",
	"and",
	"for",
	"that",
	"with",
	"this",
	"your",
	"from",
	"have",
	"will",
	"they",
	"been",
	"were",
	"when",
	"what",
	"which",
	"their",
	"there",
	"would",
	"about",
	"into",
	"than",
	"then",
	"them",
	"these",
	"those",
	"upon",
	"over",
	"also",
	"just",
	"very",
	"much",
	"more",
	"some",
	"such",
	"only",
	"like"
]);
function topKeywords(text) {
	const counts = /* @__PURE__ */ new Map();
	const words = text.toLowerCase().match(/[a-z0-9'’-]+/g) ?? [];
	for (const w of words) {
		if (w.length < 4 || STOP_WORDS.has(w)) continue;
		counts.set(w, (counts.get(w) ?? 0) + 1);
	}
	return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
}
function readingTime(seconds) {
	if (seconds === 0) return "—";
	if (seconds < 60) return `${seconds} sec`;
	return `${Math.round(seconds / 60)} min`;
}
function WordCounterPage() {
	const [text, setText] = useState("");
	const stats = useMemo(() => countStats(text), [text]);
	const keywords = useMemo(() => topKeywords(text), [text]);
	const statItems = [
		{
			label: "Words",
			value: stats.words
		},
		{
			label: "Characters",
			value: stats.chars
		},
		{
			label: "No spaces",
			value: stats.charsNoSpaces
		},
		{
			label: "Sentences",
			value: stats.sentences
		},
		{
			label: "Paragraphs",
			value: stats.paragraphs
		},
		{
			label: "Reading time",
			value: readingTime(stats.seconds)
		}
	];
	return /* @__PURE__ */ jsxs(ToolShell, {
		tool,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-line bg-card p-5 sm:p-7",
				children: [
					/* @__PURE__ */ jsx("label", {
						htmlFor: "wc-input",
						className: "eyebrow",
						children: "Your text"
					}),
					/* @__PURE__ */ jsx("textarea", {
						id: "wc-input",
						value: text,
						onChange: (e) => setText(e.target.value),
						rows: 10,
						placeholder: "Paste or type your text here — the counts update as you type.",
						className: "field mt-3 resize-y font-sans leading-relaxed"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ jsx(CopyButton, {
							label: "Copy text",
							value: () => text,
							variant: "quiet"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setText(""),
							className: "btn btn-quiet",
							disabled: !text,
							children: "Clear"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
				children: statItems.map((s) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-line bg-card p-4 text-center",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-display text-2xl font-bold tabular-nums",
						children: s.value
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground",
						children: s.label
					})]
				}, s.label))
			}),
			keywords.length > 0 && /* @__PURE__ */ jsxs("div", {
				className: "mt-6 rounded-xl border border-line bg-card p-5 sm:p-7",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-xl font-semibold",
					children: "Top keywords"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 grid gap-2 sm:grid-cols-2",
					children: keywords.map(([word, count], i) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-center justify-between rounded-md bg-secondary px-4 py-2 text-sm",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "font-semibold",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "mr-2 text-muted-foreground",
								children: [i + 1, "."]
							}), word]
						}), /* @__PURE__ */ jsxs("span", {
							className: "tabular-nums text-muted-foreground",
							children: [count, "×"]
						})]
					}, word))
				})]
			})
		]
	});
}
//#endregion
export { WordCounterPage as component };
