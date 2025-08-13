import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  link?: string;
}
