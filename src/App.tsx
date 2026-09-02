import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import Reveal from './components/Reveal';
import './App.css';

// Lazy loaded components for performance
const TechMarquee = React.lazy(() => import('./components/TechMarquee'));
const About = React.lazy(() => import('./components/About'));
const WhatIBuild = React.lazy(() => import('./components/WhatIBuild'));
const Projects = React.lazy(() => import('./components/Projects'));
const Journey = React.lazy(() => import('./components/Journey'));
const Achievements = React.lazy(() => import('./components/Achievements'));
const TechStack = React.lazy(() => import('./components/TechStack'));
const CTA = React.lazy(() => import('./components/CTA'));
const Footer = React.lazy(() => import('./components/Footer'));
const Chatbot = React.lazy(() => import('./components/Chatbot'));
const TerminalWidget = React.lazy(() => import('./components/TerminalWidget'));

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app">
      <CustomCursor />
      <div className="mesh-bg"></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '100px' }}></div>}>
          <Reveal><TechMarquee /></Reveal>
          <Reveal><About /></Reveal>
          <Reveal><WhatIBuild /></Reveal>
          <Reveal><Projects /></Reveal>
          <Reveal><Journey /></Reveal>
          <Reveal><Achievements /></Reveal>
          <Reveal><TechStack /></Reveal>
          <Reveal><CTA /></Reveal>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <TerminalWidget />
        <Chatbot />
      </Suspense>
    </div>
  );
}

export default App;
