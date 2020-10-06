import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';


const Modal = ({ children, handleOnClose, isOpen, sholudBeCloseOnOutsideClick, className }) => {

    const modalRef = useRef(null);
    const previousActiveElement = useRef(null);

   useEffect(() => {
        if (!modalRef.current) {
            return;
        }
        const { current: modal } = modalRef;
        if (isOpen) {
            previousActiveElement.current = document.activeElement;
            modal.showModal();
        } else if (previousActiveElement.current) {
            modal.close();
            previousActiveElement.current.focus();

        }
    }, [isOpen]);

    useEffect(() => {
        const { current: modal } = modalRef;

        const handleCancel = event => {
            event.preventDefault();
            handleOnClose();
        };
        modal.addEventListener('cancel', handleCancel);

        return () => {
            modal.removeEventListener('cancel', handleCancel);
        }
    }, [handleOnClose])

    const handleOutsideClick = ({ target }) => {
        const { current } = modalRef;

        if (sholudBeCloseOnOutsideClick && target === current) {
            handleOnClose();
        }
    }



    return ReactDOM.createPortal((
        <dialog className={className} ref={modalRef} onClick={handleOutsideClick}>
            {children}
        </dialog>
    ), document.body);
}

export default Modal;