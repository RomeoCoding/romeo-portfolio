import React, { useState, useEffect, useRef, useContext } from 'react';
import { XIcon } from './Icons';
import { SOCIAL_LINKS, TERMINAL_DATA } from '../constants';
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
  const t = TERMINAL_DATA;
  const [history, setHistory] = useState<React.ReactNode[]>(() => [
    <div key="welcome">{t.welcome}</div>,
    <div key="help-prompt" dangerouslySetInnerHTML={{ __html: t.helpPrompt.replace(/'help'/g, `<span class="text-[var(--primary-color)]">'help'</span>`)}}></div>,
  ]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const commandProcessor = (command: string, args: string[]) => {
    switch (command.toLowerCase()) {
      case 'help': {
        const baseCommands = [
          t.help.title,
          t.help.help,
          t.help.whoami,
          t.help.social,
          t.help.contact,
          t.help.ls,
          t.help.cd,
          t.help.clear,
          t.help.exit,
        ];
        if (godMode) {
          return [
            ...baseCommands,
            '',
            t.help.godModeTitle,
            t.help.sudo,
            t.help.matrix,
            t.help.reboot,
          ]
        }
        return baseCommands;
      }
      case 'whoami':
        return t.whoamiResponse;
      case 'social':
        return [
          `${t.socialResponse.linkedin} <a href="${SOCIAL_LINKS.linkedin}" target="_blank" rel="noopener noreferrer" class="text-[var(--primary-color)] hover:underline">${SOCIAL_LINKS.linkedin}</a>`,
          `${t.socialResponse.github}   <a href="${SOCIAL_LINKS.github}" target="_blank" rel="noopener noreferrer" class="text-[var(--primary-color)] hover:underline">${SOCIAL_LINKS.github}</a>`
        ];
      case 'contact':
        return [
          `${t.contactResponse.email} <a href="${SOCIAL_LINKS.email}" class="text-[var(--primary-color)] hover:underline">romeomattar239@gmail.com</a>`,
          `${t.contactResponse.phone} <a href="${SOCIAL_LINKS.phone}" class="text-[var(--primary-color)] hover:underline">054-569-7874</a>`
        ];
      case 'ls':
        return t.lsResponse;
      case 'cd': {
        const section = args[0];
        if (t.lsResponse.includes(section)) {
          const dummyEvent = new MouseEvent('click') as unknown as React.MouseEvent<HTMLAnchorElement>;
          onNavClick(dummyEvent, `#${section}`);
          setTimeout(onClose, 300); // Close terminal after a short delay
          return [t.cdResponse.navigating(section)];
        } else {
          return [t.cdResponse.error(section)];
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
                 return [t.sudoResponse.success(args.join(' '))];
            }
            return [t.sudoResponse.lecture];
        }
        return [`sudo: command not found`];
      case 'matrix':
        if(godMode) {
            onCommand('matrix');
            return [t.matrixResponse];
        }
        return [`matrix: command not found`];
      case 'reboot':
         if(godMode) {
            onCommand('reboot');
            return [t.rebootResponse];
        }
        return [`reboot: command not found`];

      default: {
          let validCommands = ['help', 'whoami', 'social', 'contact', 'ls', 'cd', 'clear', 'exit'];
          if (godMode) {
              validCommands.push('sudo', 'matrix', 'reboot');
          }

          for (const validCmd of validCommands) {
              if (command.length > 2 && levenshtein(command, validCmd) <= 2) {
                  return [t.misspelled(command)];
              }
          }

          return [t.commandNotFound(command)];
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