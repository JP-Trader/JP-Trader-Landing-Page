export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="jp-logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2563eb" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#jp-logo-gradient)" />
      <g transform="translate(1.5 0)" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* J + P ligature sharing one stem */}
        <path d="M30 23V44a8 8 0 0 1-16 0v-1M30 23h9a8 8 0 0 1 0 16h-9" stroke="#fff" strokeWidth="6" />
        {/* Candle wick rising from the stem */}
        <path d="M30 23V10M24.5 15.5 30 10l5.5 5.5" stroke="#bfdbfe" strokeWidth="4.5" />
      </g>
    </svg>
  );
}

export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="JP Trader home">
      <LogoMark />
      <span className="logo__text">
        JP <small>Trader</small>
      </span>
    </a>
  );
}
