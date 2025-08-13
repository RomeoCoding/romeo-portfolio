
import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

interface HeroProps {
    onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        let ticker: ReturnType<typeof setTimeout>;
        const handleType = () => {
            const i = loopNum % text.length;
            const fullText = text;
            const updatedText = isDeleting
                ? fullText.substring(0, displayText.length - 1)
                : fullText.substring(0, displayText.length + 1);

            setDisplayText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        ticker = setTimeout(handleType, isDeleting ? 75 : 150);
        return () => clearTimeout(ticker);
    }, [displayText, isDeleting, loopNum, text]);

    return (
        <span className="border-r-4 border-[var(--primary-color)] pr-1">
            {displayText}
        </span>
    );
};


const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-color)] leading-tight mb-4">
          <Typewriter text="Romeo Mattar" />
        </h1>
        <p className="text-2xl md:text-3xl text-[var(--primary-color)] font-medium mb-8">
          ECE Student @ Technion | Program Manager | R&D | Tutor
        </p>
        <p className="text-lg text-[var(--text-muted-color)] max-w-2xl mx-auto mb-10">
          A dedicated third-year Electrical and Computer Engineering student at Technion, specializing in VLSI, power systems, and signal processing. I'm passionate about bridging hardware and software to build innovative solutions.
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
          className="inline-block bg-[var(--primary-color)] text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-[var(--primary-hover-color)] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/20"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;