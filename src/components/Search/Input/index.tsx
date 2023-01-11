import { TextField } from '@mui/material';
import React, { useContext } from 'react';

import { ProfileContext } from '../../../contexts/Profile';
import { StyledInput } from './style';

export const Input = () => {
    const [search, setSearch] = React.useState('');

    const { profile } = useContext(ProfileContext);

    // const filter = !search ? list : list.filter(lis > lis.name.includes(search).toLowerCase());

    const handleSearch = (value: string) => {
        setSearch(value);
    };

    return (
        <StyledInput>
            <TextField
                type='text'
                label='Digite o nome da loja'
                variant='standard'
                size='small'
                fullWidth
                onChange={({ target }) => {
                    handleSearch(target.value);
                }}
            />
        </StyledInput>
    );
};
