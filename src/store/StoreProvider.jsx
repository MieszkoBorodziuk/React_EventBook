import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import request from '../helpers/request';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [user, setUser] = useState(null);

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
            setUser
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;