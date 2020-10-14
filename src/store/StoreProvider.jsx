import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import request from '../helpers/request';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [user, setUser] = useState(null);
    const [activeMarkerCordinates, setActiveMarkerCordinates] = useState([52.229675, 21.012230]);
    const [isEditMode, setIsEditMode] = useState();
    const [isCityFilterEvents, setIsCityFilterEvents] = useState();
    const [isCategoryFilterEvents, setIsCategoryFilterEvents] = useState();


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
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;