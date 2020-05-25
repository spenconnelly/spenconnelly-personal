import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ContentContainer from '../../Components/ContentContainer'
import { Typography } from '@material-ui/core'

import PdfPlayer from '../../Components/PdfPlayer'

const pdfFile = './resume.pdf'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(24),
        marginBottom: theme.spacing(12)
    },
    pdfContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    }
}))

function Resume() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <ContentContainer>
                <Typography variant="h2">
                    Resume Placeholder
                </Typography>
                <div className={classes.pdfContainer}>
                    <PdfPlayer
                        file={pdfFile}
                        title="Spencer Connelly Resume"
                    />
                </div>
            </ContentContainer>
        </div>
    )
}

export default Resume
