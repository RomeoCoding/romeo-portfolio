

import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons';
import MatrixBackground from './MatrixBackground';

interface FooterProps {
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

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
            <MatrixBackground />
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