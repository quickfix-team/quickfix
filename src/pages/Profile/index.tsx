import { FormAddress } from '../../components/Form/FormAddress';
import { FormContact } from '../../components/Form/FormContact';
import { FormImgProfile } from '../../components/Form/FormImgProfile';
import { ContainerPattern } from '../../styles/Containers';
import { ProfileStyles } from './style';
import { EnableDisableButton } from '../../styles/Buttons';


export const Profile = () => {
    return (
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
                <FormImgProfile />
            </section>
            <section>
                <div>
                    <div>
                        <ContainerPattern>
                            <FormAddress />
                        </ContainerPattern>
                        <ContainerPattern>
                            <FormContact />
                        </ContainerPattern>
                    </div>
                    <EnableDisableButton color='var(--color-negative)'>
                        Desativado
                    </EnableDisableButton>
                </div>
            </section>
        </ProfileStyles>
    );
};
