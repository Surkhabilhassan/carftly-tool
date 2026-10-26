import { t as GUIDES } from "./guides-B4te5SIG.js";
import { t as AdSlot } from "./AdSlot-BTwUhMuU.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/guides.index.tsx?tsr-split=component
function GuidesPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "container-page py-10 sm:py-14",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "rise max-w-2xl",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Learn"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 text-4xl font-bold sm:text-5xl",
						children: "Guides"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-base leading-relaxed text-muted-foreground",
						children: "Short, practical reads that pair with our tools — how to write titles people click, how long a post should be, and what makes a URL slug work."
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: GUIDES.map((guide, i) => /* @__PURE__ */ jsxs(Link, {
					to: guide.slug,
					className: "card-lift rise block p-6",
					style: { animationDelay: `${i * 70}ms` },
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "eyebrow",
							children: [guide.readingMinutes, " min read"]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-2 text-xl font-semibold leading-snug",
							children: guide.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: guide.description
						}),
						/* @__PURE__ */ jsxs("span", {
							className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep",
							children: ["Read guide ", /* @__PURE__ */ jsx("span", {
								"aria-hidden": "true",
								children: "→"
							})]
						})
					]
				}, guide.slug))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-12",
				children: /* @__PURE__ */ jsx(AdSlot, {})
			})
		]
	});
}
//#endregion
export { GuidesPage as component };
