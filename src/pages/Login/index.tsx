import { Footer } from '../../components/Footer';
import { FormLogin } from '../../components/Form/FormLogin';
import { Header } from '../../components/Header';
import { Link } from '../../styles/Buttons';
import { FormCard } from '../../styles/Cards';
import { Navigate } from 'react-router';

export const Login = () => {

    const token = localStorage.getItem('userToken');
    if (token) return <Navigate to='/profile' replace />;
    
    return (
        <>
            <Header />
            <FormCard>
                <div>
                    <h2>Login</h2>
                    <FormLogin />
                    <Link to='/register'>Ainda não possui registro?</Link>
                </div>
            </FormCard>
            <Footer />
        </>
    );
};
