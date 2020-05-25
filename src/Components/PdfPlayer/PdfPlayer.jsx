import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {
    Document,
    Page
} from 'react-pdf'

const useStyles = makeStyles(theme => ({
    root: {
        border: '10px solid',
        borderRadius: 5,
        borderColor: theme.palette.primary.light
    }
}))

function PdfPlayer(props) {
    const {
        file
    } = props

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Document
                file={file}
                {...props}
            >
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}

export default PdfPlayer
