import React from 'react'
import DescriptionIcon from '@material-ui/icons/Description'
import HomeIcon from '@material-ui/icons/Home'
import FolderIcon from '@material-ui/icons/Folder'
import PersonIcon from '@material-ui/icons/Person'
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

import About from '../pages/About'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import NavigationBar from '../components/NavigationBar'
import Portfolio from '../pages/Portfolio'
import Resume from '../pages/Resume'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: 'calc(100vh - 55px)', // 55px is height of footer
        position: 'relative'
    }
}))

const tabs =  [
    {
        label: 'Home',
        value: '/',
        icon: <HomeIcon />
    },
    {
        label: 'Projects',
        value: '/portfolio',
        icon: <FolderIcon />
    },
    {
        label: 'Resume',
        value: '/resume',
        icon: <DescriptionIcon />
    },
    {
        label: 'About Me',
        value: '/aboutme',
        icon: <PersonIcon />
    }
]

function App() {
    const classes = useStyles()
    const [theme, toggleDarkMode, isLight] = useDarkMode()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router basename={process.env.PUBLIC_URL}>
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
