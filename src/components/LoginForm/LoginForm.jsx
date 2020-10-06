import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import Modal from '../Modal/Modal';
import './LoginForm.css';

const LoginForm = ({ handleOnClose, isModalOpen }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [validateMessage, setValidateMessage] = useState('');

    const handleOnChangeLogin = event => setLogin(event.target.value);
    const handleOnChangePassword = event => setPassword(event.target.value);
    const handleOnCloseModal = event => {
        event.preventDefault();
        handleOnClose();
    };

    //strzał do api (do Uzupełnienia jak bedzie serwer)
    const handleOnSubmit = async event => {
        event.preventDefault();
        
    }

    const { setUser } = useContext(StoreContext);

    const validateMessageComponent = validateMessage.length ? <p>{validateMessage}</p> : null;

    return (
        <Modal handleOnClose={handleOnClose} isOpen={isModalOpen} sholudBeCloseOnOutsideClick={true} className="loginForm-modal">
            {validateMessageComponent}
            <form className="loginForm" method="post" onSubmit={handleOnSubmit}>
                <div className="row">
                    <label> Login:
                        <input onChange={handleOnChangeLogin} type="text" value={login} />
                    </label>
                </div>
                <div className="row">
                    <label> Password:
                        <input onChange={handleOnChangePassword} type="password" value={password} />
                    </label>
                </div>
                <div className="loginForm__Btn">
                    <button type="submit">Zaloguj się</button>
                    <button onClick={handleOnCloseModal} type="button">Anuluj</button>
                </div>
            </form>
        </Modal>
    );
}

export default LoginForm;

