import React from 'react';
import type { Experience, Project } from './types';
import {
  CodeIcon, CircuitBoardIcon, CpuIcon, WrenchIcon, GitBranchIcon,
  UserIcon, FileCodeIcon, LanguagesIcon, BrainCircuitIcon, MicIcon,
} from './components/Icons';

export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/romeo-mattar/",
    github: "https://github.com/romeocoding", 
    email: "mailto:romeomat.work@gmail.com",
    phone: "tel:0545697874"
};

export const NAV_LINKS = {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
};

export const HERO_DATA = {
    name: 'Romeo Mattar',
    subtitle: 'ECE Student @ Technion | Program Manager | R&D | Tutor',
    description: "A dedicated third-year Electrical and Computer Engineering student at Technion, specializing in VLSI, power systems, and signal processing. I'm passionate about bridging hardware and software to build innovative solutions.",
    button: 'Get In Touch',
};

export const ABOUT_DATA = {
    title: 'About Me',
    p1: 'I am a dedicated third-year Electrical and Computer Engineering student at Technion with a high academic average. My experience spans programming, simulation software, and independent research in signal processing.',
    p2: 'I am highly motivated to apply my technical expertise and leadership skills in challenging hardware or software internships. My long-term academic goal is to specialize in VLSI and Power Systems.',
    p3: 'I thrive in environments where I can tackle complex problems, contribute to innovative projects, and continue to grow as both an engineer and a leader.',
    devNote: "<b>Note:</b> Your photo is missing. Please replace the <code>profile.jpg</code> file inside the <code>public</code> folder with your actual picture.",
    altText: "Romeo Mattar"
};

export const EXPERIENCE_DATA = {
    title: 'Career & Accomplishments',
    workTitle: 'Work Experience',
    educationTitle: 'Education',
    certificationsTitle: 'Certifications',
    honorsTitle: 'Honors & Awards',
    experiences: [
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
    ],
    education: {
        role: 'B.E. in Electrical, Electronics, and Computers Engineering',
        company: 'Technion - Israel Institute of Technology',
        period: '2022 - 2027',
        description: [
            'Planning to specialize in VLSI and Power Systems.',
            'Relevant Coursework: Digital Systems, Signals & Systems, Data Structures, Linear Algebra, PDEs, ODEs.'
        ]
    },
    certifications: [
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
    ],
    honors: [
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
    ]
};

export const SKILLS_DATA = {
    title: 'Technical Skills',
    categories: [
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
    ]
};

export const PROJECTS_DATA = {
    title: 'Projects Showcase',
    description: 'Here are some of my works, showcasing my skills across hardware and software disciplines.',
    keyFeatures: 'Key Features',
    technologies: 'Technologies',
    viewProject: 'View Project',
    projectList: [
      {
        title: "WEaaS Platform: A Cloud-Based Wireless Network Design & Simulation SaaS",
        description: "Engineered a full-stack web application to provide \"Wireless Environment as a Service,\" allowing users to design and optimize wireless networks within 3D digital twins of buildings.",
        features: [
          "Distributed backend with Python (FastAPI) & Celery workers.",
          "Asynchronous, non-blocking electromagnetic simulations.",
          "Interactive 3D front-end using React & Three.js.",
          "Multi-tenant PostgreSQL database for data persistence.",
        ],
        technologies: ["React", "Three.js", "Python", "FastAPI", "Celery", "PostgreSQL", "SaaS"],
        link: "#"
      },
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
        link: "https://tour-guide-ruby.vercel.app/"
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
        link: "https://weldorf-jewelry.vercel.app/"
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
    ],
    godModeProject: {
        title: "AI-Powered Toaster [SECRET]",
        description: "A revolutionary breakfast appliance with a personality core, capable of existential dread and perfectly browned toast. Activated via God Mode.",
        features: [
        "Detects user's emotional state and adjusts toast darkness.",
        "Delivers philosophical quotes with every slice.",
        "Quantum-entangled crumb tray (never needs emptying).",
        "Requires admin privileges (and God Mode) to operate.",
        ],
        technologies: ["Sentient AI", "Quantum Mechanics", "A-NSI-ART", "Sourdough SDK"],
        link: "#"
    }
};

