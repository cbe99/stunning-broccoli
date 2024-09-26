import { styled } from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import { drawerWidth, notificationPanelWidth, sidebarWidth } from "../../constants/drawerWidth";


export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'openLeft' && prop !== 'openRight',
})(({ theme, openLeft, openRight }) => {
    // Calculate the total width reduction when both drawers are open
    let width = '100%';
    let marginLeft = 0;
    let marginRight = 0;

    if (openLeft && openRight) {
        // Both drawers are open, reduce width by both sidebar and notification panel widths
        width = `calc(100% - ${sidebarWidth + notificationPanelWidth}px)`;
        marginLeft = sidebarWidth;
        marginRight = notificationPanelWidth;
    } else if (openLeft) {
        // Only the left sidebar is open
        width = `calc(100% - ${sidebarWidth}px)`;
        marginLeft = sidebarWidth;
    } else if (openRight) {
        // Only the right notification panel is open
        width = `calc(100% - ${notificationPanelWidth}px)`;
        marginRight = notificationPanelWidth;
    }

    return {
        zIndex: theme.zIndex.drawer + 1,
        width,
        marginLeft,
        marginRight,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    };
});


export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));