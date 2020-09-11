import React from 'react';
import { Route, Switch,} from 'react-router-dom';
import AddEvent from './AddEvent';
import EventList from './EventList';




const Page = (props) => {
    const events = props.events;
    const add = props.add;
    const addPlaces = props.addPlaces;

    return (
        <>
            <Switch>
                <Route path="/" exact render={props =>
                    (<EventList {...props} events={events} />)
                } />
                <Route path="/addevent" render={props =>
                    (<AddEvent {...props} add={add} addPlaces={addPlaces}/>)
                } />
            </Switch>
        </>
    );
}

export default Page;

