import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import withWidth from '@material-ui/core/withWidth'
import {
    Document,
    Page
} from 'react-pdf'

import { breakpoints } from '../../themes/constants'

PdfPlayer.propTypes = {
    file: PropTypes.string,
    loading: PropTypes.node
}

const useStyles = makeStyles(theme => ({
    root: {
        border: '10px solid',
        borderRadius: 5,
        borderColor: theme.palette.primary.light,
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
    },
    page: {
        width: 500,
    }
}))

const {
    xs,
    sm,
    md,
    lg,
} = breakpoints

function getMaxPdfWidth() {
    if (window.innerWidth < xs) {
        return 300
    } else if (window.innerWidth < sm) {
        return 400
    } else if (window.innerWidth < md) {
        return 500
    } else if (window.innerWidth < lg) {
        return 600
    }
}

function PdfPlayer(props) {
    const {
        file,
        loading
    } = props

    const classes = useStyles()

    const [maxWidth, setMaxWidth] = useState(getMaxPdfWidth())

    useEffect(() => {
        window.addEventListener('resize', setMaxWidth(getMaxPdfWidth()))

        return () => window.addEventListener('resize', setMaxWidth(getMaxPdfWidth()))
    })

    return (
        <div className={classes.root}>
            <Document
                file={file}
                loading={loading}
                {...props}
            >
                <Page width={maxWidth} pageNumber={1} />
            </Document>
        </div>
    )
}

export default withWidth()(PdfPlayer)
