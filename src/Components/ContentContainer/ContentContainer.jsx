import React from 'react'
import MuiContainer from '@material-ui/core/Container'
import PropTypes from 'prop-types'

ContentContainer.propTypes = {
    disableGutters: PropTypes.bool,
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
}

function ContentContainer(props) {
    const {
        children,
        disableGutters = true,
        maxWidth = 'md'
    } = props

    return (
        <MuiContainer
            disableGutters={disableGutters}
            maxWidth={maxWidth}
            {...props}
        >
            {children}
        </MuiContainer>
    )
}

export default ContentContainer
