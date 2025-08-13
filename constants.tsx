import React from 'react';
import type { Experience, Project, Skill } from './types';
import {
  GithubIcon, LinkedinIcon, MailIcon, PhoneIcon,
  CodeIcon, ServerIcon, CpuIcon, CircuitBoardIcon, FileCodeIcon,
  GitBranchIcon, SchoolIcon, BriefcaseIcon, AwardIcon,
  UserIcon, WrenchIcon, LanguagesIcon, CertificateIcon, BrainCircuitIcon, MicIcon, LockIcon, FunctionSquareIcon, BookHeartIcon, GlobeIcon, GemIcon, FileTypeIcon
} from './components/Icons';

export const EXPERIENCES: Experience[] = [
  {
    role: 'Operations & Content Lead',
    company: 'OnlineCourses Startup',
    period: 'May 2025 - Present',
    description: [
      'Led end-to-end development and production of online course materials, ensuring high-quality and engaging content.',
      'Managed operational aspects of the online platform, including scheduling, content deployment, and performance monitoring.',
      'Oversaw tutor performance and student satisfaction; implemented feedback for continuous improvement.',
      'Contributed to strategic business development, identifying new course opportunities and enhancing value.',
    ]
  },
  {
    role: 'Head of the Mentoring Program',
    company: 'Technion ECE Student Association',
    period: 'Aug 2024 - Present',
    description: [
      'Recruit and interview social tutors for the program.',
      'Act as a liaison between university counsellors and students.',
      'Ensure program schedules run smoothly and effectively.',
    ]
  },
   {
    role: 'Social Tutor',
    company: 'Technion ECE Student Association',
    period: 'Sep 2024 - Present',
    description: [
        'Guide first-semester students in academic and time management skills.',
        'Coordinate with faculty consultants to address student needs.'
    ]
  },
  {
    role: 'Academic Tutor',
    company: 'Technion',
    period: 'Apr 2024 - Present',
    description: [
      'Provide one-on-one tutoring in CS, Physics, PDEs, ODEs, and Fourier Transforms.',
      'Simplify complex mathematical and programming concepts for students.',
    ]
  },
  {
    role: 'Social Tutor',
    company: 'Equal Opportunities Project',
    period: 'Sep 2023 - Aug 2024',
    description: [
      'Mentored six new Arabic students in the ECE faculty.',
      'Assisted in building optimized and effective academic schedules.',
    ]
  },
  {
    role: 'R&D',
    company: 'RadX',
    period: 'Jun 2021 - Aug 2024',
    description: [
      'Created a 650-page psychometric preparation book bundle.',
      'Authored comprehensive solutions and generated original exam questions.',
      'Designed diagrams and visual aids to simplify complex topics.',
    ]
  }
];

export const EDUCATION: Experience = {
    role: 'B.E. in Electrical, Electronics, and Computers Engineering',
    company: 'Technion - Israel Institute of Technology',
    period: '2022 - 2027',
    description: [
        'Planning to specialize in VLSI and Power Systems.',
        'Relevant Coursework: Digital Systems, Signals & Systems, Data Structures, Linear Algebra, PDEs, ODEs.'
    ]
};

export const CERTIFICATIONS: Experience[] = [
    {
        role: 'Generative AI: Introduction and Applications',
        company: 'Coursera',
        period: 'Issued 2024',
        description: []
    },
    {
        role: 'Introduction to Artificial Intelligence (AI)',
        company: 'Coursera',
        period: 'Issued 2024',
        description: []
    },
    {
        role: 'Python for Data Science, AI & Development',
        company: 'Coursera',
        period: 'Issued 2024',
        description: []
    }
];


export const HONORS: Experience[] = [
    {
        role: 'Outstanding Candidate',
        company: 'Technion - Winter Semester 2022/23',
        period: 'Feb 2023',
        description: []
    },
    {
        role: 'Outstanding Candidate',
        company: 'Technion - Spring Semester 2022/23',
        period: 'Jul 2023',
        description: []
    },
    {
        role: 'United Holy Land Scholarship',
        company: 'Awarded for Academic Excellence',
        period: '2023',
        description: []
    }
];

export const SKILLS: { category: string; icon: React.ReactNode; skills: Skill[] }[] = [
  {
    category: 'Hardware & Verification',
    icon: <CircuitBoardIcon />,
    skills: [
      { name: 'SystemVerilog & UVM', icon: <CpuIcon /> },
      { name: 'C / C++', icon: <CodeIcon /> },
      { name: 'x86 Assembly', icon: <CpuIcon /> },
      { name: 'Signal Processing', icon: <WrenchIcon /> },
      { name: 'Simulation Tools (LTSpice)', icon: <CircuitBoardIcon /> },
    ]
  },
  {
    category: 'Software & AI',
    icon: <BrainCircuitIcon />,
    skills: [
      { name: 'Python', icon: <CodeIcon /> },
      { name: 'MATLAB', icon: <WrenchIcon /> },
      { name: 'AI/ML for Audio Processing', icon: <MicIcon /> },
      { name: 'Chrome Extension Dev', icon: <CodeIcon /> },
      { name: 'Git & GitHub', icon: <GitBranchIcon /> },
    ]
  },
  {
    category: 'Languages & Professional',
    icon: <LanguagesIcon />,
    skills: [
      { name: 'Arabic (Native)', icon: <UserIcon /> },
      { name: 'English (Native)', icon: <UserIcon /> },
      { name: 'Hebrew (Professional)', icon: <UserIcon /> },
      { name: 'Technical Writing', icon: <FileCodeIcon /> },
    ]
  },
];


