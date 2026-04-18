import { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#skills', label: 'Skills' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-lg shadow-black/15' : ''
      }`}
      style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
        <a
          href="#home"
          className="text-sm tracking-[0.2em] uppercase text-[#B8860B]/90 hover:text-[#B8860B] transition-colors"
        >
          Lovely Yeswanth
        </a>
        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          <ul className="flex flex-wrap items-center gap-5 sm:gap-6 text-[11px] sm:text-xs tracking-[0.12em] uppercase">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-[#B8860B] transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {label}
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
