import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {
    Document,
    Page
} from 'react-pdf'

import { withViewportCheck } from  '../../themes'

PdfPlayer.propTypes = {
    file: PropTypes.string,
    loading: PropTypes.node,
    isDesktop: PropTypes.bool,
    isTablet: PropTypes.bool,
    isMobile: PropTypes.bool
}

const useStyles = makeStyles(theme => ({
    root: {
        border: '10px solid',
        borderRadius: 5,
        borderColor: theme.palette.primary.light,
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
    }
}))

function PdfPlayer(props) {
    const {
        file,
        loading,
        isDesktop,
        isTablet,
        isMobile
    } = props

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Document
                file={file}
                loading={loading}
                {...props}
            >
                <Page width={(isDesktop && 900) || (isTablet && 565) || (isMobile && 275)} pageNumber={1} />
            </Document>
        </div>
    )
}

export default withViewportCheck(PdfPlayer)
