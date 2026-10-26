export const SITE_NAME = "Craftly Tools";
export const SITE_TAGLINE = "Free browser-based writing and SEO tools";

/**
 * Where the contact form sends mail. Leave empty to let visitors pick the
 * recipient in their own mail app; set an address to pre-fill it.
 */
export const CONTACT_EMAIL = "";

export const NAV_LINKS = [
  { label: "Tools", to: "/tools" },
  { label: "Guides", to: "/guides" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
