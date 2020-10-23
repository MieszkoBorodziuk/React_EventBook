import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import request from '../helpers/request';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [filterevents, setFilterEvents] = useState(events);
    const [user, setUser] = useState(null);
    const [activeMarkerCordinates, setActiveMarkerCordinates] = useState([52.229676, 19.512229, 6]);
    const [isEditMode, setIsEditMode] = useState();
    const [isCityFilterEvents, setIsCityFilterEvents] = useState();
    const [isCategoryFilterEvents, setIsCategoryFilterEvents] = useState();
    const [isTitleFilterEvents, setIsTitleFilterEvents] = useState();
    const [animationMarkerActivation, setAnimationMarkerActivation] = useState();
    const [isActiveAddEvent, setIsActiveAddEvent] = useState(false);




    const fetchData = async () => {
        const { data } = await request.get('/events');

        setEvents(data.events);
    };



    useEffect(() => {
        fetchData();
    }, []);

    return (
        <StoreContext.Provider value={{
            events,
            setEvents,
            filterevents,
            setFilterEvents,
            user,
            setUser,
            activeMarkerCordinates,
            setActiveMarkerCordinates,
            isEditMode,
            setIsEditMode,
            isCityFilterEvents,
            setIsCityFilterEvents,
            isCategoryFilterEvents,
            setIsCategoryFilterEvents,
            isTitleFilterEvents,
            setIsTitleFilterEvents,
            animationMarkerActivation,
            setAnimationMarkerActivation,
            isActiveAddEvent,
            setIsActiveAddEvent,
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;