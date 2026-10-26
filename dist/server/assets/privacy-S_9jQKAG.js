import { n as SITE_NAME } from "./site-9aohJaqX.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/privacy.tsx?tsr-split=component
function PrivacyPage() {
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
					children: "Privacy Policy"
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
					children: "The short version"
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-3",
					children: [
						"All tools on ",
						SITE_NAME,
						" run entirely in your browser. Text you type, links you convert and QR codes you generate are processed on your device and are never transmitted to us, stored by us, or seen by anyone but you."
					]
				})] }),
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "What we collect"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-3",
					children: "We do not ask for accounts, and we do not collect personal information through the tools themselves. This site is served by standard web hosting infrastructure, which may keep ordinary server logs (such as IP address, browser type and pages requested) for security and operational purposes. Those logs are controlled by the hosting provider, not used by us for profiling."
				})] }),
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "Cookies"
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-3",
					children: [SITE_NAME, " sets no cookies of its own and uses no analytics or tracking scripts. If display advertising is enabled in the future, the advertising partner (for example Google AdSense) may set its own cookies subject to its policies; that would be disclosed here before it happens."]
				})] }),
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "Contact form"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-3",
					children: "The contact form does not send or store anything on this site. It opens your own email application with the message prepared; the email you then send is between you and us, and it is used only to reply."
				})] }),
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "Children"
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-3",
					children: [SITE_NAME, " is a general-audience site and does not knowingly collect information from anyone, including children under 13."]
				})] }),
				/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
					className: "text-2xl font-semibold",
					children: "Changes"
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-3",
					children: [
						"If this policy changes, the revised version will be posted on this page with an updated date. Questions about privacy can be sent through the ",
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
export { PrivacyPage as component };
