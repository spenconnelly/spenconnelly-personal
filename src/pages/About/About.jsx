import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ContentContainer from '../../components/ContentContainer'
import MuiTypography from '@material-ui/core/Typography'
import MuiFormControlLabel from '@material-ui/core/FormControlLabel'
import MuiIconButton from '@material-ui/core/IconButton'
import EmailIcon from '@material-ui/icons/Email'
import CallIcon from '@material-ui/icons/Call'
import faceshot from '../../static/images/faceshot-landscape-large.jpeg'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(12)
    },
    contentContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: theme.spacing(10)
    },
    imageContainer: {
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.grey[900]
    },
    imageModifier: {
        width: '100%',
        maxWidth: 960,
        aspectRatio: 0.5
    },
    descriptionContainer: {
        textAlign: 'center'
    },
    contactContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    freelanceModifier: {
        margin: theme.spacing(5)
    },
    contactTitleModifier: {
        marginBottom: theme.spacing(2)
    }
}))

function About() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.imageContainer}>
                <img
                    className={classes.imageModifier}
                    src={faceshot}
                />
            </div>
            <ContentContainer className={classes.contentContainer}>
                <div className={classes.descriptionContainer}>
                    <MuiTypography variant="body1">
                        Hi! I am a passionate Full-Stack developer passionate about for all things web. I love playing soccer and basketball.
                    </MuiTypography>
                    <MuiTypography className={classes.freelanceModifier} variant="h4">
                        I am open to freelance!
                    </MuiTypography>
                </div>
                <div className={classes.contactContainer}>
                    <MuiTypography className={classes.contactTitleModifier} variant="h2">
                        Contact Me!
                    </MuiTypography>
                    <MuiFormControlLabel
                        control={
                            <MuiIconButton color="primary">
                                <CallIcon />
                            </MuiIconButton>
                        }
                        label="(908) 674 - 0516"
                        labelPlacement="end"
                    />
                    <MuiFormControlLabel
                        control={
                            <a target="_top"
                                rel="noopener noreferrer"
                                href="mailto:spenconnelly@gmail.com"
                            >
                                <MuiIconButton color="primary">
                                    <EmailIcon />
                                </MuiIconButton>
                            </a>
                        }
                        label="spenconnelly@gmail.com"
                        labelPlacement="end"
                    />
                </div>
            </ContentContainer>
        </div>
    )
}

export default About
