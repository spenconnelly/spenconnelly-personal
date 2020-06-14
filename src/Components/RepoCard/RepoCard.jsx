import React, { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import MuiPaper from '@material-ui/core/Paper'
import MuiTypography from '@material-ui/core/Typography'
import MuiButton from '@material-ui/core/Button'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import LanguageLabel from '../LanguageLabel'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100%',
        minHeight: 200,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            textAlign: 'left',
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6)
        }
    },
    titleContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing(4),
    },
    titleModifier: {
        fontWeight: 500
    },
    descriptionContainer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(20)
    },
    linkContainer: {
        position: 'absolute',
        bottom: 10,
    }
}))

function RepoCard(props) {
    const {
        description,
        language,
        name,
        url
    } = props

    const classes = useStyles()
    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'))

    const [paperElevation, setPaperElevation] = useState(2)

    return (
        <MuiPaper
            className={classes.root}
            elevation={paperElevation}
            onMouseMove={() => setPaperElevation(24)}
            onMouseOut={() => setPaperElevation(2)}
        >
            <div className={classes.titleContainer}>
                <MuiTypography className={classes.titleModifier} variant={isTablet ? 'h2' : 'h4'}>
                    { name }
                </MuiTypography>
                <LanguageLabel language={language} />
            </div>
            <div className={classes.descriptionContainer}>
                <MuiTypography variant="body1">
                    { description }
                </MuiTypography>
            </div>
            <div className={classes.linkContainer}>
                <MuiButton href={url}>
                    Go to respository source <ArrowForwardIcon />
                </MuiButton>
            </div>
        </MuiPaper>
    )
}

export default RepoCard
