import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import MuiTypography from '@material-ui/core/Typography'

LanguageLabel.propTypes = {
    language: PropTypes.oneOf([
        'JavaScript',
        'CSS',
        'HTML',
        'ReactJS',
        'NodeJS',
        'SQL',
        'Java',
        'Python',
        'Springboot'
    ])
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'inline-block',
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        borderRadius: 4
    },
    javaScriptLabel: {
        backgroundColor: '#F1E05A',
        color: 'black'
    },
    cssLabel: {
        backgroundColor: 'pink',
        color: 'black'
    },
    htmlLabel: {
        backgroundColor: 'red',
        color: 'white'
    },
    reactLabel: {
        backgroundColor: '#61DBFB',
        color: 'black'
    },
    nodeLabel: {
        backgroundColor: 'green',
        color: 'white'
    },
    sqlLabel: {
        backgroundColor: '#0013ff',
        color: 'white'
    },
    javaLabel: {
        backgroundColor: 'black',
        color: 'white'
    },
    pythonLabel: {
        backgroundColor: 'orange',
        color: 'black'
    },
    springbootLabel: {
        backgroundColor: '#05fa39',
        color: 'black'
    }
}))

function LanguageLabel({ language }) {
    const classes = useStyles()
    const isJavaScript = language === 'JavaScript'
    const isCss = language === 'CSS'
    const isHtml = language === 'HTML'
    const isReact = language === 'ReactJS'
    const isNode = language === 'NodeJS'
    const isSQL = language === 'SQL'
    const isJava = language === 'Java'
    const isPython = language === 'Python'
    const isSpringBoot = language === 'Springboot'

    return (
        <MuiTypography
            className={
                clsx(
                    classes.root,
                    isJavaScript && classes.javaScriptLabel,
                    isSQL && classes.sqlLabel,
                    isCss && classes.cssLabel,
                    isHtml && classes.htmlLabel,
                    isReact && classes.reactLabel,
                    isNode && classes.nodeLabel,
                    isSQL && classes.sqlLabel,
                    isJava && classes.javaLabel,
                    isPython && classes.pythonLabel,
                    isSpringBoot && classes.springbootLabel
                )
            }
            variant="overline"
        >
            { language }
        </MuiTypography>
    )
}

export default LanguageLabel
