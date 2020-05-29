import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { ThemeProvider } from '@material-ui/core/styles'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'

import { useDarkMode } from '../themes'

import About from '../Pages/About'
import Footer from '../Components/Footer'
import Home from '../Pages/Home'
import NavigationBar from '../Components/NavigationBar'
import Portfolio from '../Pages/Portfolio'
import Resume from '../Pages/Resume'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '93vh'
    }
}))

function App() {
    const classes = useStyles()
    const [theme, toggleDarkMode, isLight] = useDarkMode()

    const tabs =  [
        {
            label: 'Home',
            value: '/'
        },
        {
            label: 'My Work',
            value: '/portfolio'
        },
        {
            label: 'Resume',
            value: '/resume'
        },
        {
            label: 'About Me',
            value: '/aboutme'
        }
    ]

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <div className={classes.root}>
                    <NavigationBar
                        isLight={isLight}
                        tabRoutes={tabs}
                        toggleDarkMode={toggleDarkMode}
                    />
                    <Switch>
                        <Route path="/aboutme" component={About} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/" component={Home} />
                        <Redirect path="*" to="/" />
                    </Switch>
                </div>
            </Router>
            <Footer />
        </ThemeProvider>
    )
}

export default App
