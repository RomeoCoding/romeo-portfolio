import React from 'react';
import { UserIcon } from './Icons';
import { useTextScramble } from '../hooks/useTextScramble';

interface AboutProps {
  isVisible?: boolean;
}

const About: React.FC<AboutProps> = ({ isVisible = false }) => {
  const title = useTextScramble('About Me', isVisible);
  return (
    <div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[var(--text-color)] mb-6 h-12 flex items-center justify-center">{title}</h2>
        <div className="w-24 h-1 bg-[var(--primary-color)] mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
                 <div className="w-48 h-48 md:w-64 md:h-64 mx-auto flex items-center justify-center bg-[var(--card-bg-color)] backdrop-blur-sm rounded-full border-4 border-[var(--card-border-color)] shadow-lg shadow-green-500/10">
                    <UserIcon className="w-32 h-32 text-[var(--text-muted-color)]" />
                 </div>
            </div>
            <div className="md:w-2/3 text-left">
                <p className="text-lg text-[var(--text-muted-color)] mb-4">
                  I am a dedicated third-year Electrical and Computer Engineering student at Technion with a high academic average. My experience spans programming, simulation software, and independent research in signal processing.
                </p>
                <p className="text-lg text-[var(--text-muted-color)] mb-4">
                  I am highly motivated to apply my technical expertise and leadership skills in challenging hardware or software internships. My long-term academic goal is to specialize in VLSI and Power Systems.
                </p>
                <p className="text-lg text-[var(--text-muted-color)]">
                  I thrive in environments where I can tackle complex problems, contribute to innovative projects, and continue to grow as both an engineer and a leader.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
