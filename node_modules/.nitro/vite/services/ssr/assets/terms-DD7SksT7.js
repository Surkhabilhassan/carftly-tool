import { n as SITE_NAME } from "./site-9aohJaqX.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/terms.tsx?tsr-split=component
function TermsPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "container-narrow py-10 sm:py-14",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "rise",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Legal"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-2 text-4xl font-bold sm:text-5xl",
					children: "Terms of Use"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Last updated: October 2026"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "rule-gold mt-6",
					"aria-hidden": "true"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "rise mt-8 space-y-8 leading-relaxed text-foreground/90",
			children: [
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "Using the site"
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-3",
					children: [SITE_NAME, " provides free browser-based utilities. You may use them for personal or commercial work without restriction. You agree not to abuse the service — for example by attempting to disrupt it, scrape it at scale, or use it in violation of any applicable law."]
				})] }),
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "Your content"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-3",
					children: "Everything you type into the tools stays on your device. You keep full ownership of any text, slugs, meta tags or QR codes you create. We claim no rights over your content because we never receive it."
				})] }),
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "No warranty"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-3",
					children: "The tools are provided “as is”, without warranty of any kind, express or implied — including accuracy, fitness for a particular purpose and availability. Word counts, character limits and previews are best-effort estimates; always verify anything critical before relying on it."
				})] }),
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "Limitation of liability"
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-3",
					children: [
						"To the fullest extent permitted by law, ",
						SITE_NAME,
						" is not liable for any loss or damage arising from your use of, or inability to use, the site or its tools."
					]
				})] }),
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "Changes"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-3",
					children: "Tools, features and these terms may change over time. Continued use of the site after changes are posted means you accept the revised terms."
				})] }),
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "Contact"
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-3",
					children: [
						"Questions about these terms? Reach us through the",
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "/contact",
							className: "link-gold",
							children: "contact page"
						}),
						"."
					]
				})] })
			]
		})]
	});
}
//#endregion
export { TermsPage as component };
