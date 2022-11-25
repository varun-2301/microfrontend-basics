import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
    productionPrefix: 'auth',
})

export default ({history}) => {
    console.log('app called')
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/signup" component={Signup} />
                        <Route path="/" component={Signin} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}
