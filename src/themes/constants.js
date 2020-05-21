// LAYOUT CONSTANTS
/**
 * Responsiveness breakpoint values (in screen width px's)
 */
export const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
}

/**
 * Theme spacing's scaling factor (in px's)
 */
export const spacing = 4

/**
 * Theme border radius factor (in px's)
 */
export const borderRadius = 4

// PALETTE CONSTANTS

export const primaryRed = '#FF3D3D'
export const secondaryBlue = '#007EB6'
export const white = '#FFFFFF'
export const black = '#000000'
export const lightPrimaryText = '#484848'
export const lightSecondaryText = '#727272'
export const warning = '#C9A74C'
export const error = '#A94442'

const grey50 = '#F8F8F8'
const grey100 = '#DDDDDD'
const grey200 = '#CCCCCC'
const grey300 = '#ABABAB'
const grey400 = '#727272'
const grey500 = '#585858'
const grey600 = '#484848'
const grey700 = '#3B3B3B'
const grey800 = '#2E2E2E'
const grey900 = '#212121'
const greyA100 = '#D5D5D5'
const greyA200 = '#AAAAAA'
const greyA400 = '#303030'
const greyA700 = '#616161'

// THEME PALETTE `grey` OBJECT
export const grey = {
    50: grey50,
    100: grey100,
    200: grey200,
    300: grey300,
    400: grey400,
    500: grey500,
    600: grey600,
    700: grey700,
    800: grey800,
    900: grey900,
    A100: greyA100,
    A200: greyA200,
    A400: greyA400,
    A700: greyA700
}

// FONT ATTRIBUTES
const fontWeightLight = 300
const fontWeightRegular = 400
const fontWeightSemiBold = 600

const mediumWidthBreakpoint = `@media (min-width: ${breakpoints.md}px)`
export const typography = {
    fontFamily: '\'Open Sans\', sans-serif',
    h1: {
        fontSize: '2.125rem',
        lineHeight: 1.42,
        fontWeight: fontWeightLight,
        [mediumWidthBreakpoint]: {
            fontSize: '3rem',
            lineHeight: 1.33
        }
    },
    h2: {
        fontSize: '1.5rem',
        lineHeight: 1.5,
        fontWeight: fontWeightRegular,
        [mediumWidthBreakpoint]: {
            fontSize: '2.125rem',
            lineHeight: 1.41
        }
    },
    h3: {
        fontSize: '1.25rem',
        lineHeight: 1.4,
        fontWeight: fontWeightRegular,
        [mediumWidthBreakpoint]: {
            fontSize: '1.5rem',
            lineHeight: 1.5
        }
    },
    h4: {
        fontSize: '1.125rem',
        lineHeight: 1.44,
        fontWeight: fontWeightRegular,
        [mediumWidthBreakpoint]: {
            fontSize: '1.25rem',
            lineHeight: 1.4
        }
    },
    h5: {
        fontSize: '1rem',
        lineHeight: 1.5,
        fontWeight: fontWeightRegular,
        [mediumWidthBreakpoint]: {
            fontSize: '1.125rem',
            lineHeight: 1.44
        }
    },
    h6: {
        fontSize: '0.875rem',
        lineHeight: 1.43,
        fontWeight: fontWeightRegular,
        [mediumWidthBreakpoint]: {
            fontSize: '1rem',
            lineHeight: 1.5
        }
    },
    body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
        fontWeight: fontWeightRegular
    },
    body2: {
        fontSize: '0.875rem',
        lineHeight: 1.43,
        fontWeight: fontWeightRegular
    },
    button: {
        fontSize: '0.875rem',
        lineHeight: 1.75,
        letterSpacing: 1,
        fontWeight: fontWeightSemiBold
    },
    overline: {
        fontSize: '0.75rem',
        lineHeight: 1.33,
        letterSpacing: 1,
        fontWeight: fontWeightSemiBold
    },
    caption: {
        fontSize: '0.75rem',
        lineHeight: 1.33,
        fontWeight: fontWeightRegular
    }
}
