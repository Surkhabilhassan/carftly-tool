/**
 * Reserved space for display advertising (e.g. Google AdSense).
 * To go live: replace the inner markup with your AdSense <ins> unit and add
 * the AdSense loader script in src/routes/__root.tsx. The reserved height
 * keeps the layout stable while ads load.
 */
export function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <aside className="ad-slot" aria-label={label}>
      <span>{label}</span>
    </aside>
  );
}
