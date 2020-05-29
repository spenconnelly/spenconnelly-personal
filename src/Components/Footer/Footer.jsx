import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import MuiIconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: 55,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    iconButton: {
        color: theme.palette.primary.contrastText
    }
}))

function Footer() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <MuiIconButton
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/SpencerConnelly"
            >
                <TwitterIcon />
            </MuiIconButton>
            <MuiIconButton
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/spenconnelly"
            >
                <GitHubIcon />
            </MuiIconButton>
            <MuiIconButton
                className={classes.iconButton}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/spencer-connelly-297511128/"
            >
                <LinkedInIcon />
            </MuiIconButton>
        </div>
    )
}

export default Footer
