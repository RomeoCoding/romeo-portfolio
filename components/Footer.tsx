

import React, { useRef, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons';

interface FooterProps {
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MatrixFooterBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const parent = canvas.parentElement;
        if (!parent) return;

        let animationFrameId: number;
        
        const resizeCanvas = () => {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        };
        resizeCanvas();

        const columns = Math.floor(canvas.width / 20);
        const drops = Array.from({ length: columns }).map(() => Math.floor(Math.random() * canvas.height));
        const chars = "01".split('');

        const draw = () => {
            const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            
            // This color creates the fading trail effect by drawing a semi-transparent rectangle
            // over the canvas on each frame. This prevents characters from stacking up indefinitely.
            const fadeColor = theme === 'dark'
                ? 'rgba(2, 6, 23, 0.05)'  // Semi-transparent dark background (slate-950)
                : 'rgba(248, 250, 252, 0.05)'; // Semi-transparent light background (slate-50)

            ctx.fillStyle = fadeColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            const rainColor = theme === 'dark' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(0, 0, 0, 0.03)';

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

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>;
};


const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
    const navLinks = [
        { href: '#about', label: '~/about' },
        { href: '#experience', label: '~/experience' },
        { href: '#skills', label: '~/skills' },
        { href: '#projects', label: '~/projects' },
        { href: '#contact', label: '~/contact' },
    ];

    const socialLinks = [
        { href: SOCIAL_LINKS.linkedin, icon: <LinkedinIcon className="w-5 h-5" />, label: 'LinkedIn' },
        { href: SOCIAL_LINKS.github, icon: <GithubIcon className="w-5 h-5" />, label: 'GitHub' },
        { href: SOCIAL_LINKS.email, icon: <MailIcon className="w-5 h-5" />, label: 'Email' },
        { href: SOCIAL_LINKS.phone, icon: <PhoneIcon className="w-5 h-5" />, label: 'Phone' },
    ];

    return (
        <footer className="relative border-t border-[var(--card-border-color)]/50 mt-16 text-[var(--text-muted-color)] overflow-hidden">
            <MatrixFooterBackground />
            <div className="relative z-10 container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                    <div className="md:col-span-1">
                        <a href="#" onClick={(e) => onNavClick(e, '#')} className="text-2xl font-bold text-[var(--text-color)] mb-4 inline-block">
                            &lt;RM <span className="text-[var(--primary-color)]">/</span>&gt;
                        </a>
                        <p>
                            A portfolio by Romeo Mattar.
                        </p>
                         <p className="mt-2">
                            Built with React, Tailwind, and Gemini.
                        </p>
                    </div>
                    
                    <div className="md:col-span-1">
                        <h3 className="font-bold text-[var(--text-color)] mb-4">// Traverse</h3>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={(e) => onNavClick(e, link.href)} className="hover:text-[var(--primary-color)] transition-colors duration-200">
                                        <span className="text-[var(--primary-color)]">$</span> cd {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h3 className="font-bold text-[var(--text-color)] mb-4">// Connect</h3>
                        <ul className="space-y-3">
                            {socialLinks.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[var(--primary-color)] transition-colors duration-200">
                                        {link.icon}
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-[var(--card-border-color)]/50 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Romeo Mattar. All rights reserved.</p>
                    <p className="mt-1 font-mono">
                        <span className="text-[var(--primary-color)]">[</span>
                        STATUS: COMPLETE
                        <span className="text-[var(--primary-color)]">]</span>
                        <span className="animate-ping ml-1">_</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;