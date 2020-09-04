import React from 'react';
import '../Styles/sass/header.sass';
import logo from '../Images/EventBook_logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="navigation-container">
            <button className="add_event_btn">Dodaj Event</button>
            <button className="account_btn">Moje konto</button>
            </div>
        </div>
    );
}

export default Header;