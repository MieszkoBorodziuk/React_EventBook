import React, { useEffect, useState } from 'react';
import '../Styles/sass/addevent.sass';
import SearchBox from '../Layouts/SearchBox'
import request from '../helpers/request';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../store/StoreProvider';
import { useContext } from 'react';



const AddEvent = () => {
    const { user, setUser, events, setEvents, setActiveMarkerCordinates, isEditMode, setIsEditMode,
    setIsActiveAddEvent, setIsCityFilterEvents, setIsCategoryFilterEvents} = useContext(StoreContext);
    const [title, setTitle] = useState('');
    // const [isPublic, setIsPublic] = useState(true);
    const [date, setDate] = useState([new Date().toISOString().slice(0, 10), new Date().toISOString().slice(0, 10)]);
    const [time, setTime] = useState([new Date().toISOString().slice(11, 8), new Date().toISOString().slice(11, 8)]);
    const [localization, setLocalization] = useState();
    const [id, setId] = useState();
    const [category, setCategory] = useState();


    useEffect(() => {
        if (isEditMode !== undefined) {
            setTitle(isEditMode.event.title);
            setDate(isEditMode.event.date);
            setTime(isEditMode.event.time);
            setActiveMarkerCordinates([isEditMode.event.localization[0].geometry.location.lat, isEditMode.event.localization[0].geometry.location.lng]);
            setLocalization(isEditMode.event.localization);
            setId(isEditMode.event.id)
        }
    }, [isEditMode, events, setActiveMarkerCordinates]);


    const handleChange = (e) => {
        if (e.target.type === "text") {
            setTitle(e.target.value)
            // } else if (e.target.type === "checkbox") {
            //     setIsPublic(!this.state.checked)
        } else if (e.target.type === "date") {
            setDate([e.target.value, date[1]])
        } else if (e.target.type === "time") {
            setTime([e.target.value, time[1]])
        }
    };
    const handleChangeEnd = (e) => {
        if (e.target.type === "date") {
            setDate([date[0], e.target.value])
        } else if (e.target.type === "time") {
            setTime([time[0], e.target.value])
        }
    };

    const handleChangeLocalization = (localization) => {
        setLocalization(localization);
        setActiveMarkerCordinates([localization[0].geometry.location.lat(), localization[0].geometry.location.lng()]);
    };

    const handleOnCancelClick = () => {
        setIsActiveAddEvent(false);
        setIsCityFilterEvents();
        setIsCategoryFilterEvents();
        setActiveMarkerCordinates([52.229676, 19.512229,6]);
    }

    const handleOnAddClick = async () => {
        const eventObject = {
            title,
            id,
            date,
            time,
            localization,
            category,
        }
        if (isEditMode !== undefined) {
            const { data, status } = await request.put('/events', eventObject);
            if (status === 202) {
                setEvents(data.events);
            }
        } else {
            const { data, status } = await request.post('/events', eventObject);
            if (status === 201) {
                setEvents(data.events);
                const number = data.events.length - 1;
                assigmentEventToUser(data.events[number].id)
            }
        }
        setIsEditMode(undefined);
    };

    const assigmentEventToUser = async (eventId) => {
        try {
            const { data, status } = await request.patch('/users', { login: user.login, eventId: eventId });

            if (status === 202) {
                setUser(data.user)
            }

        } catch (error) {
            console.warn(error);
        }
    }

    const handleCategorySelection = (e) => {
        const categoryElement = document.querySelectorAll(".addevent_type_category--selected")
        for (let index = 0; index < categoryElement.length; index++) {
            categoryElement[index].className = "addevent_type_category";
        }
        e.target.className = "addevent_type_category--selected"

        setCategory(e.target.innerText)
    };


    return (
        <div className="addevent-container">
            <h2 className="addevent_title">Utwórz nowe Wydarzenie</h2>
            <div className="addevent_image">Rysunek</div>
            <div className="addevent">
                <label>Nazwa wydarzenia</label>
                <input placeholder="Nazwa wydarzenia" value={title} onChange={handleChange}></input>
                <label htmlFor="date">Data rozpoczecia</label>
                <input type="date" value={date[0]} min={date[0]} onChange={handleChange}></input>
                <label htmlFor="time" >Godzina rozpoczecia</label>
                <input type="time" value={time[0]} onChange={handleChange}></input>
                <label htmlFor="date">Data zakonczenia</label>
                <input type="date" value={date[1]} min={date[0]} onChange={handleChangeEnd}></input>
                <label htmlFor="time" >Godzina zakonczenia</label>
                <input type="time" value={time[1]} onChange={handleChangeEnd}></input>
                <label htmlFor="lokazlization">Miejsce wydarzenia</label>
                <SearchBox changeLocalization={handleChangeLocalization} />
                <div className="addevent_type">
                    <div className="addevent_type_category" onClick={handleCategorySelection}>sport</div>
                    <div className="addevent_type_category" onClick={handleCategorySelection}>podroze</div>
                    <div className="addevent_type_category" onClick={handleCategorySelection}>gry</div>
                    <div className="addevent_type_category" onClick={handleCategorySelection}>rozrywka</div>
                </div>
                <button className="addevent_submitBtn" onClick={handleOnAddClick}>Dodaj</button>
                <NavLink className="addevent_cancelBtn" to="/"><button className="addevent_cancelBtn" onClick={handleOnCancelClick}>Anuluj</button></NavLink>
            </div>
        </div>
    );

}


export default AddEvent;