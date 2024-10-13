import React from 'react';
import '../assets/styles/Header.css';
import logo from "../../public/favicon.svg";
import m from "../assets/pic/m.svg"

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="pin">
                    <img src={m} alt=">"/>
                </div>
                <ul className="nav-list">
                    <li><a href="#">Как мы работаем</a></li>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">Портфолио</a></li>
                    <li><a href="#">Кейсы</a></li>
                </ul>
            </nav>
            <div className="logo">
                <img src={logo} alt="Yellow Pine Logo"/>
                <span className="logo-text">Yellow Pine</span>
            </div>
        </header>
    );
};

export default Header;
