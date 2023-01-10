import { Footer } from '../../components/Footer';
import { ButtonPrimaryStyles } from '../../styles/Buttons';
import { ProfileStyles } from './style';

export const Profile = () => {
    return (
        <>
            <ProfileStyles>
                <section>
                    <div>
                        <div>
                            <img
                                src='https://cdn.pixabay.com/photo/2013/07/12/17/22/detective-152085_960_720.png'
                                alt='img-profile'
                            />
                        </div>
                        <div>
                            <p>Nome: Conserta Smart</p>
                            <p>Email: consertaSmart@gmail.com</p>
                            <p>CNPJ: xx.xxx.xxx/0001-xx</p>
                        </div>
                    </div>
                    <form>
                        <ButtonPrimaryStyles>Inserir Imagem</ButtonPrimaryStyles>
                    </form>
                </section>
            </ProfileStyles>
            <Footer />
        </>
    );
};
