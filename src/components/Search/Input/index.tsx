import { TextField } from '@mui/material';
import React from 'react';

import { StyledInput } from './style';

export const Input = () => {
    return (
        <StyledInput>
            <TextField
                type='text'
                label='Digite o nome da loja'
                variant='standard'
                size='small'
                fullWidth
            />
        </StyledInput>
    );
};
