import darkTheme from "./dark/theme";
import lightTheme from "./light/theme"

const getTheme = (themeName) => {
    switch (themeName) {
        case 'dark':
            return darkTheme;
        case 'light':
        default:
            return lightTheme;

    }
}

export default getTheme;