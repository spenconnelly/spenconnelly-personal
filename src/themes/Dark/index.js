/* eslint-disable quote-props */
import {
    error,
    grey,
    lightSecondaryText,
    warning,
    secondaryRed,
    white
} from '../constants'

const darkPalette = {
    type: 'dark',
    primary: {
        main: grey[600],
        contrastText: white
    },
    secondary: {
        main: secondaryRed
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
