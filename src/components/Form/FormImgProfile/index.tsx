import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { TextField } from '@mui/material';
import { ContainerPattern } from '../../../styles/Containers';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { imgProfileSchema } from './imgProfileSchema';
import { ProfileContext } from '../../../contexts/Profile';
import { useContext } from 'react';

export const FormImgProfile = () => {
    const { sendPostImgProfile } = useContext(ProfileContext);

    interface iData {
        src: string;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iData>({
        resolver: yupResolver(imgProfileSchema),
    });

    const onSubmitFunction = (data: iData) => {
        sendPostImgProfile(data.src);
    };

    return (
        <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
            <ContainerPattern>
                <TextField
                    type='text'
                    label='Link:'
                    variant='standard'
                    size='small'
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    {...register('src')}
                    helperText={errors.src?.message}
                    error={!!errors.src}
                />
            </ContainerPattern>
            <ButtonPrimaryStyles>Inserir Imagem</ButtonPrimaryStyles>
        </form>
    );
};
