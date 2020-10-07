import React from 'react';
import '../Styles/sass/event.sass';

const Event = (props) => {

    const { name, location, time, date } = props.event;
    

    return (
        <div className="event-container">
            <div className="event">
                <div className="event_logo">Logo</div>
                <div className="event_information">
                    <div className="event_information_name">{name}</div>
                    <div className="event_information_location">{location}</div>
                    <div className="event_information_time">{time}</div>
                    <div className="event_information_date">{date}</div>
                </div>
            </div>
            <div className="event_moreinformation">
            <button className="event_moreinformation_detail_btn">Więcej</button>
            <div className="event_moreinformation_label">Weźmiesz udział:</div>
            <button>Tak</button>
            <button>Może</button>
            <button>Nie</button>
            </div>
        </div>
    );
}

export default Event;