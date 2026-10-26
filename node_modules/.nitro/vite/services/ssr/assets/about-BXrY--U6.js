import { n as SITE_NAME } from "./site-9aohJaqX.js";
import { n as TOOLS } from "./tools-BWdn-AY6.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "container-narrow py-10 sm:py-14",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "rise",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "About"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 text-4xl font-bold sm:text-5xl",
						children: "Small tools, made carefully"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "rule-gold mt-6",
						"aria-hidden": "true"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "rise mt-8 space-y-6 leading-relaxed text-foreground/90",
				children: [
					/* @__PURE__ */ jsxs("p", { children: [SITE_NAME, " started with a simple observation: the everyday utilities writers and marketers reach for — a word count, a case change, a clean URL slug — shouldn't require an account, a subscription, or a page cluttered with ads and pop-ups."] }),
					/* @__PURE__ */ jsx("p", { children: "Every tool here runs entirely in your browser. Your text, your links and your drafts are never sent to a server, stored, or seen by anyone but you. That also makes the tools fast: there is nothing to upload and nothing to wait for." }),
					/* @__PURE__ */ jsx("p", { children: "The collection is deliberately small. Each tool does one job well, and each is paired with a short guide that explains the craft behind it — not just which button to press." })
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "rise mt-10",
				"aria-labelledby": "principles",
				children: [/* @__PURE__ */ jsx("h2", {
					id: "principles",
					className: "text-2xl font-semibold",
					children: "What we commit to"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/90",
					children: [
						/* @__PURE__ */ jsx("li", { children: "Free to use, with no sign-up walls." }),
						/* @__PURE__ */ jsx("li", { children: "Everything computes locally in your browser." }),
						/* @__PURE__ */ jsx("li", { children: "No fake claims, no invented statistics, no dark patterns." }),
						/* @__PURE__ */ jsx("li", { children: "Tools stay fast and lightweight on any connection." })
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "rise mt-10",
				"aria-labelledby": "about-tools",
				children: [/* @__PURE__ */ jsx("h2", {
					id: "about-tools",
					className: "text-2xl font-semibold",
					children: "The collection"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: TOOLS.map((t) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx(Link, {
						to: t.slug,
						className: "link-gold font-semibold",
						children: t.name
					}), /* @__PURE__ */ jsxs("span", {
						className: "text-muted-foreground",
						children: [" — ", t.tagline]
					})] }, t.slug))
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "rise mt-10",
				children: /* @__PURE__ */ jsx(Link, {
					to: "/contact",
					className: "btn btn-primary",
					children: "Get in touch"
				})
			})
		]
	});
}
//#endregion
export { AboutPage as component };
