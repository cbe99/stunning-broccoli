import { styled } from "@mui/material";
import { NOTIFICATION_PANEL_WIDTH, SIDEBAR_WIDTH } from "./constants/drawerWidth";

export const Main = styled('main', {
    shouldForwardProp: (prop) => prop !== 'openLeft' && prop !== 'openRight',
})(
    ({ theme, openLeft, openRight }) => {
        let marginLeft = `-${SIDEBAR_WIDTH}px`;
        let marginRight = 0;

        if (openLeft && openRight) {
            marginLeft = 0;
            marginRight = `${NOTIFICATION_PANEL_WIDTH}px`;
        } else if (openLeft) {
            marginLeft = 0;
        } else if (openRight) {
            marginRight = `${NOTIFICATION_PANEL_WIDTH}px`;
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
