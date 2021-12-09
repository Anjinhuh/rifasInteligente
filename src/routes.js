import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import searchPage from './pages/landingPage.tsx'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={searchPage} />
            </Switch>
        </BrowserRouter>
    )
}