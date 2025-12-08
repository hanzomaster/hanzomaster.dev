// TODO: Replace with your own logo/mark SVG
// For now, using a simple "TT" text SVG
export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 50"
      {...props}
    >
      <text
        x="50"
        y="35"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        TT
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  // TODO: Replace with your own mark SVG
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50"><text x="50" y="35" text-anchor="middle" font-family="monospace" font-size="24" font-weight="bold" fill="${color}">TT</text></svg>`;
}
