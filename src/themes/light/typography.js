import palette from "./palette";

const typography = {
    fontFamily: 'Inter',
    textTransform: 'none',
    fontSize: 14,
    htmlFontSize: 14,
    h1: {
        color: palette.text.primary,
        fontSize: '3.571rem',
        fontWeight: 600,
        lineHeight: '5.357rem',
    },
    h2: {
        color: palette.text.primary,
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '36px',
    },
    h3: {
        color: palette.text.primary,
        fontSize: '1.785rem',
        fontWeight: 500,
        lineHeight: '2.714rem',
    },
    h4: {
        color: palette.text.primary,
        fontSize: '1.714rem',
        fontWeight: 400,
        lineHeight: '2.571rem',
    },
    h5: {
        color: palette.text.primary,
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
    },
    h6: {
        color: palette.text.primary,
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '1.5rem',
    },
    subtitle1: {
        color: palette.text.primary,
        fontSize: '0.857rem',
        fontWeight: 600,
        lineHeight: '1.143rem',
    },
    subtitle2: {
        color: palette.text.primary,
        fontSize: '0.786rem',
        fontWeight: 700,
        lineHeight: '1.143rem',
    },
    button: {
        color: palette.text.primary,
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        textTransform: 'none',
    },
    body1: {
        color: palette.text.secondary,
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '18px',
    },
    body2: {
        color: `${palette.text.light} !important`,
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: '1.428rem',
    },
    caption: {
        color: palette.text.caption,
        fontSize: '0.785rem',
        fontWeight: 400,
        lineHeight: '1.142rem',
    },
}

export default typography;