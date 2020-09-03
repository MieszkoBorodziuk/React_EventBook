import React from 'react';
import '../Styles/sass/event.sass';

const Event = (props) => {

    const { name, location, time, date } = props.event;

    return (
        <div className="Event-container">
            <div className="Event">
                <div className="Event_logo">Logo</div>
                <div className="Event_information">
                    <div className="Event_information_name">{name}</div>
                    <div className="Event_information_location">{location}</div>
                    <div className="Event_information_time">{time}</div>
                    <div className="Event_information_date">{date}</div>
                </div>
            </div>

        </div>
    );
}

export default Event;