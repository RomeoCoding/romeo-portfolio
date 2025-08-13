import { useEffect, useState, useCallback } from 'react';

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export const useKonamiCode = (callback: () => void) => {
    const [keys, setKeys] = useState<string[]>([]);

    const keydownHandler = useCallback((e: KeyboardEvent) => {
        setKeys(prevKeys => {
            const updatedKeys = [...prevKeys, e.key];
            if (updatedKeys.join('').includes(konamiCode.join(''))) {
                callback();
                return [];
            }
            if (updatedKeys.length > konamiCode.length) {
                return updatedKeys.slice(updatedKeys.length - konamiCode.length);
            }
            return updatedKeys;
        });
    }, [callback]);

    useEffect(() => {
        window.addEventListener('keydown', keydownHandler);
        return () => {
            window.removeEventListener('keydown', keydownHandler);
        };
    }, [keydownHandler]);
};
