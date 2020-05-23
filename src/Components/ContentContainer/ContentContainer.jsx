import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import MuiContainer from '@material-ui/core/Container'
import PropTypes from 'prop-types'

ContentContainer.propTypes = {
    disableGutters: PropTypes.bool,
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

const useStyles = makeStyles(theme => ({
    root: {
    }
}))

function ContentContainer(props) {
    const {
        children,
        disableGutters = true,
        maxWidth = 'md'
    } = props

    const classes = useStyles()

    return (
        <MuiContainer
            className={classes.root}
            disableGutters={disableGutters}
            maxWidth={maxWidth}
            {...props}
        >
            {children}
        </MuiContainer>
    )
}

export default ContentContainer
