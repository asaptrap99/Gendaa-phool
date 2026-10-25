// Flat SVG illustrations. Decorative, so hidden from screen readers.
type P = { className?: string };

export function MarigoldFlower({ className }: P) {
  const petals = Array.from({ length: 12 });
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {petals.map((_, i) => (
        <ellipse key={i} cx="50" cy="24" rx="11" ry="20" fill={i % 2 ? "#F59E0B" : "#E8710A"} transform={`rotate(${i * 30} 50 50)`} />
      ))}
      {petals.map((_, i) => (
        <ellipse key={`in${i}`} cx="50" cy="33" rx="8" ry="13" fill="#FFC857" transform={`rotate(${i * 30 + 15} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="9" fill="#E8710A" />
    </svg>
  );
}

export function Petal({ className }: P) {
  return (
    <svg viewBox="0 0 20 30" className={className} aria-hidden="true">
      <path d="M10 0C16 8 20 16 17 24 15 29 5 29 3 24 0 16 4 8 10 0Z" fill="currentColor" />
    </svg>
  );
}

export function Leaf({ className }: P) {
  return (
    <svg viewBox="0 0 40 20" className={className} aria-hidden="true">
      <path d="M0 10C10 0 30 0 40 10 30 20 10 20 0 10Z" fill="#2F5D3A" />
      <path d="M2 10H38" stroke="#CFE3C8" strokeWidth="1" />
    </svg>
  );
}

export function GiftIllustration({ className, accent = "#F59E0B" }: P & { accent?: string }) {
  return (
    <svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <rect width="200" height="160" fill="#FDEBC8" />
      <rect x="55" y="62" width="90" height="70" rx="6" fill={accent} />
      <rect x="48" y="48" width="104" height="20" rx="5" fill="#E8710A" />
      <rect x="94" y="48" width="12" height="84" fill="#2F5D3A" />
      <path d="M100 48C86 26 66 34 76 46 82 52 100 48 100 48ZM100 48C114 26 134 34 124 46 118 52 100 48 100 48Z" fill="#2F5D3A" />
      <circle cx="40" cy="30" r="8" fill="#FFC857" />
      <circle cx="165" cy="120" r="6" fill="#FFC857" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.42 1.32-1.96 1.37-.5.05-1.13.07-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.37-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.51-.14.14-.29.3-.13.59.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.42.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.38-.24.65-.14.27.1 1.69.8 1.98.94.29.14.48.22.55.34.07.12.07.69-.17 1.37Z" />
    </svg>
  );
}
