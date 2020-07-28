import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeContainer from '../pages/HomeContainer'
import BlogNewContainer from '../pages/BlogNewContainer'
import NotFound from '../pages/NotFound'

const App = () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={HomeContainer}/>
                <Route exact path="/new" component={BlogNewContainer}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
)

export default App