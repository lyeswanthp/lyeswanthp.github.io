import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Research = lazy(() => import('./components/sections/Research'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Loading component
function SectionLoader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 border-2 rounded-full animate-spin"
          style={{ borderColor: 'var(--accent-cyan-soft)', borderTopColor: 'var(--accent-cyan)' }}
        />
        <p className="font-mono-tech text-[11px] tracking-[0.22em] uppercase" style={{ color: 'var(--text-secondary)' }}>
          Loading…
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="relative">
      <Navigation />

      <main id="home">
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Research />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
