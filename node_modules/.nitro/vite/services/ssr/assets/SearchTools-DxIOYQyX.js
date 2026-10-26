import { n as TOOLS } from "./tools-BWdn-AY6.js";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/SearchTools.tsx
/**
* Live search over the tool registry. Results link straight to tool pages.
* Works uncontrolled (own state) or controlled via value/onValueChange.
*/
function SearchTools({ value, onValueChange, placeholder = "Search tools — try “word count” or “slug”…", autoFocus = false }) {
	const [internal, setInternal] = useState("");
	const query = value ?? internal;
	const setQuery = (v) => {
		setInternal(v);
		onValueChange?.(v);
	};
	const results = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return [];
		return TOOLS.filter((tool) => `${tool.name} ${tool.tagline} ${tool.description} ${tool.category}`.toLowerCase().includes(q));
	}, [query]);
	const showResults = query.trim().length > 0 && !onValueChange;
	return /* @__PURE__ */ jsxs("div", {
		className: "w-full",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx("input", {
				type: "search",
				value: query,
				autoFocus,
				onChange: (e) => setQuery(e.target.value),
				placeholder,
				"aria-label": "Search tools",
				className: "field pl-10"
			}), /* @__PURE__ */ jsx("span", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",
				children: "⌕"
			})]
		}), showResults && /* @__PURE__ */ jsx("ul", {
			role: "listbox",
			"aria-label": "Search results",
			className: "mt-3 divide-y divide-line overflow-hidden rounded-md border border-line bg-card",
			children: results.length === 0 ? /* @__PURE__ */ jsxs("li", {
				className: "px-4 py-3 text-sm text-muted-foreground",
				children: [
					"Nothing matches “",
					query,
					"”. Try “counter”, “case” or “slug”."
				]
			}) : results.map((tool) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
				to: tool.slug,
				onClick: () => setQuery(""),
				className: "flex items-baseline justify-between gap-3 px-4 py-3 transition-colors hover:bg-secondary",
				children: [/* @__PURE__ */ jsxs("span", { children: [/* @__PURE__ */ jsx("span", {
					className: "block text-sm font-semibold",
					children: tool.name
				}), /* @__PURE__ */ jsx("span", {
					className: "block text-xs text-muted-foreground",
					children: tool.tagline
				})] }), /* @__PURE__ */ jsx("span", {
					className: "eyebrow shrink-0 text-[0.65rem]",
					children: tool.category
				})]
			}) }, tool.slug))
		})]
	});
}
//#endregion
export { SearchTools as t };
