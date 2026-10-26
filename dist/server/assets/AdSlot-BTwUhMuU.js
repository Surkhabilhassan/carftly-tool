import { jsx } from "react/jsx-runtime";
//#region src/components/AdSlot.tsx
/**
* Reserved space for display advertising (e.g. Google AdSense).
* To go live: replace the inner markup with your AdSense <ins> unit and add
* the AdSense loader script in src/routes/__root.tsx. The reserved height
* keeps the layout stable while ads load.
*/
function AdSlot({ label = "Advertisement" }) {
	return /* @__PURE__ */ jsx("aside", {
		className: "ad-slot",
		"aria-label": label,
		children: /* @__PURE__ */ jsx("span", { children: label })
	});
}
//#endregion
export { AdSlot as t };
