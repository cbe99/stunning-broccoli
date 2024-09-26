import { styled } from "@mui/material";
import { notificationPanelWidth, sidebarWidth } from "./constants/drawerWidth";

export const Main = styled('main', {
    shouldForwardProp: (prop) => prop !== 'openLeft' && prop !== 'openRight',
})(
    ({ theme, openLeft, openRight }) => {
        let marginLeft = `-${sidebarWidth}px`;
        let marginRight = 0;

        if (openLeft && openRight) {
            marginLeft = 0;
            marginRight = `${notificationPanelWidth}px`;
        } else if (openLeft) {
            marginLeft = 0;
        } else if (openRight) {
            marginRight = `${notificationPanelWidth}px`;
        }

        return {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create(['margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft,
            marginRight,
            transition: theme.transitions.create(['margin'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        };
    }
);
