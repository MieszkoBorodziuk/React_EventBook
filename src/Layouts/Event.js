import React from 'react';
import request from '../helpers/request';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import '../Styles/sass/event.sass';
import categroyImgGame from '../Images/category/gry.jpg';
import categroyImgSport from '../Images/category/sport.png';
import categroyImgTravel from '../Images/category/podroze.jpg';
import categroyImgParty from '../Images/category/rozrywka.webp';
import { NavLink } from 'react-router-dom';

const Event = (props) => {

    const { title, localization, time, date, id, category } = props.event;
    const { setEvents, setIsEditMode, setAnimationMarkerActivation} = useContext(StoreContext);

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
    const typeCategroyImg = (category) => {
        switch (category) {
            case "sport":
                return categroyImgSport;
            case "podroze":
                return categroyImgTravel;
            case "gry":
                return categroyImgGame;
            case "rozrywka":
                return categroyImgParty;
            default: return categroyImgParty
        }
    }

    const myfunction = (e) => {
        props.event.isActive = true
        setAnimationMarkerActivation(true)
    };
    
    const myfunctio = (e) => {
        delete props.event.isActive 
        setAnimationMarkerActivation(false)
    };
    

    return (

        <article className="event-container">
            <div className="event" onMouseEnter={myfunction} onMouseLeave={myfunctio}>
                <div className="eventSide"></div>
                <img className="event_logo" src={typeCategroyImg(category)} alt=""></img>
                <div className="event_information">
                    <div className="event_information_name">{title}</div>
                    <div className="event_information_location">{localization[0].name}</div>
                    <div className="event_information_time">{time[0]} - {time[1]}</div>
                    <div className="event_information_date">{date[0]}</div>
                    {props.showMyEvent ?
                        [<NavLink to={"/addevent"} onClick={handleEditEvent}><button> Edytuj </button></NavLink>, <button onClick={handleDeleteEvent}>Usun</button>]
                        : null}
                </div>
            </div>
            {/* {Boolean(user) ?
                <div className="event_moreinformation">
                    <div className="event_moreinformation_label">Weźmiesz udział:</div>
                    <button>Tak</button>
                    <button>Może</button>
                    <button>Nie</button>
                </div>
                : null} */}
        </article>
    );
}

export default Event;