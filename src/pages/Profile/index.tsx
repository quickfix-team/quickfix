import { ButtonPrimaryStyles } from '../../styles/Buttons';
import { ProfileStyles } from './style';

export const Profile = () => {
    return (
        <ProfileStyles>
            <section className='container-main-header'>
                <div className='container-informations'>
                    <div className='container-img-profile'>
                        <img
                            src='https://cdn.pixabay.com/photo/2013/07/12/17/22/detective-152085_960_720.png'
                            alt='img-profile'
                            className='img-profile'
                        />
                    </div>
                    <div className='container-information-profile'>
                        <p className='text-information'>Nome: Conserta Smart</p>
                        <p className='text-information'>Email: consertaSmart@gmail.com</p>
                        <p className='text-information'>CNPJ: xx.xxx.xxx/0001-xx</p>
                    </div>
                </div>
                <form className='form-img-submission'>
                    <ButtonPrimaryStyles>Inserir Imagem</ButtonPrimaryStyles>
                </form>
            </section>
        </ProfileStyles>
    );
};
