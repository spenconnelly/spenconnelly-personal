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

import About from '../Pages/About'
import Footer from '../Components/Footer'
import Home from '../Pages/Home'
import NavigationBar from '../Components/NavigationBar'
import Portfolio from '../Pages/Portfolio'
import Resume from '../Pages/Resume'

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
        icon: <HomeIcon fontSize="small" />
    },
    {
        label: 'Portfolio',
        value: '/portfolio',
        icon: <FolderIcon fontSize="small" />
    },
    {
        label: 'Resume',
        value: '/resume',
        icon: <DescriptionIcon fontSize="small" />
    },
    {
        label: 'About Me',
        value: '/aboutme',
        icon: <PersonIcon fontSize="small" />
    }
]

function App() {
    const classes = useStyles()
    const [theme, toggleDarkMode, isLight] = useDarkMode()

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
