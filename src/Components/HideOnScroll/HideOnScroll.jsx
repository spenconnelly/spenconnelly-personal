import React from 'react'
import MuiSlide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

function HideOnScroll(props) {
    const {
        children,
        window
    } = props

    const trigger = useScrollTrigger({ target: window ? window() : undefined })

    return (
        <MuiSlide appear={false} direction="down" in={!trigger}>
            {children}
        </MuiSlide>
    )
}

export default HideOnScroll
