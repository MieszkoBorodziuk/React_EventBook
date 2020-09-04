import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import AddEvent from './AddEvent';
import EventList from './EventList';




const Page = (props) => {
    const events = props.events;
    const add = props.add;
    return (
        <>
            <Switch>
                <Route path="/" exact render={props =>
                    (<EventList {...props} events={events} />)
                } />
                <Route path="/addevent" render={props =>
                    (<AddEvent {...props} add={add} />)
                } />
            </Switch>
        </>
    );
}

export default Page;

