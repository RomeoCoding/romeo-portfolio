import React from 'react';
import { SOCIAL_LINKS, HERO_DATA } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import { useTextScramble } from '../hooks/useTextScramble';

interface HeroProps {
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  const name = useTextScramble(HERO_DATA.name, true, 0);

  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-color)] mb-4 h-20 flex items-center justify-center font-mono">
          {name}
        </h1>
        <p className="text-2xl md:text-3xl text-[var(--primary-color)] font-medium mb-8">
          {HERO_DATA.subtitle}
        </p>
        <p className="text-lg text-[var(--text-muted-color)] max-w-2xl mx-auto mb-10">
          {HERO_DATA.description}
        </p>
        <div className="flex justify-center items-center gap-6 mb-12">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted-color)] hover:text-[var(--primary-color)] transition-colors">
            <LinkedinIcon className="w-8 h-8" />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted-color)] hover:text-[var(--primary-color)] transition-colors">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href={SOCIAL_LINKS.email} className="text-[var(--text-muted-color)] hover:text-[var(--primary-color)] transition-colors">
            <MailIcon className="w-8 h-8" />
          </a>
        </div>
        <a 
          href="#contact"
          onClick={(e) => onNavClick(e, '#contact')}
          className="glitch-button inline-block bg-[var(--primary-color)] text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-[var(--primary-hover-color)] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/20"
          data-text={HERO_DATA.button}
        >
          {HERO_DATA.button}
        </a>
      </div>
    </section>
  );
};

export default Hero;