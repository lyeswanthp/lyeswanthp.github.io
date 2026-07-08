import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled ? 'backdrop-blur-md border-b' : 'border-b border-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        borderBottomColor: scrolled ? 'var(--line)' : 'transparent',
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="font-serif-display text-lg font-medium"
          style={{ color: 'var(--text)' }}
        >
          Lovely Yeswanth
        </a>
        <ul className="flex items-center gap-5 sm:gap-7 text-sm">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="transition-colors hover:underline underline-offset-4"
                style={{ color: 'var(--text-soft)' }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
