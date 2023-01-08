import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { registerSchema } from './registerSchema';

export interface IRegisterForm {
    name: string;
    email: string;
    password: string;
    confirmPwd?: string;
    cnpj: string;
}

export const FormRegister = () => {
    const [val, setVal] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterForm>({
        mode: 'onChange',
        resolver: yupResolver(registerSchema),
    });

    const handleCnpj = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const isNum = (str: string) => /^[0-9]+$/.test(str);

        if (isNum(value) || !value.length) {
            setVal(value);
        }
    };

    const handleRequest = (data: IRegisterForm) => {
        delete data.confirmPwd;
        console.log(data);
    };

    return (
        <form noValidate onSubmit={handleSubmit(handleRequest)}>
            <TextField
                type='text'
                label='Nome da empresa'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('name')}
                helperText={errors.name?.message}
                error={!!errors.name}
            />
            <TextField
                type='email'
                label='Email da empresa'
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
            <TextField
                type='password'
                label='Confirme a senha'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                {...register('confirmPwd')}
                helperText={errors.confirmPwd?.message}
                error={!!errors.confirmPwd}
            />
            <TextField
                type='text'
                label='CNPJ da empresa'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
                inputProps={{ maxLength: 14 }}
                {...register('cnpj')}
                helperText={errors.cnpj?.message}
                value={val}
                onChange={handleCnpj}
                error={!!errors.cnpj}
            />
            <ButtonPrimaryStyles>Cadastrar</ButtonPrimaryStyles>
        </form>
    );
};
