import {
    error,
    grey,
    lightPrimaryText,
    lightSecondaryText,
    secondaryBlue,
    warning,
    white
} from '../constants'

const defaultPalette = {
    primary: {
        main: secondaryBlue,
        contrastText: white
    },
    secondary: {
        light: white,
        main: secondaryBlue,
        dark: white
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
