import { Footer } from '../../components/Footer';
import { FormLogin } from '../../components/Form/FormLogin';
import { Link } from '../../styles/Buttons';
import { FormCard } from '../../styles/Cards';

export const Login = () => {
    return (
        <>
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
