import React, { Suspense } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ContentContainer from '../../Components/ContentContainer'
import MuiBox from '@material-ui/core/Box'
import MuiTypography from '@material-ui/core/Typography'
import MuiZoom from '@material-ui/core/Zoom'
import MuiSkeleton from '@material-ui/lab/Skeleton'

import { useGithubRepos } from '../../apis'

const RepoCard = React.lazy(() => import('../../Components/RepoCard'))

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(25)
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    errorContainer: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },
    repoSkeleton: {
        width: '100%',
        height: 50,
        marginTop: theme.spacing(4)
    },
    reposContainer: {},
    cardContainer: {
        marginBottom: theme.spacing(12)
    }
}))

function Portfolio() {
    const classes = useStyles()
    const [repos, isLoading, error] = useGithubRepos()

    return (
        <div className={classes.root}>
            <ContentContainer className={classes.contentContainer}>
                <MuiBox width="100%" px={{ xs: 4, sm: 4, md: 0 }}>
                    { isLoading ? (
                        <>
                            <MuiSkeleton className={classes.repoSkeleton} variant="rect" />
                            <MuiSkeleton className={classes.repoSkeleton} variant="rect" />
                            <MuiSkeleton className={classes.repoSkeleton} variant="rect" />
                            <MuiSkeleton className={classes.repoSkeleton} variant="rect" />
                            <MuiSkeleton className={classes.repoSkeleton} variant="rect" />
                        </>
                    ) : (
                        <>
                            { (error || !repos.length) ? (
                                <div className={classes.errorContainer}>
                                    <MuiTypography variant="h3">
                                        No Respositories Available
                                    </MuiTypography>
                                </div>
                            ) : (
                                <>
                                    { repos.map((repo, index) => {
                                        return (
                                            <div key={index} className={classes.cardContainer}>
                                                <MuiZoom in style={{ transitionDelay: '500ms' }}>
                                                    <Suspense fallback={<MuiSkeleton className={classes.repoSkeleton} variant="rect" />}>
                                                        <RepoCard
                                                            name={repo.name}
                                                            description={repo.description}
                                                            language={repo.language}
                                                            url={repo.html_url}
                                                        />
                                                    </Suspense>
                                                </MuiZoom>
                                            </div>
                                        )
                                    })}
                                </>
                            )}
                        </>
                    )}
                </MuiBox>
            </ContentContainer>
        </div>
    )
}

export default Portfolio
