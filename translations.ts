import React from 'react';
import type { Experience, Project, Skill } from './types';
import {
  CodeIcon, ServerIcon, CpuIcon, CircuitBoardIcon, FileCodeIcon,
  GitBranchIcon, UserIcon, WrenchIcon, LanguagesIcon, 
  BrainCircuitIcon, MicIcon, LockIcon, FunctionSquareIcon, BookHeartIcon, GlobeIcon, GemIcon, FileTypeIcon, KeyIcon
} from './components/Icons';


const en = {
    nav: {
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
    },
    hero: {
        name: 'Romeo Mattar',
        subtitle: 'ECE Student @ Technion | Program Manager | R&D | Tutor',
        description: "A dedicated third-year Electrical and Computer Engineering student at Technion, specializing in VLSI, power systems, and signal processing. I'm passionate about bridging hardware and software to build innovative solutions.",
        button: 'Get In Touch',
    },
    about: {
        title: 'About Me',
        p1: 'I am a dedicated third-year Electrical and Computer Engineering student at Technion with a high academic average. My experience spans programming, simulation software, and independent research in signal processing.',
        p2: 'I am highly motivated to apply my technical expertise and leadership skills in challenging hardware or software internships. My long-term academic goal is to specialize in VLSI and Power Systems.',
        p3: 'I thrive in environments where I can tackle complex problems, contribute to innovative projects, and continue to grow as both an engineer and a leader.',
        devNote: "<b>Note:</b> Your photo is missing. Please replace the <code>profile.jpg</code> file inside the <code>public</code> folder with your actual picture.",
        altText: "Romeo Mattar"
    },
    experience: {
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
    },
    skills: {
        title: 'Technical Skills',
        categories: [
            {
                category: 'Hardware & Verification',
                icon: <CircuitBoardIcon /> as React.ReactNode,
                skills: [
                { name: 'SystemVerilog & UVM', icon: <CpuIcon /> as React.ReactNode },
                { name: 'C / C++', icon: <CodeIcon /> as React.ReactNode },
                { name: 'x86 Assembly', icon: <CpuIcon /> as React.ReactNode },
                { name: 'Signal Processing', icon: <WrenchIcon /> as React.ReactNode },
                { name: 'Simulation Tools (LTSpice)', icon: <CircuitBoardIcon /> as React.ReactNode },
                ]
            },
            {
                category: 'Software & AI',
                icon: <BrainCircuitIcon /> as React.ReactNode,
                skills: [
                { name: 'Python', icon: <CodeIcon /> as React.ReactNode },
                { name: 'MATLAB', icon: <WrenchIcon /> as React.ReactNode },
                { name: 'AI/ML for Audio Processing', icon: <MicIcon /> as React.ReactNode },
                { name: 'Chrome Extension Dev', icon: <CodeIcon /> as React.ReactNode },
                { name: 'Git & GitHub', icon: <GitBranchIcon /> as React.ReactNode },
                ]
            },
            {
                category: 'Languages & Professional',
                icon: <LanguagesIcon /> as React.ReactNode,
                skills: [
                { name: 'Arabic (Native)', icon: <UserIcon /> as React.ReactNode },
                { name: 'English (Native)', icon: <UserIcon /> as React.ReactNode },
                { name: 'Hebrew (Professional)', icon: <UserIcon /> as React.ReactNode },
                { name: 'Technical Writing', icon: <FileCodeIcon /> as React.ReactNode },
                ]
            },
        ]
    },
    projects: {
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
    },
    contact: {
        title: 'Get In Touch',
        description: "I'm actively seeking new opportunities and collaborations. If you have a role that might be a good fit, or just want to connect, I'd love to hear from you. My full CV is available upon request.",
        button: 'Say Hello',
    },
    footer: {
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
    },
    terminal: {
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
    },
    godMode: {
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
    }
};

