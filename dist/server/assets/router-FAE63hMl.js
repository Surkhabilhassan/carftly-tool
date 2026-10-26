import { n as SITE_NAME, r as SITE_TAGLINE, t as NAV_LINKS } from "./site-9aohJaqX.js";
import { n as TOOLS } from "./tools-BWdn-AY6.js";
import { t as Route$13 } from "./guides._slug-BuIX6Xej.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-elZ2_Box.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
//#endregion
//#region src/components/Header.tsx
function Header() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isActive = (to) => to === "/tools/" ? pathname.startsWith("/tools") : pathname.startsWith(to.replace(/\/$/, ""));
	return /* @__PURE__ */ jsx("header", {
		className: "border-b border-line bg-card",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-page flex h-16 items-center justify-between gap-4",
			children: [/* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "flex items-baseline gap-2",
				"aria-label": `${SITE_NAME} home`,
				children: /* @__PURE__ */ jsxs("span", {
					className: "font-display text-2xl font-bold tracking-tight",
					children: ["Craftly", /* @__PURE__ */ jsx("span", {
						className: "text-gold",
						children: " Tools"
					})]
				})
			}), /* @__PURE__ */ jsx("nav", {
				"aria-label": "Main",
				className: "flex items-center gap-1 sm:gap-2",
				children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx(Link, {
					to: link.to,
					className: `rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-gold-deep ${isActive(link.to) ? "text-gold-deep" : "text-foreground"}`,
					"aria-current": isActive(link.to) ? "page" : void 0,
					children: link.label
				}, link.to))
			})]
		})
	});
}
//#endregion
//#region src/components/Footer.tsx
var columns = [
	{
		heading: "Tools",
		links: TOOLS.map((t) => ({
			label: t.name,
			to: t.slug
		}))
	},
	{
		heading: "Resources",
		links: [
			{
				label: "All Tools",
				to: "/tools"
			},
			{
				label: "Guides",
				to: "/guides"
			},
			{
				label: "About",
				to: "/about"
			},
			{
				label: "Contact",
				to: "/contact"
			}
		]
	},
	{
		heading: "Legal",
		links: [{
			label: "Privacy Policy",
			to: "/privacy"
		}, {
			label: "Terms of Use",
			to: "/terms"
		}]
	}
];
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-20 bg-ink text-paper",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
				className: "font-display text-2xl font-bold",
				children: ["Craftly", /* @__PURE__ */ jsx("span", {
					className: "text-gold-soft",
					children: " Tools"
				})]
			}), /* @__PURE__ */ jsxs("p", {
				className: "mt-3 max-w-xs text-sm leading-relaxed text-paper/70",
				children: [SITE_TAGLINE, ". Everything runs in your browser — no accounts, no uploads."]
			})] }), columns.map((col) => /* @__PURE__ */ jsxs("nav", {
				"aria-label": col.heading,
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-gold-soft",
					children: col.heading
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 space-y-2.5",
					children: col.links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
						to: link.to,
						className: "text-sm text-paper/80 transition-colors hover:text-gold-soft",
						children: link.label
					}) }, link.to + link.label))
				})]
			}, col.heading))]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-paper/15",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-paper/60 sm:flex-row",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					SITE_NAME,
					". All rights reserved."
				] }), /* @__PURE__ */ jsx("p", { children: "Built to be fast, simple and free." })]
			})
		})]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "container-page flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-3 text-4xl font-bold",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "btn btn-primary",
						children: "Back to home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "container-page flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-3 text-3xl font-bold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "You can try again or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn btn-primary",
						children: "Try again"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "btn btn-outline",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${SITE_NAME} — ${SITE_TAGLINE}` },
			{
				name: "description",
				content: "Free browser-based tools for writers and marketers: word counter, text case converter, URL slug generator and meta tag preview. No sign-up, no uploads."
			},
			{
				name: "author",
				content: SITE_NAME
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Work+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ jsx(Header, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(Footer, {})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$11 = () => import("./routes-Cy4kZdYu.js");
var Route$11 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: `${SITE_NAME} — Free Word, Text & SEO Tools` },
			{
				name: "description",
				content: "Free browser-based writing and SEO tools: word counter, text case converter, URL slug generator and meta tag preview. Fast, private, no sign-up."
			},
			{
				property: "og:title",
				content: `${SITE_NAME} — Free Word, Text & SEO Tools`
			},
			{
				property: "og:description",
				content: "Word counter, case converter, slug generator and meta tag preview — all free and all in your browser."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$10 = () => import("./about-BXrY--U6.js");
var Route$10 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: `About ${SITE_NAME}` },
			{
				name: "description",
				content: "Craftly Tools is a small collection of free, browser-based utilities for writers, editors and marketers. No accounts, no uploads, no tracking."
			},
			{
				property: "og:title",
				content: `About ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "A small collection of free, private, browser-based writing and SEO tools."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$9 = () => import("./contact-ClUhBiQU.js");
