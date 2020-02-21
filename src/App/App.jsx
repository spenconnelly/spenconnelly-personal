import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'

import About from '../pages/About'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Resume from '../pages/Resume'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/aboutme" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/home" component={Home} />
                    <Redirect path="*" to="/home" />
                </Switch>
            </Router>
        </div>
    )
}

export default App
