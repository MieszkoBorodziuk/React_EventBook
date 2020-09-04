import React from 'react';
import '../Styles/sass/header.sass';
import logo from '../Images/EventBook_logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
               <NavLink to="/"><img src={logo} alt="logo"/></NavLink> 
            </div>
            <div className="navigation-container">
            <NavLink to="/addevent"><button className="add_event_btn">Dodaj Event</button></NavLink>
            <button className="account_btn">Moje konto</button>
            </div>
        </div>
    );
}

export default Header;