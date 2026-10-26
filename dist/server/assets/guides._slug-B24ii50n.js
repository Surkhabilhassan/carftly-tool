import { t as Route } from "./guides._slug-BuIX6Xej.js";
import { t as AdSlot } from "./AdSlot-BTwUhMuU.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/guides.$slug.tsx?tsr-split=component
function GuidePage() {
	const { guide } = Route.useLoaderData();
	return /* @__PURE__ */ jsxs("div", {
		className: "container-narrow py-10 sm:py-14",
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
						to: "/guides",
						className: "link-gold",
						children: "Guides"
					}),
					/* @__PURE__ */ jsx("span", {
						"aria-hidden": "true",
						children: " / "
					}),
					/* @__PURE__ */ jsx("span", { children: guide.title })
				]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "rise mt-6",
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "eyebrow",
						children: [
							guide.readingMinutes,
							" min read · Updated ",
							guide.updated
						]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-3 text-4xl font-bold leading-tight sm:text-5xl",
						children: guide.title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-base leading-relaxed text-muted-foreground",
						children: guide.description
					}),
					/* @__PURE__ */ jsx("div", {
						className: "rule-gold mt-6",
						"aria-hidden": "true"
					})
				]
			}),
			/* @__PURE__ */ jsx("article", {
				className: "rise mt-8",
				style: { animationDelay: "120ms" },
				children: guide.sections.map((section) => /* @__PURE__ */ jsxs("section", {
					className: "mb-10",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-2xl font-semibold",
							children: section.heading
						}),
						section.paragraphs.map((p) => /* @__PURE__ */ jsx("p", {
							className: "mt-4 leading-relaxed text-foreground/90",
							children: p
						}, p.slice(0, 40))),
						section.list && /* @__PURE__ */ jsx("ul", {
							className: "mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/90",
							children: section.list.map((item) => /* @__PURE__ */ jsx("li", { children: item }, item))
						})
					]
				}, section.heading))
			}),
			guide.toolLink && /* @__PURE__ */ jsxs("div", {
				className: "rise rounded-xl border border-line bg-card p-6",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Try it yourself"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: "Put this guide into practice right away."
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: guide.toolLink.href,
						className: "btn btn-gold mt-4",
						children: ["Open ", guide.toolLink.label]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-10",
				children: /* @__PURE__ */ jsx(AdSlot, {})
			})
		]
	});
}
//#endregion
export { GuidePage as component };
