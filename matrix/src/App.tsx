import React from 'react';
import MatrixBG from './components/MatrixBG';
import Header from './components/Header';
import TextChanger from "./components/TextChanger.tsx";
import './App.css';


const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <div className="matrix">
                <MatrixBG/>
                <div className="text-overlay">
                    <h1>- Как мы работаем?</h1>
                </div>
                <div className="text-below">
                    <p className= "question-text">Вы приходите с вопросами</p>
                    <TextChanger/>
                </div>
                
            </div>
        </div>
    );
};

export default App;
