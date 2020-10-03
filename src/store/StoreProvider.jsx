import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import EventAPI from '../API/EventAPI';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [user, setUser] = useState(null);

    const fetchData = async () => {
        EventAPI.getEvents()
            .then(data => {
                setEvents(data)
            })
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <StoreContext.Provider value={{
            events,
            setEvents,
            user,
            setUser
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;