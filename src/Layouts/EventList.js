import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import Event from './Event';
import '../Styles/sass/eventlist.sass';


export const EventList = () => {
    const { events } = useContext(StoreContext);

    events.sort((a, b) => {
        return ((new Date(a.date).getTime() + parseInt(a.time.replace(":", "")))) - ((new Date(b.date).getTime() + parseInt(b.time.replace(":", ""))))
    });

    const eventsElements = events.map(event => <Event key={event.id} event={event} />);

    return (
        <section className="eventlist">
            <h3 className="eventlist_title">Lista wydarzeń</h3>
            {eventsElements}
        </section>
    );
}

export default EventList;