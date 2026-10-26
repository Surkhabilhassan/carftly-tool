import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ToolShell } from "@/components/ToolShell";
import { getTool } from "@/lib/tools";
import { SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/tools/qr-code-generator")({
  head: () => ({
    meta: [
      {
        title: `QR Code Generator — Free PNG QR Codes for Links | ${SITE_NAME}`,
      },
      {
        name: "description",
        content:
          "Generate a QR code from any URL or text and download it as a PNG. Sizes up to 1024px, created entirely in your browser — nothing is uploaded.",
      },
      {
        property: "og:title",
        content: `QR Code Generator — Free, Private, Instant | ${SITE_NAME}`,
      },
      {
        property: "og:description",
        content:
          "Turn any link or text into a downloadable QR code PNG, right in your browser.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/tools/qr-code-generator" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/tools/qr-code-generator" }],
  }),
  component: QrCodeGeneratorPage,
});

const tool = getTool("/tools/qr-code-generator")!;

const SIZES = [256, 512, 1024] as const;

function QrCodeGeneratorPage() {
  const [text, setText] = useState("");
  const [size, setSize] = useState<number>(512);
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
        const QRCode = await import("qrcode");
        const url = await QRCode.toDataURL(value, {
          width: size,
          margin: 2,
          errorCorrectionLevel: "M",
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

  return (
    <ToolShell tool={tool}>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-card p-5 sm:p-7">
          <label htmlFor="qr-input" className="eyebrow">
            Link or text
          </label>
          <textarea
            id="qr-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder="https://yoursite.com/your-page"
            className="field mt-3 resize-y"
          />

          <fieldset className="mt-5">
            <legend className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Size
            </legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  className={`btn px-4 py-2 text-xs ${size === s ? "btn-primary" : "btn-quiet"}`}
                >
                  {s}px
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="rounded-xl border border-line bg-card p-5 sm:p-7">
          <p className="eyebrow">Your QR code</p>
          <div className="mt-4 flex min-h-[256px] items-center justify-center rounded-lg border border-line bg-background p-6">
            {dataUrl ? (
              <img
                src={dataUrl}
                alt={`QR code for: ${text.slice(0, 60)}`}
                width={256}
                height={256}
                className="h-auto max-h-64 w-auto max-w-full"
              />
            ) : (
              <p className="text-center text-sm text-muted-foreground">
                {error || "The QR code appears here as you type."}
              </p>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={download}
              className="btn btn-gold"
              disabled={!dataUrl}
            >
              Download PNG
            </button>
            <button
              type="button"
              onClick={() => setText("")}
              className="btn btn-quiet"
              disabled={!text}
            >
              Clear
            </button>
          </div>
          {text.trim() && (
            <p className="mt-3 text-xs text-muted-foreground">
              {size}×{size}px PNG · generated in your browser, nothing uploaded.
            </p>
          )}
        </div>
      </div>
    </ToolShell>
  );
}
