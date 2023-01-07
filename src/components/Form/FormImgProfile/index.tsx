import { ButtonPrimaryStyles } from '../../../styles/Buttons';
import { TextField } from '@mui/material';

export const FormImgProfile = () => {
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
            <ButtonPrimaryStyles>Inserir Imagem</ButtonPrimaryStyles>
        </form>
    );
};
