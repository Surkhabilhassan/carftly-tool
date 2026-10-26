//#region src/lib/tools.ts
var CATEGORIES = [{
	id: "Text",
	name: "Text Tools",
	blurb: "Count, clean up, and re-shape any piece of writing."
}, {
	id: "SEO",
	name: "SEO Tools",
	blurb: "Craft slugs, QR codes and meta tags that work everywhere."
}];
var TOOLS = [
	{
		slug: "/tools/word-counter",
		name: "Word Counter",
		tagline: "Words, characters, reading time — counted as you type.",
		description: "Count words, characters (with and without spaces), sentences, paragraphs, and estimated reading time. See your most-used keywords at a glance.",
		category: "Text",
		popular: true,
		howTo: [
			"Paste or type your text into the box — every stat updates as you type.",
			"Check reading time to gauge how long your draft takes to read aloud or skim.",
			"Use the keyword list to spot words you may be overusing."
		]
	},
	{
		slug: "/tools/text-case-converter",
		name: "Text Case Converter",
		tagline: "Switch between UPPERCASE, Title Case, camelCase and more.",
		description: "Convert any text between ten common cases — uppercase, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case and more — with one-click copy.",
		category: "Text",
		popular: true,
		howTo: [
			"Paste your text, then press any case button to convert it instantly.",
			"Copy the result with one click, or press Convert again after editing.",
			"Use kebab-case or snake_case output when naming files, variables or URLs."
		]
	},
	{
		slug: "/tools/url-slug-generator",
		name: "URL Slug Generator",
		tagline: "Turn any headline into a clean, SEO-friendly slug.",
		description: "Convert titles into lowercase, URL-safe slugs. Handles accents and punctuation, lets you choose the separator, and trims to a safe length without cutting mid-word.",
		category: "SEO",
		popular: true,
		howTo: [
			"Type or paste a page title — the slug updates live.",
			"Pick a separator and a maximum length that suits your CMS.",
			"Copy the slug into your CMS before publishing."
		]
	},
	{
		slug: "/tools/meta-tag-preview",
		name: "Meta Tag Preview",
		tagline: "See your search result and social card before you publish.",
		description: "Preview how a page's title and description look in search results and when shared on social platforms, with live length warnings against recommended limits.",
		category: "SEO",
		popular: true,
		howTo: [
			"Enter a page title, description and URL — previews render instantly.",
			"Watch the length counters; keep titles near 60 and descriptions near 160 characters.",
			"Adjust until both previews read cleanly, then copy the values into your page."
		]
	},
	{
		slug: "/tools/qr-code-generator",
		name: "QR Code Generator",
		tagline: "Turn any link or text into a downloadable QR code.",
		description: "Generate a QR code from any URL or text, pick a size, and download it as a PNG. Codes are created in your browser — the content is never sent anywhere.",
		category: "SEO",
		popular: false,
		howTo: [
			"Paste a link or any text — the QR code renders as you type.",
			"Choose a size; larger sizes scan more reliably in print.",
			"Download the PNG and add it to posters, packaging or slides."
		]
	}
];
var getTool = (slug) => TOOLS.find((t) => t.slug === slug);
function relatedTools(slug, count = 3) {
	const current = getTool(slug);
	if (!current) return TOOLS.slice(0, count);
	const sameCategory = TOOLS.filter((t) => t.slug !== slug && t.category === current.category);
	const rest = TOOLS.filter((t) => t.slug !== slug && t.category !== current.category);
	return [...sameCategory, ...rest].slice(0, count);
}
//#endregion
export { relatedTools as i, TOOLS as n, getTool as r, CATEGORIES as t };
