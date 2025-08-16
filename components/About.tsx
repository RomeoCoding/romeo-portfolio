import React, { useState, useEffect } from 'react';
import { useTextScramble } from '../hooks/useTextScramble';
import { ABOUT_DATA } from '../constants';
import { UserIcon } from './Icons';

interface AboutProps {
  isVisible?: boolean;
}

const About: React.FC<AboutProps> = ({ isVisible = false }) => {
  const title = useTextScramble(ABOUT_DATA.title, isVisible);
  const [imageError, setImageError] = useState(false);
  
  // Reset error state if component becomes visible again, allowing for a retry
  useEffect(() => {
    if (isVisible) {
      setImageError(false);
    }
  }, [isVisible]);

  return (
    <div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[var(--text-color)] mb-6 h-12 flex items-center justify-center">{title}</h2>
        <div className="w-24 h-1 bg-[var(--primary-color)] mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 text-center">
                 <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full border-4 border-[var(--card-border-color)] shadow-lg shadow-green-500/10 bg-[var(--card-bg-color)] backdrop-blur-sm overflow-hidden flex items-center justify-center">
                    {!imageError ? (
                        <img 
                            src="/profile.jpg"
                            alt={ABOUT_DATA.altText}
                            className="w-full h-full object-cover"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                       <UserIcon className="w-32 h-32 text-[var(--text-muted-color)]" />
                    )}
                 </div>
                  {imageError && (
                    <p 
                        className="text-sm text-[var(--text-muted-color)]/80 mt-4 italic"
                        dangerouslySetInnerHTML={{ __html: ABOUT_DATA.devNote }}
                    />
                  )}
            </div>
            <div className="md:w-2/3 text-left">
                <p className="text-lg text-[var(--text-muted-color)] mb-4">
                  {ABOUT_DATA.p1}
                </p>
                <p className="text-lg text-[var(--text-muted-color)] mb-4">
                  {ABOUT_DATA.p2}
                </p>
                <p className="text-lg text-[var(--text-muted-color)]">
                  {ABOUT_DATA.p3}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;