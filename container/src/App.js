import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import Header from './components/Header'
import Progress from './components/Progress'

const MarketingApp = lazy(() => import('./components/MarketingApp'))
const AuthApp = lazy(() => import('./components/AuthApp'))
const DashboardApp = lazy(() => import('./components/DashboardApp')) 

const generateClassName = createGenerateClassName({
    productionPrefix: 'container',
})

const history = createBrowserHistory()

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {
        if(isSignedIn)
            history.push('/dashboard')
    },[isSignedIn])

    return (
        <Router history={history}>
            <StylesProvider generateClassName={generateClassName} >
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthApp onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route exact path="/dashboard">
                            {!isSignedIn && <Redirect to='/' />}
                            <DashboardApp />
                        </Route>
                        <Route path="/" component={MarketingApp} />
                    </Switch>
                </Suspense>
            </StylesProvider>
        </Router>
    )
}