import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import Event from './Event';
import '../Styles/sass/eventlist.sass';


export const EventList = () => {
    const { events } = useContext(StoreContext);

    events.sort((a, b) => {
        return ((new Date(a.date[0]).getTime() + parseInt(a.time[0].replace(":", "")))) - ((new Date(b.date[0]).getTime() + parseInt(b.time[0].replace(":", ""))))
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