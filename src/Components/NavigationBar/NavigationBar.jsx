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
import PropTypes from 'prop-types'
import HideOnScroll from '../HideOnScroll'
import { withRouter } from 'react-router-dom'

import { withViewportCheck } from '../../themes'

NavigationBar.propTypes = {
    isLight: PropTypes.bool,
    tabRoutes: PropTypes.array,
    toggleDarkMode: PropTypes.func
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        justifyContent: 'space-between',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        },
    },
    titleContainer: {
    },
    buttonsContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    tabModifier: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5)
    },
    tabIndicatorModifier: {
        backgroundColor: theme.palette.secondary.main
    },
    iconButton: {
        color: theme.palette.primary.contrastText,
        marginLeft: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(5)
        }
    }
}))

function NavigationBar(props) {
    const {
        history,
        isLight,
        tabRoutes = [],
        toggleDarkMode
    } = props

    const classes = useStyles()

    const onTabChange = (event, value) => {
        history.push(value)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

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
                        <MuiTabs
                            classes={{
                                indicator: classes.tabIndicatorModifier
                            }}
                            onChange={onTabChange}
                            value={history.location.pathname}
                        >
                            {tabRoutes.map(({ label, value }, index) => (
                                <MuiTab
                                    className={classes.tabModifier}
                                    key={index}
                                    label={label}
                                    value={value}
                                />
                            ))}
                        </MuiTabs>
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

export default withRouter(withViewportCheck(NavigationBar))
