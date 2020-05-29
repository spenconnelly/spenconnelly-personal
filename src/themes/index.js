import React, { useMemo, useState } from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import {
    borderRadius,
    breakpoints,
    spacing,
    typography
} from './constants'

import darkPalette from './Dark'
import lightPalette from './Light'

const props = {
    MuiSkeleton: {
        animation: 'wave'
    }
}

const shape = {
    borderRadius
}

const themeOptions = {
    breakpoints,
    props,
    spacing,
    shape,
    typography
}

const lightThemeName = 'spenconnelly-light'

const darkThemeName = 'spenconnelly-dark'

export const useDarkMode = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true })

    const [ isLight, setTheme ] = useState(!prefersDarkMode)

    const toggleDarkMode = () => setTheme(!isLight)

    const theme = useMemo(() => createMuiTheme({
        ...themeOptions,
        themeName: (isLight ? lightThemeName : darkThemeName),
        palette: (isLight ? lightPalette : darkPalette)
    }), [isLight])

    return [theme, toggleDarkMode, isLight]
}

/**
 * Higher order component that adds boolean props
 * to check for current viewport experience.
 */
export const withViewportCheck = Component => props => {
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.only('xs'))
    const isTablet = useMediaQuery(theme.breakpoints.only('sm'))
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

    return <Component isMobile={isMobile} isTablet={isTablet} isDesktop={isDesktop} {...props} />
}
