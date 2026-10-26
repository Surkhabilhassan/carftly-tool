import { r as getTool } from "./tools-BWdn-AY6.js";
import { t as ToolShell } from "./ToolShell-dYOWsDIv.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/tools.qr-code-generator.tsx?tsr-split=component
var tool = getTool("/tools/qr-code-generator");
var SIZES = [
	256,
	512,
	1024
];
function QrCodeGeneratorPage() {
	const [text, setText] = useState("");
	const [size, setSize] = useState(512);
	const [dataUrl, setDataUrl] = useState("");
	const [error, setError] = useState("");
	useEffect(() => {
		let cancelled = false;
		const value = text.trim();
		if (!value) {
			setDataUrl("");
			setError("");
			return;
		}
		(async () => {
			try {
				const url = await (await import("qrcode")).toDataURL(value, {
					width: size,
					margin: 2,
					errorCorrectionLevel: "M"
				});
				if (!cancelled) {
					setDataUrl(url);
					setError("");
				}
			} catch {
				if (!cancelled) {
					setDataUrl("");
					setError("This content is too long for a QR code. Try shortening it.");
				}
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [text, size]);
	function download() {
		if (!dataUrl) return;
		const a = document.createElement("a");
		a.href = dataUrl;
		a.download = "qr-code.png";
		a.click();
	}
	return /* @__PURE__ */ jsx(ToolShell, {
		tool,
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-5 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-line bg-card p-5 sm:p-7",
				children: [
					/* @__PURE__ */ jsx("label", {
						htmlFor: "qr-input",
						className: "eyebrow",
						children: "Link or text"
					}),
					/* @__PURE__ */ jsx("textarea", {
						id: "qr-input",
						value: text,
						onChange: (e) => setText(e.target.value),
						rows: 4,
						placeholder: "https://yoursite.com/your-page",
						className: "field mt-3 resize-y"
					}),
					/* @__PURE__ */ jsxs("fieldset", {
						className: "mt-5",
						children: [/* @__PURE__ */ jsx("legend", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Size"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: SIZES.map((s) => /* @__PURE__ */ jsxs("button", {
								type: "button",
								onClick: () => setSize(s),
								"aria-pressed": size === s,
								className: `btn px-4 py-2 text-xs ${size === s ? "btn-primary" : "btn-quiet"}`,
								children: [s, "px"]
							}, s))
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl border border-line bg-card p-5 sm:p-7",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Your QR code"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-4 flex min-h-[256px] items-center justify-center rounded-lg border border-line bg-background p-6",
						children: dataUrl ? /* @__PURE__ */ jsx("img", {
							src: dataUrl,
							alt: `QR code for: ${text.slice(0, 60)}`,
							width: 256,
							height: 256,
							className: "h-auto max-h-64 w-auto max-w-full"
						}) : /* @__PURE__ */ jsx("p", {
							className: "text-center text-sm text-muted-foreground",
							children: error || "The QR code appears here as you type."
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: download,
							className: "btn btn-gold",
							disabled: !dataUrl,
							children: "Download PNG"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: () => setText(""),
							className: "btn btn-quiet",
							disabled: !text,
							children: "Clear"
						})]
					}),
					text.trim() && /* @__PURE__ */ jsxs("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: [
							size,
							"×",
							size,
							"px PNG · generated in your browser, nothing uploaded."
						]
					})
				]
			})]
		})
	});
}
//#endregion
export { QrCodeGeneratorPage as component };
