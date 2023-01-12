import { useContext } from 'react';
import { Navigate } from 'react-router';
import { Footer } from '../../components/Footer';
import { FormAddress } from '../../components/Form/FormAddress';
import { FormContact } from '../../components/Form/FormContact';
import { FormImgProfile } from '../../components/Form/FormImgProfile';
import { Header } from '../../components/Header';
import { ProfileContext } from '../../contexts/Profile';
import { ContainerGlobalStyles, ContainerPattern } from '../../styles/Containers';
import { ProfileStyles } from './style';

interface iProfile{
    email: string;
    name: string;
    cnpj: string;
    id: number;
}

export const Profile = () => {
    const token = localStorage.getItem('userToken');
    const userId: string | null = localStorage.getItem('userId');
    const user: iProfile = JSON.parse(String(userId));

    if (!token) return <Navigate to='/login' replace />;

    const { profile } = useContext(ProfileContext);

    return (
        <>
            <Header />
            <ContainerGlobalStyles>
                <ProfileStyles>
                    <section>
                        <div>
                            <div>
                                <img
                                    src={
                                        profile !== undefined
                                            ? profile.imagem
                                            : 'https://i.ibb.co/VQnCcyz/log.png'
                                    }
                                    alt='img-profile'
                                />
                            </div>
                            <div>
                                <p>Nome: {user.name}</p>
                                <p>Email: {user.email}</p>
                                <p>CNPJ: {user.cnpj}</p>
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
                        </div>
                    </section>
                </ProfileStyles>
            </ContainerGlobalStyles>
            <Footer />
        </>
    );
};
