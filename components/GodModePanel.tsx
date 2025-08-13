import React, { useContext } from 'react';
import { GodModeContext } from '../contexts/GodModeContext';
import { SlidersHorizontalIcon, PaintBrushIcon, PowerIcon } from './Icons';

const GodModePanel: React.FC = () => {
    const {
        matrixSpeed, setMatrixSpeed,
        glitchIntensity, setGlitchIntensity,
        colorTheme, setColorTheme,
        setGodMode
    } = useContext(GodModeContext);

    return (
        <div className="god-mode-panel text-[var(--text-muted-color)]">
            <h3 className="text-lg font-bold text-[var(--primary-color)] mb-4 text-center">God Mode Controls</h3>
            
            <div className="space-y-4">
                {/* Matrix Speed */}
                <div>
                    <label htmlFor="matrix-speed" className="text-sm font-medium flex items-center gap-2"><SlidersHorizontalIcon className="w-4 h-4" /> Matrix Speed</label>
                    <input
                        id="matrix-speed"
                        type="range"
                        min="1"
                        max="10"
                        value={matrixSpeed}
                        onChange={(e) => setMatrixSpeed(Number(e.target.value))}
                        className="w-full h-2 bg-gray-600/50 rounded-lg appearance-none cursor-pointer"
                    />
                </div>

                {/* Glitch Intensity */}
                <div>
                    <label htmlFor="glitch-intensity" className="text-sm font-medium flex items-center gap-2"><SlidersHorizontalIcon className="w-4 h-4" /> Glitch Intensity</label>
                    <input
                        id="glitch-intensity"
                        type="range"
                        min="0"
                        max="3"
                        step="0.1"
                        value={glitchIntensity}
                        onChange={(e) => setGlitchIntensity(Number(e.target.value))}
                        className="w-full h-2 bg-gray-600/50 rounded-lg appearance-none cursor-pointer"
                    />
                </div>

                {/* Color Theme */}
                <div>
                     <label className="text-sm font-medium flex items-center gap-2 mb-2"><PaintBrushIcon className="w-4 h-4" /> Accent Color</label>
                     <div className="flex justify-between gap-2">
                         <button onClick={() => setColorTheme('green')} className={`w-full py-1 text-sm rounded ${colorTheme === 'green' ? 'bg-green-500 text-white' : 'bg-gray-600/50'}`}>Green</button>
                         <button onClick={() => setColorTheme('amber')} className={`w-full py-1 text-sm rounded ${colorTheme === 'amber' ? 'bg-amber-500 text-white' : 'bg-gray-600/50'}`}>Amber</button>
                         <button onClick={() => setColorTheme('cyan')} className={`w-full py-1 text-sm rounded ${colorTheme === 'cyan' ? 'bg-cyan-500 text-white' : 'bg-gray-600/50'}`}>Cyan</button>
                     </div>
                </div>

                 {/* Disable God Mode */}
                  <div>
                    <button 
                        onClick={() => setGodMode(false)}
                        className="w-full mt-2 py-2 text-sm rounded flex items-center justify-center gap-2 transition-colors bg-red-800/80 text-white hover:bg-red-700/80"
                    >
                        <PowerIcon className="w-4 h-4" /> Disable God Mode
                    </button>
                 </div>
            </div>
        </div>
    );
};

export default GodModePanel;