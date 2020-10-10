import React from 'react';
import request from '../helpers/request';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import '../Styles/sass/event.sass';
import { NavLink } from 'react-router-dom';

const Event = (props) => {

    const { title, location, time, date, id } = props.event;
    const { setEvents, setIsEditMode } = useContext(StoreContext);

    const handleDeleteEvent = async () => {

        try {
            const { status } = await request.delete(`/courses/${id}`);

            if (status === 200) {
                setEvents(prev => prev.filter(event => event.id !== id));
            }
        } catch (error) {
            console.warn(error);
        }
    };

    const handleEditEvent = () => {
        setIsEditMode(props);

    };

    return (
        <article className="event-container">
            <div className="event">
                <div className="event_logo">Logo</div>
                <div className="event_information">
                    <div className="event_information_name">{title}</div>
                    <div className="event_information_location">{location}</div>
                    <div className="event_information_time">{time}</div>
                    <div className="event_information_date">{date}</div>
                    <NavLink to={"/addevent"} onClick={handleEditEvent}><button> Edytuj </button></NavLink>
                    <button onClick={handleDeleteEvent}>Usun</button>
                </div>
            </div>
            <div className="event_moreinformation">
                <div className="event_moreinformation_label">Weźmiesz udział:</div>
                <button>Tak</button>
                <button>Może</button>
                <button>Nie</button>
            </div>
        </article>
    );
}

export default Event;