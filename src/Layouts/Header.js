import React from 'react';
import '../Styles/sass/header.sass';
import logo from '../Images/EventBook_logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div>jakiś napis</div>
            <div>Menu</div>
            <div>Zaloguj sie</div>
            <div>Ustaweinia</div>
        </div>
    );
}

export default Header;