import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#5FA577',
            light: '#D8F5D7',
            dark: '#6AF46A',
        },
        secondary: {
            main: '#272537',
            light: '#3C3C4F',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
    },
    overrides: {
        MuiButton: {
            root: {
                '&:hover': {
                    backgroundColor: '#6AF46A',
                },
            },
        },
    }     
});

export default theme;
