import { n as SITE_NAME } from "./site-9aohJaqX.js";
import { n as TOOLS, t as CATEGORIES } from "./tools-BWdn-AY6.js";
import { t as AdSlot } from "./AdSlot-BTwUhMuU.js";
import { t as SearchTools } from "./SearchTools-DxIOYQyX.js";
import { n as ToolGrid } from "./ToolCard-ST5un89r.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/tools.index.tsx?tsr-split=component
function AllToolsPage() {
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState("All");
	const visible = useMemo(() => {
		const q = query.trim().toLowerCase();
		return TOOLS.filter((t) => filter === "All" || t.category === filter).filter((t) => !q || `${t.name} ${t.tagline} ${t.description} ${t.category}`.toLowerCase().includes(q));
	}, [query, filter]);
	const filters = ["All", ...CATEGORIES.map((c) => c.id)];
	return /* @__PURE__ */ jsxs("div", {
		className: "container-page py-10 sm:py-14",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "rise max-w-2xl",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "The collection"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 text-4xl font-bold sm:text-5xl",
						children: "All tools"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-3 text-base leading-relaxed text-muted-foreground",
						children: [
							"Every utility ",
							SITE_NAME,
							" offers, in one place. Search, filter, and open what you need — each tool runs entirely in your browser."
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rise mt-8 max-w-xl",
				style: { animationDelay: "100ms" },
				children: [/* @__PURE__ */ jsx(SearchTools, {
					value: query,
					onValueChange: setQuery,
					placeholder: "Filter tools by name or use…"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-4 flex flex-wrap gap-2",
					role: "group",
					"aria-label": "Filter by category",
					children: filters.map((f) => /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setFilter(f),
						"aria-pressed": filter === f,
						className: `btn px-4 py-2 text-xs ${filter === f ? "btn-primary" : "btn-quiet"}`,
						children: f
					}, f))
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "rise mt-10",
				style: { animationDelay: "180ms" },
				children: /* @__PURE__ */ jsx(ToolGrid, { tools: visible })
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-12",
				children: /* @__PURE__ */ jsx(AdSlot, {})
			})
		]
	});
}
//#endregion
export { AllToolsPage as component };
