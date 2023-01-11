import React from 'react';

import { Input } from './Input';
import { InputSelect } from './Select';
import { StyledSearch } from './style';

export const Search = () => {
    return (
        <StyledSearch>
            <InputSelect />
            <Input />
        </StyledSearch>
    );
};
