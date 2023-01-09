import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from './contactSchema';

export const FormContact = () => {
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

    const onSubmitFunction = (data: any) => console.log(data);

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
            />
            {errors.whatsApp?.message && <p aria-label='error'>{errors.whatsApp?.message}</p>}
            <TextField
                type='text'
                label='Telegram:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('telegram')}
            />
            {errors.telegram?.message && <p aria-label='error'>{errors.telegram?.message}</p>}
            <TextField
                type='text'
                label='Instagram:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('instagram')}
            />
            {errors.instagram?.message && <p aria-label='error'>{errors.instagram?.message}</p>}
            <TextField
                type='text'
                label='Tel:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('tel')}
            />
            {errors.tel?.message && <p aria-label='error'>{errors.tel?.message}</p>}
            <TextField
                type='text'
                label='Email:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('email')}
            />
            {errors.email?.message && <p aria-label='error'>{errors.email?.message}</p>}
            <ButtonPrimaryStyles>Inserir Contato</ButtonPrimaryStyles>
        </form>
    );
};
