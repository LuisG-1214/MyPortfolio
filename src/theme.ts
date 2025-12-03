import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#5ED3F3',
        },
    },
    typography: {
        fontFamily: [
            'montserrat',
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;