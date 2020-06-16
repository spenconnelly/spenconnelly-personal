import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import MuiBox from '@material-ui/core/Box'
import MuiGrow from '@material-ui/core/Grow'
import MuiPaper from '@material-ui/core/Paper'
import MuiTypography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useTheme from '@material-ui/core/styles/useTheme'

import image from '../../static/images/faceshot-close.jpeg'
import ContentContainer from '../../components/ContentContainer'
import LanguageLabel from '../../components/LanguageLabel'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(20)
    },
    contentContainer: {
        marginBottom: theme.spacing(5)
    },
    paperModifier: {
        width: '100%',
        minHeight: 600,
        display: 'flex',
        padding: theme.spacing(4),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    avatarModifier: {
        width: '100%',
        height: '120%',
        maxWidth: 400,
        borderRadius: '50%',
        marginBottom: theme.spacing(3)
    },
    titleModifier: {
        textAlign: 'center'
    },
    skillsTitleModifier: {
        marginTop: theme.spacing(5)
    },
    skillsContainer: {
        margin: theme.spacing(2),
        display: 'flex',
        maxWidth: 400,
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
}))

function Home() {
    const classes = useStyles()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'))

    return (
        <div className={classes.root}>
            <ContentContainer className={classes.contentContainer}>
                <MuiBox width="100%" px={{ xs: 4, sm: 4, md: 0 }}>
                    <MuiGrow in timeout={1000}>
                        <MuiPaper elevation={5} className={classes.paperModifier}>
                            <MuiGrow in timeout={2000}>
                                <img alt="Spencer Connelly" src={image} className={classes.avatarModifier} />
                            </MuiGrow>
                            <MuiTypography className={classes.titleModifier} variant={isMobile ? 'h2' : 'h1'}>
                                Full-Stack Software Engineer
                            </MuiTypography>
                            <MuiTypography className={classes.titleModifier} variant={isMobile ? 'h4' : 'h3'}>
                                Bachelor of Science in Software Engineering
                            </MuiTypography>
                            <MuiTypography className={classes.skillsTitleModifier} variant="h5">
                                SKILLS:
                            </MuiTypography>
                            <MuiGrow in timeout={4000}>
                                <div className={classes.skillsContainer}>
                                    <LanguageLabel language="JavaScript" />
                                    <LanguageLabel language="CSS" />
                                    <LanguageLabel language="HTML" />
                                    <LanguageLabel language="ReactJS" />
                                    <LanguageLabel language="NodeJS" />
                                    <LanguageLabel language="SQL" />
                                    <LanguageLabel language="Java" />
                                    <LanguageLabel language="Python" />
                                    <LanguageLabel language="Springboot" />
                                </div>
                            </MuiGrow>
                        </MuiPaper>
                    </MuiGrow>
                </MuiBox>
            </ContentContainer>
        </div>
    )
}

export default Home