export const CONTACT_DATA = {
    title: 'Get In Touch',
    description: "I'm actively seeking new opportunities and collaborations. If you have a role that might be a good fit, or just want to connect, I'd love to hear from you. My full CV is available upon request.",
    button: 'Say Hello',
};

export const FOOTER_DATA = {
    bio: 'A portfolio by Romeo Mattar.',
    tech: 'Built with React, Tailwind, and Gemini.',
    traverse: 'Traverse',
    connect: 'Connect',
    copyright: `© ${new Date().getFullYear()} Romeo Mattar. All rights reserved.`,
    status: 'STATUS: COMPLETE',
    konamiHint: '// Hint: ↑↑↓↓←→←→ B A',
    nav: {
        about: '~/about',
        experience: '~/experience',
        skills: '~/skills',
        projects: '~/projects',
        contact: '~/contact'
    },
    social: {
        linkedin: 'LinkedIn',
        github: 'GitHub',
        email: 'Email',
        phone: 'Phone'
    }
};

export const TERMINAL_DATA = {
    welcome: 'Welcome to my interactive terminal.',
    helpPrompt: "Type 'help' to see a list of available commands.",
    help: {
        title: 'Available commands:',
        help: '  help          - Show this help message',
        whoami: '  whoami        - Display a short bio',
        social: '  social        - List social media links',
        contact: '  contact       - Show contact information',
        ls: '  ls            - List portfolio sections',
        cd: '  cd [section]  - Navigate to a section (e.g., "cd projects")',
        clear: '  clear         - Clear the terminal screen',
        exit: '  exit          - Close the terminal',
        godModeTitle: 'GOD MODE COMMANDS:',
        sudo: '  sudo [cmd]    - Execute command as superuser',
        matrix: '  matrix        - Activate the digital rain overlay',
        reboot: '  reboot        - Simulate a system reboot',
    },
    whoamiResponse: [
        'Romeo Mattar: A dedicated third-year Electrical and Computer Engineering student at Technion,',
        'specializing in VLSI, power systems, and signal processing.',
        'Passionate about bridging hardware and software to build innovative solutions.'
    ],
    socialResponse: {
        linkedin: 'LinkedIn:',
        github: 'GitHub:'
    },
    contactResponse: {
        email: 'Email:',
        phone: 'Phone:'
    },
    lsResponse: ['about', 'experience', 'skills', 'projects', 'contact'],
    cdResponse: {
        navigating: (section: string) => `Navigating to ${section}...`,
        error: (section: string) => `Error: Section '${section}' not found. Try 'ls' to see available sections.`
    },
    sudoResponse: {
        lecture: 'We trust you have received the usual lecture from the local System Administrator.',
        success: (cmd: string) => `Permission granted. Executing "${cmd}" with root privileges... Success.`
    },
    matrixResponse: 'Activating digital rain...',
    rebootResponse: 'Initiating system reboot...',
    commandNotFound: (cmd: string) => `Command not found: ${cmd}. Type 'help' for a list of commands.`,
    misspelled: (cmd: string) => `"${cmd}" doesn't exist! Come on spell it correct!`
};

export const GOD_MODE_DATA = {
    panelTitle: 'God Mode Controls',
    matrixSpeed: 'Matrix Speed',
    glitchIntensity: 'Glitch Intensity',
    accentColor: 'Accent Color',
    disable: 'Disable God Mode',
    konamiAlert: {
        title: 'ACCESS GRANTED',
        description: 'God Mode activated. Enjoy the enhanced experience.',
        button: 'CONTINUE'
    }
};