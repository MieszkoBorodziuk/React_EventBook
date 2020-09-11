import React, { Component } from 'react';
import '../Styles/sass/header.sass';
import logo from '../Images/EventBook_logo.png';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {
        accountList: false

    }

    ShowAccountList = () => {

        this.setState(prevState =>({
            accountList: !prevState.accountList
        }))
    }
    render() {
        return (
            <>
                <div className="header">
                    <div className="logo">
                        <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                    </div>
                    <div className="navigation-container">
                        <NavLink to="/addevent"><button className="add_event_btn">Dodaj Event</button></NavLink>
                        <button onClick={this.ShowAccountList} className="account_btn">Moje konto</button>
                    </div>
                    {this.state.accountList ?
                                <div className="header_account-list" >
                                    <div className="header_account-list_loginBtnContainer"><button className="header_account-list_loginBtn">Log In</button></div>
                                    <div className="header_account-list_newAccountBtn">Create new account</div>
                                </div> : null
                            }
                </div>

            </>
        );
    }
}

export default Header;