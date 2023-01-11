import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { DivModal } from './style';

export const Modal = () => {
    const { logoutRequest, showModal, setShowModal } = useContext(UserContext);
    const token = localStorage.getItem('userToken');

    return showModal ? (
        <DivModal onClick={() => setShowModal(false)}>
            {token ? (
                <div>
                    <button onClick={() => logoutRequest()}>Logout</button>
                </div>
            ) : (
                <div>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/register'}>Cadastrar</Link>
                    <Link to={'/dashboard'}>Solicitar Orçamentos</Link>
                </div>
            )}
        </DivModal>
    ) : null;
};
