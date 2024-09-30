import { createTheme } from "@mui/material";
import { muiCard } from "../components/muiCard";
import palette from "./palette";
import muiListItemButton from "../components/muiListItemButton";
import { muiOutlinedInput } from "../components/muiOutlinedInput";
import typography from "./typography";

export const darkThemeOptions = {
    palette,
    typography,
    components: {
        MuiCard: muiCard,
        MuiListItemButton: muiListItemButton,
        MuiOutlineInput: muiOutlinedInput
    }
}

const darkTheme = createTheme(darkThemeOptions);

export default darkTheme;