export const INITIAL_PROJECTS: Project[] = [
  {
    title: "EEG-Driven Perlin Noise",
    description: "Developing an EEG-driven generative art and biofeedback system using Perlin Noise to visualize affective states.",
    features: [
      "Real-time EEG data processing.",
      "Mapping emotional states to Perlin Noise parameters.",
      "Dynamic biofeedback and visualization architecture.",
      "Represents affective states through evolving art.",
    ],
    technologies: ["Python", "EEG", "Signal Processing", "Perlin Noise", "Generative Art"],
    link: "#"
  },
  {
    title: "Hardware Accelerator for FIR Filter",
    description: "Designed and verified a configurable FIR filter in SystemVerilog. Developed a full UVM verification environment with a reference model, scoreboard, and coverage.",
    features: [
      "Pipelined Serial Architecture for efficiency.",
      "Full UVM verification environment.",
      "Analyzed for applications in audio, image, and data processing.",
    ],
    technologies: ["SystemVerilog", "UVM", "ModelSim", "Digital Signal Processing"],
    link: "#"
  },
  {
    title: "AI-Based Google Meet Smart Mic",
    description: "A Chrome extension that intelligently mutes and unmutes the user's microphone based on voice activity detection during Google Meet calls.",
    features: [
      "Real-time voice detection using Silero VAD.",
      "Low-latency processing via Python WebSocket server.",
      "Seamless integration with Google Meet UI.",
      "Improves meeting etiquette automatically.",
    ],
    technologies: ["Chrome Extension", "JavaScript", "Python", "WebSocket", "AI/ML"],
    link: "#"
  },
  {
    title: "AI-Powered Voice Assistant",
    description: "A Python-based voice assistant featuring wake-word detection, Natural Language Processing (NLP), and automated command execution.",
    features: [
      "Hands-free activation with wake-word.",
      "Automated web browsing and application launching.",
      "Text-to-speech for audible responses.",
      "Extensible command architecture.",
    ],
    technologies: ["Python", "NLP", "Speech Recognition", "Automation"],
    link: "#"
  },
  {
    title: "Bank Management System",
    description: "A multi-threaded banking system implemented in C++, focusing on safe concurrent operations using semaphores and mutexes.",
    features: [
      "Thread-safe account transactions.",
      "Command parser for client interactions.",
      "Detailed logging of all operations.",
      "Robust concurrency control with mutexes & semaphores.",
    ],
    technologies: ["C++", "Multithreading", "Semaphores", "Mutexes"],
    link: "#"
  },
  {
    title: "SMASH (Small Shell) Program",
    description: "A custom shell developed in C with custom commands, signal handling, and process management, mimicking a standard Unix shell.",
    features: [
      "Built-in command implementation.",
      "Signal handling for foreground/background processes.",
      "Job control and command history.",
    ],
    technologies: ["C", "Makefile", "Unix/Linux Systems"],
    link: "#"
  },
  {
    title: "Project in Harmonic Functions",
    description: "Studied applications of harmonic functions in visual animations, connecting Linear Algebra concepts to graphics using Python and MATLAB.",
    features: [
      "In-depth academic research paper.",
      "Visual animations demonstrating concepts.",
      "Practical application of mathematical theory.",
    ],
    technologies: ["Python", "MATLAB", "Linear Algebra", "Computer Graphics"],
    link: "#"
  },
  {
    title: "Psychometric Book Bundle",
    description: "Created a 650-page Arabic-language psychometric preparation bundle, authoring solutions, original questions, and visual diagrams.",
    features: [
      "Comprehensive 650-page guide.",
      "Original questions and detailed solutions.",
      "Professionally formatted for self-publishing.",
    ],
    technologies: ["Technical Writing", "Content Creation", "LaTeX"],
    link: "#"
  },
  {
    title: "Tourist Guide Website",
    description: "A booking and itinerary website for a tourist guide business, enabling clients to view services and schedule tours.",
    features: [
      "Service catalog and guide portfolio.",
      "Integrated booking and scheduling system.",
      "Responsive design for all devices.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Booking APIs"],
    link: "#"
  },
  {
    title: "Jewelry Boutique Website",
    description: "An e-commerce website for a jewelry boutique, featuring a full product catalog and secure online checkout.",
    features: [
      "Dynamic product catalog.",
      "Secure payment gateway integration.",
      "Content management for easy product updates.",
    ],
    technologies: ["HTML/CSS", "JavaScript", "E-commerce", "Stripe API"],
    link: "#"
  },
  {
    title: "Document Formatter Tool",
    description: "A Python-based tool for automatically styling and exporting documents, saving time on manual formatting.",
    features: [
      "Automated styling based on predefined rules.",
      "Supports multiple export formats (e.g., PDF, DOCX).",
      "CLI for easy integration into workflows.",
    ],
    technologies: ["Python", "Document Processing", "CLI"],
    link: "#"
  },
];


export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/romeo-mattar/",
    github: "https://github.com/romeomattar", // User should update this
    email: "mailto:romeomattar239@gmail.com",
    phone: "tel:0545697874"
};