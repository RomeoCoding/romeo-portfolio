import React, { useRef, useEffect } from 'react';

interface MatrixBackgroundProps {
    isActive?: boolean;
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({ isActive = true }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!isActive) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        const parent = canvas.parentElement;
        if (!parent) return;

        let animationFrameId: number;
        
        const resizeCanvas = () => {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        };
        resizeCanvas();

        const columns = Math.floor(canvas.width / 20);
        const drops = Array.from({ length: columns }).map(() => Math.floor(Math.random() * canvas.height));
        const chars = "01".split('');

        const draw = () => {
            const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            
            const fadeColor = theme === 'dark'
                ? 'rgba(2, 6, 23, 0.05)'
                : 'rgba(248, 250, 252, 0.05)';

            ctx.fillStyle = fadeColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            const rainColor = theme === 'dark' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(0, 0, 0, 0.03)';

            ctx.fillStyle = rainColor;
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * 20, drops[i] * 20);
                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            animationFrameId = window.requestAnimationFrame(draw);
        };
        draw();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [isActive]);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>;
};

export default MatrixBackground;
