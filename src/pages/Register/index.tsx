import { FormRegister } from '../../components/Form/FormRegister';
import { Link } from '../../styles/Buttons';
import { FormCard } from '../../styles/Cards';

export const Register = () => {
    return (
        <FormCard>
            <div>
                <h2>Cadastro</h2>
                <FormRegister />
                <Link to='/login'>Voltar para a página de login</Link>
            </div>
        </FormCard>
    );
};
