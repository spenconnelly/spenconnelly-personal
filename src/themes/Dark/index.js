/* eslint-disable quote-props */
import {
    error,
    grey,
    lightPrimaryText,
    lightSecondaryText,
    secondaryBlue,
    warning,
    white
} from '../constants'

const darkPalette = {
    type: 'dark',
    primary: {
        main: grey[600],
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
    background: {
        default: grey[900]
    },
    grey
}

export default darkPalette
