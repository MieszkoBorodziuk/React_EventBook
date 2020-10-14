import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import Event from './Event';
import '../Styles/sass/eventlist.sass';


export const EventList = () => {
    const { events, isCityFilterEvents, isCategoryFilterEvents } = useContext(StoreContext);
    const [typeOfFilter, setTypeOfFilter] = useState();


    events.sort((a, b) => {
        return ((new Date(a.date[0]).getTime() + parseInt(a.time[0].replace(":", "")))) - ((new Date(b.date[0]).getTime() + parseInt(b.time[0].replace(":", ""))))
    });

    useEffect(() => {
        setTypeOfFilter([isCityFilterEvents, isCategoryFilterEvents])

    }, [isCityFilterEvents, isCategoryFilterEvents]);

    let eventsElements = events.map(event => <Event key={event.id} event={event} />);
    
    const FilterEventsElements = (typeOfFilter) => {

        if (isCityFilterEvents) {
            eventsElements = eventsElements.filter(event => event.props.event.localization[0].name === typeOfFilter[0])
        }
        if (isCategoryFilterEvents) {
            eventsElements = eventsElements.filter(event => event.props.event.category === typeOfFilter[1])
        } 
        return eventsElements
    };

    return (
        <section className="eventlist">
            <h3 className="eventlist_title">Lista wydarzeń</h3>
            {FilterEventsElements(typeOfFilter)}
        </section>
    );
}

export default EventList;