import { r as getTool } from "./tools-BWdn-AY6.js";
import { t as ToolShell } from "./ToolShell-dYOWsDIv.js";
import { t as CopyButton } from "./CopyButton-BreOLWaJ.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/tools.meta-tag-preview.tsx?tsr-split=component
var tool = getTool("/tools/meta-tag-preview");
var TITLE_LIMIT = 60;
var DESC_LIMIT = 160;
function Counter({ length, limit }) {
	const over = length > limit;
	const near = !over && length > limit * .9;
	return /* @__PURE__ */ jsxs("span", {
		className: `text-xs font-semibold tabular-nums ${over ? "text-destructive" : near ? "text-gold-deep" : "text-muted-foreground"}`,
		children: [
			length,
			"/",
			limit,
			over ? " — too long" : ""
		]
	});
}
function MetaTagPreviewPage() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [url, setUrl] = useState("");
	const [siteName, setSiteName] = useState("");
	const displayUrl = useMemo(() => {
		const clean = url.trim();
		if (!clean) return "yoursite.com › your-page";
		const parts = clean.replace(/^https?:\/\//, "").replace(/\/+$/, "").split("/");
		return [parts[0], ...parts.slice(1).map((p) => ` › ${p}`)].join("");
	}, [url]);
	const displayTitle = title.trim() || "Your page title appears here";
	const displayDesc = description.trim() || "Your meta description appears here. Write one or two sentences that summarize the page.";
	return /* @__PURE__ */ jsxs(ToolShell, {
		tool,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-line bg-card p-5 sm:p-7",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Page details"
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-4 grid gap-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "mt-title",
								className: "text-sm font-semibold",
								children: "Meta title"
							}), /* @__PURE__ */ jsx(Counter, {
								length: title.length,
								limit: TITLE_LIMIT
							})]
						}), /* @__PURE__ */ jsx("input", {
							id: "mt-title",
							type: "text",
							value: title,
							onChange: (e) => setTitle(e.target.value),
							placeholder: "e.g. Word Counter — Free Word & Character Count",
							className: "field mt-1.5"
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "mt-desc",
								className: "text-sm font-semibold",
								children: "Meta description"
							}), /* @__PURE__ */ jsx(Counter, {
								length: description.length,
								limit: DESC_LIMIT
							})]
						}), /* @__PURE__ */ jsx("textarea", {
							id: "mt-desc",
							value: description,
							onChange: (e) => setDescription(e.target.value),
							rows: 3,
							placeholder: "One or two sentences summarizing the page…",
							className: "field mt-1.5 resize-y"
						})] }),
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "mt-url",
								className: "text-sm font-semibold",
								children: "Page URL"
							}), /* @__PURE__ */ jsx("input", {
								id: "mt-url",
								type: "text",
								value: url,
								onChange: (e) => setUrl(e.target.value),
								placeholder: "https://yoursite.com/your-page",
								className: "field mt-1.5"
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
								htmlFor: "mt-site",
								className: "text-sm font-semibold",
								children: ["Site name ", /* @__PURE__ */ jsx("span", {
									className: "font-normal text-muted-foreground",
									children: "(optional)"
								})]
							}), /* @__PURE__ */ jsx("input", {
								id: "mt-site",
								type: "text",
								value: siteName,
								onChange: (e) => setSiteName(e.target.value),
								placeholder: "Your Site",
								className: "field mt-1.5"
							})] })]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-5 rounded-xl border border-line bg-card p-5 sm:p-7",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Search result preview"
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-4 rounded-lg border border-line bg-background p-4",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground",
							children: displayUrl
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-lg font-medium leading-snug text-serp-link sm:text-xl",
							children: displayTitle.length > TITLE_LIMIT ? `${displayTitle.slice(0, TITLE_LIMIT).trimEnd()}…` : displayTitle
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm leading-relaxed text-muted-foreground",
							children: displayDesc.length > DESC_LIMIT ? `${displayDesc.slice(0, DESC_LIMIT).trimEnd()}…` : displayDesc
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-5 rounded-xl border border-line bg-card p-5 sm:p-7",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Social share card preview"
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-4 max-w-md overflow-hidden rounded-lg border border-line bg-ink text-paper",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-32 items-center justify-center bg-ink-soft",
						children: /* @__PURE__ */ jsx("span", {
							className: "font-display text-2xl font-bold text-gold-soft",
							children: siteName.trim() || "Your Site"
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs uppercase tracking-wider text-paper/60",
								children: displayUrl.split(" › ")[0]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-base font-semibold leading-snug",
								children: displayTitle.length > 70 ? `${displayTitle.slice(0, 70).trimEnd()}…` : displayTitle
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm leading-relaxed text-paper/70",
								children: displayDesc.length > 110 ? `${displayDesc.slice(0, 110).trimEnd()}…` : displayDesc
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ jsx(CopyButton, {
						label: "Copy title",
						value: () => title,
						variant: "primary"
					}),
					/* @__PURE__ */ jsx(CopyButton, {
						label: "Copy description",
						value: () => description,
						variant: "primary"
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => {
							setTitle("");
							setDescription("");
							setUrl("");
							setSiteName("");
						},
						className: "btn btn-quiet",
						disabled: !title && !description && !url && !siteName,
						children: "Clear all"
					})
				]
			})
		]
	});
}
//#endregion
export { MetaTagPreviewPage as component };
