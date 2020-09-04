import React from 'react';
import '../Styles/sass/eventlist.sass';
import Event from './Event';



const EventList = (props) => {

    props.events.sort((a, b) => {
        return ((new Date(a.date).getTime() + parseInt(a.time.replace(":", "")))) - ((new Date(b.date).getTime() + parseInt(b.time.replace(":", ""))))
    });
    const events = props.events.map(event => <Event key={event.id} event={event} />);

    return (
        <div className="eventlist">
            <h3 className="eventlist_title">Lista wydarzeń</h3>
            {events}
        </div>
    );
}

export default EventList;