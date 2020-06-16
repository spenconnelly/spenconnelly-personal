import React, { useEffect, useRef, useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import MuiListItemIcon from '@material-ui/core/ListItemIcon'
import MuiListItemText from '@material-ui/core/ListItemText'
import MuiButton from '@material-ui/core/Button'
import MuiMenuItem from '@material-ui/core/MenuItem'
import MuiAppBar from '@material-ui/core/AppBar'
import MuiIconButton from '@material-ui/core/IconButton'
import MuiMoonIcon from '@material-ui/icons/Brightness4'
import MuiSunIcon from '@material-ui/icons/Brightness7'
import MuiTab from '@material-ui/core/Tab'
import MuiTabs from '@material-ui/core/Tabs'
import MuiToolbar from '@material-ui/core/Toolbar'
import MuiTypography from '@material-ui/core/Typography'
import MuiGrow from '@material-ui/core/Grow'
import MuiPopper from '@material-ui/core/Popper'
import MuiMenuList from '@material-ui/core/MenuList'
import MuiClickAwayListener from '@material-ui/core/ClickAwayListener'
import MuiPaper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import HideOnScroll from '../HideOnScroll'
import { withRouter } from 'react-router-dom'

import { withViewportCheck } from '../../themes'

NavigationBar.propTypes = {
    isDesktop: PropTypes.bool,
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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
        [theme.breakpoints.up('md')]: {
            width: 225
        },
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
    toggleIconButton: {
        color: theme.palette.primary.contrastText,
        marginLeft: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(5)
        }
    },
    menuContainer: {
        backgroundColor: theme.palette.primary.main,
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(3.3),
        },
    },
    menuButtonModifier: {
        color: theme.palette.primary.contrastText
    }
}))

function NavigationBar(props) {
    const {
        history,
        isDesktop,
        isTablet,
        isLight,
        tabRoutes = [],
        toggleDarkMode
    } = props


    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)

    const menuIcon = open ? <MenuOpenIcon /> : <MenuIcon />
    const themeToggleIcon = isLight ? <MuiMoonIcon /> : <MuiSunIcon />

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event) => {
        event.preventDefault()
        if (anchorRef.current && anchorRef.current.contains(event.target)) return null
        setOpen(false)
    }

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }

    const prevOpen = useRef(open)

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])

    const onTabChange = (event, value, isMenu) => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        history.push(value)
        if (isMenu) handleClose(event)
    }

    return (
        <HideOnScroll>
            <MuiAppBar>
                <MuiToolbar className={classes.root}>
                    <div className={classes.titleContainer}>
                        <MuiTypography color={classes.titleTypography} variant="button">
                            Spencer Connelly
                        </MuiTypography>
                    </div>
                    <div className={classes.buttonsContainer}>
                        { isDesktop ? (
                            <>
                                <MuiTabs
                                    classes={{
                                        indicator: classes.tabIndicatorModifier
                                    }}
                                    onChange={onTabChange}
                                    value={history.location.pathname}
                                >
                                    {tabRoutes.map(({ label, value }, index) => (
                                        <MuiTab
                                            key={index}
                                            className={classes.tabModifier}
                                            label={label}
                                            value={value}
                                        />
                                    ))}
                                </MuiTabs>
                                <MuiIconButton className={classes.toggleIconButton} onClick={toggleDarkMode}>
                                    { themeToggleIcon }
                                </MuiIconButton>
                            </>
                        ) : (
                            <>
                                { isTablet ? (
                                    <MuiButton
                                        className={classes.menuButtonModifier}
                                        ref={anchorRef}
                                        onClick={handleToggle}
                                        startIcon={menuIcon}
                                    >
                                        Menu
                                    </MuiButton>
                                ) : (
                                    <MuiIconButton
                                        className={classes.menuButtonModifier}
                                        ref={anchorRef}
                                        onClick={handleToggle}
                                    >
                                        {menuIcon}
                                    </MuiIconButton>
                                )}
                                <MuiPopper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <MuiGrow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <MuiPaper className={classes.menuContainer}>
                                                <MuiClickAwayListener onClickAway={handleClose}>
                                                    <MuiMenuList className={classes.menuButtonModifier} autoFocusItem={open} onKeyDown={handleListKeyDown}>
                                                        { tabRoutes.map(({ label, value, icon }, index) => (
                                                            <MuiMenuItem
                                                                key={index}
                                                                onClick={event => onTabChange(event, value, true)}
                                                            >
                                                                <MuiListItemIcon>
                                                                    { React.cloneElement(icon, { fontSize: 'small', className: classes.menuButtonModifier }) }
                                                                </MuiListItemIcon>
                                                                <MuiListItemText primary={label} />
                                                            </MuiMenuItem>
                                                        ))}
                                                        <MuiMenuItem onClick={toggleDarkMode}>
                                                            <MuiListItemIcon>
                                                                { React.cloneElement(themeToggleIcon, { fontSize: 'small', className: classes.menuButtonModifier }) }
                                                            </MuiListItemIcon>
                                                            <MuiListItemText primary={isLight ? 'Dark Mode' : 'Light Mode'} />
                                                        </MuiMenuItem>
                                                    </MuiMenuList>
                                                </MuiClickAwayListener>
                                            </MuiPaper>
                                        </MuiGrow>
                                    )}
                                </MuiPopper>
                            </>
                        )}
                    </div>
                </MuiToolbar>
            </MuiAppBar>

        </HideOnScroll>
    )
}

export default withRouter(withViewportCheck(NavigationBar))
