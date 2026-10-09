export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="JP Trader home">
      <svg className="logo__mark" viewBox="13 21 74 58" aria-hidden="true" focusable="false">
        <g transform="translate(-1.5 0)">
          <rect x="22" y="22" width="10" height="10" fill="#3b82f6" />
          <path d="M35 22H48V62A16 16 0 0 1 16 62V51L29 55V62A3 3 0 0 0 35 62Z" fill="#3b82f6" />
          <path fillRule="evenodd" d="M50 22H70A17 17 0 0 1 70 56H63V78H50ZM63 35H70A4 4 0 0 1 70 43H63Z" fill="#fff" />
        </g>
      </svg>
      <span className="logo__text">Trader</span>
    </a>
  );
}
