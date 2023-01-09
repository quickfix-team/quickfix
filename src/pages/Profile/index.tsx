import { FormAddress } from '../../components/Form/FormAddress';
import { FormContact } from '../../components/Form/FormContact';
import { FormImgProfile } from '../../components/Form/FormImgProfile';
import { ContainerPattern, ContainerGlobalStyles } from '../../styles/Containers';
import { ProfileStyles } from './style';
import { EnableDisableButton } from '../../styles/Buttons';
import { useEffect, useState } from 'react';
import { sendGetProfile, sendGetContact } from './api';

export const Profile = () => {
    const [profile, setProfile] = useState<any>([]);
    const [contact, setContact] = useState<any>([]);

    useEffect(() => {
        const callback = async () => {
            const profileData = await sendGetProfile();
            setProfile(profileData.data[1]);

            const contacts = await sendGetContact();
            setContact(contacts.data[0]);

            const user = {
                id: profileData.data[1].id,
                profileId: profileData.data[1].profileId,
            };

            localStorage.setItem('user', JSON.stringify(user));
        };

        callback();
    }, []);

    console.log(profile);
    console.log(contact);

    return (
        <ContainerGlobalStyles>
            <ProfileStyles>
                <section>
                    <div>
                        <div>
                            <img src={profile.imagem} alt='img-profile' />
                        </div>
                        <div>
                            <p>Nome: {profile.name}</p>
                            <p>Email: {contact.email}</p>
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
