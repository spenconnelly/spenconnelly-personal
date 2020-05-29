import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ContentContainer from '../../Components/ContentContainer'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(20)
    }
}))

function Portfolio() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <ContentContainer>
                <Typography variant="h2">
                    Portfolio Placeholder
                </Typography>
            </ContentContainer>
        </div>
    )
}

export default Portfolio
