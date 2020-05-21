import { useMemo, useState } from 'react'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
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
