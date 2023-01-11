import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from './contactSchema';
import { ProfileContext } from '../../../contexts/Profile';
import { useContext } from 'react';

export const FormContact = () => {
    const { sendPostContact } = useContext(ProfileContext);

    interface iData {
        whatsApp: string;
        telegram: string;
        instagram: string;
        tel: string;
        email: string;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iData>({
        resolver: yupResolver(contactSchema),
    });

    const onSubmitFunction = (dataContact: iData) => {
        sendPostContact(dataContact);
    };

    return (
        <form noValidate onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Contato</h2>
            <TextField
                type='text'
                label='WhatsApp:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('whatsApp')}
                helperText={errors.whatsApp?.message}
                error={!!errors.whatsApp}
            />

            <TextField
                type='text'
                label='Telegram:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('telegram')}
                helperText={errors.telegram?.message}
                error={!!errors.telegram}
            />
            <TextField
                type='text'
                label='Instagram:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('instagram')}
                helperText={errors.instagram?.message}
                error={!!errors.instagram}
            />
            <TextField
                type='text'
                label='Tel:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('tel')}
                helperText={errors.tel?.message}
                error={!!errors.tel}
            />
            <TextField
                type='text'
                label='Email:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('email')}
                helperText={errors.email?.message}
                error={!!errors.email}
            />
            <ButtonPrimaryStyles>Inserir Contato</ButtonPrimaryStyles>
        </form>
    );
};
