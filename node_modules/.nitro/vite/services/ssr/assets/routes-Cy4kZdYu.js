import { n as SITE_NAME } from "./site-9aohJaqX.js";
import { n as TOOLS, t as CATEGORIES } from "./tools-BWdn-AY6.js";
import { t as AdSlot } from "./AdSlot-BTwUhMuU.js";
import { t as SearchTools } from "./SearchTools-DxIOYQyX.js";
import { t as ToolCard } from "./ToolCard-ST5un89r.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	const popular = TOOLS.filter((t) => t.popular);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "bg-ink text-paper",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page py-20 sm:py-28",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "rise max-w-3xl",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "eyebrow text-gold-soft",
								children: "Free · No sign-up · Runs in your browser"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "mt-4 text-5xl font-bold leading-[1.08] sm:text-6xl",
								children: [
									"Small tools,",
									/* @__PURE__ */ jsx("br", {}),
									"crafted for ",
									/* @__PURE__ */ jsx("span", {
										className: "text-gold-soft",
										children: "good writing"
									}),
									"."
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "rule-gold mt-6",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg",
								children: [SITE_NAME, " is a small collection of everyday utilities for writers, editors and marketers — counting words, fixing case, cleaning up URLs and previewing meta tags. Nothing leaves your browser."]
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "rise mt-10 max-w-xl",
						style: { animationDelay: "150ms" },
						children: /* @__PURE__ */ jsx(SearchTools, {})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rise mt-8 flex flex-wrap gap-3",
						style: { animationDelay: "240ms" },
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/tools",
							className: "btn btn-gold",
							children: "Browse all tools"
						}), /* @__PURE__ */ jsx(Link, {
							to: "/guides",
							className: "btn btn-outline text-paper",
							children: "Read the guides"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-page py-16 sm:py-20",
			"aria-labelledby": "popular",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rise max-w-2xl",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Most used"
				}), /* @__PURE__ */ jsx("h2", {
					id: "popular",
					className: "mt-2 text-3xl font-bold sm:text-4xl",
					children: "Popular tools"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: popular.map((tool, i) => /* @__PURE__ */ jsx(ToolCard, {
					tool,
					index: i
				}, tool.slug))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-y border-line bg-card",
			"aria-labelledby": "categories",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page py-16 sm:py-20",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rise max-w-2xl",
					children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Browse by need"
					}), /* @__PURE__ */ jsx("h2", {
						id: "categories",
						className: "mt-2 text-3xl font-bold sm:text-4xl",
						children: "Categories"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2",
					children: CATEGORIES.map((cat, i) => {
						const count = TOOLS.filter((t) => t.category === cat.id).length;
						return /* @__PURE__ */ jsxs(Link, {
							to: "/tools",
							className: "card-lift rise block p-8",
							style: { animationDelay: `${i * 80}ms` },
							children: [
								/* @__PURE__ */ jsxs("p", {
									className: "eyebrow",
									children: [
										count,
										" tool",
										count === 1 ? "" : "s"
									]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-2 text-2xl font-semibold",
									children: cat.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: cat.blurb
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep",
									children: ["View category ", /* @__PURE__ */ jsx("span", {
										"aria-hidden": "true",
										children: "→"
									})]
								})
							]
						}, cat.id);
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-page py-16 sm:py-20",
			"aria-labelledby": "guides-teaser",
			children: /* @__PURE__ */ jsxs("div", {
				className: "rise flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Learn"
						}),
						/* @__PURE__ */ jsx("h2", {
							id: "guides-teaser",
							className: "mt-2 text-3xl font-bold sm:text-4xl",
							children: "Straight-talking guides"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: "Short, practical reads on titles, word counts and URL slugs — no filler, no fluff."
						})
					]
				}), /* @__PURE__ */ jsx(Link, {
					to: "/guides",
					className: "btn btn-quiet",
					children: "All guides"
				})]
			})
		}),
		/* @__PURE__ */ jsx("div", {
			className: "container-page pb-4",
			children: /* @__PURE__ */ jsx(AdSlot, {})
		})
	] });
}
//#endregion
export { Index as component };