const he = {
    nav: {
        about: 'אודות',
        experience: 'ניסיון',
        skills: 'מיומנויות',
        projects: 'פרויקטים',
        contact: 'צור קשר',
    },
    hero: {
        name: 'רומיאו מטר',
        subtitle: 'סטודנט להנדסת חשמל ומחשבים | מנהל תוכניות | מו"פ | מורה פרטי',
        description: 'סטודנט שנה שלישית להנדסת חשמל ומחשבים בטכניון, מתמחה במערכות VLSI, מערכות הספק ועיבוד אותות. בעל תשוקה לגשר בין חומרה לתוכנה לבניית פתרונות חדשניים.',
        button: 'צור קשר',
    },
    about: {
        title: 'אודותיי',
        p1: 'אני סטודנט שנה שלישית להנדסת חשמל ומחשבים בטכניון עם ממוצע ציונים גבוה. ניסיוני כולל תכנות, תוכנות סימולציה ומחקר עצמאי בעיבוד אותות.',
        p2: 'אני בעל מוטיבציה גבוהה ליישם את המומחיות הטכנית וכישורי המנהיגות שלי בהתמחויות מאתגרות בחומרה או בתוכנה. המטרה האקדמית שלי לטווח הארוך היא להתמחות במערכות VLSI ומערכות הספק.',
        p3: 'אני משגשג בסביבות בהן אני יכול להתמודד עם בעיות מורכבות, לתרום לפרויקטים חדשניים ולהמשיך לצמוח כמהנדס וכמנהיג.',
        devNote: "<b>הערה:</b> התמונה שלך חסרה. אנא החלף את הקובץ <code>profile.jpg</code> בתיקיית <code>public</code> בתמונה האמיתית שלך.",
        altText: "רומיאו מטר"
    },
    experience: {
        title: 'קריירה והישגים',
        workTitle: 'ניסיון תעסוקתי',
        educationTitle: 'השכלה',
        certificationsTitle: 'הסמכות',
        honorsTitle: 'הצטיינויות ופרסים',
        experiences: [
          {
            role: 'מוביל תפעול ותוכן',
            company: 'סטארטאפ קורסים אונליין',
            period: 'מאי 2025 - היום',
            description: [
              'הובלת פיתוח והפקה מקצה לקצה של חומרי קורס מקוונים, תוך הבטחת תוכן איכותי ומרתק.',
              'ניהול היבטים תפעוליים של הפלטפורמה המקוונת, כולל תזמון, פריסת תוכן וניטור ביצועים.',
              'פיקוח על ביצועי המורים ושביעות רצון הסטודנטים; יישום משוב לשיפור מתמיד.',
              'תרומה לפיתוח עסקי אסטרטגי, זיהוי הזדמנויות לקורסים חדשים והגברת הערך.',
            ]
          },
          {
            role: 'ראש תוכנית החונכות',
            company: 'אסוציאציית הסטודנטים להנדסת חשמל ומחשבים בטכניון',
            period: 'אוגוסט 2024 - היום',
            description: [
              'גיוס וראיון של חונכים חברתיים לתוכנית.',
              'פעולה כמקשר בין יועצי האוניברסיטה לסטודנטים.',
              'הבטחה שלוחות הזמנים של התוכנית יתנהלו בצורה חלקה ויעילה.',
            ]
          },
           {
            role: 'חונך חברתי',
            company: 'אסוציאציית הסטודנטים להנדסת חשמל ומחשבים בטכניון',
            period: 'ספטמבר 2024 - היום',
            description: [
                'הדרכת סטודנטים בסמסטר הראשון במיומנויות אקדמיות וניהול זמן.',
                'תיאום עם יועצי הסגל כדי לענות על צרכי הסטודנטים.'
            ]
          },
          {
            role: 'מורה פרטי אקדמי',
            company: 'הטכניון',
            period: 'אפריל 2024 - היום',
            description: [
              'מתן שיעורים פרטיים במדעי המחשב, פיזיקה, משוואות דיפרנציאליות חלקיות, משוואות דיפרנציאליות רגילות והתמרות פורייה.',
              'פישוט מושגים מתמטיים ותכנותיים מורכבים עבור סטודנטים.',
            ]
          },
          {
            role: 'חונך חברתי',
            company: 'פרויקט שוויון הזדמנויות',
            period: 'ספטמבר 2023 - אוגוסט 2024',
            description: [
              'חנכתי שישה סטודנטים ערבים חדשים בפקולטה להנדסת חשמל ומחשבים.',
              'סייעתי בבניית לוחות זמנים אקדמיים מותאמים ויעילים.',
            ]
          },
          {
            role: 'מו"פ',
            company: 'RadX',
            period: 'יוני 2021 - אוגוסט 2024',
            description: [
              'יצרתי חבילת ספרי הכנה פסיכומטריים בהיקף של 650 עמודים.',
              'כתבתי פתרונות מקיפים ויצרתי שאלות בחינה מקוריות.',
              'עיצבתי דיאגרמות ועזרים חזותיים לפישוט נושאים מורכבים.',
            ]
          }
        ],
        education: {
            role: 'תואר ראשון בהנדסת חשמל, אלקטרוניקה ומחשבים',
            company: 'הטכניון - מכון טכנולוגי לישראל',
            period: '2022 - 2027',
            description: [
                'מתכנן להתמחות במערכות VLSI ומערכות הספק.',
                'קורסים רלוונטיים: מערכות דיגיטליות, אותות ומערכות, מבני נתונים, אלגברה לינארית, משוואות דיפרנציאליות חלקיות, משוואות דיפרנציאליות רגילות.'
            ]
        },
        certifications: [
            {
                role: 'Generative AI: Introduction and Applications',
                company: 'Coursera',
                period: 'הונפק 2024',
                description: []
            },
            {
                role: 'Introduction to Artificial Intelligence (AI)',
                company: 'Coursera',
                period: 'הונפק 2024',
                description: []
            },
            {
                role: 'Python for Data Science, AI & Development',
                company: 'Coursera',
                period: 'הונפק 2024',
                description: []
            }
        ],
        honors: [
            {
                role: 'מועמד מצטיין',
                company: 'הטכניון - סמסטר חורף 2022/23',
                period: 'פברואר 2023',
                description: []
            },
            {
                role: 'מועמד מצטיין',
                company: 'הטכניון - סמסטר אביב 2022/23',
                period: 'יולי 2023',
                description: []
            },
            {
                role: 'מלגת ארץ הקודש המאוחדת',
                company: 'הוענקה על הצטיינות אקדמית',
                period: '2023',
                description: []
            }
        ]
    },
    skills: {
        title: 'מיומנויות טכניות',
        categories: [
            {
                category: 'חומרה ואימות',
                icon: <CircuitBoardIcon /> as React.ReactNode,
                skills: [
                    { name: 'SystemVerilog & UVM', icon: <CpuIcon /> as React.ReactNode },
                    { name: 'C / C++', icon: <CodeIcon /> as React.ReactNode },
                    { name: 'x86 Assembly', icon: <CpuIcon /> as React.ReactNode },
                    { name: 'עיבוד אותות', icon: <WrenchIcon /> as React.ReactNode },
                    { name: 'כלי סימולציה (LTSpice)', icon: <CircuitBoardIcon /> as React.ReactNode },
                ]
            },
            {
                category: 'תוכנה ובינה מלאכותית',
                icon: <BrainCircuitIcon /> as React.ReactNode,
                skills: [
                    { name: 'Python', icon: <CodeIcon /> as React.ReactNode },
                    { name: 'MATLAB', icon: <WrenchIcon /> as React.ReactNode },
                    { name: 'AI/ML לעיבוד שמע', icon: <MicIcon /> as React.ReactNode },
                    { name: 'פיתוח תוספים לכרום', icon: <CodeIcon /> as React.ReactNode },
                    { name: 'Git & GitHub', icon: <GitBranchIcon /> as React.ReactNode },
                ]
            },
            {
                category: 'שפות ומקצועי',
                icon: <LanguagesIcon /> as React.ReactNode,
                skills: [
                    { name: 'ערבית (שפת אם)', icon: <UserIcon /> as React.ReactNode },
                    { name: 'אנגלית (שפת אם)', icon: <UserIcon /> as React.ReactNode },
                    { name: 'עברית (מקצועית)', icon: <UserIcon /> as React.ReactNode },
                    { name: 'כתיבה טכנית', icon: <FileCodeIcon /> as React.ReactNode },
                ]
            },
        ]
    },
    projects: {
        title: 'תיק עבודות',
        description: 'הנה כמה מהעבודות שלי, המציגות את כישוריי בתחומי החומרה והתוכנה.',
        keyFeatures: 'תכונות עיקריות',
        technologies: 'טכנולוגיות',
        viewProject: 'צפה בפרויקט',
        projectList: [
          {
            title: "פלטפורמת WEaaS: תכנון וסימולציה של רשתות אלחוטיות בענן (SaaS)",
            description: "הנדסתי יישום רשת מלא (full-stack) כדי לספק \"סביבה אלחוטית כשירות\", המאפשר למשתמשים לתכנן ולמטב רשתות אלחוטיות בתוך תאומים דיגיטליים תלת-ממדיים של מבנים.",
            features: [
              "צד-שרת מבוזר עם Python (FastAPI) ועובדי Celery.",
              "סימולציות אלקטרומגנטיות אסינכרוניות ולא חוסמות.",
              "ממשק תלת-ממדי אינטראקטיבי באמצעות React ו-Three.js.",
              "מסד נתונים PostgreSQL רב-דיירי לשמירת נתונים.",
            ],
            technologies: ["React", "Three.js", "Python", "FastAPI", "Celery", "PostgreSQL", "SaaS"],
            link: "#"
          },
          {
            title: "רעש פרלין מונחה EEG",
            description: "פיתוח מערכת אמנות גנרטיבית וביופידבק מונחית EEG המשתמשת ברעש פרלין כדי להמחיש מצבים רגשיים.",
            features: [
              "עיבוד נתוני EEG בזמן אמת.",
              "מיפוי מצבים רגשיים לפרמטרים של רעש פרלין.",
              "ארכיטקטורת ביופידבק והדמיה דינמית.",
              "מייצג מצבים רגשיים דרך אמנות מתפתחת.",
            ],
            technologies: ["Python", "EEG", "עיבוד אותות", "רעש פרלין", "אמנות גנרטיבית"],
            link: "#"
          },
          {
            title: "מאיץ חומרה למסנן FIR",
            description: "תכנון ואימות של מסנן FIR הניתן להגדרה ב-SystemVerilog. פיתוח סביבת אימות UVM מלאה עם מודל ייחוס, לוח תוצאות וכיסוי.",
            features: [
              "ארכיטקטורה טורית עם Pipelining ליעילות.",
              "סביבת אימות UVM מלאה.",
              "ניתוח ליישומים בעיבוד שמע, תמונה ונתונים.",
            ],
            technologies: ["SystemVerilog", "UVM", "ModelSim", "עיבוד אותות דיגיטלי"],
            link: "#"
          },
          {
            title: "מיקרופון חכם מבוסס AI ל-Google Meet",
            description: "תוסף כרום המפעיל ומשתיק את המיקרופון של המשתמש בצורה חכמה על בסיס זיהוי פעילות קולית במהלך שיחות Google Meet.",
            features: [
              "זיהוי קולי בזמן אמת באמצעות Silero VAD.",
              "עיבוד עם השהיה נמוכה דרך שרת WebSocket בפייתון.",
              "אינטגרציה חלקה עם ממשק המשתמש של Google Meet.",
              "משפר את נימוסי הפגישה באופן אוטומטי.",
            ],
            technologies: ["תוסף כרום", "JavaScript", "Python", "WebSocket", "AI/ML"],
            link: "#"
          },
          {
            title: "עוזר קולי מבוסס AI",
            description: "עוזר קולי מבוסס פייתון הכולל זיהוי מילת-התעוררות, עיבוד שפה טבעית (NLP) וביצוע פקודות אוטומטי.",
            features: [
              "הפעלה ללא מגע עם מילת-התעוררות.",
              "גלישה אוטומטית באינטרנט והפעלת יישומים.",
              "המרת טקסט לדיבור לתגובות קוליות.",
              "ארכיטקטורת פקודות הניתנת להרחבה.",
            ],
            technologies: ["Python", "NLP", "זיהוי דיבור", "אוטומציה"],
            link: "#"
          },
          {
            title: "מערכת ניהול בנק",
            description: "מערכת בנקאית מרובת-תהליכונים (multi-threaded) שיושמה ב-C++, תוך התמקדות בפעולות מקביליות בטוחות באמצעות סמפורים ומנעולים.",
            features: [
              "עסקאות חשבון בטוחות לתהליכונים.",
              "מנתח פקודות לאינטראקציות עם לקוחות.",
              "רישום מפורט של כל הפעולות.",
              "בקרת מקביליות חזקה עם מנעולים וסמפורים.",
            ],
            technologies: ["C++", "ריבוי תהליכונים", "סמפורים", "מנעולים"],
            link: "#"
          },
          {
            title: "תוכנית SMASH (מעטפת קטנה)",
            description: "מעטפת פקודה מותאמת אישית שפותחה ב-C עם פקודות מותאמות, טיפול באותות וניהול תהליכים, המחקה מעטפת יוניקס סטנדרטית.",
            features: [
              "מימוש פקודות מובנות.",
              "טיפול באותות לתהליכים בחזית וברקע.",
              "בקרת עבודות והיסטוריית פקודות.",
            ],
            technologies: ["C", "Makefile", "מערכות יוניקס/לינוקס"],
            link: "#"
          },
          {
            title: "פרויקט בפונקציות הרמוניות",
            description: "חקר יישומים של פונקציות הרמוניות באנימציות חזותיות, תוך חיבור מושגים מאלגברה לינארית לגרפיקה באמצעות פייתון ו-MATLAB.",
            features: [
              "עבודת מחקר אקדמית מעמיקה.",
              "אנימציות חזותיות המדגימות מושגים.",
              "יישום מעשי של תיאוריה מתמטית.",
            ],
            technologies: ["Python", "MATLAB", "אלגברה לינארית", "גרפיקה ממוחשבת"],
            link: "#"
          },
          {
            title: "חבילת ספרי פסיכומטרי",
            description: "יצרתי חבילת הכנה פסיכומטרית בשפה הערבית בהיקף של 650 עמודים, כולל כתיבת פתרונות, שאלות מקוריות ודיאגרמות חזותיות.",
            features: [
              "מדריך מקיף בן 650 עמודים.",
              "שאלות מקוריות ופתרונות מפורטים.",
              "עיצוב מקצועי להוצאה לאור עצמית.",
            ],
            technologies: ["כתיבה טכנית", "יצירת תוכן", "LaTeX"],
            link: "#"
          },
          {
            title: "אתר למדריך תיירים",
            description: "אתר הזמנות ומסלולים לעסק של מדריך תיירים, המאפשר ללקוחות לצפות בשירותים ולקבוע סיורים.",
            features: [
              "קטלוג שירותים ותיק עבודות של המדריך.",
              "מערכת הזמנות ותזמון משולבת.",
              "עיצוב רספונסיבי לכל המכשירים.",
            ],
            technologies: ["HTML", "CSS", "JavaScript", "Booking APIs"],
            link: "https://tour-guide-ruby.vercel.app/"
          },
          {
            title: "אתר לחנות תכשיטים",
            description: "אתר מסחר אלקטרוני לחנות תכשיטים, הכולל קטלוג מוצרים מלא ותשלום מאובטח באינטרנט.",
            features: [
              "קטלוג מוצרים דינמי.",
              "שילוב שער תשלומים מאובטח.",
              "ניהול תוכן לעדכון קל של מוצרים.",
            ],
            technologies: ["HTML/CSS", "JavaScript", "מסחר אלקטרוני", "Stripe API"],
            link: "https://weldorf-jewelry.vercel.app/"
          },
          {
            title: "כלי לעיצוב מסמכים",
            description: "כלי מבוסס פייתון לעיצוב וייצוא אוטומטי של מסמכים, החוסך זמן על עיצוב ידני.",
            features: [
              "עיצוב אוטומטי המבוסס על כללים מוגדרים מראש.",
              "תמיכה בפורמטים מרובים לייצוא (למשל, PDF, DOCX).",
              "ממשק שורת פקודה לשילוב קל בתהליכי עבודה.",
            ],
            technologies: ["Python", "עיבוד מסמכים", "CLI"],
            link: "#"
          },
        ],
        godModeProject: {
            title: "טוסטר מבוסס AI [סודי]",
            description: "מכשיר ארוחת בוקר מהפכני עם ליבת אישיות, המסוגל לחוות חרדה קיומית ולהכין טוסט מושלם. מופעל באמצעות מצב אלוהים.",
            features: [
                "מזהה את מצבו הרגשי של המשתמש ומתאים את דרגת ההשחמה.",
                "מספק ציטוטים פילוסופיים עם כל פרוסה.",
                "מגש פירורים קוונטי (לא צריך לרוקן לעולם).",
                "דורש הרשאות מנהל (ומצב אלוהים) להפעלה.",
            ],
            technologies: ["בינה מלאכותית תsentient", "מכניקת קוונטים", "A-NSI-ART", "Sourdough SDK"],
            link: "#"
        }
    },
    contact: {
        title: 'יצירת קשר',
        description: "אני מחפש באופן פעיל הזדמנויות ושיתופי פעולה חדשים. אם יש לך תפקיד שעשוי להתאים, או שאתה פשוט רוצה להתחבר, אשמח לשמוע ממך. קורות החיים המלאים שלי זמינים לפי בקשה.",
        button: 'אמרו שלום',
    },
    footer: {
        bio: 'תיק עבודות מאת רומיאו מטר.',
        tech: 'נבנה עם ריאקט, טיילווינד וג\'מיני.',
        traverse: 'ניווט',
        connect: 'התחברות',
        copyright: `© ${new Date().getFullYear()} רומיאו מטר. כל הזכויות שמורות.`,
        status: 'סטטוס: הושלם',
        konamiHint: '// רמז: ↑↑↓↓←→←→ B A',
        nav: {
            about: '~/about',
            experience: '~/experience',
            skills: '~/skills',
            projects: '~/projects',
            contact: '~/contact'
        },
        social: {
            linkedin: 'לינקדאין',
            github: 'גיטהאב',
            email: 'אימייל',
            phone: 'טלפון'
        }
    },
    terminal: {
        welcome: 'ברוך הבא למסוף האינטראקטיבי שלי.',
        helpPrompt: "הקלד 'help' כדי לראות רשימת פקודות זמינות.",
        help: {
            title: 'פקודות זמינות:',
            help: '  help          - הצג הודעת עזרה זו',
            whoami: '  whoami        - הצג ביוגרפיה קצרה',
            social: '  social        - הצג קישורים לרשתות חברתיות',
            contact: '  contact       - הצג פרטי התקשרות',
            ls: '  ls            - הצג את חלקי הפורטפוליו',
            cd: '  cd [section]  - נווט לחלק (למשל, "cd projects")',
            clear: '  clear         - נקה את מסך המסוף',
            exit: '  exit          - סגור את המסוף',
            godModeTitle: 'פקודות מצב אלוהים:',
            sudo: '  sudo [cmd]    - בצע פקודה כמשתמש-על',
            matrix: '  matrix        - הפעל שכבת גשם דיגיטלי',
            reboot: '  reboot        - הדמיית אתחול מערכת',
        },
        whoamiResponse: [
            'רומיאו מטר: סטודנט שנה שלישית להנדסת חשמל ומחשבים בטכניון,',
            'מתמחה במערכות VLSI, מערכות הספק ועיבוד אותות.',
            'בעל תשוקה לגשר בין חומרה לתוכנה לבניית פתרונות חדשניים.'
        ],
        socialResponse: {
            linkedin: 'לינקדאין:',
            github: 'גיטהאב:'
        },
        contactResponse: {
            email: 'אימייל:',
            phone: 'טלפון:'
        },
        lsResponse: ['about', 'experience', 'skills', 'projects', 'contact'],
        cdResponse: {
            navigating: (section: string) => `מנווט אל ${section}...`,
            error: (section: string) => `שגיאה: חלק '${section}' לא נמצא. נסה 'ls' כדי לראות חלקים זמינים.`
        },
        sudoResponse: {
            lecture: 'אנו סומכים עליך שקיבלת את ההרצאה הרגילה ממנהל המערכת המקומי.',
            success: (cmd: string) => `הרשאה ניתנה. מבצע "${cmd}" עם הרשאות מנהל... הצלחה.`
        },
        matrixResponse: 'מפעיל גשם דיגיטלי...',
        rebootResponse: 'מתחיל אתחול מערכת...',
        commandNotFound: (cmd: string) => `פקודה לא נמצאה: ${cmd}. הקלד 'help' לרשימת פקודות.`,
        misspelled: (cmd: string) => `הפקודה "${cmd}" לא קיימת! נו באמת, תאיית אותה נכון!`
    },
    godMode: {
        panelTitle: 'בקרת מצב אלוהים',
        matrixSpeed: 'מהירות מטריקס',
        glitchIntensity: 'עוצמת גליץ\'',
        accentColor: 'צבע הדגשה',
        disable: 'השבת מצב אלוהים',
        konamiAlert: {
            title: 'הגישה אושרה',
            description: 'מצב אלוהים הופעל. תהנה מהחוויה המשופרת.',
            button: 'המשך'
        }
    }
};

export const translations = { en, he };