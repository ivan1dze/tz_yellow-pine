import React, { useState, useEffect } from 'react';

const TextChanger: React.FC = () => {
    const texts = [
        'Сколько стоит разработка сайта?',
        'Сделаете сайт как у конкурента?',
        'Какие технологии используете?',
        'Предоставляете ли поддержку после запуска?',
        'Как долго займет разработка?',
        'Можно ли внести изменения в процессе разработки?',
        'Есть ли у вас примеры успешных проектов?',
        'Какую CMS вы рекомендуете?',
        'Как вы контролируете качество разработки?',
        'Как вы работаете с клиентами во время проекта?',
        'Как вы решаете проблемы, если они возникают?',
        'Какие услуги вы предоставляете после завершения проекта?',
        'Можно ли получить детализированный отчет о ходе работы?',
        'Как вы обеспечиваете безопасность сайта?',
        'Есть ли у вас опыт работы с SEO-оптимизацией?'
    ];

    const [currentText, setCurrentText] = useState(texts[0]);
    const [index, setIndex] = useState(0);
    const [color, setColor] = useState('blue'); // Начальный цвет

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Интервал в 2 секунды

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentText(texts[index]);
        setColor(Math.random() > 0.5 ? 'blue' : 'red'); // Случайный выбор цвета
    }, [index]);

    return (
        <p style={{ color }}>{currentText}</p> // Применение цвета к тексту
    );
};

export default TextChanger;
