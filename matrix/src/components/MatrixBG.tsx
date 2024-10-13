import React, { useEffect, useRef } from 'react';

const MatrixBG: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const matrixChars =
            'a b c d e f g h I j k l m n o bguhreuivherbeubheobjeojbebe q r s t u v w x y z ヱエェケセネヘ123456789 !"№;%:?*()+/ヮギジヂィフフャラリ';
        const matrixArray = matrixChars.split('');

        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops: number[] = Array(Math.floor(columns)).fill(1);

        const drawMatrix = () => {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = '#0F0'; // Зеленый цвет символов
            context.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                context.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(drawMatrix, 50);

        return () => clearInterval(interval);
    }, []);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default MatrixBG;