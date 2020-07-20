import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import HomeNew from '../pages/HomeNew'
import NotFound from '../pages/NotFound'

const App = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/new" component={HomeNew}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
)

export default App