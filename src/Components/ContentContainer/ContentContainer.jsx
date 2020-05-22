import React from 'react'
import MuiContainer from '@material-ui/core/Container'

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
