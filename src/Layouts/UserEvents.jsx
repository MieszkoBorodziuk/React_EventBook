import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import Event from './Event';
import '../Styles/sass/eventlist.sass';


const UserEvents = () => {
    const { events, user } = useContext(StoreContext);

    const myEvents = events.filter(event => user.events.includes(event.id));

    const eventsElements = myEvents.map(event => <Event key={event.id} event={event} showMyEvent={true}/>);

    return (
        <section className="eventlist">
            <h3 className="eventlist_title">Lista wydarzeń</h3>
            {eventsElements}
        </section>
    );
}

export default UserEvents;