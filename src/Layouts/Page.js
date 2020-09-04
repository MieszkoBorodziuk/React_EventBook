import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AddEventPage from '../Pages/AddEventPage'
import EventListPage from '../Pages/AddEventPage'
import ErrorPage from '../Pages/AddEventPage'


const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={AddEventPage} />
                <Route path="/eventlist" component={EventListPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page; 