export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="JP Trader home">
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#1d4ed8" />
        <path d="M14 44l12-14 9 8 15-20" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>JP Trader</span>
    </a>
  );
}
