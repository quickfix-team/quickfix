import { InputLabel, MenuItem, NativeSelect, OutlinedInput, useTheme } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';

import { StyledSelect } from './style';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

export const InputSelect = () => {
    const [city, setCity] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCity(event.target.value);
    };
    return (
        <StyledSelect>
            <Select value={city} onChange={handleChange} MenuProps={MenuProps}>
                {names.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                        style={{ background: 'var(--color-primary)' }}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </StyledSelect>
    );
};
