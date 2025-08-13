import React, { useState, useEffect, useRef, useContext } from 'react';
import { XIcon } from './Icons';
import { SOCIAL_LINKS } from '../constants';
import { GodModeContext } from '../contexts/GodModeContext';

interface TerminalProps {
  onClose: () => void;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement> | MouseEvent, href: string) => void;
  onCommand: (command: 'matrix' | 'reboot') => void;
}

// Levenshtein distance function to check for misspellings
const levenshtein = (s1: string, s2: string): number => {
  if (s1.length > s2.length) [s1, s2] = [s2, s1];
  const distances = Array.from({ length: s1.length + 1 }, (_, i) => i);
  for (let j = 0; j < s2.length; j++) {
    let previousDiagonal = distances[0];
    distances[0]++;
    for (let i = 0; i < s1.length; i++) {
      const currentDiagonal = distances[i+1];
      if (s2[j] === s1[i]) {
        distances[i+1] = previousDiagonal;
      } else {
        distances[i+1] = Math.min(previousDiagonal, distances[i], distances[i+1]) + 1;
      }
      previousDiagonal = currentDiagonal;
    }
  }
  return distances[s1.length];
};


const Terminal: React.FC<TerminalProps> = ({ onClose, onNavClick, onCommand }) => {
  const { godMode } = useContext(GodModeContext);
  const [history, setHistory] = useState<React.ReactNode[]>(() => [
    <div key="welcome">Welcome to my interactive terminal.</div>,
    <div key="help-prompt">Type <span className="text-[var(--primary-color)]">'help'</span> to see a list of available commands.</div>,
  ]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const commandProcessor = (command: string, args: string[]) => {
    switch (command.toLowerCase()) {
      case 'help': {
        const baseCommands = [
          'Available commands:',
          '  help          - Show this help message',
          '  whoami        - Display a short bio',
          '  social        - List social media links',
          '  contact       - Show contact information',
          '  ls            - List portfolio sections',
          '  cd [section]  - Navigate to a section (e.g., "cd projects")',
          '  clear         - Clear the terminal screen',
          '  exit          - Close the terminal',
        ];
        if (godMode) {
          return [
            ...baseCommands,
            '',
            'GOD MODE COMMANDS:',
            '  sudo [cmd]    - Execute command as superuser',
            '  matrix        - Activate the digital rain overlay',
            '  reboot        - Simulate a system reboot',
          ]
        }
        return baseCommands;
      }
      case 'whoami':
        return [
          'Romeo Mattar: A dedicated third-year Electrical and Computer Engineering student at Technion,',
          'specializing in VLSI, power systems, and signal processing.',
          'Passionate about bridging hardware and software to build innovative solutions.'
        ];
      case 'social':
        return [
          `LinkedIn: <a href="${SOCIAL_LINKS.linkedin}" target="_blank" rel="noopener noreferrer" class="text-[var(--primary-color)] hover:underline">${SOCIAL_LINKS.linkedin}</a>`,
          `GitHub:   <a href="${SOCIAL_LINKS.github}" target="_blank" rel="noopener noreferrer" class="text-[var(--primary-color)] hover:underline">${SOCIAL_LINKS.github}</a>`
        ];
      case 'contact':
        return [
          `Email: <a href="${SOCIAL_LINKS.email}" class="text-[var(--primary-color)] hover:underline">romeomattar239@gmail.com</a>`,
          `Phone: <a href="${SOCIAL_LINKS.phone}" class="text-[var(--primary-color)] hover:underline">054-569-7874</a>`
        ];
      case 'ls':
        return ['about', 'experience', 'skills', 'projects', 'contact'];
      case 'cd': {
        const section = args[0];
        const validSections = ['about', 'experience', 'skills', 'projects', 'contact'];
        if (validSections.includes(section)) {
          const dummyEvent = new MouseEvent('click') as unknown as React.MouseEvent<HTMLAnchorElement>;
          onNavClick(dummyEvent, `#${section}`);
          setTimeout(onClose, 300); // Close terminal after a short delay
          return [`Navigating to ${section}...`];
        } else {
          return [`Error: Section '${section}' not found. Try 'ls' to see available sections.`];
        }
      }
      case 'clear':
        setHistory([]);
        return [];
      case 'exit':
        onClose();
        return [];
      
      // God Mode Commands
      case 'sudo':
        if (godMode) {
            if (args.length > 0) {
                 return [`Permission granted. Executing "${args.join(' ')}" with root privileges... Success.`];
            }
            return ['We trust you have received the usual lecture from the local System Administrator.'];
        }
        return [`sudo: command not found`];
      case 'matrix':
        if(godMode) {
            onCommand('matrix');
            return ['Activating digital rain...'];
        }
        return [`matrix: command not found`];
      case 'reboot':
         if(godMode) {
            onCommand('reboot');
            return ['Initiating system reboot...'];
        }
        return [`reboot: command not found`];

      default: {
          let validCommands = ['help', 'whoami', 'social', 'contact', 'ls', 'cd', 'clear', 'exit'];
          if (godMode) {
              validCommands.push('sudo', 'matrix', 'reboot');
          }

          for (const validCmd of validCommands) {
              if (command.length > 2 && levenshtein(command, validCmd) <= 2) {
                  return [`"${command}" doesn't exist! Come on spell it correct!`];
              }
          }

          return [`Command not found: ${command}. Type 'help' for a list of commands.`];
        }
    }
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const fullCommand = inputValue.trim();
      const [command, ...args] = fullCommand.split(' ');
      
      setInputValue('');

      if (!command) {
        setHistory(prev => [...prev, <div key={prev.length} className="flex gap-2"><span>&gt;</span> <span className="flex-1"></span></div>]);
        return;
      }
      
      const commandEntry = <div key={history.length} className="flex gap-2"><span>&gt;</span> <span className="flex-1">{fullCommand}</span></div>;
      
      const output = commandProcessor(command.toLowerCase(), args);
      const formattedOutput = output.map((line, i) => <div key={`${fullCommand}-${i}`} dangerouslySetInnerHTML={{ __html: line }}></div>);
      
      if (command.toLowerCase() !== 'clear') {
         setHistory(prevHistory => [...prevHistory, commandEntry, ...formattedOutput]);
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    bodyRef.current?.scrollTo(0, bodyRef.current.scrollHeight);
  }, [history]);

  const handleWrapperClick = () => {
    inputRef.current?.focus();
  };
  
  const promptUser = godMode ? 'root@portfolio' : 'guest@portfolio';
  const promptSymbol = godMode ? '#' : '$';

  return (
    <div className="terminal-overlay animate-fade-in" onClick={onClose}>
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-header">
          <div>/home/romeo/portfolio - zsh</div>
          <button onClick={onClose} className="text-[var(--text-muted-color)] hover:text-white transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <div ref={bodyRef} className="terminal-body" onClick={handleWrapperClick}>
          {history.map((line, index) => <div key={index} className="mb-1">{line}</div>)}
          <div className="terminal-line">
            <span className="terminal-prompt">
              <span className="terminal-prompt-user">{promptUser}</span>:
              <span className="text-[var(--text-muted-color)]">~</span>{promptSymbol}
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleCommand}
              className="terminal-input ml-2"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;