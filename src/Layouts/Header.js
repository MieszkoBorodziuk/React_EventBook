import React, { useContext, useState } from 'react';
import '../Styles/sass/header.sass';
import logo from '../Images/EventBook_logo.png';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../store/StoreProvider';
import LoginForm from '../components/LoginForm/LoginForm';
import Modal from '../components/Modal/Modal';



const Header = () => {
    const [isModalOpenLoginForm, setisModalOpenLoginForm] = useState(false);
    const [isModalOpenAccountList, setisModalOpenAccountList] = useState(false);
    const { user, setUser } = useContext(StoreContext);


    const handleOnClose = () => {
        setisModalOpenAccountList(false);
        setisModalOpenLoginForm(false);
    }
    


    const handleOnClick = () => {
        if (Boolean(user)) {
            setUser(null)
        } else {
            setisModalOpenLoginForm(true);
        }
    }

    const setProperlyLabel = Boolean(user) ? 'Log out' : 'Log in'

    const handlerShowAccountList = () => {
        setisModalOpenAccountList(true);
    }

    return (
        <>
            <div className="header">
                <div className="logo">
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                </div>
                <div className="navigation-container">
                    <NavLink to="/addevent"><button className="add_event_btn">Dodaj Event</button></NavLink>
                    <button onClick={handlerShowAccountList} className="account_btn">Moje konto</button>
                </div>
                <Modal handleOnClose={handleOnClose} isOpen={isModalOpenAccountList} sholudBeCloseOnOutsideClick={true} className="account-list-modal">
                    <button onClick={handleOnClick} className="header_account-list_loginBtn">{setProperlyLabel}</button>
                    <div className="header_account-list_newAccountBtn">Create new account</div>
                </Modal>
                <LoginForm handleOnClose={handleOnClose} isModalOpen={isModalOpenLoginForm} />
            </div>

        </>
    );

}

export default Header;