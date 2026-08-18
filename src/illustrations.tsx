// Decorative line-art illustrations, ported 1:1 from the original design.
// All strokes use currentColor so they inherit `text-brand` / `text-[var(--warm)]` from their wrapper.

export function IllustrationAchievements({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <path d="M70 40h60v34a30 30 0 0 1 -60 0z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" opacity="0.9" />
      <path d="M70 48h-16a14 14 0 0 0 14 22" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <path d="M130 48h16a14 14 0 0 1 -14 22" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <path d="M100 104v20" stroke="currentColor" strokeWidth="1.6" opacity="0.85" />
      <path d="M78 156l22-14 22 14-6-26 20-16h-26l-10-24-10 24h-26l20 16z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.8" />
      <circle cx="100" cy="58" r="10" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
    </svg>
  );
}

export function IllustrationFlourish({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 28" fill="none" className={className}>
      <path
        d="M2 18c14 0 14 -14 28 -14s14 14 28 14 14 -14 28 -14 14 14 28 14 14 -14 28 -14 14 14 28 14 14 -14 28 -14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="2" cy="18" r="2.4" fill="currentColor" />
      <circle cx="218" cy="4" r="2.4" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function IllustrationAbout({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <rect x="70" y="52" width="60" height="26" rx="6" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
      <rect x="55" y="94" width="90" height="26" rx="6" stroke="currentColor" strokeWidth="1.6" opacity="0.75" />
      <rect x="38" y="136" width="124" height="26" rx="6" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
      <path d="M100 78v16M100 120v16" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 3" opacity="0.6" />
      <circle cx="100" cy="65" r="3" fill="currentColor" />
      <circle cx="100" cy="107" r="2.4" fill="currentColor" opacity="0.8" />
      <circle cx="100" cy="149" r="2.4" fill="currentColor" opacity="0.6" />
      <path d="M130 60l24-18" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <circle cx="158" cy="38" r="10" stroke="currentColor" strokeWidth="1.6" opacity="0.8" />
      <path d="M158 32v4M158 40v4M152 38h4M160 38h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
      <path d="M46 100l-20-14" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
      <circle cx="20" cy="82" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function IllustrationSkills({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <rect x="86" y="86" width="28" height="28" rx="5" stroke="currentColor" strokeWidth="1.7" opacity="0.95" />
      <rect x="34" y="40" width="24" height="24" rx="5" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <rect x="142" y="40" width="24" height="24" rx="5" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <rect x="34" y="136" width="24" height="24" rx="5" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <rect x="142" y="136" width="24" height="24" rx="5" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <path d="M86 92L58 60M114 92l28-32M86 108l-28 32M114 108l28 32" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <circle cx="100" cy="100" r="3" fill="currentColor" />
      <circle cx="46" cy="52" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="154" cy="52" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="46" cy="148" r="2" fill="currentColor" opacity="0.7" />
      <circle cx="154" cy="148" r="2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export function IllustrationExperience({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <rect x="46" y="30" width="80" height="104" rx="6" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
      <path d="M62 54h48M62 70h48M62 86h32" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
      <line x1="40" y1="112" x2="132" y2="112" stroke="currentColor" strokeWidth="1.4" opacity="0.8" />
      <circle cx="150" cy="118" r="18" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
      <path d="M150 106v6M150 124v6M138 118h6M156 118h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M126 100l16 10" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="60" cy="150" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="140" cy="160" r="2.4" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function IllustrationProjects({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <path d="M100 40l60 30-60 30-60-30z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.9" />
      <path d="M40 100l60 30 60-30" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.65" />
      <path d="M40 130l60 30 60-30" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.4" />
    </svg>
  );
}

export function IllustrationEducation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <path d="M30 78L100 46l70 32-70 32z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.9" />
      <path d="M62 92v28c0 8 17 16 38 16s38-8 38-16V92" stroke="currentColor" strokeWidth="1.6" opacity="0.8" />
      <path d="M170 78v34" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
      <circle cx="170" cy="118" r="3" fill="currentColor" opacity="0.8" />
      <path d="M100 46v-8" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 3" opacity="0.4" />
    </svg>
  );
}

export function IllustrationCerts({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <circle cx="100" cy="86" r="38" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
      <path d="M84 84l10 10 22-22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M80 118l-10 32 22-10 8 18 12-40" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.75" />
      <path d="M120 118l10 32-22-10-8 18-12-40" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.75" />
    </svg>
  );
}

export function IllustrationBuild({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <path d="M100 40a60 60 0 1 1 -42.4 17.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeDasharray="4 5" opacity="0.85" />
      <path d="M50 50l7.6 7.6L65 46" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="90" y="30" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
      <rect x="150" y="90" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" opacity="0.75" />
      <rect x="90" y="150" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
      <rect x="30" y="90" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
      <circle cx="100" cy="100" r="16" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <circle cx="100" cy="100" r="3" fill="currentColor" />
    </svg>
  );
}

export function IllustrationOrbitCompact({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className}>
      <circle cx="60" cy="60" r="4" fill="currentColor" />
      <circle cx="60" cy="60" r="18" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <circle cx="60" cy="60" r="34" stroke="currentColor" strokeWidth="1.3" opacity="0.45" strokeDasharray="3 4" />
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="1.1" opacity="0.25" />
      <circle cx="94" cy="60" r="2.6" fill="currentColor" opacity="0.85" />
      <circle cx="60" cy="26" r="2.2" fill="currentColor" opacity="0.6" />
      <circle cx="26" cy="80" r="2.2" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function BackgroundIllustration({ className }: { className?: string }) {
  const nodes: [number, number, number][] = [
    [80, 120, 3], [340, 60, 2.4], [620, 160, 3], [880, 90, 2.4],
    [140, 420, 2.4], [420, 380, 3], [700, 460, 2.4], [960, 340, 3],
    [60, 720, 3], [320, 680, 2.4], [600, 760, 3], [900, 700, 2.4],
    [180, 980, 2.4], [460, 1020, 3], [740, 960, 2.4], [1000, 1040, 3],
  ];
  return (
    <svg
      viewBox="0 0 1080 1200"
      preserveAspectRatio="xMidYMin slice"
      className={className}
      fill="none"
    >
      <circle cx="140" cy="140" r="90" stroke="var(--brand)" strokeWidth="1" opacity="0.5" />
      <circle cx="140" cy="140" r="150" stroke="var(--brand)" strokeWidth="1" strokeDasharray="2 8" opacity="0.3" />
      <circle cx="920" cy="260" r="70" stroke="var(--warm)" strokeWidth="1" opacity="0.4" />
      <circle cx="920" cy="260" r="120" stroke="var(--warm)" strokeWidth="1" strokeDasharray="2 8" opacity="0.25" />
      <circle cx="240" cy="820" r="110" stroke="var(--warm)" strokeWidth="1" opacity="0.35" />
      <circle cx="820" cy="920" r="80" stroke="var(--brand)" strokeWidth="1" opacity="0.4" />
      <circle cx="820" cy="920" r="140" stroke="var(--brand)" strokeWidth="1" strokeDasharray="2 8" opacity="0.22" />

      <path d="M60 300 L340 60" stroke="var(--border-hover)" strokeWidth="1" opacity="0.5" />
      <path d="M620 160 L880 90" stroke="var(--border-hover)" strokeWidth="1" opacity="0.5" />
      <path d="M140 420 L420 380" stroke="var(--border-hover)" strokeWidth="1" opacity="0.5" />
      <path d="M700 460 L960 340" stroke="var(--border-hover)" strokeWidth="1" opacity="0.5" />
      <path d="M60 720 L320 680" stroke="var(--border-hover)" strokeWidth="1" opacity="0.5" />
      <path d="M600 760 L900 700" stroke="var(--border-hover)" strokeWidth="1" opacity="0.5" />
      <path d="M180 980 L460 1020" stroke="var(--border-hover)" strokeWidth="1" opacity="0.5" />
      <path d="M740 960 L1000 1040" stroke="var(--border-hover)" strokeWidth="1" opacity="0.5" />

      {nodes.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={i % 3 === 0 ? "var(--warm)" : "var(--brand)"} opacity="0.7" />
      ))}

      <rect x="500" y="520" width="26" height="26" rx="6" stroke="var(--brand)" strokeWidth="1" opacity="0.4" transform="rotate(12 513 533)" />
      <rect x="760" y="600" width="20" height="20" rx="5" stroke="var(--warm)" strokeWidth="1" opacity="0.4" transform="rotate(-10 770 610)" />
      <rect x="260" y="560" width="18" height="18" rx="4" stroke="var(--brand)" strokeWidth="1" opacity="0.35" transform="rotate(20 269 569)" />
    </svg>
  );
}

export function IllustrationPlane({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 200" fill="none" className={className}>
      <ellipse cx="170" cy="175" rx="120" ry="8" fill="var(--warm)" opacity="0.08" />
      <g stroke="var(--warm)" strokeWidth="1.4" fill="none" opacity="0.9">
        <path d="M40 100 L300 100" strokeOpacity="0.35" />
        <path d="M100 60 L240 60 L260 90 L220 100 L120 100 L80 90 Z" />
        <path d="M150 60 L130 20 L150 30 L165 60 Z" />
        <path d="M195 60 L210 20 L195 30 L182 60 Z" />
        <path d="M220 92 L270 70 L272 78 L226 98 Z" />
        <path d="M220 100 L270 122 L272 114 L226 100 Z" />
        <circle cx="235" cy="95" r="6" />
      </g>
    </svg>
  );
}
