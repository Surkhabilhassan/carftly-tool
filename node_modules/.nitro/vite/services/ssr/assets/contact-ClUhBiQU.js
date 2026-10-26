import { n as SITE_NAME } from "./site-9aohJaqX.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [opened, setOpened] = useState(false);
	function handleSubmit(e) {
		e.preventDefault();
		const to = "mailto:";
		const fullSubject = subject.trim() ? `[${SITE_NAME}] ${subject.trim()}` : `[${SITE_NAME}] Message from ${name.trim() || "a visitor"}`;
		const body = [
			message.trim(),
			"",
			"—",
			name.trim() ? `From: ${name.trim()}` : "",
			email.trim() ? `Reply-to: ${email.trim()}` : ""
		].filter(Boolean).join("\n");
		window.location.href = `${to}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`;
		setOpened(true);
	}
	return /* @__PURE__ */ jsxs("div", {
		className: "container-narrow py-10 sm:py-14",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "rise",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Contact"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-2 text-4xl font-bold sm:text-5xl",
					children: "Say hello"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 max-w-xl text-base leading-relaxed text-muted-foreground",
					children: "Found a bug, spotted something that doesn't work, or have an idea for a tool? Fill in the form — pressing send opens your own email app with the message ready. Nothing is stored on this site."
				})
			]
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: handleSubmit,
			className: "rise mt-8 max-w-xl rounded-xl border border-line bg-card p-5 sm:p-7",
			style: { animationDelay: "100ms" },
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						htmlFor: "ct-name",
						className: "text-sm font-semibold",
						children: "Name"
					}), /* @__PURE__ */ jsx("input", {
						id: "ct-name",
						type: "text",
						required: true,
						value: name,
						onChange: (e) => setName(e.target.value),
						className: "field mt-1.5",
						placeholder: "Your name"
					})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
						htmlFor: "ct-email",
						className: "text-sm font-semibold",
						children: "Email"
					}), /* @__PURE__ */ jsx("input", {
						id: "ct-email",
						type: "email",
						required: true,
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "field mt-1.5",
						placeholder: "you@example.com"
					})] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ jsx("label", {
						htmlFor: "ct-subject",
						className: "text-sm font-semibold",
						children: "Subject"
					}), /* @__PURE__ */ jsx("input", {
						id: "ct-subject",
						type: "text",
						value: subject,
						onChange: (e) => setSubject(e.target.value),
						className: "field mt-1.5",
						placeholder: "Bug report, tool idea, feedback…"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ jsx("label", {
						htmlFor: "ct-message",
						className: "text-sm font-semibold",
						children: "Message"
					}), /* @__PURE__ */ jsx("textarea", {
						id: "ct-message",
						required: true,
						rows: 5,
						value: message,
						onChange: (e) => setMessage(e.target.value),
						className: "field mt-1.5 resize-y",
						placeholder: "Tell us what's on your mind…"
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					type: "submit",
					className: "btn btn-gold mt-5",
					children: "Send message"
				}),
				opened && /* @__PURE__ */ jsx("p", {
					className: "mt-4 rounded-md bg-secondary px-4 py-3 text-sm text-muted-foreground",
					children: "Your email app should have opened with the message ready. If it didn't, copy your text and email us manually from your mail client."
				})
			]
		})]
	});
}
//#endregion
export { ContactPage as component };
