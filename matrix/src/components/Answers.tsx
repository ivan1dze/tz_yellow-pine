import React from 'react';
import '../assets/styles/Answers.css';
import visual from '../assets/anim/visual.gif'
import cost from '../assets/anim/cost.gif'
import ad from '../assets/anim/ad.gif'
import fresh from '../assets/anim/fresh.gif'

const Answers: React.FC = () => {
    return (
        <div className="answers-container">
            <div className="get-answer">
                <p>И получаете ответы</p>
            </div>
            <div className="answers-grid">
                <div className="answer-item">
                    <img src= {visual} alt="Как должен выглядеть ваш сайт" />
                    <p>Как должен выглядеть ваш сайт</p>
                </div>
                <div className="answer-item">
                    <img src= {cost} alt="Как выгодно показать клиентам свои услуги" />
                    <p>Как выгодно показать клиентам свои услуги</p>
                </div>
                <div className="answer-item">
                    <img src= {ad} alt="На какие страницы и как вывести рекламу" />
                    <p>На какие страницы и как вывести рекламу</p>
                </div>
                <div className="answer-item">
                    <img src= {fresh} alt="Как сделать сайт актуальным на ближайшие пару лет" />
                    <p>Как сделать сайт актуальным на ближайшие пару лет</p>
                </div>
            </div>
        </div>
    );
};

export default Answers;
