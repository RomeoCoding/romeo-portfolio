import React, { useState, useEffect, useRef } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const MatrixBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        const columns = Math.floor(canvas.width / 20);
        const drops = Array.from({ length: columns }).map(() => Math.floor(Math.random() * canvas.height));
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split('');

        const draw = () => {
            const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            const bgColor = theme === 'dark' ? 'rgba(2, 6, 23, 0.05)' : 'rgba(248, 250, 252, 0.05)';
            const rainColor = theme === 'dark' ? '#22c55e' : 'rgba(0,0,0,0.05)';

            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = rainColor;
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);
                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            animationFrameId = window.requestAnimationFrame(draw);
        };
        draw();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} id="matrix-canvas" className="fixed top-0 left-0 w-full h-full z-[-2]"></canvas>;
};


const SectionWrapper: React.FC<{ children: React.ReactNode; id: string }> = ({ children, id }) => {
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

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section
            ref={ref}
            id={id}
            className={`py-16 md:py-24 scroll-mt-20 section-fade-in ${isVisible ? 'is-visible' : ''}`}
        >
            {children}
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

  const sections = [
    { id: 'about', Component: About },
    { id: 'experience', Component: Experience },
    { id: 'skills', Component: Skills },
    { id: 'projects', Component: Projects },
    { id: 'contact', Component: Contact },
  ];

  return (
    <div className="bg-transparent text-[var(--text-color)] transition-colors duration-300">
      <MatrixBackground />
      <Header theme={theme} toggleTheme={toggleTheme} onNavClick={handleNavClick} />
      <main className="container mx-auto px-4">
        <Hero onNavClick={handleNavClick} />
        {sections.map(({ id, Component }) => (
          <SectionWrapper key={id} id={id}>
            <Component />
          </SectionWrapper>
        ))}
      </main>
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}

export default App;