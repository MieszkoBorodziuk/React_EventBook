import React, { useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import { withProps } from 'recompose';
import icon from '../Images/iconmonstr-location-13-240.png';
import ApiKey from '../data/Key';


const { compose } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} = require("react-google-maps");



const MapWithAMarker = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${ApiKey}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props => {


    //Dodawanie markerow
    var image = {
        url: icon,

    };


    const { activeMarkerCordinates, filterevents } = useContext(StoreContext);
    const [isOpen, setIsOpen] = useState(false)


    let markers = filterevents.map(event =>
        <Marker key={event.props.event.id} icon={image} position={{ lat: event.props.event.localization[0].geometry.location.lat, lng: event.props.event.localization[0].geometry.location.lng }}
            animation={event.props.event.isActive ? window.google.maps.Animation.BOUNCE : window.google.maps.Animation} onMouseOver={() => setIsOpen(event.props.event.id)} onMouseOut={() => setIsOpen(false)}>
            {isOpen === event.props.event.id ? <InfoWindow ><span>{event.props.event.title}</span></InfoWindow> : null}
        </Marker>
    );
    
    
    return (
        <GoogleMap
            center={{ lat: activeMarkerCordinates[0], lng: activeMarkerCordinates[1] }}
            defaultZoom={11}
        >
            {markers}

        </GoogleMap>

    )
}
);

export default MapWithAMarker



