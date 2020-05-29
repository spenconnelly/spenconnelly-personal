import React from 'react'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ContentContainer from '../../Components/ContentContainer'
import GetAppIcon from '@material-ui/icons/GetApp'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import Skeleton from '@material-ui/lab/Skeleton'

import PdfPlayer from '../../Components/PdfPlayer'

const pdfFile = './resume.pdf'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(22.5)
    },
    playerSkeleton: {
        [theme.breakpoints.up('xs')]: {
            width: 275,
            height: 355
        },
        [theme.breakpoints.up('sm')]: {
            width: 565,
            height: 731
        },
        [theme.breakpoints.up('md')]: {
            width: 900,
            height: 1164
        }
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
        textAlign: 'center',
        marginBottom: theme.spacing(6)
    },
    pdfContainer: {
        marginBottom: theme.spacing(20)
    }
}))

const PdfPlayerSkeleton = () => {
    const classes = useStyles()

    return <Skeleton className={classes.playerSkeleton} variant="rect" />
}

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
                        loading={<PdfPlayerSkeleton />}
                    />
                </div>
            </ContentContainer>
        </div>
    )
}

export default Resume
