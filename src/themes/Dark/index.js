/* eslint-disable quote-props */
import {
    error,
    grey,
    lightSecondaryText,
    warning,
    primaryRed,
    white
} from '../constants'

const darkPalette = {
    type: 'dark',
    primary: {
        main: grey[600],
        contrastText: white
    },
    secondary: {
        main: primaryRed
    },
    text: {
        primary: white,
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
