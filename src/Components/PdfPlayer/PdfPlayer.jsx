import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import withWidth from '@material-ui/core/withWidth'
import {
    Document,
    Page
} from 'react-pdf'

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

function PdfPlayer(props) {
    const {
        file,
        loading
    } = props

    const [pdfWidth, setPdfWidth] = useState(null)

    const theme = useTheme()
    const classes = useStyles()
    const isMobile = useMediaQuery(theme.breakpoints.up('xs'))
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))


    useEffect(() => {
        const width = (isDesktop && 900) || (isTablet && 565) || (isMobile && 350)
        setPdfWidth(width)
    }, [isMobile, isTablet, isDesktop])

    return (
        <div className={classes.root}>
            <Document
                file={file}
                loading={loading}
                {...props}
            >
                <Page width={pdfWidth} pageNumber={1} />
            </Document>
        </div>
    )
}

export default withWidth()(PdfPlayer)
