import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { loginSchema } from './loginSchema';

export interface ILoginForm {
    email: string;
    password: string;
}

export const FormLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginForm>({
        mode: 'onChange',
        resolver: yupResolver(loginSchema)
    });

    const handleRequest = (data: ILoginForm) => {
        console.log(data);
    };

    return (
        <form noValidate onSubmit={handleSubmit(handleRequest)}>
            <TextField
                type='email'
                label='Email'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('email')}
                helperText={errors.email?.message}
                error={!!errors.email}
            />
            <TextField
                type='password'
                label='Senha'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('password')}
                helperText={errors.password?.message}
                error={!!errors.password}
            />
            <ButtonPrimaryStyles>Logar</ButtonPrimaryStyles>
        </form>
    );
};
