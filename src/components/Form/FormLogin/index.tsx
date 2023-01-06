import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { TextField } from '@mui/material';

export const FormLogin = () => {
    return (
        <form noValidate> 
            <TextField
                type='email'
                label='Email'
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
            <ButtonPrimaryStyles>Logar</ButtonPrimaryStyles>
        </form>
    );
};
