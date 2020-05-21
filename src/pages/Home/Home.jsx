import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    root: {
        height: 2000,
        color: theme.palette.primary.contrastText
    }
}))

function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            Home Placeholder
            a
            b
            b
            b
            b
        </div>
    )
}

export default Home
