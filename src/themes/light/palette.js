import { createTheme } from "@mui/material";

let { palette } = createTheme();

palette = {
    ...palette,
    mode: 'light',
    primary: {
        main: '#E3F5FF',
        light: '#F7F9FB',
        dark: '#1C1C1C'
    },
    secondary: {
        main: '#A8C5DA'
    },
    purple: {
        main: '#E5ECF6'
    },
    text: {
        primary: '#000000',
        secondary: '#333333',
    },
}

export default palette;