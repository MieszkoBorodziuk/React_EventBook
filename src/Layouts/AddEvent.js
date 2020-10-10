import React, { useEffect, useState } from 'react';
import '../Styles/sass/addevent.sass';
import SearchBox from '../Layouts/SearchBox'
import request from '../helpers/request';
import { StoreContext } from '../store/StoreProvider';
import { useContext } from 'react';

const AddEvent = () => {
    const { events, setEvents, setActiveMarkerCordinates, isEditMode, setIsEditMode } = useContext(StoreContext);
    
    const [title, setTitle] = useState('');
    // const [isPublic, setIsPublic] = useState(true);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [time, setTime] = useState(new Date().toISOString().slice(11, 8));
    const [localization, setLocalization] = useState();
    const [id, setId] = useState();
    
    useEffect(() => {
        if(isEditMode !== undefined){
            setTitle(isEditMode.event.title);
            setDate(isEditMode.event.date);
            setTime(isEditMode.event.time);
            setActiveMarkerCordinates([isEditMode.event.localization[0].geometry.location.lat,isEditMode.event.localization[0].geometry.location.lng]);
            setLocalization(isEditMode.event.localization);
            setId(isEditMode.event.id)
        }   
    }, [isEditMode, events,setActiveMarkerCordinates]);

    
    const handleChange = (e) => {
        if (e.target.type === "text") {
            setTitle(e.target.value)
            // } else if (e.target.type === "checkbox") {
            //     setIsPublic(!this.state.checked)
        } else if (e.target.type === "date") {
            setDate(e.target.value)
        } else if (e.target.type === "time") {
            setTime(e.target.value)
        }
    };

    const handleChangeLocalization = (localization) => {
        setLocalization(localization);
        setActiveMarkerCordinates([localization[0].geometry.location.lat(), localization[0].geometry.location.lng()]);
    };



    const handleClick = async () => {
        const eventObject = {
            title,
            id,
            date,
            time,
            localization,
        }
        if (isEditMode !== undefined) {
            const { data, status } = await request.put('/courses', eventObject);
            if (status === 202) {
                setEvents(data.courses);
            }
        } else {
            const { data, status } = await request.post('/courses', eventObject);
            if (status === 201) {
                setEvents(data.courses);
            }
        }
        setIsEditMode(undefined);
    };



    return (
        <div className="addevent-Bcontainer">
            <h2 className="addevent_title">Utwórz nowe Wydarzenie</h2>
            <div className="addevent_image">Rysunek</div>
            <div className="addevent-Scontainer">
                <label>Dodaj zdjęcie</label>
                <input type="file" name="addevent_addimage_btn"></input>
                <label>Nazwa wydarzenia</label>
                <input placeholder="Nazwa wydarzenia" value={title} onChange={handleChange}></input>
                <label htmlFor="date">Data rozpeczecia</label>
                <input type="date" value={date} min={date} onChange={handleChange}></input>
                <label htmlFor="time" >Godzina rozpoczecia</label>
                <input type="time" value={time} onChange={handleChange}></input>
                <label htmlFor="date">Data zakaczenia</label>
                <input type="date" value={date} min={date} onChange={handleChange}></input>
                <label htmlFor="time" >Godzina zakaczenia</label>
                <input type="time" value={time} onChange={handleChange}></input>
                <label htmlFor="lokazlization">Miejsce wydarzenia</label>
                <SearchBox changeLocalization={handleChangeLocalization} />
                {/* <label htmlFor="public">Publiczne</label>
                <input type="checkbox" checked={isPublic} id="public" onChange={handleChange}></input>
                <div className="addevent_type">
                    <div>rozrywka</div>
                    <div>sport</div>
                    <div>podróze</div>
                    <div>gry</div>
                </div> */}
                <button className="confirm_addevent_btn" onClick={handleClick}>Dodaj</button>
            </div>
        </div>
    );

}


export default AddEvent;