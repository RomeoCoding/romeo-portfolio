import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons';
import { SOCIAL_LINKS } from '../constants';
import { useTextScramble } from '../hooks/useTextScramble';

interface ContactProps {
  isVisible?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isVisible = false }) => {
  const title = useTextScramble('Get In Touch', isVisible);
  return (
    <div className="text-center">
      <div>
        <h2 className="text-4xl font-bold text-[var(--text-color)] mb-4 h-12 flex items-center justify-center">{title}</h2>
        <p className="text-lg text-[var(--text-muted-color)] mb-8 max-w-2xl mx-auto">
          I'm actively seeking new opportunities and collaborations. If you have a role that might be a good fit, or just want to connect, I'd love to hear from you. My full CV is available upon request.
        </p>
        <a 
          href={SOCIAL_LINKS.email} 
          className="glitch-button inline-block bg-[var(--primary-color)] text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-[var(--primary-hover-color)] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/20 mb-12"
          data-text="Say Hello"
        >
          Say Hello
        </a>
        <div className="flex justify-center items-center space-x-6">
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted-color)] hover:text-[var(--primary-color)] transition-colors">
            <LinkedinIcon className="w-8 h-8" />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted-color)] hover:text-[var(--primary-color)] transition-colors">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href={SOCIAL_LINKS.email} className="text-[var(--text-muted-color)] hover:text-[var(--primary-color)] transition-colors">
            <MailIcon className="w-8 h-8" />
          </a>
          <a href={SOCIAL_LINKS.phone} className="text-[var(--text-muted-color)] hover:text-[var(--primary-color)] transition-colors">
            <PhoneIcon className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;