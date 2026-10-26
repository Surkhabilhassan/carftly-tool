import { useState } from "react";

interface CopyButtonProps {
  value: () => string;
  label?: string;
  variant?: "gold" | "primary" | "quiet";
  className?: string;
}

export function CopyButton({
  value,
  label = "Copy",
  variant = "gold",
  className,
}: CopyButtonProps) {
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

  return (
    <button
      type="button"
      onClick={copy}
      className={`btn btn-${variant} ${className ?? ""}`}
    >
      {copied ? "Copied ✓" : label}
    </button>
  );
}
