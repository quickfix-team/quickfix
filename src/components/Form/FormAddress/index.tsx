import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { TextField } from '@mui/material';

export const FormAddress = () => {
    return (
        <form noValidate>
            <TextField
                type='text'
                label='Rua:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='text'
                label='Bairro:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='text'
                label='Numero:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='text'
                label='Cidade:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='text'
                label='Estado:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <ButtonPrimaryStyles>Inserir Endereço</ButtonPrimaryStyles>
        </form>
    );
};
