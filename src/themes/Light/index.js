import {
    error,
    grey,
    lightPrimaryText,
    lightSecondaryText,
    secondaryBlue,
    warning,
    primaryRed,
    white
} from '../constants'

const defaultPalette = {
    primary: {
        main: secondaryBlue,
        contrastText: white
    },
    secondary: {
        main: primaryRed,
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
