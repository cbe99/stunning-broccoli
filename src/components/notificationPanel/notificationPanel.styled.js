import { Drawer, styled } from "@mui/material";
import { NOTIFICATION_PANEL_WIDTH } from "../../constants/drawerWidth";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: NOTIFICATION_PANEL_WIDTH,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: NOTIFICATION_PANEL_WIDTH,
        boxSizing: 'border-box',
        padding: 2,
        paddingTop: 3,
        borderLeft: `1px solid ${theme.palette.primary.light}`,
    },
    zIndex: 0,
}));