import { useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/CopyButton.tsx
function CopyButton({ value, label = "Copy", variant = "gold", className }) {
	const [copied, setCopied] = useState(false);
	async function copy() {
		const text = value();
		if (!text) return;
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			const el = document.createElement("textarea");
			el.value = text;
			document.body.appendChild(el);
			el.select();
			document.execCommand("copy");
			el.remove();
		}
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1600);
	}
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick: copy,
		className: `btn btn-${variant} ${className ?? ""}`,
		children: copied ? "Copied ✓" : label
	});
}
//#endregion
export { CopyButton as t };
