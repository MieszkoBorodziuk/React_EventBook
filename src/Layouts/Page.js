import React from 'react';
import { Redirect, Route, Switch, } from 'react-router-dom';
import AddEvent from './AddEvent';
import EventList from './EventList';
import UserEvents from './UserEvents';


const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() =>
                    <EventList />
                } />
                <Route path="/addevent" render={() =>
                    <AddEvent />
                } />
                <Route path="/userevent" render={() =>
                    <UserEvents />
                } />
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default Page;

