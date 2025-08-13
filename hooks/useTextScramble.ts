import { useState, useEffect, useRef } from 'react';

export const useTextScramble = (text: string, isVisible: boolean, delay: number = 200) => {
    const [currentText, setCurrentText] = useState(text);
    const hasAnimated = useRef(false);
    
    useEffect(() => {
        const letters = "!<>-_\\/[]{}—=+*^?#";
        let interval: number | undefined;

        const scramble = () => {
            let iteration = 0;
            
            interval = window.setInterval(() => {
                setCurrentText(current => 
                    current
                        .split('')
                        .map((letter, index) => {
                            if(index < iteration) {
                                return text[index];
                            }
                            if(text[index] === ' ') return ' ';
                            return letters[Math.floor(Math.random() * letters.length)];
                        })
                        .join('')
                );

                if(iteration >= text.length){
                    window.clearInterval(interval);
                    setCurrentText(text); // Ensure it ends on the correct text
                }
                
                iteration += 1 / 3;
            }, 30);
        };

        if (isVisible && !hasAnimated.current) {
            hasAnimated.current = true;
            const timeoutId = setTimeout(scramble, delay);
            return () => clearTimeout(timeoutId);
        }
        
        return () => window.clearInterval(interval);
    }, [isVisible, text, delay]);
    
    return currentText;
};

export default useTextScramble;
