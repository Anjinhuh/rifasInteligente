import React from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'

import searchPage from './pages/landingPage/landingPage.tsx'
import rifaPage from './pages/rifaDetails/rifa.tsx'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={searchPage} />
                <Route path="/rifa" exact component={rifaPage} />
            </Switch>
        </BrowserRouter>
    )
}