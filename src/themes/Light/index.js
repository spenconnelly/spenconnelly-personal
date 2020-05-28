import {
    error,
    grey,
    lightPrimaryText,
    lightSecondaryText,
    primaryBlue,
    primaryLightBlue,
    warning,
    secondaryRed,
    white
} from '../constants'

const defaultPalette = {
    primary: {
        light: primaryLightBlue,
        main: primaryBlue,
        contrastText: white
    },
    secondary: {
        main: secondaryRed,
        contrastText: white
    },
    text: {
        primary: lightPrimaryText,
        secondary: lightSecondaryText
    },
    error: {
        main: error
    },
    warning: {
        main: warning
    },
    grey
}

export default defaultPalette
