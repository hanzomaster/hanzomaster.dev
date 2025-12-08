// TODO: Replace with your own wordmark SVG
// For now, using a text-based wordmark SVG
export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 50"
      {...props}
    >
      <text
        x="100"
        y="35"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="20"
        fontWeight="bold"
        fill="currentColor"
      >
        Thinh Tran
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  // TODO: Replace with your own wordmark SVG
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50"><text x="100" y="35" text-anchor="middle" font-family="monospace" font-size="20" font-weight="bold" fill="${color}">Thinh Tran</text></svg>`;
}
