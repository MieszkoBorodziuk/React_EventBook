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
    const [activeMarkerCordinates, setActiveMarkerCordinates] = useState([52.229676, 21.012229]);
    const [isEditMode, setIsEditMode] = useState();
    const [isCityFilterEvents, setIsCityFilterEvents] = useState();
    const [isCategoryFilterEvents, setIsCategoryFilterEvents] = useState();
    const [isTitleFilterEvents, setIsTitleFilterEvents] = useState();
    const [animationMarkerActivation, setAnimationMarkerActivation] = useState();




    const fetchData = async () => {
        const { data } = await request.get('/courses');

        setEvents(data.courses);
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
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;