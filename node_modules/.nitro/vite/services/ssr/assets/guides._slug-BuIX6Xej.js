import { n as SITE_NAME } from "./site-9aohJaqX.js";
import { n as getGuide } from "./guides-B4te5SIG.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/guides.$slug.tsx
var $$splitComponentImporter = () => import("./guides._slug-B24ii50n.js");
var Route = createFileRoute("/guides/$slug")({
	loader: ({ params }) => {
		const guide = getGuide(`/guides/${params.slug}`);
		if (!guide) throw notFound();
		return { guide };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: `Guide unavailable | ${SITE_NAME}` }, {
			name: "robots",
			content: "noindex"
		}] };
		const { guide } = loaderData;
		return {
			meta: [
				{ title: `${guide.title} | ${SITE_NAME}` },
				{
					name: "description",
					content: guide.description
				},
				{
					property: "og:title",
					content: guide.title
				},
				{
					property: "og:description",
					content: guide.description
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: guide.slug
				},
				{
					name: "twitter:card",
					content: "summary"
				}
			],
			links: [{
				rel: "canonical",
				href: guide.slug
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Article",
					headline: guide.title,
					description: guide.description,
					author: {
						"@type": "Organization",
						name: SITE_NAME
					},
					dateModified: guide.updated
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
