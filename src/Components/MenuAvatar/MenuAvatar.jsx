import React from 'react'
import MuiAvatar from '@material-ui/core/Avatar'
import image from '../../static/images/faceshot-close-small.jpeg'

function MenuAvatar(props) {
    return (
        <MuiAvatar alt="" src={image} {...props} />
    )
}

export default MenuAvatar
