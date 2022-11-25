import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'

const generateClassName = createGenerateClassName({
    productionPrefix: 'container',
})

export default () => (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName} >
            <Header />
            <MarketingApp />
        </StylesProvider>
    </BrowserRouter>
)