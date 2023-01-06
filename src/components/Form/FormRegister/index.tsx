import { TextField } from '@mui/material';
import { ButtonPrimaryStyles } from '../../../styles/Buttons';

export const FormRegister = () => {
    return (
        <form noValidate>
            <TextField
                type='text'
                label='Nome da empresa'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='email'
                label='Email da empresa'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='password'
                label='Senha'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='password'
                label='Confirme a senha'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='text'
                label='CNPJ da empresa'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <ButtonPrimaryStyles>Cadastrar</ButtonPrimaryStyles>
        </form>
    );
};
