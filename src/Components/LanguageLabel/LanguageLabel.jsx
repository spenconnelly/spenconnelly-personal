import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import MuiTypography from '@material-ui/core/Typography'

LanguageLabel.propTypes = {
    language: PropTypes.string
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        borderRadius: 4
    },
    javaScriptLabel: {
        backgroundColor: '#F1E05A',
        color: 'black'
    }
}))

function LanguageLabel({ language }) {
    const classes = useStyles()
    const isJavaScript = language === 'JavaScript'

    return (
        <MuiTypography
            className={
                clsx(
                    classes.root,
                    isJavaScript && classes.javaScriptLabel
                )
            }
            variant="overline"
        >
            { language }
        </MuiTypography>
    )
}

export default LanguageLabel
