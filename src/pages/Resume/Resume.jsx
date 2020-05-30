import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ContentContainer from '../../Components/ContentContainer'
import GetAppIcon from '@material-ui/icons/GetApp'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import Skeleton from '@material-ui/lab/Skeleton'

import PdfPlayer from '../../Components/PdfPlayer'
import { withViewportCheck } from  '../../themes'

const pdfFile = './resume.pdf'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(16),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(22.5)
        },
    },
    playerSkeleton: {
        width: 275,
        height: 355,
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
    iconButtonsContainer: {
        display: 'flex'
    },
    pdfContainer: {
        marginBottom: theme.spacing(10),
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing(20)
        },
    }
}))

const PdfPlayerSkeleton = () => {
    const classes = useStyles()

    return <Skeleton className={classes.playerSkeleton} variant="rect" />
}

function Resume(props) {
    const {
        isDesktop,
        isMobile,
        isTablet
    } = props

    const classes = useStyles()
    const width = Number((isDesktop && 900) || (isTablet && 565) || (isMobile && 275))

    const openInNewtab = () => window.open(pdfFile)

    return (
        <div className={classes.root}>
            <ContentContainer className={classes.contentContainer}>
                { isMobile ? (
                    <div className={classes.iconButtonsContainer}>
                        <IconButton
                            href={pdfFile}
                            download="Spencer_Connelly_Resume"
                        >
                            <GetAppIcon />
                        </IconButton>
                        <IconButton
                            onClick={openInNewtab}
                        >
                            <OpenInNewIcon />
                        </IconButton>
                    </div>
                ) : (
                    <div className={classes.buttonsContainer}>
                        <Button
                            startIcon={<GetAppIcon />}
                            href={pdfFile}
                            download="Spencer_Connelly_Resume"
                        >
                            Download to PDF
                        </Button>
                        <Button
                            startIcon={<OpenInNewIcon />}
                            onClick={openInNewtab}
                        >
                            Export to new tab
                        </Button>
                    </div>
                )}
                <div className={classes.pdfContainer}>
                    <PdfPlayer
                        file={pdfFile}
                        title="Spencer Connelly Resume"
                        loading={<PdfPlayerSkeleton />}
                        width={width}
                    />
                </div>
            </ContentContainer>
        </div>
    )
}

export default withViewportCheck(Resume)
