import { createTheme } from "@mui/material";
import { muiCard } from "../components/muiCard";
import palette from "./palette";
import muiListItemButton from "../components/muiListItemButton";
import { muiOutlinedInput } from "../components/muiOutlinedInput";
import typography from "./typography";

export const lightThemeOptions = {
    palette,
    typography,
    components: {
        MuiCard: muiCard,
        MuiListItemButton: muiListItemButton,
        MuiOutlineInput: muiOutlinedInput
    }
}

const lightTheme = createTheme(lightThemeOptions);

export default lightTheme;