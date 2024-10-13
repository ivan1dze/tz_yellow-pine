import React from 'react';
import MatrixBG from './components/MatrixBG';
import Header from './components/Header';
import Answers from "./components/Answers.tsx";
import TextChanger from "./components/TextChanger.tsx";
import gifImage from '../src/assets/anim/face.gif';
import './App.css';


const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <div className="matrix">
                <MatrixBG/>
                <div className="text-overlay">
                    <h1 className="how-we-work">Как мы работаем?</h1>
                    <p className="question-text">Вы приходите с вопросами:</p>
                    <div className="changer"><TextChanger/></div>
                </div>
                <img src={gifImage} alt="Animated GIF" className="gif-overlay"/>
            </div>
            <Answers/>
        </div>
    );
};

export default App;
