import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'

import { useDarkMode } from '../themes'

import About from '../Pages/About'
import Home from '../Pages/Home'
import NavigationBar from '../Components/NavigationBar'
import Portfolio from '../Pages/Portfolio'
import Resume from '../Pages/Resume'

function App() {
    const [theme, toggleDarkMode, isLight] = useDarkMode()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavigationBar
                isLight={isLight}
                toggleDarkMode={toggleDarkMode}
            />
            <Router>
                <Switch>
                    <Route path="/aboutme" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/home" component={Home} />
                    <Redirect path="*" to="/home" />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
