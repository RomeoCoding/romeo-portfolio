import React, { useState, useEffect, useRef, useContext } from 'react';
import { createPortal } from 'react-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import { TerminalIcon } from './components/Icons';
import { useKonamiCode } from './hooks/useKonamiCode';
import { GodModeProvider, GodModeContext } from './contexts/GodModeContext';
import { GOD_MODE_DATA } from './constants';
import GodModePanel from './components/GodModePanel';
import MatrixBackground from './components/MatrixBackground';

type SectionComponent = React.FC<{ isVisible?: boolean }>;

const SectionWrapper: React.FC<{ component: SectionComponent, id: string }> = ({ component: Component, id }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.05 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={ref}
            id={id}
            className={`py-16 md:py-24 scroll-mt-20 section-fade-in ${isVisible ? 'is-visible' : ''}`}
        >
            <Component isVisible={isVisible} />
        </section>
    );
};

const AppContent = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const { 
    godMode, setGodMode, 
    showKonamiMessage, setShowKonamiMessage, 
    colorTheme, glitchIntensity,
  } = useContext(GodModeContext);

  const [overlay, setOverlay] = useState<'none' | 'matrix' | 'reboot'>('none');

  const activateGodMode = () => {
    setGodMode(true);
    setShowKonamiMessage(true);
  };
  
  useKonamiCode(activateGodMode);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement> | MouseEvent, href: string) => {
    e.preventDefault();
    if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTerminalCommand = (command: 'matrix' | 'reboot') => {
    setOverlay(command);
    setIsTerminalOpen(false);
    setTimeout(() => setOverlay('none'), command === 'reboot' ? 4000 : 5000);
  };

  const sections: { id: string; Component: SectionComponent }[] = [
    { id: 'about', Component: About },
    { id: 'experience', Component: Experience },
    { id: 'skills', Component: Skills },
    { id: 'projects', Component: Projects },
    { id: 'contact', Component: Contact },
  ];
  
  useEffect(() => {
    const htmlEl = document.documentElement;
    if (isTerminalOpen) {
        htmlEl.classList.add('overflow-hidden');
    } else {
        htmlEl.classList.remove('overflow-hidden');
    }
    return () => {
        htmlEl.classList.remove('overflow-hidden');
    };
  }, [isTerminalOpen]);
  
  useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.classList.remove('theme-amber', 'theme-cyan');
    if (colorTheme !== 'green') {
      htmlEl.classList.add(`theme-${colorTheme}`);
    }
    
    htmlEl.style.setProperty('--glitch-intensity', glitchIntensity.toString());
  }, [colorTheme, glitchIntensity]);


  return (
    <div className={`bg-transparent text-[var(--text-color)] transition-colors duration-300 ${godMode ? 'god-mode' : ''}`}>
      <Header theme={theme} toggleTheme={toggleTheme} onNavClick={handleNavClick} />
      <main className="container mx-auto px-4">
        <Hero onNavClick={handleNavClick} />
        {sections.map(({ id, Component }) => (
          <SectionWrapper key={id} id={id} component={Component} />
        ))}
      </main>
      <Footer onNavClick={handleNavClick} />

       {godMode && <GodModePanel />}

       <button
        onClick={() => setIsTerminalOpen(true)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[var(--card-bg-color)]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-[var(--card-border-color)] text-[var(--text-muted-color)] hover:text-[var(--primary-color)] hover:border-[var(--primary-color)] transition-all duration-300 transform hover:scale-110"
        aria-label="Open Terminal"
      >
        <TerminalIcon className="w-7 h-7" />
      </button>

      {isTerminalOpen && createPortal(
        <Terminal
          onClose={() => setIsTerminalOpen(false)}
          onNavClick={handleNavClick}
          onCommand={handleTerminalCommand}
        />,
        document.body
      )}

      {showKonamiMessage && createPortal(
        <div className="konami-alert-overlay" onClick={() => setShowKonamiMessage(false)}>
          <div className="konami-alert" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-2">{GOD_MODE_DATA.konamiAlert.title}</h3>
            <p className="text-[var(--text-muted-color)] mb-4">{GOD_MODE_DATA.konamiAlert.description}</p>
            <button 
              onClick={() => setShowKonamiMessage(false)}
              className="bg-[var(--primary-color)] text-white font-bold py-2 px-6 rounded-lg hover:bg-[var(--primary-hover-color)] transition-colors"
            >
              {GOD_MODE_DATA.konamiAlert.button}
            </button>
          </div>
        </div>,
        document.body
      )}
      
      {overlay === 'matrix' && createPortal(
          <div className="fullscreen-overlay">
              <MatrixBackground isActive={true} />
          </div>, document.body
      )}

      {overlay === 'reboot' && createPortal(
          <div className="fullscreen-overlay text-lg">
              <p>Rebooting system...</p>
              <p>[ 1.5234] Rebooting...</p>
              <p className="animate-ping">[ 3.8712] Shutting down services...</p>
          </div>, document.body
      )}

    </div>
  );
}

function App() {
  return (
    <GodModeProvider>
        <AppContent />
    </GodModeProvider>
  )
}


export default App;