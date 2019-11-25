import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '~/pages/Dashboard';
import Customers from '~/pages/Customers';
import Lawsuits from '~/pages/Lawsuits';

export default function Routes() {
    return (
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/customers" component={Customers} />
            <Route path="/lawsuits" component={Lawsuits} />
        </Switch>
    );
}
