import { createTheme } from "@mui/material";

let { palette } = createTheme();

palette = {
    ...palette,
    mode: 'dark',
    primary: {
        main: '#E3F5FF',
        light: '#1C1C1C',
        dark: '#FFFFFF'
    },
    secondary: {
        main: '#A8C5DA',
    },
    purple: {
        main: '#E5ECF6',
    },
    background: {
        default: '#121212',
        //   paper: '#1C1C1C',
    },
    text: {
        primary: '#FFFFFF',
        secondary: '#DDDDDD',
    },
};

export default palette;