var Route$9 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: `Contact | ${SITE_NAME}` },
			{
				name: "description",
				content: "Questions, bug reports or tool suggestions for Craftly Tools — send a message and it opens straight in your email app."
			},
			{
				property: "og:title",
				content: `Contact | ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Questions, bug reports or tool suggestions — get in touch."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/privacy.tsx
var $$splitComponentImporter$8 = () => import("./privacy-S_9jQKAG.js");
var Route$8 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: `Privacy Policy | ${SITE_NAME}` },
			{
				name: "description",
				content: "How Craftly Tools handles data: tools run in your browser, we store nothing, and this page explains the few exceptions in plain language."
			},
			{
				property: "og:title",
				content: `Privacy Policy | ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "What we collect (very little) and what we never do."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/privacy"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/terms.tsx
var $$splitComponentImporter$7 = () => import("./terms-DD7SksT7.js");
var Route$7 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: `Terms of Use | ${SITE_NAME}` },
			{
				name: "description",
				content: "The terms that apply to using Craftly Tools: the service is provided as-is, free of charge, and you keep ownership of everything you create with it."
			},
			{
				property: "og:title",
				content: `Terms of Use | ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Simple, fair terms for a free tool site."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/terms"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/guides.index.tsx
var $$splitComponentImporter$6 = () => import("./guides.index-CnH6KgcX.js");
var Route$6 = createFileRoute("/guides/")({
	head: () => ({
		meta: [
			{ title: `Guides — Practical Writing & SEO Advice | ${SITE_NAME}` },
			{
				name: "description",
				content: "Short, practical guides on meta titles, blog post length and SEO-friendly URL slugs. No filler — just what works."
			},
			{
				property: "og:title",
				content: `Guides | ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Short, practical guides on meta titles, word counts and URL slugs."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/guides"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/guides"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/tools.index.tsx
var $$splitComponentImporter$5 = () => import("./tools.index-CVAw-9YQ.js");
var Route$5 = createFileRoute("/tools/")({
	head: () => ({
		meta: [
			{ title: `All Tools — Free Word, Text & SEO Utilities | ${SITE_NAME}` },
			{
				name: "description",
				content: "Browse every Craftly Tools utility: word counter, text case converter, URL slug generator and meta tag preview. Free, private and browser-based."
			},
			{
				property: "og:title",
				content: `All Tools | ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Every Craftly Tools utility on one page — free, private and browser-based."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/tools"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/tools"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/tools.meta-tag-preview.tsx
var $$splitComponentImporter$4 = () => import("./tools.meta-tag-preview-NzAr1WZM.js");
var Route$4 = createFileRoute("/tools/meta-tag-preview")({
	head: () => ({
		meta: [
			{ title: `Meta Tag Preview — Test Titles & Descriptions | ${SITE_NAME}` },
			{
				name: "description",
				content: "Preview your page title and description as a search result and a social share card, with live character-limit warnings. Free and instant."
			},
			{
				property: "og:title",
				content: `Meta Tag Preview — Test Before You Publish | ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "See exactly how your meta title and description look in search results and social shares."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/tools/meta-tag-preview"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/tools/meta-tag-preview"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/tools.qr-code-generator.tsx
var $$splitComponentImporter$3 = () => import("./tools.qr-code-generator-Dw17vj6S.js");
var Route$3 = createFileRoute("/tools/qr-code-generator")({
	head: () => ({
		meta: [
			{ title: `QR Code Generator — Free PNG QR Codes for Links | ${SITE_NAME}` },
			{
				name: "description",
				content: "Generate a QR code from any URL or text and download it as a PNG. Sizes up to 1024px, created entirely in your browser — nothing is uploaded."
			},
			{
				property: "og:title",
				content: `QR Code Generator — Free, Private, Instant | ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Turn any link or text into a downloadable QR code PNG, right in your browser."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/tools/qr-code-generator"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/tools/qr-code-generator"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/tools.text-case-converter.tsx
var $$splitComponentImporter$2 = () => import("./tools.text-case-converter-CQCYgUq_.js");
var Route$2 = createFileRoute("/tools/text-case-converter")({
	head: () => ({
		meta: [
			{ title: `Text Case Converter — UPPERCASE, Title Case, camelCase | ${SITE_NAME}` },
			{
				name: "description",
				content: "Convert text between UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case and more. Free and instant."
			},
			{
				property: "og:title",
				content: `Text Case Converter — 10 Cases, One Click | ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Switch any text between ten common cases with one-click copy. Free and private."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/tools/text-case-converter"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/tools/text-case-converter"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/tools.url-slug-generator.tsx
var $$splitComponentImporter$1 = () => import("./tools.url-slug-generator-9lm0RzoS.js");
var Route$1 = createFileRoute("/tools/url-slug-generator")({
	head: () => ({
		meta: [
			{ title: `URL Slug Generator — Clean, SEO-Friendly Slugs | ${SITE_NAME}` },
			{
				name: "description",
				content: "Turn any title into a clean, lowercase, SEO-friendly URL slug. Handles accents and punctuation, with separator and length options. Free and instant."
			},
			{
				property: "og:title",
				content: `URL Slug Generator — SEO-Friendly Slugs | ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Convert titles into clean URL slugs with separator and length options. Free and private."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/tools/url-slug-generator"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/tools/url-slug-generator"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/tools.word-counter.tsx
var $$splitComponentImporter = () => import("./tools.word-counter-DQwDeh_h.js");
var Route = createFileRoute("/tools/word-counter")({
	head: () => ({
		meta: [
			{ title: `Word Counter — Free Word & Character Count Online | ${SITE_NAME}` },
			{
				name: "description",
				content: "Count words, characters, sentences, paragraphs and reading time as you type. Free online word counter with keyword frequency — nothing leaves your browser."
			},
			{
				property: "og:title",
				content: `Word Counter — Free Online Word & Character Count | ${SITE_NAME}`
			},
			{
				property: "og:description",
				content: "Live word, character and reading-time counts, plus keyword frequency. Free and private."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/tools/word-counter"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/tools/word-counter"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$9.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var PrivacyRoute = Route$8.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$12
});
var TermsRoute = Route$7.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$12
});
var GuidesIndexRoute = Route$6.update({
	id: "/guides/",
	path: "/guides/",
	getParentRoute: () => Route$12
});
var GuidesSlugRoute = Route$13.update({
	id: "/guides/$slug",
	path: "/guides/$slug",
	getParentRoute: () => Route$12
});
var ToolsIndexRoute = Route$5.update({
	id: "/tools/",
	path: "/tools/",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	PrivacyRoute,
	TermsRoute,
	GuidesSlugRoute,
	ToolsMetaTagPreviewRoute: Route$4.update({
		id: "/tools/meta-tag-preview",
		path: "/tools/meta-tag-preview",
		getParentRoute: () => Route$12
	}),
	ToolsQrCodeGeneratorRoute: Route$3.update({
		id: "/tools/qr-code-generator",
		path: "/tools/qr-code-generator",
		getParentRoute: () => Route$12
	}),
	ToolsTextCaseConverterRoute: Route$2.update({
		id: "/tools/text-case-converter",
		path: "/tools/text-case-converter",
		getParentRoute: () => Route$12
	}),
	ToolsUrlSlugGeneratorRoute: Route$1.update({
		id: "/tools/url-slug-generator",
		path: "/tools/url-slug-generator",
		getParentRoute: () => Route$12
	}),
	ToolsWordCounterRoute: Route.update({
		id: "/tools/word-counter",
		path: "/tools/word-counter",
		getParentRoute: () => Route$12
	}),
	GuidesIndexRoute,
	ToolsIndexRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
