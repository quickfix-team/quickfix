import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#E0E0E0',
            dark: '#828282',
            light: '#F5F5F5',
            contrastText: '#828282',
        },
    },
    typography: {
        allVariants: {
            color: '#F7F7F7',
        },
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: '#F7F7F7',
                    borderBottom: '1px solid #F7F7F7',
                    '&:hover': {
                        borderBottom: '1px solid #9E9E9E',
                    },
                },
            },
        },
    },
});
