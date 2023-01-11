import { FormAddress } from '../../components/Form/FormAddress';
import { FormContact } from '../../components/Form/FormContact';
import { FormImgProfile } from '../../components/Form/FormImgProfile';
import { ContainerPattern, ContainerGlobalStyles } from '../../styles/Containers';
import { ProfileStyles } from './style';
import { EnableDisableButton } from '../../styles/Buttons';
import { ProfileContext } from '../../contexts/Profile';
import { useContext } from 'react';

export const Profile = () => {
    const { profile } = useContext(ProfileContext);

    return (
        <ContainerGlobalStyles>
            <ProfileStyles>
                <section>
                    <div>
                        <div>
                            <img
                                src={profile !== undefined ? profile.imagem : 'https://i.ibb.co/VQnCcyz/log.png'}
                                alt='img-profile'
                            />
                        </div>
                        <div>
                            <p>Nome: exemploNome</p>
                            <p>Email: exemplo@mail.com</p>
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
        </ContainerGlobalStyles>
    );
};
