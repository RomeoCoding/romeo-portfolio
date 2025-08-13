

import React from 'react';
import { INITIAL_PROJECTS } from '../constants';
import type { Project } from '../types';
import { ExternalLinkIcon, CheckCircleIcon, CodeIcon, CpuIcon, BookHeartIcon, ServerIcon, BrainCircuitIcon, MicIcon, LockIcon, FunctionSquareIcon, GlobeIcon, GemIcon, FileTypeIcon } from './Icons';
import { useTextScramble } from '../hooks/useTextScramble';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    
    const getProjectIcon = (title: string) => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('eeg')) return <BrainCircuitIcon />;
        if (lowerTitle.includes('fir filter')) return <CpuIcon />;
        if (lowerTitle.includes('smart mic')) return <MicIcon />;
        if (lowerTitle.includes('voice assistant')) return <ServerIcon />;
        if (lowerTitle.includes('bank')) return <LockIcon />;
        if (lowerTitle.includes('shell')) return <CodeIcon />;
        if (lowerTitle.includes('harmonic')) return <FunctionSquareIcon />;
        if (lowerTitle.includes('book')) return <BookHeartIcon />;
        if (lowerTitle.includes('tourist')) return <GlobeIcon />;
        if (lowerTitle.includes('jewelry')) return <GemIcon />;
        if (lowerTitle.includes('document')) return <FileTypeIcon />;
        return <CodeIcon />;
    }

    return (
    <div className="clipped-card bg-[var(--card-bg-color)] backdrop-blur-sm rounded-lg shadow-lg border border-[var(--card-border-color)] overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10 hover:border-[var(--primary-color)]/50">
        <div className="p-6">
        <div className="flex items-start gap-4 mb-2">
            <span className="text-[var(--primary-color)] mt-1">{getProjectIcon(project.title)}</span>
            <h3 className="text-2xl font-bold text-[var(--text-color)]">{project.title}</h3>
        </div>
        <p className="text-[var(--text-muted-color)] mb-4">{project.description}</p>

        <div className="mb-4">
            <h4 className="font-semibold text-[var(--primary-color)] mb-2 flex items-center gap-2"><CheckCircleIcon /> Key Features</h4>
            <ul className="list-disc list-inside text-[var(--text-muted-color)] space-y-1">
            {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
            </ul>
        </div>

        <div>
            <h4 className="font-semibold text-[var(--primary-color)] mb-2 flex items-center gap-2"><CodeIcon /> Technologies</h4>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                <span key={tech} className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 text-xs font-medium px-2.5 py-1 rounded-full">
                    {tech}
                </span>
                ))}
            </div>
        </div>
        </div>
        {project.link && (
        <div className="bg-black/10 dark:bg-black/20 p-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:text-[var(--primary-hover-color)] font-semibold flex items-center justify-center gap-2 transition-colors">
            View Project <ExternalLinkIcon />
            </a>
        </div>
        )}
    </div>
)};

interface ProjectsProps {
    isVisible?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isVisible = false }) => {
  const title = useTextScramble('Projects Showcase', isVisible);
  return (
    <div>
      <h2 className="text-4xl font-bold text-[var(--text-color)] mb-4 text-center h-12 flex items-center justify-center">{title}</h2>
      <p className="text-lg text-[var(--text-muted-color)] text-center mb-12 max-w-3xl mx-auto">Here are some of my works, showcasing my skills across hardware and software disciplines.</p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {INITIAL_PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;