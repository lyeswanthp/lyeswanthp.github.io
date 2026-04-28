import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import ProfileChatbot from './components/ProfileChatbot';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Research = lazy(() => import('./components/sections/Research'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Loading component
function SectionLoader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-[#B8860B]/30 border-t-[#B8860B] rounded-full animate-spin" />
        <p className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: 'var(--text-secondary)' }}>
          Loading...
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
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <ProfileChatbot />
    </div>
  );
}

export default App;
