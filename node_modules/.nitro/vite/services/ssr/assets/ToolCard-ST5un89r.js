import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ToolCard.tsx
function ToolCard({ tool, index = 0 }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: tool.slug,
		className: "card-lift rise block p-6",
		style: { animationDelay: `${index * 70}ms` },
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "eyebrow",
				children: tool.category
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "mt-2 text-xl font-semibold",
				children: tool.name
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: tool.tagline
			}),
			/* @__PURE__ */ jsxs("span", {
				className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep",
				children: ["Open tool", /* @__PURE__ */ jsx("span", {
					"aria-hidden": "true",
					children: "→"
				})]
			})
		]
	});
}
function ToolGrid({ tools }) {
	if (tools.length === 0) return /* @__PURE__ */ jsx("p", {
		className: "py-10 text-center text-sm text-muted-foreground",
		children: "No tools match your search yet."
	});
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
		children: tools.map((tool, i) => /* @__PURE__ */ jsx(ToolCard, {
			tool,
			index: i
		}, tool.slug))
	});
}
//#endregion
export { ToolGrid as n, ToolCard as t };
