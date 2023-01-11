import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Navigate } from 'react-router';

export const Dashboard = () => {

    const token = localStorage.getItem('userToken');
    if (token) return <Navigate to='/profile' replace />;

    return (
        <>
            <Header />
            <Footer />
        </>
    );
};
