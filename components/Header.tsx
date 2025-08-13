

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './Icons';
import MatrixBackground from './MatrixBackground';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, onNavClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (totalHeight > 0) {
                setScrollProgress((window.scrollY / totalHeight) * 100);
            } else {
                setScrollProgress(0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

     useEffect(() => {
        const htmlEl = document.documentElement;
        if (isMenuOpen) {
            htmlEl.classList.add('overflow-hidden');
            document.body.classList.add('overflow-hidden');
        } else {
            htmlEl.classList.remove('overflow-hidden');
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            htmlEl.classList.remove('overflow-hidden');
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen]);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <>
            <header className={`sticky top-0 z-50 transition-all duration-300 relative ${isScrolled ? 'bg-[var(--header-bg-color)] backdrop-blur-lg shadow-lg shadow-green-500/10' : 'bg-transparent'}`}>
                {isScrolled && (
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <MatrixBackground isActive={isScrolled} />
                    </div>
                )}
                <nav className="relative z-10 container mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="#" onClick={(e) => onNavClick(e, '#')} className="text-xl font-bold text-[var(--text-color)]">
                        &lt;RM <span className="text-[var(--primary-color)]">/</span>&gt;
                    </a>
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={(e) => onNavClick(e, link.href)} className="text-[var(--text-muted-color)] hover:text-[var(--primary-color)] transition-colors duration-200">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="w-9 h-9 bg-gray-500/10 dark:bg-gray-800/50 rounded-full flex items-center justify-center text-[var(--text-muted-color)] hover:bg-gray-500/20 dark:hover:bg-gray-700/50 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                        </button>
                        <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-[var(--text-muted-color)] hover:text-[var(--primary-color)] transition-colors" aria-label="Open menu">
                            <MenuIcon className="w-6 h-6" />
                        </button>
                    </div>
                </nav>
                <div className="w-full bg-transparent h-1 absolute bottom-0 left-0">
                    <div className="bg-[var(--primary-color)] h-1" style={{ width: `${scrollProgress}%` }}></div>
                </div>
            </header>

            {/* Mobile Menu Portal */}
            {isMenuOpen && createPortal(
                <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center animate-fade-in md:hidden">
                    <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-5 text-gray-400 hover:text-[var(--primary-color)] transition-colors" aria-label="Close menu">
                        <XIcon className="w-8 h-8"/>
                    </button>
                    <nav className="flex flex-col items-center space-y-8">
                        {navLinks.map(link => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                onClick={(e) => {
                                    onNavClick(e, link.href); 
                                    setIsMenuOpen(false);
                                }} 
                                className="text-3xl font-bold text-gray-200 hover:text-[var(--primary-color)] transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>,
                document.body
            )}
        </>
    );
};

export default Header;