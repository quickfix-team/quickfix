import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { TextField } from '@mui/material';

export const FormContact = () => {
    return (
        <form noValidate>
            <TextField
                type='text'
                label='WhatsApp:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='text'
                label='Telegram:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='text'
                label='Instagram:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='text'
                label='Tel:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <TextField
                type='text'
                label='Email:'
                variant='standard'
                size='small'
                fullWidth
                InputProps={{ disableUnderline: true }}
            />
            <ButtonPrimaryStyles>Inserir Contato</ButtonPrimaryStyles>
        </form>
    );
};
