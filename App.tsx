
import React, { useState, useEffect, useRef } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
            { threshold: 0.1 }
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


function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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

  const sections: { id: string; Component: SectionComponent }[] = [
    { id: 'about', Component: About },
    { id: 'experience', Component: Experience },
    { id: 'skills', Component: Skills },
    { id: 'projects', Component: Projects },
    { id: 'contact', Component: Contact },
  ];

  return (
    <div className="bg-transparent text-[var(--text-color)] transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} onNavClick={handleNavClick} />
      <main className="container mx-auto px-4">
        <Hero onNavClick={handleNavClick} />
        {sections.map(({ id, Component }) => (
          <SectionWrapper key={id} id={id} component={Component} />
        ))}
      </main>
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}

export default App;