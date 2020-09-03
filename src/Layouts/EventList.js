import React from 'react';
import '../Styles/sass/eventlist.sass';
import Event from './Event';



const EventList = (props) => {

    const events = props.events.map(event => <Event key={props.id} event={event}/>)
    return ( 
        <div className="eventlist">
            {events}
        </div>
     );
}
 
export default EventList;