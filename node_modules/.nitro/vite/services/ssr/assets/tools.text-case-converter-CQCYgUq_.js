import { r as getTool } from "./tools-BWdn-AY6.js";
import { t as ToolShell } from "./ToolShell-dYOWsDIv.js";
import { t as CopyButton } from "./CopyButton-BreOLWaJ.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/tools.text-case-converter.tsx?tsr-split=component
var tool = getTool("/tools/text-case-converter");
var minorWords = /* @__PURE__ */ new Set([
	"a",
	"an",
	"and",
	"as",
	"at",
	"but",
	"by",
	"for",
	"in",
	"nor",
	"of",
	"on",
	"or",
	"per",
	"the",
	"to",
	"vs",
	"via",
	"with"
]);
var CASES = [
	{
		label: "UPPERCASE",
		convert: (t) => t.toUpperCase()
	},
	{
		label: "lowercase",
		convert: (t) => t.toLowerCase()
	},
	{
		label: "Title Case",
		convert: (t) => t.toLowerCase().split(/(\s+)/).map((word, i, arr) => {
			if (!word.trim()) return word;
			if (!(i === 0 || i === arr.length - 1) && minorWords.has(word)) return word;
			return word.charAt(0).toUpperCase() + word.slice(1);
		}).join("")
	},
	{
		label: "Sentence case",
		convert: (t) => t.toLowerCase().replace(/(^\s*[a-z])|([.!?…]\s+[a-z])|(\n\s*[a-z])/g, (m) => m.toUpperCase())
	},
	{
		label: "camelCase",
		convert: (t) => t.toLowerCase().replace(/[^a-z0-9]+(.)?/g, (_, c) => c ? c.toUpperCase() : "")
	},
	{
		label: "PascalCase",
		convert: (t) => {
			const camel = t.toLowerCase().replace(/[^a-z0-9]+(.)?/g, (_, c) => c ? c.toUpperCase() : "");
			return camel.charAt(0).toUpperCase() + camel.slice(1);
		}
	},
	{
		label: "snake_case",
		convert: (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, "_")
	},
	{
		label: "kebab-case",
		convert: (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, "-")
	},
	{
		label: "aLtErNaTiNg",
		convert: (t) => [...t].map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join("")
	},
	{
		label: "iNVERSE",
		convert: (t) => [...t].map((c) => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("")
	}
];
function CaseConverterPage() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	function convert(fn) {
		setOutput(fn(input));
	}
	return /* @__PURE__ */ jsxs(ToolShell, {
		tool,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-5 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-line bg-card p-5 sm:p-6",
				children: [/* @__PURE__ */ jsx("label", {
					htmlFor: "case-input",
					className: "eyebrow",
					children: "Your text"
				}), /* @__PURE__ */ jsx("textarea", {
					id: "case-input",
					value: input,
					onChange: (e) => setInput(e.target.value),
					rows: 9,
					placeholder: "Paste or type the text you want to convert…",
					className: "field mt-3 resize-y leading-relaxed"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-line bg-card p-5 sm:p-6",
				children: [/* @__PURE__ */ jsx("label", {
					htmlFor: "case-output",
					className: "eyebrow",
					children: "Result"
				}), /* @__PURE__ */ jsx("textarea", {
					id: "case-output",
					value: output,
					onChange: (e) => setOutput(e.target.value),
					rows: 9,
					placeholder: "Converted text appears here…",
					className: "field mt-3 resize-y leading-relaxed",
					readOnly: false
				})]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-5 rounded-xl border border-line bg-card p-5 sm:p-6",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-sm font-semibold",
					children: "Convert to…"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: CASES.map((c) => /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => convert(c.convert),
						disabled: !input,
						className: "btn btn-quiet px-3.5 py-2 text-xs disabled:cursor-not-allowed disabled:opacity-50",
						children: c.label
					}, c.label))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex flex-wrap gap-2 border-t border-line pt-4",
					children: [/* @__PURE__ */ jsx(CopyButton, {
						label: "Copy result",
						value: () => output
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => {
							setInput("");
							setOutput("");
						},
						className: "btn btn-quiet",
						disabled: !input && !output,
						children: "Clear both"
					})]
				})
			]
		})]
	});
}
//#endregion
export { CaseConverterPage as component };
