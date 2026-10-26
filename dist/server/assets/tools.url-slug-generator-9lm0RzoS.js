import { r as getTool } from "./tools-BWdn-AY6.js";
import { t as ToolShell } from "./ToolShell-dYOWsDIv.js";
import { t as CopyButton } from "./CopyButton-BreOLWaJ.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/tools.url-slug-generator.tsx?tsr-split=component
var tool = getTool("/tools/url-slug-generator");
function makeSlug(input, separator, lowercase, maxLength) {
	let slug = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	if (lowercase) slug = slug.toLowerCase();
	slug = slug.replace(/[''`]/g, "").replace(/&/g, " and ").replace(/[^a-zA-Z0-9]+/g, " ").trim().replace(/\s+/g, separator);
	if (maxLength > 0 && slug.length > maxLength) {
		const cut = slug.slice(0, maxLength);
		const lastBreak = Math.max(cut.lastIndexOf(separator), cut.lastIndexOf(" "));
		slug = (lastBreak > maxLength * .5 ? cut.slice(0, lastBreak) : cut).replace(new RegExp(`\\${separator}+$`), "");
	}
	return slug;
}
function SlugGeneratorPage() {
	const [title, setTitle] = useState("");
	const [separator, setSeparator] = useState("-");
	const [lowercase, setLowercase] = useState(true);
	const [maxLength, setMaxLength] = useState(60);
	const slug = useMemo(() => makeSlug(title, separator, lowercase, maxLength), [
		title,
		separator,
		lowercase,
		maxLength
	]);
	return /* @__PURE__ */ jsxs(ToolShell, {
		tool,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "rounded-xl border border-line bg-card p-5 sm:p-7",
			children: [
				/* @__PURE__ */ jsx("label", {
					htmlFor: "slug-input",
					className: "eyebrow",
					children: "Page title or headline"
				}),
				/* @__PURE__ */ jsx("input", {
					id: "slug-input",
					type: "text",
					value: title,
					onChange: (e) => setTitle(e.target.value),
					placeholder: "e.g. The Complete Guide to Container Gardening",
					className: "field mt-3"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-5 grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
							htmlFor: "slug-sep",
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Separator"
						}), /* @__PURE__ */ jsxs("select", {
							id: "slug-sep",
							value: separator,
							onChange: (e) => setSeparator(e.target.value),
							className: "field mt-1.5",
							children: [/* @__PURE__ */ jsx("option", {
								value: "-",
								children: "Hyphen ( - )"
							}), /* @__PURE__ */ jsx("option", {
								value: "_",
								children: "Underscore ( _ )"
							})]
						})] }),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
							htmlFor: "slug-max",
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: ["Max length: ", maxLength]
						}), /* @__PURE__ */ jsx("input", {
							id: "slug-max",
							type: "range",
							min: 20,
							max: 100,
							step: 5,
							value: maxLength,
							onChange: (e) => setMaxLength(Number(e.target.value)),
							className: "mt-3 w-full accent-[var(--color-gold)]"
						})] }),
						/* @__PURE__ */ jsx("div", {
							className: "flex items-end",
							children: /* @__PURE__ */ jsxs("label", {
								className: "flex cursor-pointer items-center gap-2 text-sm font-semibold",
								children: [/* @__PURE__ */ jsx("input", {
									type: "checkbox",
									checked: lowercase,
									onChange: (e) => setLowercase(e.target.checked),
									className: "h-4 w-4 accent-[var(--color-gold)]"
								}), "Force lowercase"]
							})
						})
					]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-5 rounded-xl border border-line bg-card p-5 sm:p-7",
			children: [
				/* @__PURE__ */ jsx("label", {
					htmlFor: "slug-output",
					className: "eyebrow",
					children: "Slug"
				}),
				/* @__PURE__ */ jsx("input", {
					id: "slug-output",
					type: "text",
					value: slug,
					readOnly: true,
					"aria-label": "Generated slug",
					placeholder: "your-slug-appears-here",
					className: "field mt-3 font-mono text-base"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: ["URL preview: ", /* @__PURE__ */ jsxs("span", {
						className: "font-mono",
						children: ["yoursite.com/", slug || "your-slug"]
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ jsx(CopyButton, {
						label: "Copy slug",
						value: () => slug
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => setTitle(""),
						className: "btn btn-quiet",
						disabled: !title,
						children: "Clear"
					})]
				})
			]
		})]
	});
}
//#endregion
export { SlugGeneratorPage as component };
