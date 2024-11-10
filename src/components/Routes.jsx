import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Leads from '../pages/Leads'
import Contracts from '../pages/Contracts'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/leads' component={Leads}/>
            <Route path='/contracts' component={Contracts}/>
        </Switch>
    )
}

export default Routes
