import { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? 'bg-[#0d0b09]/85 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
        <a
          href="#home"
          className="text-sm tracking-[0.2em] uppercase text-[#B8860B]/90 hover:text-[#B8860B] transition-colors"
        >
          Lovely Yeswanth
        </a>
        <ul className="flex flex-wrap items-center gap-5 sm:gap-6 text-[11px] sm:text-xs tracking-[0.12em] uppercase">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-white/45 hover:text-[#B8860B] transition-colors"
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
