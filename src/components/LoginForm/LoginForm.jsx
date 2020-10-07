import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import request from '../../helpers/request';
import { StoreContext } from '../../store/StoreProvider';
import Modal from '../Modal/Modal';
import './LoginForm.css';

const LoginForm = ({ handleOnClose, isModalOpen }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [validateMessage, setValidateMessage] = useState('');
    const { setUser } = useContext(StoreContext);

    const handleOnChangeLogin = event => setLogin(event.target.value);
    const handleOnChangePassword = event => setPassword(event.target.value);
    const handleOnCloseModal = event => {
        event.preventDefault();
        handleOnClose();
    };

    const resetStateOFInputs = () => {
        setLogin('');
        setPassword('');
        setValidateMessage('');
    }

    const handleOnSubmit = async event => {
        event.preventDefault();
        const { data, status } = await request.post(
            '/users', 
            { login, password }
        );
        if (status === 200) {
            setUser(data.user);
            resetStateOFInputs();
            handleOnClose();
        } else {
            setValidateMessage(data.message);
        }
    }

   


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

