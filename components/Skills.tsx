import React from 'react';
import { SKILLS } from '../constants';
import { useTextScramble } from '../hooks/useTextScramble';

interface SkillsProps {
  isVisible?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isVisible = false }) => {
  const title = useTextScramble('Technical Skills', isVisible);
  return (
    <div>
      <h2 className="text-4xl font-bold text-[var(--text-color)] mb-6 text-center h-12 flex items-center justify-center">{title}</h2>
      <div className="w-24 h-1 bg-[var(--primary-color)] mx-auto mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((category) => (
          <div key={category.category} className="clipped-card bg-[var(--card-bg-color)] backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[var(--card-border-color)] hover:border-[var(--primary-color)]/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/10">
            <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4 flex items-center gap-3">
              {category.icon}
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center text-[var(--text-muted-color)]">
                  <span className="text-[var(--primary-color)] mr-3">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
