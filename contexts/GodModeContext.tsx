import React, { createContext, useState, ReactNode } from 'react';

interface GodModeContextType {
  godMode: boolean;
  setGodMode: React.Dispatch<React.SetStateAction<boolean>>;
  showKonamiMessage: boolean;
  setShowKonamiMessage: React.Dispatch<React.SetStateAction<boolean>>;
  matrixSpeed: number;
  setMatrixSpeed: React.Dispatch<React.SetStateAction<number>>;
  glitchIntensity: number;
  setGlitchIntensity: React.Dispatch<React.SetStateAction<number>>;
  colorTheme: string;
  setColorTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const GodModeContext = createContext<GodModeContextType>({
  godMode: false,
  setGodMode: () => {},
  showKonamiMessage: false,
  setShowKonamiMessage: () => {},
  matrixSpeed: 5,
  setMatrixSpeed: () => {},
  glitchIntensity: 1,
  setGlitchIntensity: () => {},
  colorTheme: 'green',
  setColorTheme: () => {},
});

export const GodModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [godMode, setGodMode] = useState(false);
  const [showKonamiMessage, setShowKonamiMessage] = useState(false);
  const [matrixSpeed, setMatrixSpeed] = useState(5); // Default speed (1-10)
  const [glitchIntensity, setGlitchIntensity] = useState(1); // Default intensity (0-2)
  const [colorTheme, setColorTheme] = useState('green'); // 'green', 'amber', 'cyan'

  return (
    <GodModeContext.Provider value={{
      godMode, setGodMode,
      showKonamiMessage, setShowKonamiMessage,
      matrixSpeed, setMatrixSpeed,
      glitchIntensity, setGlitchIntensity,
      colorTheme, setColorTheme
    }}>
      {children}
    </GodModeContext.Provider>
  );
};