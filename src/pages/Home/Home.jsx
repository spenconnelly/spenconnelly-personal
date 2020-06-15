import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ContentContainer from '../../components/ContentContainer'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(20)
    }
}))

function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <ContentContainer>
                <Typography variant="h2">
                    Home Placeholder
                </Typography>
            </ContentContainer>
        </div>
    )
}

export default Home
