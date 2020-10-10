import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';
import icon from '../Images/iconmonstr-location-13-240.png'
const google = window.google;

const { compose } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require("react-google-maps");



const MapWithAMarker = compose(
    withScriptjs,
    withGoogleMap
)(props => {
    
    //Dodawanie markerow
    var image = {
        url: icon,
        scaledSize: new google.maps.Size(30, 30)};
        
    const { events, activeMarkerCordinates } = useContext(StoreContext);
    const markers = events.map(event => <Marker icon={image} position={{ lat: event.localization[0].geometry.location.lat, lng:  event.localization[0].geometry.location.lng}} />);
    
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



