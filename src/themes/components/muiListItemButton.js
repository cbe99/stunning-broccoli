const muiListItemButton = {
    styleOverrides: {
        root: ({ theme }) => ({
            color: theme.palette.text.primary,
            position: 'relative',
            paddingRight: '8px',
            paddingTop: '4px',
            paddingBottom: '4px',
            margin: '4px',
            borderRadius: '8px',

            '&.Mui-selected': {
                backgroundColor: theme.palette.primary.light,

                // The left border, our guiding line, changes with the theme.
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    backgroundColor: theme.palette.mode === 'dark'
                        ? theme.palette.purple.main  // In dark mode, the border glows purple
                        : 'black',  // In light mode, it remains black
                    borderTopLeftRadius: '8px',
                    borderBottomLeftRadius: '8px',
                },
            },

            '&.Mui-selected:hover': {
                backgroundColor: theme.palette.mode === 'dark'
                    ? theme.palette.primary.light  // In dark mode, primary light softens the hover background
                    : 'darkgrey',  // In light mode, it darkens
            },
        }),
    },
};

export default muiListItemButton;
