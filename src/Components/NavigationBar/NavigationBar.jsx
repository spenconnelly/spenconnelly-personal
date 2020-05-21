import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import MuiAppBar from '@material-ui/core/AppBar'
import MuiIconButton from '@material-ui/core/IconButton'
import MuiMoonIcon from '@material-ui/icons/Brightness4'
import MuiSunIcon from '@material-ui/icons/Brightness7'
import MuiTab from '@material-ui/core/Tab'
import MuiTabs from '@material-ui/core/Tabs'
import MuiToolbar from '@material-ui/core/Toolbar'
import MuiTypography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import HideOnScroll from '../HideOnScroll'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: 56,
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
    },
    titleContainer: {
    },
    buttonsContainer: {
    },
    iconButton: {
        color: theme.palette.primary.contrastText
    }
}))

function NavigationBar(props) {
    const {
        isLight,
        tabRoutes,
        toggleDarkMode
    } = props
    const classes = useStyles()

    const isTop = useScrollTrigger({ threshold: 20 })

    return (
        <HideOnScroll>
            <MuiAppBar>
                <MuiToolbar className={classes.root}>
                    <div className={classes.titleContainer}>
                        <MuiTypography color={classes.titleTypography} variant="h4">
                            Spencer Connelly
                        </MuiTypography>
                    </div>
                    <div className={classes.buttonsContainer}>
                        {/* <MuiTabs>
                            {tabRoutes.map(({ label, value }, index) => (
                                <MuiTab
                                    key={index}
                                    label={label}
                                    value={value}
                                />
                            ))}
                        </MuiTabs> */}
                        { isLight ? (
                            <MuiIconButton className={classes.iconButton} onClick={toggleDarkMode}>
                                <MuiMoonIcon />
                            </MuiIconButton>
                        ) : (
                            <MuiIconButton  className={classes.iconButton} onClick={toggleDarkMode}>
                                <MuiSunIcon />
                            </MuiIconButton>
                        )}
                    </div>
                </MuiToolbar>
            </MuiAppBar>

        </HideOnScroll>
    )
}

export default NavigationBar
