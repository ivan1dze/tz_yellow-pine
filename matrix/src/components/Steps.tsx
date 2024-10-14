import React, { useState } from 'react';
import '../assets/styles/Steps.css';
import coding from '../assets/anim/coding.webp'; // Путь к изображению
import tesla from '../assets/anim/tesla.gif'
import smm from '../assets/anim/smm.gif'
import analization from '../assets/pic/analization.jpg';


const categories = ['UX Design', 'React', 'Брендинг', 'Стратегия', 'Таргет', 'Воронка продаж', 'Анализ конкурентов', 'Копирайтинг'];

const stepsData = [
    {
        id: 1,
        week: '1 неделя',
        title: 'Изучаем ваш бизнес',
        description: 'Результатом этого будет стратегия позиционирования на рынке.',
        image: coding,
    },
    {
        id: 2,
        week: '2 недели',
        title: 'Работаем с макетами, пишем код',
        description: 'Мы получаем сайт, который является инструментом продаж.',
        image: tesla,
    },
    {
        id: 3,
        week: '3 недели',
        title: 'Улучшаем конверсии, изучаем клиентов',
        description: 'Проверяем на практике наши идеи.',
        image: smm,
    },
    {
        id: 4,
        week: '1 месяц',
        title: 'Запуск и анализ',
        description: 'Анализируем результаты и вносим коррективы.',
        image: analization,
    },
];

const Steps: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <div className="steps-container">
            <h2 className="steps-title">Этапы работ</h2>
            <div className="categories">
                {categories.map((category, index) => (
                    <span key={index} className="category">{category}</span>
                ))}
            </div>
            <div className="steps">
                {stepsData.map((step, index) => (
                    <div
                        key={step.id}
                        className={`step ${activeStep === index ? 'active' : ''}`}
                        onMouseEnter={() => setActiveStep(index)}
                        onMouseLeave={() => setActiveStep(null)}
                    >
                        <div className="week">{step.week}</div>
                        <div className="step-title">{step.title}</div>
                        <div className="step-description">{step.description}</div>
                        <div className={`step-image ${activeStep === index ? 'show' : ''}`} style={{ backgroundImage: `url(${step.image})` }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;
