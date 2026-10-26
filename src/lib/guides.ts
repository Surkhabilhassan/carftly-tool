export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  readingMinutes: number;
  updated: string;
  toolLink?: { href: string; label: string };
  sections: GuideSection[];
}

export const GUIDES: Guide[] = [
  {
    slug: "/guides/how-to-write-meta-titles",
    title: "How to Write Meta Titles That Get Clicked",
    description:
      "A short, practical method for writing page titles that fit in search results and earn the click.",
    readingMinutes: 4,
    updated: "October 2026",
    toolLink: { href: "/tools/meta-tag-preview", label: "Meta Tag Preview" },
    sections: [
      {
        heading: "Why the title matters most",
        paragraphs: [
          "The meta title is the headline search engines show for your page. It is the single strongest on-page signal for what the page is about, and it is the first thing a searcher reads. A vague title loses the click to a clearer one, even when the pages are equal in quality.",
        ],
      },
      {
        heading: "The shape of a good title",
        paragraphs: [
          "Put the main keyword near the front, say plainly what the reader gets, and end with a brand or qualifier only if there is room. Aim for roughly 50–60 characters; search results typically cut off beyond that, and the cut lands mid-word more often than not.",
        ],
        list: [
          "Lead with the keyword: \"Word Counter — Count Words and Characters\".",
          "Promise the outcome, not the feature: \"Free\" or \"Online\" beats \"Best-in-class platform\".",
          "Avoid stacking keywords; one clear phrase beats three vague ones.",
          "Never repeat the same title on two pages — duplicates compete with each other.",
        ],
      },
      {
        heading: "Test before you publish",
        paragraphs: [
          "Write two or three candidates, paste them into a preview, and read them the way a stranger would — skimming a list of blue links. The one that survives that skim is usually the right one. Check the preview on both a search result and a social card, because they truncate differently.",
        ],
      },
    ],
  },
  {
    slug: "/guides/ideal-blog-post-length",
    title: "How Long Should a Blog Post Be?",
    description:
      "Word counts by article type, and why length alone never decides rank.",
    readingMinutes: 5,
    updated: "October 2026",
    toolLink: { href: "/tools/word-counter", label: "Word Counter" },
    sections: [
      {
        heading: "Length follows the job",
        paragraphs: [
          "There is no universal ideal word count. A news update earns trust by being short; a tutorial earns it by being complete. The right question is not \"how long?\" but \"what does the reader need, and what can I cut?\".",
        ],
      },
      {
        heading: "Practical ranges",
        paragraphs: [
          "These ranges fit what most readers expect from each format. Treat them as starting points, not rules.",
        ],
        list: [
          "News or announcement: 300–600 words.",
          "Standard blog post: 800–1,200 words.",
          "In-depth guide or tutorial: 1,500–2,500 words.",
          "Product or landing page: 300–800 words, led by what it does.",
        ],
      },
      {
        heading: "Reading time is the honest metric",
        paragraphs: [
          "Readers budget attention in minutes, not words. At an average reading pace of about 200 words per minute, a 1,000-word post asks for five minutes. If the value on offer does not justify that budget, trim. If a section stops earning its place, cut it — a tighter post that answers the question beats a longer one that wanders.",
        ],
      },
      {
        heading: "Count as you write",
        paragraphs: [
          "Checking length mid-draft keeps scope honest. A live word count and reading-time estimate turn \"it feels long\" into a number you can act on.",
        ],
      },
    ],
  },
  {
    slug: "/guides/seo-friendly-url-slugs",
    title: "Writing SEO-Friendly URL Slugs",
    description:
      "What to keep, what to strip, and how long a slug should be.",
    readingMinutes: 4,
    updated: "October 2026",
    toolLink: { href: "/tools/url-slug-generator", label: "URL Slug Generator" },
    sections: [
      {
        heading: "A slug is a promise",
        paragraphs: [
          "The slug is the human-readable tail of your URL. Search engines read it for topic hints, and people read it in shared links and browser history. A good slug tells both what the page is before they click.",
        ],
      },
      {
        heading: "Keep it short, lowercase and literal",
        paragraphs: [
          "Use lowercase letters and hyphens between words. Drop filler words — articles and prepositions — unless removing them changes the meaning. Three to five meaningful words is usually the sweet spot; slugs past roughly 60 characters risk truncation in search results and get mangled when shared.",
        ],
        list: [
          "Good: /guides/seo-friendly-url-slugs",
          "Too long: /guides/the-ultimate-complete-guide-to-writing-seo-friendly-url-slugs-for-beginners",
          "Unclear: /p?id=8842 or /post-2026-10-04-final-v2",
        ],
      },
      {
        heading: "Strip what URLs cannot carry",
        paragraphs: [
          "Spaces become %20, ampersands break query strings, and accented characters may display inconsistently across systems. Replace punctuation with hyphens and transliterate accents (é → e) so the slug reads the same everywhere. Never change a slug of a page that already ranks without leaving a redirect from the old address.",
        ],
      },
      {
        heading: "Make one before you publish",
        paragraphs: [
          "Slugs are cheapest to get right before a page exists. Generate the slug from the working title, read it aloud, and if it sounds like a sentence run over, cut it down.",
        ],
      },
    ],
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
