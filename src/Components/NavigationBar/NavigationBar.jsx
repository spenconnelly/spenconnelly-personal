import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import IconButton from '@material-ui/core/IconButton'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
import MoonIcon from '@material-ui/icons/Brightness2Outlined'

const useStyles = makeStyles(theme => ({
    navBarContainer: {
        backgroundColor: theme.palette.secondary.main
    },
    iconButton: {
        color: 'white'
    }
}))

function NavigationBar(props) {
    const {
        isLight,
        toggleDarkMode
    } = props
    const classes = useStyles()

    return (
        <div className={classes.navBarContainer}>
            { isLight ? (
                <IconButton className={classes.iconButton} onClick={toggleDarkMode}>
                    <MoonIcon />
                </IconButton>
            ) : (
                <IconButton  className={classes.iconButton} onClick={toggleDarkMode}>
                    <SunIcon />
                </IconButton>
            )}
        </div>
    )
}

export default NavigationBar
