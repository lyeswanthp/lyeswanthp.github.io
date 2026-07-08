import { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;

function readStoredTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark';
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia?.('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(readStoredTheme);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled ? 'backdrop-blur-xl shadow-lg shadow-black/30 border-b' : 'border-b border-transparent'
      }`}
      style={{
        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
        backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
        borderBottomColor: scrolled ? 'var(--border-primary)' : 'transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
        <a
          href="#home"
          className="flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase transition-colors"
          style={{ color: 'var(--accent-cyan)' }}
        >
          <span className="status-dot" />
          <span>lyp<span className="text-white/40">@emory</span></span>
        </a>
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          <ul className="flex flex-wrap items-center gap-4 sm:gap-5 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase">
            {links.map(({ href, label }, i) => (
              <li key={href}>
                <a
                  href={href}
                  className="group relative inline-flex items-center gap-1.5 transition-colors hover:text-white"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <span style={{ color: 'var(--accent-cyan)', opacity: 0.4 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{label}</span>
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ background: 'var(--accent-cyan)' }}
                  />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
