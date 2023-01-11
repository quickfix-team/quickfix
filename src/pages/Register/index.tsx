import { Footer } from '../../components/Footer';
import { FormRegister } from '../../components/Form/FormRegister';
import { Header } from '../../components/Header';
import { Link } from '../../styles/Buttons';
import { FormCard } from '../../styles/Cards';
import { Navigate } from 'react-router';

export const Register = () => {

    const token = localStorage.getItem('userToken');
    if (token) return <Navigate to='/profile' replace />;

    return (
        <>
            <Header />
            <FormCard>
                <div>
                    <h2>Cadastro</h2>
                    <FormRegister />
                    <Link to='/login'>Voltar para a página de login</Link>
                </div>
            </FormCard>
            <Footer />
        </>
    );
};
