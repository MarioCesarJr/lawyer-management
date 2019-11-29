import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/Auth/SignIn';

import Dashboard from '~/pages/Dashboard';

import Customers from '~/pages/Customers';
import NewCustomer from '~/pages/Customers/New';

import Lawsuits from '~/pages/Lawsuits';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/customers" component={Customers} isPrivate />
            <Route path="/new-customer" component={NewCustomer} isPrivate />
            <Route path="/lawsuits" component={Lawsuits} isPrivate />
        </Switch>
    );
}
