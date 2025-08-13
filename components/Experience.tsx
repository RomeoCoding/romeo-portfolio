import React from 'react';
import { EXPERIENCES, EDUCATION, HONORS, CERTIFICATIONS } from '../constants';
import type { Experience as ExperienceType } from '../types';
import { BriefcaseIcon, SchoolIcon, AwardIcon, CertificateIcon } from './Icons';
import { useTextScramble } from '../hooks/useTextScramble';

const TimelineItem: React.FC<{ item: ExperienceType; icon: React.ReactNode }> = ({ item, icon }) => (
  <div className="relative pl-8 sm:pl-56 py-6 group">
    {/* The timeline line */}
    <div className="absolute left-2 sm:left-0 sm:ml-[6.5rem] w-px h-full bg-[var(--card-border-color)] group-last:hidden -translate-x-1/2"></div>
    {/* The timeline dot */}
    <div className="absolute left-2 sm:left-0 sm:ml-[6.5rem] w-4 h-4 bg-[var(--primary-color)] rounded-full -translate-x-1/2 translate-y-1.5 border-4 border-[var(--bg-color)]"></div>

    <time className="sm:absolute left-0 translate-y-0.5 inline-block text-center text-xs font-semibold uppercase px-4 py-2 mb-3 sm:mb-0 text-green-800 dark:text-green-300 bg-green-200 dark:bg-green-900/50 rounded-full">{item.period}</time>
    <div className="text-xl font-bold text-[var(--text-color)] flex items-center gap-2">
      {icon}
      {item.role}
    </div>
    <div className="text-[var(--text-muted-color)] ml-4">
      <div className="font-medium text-[var(--text-color)] mb-2">{item.company}</div>
      {item.description.length > 0 && (
        <ul className="list-disc pl-5 space-y-2">
          {item.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

interface ExperienceProps {
  isVisible?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isVisible = false }) => {
  const title = useTextScramble('Career & Accomplishments', isVisible);
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[var(--text-color)] mb-12 text-center h-12 flex items-center justify-center">{title}</h2>
      <div className="space-y-8 relative">
          <h3 className="text-2xl font-bold text-[var(--primary-color)] text-center">Work Experience</h3>
          {EXPERIENCES.map((exp, index) => (
              <TimelineItem key={`exp-${index}`} item={exp} icon={<BriefcaseIcon />} />
          ))}
           <h3 className="text-2xl font-bold text-[var(--primary-color)] text-center pt-8">Education</h3>
          <TimelineItem item={EDUCATION} icon={<SchoolIcon />} />
          <h3 className="text-2xl font-bold text-[var(--primary-color)] text-center pt-8">Certifications</h3>
          {CERTIFICATIONS.map((cert, index) => (
               <TimelineItem key={`cert-${index}`} item={cert} icon={<CertificateIcon />} />
          ))}
          <h3 className="text-2xl font-bold text-[var(--primary-color)] text-center pt-8">Honors & Awards</h3>
          {HONORS.map((honor, index) => (
               <TimelineItem key={`honor-${index}`} item={honor} icon={<AwardIcon />} />
          ))}
      </div>
    </div>
  );
};

export default Experience;