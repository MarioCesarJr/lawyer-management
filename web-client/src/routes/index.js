import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/Auth/SignIn';

import Dashboard from '~/pages/Dashboard';

import Schedule from '~/pages/Schedule';

import Customers from '~/pages/Customers';
import NewCustomer from '~/pages/Customers/New';
import Info from '~/pages/Customers/Info';

import Lawsuits from '~/pages/Lawsuits';
import NewLawsuit from '~/pages/Lawsuits/New';

import Contracts from '~/pages/Contracts';
import NewContract from '~/pages/Contracts/New';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/dashboard" component={Dashboard} isPrivate />

            <Route path="/schedule" component={Schedule} isPrivate />

            <Route path="/customers" component={Customers} isPrivate />
            <Route path="/new-customer" component={NewCustomer} isPrivate />
            <Route path="/info-customer" component={Info} isPrivate />

            <Route path="/lawsuits" component={Lawsuits} isPrivate />
            <Route path="/new-lawsuit" component={NewLawsuit} isPrivate />

            <Route path="/contracts" component={Contracts} isPrivate />
            <Route path="/new-contract" component={NewContract} isPrivate />
        </Switch>
    );
}
