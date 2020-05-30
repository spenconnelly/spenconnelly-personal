import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {
    Document,
    Page
} from 'react-pdf'

PdfPlayer.propTypes = {
    file: PropTypes.string,
    loading: PropTypes.node,
    width: PropTypes.number
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
        width
    } = props

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Document
                file={file}
                loading={loading}
                {...props}
            >
                <Page
                    loading={loading}
                    pageNumber={1}
                    width={width}
                />
            </Document>
        </div>
    )
}

export default PdfPlayer
