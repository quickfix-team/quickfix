import { FormLogin } from '../../components/Form/FormLogin';
import { Header } from '../../components/Header';
import { Link } from '../../styles/Buttons';
import { FormCard } from '../../styles/Cards';

export const Login = () => {
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
        </>
    );
};
