import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { UserContext } from '../../../contexts/UserContext';
import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { loginSchema } from './loginSchema';

export interface ILoginForm {
    email: string;
    password: string;
}

export const FormLogin = () => {
    const { loginRequest } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginForm>({
        mode: 'onChange',
        resolver: yupResolver(loginSchema),
    });

    return (
        <form noValidate onSubmit={handleSubmit(loginRequest)}>
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
