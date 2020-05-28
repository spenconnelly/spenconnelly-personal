import React from 'react'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ContentContainer from '../../Components/ContentContainer'
import GetAppIcon from '@material-ui/icons/GetApp'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

import PdfPlayer from '../../Components/PdfPlayer'

const pdfFile = './resume.pdf'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(24),
        marginBottom: theme.spacing(12)
    },
    contentContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    buttonsContainer: {
        display: 'flex',
        width: '100%',
        maxWidth: 612,
        justifyContent: 'space-between',
        marginBottom: theme.spacing(6)
    },
    pdfContainer: {
        // display: 'flex',
        // justifyContent: 'center',
        // width: '100%'
    }
}))

function Resume() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <ContentContainer className={classes.contentContainer}>
                <div className={classes.buttonsContainer}>
                    <Button
                        variant="filled"
                        startIcon={<GetAppIcon />}
                        href={pdfFile}
                        download="Spencer_Connelly_Resume"
                    >
                        Download to PDF
                    </Button>
                    <Button
                        variant="filled"
                        startIcon={<OpenInNewIcon />}
                        onClick={() => window.open(pdfFile)}
                    >
                        Export to new tab
                    </Button>
                </div>
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
