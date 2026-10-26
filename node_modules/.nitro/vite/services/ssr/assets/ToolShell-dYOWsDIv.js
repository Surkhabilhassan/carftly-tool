import { i as relatedTools } from "./tools-BWdn-AY6.js";
import { t as AdSlot } from "./AdSlot-BTwUhMuU.js";
import { t as ToolCard } from "./ToolCard-ST5un89r.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/ToolShell.tsx
/**
* Shared layout for individual tool pages: breadcrumb, heading, the tool
* itself, real "how to use" steps, reserved ad space, and related tools.
*/
function ToolShell({ tool, children }) {
	const related = relatedTools(tool.slug);
	return /* @__PURE__ */ jsxs("div", {
		className: "container-page py-10 sm:py-14",
		children: [
			/* @__PURE__ */ jsxs("nav", {
				"aria-label": "Breadcrumb",
				className: "text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "link-gold",
						children: "Home"
					}),
					/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						children: " / "
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/tools",
						className: "link-gold",
						children: "Tools"
					}),
					/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						children: " / "
					}),
					/* @__PURE__ */ jsx("span", { children: tool.name })
				]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "rise mt-6 max-w-2xl",
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "eyebrow",
						children: [tool.category, " tool"]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 text-4xl font-bold sm:text-5xl",
						children: tool.name
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-base leading-relaxed text-muted-foreground",
						children: tool.description
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "rise mt-8",
				style: { animationDelay: "120ms" },
				children
			}),
			/* @__PURE__ */ jsxs("section", {
				"aria-labelledby": "how-to",
				className: "mt-12 max-w-2xl",
				children: [/* @__PURE__ */ jsx("h2", {
					id: "how-to",
					className: "text-2xl font-semibold",
					children: "How to use it"
				}), /* @__PURE__ */ jsx("ol", {
					className: "mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground",
					children: tool.howTo.map((step) => /* @__PURE__ */ jsx("li", { children: step }, step))
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-10",
				children: /* @__PURE__ */ jsx(AdSlot, {})
			}),
			/* @__PURE__ */ jsxs("section", {
				"aria-labelledby": "related",
				className: "mt-14",
				children: [/* @__PURE__ */ jsx("h2", {
					id: "related",
					className: "text-2xl font-semibold",
					children: "Related tools"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((t, i) => /* @__PURE__ */ jsx(ToolCard, {
						tool: t,
						index: i
					}, t.slug))
				})]
			})
		]
	});
}
//#endregion
export { ToolShell as t };
